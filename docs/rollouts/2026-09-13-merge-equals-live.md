# 2026-09-13 — Merge to main is Vercel production

Board `ef71d6c1`.  Branch `fx/merge-equals-live`.

## Why

PS #73 was `Canceled by Ignored Build Step`.  `site/vercel-ignore-hourly.sh` skipped production when the last deploy was under an hour old, and could skip when git-diff of `site/` failed.  Owner: jays.services (and the other Vercel sites) must go live on merge, same as Coolify ST/CT/UM.

## What changed

Production git deploys always build.  Preview auto-deploys stay skipped.  The 1/hour cap is gone.

## Verification

```bash
VERCEL_ENV=production bash site/vercel-ignore-hourly.sh; echo $?   # 1 = build
VERCEL_ENV=preview bash site/vercel-ignore-hourly.sh; echo $?      # 0 = skip
```
