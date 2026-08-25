# 2026-08-25 — Project domains, un-underlined hyperlinks, and GitHub card buttons

## Context & Objective

1. Format project domain names in project descriptions to exact canonical/PascalCase style (`DealDex.net`, `Autorotate.Codes`, `Congress.Trade`, `SocraticTrade.com`, `ContactLogo.com`, `usage.jays.services`).
2. Make domain names in project descriptions render as blue hyperlinks without underlines that navigate directly to each domain when clicked.
3. Replace the top-right card arrows with a styled action button containing a right arrow and a GitHub logo linking to the repository.
4. Ensure recent projects (including `Congress Trading Shared` / `CTS`) are cleanly presented in the Work section.

## Changes Made

- **`site/src/lib/site.ts`**: Formatted all project blurbs to include exact domain casing (`SocraticTrade.com`, `Congress.Trade`, `usage.jays.services`, `DealDex.net`, `Autorotate.Codes`, `ContactLogo.com`).  Added `Congress Trading Shared` to the projects list.
- **`site/src/components/home-page.tsx`**:
  - Converted project card outer elements from `<a>` to styled `<div>` containers with preserved backdrop and hover effects.
  - Implemented `renderBlurbWithLinks` helper to detect domains in blurbs, format them as un-underlined blue hyperlinks (`text-[#2563eb] hover:text-[#1d4ed8] font-medium`), and preserve two spaces between sentences.
  - Added top-right pill action buttons containing a right arrow (`ArrowRight`) and GitHub logo (`SocialIcon id="github"`) targeting `p.href`.
- **`static/index.html`**: Synchronized static HTML snapshot with the new card container markup, buttons, and blue domain hyperlinks.
- **`STATUS.md` & Effort Logs**: Updated status and mirrored live effort log at `~/apps/PERSONAL-SITE-EFFORT-LOG.md` and `docs/EFFORT-LOG.md`.

## Verification State

```bash
test -f static/index.html
test -f AGENTS.md
test -f docs/EFFORT-LOG.md
rg -n "Earlier work included" static/index.html
node scripts/verify-datadog.mjs
cd site && npm run build
```

All local build and CI tests passed cleanly with zero errors.

## Next Steps

- Push branch `ag/project-cards-and-domain-links` and create Pull Request.
