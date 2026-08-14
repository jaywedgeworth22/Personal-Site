# 2026-08-14 — Personal-Site fleet join

## Context & Objective

Owner pointed at ONBOARDING-NEW-APP / ONBOARDING-NEW-AGENT and asked this
seat to join Personal-Site as a fleet app.

## Changes Made

- `AGENTS.md` + `CLAUDE.md` symlink, keepout table, Slack `repo: Personal-Site` / `PS`.
- Live board `~/apps/PERSONAL-SITE-EFFORT-LOG.md` and this repo's `docs/EFFORT-LOG.md`.
- `scripts/sync-effort-issues.py` + `.github/workflows/effort-issues-sync.yml` (cron `27 6`).
- Static CI (required files + About-copy grep). No Node toolchain.
- `.gitignore` for `.DS_Store`.
- Coordinator registries in the paired `grok/personal-site-onboard` PR.

## Decisions & Trade-offs

- Acronym **PS**, worktree prefix `personal-`.
- Digest color `#be123c` so PS is distinct from ST/CT/UM/DD/fleet.
- No app icon yet (`hasAppIcon: false`).
- Site source is still a snapshot. Do not invent an npm verify gate.

## Verification State

```bash
test -f static/index.html
test -f AGENTS.md
rg -n "Earlier work included" static/index.html
```

## Next Steps & Blockers

- `workflow_dispatch` Effort Issues Sync after merge.
- Owner: Infisical / Coolify / Sentry only if this app grows a runtime.
- Live Vercel project is not on the fleet MCP team. Snapshot lands here;
  production HTML needs that project or an owner deploy.
