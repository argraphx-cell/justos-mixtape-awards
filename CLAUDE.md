# The Justo's Mixtape Awards — Session Brief

## Project
Full-stack Cloudflare Workers + Pages site.

**Architecture:**
- Cloudflare Pages serves React SPA (`dist/`) — project: `justos-mixtape-awards`
- Cloudflare Worker (`justos-api`) is the API backend
- Worker entry: `worker/index.js`
- Frontend: Vite + React + Wouter + Tailwind, built to `dist/`

**Brand:**
- Name: The Justo's Mixtape Awards
- Primary color: #e8611a (orange)
- Background: #0a0a0a (near black)
- Fonts: Bebas Neue (display), Oswald (body), IBM Plex Mono (mono/labels)
- Tailwind tokens: `brand-orange`, `brand-black`; `font-display`, `font-body`, `font-mono`

**Deploy commands:**
- Build: `npm run build`
- Pages: `npm run deploy:pages`
- Worker: `npm run deploy:worker`

**Construction mode (active by default):**
- `public/construction.html` — standalone branded under-construction page (no React)
- `functions/[[path]].js` — Pages Function: when `SITE_MODE=construction`, serves construction.html at `/`, redirects all other non-admin/non-api/non-asset routes to `/`
- `worker/index.js` — SITE_MODE gate after OPTIONS handler
- `wrangler.toml` — `SITE_MODE = "construction"` under `[vars]` (Worker var)
- **Pages env var must be set separately:** Cloudflare Dashboard → Pages → Settings → Environment variables → `SITE_MODE = construction`

**Env vars to configure (Cloudflare dashboard):**
- Worker: `ADMIN_SECRET`, `ADMIN_PASSWORD`, `RESEND_API_KEY` (optional)
- Pages: `SITE_MODE` (set to `construction` to lock; remove to go live)
