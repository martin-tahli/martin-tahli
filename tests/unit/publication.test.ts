import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  isPublished,
  assertUniqueSlugs,
  readingMinutes,
  formatDate,
} from '../../src/utils/publication.ts';
const now = new Date('2026-09-18T12:00:00Z');

test('missing publication flag fails closed', () =>
  assert.equal(isPublished({}, now), false));
test('drafts stay hidden even after their date', () =>
  assert.equal(
    isPublished({ draft: true, date: new Date('2020-01-01') }, now),
    false,
  ));
test('explicitly published project does not require a date', () =>
  assert.equal(isPublished({ draft: false }, now), true));
test('future notes are excluded', () =>
  assert.equal(
    isPublished({ draft: false, date: new Date('2026-09-19T00:00:00Z') }, now),
    false,
  ));
test('publication boundary is inclusive', () =>
  assert.equal(isPublished({ draft: false, date: now }, now), true));
test('invalid dates fail closed', () =>
  assert.equal(
    isPublished({ draft: false, date: new Date('invalid') }, now),
    false,
  ));
test('past notes are published', () =>
  assert.equal(
    isPublished({ draft: false, date: new Date('2026-09-17') }, now),
    true,
  ));
test('duplicate slugs fail loudly', () =>
  assert.throws(
    () =>
      assertUniqueSlugs([{ data: { slug: 'one' } }, { data: { slug: 'one' } }]),
    /Duplicate public slug/,
  ));
test('distinct slugs are valid', () =>
  assert.doesNotThrow(() =>
    assertUniqueSlugs([{ data: { slug: 'one' } }, { data: { slug: 'two' } }]),
  ));
test('empty collection is valid', () =>
  assert.doesNotThrow(() => assertUniqueSlugs([])));
test('empty note has minimum reading estimate', () =>
  assert.equal(readingMinutes(''), 1));
test('reading estimate scales with prose length', () =>
  assert.equal(readingMinutes('word '.repeat(401)), 3));
test('code is not counted as prose', () =>
  assert.equal(readingMinutes('```ts\n' + 'code '.repeat(800) + '\n```'), 1));
test('date rendering is UTC, independent of machine timezone', () =>
  assert.equal(formatDate(new Date('2026-09-18T00:00:00Z')), '18 Sept 2026'));
