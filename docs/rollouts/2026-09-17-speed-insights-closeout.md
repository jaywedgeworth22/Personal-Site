# Speed Insights closeout (2026-09-17)

## Summary

AG's Vercel Speed Insights lane was already squash-merged as Personal-Site PR #70 (`9c56966`, 2026-09-09).  Board `87efa14b` stayed In Progress.  GROK closed the board against that landing SHA and did not open a duplicate PR.

The sibling vercel-ignore-hourly `watch_args` pathspec (board `298e80ed`) was already on `main` as PR #61 (`1dd093f`).  Current `site/vercel-ignore-hourly.sh` sets `watch_args=(":(top)${rel}" "${rel}")` for nested `site/`.  No second Vercel project.

## Why

A squash merge keeps a different SHA than `ag/speed-insights` (`e9801a9`), so `git merge-base --is-ancestor` looks unique even when the file-level change is already on `main`.  `@vercel/speed-insights` is in `site/package.json` and `<SpeedInsights />` is in `site/src/routes/__root.tsx` next to `<Analytics />`.

## Verification

```bash
test -f README.md AGENTS.md docs/EFFORT-LOG.md static/index.html
grep -F "Earlier work included" static/index.html
grep -F "doximity.com/profiles/3cb95815-2fd1-4985-94e5-3d6f932283bf/view" site/src/lib/site.ts
grep -n SpeedInsights site/src/routes/__root.tsx
node scripts/verify-datadog.mjs
curl -sS -o /dev/null -w '%{http_code}\n' https://jays.services/_vercel/speed-insights/script.js
```

CI `verify` is file-existence + About-copy grep.  `site/` is the TanStack Start source.

## Follow-ups

None for Speed Insights.  Datadog free-tier board `ad678866` is a separate In Progress row.
