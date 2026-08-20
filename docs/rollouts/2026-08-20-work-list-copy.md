# 2026-08-20 — Public work list matches current apps

## Context & Objective

Owner asked Personal-Site (jays.services) to list current apps, match any
GitHub About, and fix stale names or hosting claims.  Docs and site copy
only.  Do not invent apps or metrics.

Known live work: Socratic Trade, Congress.Trade, Usage Monitor, AI Fleet
Coordinator.  Crest and BadgeBook combined into ContactLogo (BadgeBook
repo).

## What was already current

- Work cards already named those four apps.  No Crest, BadgeBook, or
  DealDex on the public list.
- GitHub profile has no About bio and no profile README.
- Personal-Site repo description is "Personal portfolio site source for
  jays.services (automatic snapshot)".  That sidebar field is not in this
  repo.  This seat cannot edit it.

## Changes Made

- `site/src/lib/site.ts` work blurbs rewritten from the live app repos:
  Socratic Trade production at socratictrade.com (dropped "local-first");
  Congress.Trade STOCK Act disclosures at congress.trade plus iOS (dropped
  "latency-aware market data"); Usage Monitor official "30+" line plus
  usage.jays.services and iOS (dropped unverified "projections, import"
  and "polished").
- About tense in source set to landed "Earlier work included".
- Snapshot HTML/JS strings updated to the same blurbs so the repo mirror
  is not still selling local-first Socratic Trade.
- README states the public work list and that ContactLogo is not a
  separate card.

## Decisions & Trade-offs

- Did not add ContactLogo or DealDex.  Owner named four live apps and
  said not to invent others.  ContactLogo is noted only as the Crest /
  BadgeBook successor.
- Kept work-card hrefs on GitHub.  Hosts are named in the blurbs.
- Kept Usage Monitor "30+" because that is the Usage-Monitor GitHub
  description, not a number invented here.

## Verification State

```bash
test -f static/index.html
test -f AGENTS.md
test -f docs/EFFORT-LOG.md
rg -n "Earlier work included" static/index.html
rg -n "Local-first" site/src/lib/site.ts static/index.html && echo "FAIL stale local-first" || true
rg -n "socratictrade.com" site/src/lib/site.ts
```

## Next Steps & Blockers

- Owner or a write-capable seat: update the GitHub About sidebar for
  Personal-Site so it is not "automatic snapshot".
- Publish the Grok app so live jays.services picks up the blurbs.
