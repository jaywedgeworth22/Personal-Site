# 2026-08-22 — Personal Vercel + backup handoff

## Why

Owner: keep this repo synced with GitHub, make source backups include new apps
on Google Drive unless fleet coordinator takes over, and host on personal
Vercel instead of xAI's unless Hobby capacity is a real concern.

## Findings

- GitHub `main` already matched `origin/main` (`ed61581`, backup workflow #11).
- Personal-Site Actions "Backup GitHub Repositories" failed every day from
  2026-08-13 through 2026-08-22.  `GH_BACKUP_TOKEN` was never a repo secret, so
  `GH_TOKEN` was empty.  Drive upload was never implemented (comment only).
- Mac Drive backup already ran today
  (`Website & App Source Backups - 2026-08-22`) via the coordinator script.
- Personal Vercel team **Jay's Services** (`jayw`, Hobby) currently hosts
  DealDex only.  This app is a small TanStack Start portfolio.  Hobby allows
  unlimited sites and 100 GB bandwidth.  Adding it will not use even a small
  fraction of what basic sites on that plan can host.

## What this PR does

- Retire this repo's scheduled backup Action (workflow_dispatch notice only).
  Canonical Drive + GitHub-artifact backup: ai-fleet-coordinator.
- Document production on personal Hobby Vercel, root directory `site/`.
- Add `site/vercel.json` and a no-op `site/scripts/migrate.mjs` so `npm run
  build` does not die on a missing Grok-builder file when DATABASE_URL is unset.
- Update AGENTS / README / STATUS / effort log.

## Verification

```bash
git status -sb
test -f static/index.html
test -f AGENTS.md
test -f docs/EFFORT-LOG.md
rg -n "Earlier work included" static/index.html
rg -n "doximity.com/profiles/3cb95815-2fd1-4985-94e5-3d6f932283bf/view" site/src/lib/site.ts
```

Live Vercel URL is recorded after `create_git_project` + a READY deployment.
