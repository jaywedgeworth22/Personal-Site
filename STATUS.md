# Status

- 2026-08-26: Add PERSONALSITE_DD_* prefixed key support and sync all app Datadog secrets into the Infisical shared workspace (shared-at-ct).
- 2026-08-26: DealDex logo updated with official 1024px icon.  Added CTS acronym for Congress Trading Shared fallback.  Fixed Datadog fail-closed throwing on production builds so Vercel Production deploys successfully.
- 2026-08-25: Project domains, hyperlinking, and top-right card buttons.  Project blurbs format domain names in exact PascalCase/canonical forms (DealDex.net, Autorotate.Codes, Congress.Trade, SocraticTrade.com, ContactLogo.com, usage.jays.services).  Domain names in descriptions are rendered as blue un-underlined hyperlinks.  Project cards use top-right action buttons with a right arrow and GitHub logo.  Congress Trading Shared added to project list.  Static snapshot synchronized.
- 2026-08-25: Designer leftover UX — visitor work blurbs + ContactLogo / Fleet
  icons.  No Next.js / Coolify / "30+" on cards.  CL / FL initial badges
  gone.  Copy and icons only.  Datadog #19 untouched.  Do not deploy.
- 2026-08-25: Datadog logs + APM + RUM on the existing account.  Fail closed
  in production if `DD_API_KEY` / `DD_SITE` / `DD_APPLICATION_ID` /
  `DD_CLIENT_TOKEN` are missing.  Replay off.  Sentry / PagerDuty unchanged.
- 2026-08-22: Vercel Web Analytics — `@vercel/analytics` mounted in TanStack Start root (`@vercel/analytics/react`, not `/next`).  Counts after production deploy + visit.
- 2026-08-22: GitHub `main` synced.  Personal Vercel Hobby project `personal-site` (`jayw`) production READY at https://personal-site-jayw.vercel.app/ (About copy + Doximity view URL verified).  Apex `jays.services` still Cloudflare A `64.239.109.1` until domain cutover.  Drive backups: coordinator launchd + GHA artifacts.  Hobby usage is negligible.
- 2026-08-20: Public work list copy matches current apps.  Socratic Trade is production at socratictrade.com (Coolify), from that README.  Congress.Trade names congress.trade.  DealDex and ContactLogo cards added from their live repo copy.
- GitHub repo About sidebar still says "automatic snapshot".  This seat cannot edit that field (read-only `gh`).
