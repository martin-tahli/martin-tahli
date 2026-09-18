export interface Publication {
  draft?: boolean;
  date?: Date;
}

/** Fail closed: absence of an explicit draft:false never publishes content. */
export function isPublished(data: Publication, now = new Date()): boolean {
  if (data.draft !== false) return false;
  return data.date === undefined || (Number.isFinite(data.date.getTime()) && data.date <= now);
}

/** Duplicate public slugs must fail the build instead of silently shadowing a route. */
export function assertUniqueSlugs(entries: readonly { data: { slug: string } }[]): void {
  const slugs = new Set<string>();
  for (const { data } of entries) {
    if (slugs.has(data.slug)) throw new Error(`Duplicate public slug: ${data.slug}`);
    slugs.add(data.slug);
  }
}

export function readingMinutes(body: string): number {
  const words = body.replace(/```[\s\S]*?```/g, ' ').trim().split(/\s+/).filter(Boolean);
  return Math.max(1, Math.ceil(words.length / 200));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }).format(date);
}
