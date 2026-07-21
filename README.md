# Gurmeet Singh - Astro Stage 2

This is Stage 2 of the migration from the WordPress Simply Static export to Astro.

## What changed

- Converted the root static page into an Astro page using a reusable `Layout.astro`.
- Removed WordPress-only feed, comments, XML-RPC, Jetpack, stats, emoji and plugin-runtime markup.
- Removed the WordPress footer credit from the visible page.
- Reorganized the required theme, Elementor, click-to-top, custom template and upload assets under `public/assets`.
- Rewrote local asset references from `/wp-content/...` to `/assets/...`.
- Kept the PortfolioX and Elementor CSS/JS that may still affect visual fidelity.
- Added an HTML `/sitemap` route.
- Kept Google Fonts as the only intentional external font dependency.

## Important

Stage 2 prioritizes preserving the existing visual design. Some legacy JavaScript dependencies are still retained, including jQuery from the public jQuery CDN and Elementor runtime scripts. These should be audited in Stage 3 after visual comparison.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is generated in `dist/`.
