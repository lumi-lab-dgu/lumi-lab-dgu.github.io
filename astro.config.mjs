// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * ---------------------------------------------------------------------------
 * DEPLOYMENT CONFIGURATION — the only two values you normally need to change.
 * ---------------------------------------------------------------------------
 *
 * `site`  the absolute origin the site is served from, e.g.
 *         https://lumi-lab-dgu.github.io
 * `base`  the sub-path the site is served from.
 *           - user/organization Pages  (repo named `<owner>.github.io`)  ->  '/'
 *           - project Pages            (repo named `<repo-name>`)        ->  '/<repo-name>'
 *
 * In CI these are supplied automatically by `actions/configure-pages`
 * (see .github/workflows/deploy.yml), so GitHub Pages works for either
 * repository layout without editing this file.
 *
 * For a local production preview you can override them with a `.env` file
 * (copy `.env.example`) or by editing the two fallbacks below.
 */
const SITE_URL = process.env.PUBLIC_SITE_URL || 'https://lumi-lab-dgu.github.io';
const BASE_PATH = process.env.PUBLIC_BASE_PATH || '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
});
