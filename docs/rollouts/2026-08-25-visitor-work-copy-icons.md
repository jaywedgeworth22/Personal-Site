# 2026-08-25 — Visitor work copy and missing card icons

## Context & Objective

Designer leftover UX (2026-08-24): work blurbs leaked stack names and an
invented provider count, and ContactLogo / Fleet cards still used CL / FL
initial badges.  Copy and icons only.  Do not touch Datadog
instrumentation.  Do not deploy.

## Changes Made

- Rewrote every work blurb in `site/src/lib/site.ts` in visitor language.
  Dropped Next.js, Coolify, "30+" providers, "APIs", "review-first", and
  coordinator words (effort board, safe landings, protocols).
- Congress.Trade names House, Senate, and Executive Branch (corpus rule).
- Usage Monitor follows that repo's "do not add provider counts" About rule.
- ContactLogo icon is the official cream-and-gold mark from
  `ContactLogo/web/public/favicon.svg`.
- Fleet icon is a three-node mark so the FL initial badge goes away.
- Icons live at `site/public/app-icons/cl.png` and `fleet.png`, copied to
  `static/app-icons/` so the daily mirror restore keeps them.

## Decisions & Trade-offs

- Did not change Datadog files, `__root.tsx`, Vite, or package.json.
- Did not rewrite the hashed `static/` JS snapshot.  Live HTML updates on
  the next production publish.
- Did not invent a provider count or hosting stack on any card.

## Verification State

```bash
test -f static/index.html
test -f AGENTS.md
test -f docs/EFFORT-LOG.md
rg -n "Earlier work included" static/index.html
rg -n "Next\\.js|Coolify|30\\+" site/src/lib/site.ts && echo FAIL || echo clean
rg -n "icon: \"/app-icons/(cl|fleet)\\.png\"" site/src/lib/site.ts
```

Local `cd site && npm run dev` — Work cards show visitor copy and both
new icons.  No CL / FL badges.

## Next Steps & Blockers

- Do not deploy from this seat.  Publish later from the usual Vercel path.
- Datadog remains the landed #19 work; this PR does not reopen it.
