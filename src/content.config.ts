import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

/**
 * Ongoing and past research projects.
 * The Markdown body holds the long-form description shown on /research/.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** Optional shorter title for tight layouts (cards, nav). */
    shortTitle: z.string().optional(),
    /** One- or two-sentence summary used on the home page card. */
    summary: z.string(),
    status: z.enum(['ongoing', 'completed', 'paused']),
    tags: z.array(z.string()).default([]),
    /** Lower numbers appear first. */
    order: z.number().int().default(100),
    /** Featured projects appear on the home page. */
    featured: z.boolean().default(false),
    /** Set to false to keep a draft out of the built site. */
    visible: z.boolean().default(true),
    /** Anchor id used on /research/. Falls back to the file name. */
    anchor: z.string().optional(),
    /** External project page, if one exists. */
    externalUrl: z.url().optional(),
  }),
});

/** Lab members. The Markdown body holds the optional long biography. */
const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    nameKo: z.string().optional(),
    role: z.string(),
    /** Set true for the PI so the profile renders in the lead position. */
    lead: z.boolean().default(false),
    affiliation: z.string(),
    bioShort: z.string(),
    interests: z.array(z.string()).default([]),
    email: z.email().optional(),
    website: z.url().optional(),
    scholar: z.url().optional(),
    github: z.url().optional(),
    linkedin: z.url().optional(),
    openreview: z.url().optional(),
    /**
     * File name of the portrait, e.g. "yerin-hwang.jpg".
     * Looked up in src/assets/people/ first (optimised by astro:assets),
     * then in public/people/. Falls back to an initials placeholder.
     */
    photo: z.string().optional(),
    order: z.number().int().default(100),
    visible: z.boolean().default(true),
  }),
});

/** Publications. Frontmatter only — the Markdown body is unused. */
const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    /** Author names in publication order. Append "*" for equal contribution. */
    authors: z.array(z.string()).min(1),
    venue: z.string(),
    year: z.number().int(),
    description: z.string().optional(),
    paperUrl: z.url().optional(),
    pdfUrl: z.url().optional(),
    codeUrl: z.url().optional(),
    projectUrl: z.url().optional(),
    selected: z.boolean().default(false),
    showOnHome: z.boolean().default(false),
    /**
     * "pre-lumi" — work carried out before LUMI Lab was founded.
     * "lumi"     — work carried out at LUMI Lab.
     */
    labEra: z.enum(['pre-lumi', 'lumi']),
    equalContributionNote: z.string().optional(),
    /** Ordering within a year. Lower numbers appear first. */
    order: z.number().int().default(100),
  }),
});

/**
 * News. Intentionally empty at launch.
 *
 * The site has no news UI at all until the first visible entry exists: no
 * section, no nav item, no placeholder. Adding one Markdown file here makes
 * the home-page section, the /news/ page and the nav link appear.
 */
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    summary: z.string().optional(),
    url: z.url().optional(),
    visible: z.boolean().default(true),
  }),
});

export const collections = { projects, people, publications, news };
