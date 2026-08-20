# 2026-08-20 — Public work list matches current apps

## Context & Objective

Owner asked Personal-Site (jays.services) to list current apps, match any
GitHub About, and fix stale names or hosting claims.  Docs and site copy
only.  Do not invent apps or metrics.

Follow-up: replace the stale Socratic Trade "local-first" card with
production Coolify / socratictrade.com wording from that README.  Congress.Trade
should name congress.trade.  Consider DealDex and ContactLogo cards.  Hosting
for this site (Grok to Vercel behind Cloudflare) can stay.

## What was already current

- Work cards already named Socratic Trade, Congress.Trade, Usage Monitor,
  and AI Fleet Coordinator.
- GitHub profile has no About bio and no profile README.
- Personal-Site repo description is "Personal portfolio site source for
  jays.services (automatic snapshot)".  That sidebar field is not in this
  repo.  This seat cannot edit it.

## Changes Made

- Socratic Trade blurb is the README lead: Next.js agentic trading console
  for real broker accounts, production at socratictrade.com (Coolify).
- Congress.Trade blurb names congress.trade plus iOS.  Dropped
  "latency-aware market data".
- Usage Monitor keeps the official "30+" line plus usage.jays.services
  and iOS.
- Added DealDex and ContactLogo cards from those repos' current
  descriptions and live hosts (`dealdex.online`, `contactlogo.grok.me`).
  DealDex icon is the fleet `app-dd.png`.  ContactLogo uses a CL initial.
- About tense in source set to landed "Earlier work included".
- Snapshot HTML/JS strings match the source cards.
- README names the public list.  This site still deploys Grok to Vercel
  behind Cloudflare.

## Decisions & Trade-offs

- Added DealDex and ContactLogo after the owner asked to consider those
  cards.  Copy is from their GitHub About / README only.
- Kept work-card hrefs on GitHub.  Hosts are named in the blurbs.
- Kept Usage Monitor "30+" because that is the Usage-Monitor GitHub
  description, not a number invented here.
- Did not put Coolify, Hetzner, or IPs on other cards.  Coolify is on
  Socratic Trade because that README names it next to socratictrade.com.

## Verification State

```bash
test -f static/index.html
test -f AGENTS.md
test -f docs/EFFORT-LOG.md
rg -n "Earlier work included" static/index.html
rg -n "Local-first" site/src/lib/site.ts static/index.html && echo "FAIL stale local-first" || true
rg -n "socratictrade.com \\(Coolify\\)" site/src/lib/site.ts
rg -n "congress.trade" site/src/lib/site.ts
rg -n "DealDex|ContactLogo" site/src/lib/site.ts
```

## Next Steps & Blockers

- Owner or a write-capable seat: update the GitHub About sidebar for
  Personal-Site so it is not "automatic snapshot".
- Publish the Grok app so live jays.services picks up the cards.
