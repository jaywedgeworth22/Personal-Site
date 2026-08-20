# Jay Wedgeworth — Personal Site

Canonical repository for **[jays.services](https://jays.services)** and **[jaywedgeworth.com](https://jaywedgeworth.com)**.

Public work on the site is Socratic Trade, Congress.Trade, Usage Monitor, and AI Fleet Coordinator.  Crest and BadgeBook combined into ContactLogo (BadgeBook repo) and are not listed as separate products.

## Layout

| Path | What |
|------|------|
| `site/` | Full React / TanStack Start source (the live Grok/Vercel app) |
| `static/` | Public assets snapshot (`app-icons`, `social-icons`) |
| `.github/workflows/` | Fleet CI, effort-issue sync, live-site mirror |
| `scripts/` | Fleet Slack / effort helpers |

## Live deploy

The production site is published from the Grok app builder to Vercel (domains `jays.services` / `jaywedgeworth.com`).  This repo is the versioned source + snapshot.

## Local

```sh
cd site
npm install
npm run dev
```

## License

Private. All rights reserved.
