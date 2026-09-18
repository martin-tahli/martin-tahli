import { test } from 'node:test';
import assert from 'node:assert/strict';
import { withBase, isActiveRoute, isHttpUrl } from '../../src/utils/paths.ts';

for (const [path, base, expected] of [
  ['/', '/', '/'],
  ['/work/', '/', '/work/'],
  ['/work/', '/martin-tahli/', '/martin-tahli/work/'],
  ['notes/a-note/', '/martin-tahli', '/martin-tahli/notes/a-note/'],
  ['/favicon.svg', '/martin-tahli/', '/martin-tahli/favicon.svg'],
  [
    '/work/?tag=AI#architecture',
    '/martin-tahli/',
    '/martin-tahli/work/?tag=AI#architecture',
  ],
  ['/', '/one/two/', '/one/two/'],
] as const)
  test(`base path: ${path} at ${base}`, () =>
    assert.equal(withBase(path, base), expected));

for (const path of [
  'https://example.com',
  '//example.com',
  'javascript:alert(1)',
  '/../secret',
  '/%2e%2e/secret',
  '/a%2fb/',
  '/a%5cb/',
  '/a b/',
  '/%',
  '/a\\b/',
]) {
  test(`reject unsafe local path: ${path}`, () =>
    assert.throws(() => withBase(path, '/')));
}

test('reject malformed deployment base', () =>
  assert.throws(() => withBase('/work/', '//bad/')));
test('active work route includes its case study', () =>
  assert.equal(
    isActiveRoute('/martin-tahli/work/example/', '/work/', '/martin-tahli/'),
    true,
  ));
test('active route requires a segment boundary', () =>
  assert.equal(
    isActiveRoute('/martin-tahli/workshop/', '/work/', '/martin-tahli/'),
    false,
  ));
test('home is not active for every page', () =>
  assert.equal(
    isActiveRoute('/martin-tahli/about/', '/', '/martin-tahli/'),
    false,
  ));
test('root and trailing-slash variants match', () =>
  assert.equal(isActiveRoute('/martin-tahli', '/', '/martin-tahli/'), true));
for (const url of ['https://github.com/martin-tahli', 'http://localhost:4321/'])
  test(`accept web URL: ${url}`, () => assert.equal(isHttpUrl(url), true));
for (const url of [
  'javascript:alert(1)',
  'mailto:me@example.com',
  'https://user:secret@example.com/',
  '/work/',
  '[LinkedIn URL]',
  ' https://example.com',
  'https://example.com\n',
])
  test(`reject invalid web URL: ${JSON.stringify(url)}`, () =>
    assert.equal(isHttpUrl(url), false));
