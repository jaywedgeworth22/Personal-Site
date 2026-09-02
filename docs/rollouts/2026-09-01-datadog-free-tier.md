# 2026-09-01 — Datadog Free-tier fail-closed (Grok, `grok/datadog-free-tier`)

Personal-Site stays Datadog-only (no Sentry).  Free cannot observe Vercel as a host.

- Canonicalize `prod` → `production`.
- Intake site falls back to `us5.datadoghq.com` when `DD_SITE` is unset so error logs can prove the pipe with `DD_API_KEY` alone.
- HTTP log intake is error-only.  No boot info event.  RUM stays dark without client token + application id.
