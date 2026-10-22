# Spotify connection for kyros

The website stays on GitHub Pages. The Worker publishes only playback metadata at
`https://kyros-spotify.societynuisance.workers.dev/now-playing`.

## Cloudflare dashboard setup

1. Open **Workers & Pages → kyros-spotify → Edit code**.
2. Replace the starter code with all of `spotify-worker.mjs`, then deploy.
3. In the Worker's **Settings → Variables and Secrets**, add these as **Secret**:
   - `SPOTIFY_CLIENT_SECRET`: the Client Secret from the Spotify app.
   - `SETUP_PASSWORD`: a long, randomly generated password used only for setup.
4. Under **Storage & databases → KV**, create a namespace named `kyros-spotify`.
5. In the Worker's **Bindings**, add a **KV namespace** binding with variable name
   `SPOTIFY_KV`, selecting that namespace. Deploy the updated configuration if prompted.
6. In Spotify's app settings, set the redirect URI to exactly:
   `https://kyros-spotify.societynuisance.workers.dev/callback`.
7. Visit `https://kyros-spotify.societynuisance.workers.dev/connect`, enter your
   `SETUP_PASSWORD`, and sign into your own Spotify account to approve read access.
8. The confirmation page says **Spotify connected**. Check `/now-playing` while
   playing music, then pause and check again. The `playing` value should change.
9. Publish the updated `script.js`, `styles.css`, and `index.html` through your
   normal GitHub Pages workflow. Visitors do not need to sign in.

Never put the Client Secret, setup password, or refresh token in the repository.
The refresh token is saved privately in KV; the connection screen disables itself
once a token exists. To reconnect, delete the `refresh_token` KV entry first.

The website checks playback every five seconds while visible. The Worker caches
the result for five seconds per running instance. Playback changes may therefore
take around ten seconds to appear. If the service is unavailable, existing Discord
presence updates can take over after twenty seconds. Spotify API eligibility,
account restrictions, and rate limits still apply. This integration reads status;
it does not control Spotify playback.

## Local verification

Run `node --test cloudflare/spotify-worker.test.mjs` and `node --check script.js`.
Live authorization and playback require the Cloudflare secrets and binding above.
