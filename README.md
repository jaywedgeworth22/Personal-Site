# Jay Wedgeworth — Personal/Portfolio

Canonical repository for the personal portfolio at **[jays.services](https://jays.services)** and **[jaywedgeworth.com](https://jaywedgeworth.com)**.

## Current status

- Live site is deployed on Vercel by Grok.
- This repo currently holds a **static snapshot** of the published site (HTML + assets) under `static/`.
- Original TypeScript/React source is not yet present in this repository. When the real source is available, it should replace or live alongside the snapshot.

## Automatic updates

A GitHub Action (`.github/workflows/mirror-site.yml`) runs on a schedule (and can be triggered manually) to:

1. Fetch the current live site from https://jays.services
2. Update the `static/` directory
3. Commit any changes back to this repo

This keeps a versioned history of the published site even before the full source is migrated here.

## Other backups

Full source backups of related application repositories (Socratic.Trade, Congress.Trade, Usage-Monitor, etc.) are also maintained in Google Drive under the folder **Website & App Source Backups**.

## Domains

| Domain | Notes |
|--------|-------|
| jays.services | Primary |
| jaywedgeworth.com | Historical / redirect target (check) |

## License

Private. All rights reserved.
