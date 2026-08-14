# 2026-08-14 — Social short-link redirects

## Context & Objective

Owner asked `doximity` / `facebook` / `fb` / `instagram` / `ig` / `x` /
`linkedin`.jaywedgeworth.com to open the matching profile. A prior agent
left proxied host records that cannot encode a profile path. A/AAAA (or a
CNAME to the social apex) cannot do that.

## What was already there

Cloudflare Single Redirects + dummy proxied `AAAA 100::` on:

- `doximity`, `facebook`, `fb`, `ig`, `x` (plus `github`, `activity`)

Those hosts already 302'd. Doximity targeted a login-gated UUID profile
URL, not the public CV.

## Changes Made

- Added dummy proxied `AAAA 100::` for `instagram` and `linkedin`.
- Added 301 Single Redirects for those two hosts.
- Retargeted `doximity` to `https://www.doximity.com/cv/jaywedgeworth`.
  **Superseded the same day:** owner reports `/cv/…` opens edit mode.
  Live target is now `/profiles/…/view` — see
  `2026-08-14-doximity-view.md`.
- Promoted the social profile rules from 302 to 301. Left apex →
  jays.services, `activity`, and `github` at 302.
- Snapshot footer/JS Doximity href updated to the CV URL.

Verified 2026-08-14 (curl, `instagram`/`linkedin` via Cloudflare anycast
while local resolver lagged):

| Host | Status | Location |
|------|--------|----------|
| doximity | 301 | https://www.doximity.com/cv/jaywedgeworth |
| facebook | 301 | https://www.facebook.com/JayWedgeworth |
| fb | 301 | https://www.facebook.com/JayWedgeworth |
| instagram | 301 | https://www.instagram.com/JayWedgeworth/ |
| ig | 301 | https://www.instagram.com/JayWedgeworth/ |
| x | 301 | https://x.com/JayWedgeworth |
| linkedin | 301 | https://www.linkedin.com/in/JayWedgeworth |

Facebook and Instagram full URLs returned HTTP 200 with handle
`JayWedgeworth`, so no extra links were needed. LinkedIn `/in/JayWedgeworth`
matches the footer already on the site. Say if that slug is wrong.

## Trap

Do **not** replace these with A/AAAA to Facebook/Instagram/etc. The dummy
`100::` record is required so the hostname hits Cloudflare; the redirect
rule carries the profile path.
