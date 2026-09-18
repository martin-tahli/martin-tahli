/** Build-time configuration. Override from the shell; no credentials belong here. */
export function resolveSite(env = process.env) {
  const origin = new URL(env.SITE_ORIGIN ?? 'https://martin-tahli.github.io');
  if (!['https:', 'http:'].includes(origin.protocol) || origin.username || origin.password || origin.search || origin.hash || origin.pathname !== '/') {
    throw new Error('SITE_ORIGIN must be an HTTP(S) origin without a path or credentials.');
  }
  const rawBase = env.SITE_BASE ?? '/martin-tahli/';
  if (!/^\/(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_-]*$/.test(rawBase)) {
    throw new Error('SITE_BASE must be an absolute path with plain URL segments.');
  }
  const base = rawBase === '/' ? '/' : `${rawBase.replace(/\/$/, '')}/`;
  if (env.SITE_INDEXABLE !== undefined && !['true', 'false'].includes(env.SITE_INDEXABLE)) {
    throw new Error('SITE_INDEXABLE must be true or false.');
  }
  const testContent = env.PORTFOLIO_TEST_CONTENT === 'true';
  if (testContent && env.SITE_INDEXABLE === 'true') throw new Error('Fixture builds must not be indexable.');
  return { origin: origin.origin, base, indexable: env.SITE_INDEXABLE === 'true', testContent };
}

export const site = resolveSite();
