# Astro Stage 1 — Faithful Migration

This is the first stage of migrating the WordPress-generated static site to Astro.

## Goal

- Preserve the visual design and content of the root `index.html`.
- Keep the existing local CSS/JS/assets required by the page.
- Remove unrelated files from the original Simply Static export.
- Keep WordPress/Elementor runtime dependencies temporarily where they are needed for visual/behavioral parity.

## Run

```bash
npm install
npm run dev
```

Then open the local URL shown by Astro.

## Stage 2

The next stage should:
1. Compare the Astro page with the original static page.
2. Remove unnecessary WordPress/plugin dependencies.
3. Consolidate CSS and JavaScript.
4. Move reusable sections into Astro components.
5. Move editable content into a CMS-friendly content model.
6. Add clean `/sitemap` and generate `sitemap.xml`.
7. Configure GitHub Pages deployment.

## Note

`astro.config.mjs` contains a placeholder `site` value. Replace it with the real production domain before generating the final sitemap.
