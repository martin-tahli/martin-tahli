/** Join an application-relative path to a deployment base, without swallowing assets or fragments. */
export function withBase(path: string, base: string): string {
  if (!/^\/(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_-]*$/.test(base)) {
    throw new Error('Invalid deployment base.');
  }
  if (/^(?:[a-zA-Z][a-zA-Z\d+.-]*:|\/\/)/.test(path) || /[\\\s]/.test(path)) {
    throw new Error('Expected a local path, not an external URL.');
  }
  const pathname = path.split(/[?#]/, 1)[0] ?? '';
  for (const segment of pathname.split('/')) {
    const decoded = decodeURIComponent(segment);
    if (decoded === '.' || decoded === '..' || /[/\\]/.test(decoded)) {
      throw new Error('Path traversal and encoded separators are not allowed.');
    }
  }
  const prefix = base === '/' ? '' : base.replace(/\/$/, '');
  return `${prefix}/${path.replace(/^\//, '')}`;
}

export function isActiveRoute(
  pathname: string,
  route: string,
  base: string,
): boolean {
  const target = withBase(route, base).replace(/\/$/, '');
  const current = pathname.replace(/\/$/, '');
  return (
    current === target || (route !== '/' && current.startsWith(`${target}/`))
  );
}

export function isHttpUrl(value: string): boolean {
  try {
    if (
      value.trim() !== value ||
      Array.from(value).some(
        (character) =>
          character.charCodeAt(0) < 32 || character.charCodeAt(0) === 127,
      )
    )
      return false;
    const url = new URL(value);
    return (
      ['http:', 'https:'].includes(url.protocol) &&
      !url.username &&
      !url.password
    );
  } catch {
    return false;
  }
}
