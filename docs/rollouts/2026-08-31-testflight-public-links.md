# 2026-08-31 — TestFlight Public Beta links across all fleet applications

## Context & Objective

1. Provide direct public access on `jays.services` so visitors and testers can join Apple TestFlight betas for all fleet apps on iOS and macOS with a single click.
2. Embed platform-specific TestFlight badges on project cards in the Work section.
3. Feature a dedicated "Public Betas" / "TestFlight Betas" section with app icon branding, platform pills, description, and direct join buttons.

## Changes Made

- **Site Data Model (`site/src/lib/site.ts`)**:
  - Added `TestFlightLink` type and `testflight` properties on `Project` objects.
  - Added comprehensive `site.testflight` public beta directory covering all 10 fleet app beta streams:
    - **ContactLogo** (iOS) · `https://testflight.apple.com/join/HRzFDeA1`
    - **ContactLogo for Mac** (macOS) · `https://testflight.apple.com/join/xsPB27gf`
    - **Autorotate.Codes** (iOS) · `https://testflight.apple.com/join/bZ7vntkJ`
    - **Autorotate for Mac** (macOS) · `https://testflight.apple.com/join/5yDXA8Vk`
    - **Socratic Trade** (iOS) · `https://testflight.apple.com/join/nUPgpE4c`
    - **Congress.Trade** (iOS) · `https://testflight.apple.com/join/VNUEU6Ge`
    - **Usage Client Monitor** (iOS) · `https://testflight.apple.com/join/KPq42UrC`
    - **Usage Local Monitor** (iOS) · `https://testflight.apple.com/join/YXZGGeUs`
    - **BotFleet** (iOS) · `https://testflight.apple.com/join/ER6sPNMh`
    - **BotFleet for Mac** (macOS) · `https://testflight.apple.com/join/cQnDtFse`
- **Home Page Component (`site/src/components/home-page.tsx`)**:
  - Added quick hero action button: "TestFlight Betas".
  - Rendered TestFlight platform pills on individual project cards in the Work section.
  - Added dedicated `#betas` section with a responsive grid displaying all active public beta apps with direct "Join" links.
- **Navigation (`site/src/components/site-header.tsx`)**:
  - Added `Betas` link to the primary header navigation menu.

## Verification State

```bash
test -f static/index.html
test -f AGENTS.md
test -f docs/EFFORT-LOG.md
rg -n "Earlier work included" static/index.html
cd site && npm run build
```

All build and validation checks passed cleanly.
