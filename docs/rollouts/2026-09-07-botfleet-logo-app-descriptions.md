# 2026-09-07 — BotFleet app logo, Socratic Trade TestFlight link removal, and app description refresh

## Context & Objective

1. **BotFleet App Logo**: Replace the shared AI Fleet Coordinator 3-node network graph icon (`fleet.png`) for BotFleet with the official 1024x1024 glossy robot trio app icon (`bf.png`).
2. **Socratic Trade TestFlight**: Remove Socratic Trade iOS TestFlight links from both the Socratic Trade project card and the public TestFlight Betas showcase section.
3. **App Descriptions**: Polish and tighten project descriptions across all fleet applications, ensuring accurate product scopes, crisp domain formatting for automatic hyperlink detection, and two-space sentence gap compliance.
4. **Code Quality**: Fix ESLint `prefer-const` issue in `site/src/lib/fleet-digest.ts`.

## Changes Made

- **Brand Assets**:
  - Added `site/public/app-icons/bf.png` (1024x1024 full-bleed square RGB PNG from BotFleet official assets).
  - Added `static/app-icons/bf.png` (mirror in static assets).
- **Site Data Model (`site/src/lib/site.ts`)**:
  - `site.appIcons`: mapped `BF: "/app-icons/bf.png"`.
  - `site.projects`:
    - `bf`: updated `icon` to `/app-icons/bf.png` and blurb to: `"Multi-agent desktop environment and autonomous execution runtime for macOS and iOS.  Live at BotFleet.app, with local and cloud computer control."`
    - `st`: removed `testflight` property and updated blurb to: `"Agentic trading console connecting Alpaca, Tradier, and Robinhood with automated risk controls and broker sandbox/live execution.  Live at SocraticTrade.com."`
    - `ct`, `um`, `dd`, `ar`, `cl`, `ps`, `shared`, `fleet`, `ops`: polished blurbs for punchier summaries, consistent domain PascalCase, and active hyperlink detection.
  - `site.testflight`:
    - Removed `Socratic Trade (iOS)`.
    - Updated `BotFleet (iOS)` and `BotFleet for Mac` icons to `/app-icons/bf.png` and updated blurbs.
- **Fleet Digest (`site/src/lib/fleet-digest.ts`)**:
  - Changed `let agentMatch` to `const agentMatch` to resolve ESLint `prefer-const`.

## Verification State

```bash
cd site && npm run typecheck
cd site && npm run lint
cd site && npm run build
```

TypeScript typecheck (0 errors), ESLint (0 errors), and Vite/Nitro production build all verified clean.
