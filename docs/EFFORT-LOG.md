# Personal-Site Effort Log — cross-agent board
Protocol: /Users/jay/apps/EFFORT-LOG-PROTOCOL.md (canonical). Live board: this file
(mirror: docs/EFFORT-LOG.md in the repo). As of 2026-08-14.

## Deployed
- **2026-08-22 — GROK — DEPLOYED — Personal Hobby Vercel + backup handoff.**  GitHub was already on `origin/main`.  Production project `personal-site` on team `jayw` (Hobby), root `site/`.  Verified `https://personal-site-jayw.vercel.app/` HTTP 200 with "Earlier work included" and the Doximity view URL.  Apex `jays.services` still Cloudflare A `64.239.109.1` (xAI origin) until domain cutover.  Drive backups: coordinator #94 + launchd `com.jay.fleet-gdrive-backup`.  PRs #12 / coordinator #94.  Board `3a5fa02c`.
- **2026-08-14 — GROK — DEPLOYED — doximity.jaywedgeworth.com → public view profile.** 301 to `https://www.doximity.com/profiles/3cb95815-2fd1-4985-94e5-3d6f932283bf/view`.  `/cv/jaywedgeworth` opened edit mode.  Verified live 301 after Cloudflare rule + cache purge.
- **2026-08-14 — GROK — DEPLOYED — Social short-link URL redirects on jaywedgeworth.com.** Cloudflare Single Redirects (301) + dummy proxied `AAAA 100::`.  doximity → view profile (see row above); facebook/fb → Facebook; instagram/ig → Instagram; x → X; linkedin → LinkedIn `/in/JayWedgeworth`.

## Completed
- **2026-08-22 — CURSOR — COMPLETED — Vercel Web Analytics.**  `@vercel/analytics/react` in `site/src/routes/__root.tsx`.  PR #17.
- **2026-08-20 — CURSOR — COMPLETED — Public work list copy matches current apps.**  Socratic Trade uses Coolify / socratictrade.com wording from that README.  Congress.Trade names congress.trade.  DealDex and ContactLogo cards added.  This site still deploys Grok to Vercel behind Cloudflare.  Docs: STATUS, rollout `2026-08-20-work-list-copy`, README, this board.
- **2026-08-14 — GROK — COMPLETED — Onboard Personal-Site as a fleet app + About copy "included" (PR #1).**  AGENTS, board, static CI, effort-issues-sync.  Snapshot uses "Earlier work included".  Live Vercel project is not on the fleet MCP team, so production HTML is unchanged.

## In Progress
- **2026-08-25 — CURSOR — IN PROGRESS — Datadog logs + APM + RUM.**  `cursor/datadog-logs-apm-rum-8c86`.  Existing Datadog account only.  Fail closed if keys missing.  No new spend.  No Sentry/PD replace.

## Planned / Reserved
- (none)

## Changelog of this log
- 2026-08-25 — CURSOR claimed Datadog logs + APM + RUM on Personal-Site.
- 2026-08-22 — CURSOR claimed Vercel Web Analytics (board `36573226`).
- 2026-08-22 — GROK claimed personal Hobby Vercel + backup handoff (board `3a5fa02c`).
- 2026-08-20 — CURSOR added DealDex + ContactLogo cards and Coolify / socratictrade.com ST wording.
- 2026-08-20 — CURSOR updated public work-list blurbs and README (stale local-first / latency-aware hosting claims).
- 2026-08-14 — GROK deployed doximity view-profile retarget (live 301 verified).
- 2026-08-14 — GROK claimed doximity view-profile retarget.
- 2026-08-14 — GROK moved fleet onboard + About copy to Completed (PR #1).
- 2026-08-14 — GROK claimed fleet onboard + About copy; moved social redirects to Deployed after live 301 verify.
- 2026-08-14 — bootstrapped by onboard-new-app.sh.
