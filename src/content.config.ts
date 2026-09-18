import { defineCollection, type SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { site } from '../config/site.mjs';
import { isHttpUrl } from './utils/paths';

const contentRoot = site.testContent ? './tests/fixtures' : './src/content';
const link = z
  .string()
  .refine(isHttpUrl, 'Use an HTTP(S) URL without embedded credentials.');
const slug = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use a lowercase, hyphenated slug.');
const metadata = {
  title: z.string().min(1),
  slug,
  description: z.string().min(1),
  draft: z.boolean().default(true),
};
const media = ({ image }: SchemaContext) => ({
  heroImage: image().optional(),
  heroAlt: z.string().min(1).optional(),
  heroCaption: z.string().optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: `${contentRoot}/projects` }),
  schema: (context) =>
    z
      .object({
        ...metadata,
        ...media(context),
        summary: z.string().min(1),
        featured: z.boolean().default(false),
        status: z.enum(['in-progress', 'live', 'archived']).optional(),
        year: z.number().int().min(1900).max(2100).optional(),
        role: z.string().min(1).optional(),
        visibility: z.enum(['public', 'private']).optional(),
        technologies: z.array(z.string().min(1)).default([]),
        categories: z.array(z.string().min(1)).default([]),
        liveUrl: link.optional(),
        githubUrl: link.optional(),
        videoUrl: link.optional(),
        caseStudyAvailable: z.boolean().default(false),
      })
      .refine((data) => !data.heroImage || Boolean(data.heroAlt), {
        message: 'A hero image requires meaningful alt text.',
        path: ['heroAlt'],
      })
      .refine((data) => !data.githubUrl || data.visibility === 'public', {
        message:
          'A source-code link requires explicitly public repository visibility.',
        path: ['githubUrl'],
      }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: `${contentRoot}/notes` }),
  schema: (context) =>
    z
      .object({
        ...metadata,
        ...media(context),
        date: z.coerce.date(),
        updated: z.coerce.date().optional(),
        category: z.enum([
          'Architecture',
          'AI Systems',
          'Experiments',
          'Engineering',
          'Product',
          'Building in Public',
          'Lessons Learned',
        ]),
        tags: z.array(z.string().min(1)).default([]),
        relatedProjects: z.array(slug).default([]),
      })
      .refine((data) => !data.heroImage || Boolean(data.heroAlt), {
        message: 'A hero image requires meaningful alt text.',
        path: ['heroAlt'],
      })
      .refine((data) => !data.updated || data.updated >= data.date, {
        message: 'An update cannot precede publication.',
        path: ['updated'],
      }),
});

export const collections = { projects, notes };
