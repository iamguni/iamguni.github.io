# Personal Website

A fast, lightweight, responsive personal website built with Astro and deployed to GitHub Pages. The site preserves the original converted WordPress/Elementor design while using Astro for the static build.

## Content Management

The website uses **Sveltia CMS** for content editing. The CMS is available at:

`/admin/`

Editable content includes site branding, owner photo, CV, favicon, website and external links, social usernames, Google Maps link, poetry blog link, other links, and the main formatted page content.

Content is stored in `src/data/site.json`. Media uploaded through the CMS is stored in `public/uploads`.

## Project Structure

```text
.
├── public/
│   ├── admin/          # Sveltia CMS interface and configuration
│   ├── assets/         # Static CSS, JavaScript, fonts, and legacy site assets
│   └── uploads/        # CMS-managed images and files
│
├── src/
│   ├── data/           # Site content
│   ├── layouts/        # Shared website layout
│   ├── pages/          # Astro pages and routes
│   └── styles/         # Custom site CSS
│
├── .github/workflows/  # GitHub Pages deployment workflow
├── astro.config.mjs    # Astro configuration
├── package.json        # Project dependencies and commands
├── CNAME               # Custom domain configuration
└── README.md           # Project documentation
```

## Local Development

```bash
npm install
npm run dev
```

Build the production site with:

```bash
npm run build
```

The generated static site is written to `dist/`.

## Deployment

Changes pushed to the `main` branch are built and deployed automatically through GitHub Actions to GitHub Pages.
