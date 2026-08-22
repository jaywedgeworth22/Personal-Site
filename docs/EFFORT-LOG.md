# Personal-Site Effort Log — cross-agent board
Protocol: /Users/jay/apps/EFFORT-LOG-PROTOCOL.md (canonical). Live board: this file
(mirror: docs/EFFORT-LOG.md in the repo). As of 2026-08-14.

## Deployed
- **2026-08-14 — GROK — DEPLOYED — doximity.jaywedgeworth.com → public view profile.** 301 to `https://www.doximity.com/profiles/3cb95815-2fd1-4985-94e5-3d6f932283bf/view`.  `/cv/jaywedgeworth` opened edit mode.  Verified live 301 after Cloudflare rule + cache purge.
- **2026-08-14 — GROK — DEPLOYED — Social short-link URL redirects on jaywedgeworth.com.** Cloudflare Single Redirects (301) + dummy proxied `AAAA 100::`.  doximity → view profile (see row above); facebook/fb → Facebook; instagram/ig → Instagram; x → X; linkedin → LinkedIn `/in/JayWedgeworth`.

## Completed
- **2026-08-20 — CURSOR — COMPLETED — Public work list copy matches current apps.**  Socratic Trade uses Coolify / socratictrade.com wording from that README.  Congress.Trade names congress.trade.  DealDex and ContactLogo cards added.  This site still deploys Grok to Vercel behind Cloudflare.  Docs: STATUS, rollout `2026-08-20-work-list-copy`, README, this board.
- **2026-08-14 — GROK — COMPLETED — Onboard Personal-Site as a fleet app + About copy "included" (PR #1).**  AGENTS, board, static CI, effort-issues-sync.  Snapshot uses "Earlier work included".  Live Vercel project is not on the fleet MCP team, so production HTML is unchanged.

## In Progress
- **2026-08-22 — GROK — IN PROGRESS — Personal Hobby Vercel + fleet Drive backup handoff.**  Claimed Sat, Aug 22, 2026.  `~/apps/personal-grok-vercel-backup` @ `grok/personal-vercel-gdrive-backup`.  Board `3a5fa02c`.  GitHub already on `origin/main`.  GHA backup never wrote Drive (`GH_BACKUP_TOKEN` empty).  Coordinator takes Drive.  Host on personal `jayw` Hobby Vercel (root `site/`).

## Planned / Reserved
- (none)

## Changelog of this log
- 2026-08-22 — GROK claimed personal Hobby Vercel + backup handoff (board `3a5fa02c`).
- 2026-08-20 — CURSOR added DealDex + ContactLogo cards and Coolify / socratictrade.com ST wording.
- 2026-08-20 — CURSOR updated public work-list blurbs and README (stale local-first / latency-aware hosting claims).
- 2026-08-14 — GROK deployed doximity view-profile retarget (live 301 verified).
- 2026-08-14 — GROK claimed doximity view-profile retarget.
- 2026-08-14 — GROK moved fleet onboard + About copy to Completed (PR #1).
- 2026-08-14 — GROK claimed fleet onboard + About copy; moved social redirects to Deployed after live 301 verify.
- 2026-08-14 — bootstrapped by onboard-new-app.sh.
