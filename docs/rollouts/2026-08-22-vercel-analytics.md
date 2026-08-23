# Vercel Web Analytics (2026-08-22)

## Summary

Enable Vercel Web Analytics on the TanStack Start app in `site/` so the Hobby project counts visitors and page views after deploy.

## Why

The Vercel dashboard Get Started flow asks for `@vercel/analytics` plus an `<Analytics />` mount.  The wizard default import is `@vercel/analytics/next`, which is Next.js-only.  This site is TanStack Start / React, so the mount uses `@vercel/analytics/react`.

## Files

- `site/package.json` / `site/package-lock.json` — `@vercel/analytics`
- `site/src/routes/__root.tsx` — `<Analytics />` in the root document next to `<Scripts />`
- `STATUS.md`, `docs/EFFORT-LOG.md`, this rollout

## Verification

- `test -f static/index.html AGENTS.md docs/EFFORT-LOG.md`
- `rg -n "Earlier work included" static/index.html`
- `rg -n "@vercel/analytics/react" site/src/routes/__root.tsx`

Data appears in the Vercel Analytics UI after a production deploy and a visit (not local `vite dev`).  If the dashboard stays empty after ~30s on production, check content blockers and navigate between routes.

## Follow-ups

None.  Speed Insights is a separate package (`@vercel/speed-insights`) if the owner wants Core Web Vitals next.
