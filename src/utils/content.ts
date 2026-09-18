import { getCollection } from 'astro:content';
import { assertUniqueSlugs, isPublished } from './publication';

export async function getPublishedProjects() {
  const entries = await getCollection('projects', ({ data }) =>
    isPublished(data),
  );
  assertUniqueSlugs(entries);
  for (const entry of entries) {
    if (entry.data.caseStudyAvailable && !entry.body?.trim())
      throw new Error(`Case study has no body: ${entry.data.slug}`);
  }
  return entries.sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      (b.data.year ?? 0) - (a.data.year ?? 0) ||
      a.data.slug.localeCompare(b.data.slug),
  );
}

export async function getPublishedNotes() {
  const entries = await getCollection('notes', ({ data }) => isPublished(data));
  assertUniqueSlugs(entries);
  for (const entry of entries) {
    if (!entry.body?.trim())
      throw new Error(`Published note has no body: ${entry.data.slug}`);
  }
  return entries.sort(
    (a, b) =>
      b.data.date.getTime() - a.data.date.getTime() ||
      a.data.slug.localeCompare(b.data.slug),
  );
}
