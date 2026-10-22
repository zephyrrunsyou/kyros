import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import worker from "./spotify-worker.mjs";

test("owner authorization, private storage, and public paused metadata", async () => {
  const values = new Map();
  const env = { SPOTIFY_CLIENT_SECRET: "test-secret", SETUP_PASSWORD: "test-password",
    SPOTIFY_KV: { get: async k => values.get(k), put: async (k, v) => values.set(k, v), delete: async k => values.delete(k) } };
  const base = "https://kyros-spotify.societynuisance.workers.dev";
  const originalFetch = globalThis.fetch;
  let tokenCalls = 0;
  globalThis.fetch = async url => {
    if (url.includes("/api/token")) {
      tokenCalls++;
      return Response.json({ access_token: "private-access", refresh_token: "private-refresh", expires_in: 3600 });
    }
    return Response.json({ is_playing: false, progress_ms: 42000, currently_playing_type: "track",
      device: { name: "private-device" }, item: { id: "track", name: "Song", duration_ms: 180000,
        artists: [{ name: "Artist" }], album: { name: "Album", images: [] }, external_urls: {} } });
  };
  try {
    const formPage = await worker.fetch(new Request(`${base}/connect`), env);
    const policy = formPage.headers.get("Content-Security-Policy");
    assert.match(policy, /form-action 'self' https:\/\/accounts\.spotify\.com;/);
    assert.ok(!policy.includes("form-action *"));
    let res = await worker.fetch(new Request(`${base}/connect`, { method: "POST", body: new URLSearchParams({ password: "wrong" }) }), env);
    assert.equal(res.status, 403);
    res = await worker.fetch(new Request(`${base}/connect`, { method: "POST", body: new URLSearchParams({ password: "test-password" }) }), env);
    assert.equal(res.status, 303);
    assert.equal(new URL(res.headers.get("Location")).origin, "https://accounts.spotify.com");
    assert.ok(!res.headers.get("Location").includes("test-password"));
    const state = new URL(res.headers.get("Location")).searchParams.get("state");
    const callback = `${base}/callback?state=${state}&code=test-code`;
    res = await worker.fetch(new Request(callback), env);
    assert.equal(res.status, 403);
    assert.equal(tokenCalls, 0);
    res = await worker.fetch(new Request(callback, { headers: { Cookie: `spotify_state=${state}` } }), env);
    assert.equal(res.status, 200);
    assert.equal(values.get("refresh_token"), "private-refresh");
    assert.ok(!(await res.text()).includes("private-refresh"));
    res = await worker.fetch(new Request(callback, { headers: { Cookie: `spotify_state=${state}` } }), env);
    assert.equal(res.status, 403, "state is single use");
    res = await worker.fetch(new Request(`${base}/now-playing`), env);
    const body = await res.text();
    assert.equal(res.headers.get("Access-Control-Allow-Origin"), "https://kyross.dev");
    const data = JSON.parse(body);
    assert.equal(data.playing, false);
    assert.equal(data.progress, 42000);
    assert.equal(data.title, "Song");
    assert.ok(!body.includes("private-"));
    res = await worker.fetch(new Request(`${base}/connect`), env);
    assert.match(await res.text(), /already connected|is connected/);
  } finally { globalThis.fetch = originalFetch; }
});

test("player freezes while paused and advances after resume", () => {
  const source = readFileSync(new URL("../script.js", import.meta.url), "utf8");
  const positionCode = source.slice(source.indexOf("function spPosition()"), source.indexOf("function spSetLoop()"));
  const SP = { paused: true, track: { direct: true, progress: 42000, duration: 180000, observedAt: Date.now() - 5000 } };
  const context = vm.createContext({ SP, Date });
  vm.runInContext(positionCode, context);
  assert.equal(vm.runInContext("spPosition().pos", context), 42000);
  SP.paused = false;
  assert.ok(vm.runInContext("spPosition().pos", context) >= 47000);
  SP.track.progress = 180000;
  assert.equal(vm.runInContext("spPosition().pos", context), 180000);
});
