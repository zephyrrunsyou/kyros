// Deploy this file as the kyros-spotify Cloudflare Worker.
// Secrets: SPOTIFY_CLIENT_SECRET, SETUP_PASSWORD
// KV namespace binding: SPOTIFY_KV
const CLIENT_ID = "aa68236b28894cfa8ca76faca20732c9";
const ORIGIN = "https://kyros-spotify.societynuisance.workers.dev";
const REDIRECT = `${ORIGIN}/callback`;
const SITE = "https://kyross.dev";
let accessToken = "";
let expiresAt = 0;
let snapshot = null;
let snapshotUntil = 0;
let pending = null;
let retryAt = 0;

function page(body, status = 200, headers = {}) {
  return new Response(`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark"><title>kyros · Spotify</title>
<style>
  :root { color-scheme: dark; font-family: "Onest", system-ui, -apple-system, "Segoe UI", sans-serif; background: #09090b; color: #ededed; }
  * { box-sizing: border-box; }
  body { margin: 0; min-height: 100svh; display: grid; place-items: center; padding: 32px 20px;
    background: radial-gradient(ellipse at 50% 25%, #1b1b20 0, #09090b 65%); line-height: 1.6; -webkit-font-smoothing: antialiased; }
  .shell { width: 100%; max-width: 480px; }
  .brand { display: inline-flex; align-items: center; gap: 10px; margin: 0 0 20px 4px; color: #b9b9c2; font-size: 13px; letter-spacing: .02em; text-decoration: none; }
  .brand::before { content: ""; width: 7px; height: 7px; background: #cfcfd8; border-radius: 50%; box-shadow: 0 0 16px #cfcfd830; }
  main { padding: clamp(24px, 6vw, 36px); border: 1px solid #ffffff16; border-radius: 20px;
    background: linear-gradient(145deg, #ffffff08, #ffffff03); box-shadow: 0 24px 80px #00000040, inset 0 1px #ffffff06; }
  h1 { margin: 0 0 12px; font-size: clamp(23px, 5vw, 28px); font-weight: 600; line-height: 1.25; letter-spacing: -.035em; }
  p { margin: 0 0 24px; color: #b5b5bf; font-size: 14px; overflow-wrap: anywhere; }
  p:last-child { margin-bottom: 0; }
  form { display: grid; gap: 12px; }
  label { font-size: 13px; font-weight: 500; color: #d5d5dd; }
  input, button { width: 100%; min-height: 48px; border-radius: 12px; font: inherit; font-size: 14px; }
  input { padding: 12px 14px; color: #ededed; background: #09090bb3; border: 1px solid #ffffff26; }
  input::placeholder { color: #93939f; }
  button { margin-top: 4px; padding: 12px 18px; cursor: pointer; color: #111114; background: #ededf2; border: 1px solid #ffffff40; font-weight: 600; }
  button:hover { background: #fff; }
  a { color: #ededed; text-underline-offset: 4px; }
  :focus-visible { outline: 2px solid #cfcfd8; outline-offset: 4px; }
  footer { margin: 18px 4px 0; color: #a0a0ad; font-size: 12px; }
</style></head><body><div class="shell"><a class="brand" href="${SITE}">kyros / music</a><main>${body}</main><footer>Spotify connection · kyross.dev</footer></div></body></html>`, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store", "Referrer-Policy": "no-referrer", "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; form-action 'self' https://accounts.spotify.com; frame-ancestors 'none'; base-uri 'none'", ...headers },
  });
}

async function tokenRequest(env, params) {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { Authorization: `Basic ${btoa(`${CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`)}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(params),
  });
  if (!res.ok) throw new Error("Spotify authorization failed. Check your app settings or reconnect.");
  return res.json();
}

async function readPlayback(env) {
  if (Date.now() < retryAt) throw new Error("Spotify is busy. Try again later.");
  if (!accessToken || Date.now() >= expiresAt) {
    const refresh = await env.SPOTIFY_KV.get("refresh_token");
    if (!refresh) throw new Error("Spotify has not been connected yet.");
    const tokens = await tokenRequest(env, { grant_type: "refresh_token", refresh_token: refresh });
    accessToken = tokens.access_token;
    expiresAt = Date.now() + Math.max(0, tokens.expires_in - 60) * 1000;
    if (tokens.refresh_token) await env.SPOTIFY_KV.put("refresh_token", tokens.refresh_token);
  }
  const res = await fetch("https://api.spotify.com/v1/me/player", { headers: { Authorization: `Bearer ${accessToken}` } });
  if (res.status === 401) { accessToken = ""; throw new Error("Spotify connection expired. Try again."); }
  if (res.status === 429) {
    retryAt = Date.now() + Math.max(5, Number(res.headers.get("Retry-After")) || 30) * 1000;
    throw new Error("Spotify is busy. Try again later.");
  }
  if (res.status === 204) return { active: false };
  if (!res.ok) throw new Error("Playback status is temporarily unavailable.");
  const data = await res.json();
  const item = data.item;
  if (!item || data.currently_playing_type !== "track") return { active: false };
  // Publish only track information, never account/device data or tokens.
  return { active: true, playing: !!data.is_playing, progress: data.progress_ms || 0, duration: item.duration_ms || 0,
    observedAt: Date.now(), id: item.id, title: item.name,
    artist: (item.artists || []).map(a => a.name).join(", "), album: item.album?.name || "",
    art: item.album?.images?.[0]?.url || "", url: item.external_urls?.spotify || "" };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!env.SPOTIFY_CLIENT_SECRET || !env.SETUP_PASSWORD || !env.SPOTIFY_KV) {
      return page("<h1>Finish Worker setup</h1><p>Add the SPOTIFY_CLIENT_SECRET and SETUP_PASSWORD secrets and the SPOTIFY_KV binding in Cloudflare.</p>", 503);
    }
    if (url.pathname === "/connect") {
      if (await env.SPOTIFY_KV.get("refresh_token")) return page("<h1>Spotify is connected</h1><p>To reconnect, delete the refresh_token entry from SPOTIFY_KV in Cloudflare first.</p>");
      if (request.method === "GET") return page('<h1>Connect Spotify to kyros</h1><p>Show what you’re listening to, including when you pause. Enter the setup password you saved in Cloudflare to continue.</p><form method="post"><label for="setup-password">Setup password</label><input id="setup-password" type="password" name="password" placeholder="Enter your setup password" autocomplete="current-password" required><button type="submit">Connect Spotify <span aria-hidden="true">↗</span></button></form>');
      if (request.method !== "POST") return page("Method not allowed", 405);
      const form = await request.formData();
      if (form.get("password") !== env.SETUP_PASSWORD) return page("<p>Incorrect setup password.</p>", 403);
      const state = crypto.randomUUID();
      await env.SPOTIFY_KV.put(`state:${state}`, "valid", { expirationTtl: 600 });
      const auth = new URL("https://accounts.spotify.com/authorize");
      auth.search = new URLSearchParams({ client_id: CLIENT_ID, response_type: "code", redirect_uri: REDIRECT, scope: "user-read-playback-state", state }).toString();
      // Use GET for Spotify authorization; never forward the password POST body.
      return new Response(null, { status: 303, headers: { Location: auth.href, "Cache-Control": "no-store", "Set-Cookie": `spotify_state=${state}; HttpOnly; Secure; SameSite=Lax; Path=/callback; Max-Age=600` } });
    }
    if (url.pathname === "/callback") {
      const state = url.searchParams.get("state");
      const cookie = request.headers.get("Cookie") || "";
      const cookieState = cookie.split(";").map(x => x.trim()).find(x => x.startsWith("spotify_state="))?.slice(14);
      if (!state || state !== cookieState || !await env.SPOTIFY_KV.get(`state:${state}`)) return page("<p>Connection session expired. Start again at /connect.</p>", 403);
      await env.SPOTIFY_KV.delete(`state:${state}`);
      if (url.searchParams.has("error") || !url.searchParams.get("code")) return page("<p>Spotify authorization was cancelled. You can try again at /connect.</p>", 400);
      try {
        if (await env.SPOTIFY_KV.get("refresh_token")) return page("<p>Spotify is already connected.</p>", 409);
        const tokens = await tokenRequest(env, { grant_type: "authorization_code", code: url.searchParams.get("code"), redirect_uri: REDIRECT });
        if (!tokens.refresh_token) throw new Error("No refresh token returned.");
        await env.SPOTIFY_KV.put("refresh_token", tokens.refresh_token);
        accessToken = "";
        snapshot = null;
        return page(`<h1>Spotify connected</h1><p>Your credentials are stored privately in Cloudflare. You can close this tab.</p><a href="${SITE}">Return to kyros</a>`, 200, { "Set-Cookie": "spotify_state=; HttpOnly; Secure; SameSite=Lax; Path=/callback; Max-Age=0" });
      } catch { return page("<p>Could not connect Spotify. Check the Client Secret and redirect URI, then try /connect again.</p>", 502); }
    }
    if (url.pathname === "/now-playing") {
      const headers = { "Access-Control-Allow-Origin": SITE, "Content-Type": "application/json", "Cache-Control": "no-store" };
      if (request.method === "OPTIONS") return new Response(null, { headers: { ...headers, "Access-Control-Allow-Methods": "GET" } });
      if (request.method !== "GET") return new Response(null, { status: 405, headers });
      try {
        if (!snapshot || Date.now() >= snapshotUntil) {
          if (!pending) pending = readPlayback(env).then(data => { snapshot = data; snapshotUntil = Date.now() + 5000; }).finally(() => { pending = null; });
          await pending;
        }
        return new Response(JSON.stringify({ ...snapshot, servedAt: Date.now() }), { headers });
      } catch { return new Response(JSON.stringify({ error: "Playback unavailable" }), { status: 503, headers }); }
    }
    return page('<h1>kyros Spotify service</h1><p>Owner setup: <a href="/connect">connect Spotify</a>.</p>');
  },
};
