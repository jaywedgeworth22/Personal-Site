# Datadog logs + APM + RUM (2026-08-25)

## Summary

Instrument the TanStack Start site on Vercel with the existing Datadog
account.  Browser RUM + browser logs, server logs over HTTP intake, and
Node APM via `dd-trace` (agentless on Vercel, Agent when `DD_AGENT_HOST`
is set).  Missing keys stay dark and log; they must not throw on the
Vercel Production build or SSR boot.  No new Datadog spend levers
(Replay off, 20% prod trace sample).  Sentry / PagerDuty untouched.
No Designer UX change.

## Why

Personal-Site had no application instrumentation.  The Datadog org already
exists (`us5.datadoghq.com`), the RUM application UI already exists, and
fleet-ops already names `DD_*` plus Personal-Site as a `dd-trace` target.

## Files

- `site/src/lib/datadog/*` — fail-closed checks, RUM, server logs/APM
- `site/src/routes/__root.tsx` — invisible `<DatadogRum />`
- `site/src/router.tsx` — SSR import of server tracer
- `site/src/lib/error-component.tsx` — report to RUM, still show the error
- `site/vite.config.ts` — public `DD_*` define, `dd-trace` external
- `scripts/verify-datadog.mjs` + CI verify step
- `AGENTS.md`, `README.md`, `STATUS.md`, `docs/EFFORT-LOG.md`, this rollout

## Env vars (names only — reuse, do not invent)

`DD_API_KEY` / `DATADOG_API_KEY`, `DD_SITE`, `DD_APPLICATION_ID`,
`DD_CLIENT_TOKEN`, optional `DD_SERVICE`, `DD_ENV`, `DD_VERSION`,
`DD_AGENT_HOST`, `DD_TRACE_AGENT_PORT`.

## Verification

```bash
test -f static/index.html AGENTS.md docs/EFFORT-LOG.md
rg -n "Earlier work included" static/index.html
node scripts/verify-datadog.mjs
cd site && npx tsc --noEmit
```

Production data appears after the existing keys are present on Vercel
Production and a visit.  Preview / local stay dark unless keys are set.
`DD_FAIL_CLOSED=1` only logs; it does not fail the build.
