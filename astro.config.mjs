import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { site } from './config/site.mjs';

export default defineConfig({
  site: site.origin,
  base: site.base,
  output: 'static',
  outDir: site.testContent ? './test-dist' : './dist',
  trailingSlash: 'always',
  prerenderConflictBehavior: 'error',
  cacheDir: site.testContent ? './node_modules/.astro-fixtures' : './node_modules/.astro',
  integrations: [
    mdx(),
    sitemap({ filter: (url) => !/\/404(?:\.html|\/)?$/.test(new URL(url).pathname) }),
  ],
  vite: { plugins: [tailwindcss()] },
});
