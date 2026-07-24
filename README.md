# Gurmeet Singh - A Coding Kavi Portfolio (Astro + Tailwind CSS)

Professional personal portfolio tailored specifically for technical architecture leadership and fine lyrical craft skills.

## Features
- Complete custom configuration for **GitHub Pages** distribution.
- Beautiful custom brand style inspired by structural red/yellow/black theme accents.
- Full responsive structure with dedicated Hero layout grids, full-text biography, and integrated social tiles.

## Getting Started Locally

1. **Unzip** the archive package.
2. Open terminal inside the root project directory (`guni-portfolio-astro`).
3. Install project dependencies:
   ```bash
   npm install
   ```
4. Spin up the modern hot-reload development preview:
   ```bash
   npm run dev
   ```
5. Open your local web link (typically `http://localhost:4321`).

## How to Customize Image Frame
Place your preferred high-resolution profile portrait picture inside the standard directory folder structure (e.g. `public/profile.jpg`), then modify line 92 of `src/pages/index.astro` to include an exact `<img src="/profile.jpg" ... />` component element inside the frame div.

## Deployment to GitHub Pages
To successfully serve this out on your GitHub profile distribution domain (`username.github.io`):
1. Change the `site` domain entry inside `astro.config.mjs` to match your target landing endpoint.
2. Build standard static artifact bundles via:
   ```bash
   npm run build
   ```
3. Push output production distribution directories (`dist/*`) directly to your active repository branch.
