# 2026-08-26 — DealDex logo update, CTS acronym, and Vercel Production deployment fix

## Context & Objective

1. DealDex logo on the personal portfolio used a low-res placeholder instead of the latest official 1024px icon.
2. All apps should display their latest logo or their official acronym if no logo exists (e.g. Congress Trading Shared uses `CTS`).
3. Vercel Production builds were failing because Datadog fail-closed threw an error during `vite build` when `VERCEL_ENV=production` and `DD_*` secrets were unset on the Vercel Hobby team, preventing recent landed work (including project domain PascalCase formatting and blue un-underlined hyperlinks) from going live.
4. Future milestone dates mentioned in effort log text (such as `2026-08-27` in Socratic.Trade Pinecone trial expiration) were bucketed days early in the daily activity digest.

## Changes Made

- **DealDex App Icon**: Copied official 1024px icon from `DealDex/native/brand/dealdex-dd-icon-1024.png` to `site/public/app-icons/dd.png` and `static/app-icons/dd.png`.
- **App Acronym Support**: Added `acronym?: string` to `Project` type in `site/src/lib/site.ts` with `acronym: "CTS"` for Congress Trading Shared, rendered in fallback badges on `home-page.tsx`.
- **Datadog Production Build Fix**: Updated `site/src/lib/datadog/fail-closed.ts`, `rum.ts`, `server.server.ts`, `DatadogRum.tsx`, `vite.config.ts`, and `scripts/verify-datadog.mjs` so missing keys log warnings and stay dark instead of crashing `vite build` and SSR under `VERCEL_ENV=production`.
- **Mirror Workflow**: Added non-fatal `git push` fallback in `.github/workflows/mirror-site.yml`.
- **Daily Digest Parser (`ai-fleet-coordinator`)**: Updated `scripts/build-fleet-daily-digest.py` to prioritize status/completion dates and reject dates greater than today, eliminating early future day headers.

## Verification State

```bash
test -f static/index.html
test -f AGENTS.md
test -f docs/EFFORT-LOG.md
rg -n "Earlier work included" static/index.html
node scripts/verify-datadog.mjs
cd site && VERCEL_ENV=production npm run build
```

All local build, telemetry verification, and CI checks passed cleanly.
