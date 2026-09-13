# 2026-09-13 — Stop advertising Autorotate.Codes as live

Board `56fea494`.  Branch `fx/dead-links-hoghunter`.  Worktree `~/apps/personal-fx-links`.

## Why

`https://autorotate.codes` NXDOMAIN.  jays.services still sold it as a live host because project blurbs hyperlink canonical domain names.  DNS for that zone is owner-gated (board `b38fc36f`); this lane only stops the dead link.

## What changed

- Project card name `Autorotate`; blurb no longer contains `Autorotate.Codes`.
- Digest display name `Autorotate`.
- TestFlight row `Autorotate (iOS)`.
- Hog Hunter added as a local-only Mac utility (no store badges).
- Daily `mirror-site.yml` copy guard no longer injects `Web at Autorotate.Codes`.
- STATUS.md records that apex `jays.services` is Vercel behind Cloudflare.

## Verification

```bash
grep -R "Autorotate.Codes" site/src || true
# living product copy should not remain in site/src
```

GitHub merge does not auto-publish jays.services.  Vercel production is a separate owner/deploy step.

## Follow-ups

Owner: pick a host for Autorotate.codes and add A/AAAA on the existing Cloudflare zone (`b38fc36f`).  Until then do not restore the domain in living copy.
