# Status

Updated: 2026-08-14 (GROK — fleet onboard + social redirects + About copy)

## Current state

- GitHub: `jaywedgeworth22/Personal-Site` (private). Local integration tree:
  `/Users/jay/Code/Personal-Site` tracks `origin/main`.
- Fleet member: acronym **PS**, Slack `repo: Personal-Site`, live board
  `~/apps/PERSONAL-SITE-EFFORT-LOG.md`.
- Worktree: `~/apps/personal-grok` (this lane). Other seats create
  `~/apps/personal-<seat>` when they start.
- Repo holds a static snapshot under `static/`. Live site is Vercel behind
  Cloudflare (`x-vercel-id` on https://jays.services). Apex
  `jaywedgeworth.com/` 302s to `https://jays.services/`.

## This turn

- Fleet bootstrap files (AGENTS, board, CI, effort-issues-sync).
- About copy: "Earlier work includes" → "Earlier work included" in the
  snapshot HTML + hashed JS. Mirror workflow preserves that wording.
- Doximity footer/href in the snapshot now uses the public CV URL.
- Social short links on `jaywedgeworth.com` are Cloudflare Single Redirects
  (301) to the profile URLs. Dummy proxied `AAAA 100::` hosts only.

## Blockers

- This seat's Vercel MCP team (`jaywedgeworth22s-projects`) lists **DealDex
  only**. The live personal site is a different Vercel project/account.
  Snapshot + mirror-preserve landed here; production HTML will stay
  "includes" until that Vercel project is reachable or the owner deploys.
- Digest/calendar will not see this private repo until Actions secret
  `FLEET_GITHUB_TOKEN` on ai-fleet-coordinator includes it.

## Next

- Remaining seats start from `main` in their own worktrees.
- Owner: link or grant the live Vercel project if agents should ship HTML
  from this repo.
