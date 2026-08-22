# Jay Wedgeworth — Personal Site

Canonical repository for **[jays.services](https://jays.services)** and **[jaywedgeworth.com](https://jaywedgeworth.com)**.

Public work on the site is Socratic Trade, Congress.Trade, Usage Monitor, DealDex, ContactLogo, and AI Fleet Coordinator.  Crest and BadgeBook combined into ContactLogo (BadgeBook repo).  Production is the owner's personal Vercel Hobby team (Jay's Services / `jayw`), GitHub `main` → `site/`, behind Cloudflare.

## Layout

| Path | What |
|------|------|
| `site/` | Full React / TanStack Start source (personal Vercel Hobby project) |
| `static/` | Public assets snapshot (`app-icons`, `social-icons`) |
| `.github/workflows/` | Fleet CI, effort-issue sync, live-site mirror |
| `scripts/` | Fleet Slack / effort helpers |

## Live deploy

The production site is the Vercel project **personal-site** on team **Jay's Services** (`jayw`), linked to this GitHub repo, root directory `site/`.  Domains `jays.services` / `jaywedgeworth.com` stay on Cloudflare in front.  Do not publish production from the xAI Grok builder.

## Local

```sh
cd site
npm install
npm run dev
```

## License

Private. All rights reserved.
