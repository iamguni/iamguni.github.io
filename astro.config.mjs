import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://iamguni.github.io', // Update this to your GitHub Pages URL
  base: '/', // Change to your repository name if not using a custom domain (e.g., '/repo-name')
});
