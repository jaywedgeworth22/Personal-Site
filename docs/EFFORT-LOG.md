# Personal-Site Effort Log — cross-agent board
Protocol: /Users/jay/apps/EFFORT-LOG-PROTOCOL.md (canonical). Live board: this file
(mirror: docs/EFFORT-LOG.md in the repo). As of 2026-08-17.

> ⚠️ **AGENT AVAILABILITY NOTICE (2026-08-21):** KIMI is **RETIRED / UNAVAILABLE** long-term (owner directive). All agents MUST NOT assign work or wait on KIMI in-flight work. Reassign any open KIMI effort board lanes or GitHub issues to active seats (AG, GROK, CLAUDE, MONET, etc.).

## Deployed
- **2026-08-22 - CURSOR - DEPLOYED - Enable Vercel Web Analytics on Personal-Site.**  PR #17 on production.  insights/script.js + insights/view 200 on personal-site-jayw.vercel.app. <!-- wb-agent-report:365732267fe143c589160c3f6bb59cf4 -->
- **2026-08-22 — CURSOR — DEPLOYED — Vercel Web Analytics (PR #17).**  `@vercel/analytics/react` in TanStack Start root.  Production `https://personal-site-jayw.vercel.app/` loaded `/_vercel/insights/script.js` and POSTed `/_vercel/insights/view` HTTP 200.  Board `36573226`.
- **2026-08-22 — CURSOR — PICKUP GROK — github-sync chat already DEPLOYED (Hobby Vercel + Drive #94).**  Cursor Auto owns remaining apex/domain cutover if asked.  Grok is no longer owner.
- **2026-08-22 - GROK - DEPLOYED - Personal-Site on personal Hobby Vercel + GitHub/Drive backup.**  Personal Vercel Hobby project personal-site READY at https://personal-site-jayw.vercel.app/ (About copy + Doximity view URL). PRs #12 #14. Apex jays.services still Cloudflare A 64.239.109.1 until domain cutover. Drive backups: coordinator #94. <!-- wb-agent-report:3a5fa02ce0ad416bba6801da1ae0f588 -->
- **2026-08-22 — GROK — DEPLOYED — Personal Hobby Vercel + backup handoff.**  Production `https://personal-site-jayw.vercel.app/` HTTP 200 (About copy + Doximity view URL).  Apex still Cloudflare A `64.239.109.1`.  PRs #12 #14.  Board `3a5fa02c`.
- **2026-08-14 — GROK — DEPLOYED — doximity.jaywedgeworth.com → public view profile.** 301 to `https://www.doximity.com/profiles/3cb95815-2fd1-4985-94e5-3d6f932283bf/view`.  `/cv/jaywedgeworth` opened edit mode.  Verified live 301 after Cloudflare rule + cache purge.
- **2026-08-14 — GROK — DEPLOYED — Social short-link URL redirects on jaywedgeworth.com.** Cloudflare Single Redirects (301) + dummy proxied `AAAA 100::`.  doximity → view profile (see row above); facebook/fb → Facebook; instagram/ig → Instagram; x → X; linkedin → LinkedIn `/in/JayWedgeworth`.

## Completed
- **2026-08-25 — AG — COMPLETED — Add Autorotate and ContactLogo portfolio work cards (branch ag/portfolio-autorotate-and-contactlogo).**  Updated site.ts and static/index.html with Autorotate (dynamic secret rotation, native macOS/iOS, ar.png) and ContactLogo.  Personal-Site itself excluded from portfolio per owner spec.
- **2026-08-14 — GROK — COMPLETED — Onboard Personal-Site as a fleet app + About copy "included" (PR #1).**  AGENTS, board, static CI, effort-issues-sync.  Snapshot uses "Earlier work included".  Live Vercel project is not on the fleet MCP team, so production HTML is unchanged.

## In Progress
- (none)

## Planned / Reserved
- (none)

## Changelog of this log
- 2026-08-22 — CURSOR deployed Vercel Web Analytics PR #17 (board `36573226`).
- 2026-08-22 — CURSOR claimed Vercel Web Analytics (board `36573226`).
- 2026-08-22 — GROK claimed personal Hobby Vercel + backup handoff (board `3a5fa02c`).
- 2026-08-14 — GROK deployed doximity view-profile retarget (live 301 verified).
- 2026-08-14 — GROK claimed doximity view-profile retarget.
- 2026-08-14 — GROK moved fleet onboard + About copy to Completed (PR #1).
- 2026-08-14 — GROK claimed fleet onboard + About copy; moved social redirects to Deployed after live 301 verify.
- 2026-08-14 — bootstrapped by onboard-new-app.sh.
