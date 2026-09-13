# 2026-09-13 — Skip pointless Vercel production deploys

Board `0934111e`.  Branch `fx/vercel-skip-pointless`.

Owner: agents were shipping Hobby production builds multiple times an hour with no site change.  That burned the Vercel rate limit so a real copy fix (PS #73) never went live.

`site/vercel-ignore-hourly.sh` now:

- skips preview auto-deploys
- skips production when `site/` did not change (effort logs / STATUS / iOS / docs-only)
- caps production to one READY deploy per hour
- `VERCEL_FORCE_DEPLOY=1` still builds
