import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resolveSite } from '../../config/site.mjs';

test('default configuration targets the current repo without indexing', () => assert.deepEqual(resolveSite({}), { origin: 'https://martin-tahli.github.io', base: '/martin-tahli/', indexable: false, testContent: false }));
test('custom-domain root needs no component rewrites', () => assert.equal(resolveSite({ SITE_ORIGIN: 'https://example.com', SITE_BASE: '/' }).base, '/'));
test('a missing trailing slash is normalized', () => assert.equal(resolveSite({ SITE_BASE: '/portfolio' }).base, '/portfolio/'));
for (const origin of ['ftp://example.com', 'https://user:password@example.com', 'https://example.com/wrong/', 'https://example.com/?token=secret']) test(`reject invalid origin: ${origin}`, () => assert.throws(() => resolveSite({ SITE_ORIGIN: origin })));
for (const base of ['//elsewhere', '/one/../two', 'relative', '/white space/', '/?q=test']) test(`reject invalid base: ${base}`, () => assert.throws(() => resolveSite({ SITE_BASE: base })));
test('indexing must be deliberately enabled', () => assert.equal(resolveSite({ SITE_INDEXABLE: 'true' }).indexable, true));
test('typo cannot silently change indexing', () => assert.throws(() => resolveSite({ SITE_INDEXABLE: 'yes' })));
test('fixture output is marked separately', () => assert.equal(resolveSite({ PORTFOLIO_TEST_CONTENT: 'true' }).testContent, true));
test('fixtures cannot be indexable', () => assert.throws(() => resolveSite({ PORTFOLIO_TEST_CONTENT: 'true', SITE_INDEXABLE: 'true' })));
