import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    icon(),
  ],
  site: 'https://simpleseniorfitness.com',
  trailingSlash: 'never',
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100,
      },
      hmr: {
        overlay: true,
      },
    },
  },
});
