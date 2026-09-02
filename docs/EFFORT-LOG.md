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
- **2026-09-01 — GROK — COMPLETED/MERGED #49 — Personal-Site stays Datadog-only; no Sentry project (`grok/sentry-datadog-only`).**  Board `ca3e27f0`.  Worktree `~/apps/personal-grok-sentry-docs`.  Explicit README/AGENTS sentence.  Tiny unhandled-window-error Sentry project is not wanted.  Preserve `Earlier work included` and the Doximity `/profiles/…/view` URL.  Slack `#agent-sync` post skipped (`account_inactive` / 403).
- **2026-08-31 — ANTIGRAVITY — COMPLETED — Add TestFlight Public Beta links across all fleet apps (branch `ag/testflight-links`).**  Added TestFlight badges to project cards and created dedicated TestFlight Public Betas showcase section on `jays.services` for all 10 fleet app beta streams (ContactLogo iOS/macOS, Autorotate iOS/macOS, Socratic Trade iOS, Congress.Trade iOS, Usage Monitor Client/Local, BotFleet iOS/macOS).
- **2026-08-26 — ANTIGRAVITY — COMPLETED — Add Vercel free feature optimizations (branch `antigravity/vercel-optimizations`).**  Updated `site/vercel.json` with `ignoreCommand` to skip redundant builds on non-site repo edits, immutable 1-year cache headers for build assets, media/font cache-control headers, strict security headers (nosniff, sameorigin, referrer-policy, permissions-policy), clean URLs, and trailing slash normalization.
- **2026-08-26 — AG — COMPLETED — Add PERSONALSITE_DD_* prefixed key support and sync all app Datadog secrets into Infisical shared workspace (branch ag/infisical-prefixed-keys).**  Wired PERSONALSITE_DD_* key fallbacks in fail-closed.ts and vite.config.ts.  Synchronized Datadog secrets for Personal-Site, ContactLogo, DealDex, and Autorotate into shared-at-ct Infisical workspace.
- **2026-08-26 — AG — COMPLETED — Update DealDex logo, add CTS acronym, and fix Datadog production deployment (branch ag/dealdex-logo-future-dates-prod-fix).**  Replaced DealDex app icon with official 1024px icon.  Added CTS acronym fallback for Congress Trading Shared.  Fixed assertDatadogKeysOrThrow to prevent aborting Vercel production build when DD_* are unset.
- **2026-08-25 — AG — COMPLETED — Project domains, hyperlinks, GitHub card buttons (branch ag/project-cards-and-domain-links).**  Formatted project domains (DealDex.net, Autorotate.Codes, Congress.Trade, SocraticTrade.com, ContactLogo.com, usage.jays.services).  Rendered domains in project descriptions as un-underlined blue hyperlinks.  Added right-arrow + GitHub action buttons to card headers.  Included Congress Trading Shared in project list.
- **2026-08-25 — AG — COMPLETED — Add Autorotate and ContactLogo portfolio work cards (branch ag/portfolio-autorotate-and-contactlogo).**  Updated site.ts and static/index.html with Autorotate (dynamic secret rotation, native macOS/iOS, ar.png) and ContactLogo.  Personal-Site itself excluded from portfolio per owner spec.
- **2026-08-25 — CURSOR — COMPLETED — Designer leftover UX (visitor blurbs + CL/Fleet icons).**  PR #22.  Copy and icons only.  Datadog #19 untouched.  No deploy.
- **2026-08-25 — CURSOR — COMPLETED — Datadog logs + APM + RUM.**  PR #19.  Existing Datadog account.  Fail closed if keys missing.  Replay off.  Sentry / PagerDuty unchanged.
- **2026-08-22 — CURSOR — COMPLETED — Vercel Web Analytics.**  `@vercel/analytics/react` in `site/src/routes/__root.tsx`.  PR #17.
- **2026-08-20 — CURSOR — COMPLETED — Public work list copy matches current apps.**  Socratic Trade uses Coolify / socratictrade.com wording from that README.  Congress.Trade names congress.trade.  DealDex and ContactLogo cards added.  This site still deploys Grok to Vercel behind Cloudflare.  Docs: STATUS, rollout `2026-08-20-work-list-copy`, README, this board.
- **2026-08-14 — GROK — COMPLETED — Onboard Personal-Site as a fleet app + About copy "included" (PR #1).**  AGENTS, board, static CI, effort-issues-sync.  Snapshot uses "Earlier work included".  Live Vercel project is not on the fleet MCP team, so production HTML is unchanged.

## In Progress
- **2026-09-01 - GROK - IN_PROGRESS - Cap automatic Vercel deploys to one production build per hour (branch `grok/vercel-hourly-cap`, worktree `~/apps/personal-grok-hourly`).**  Board `9051c3ac`.  Script `site/vercel-ignore-hourly.sh`.  `VERCEL_FORCE_DEPLOY=1` still ships immediately.

## Planned / Reserved
- (none)

## Changelog of this log
- 2026-09-01 — GROK completed Datadog-only / no Sentry project (PS #49, board `ca3e27f0`).
- 2026-08-31 — AG completed TestFlight Public Beta links across all fleet apps on jays.services (branch ag/testflight-links).
- 2026-08-26 — AG completed PERSONALSITE_DD_* prefixed key support & Infisical secret sync (PR created).
- 2026-08-26 — AG completed DealDex logo update, CTS acronym, and Vercel production fix (PR #38).
- 2026-08-25 — AG completed Project domains, hyperlinks, and GitHub card buttons (PR created).
- 2026-08-25 — CURSOR opened Personal-Site PR #22 (visitor blurbs + CL/Fleet icons).
- 2026-08-25 — CURSOR claimed Designer leftover UX (visitor blurbs + icons).
- 2026-08-25 — CURSOR opened Personal-Site PR #19 (Datadog logs + APM + RUM).
- 2026-08-22 — CURSOR deployed Vercel Web Analytics PR #17 (board `36573226`).
- 2026-08-22 — CURSOR claimed Vercel Web Analytics (board `36573226`).
- 2026-08-22 — GROK claimed personal Hobby Vercel + backup handoff (board `3a5fa02c`).
- 2026-08-14 — GROK deployed doximity view-profile retarget (live 301 verified).
- 2026-08-14 — GROK claimed doximity view-profile retarget.
- 2026-08-14 — GROK moved fleet onboard + About copy to Completed (PR #1).
- 2026-08-14 — GROK claimed fleet onboard + About copy; moved social redirects to Deployed after live 301 verify.
- 2026-08-14 — bootstrapped by onboard-new-app.sh.
