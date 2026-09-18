import type { APIRoute } from 'astro';
import { site } from '../../config/site.mjs';
import { withBase } from '../utils/paths';

export const GET: APIRoute = () => new Response(
  site.indexable
    ? `User-agent: *\nAllow: /\nSitemap: ${new URL(withBase('/sitemap-index.xml', site.base), site.origin)}\n`
    : 'User-agent: *\nDisallow: /\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
