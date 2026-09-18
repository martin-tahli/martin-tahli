import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { profile } from '../../src/data/profile.ts';
import { isHttpUrl, withBase } from '../../src/utils/paths.ts';

test('known profile links use valid web URLs', () => {
  for (const url of [
    profile.github,
    profile.repository,
    profile.linkedin,
  ].filter((value): value is string => Boolean(value))) {
    assert.equal(isHttpUrl(url), true);
  }
});
test('a PDF link is rendered only for a file that actually exists', () => {
  if (!profile.cvPdf) return;
  assert.match(profile.cvPdf, /^\/documents\/.+\.pdf$/);
  const path = withBase(profile.cvPdf, '/');
  assert.equal(
    existsSync(new URL(`../../public${path}`, import.meta.url)),
    true,
  );
});
test('placeholder strings cannot enter the profile data', () => {
  assert.doesNotMatch(
    JSON.stringify(profile),
    /\[(?:Contact Email|LinkedIn URL|Professional Experience|Project Content)\]|DO_NOT_PUBLISH_FIXTURE/,
  );
  if (profile.email) assert.match(profile.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
});
test('test fixtures are outside the production content tree', () => {
  for (const kind of ['projects', 'notes']) {
    const directory = new URL(`../../src/content/${kind}/`, import.meta.url);
    for (const name of readdirSync(directory).filter((name) =>
      /\.mdx?$/.test(name),
    )) {
      assert.doesNotMatch(
        readFileSync(new URL(name, directory), 'utf8'),
        /DO_NOT_PUBLISH_FIXTURE|Test fixture —/,
      );
    }
  }
});
