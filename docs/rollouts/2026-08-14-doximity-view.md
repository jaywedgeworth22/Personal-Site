# 2026-08-14 — Doximity short link uses the public view URL

## Context & Objective

Owner: `doximity.jaywedgeworth.com` was landing on
`https://www.doximity.com/cv/jaywedgeworth`, which opens the profile in
edit mode.  It should go to the public view URL.

## Changes Made

- Cloudflare Single Redirect 301 now targets
  `https://www.doximity.com/profiles/3cb95815-2fd1-4985-94e5-3d6f932283bf/view`.
- Snapshot HTML/JS/TOS Doximity hrefs match.
- Mirror workflow preserves the view URL if live Vercel still has `/cv/…`.

## Verification State

```
curl -sI https://doximity.jaywedgeworth.com/
# 301 Location: https://www.doximity.com/profiles/3cb95815-2fd1-4985-94e5-3d6f932283bf/view
```

## Next Steps & Blockers

Live Vercel footer still uses whatever that project has.  Snapshot + short
link are corrected from this seat.
