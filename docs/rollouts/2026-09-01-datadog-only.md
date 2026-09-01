# 2026-09-01 — Personal-Site stays on Datadog (no Sentry project)

## Summary

Explicit docs so agents stop assuming Sentry covers `jays.services`.
Observability is Datadog.  There is no Sentry project.  A tiny
unhandled-window-error Sentry project is **not** wanted.

Board `ca3e27f0`.  Branch `grok/sentry-datadog-only`.  Worktree
`~/apps/personal-grok-sentry-docs`.  Fleet canonical:
`ai-fleet-coordinator` `docs/rollouts/2026-09-01-sentry-fleet-adoption.md`.

## Why

The 2026-09-01 Sentry fleet adoption report listed Personal-Site under
"GitHub repos with no Sentry project" and said to call the Datadog decision
explicitly.  README previously said "Sentry and PagerDuty are unchanged,"
which read as if Sentry already covered this site.

## Files

- `README.md` — Datadog-only; no Sentry project.
- `AGENTS.md` — Observability is Datadog heading.
- `STATUS.md`, `docs/EFFORT-LOG.md`, this rollout.

Did not touch `static/index.html` (must keep `Earlier work included` and the
Doximity `/profiles/…/view` URL or the daily mirror reverts them).

## Verification

```bash
test -f static/index.html
test -f AGENTS.md
test -f docs/EFFORT-LOG.md
rg -n "Earlier work included" static/index.html
rg -n "no Sentry project" README.md AGENTS.md
node scripts/verify-datadog.mjs
```

CI `verify` is file-existence + About-copy grep + Datadog fail-closed check.
Do not invent `npm test`.
