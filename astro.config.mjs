import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://pedalscience.com',
    trailingSlash: 'always',
    build: {
        format: 'directory',
    },
    integrations: [tailwind(), sitemap()],
});