import { getCollection, getEntry, render, type CollectionEntry } from 'astro:content';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { Locale } from '../data/i18n';

export type ProjectEntry = CollectionEntry<'projects'>;
export type PersonEntry = CollectionEntry<'people'>;
export type PublicationEntry = CollectionEntry<'publications'>;
export type NewsEntry = CollectionEntry<'news'>;

/** Visible projects, ordered by `order` then title. */
export async function getProjects(): Promise<ProjectEntry[]> {
  const entries = await getCollection('projects', ({ data }) => data.visible);
  return entries.sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title),
  );
}

/** Visible, featured projects — the home-page "Ongoing Projects" cards. */
export async function getFeaturedProjects(): Promise<ProjectEntry[]> {
  return (await getProjects()).filter(({ data }) => data.featured);
}

/**
 * A project with its text resolved for one language.
 *
 * Structure (status, tags, order, anchor) always comes from the English entry;
 * only the prose is swapped, so a project can never be half-defined.
 */
export interface LocalizedProject {
  id: string;
  anchor: string;
  status: ProjectEntry['data']['status'];
  tags: string[];
  externalUrl?: string;
  title: string;
  shortTitle?: string;
  summary: string;
  Content: AstroComponentFactory;
}

async function localizeProject(
  entry: ProjectEntry,
  locale: Locale,
): Promise<LocalizedProject> {
  const translation =
    locale === 'ko' ? await getEntry('projectsKo', entry.id) : undefined;
  const source = translation ?? entry;
  const { Content } = await render(source);

  return {
    id: entry.id,
    anchor: entry.data.anchor ?? entry.id,
    status: entry.data.status,
    tags: entry.data.tags,
    externalUrl: entry.data.externalUrl,
    title: translation?.data.title ?? entry.data.title,
    shortTitle: translation?.data.shortTitle ?? entry.data.shortTitle,
    summary: translation?.data.summary ?? entry.data.summary,
    Content,
  };
}

/** Visible projects with text in `locale`, ordered as the English entries are. */
export async function getLocalizedProjects(locale: Locale): Promise<LocalizedProject[]> {
  const entries = await getProjects();
  return Promise.all(entries.map((entry) => localizeProject(entry, locale)));
}

/** Featured projects with text in `locale` — the home-page cards. */
export async function getLocalizedFeaturedProjects(
  locale: Locale,
): Promise<LocalizedProject[]> {
  const entries = await getFeaturedProjects();
  return Promise.all(entries.map((entry) => localizeProject(entry, locale)));
}

/** Visible people, PI first, then by `order`. */
export async function getPeople(): Promise<PersonEntry[]> {
  const entries = await getCollection('people', ({ data }) => data.visible);
  return entries.sort(
    (a, b) =>
      Number(b.data.lead) - Number(a.data.lead) ||
      a.data.order - b.data.order ||
      a.data.name.localeCompare(b.data.name),
  );
}

/** All publications, newest year first, then by `order`. */
export async function getPublications(): Promise<PublicationEntry[]> {
  const entries = await getCollection('publications');
  return entries.sort(
    (a, b) =>
      b.data.year - a.data.year ||
      a.data.order - b.data.order ||
      a.data.title.localeCompare(b.data.title),
  );
}

export interface PublicationYearGroup {
  year: number;
  items: PublicationEntry[];
}

/** Publications grouped by year, newest year first. */
export function groupPublicationsByYear(
  publications: PublicationEntry[],
): PublicationYearGroup[] {
  const groups = new Map<number, PublicationEntry[]>();
  for (const publication of publications) {
    const bucket = groups.get(publication.data.year);
    if (bucket) {
      bucket.push(publication);
    } else {
      groups.set(publication.data.year, [publication]);
    }
  }
  return [...groups.entries()]
    .sort(([a], [b]) => b - a)
    .map(([year, items]) => ({ year, items }));
}

/**
 * Present news files, resolved by Vite at build time. Used to skip
 * `getCollection('news')` entirely while the collection is still empty, which
 * would otherwise log a warning for every page rendered.
 */
const newsFiles = import.meta.glob('/src/content/news/**/*.md');

/**
 * Visible news, newest first.
 *
 * Returns an empty array when the collection has no entries, which is how the
 * rest of the site decides whether any news UI exists at all.
 */
export async function getNews(): Promise<NewsEntry[]> {
  if (Object.keys(newsFiles).length === 0) return [];
  const entries = await getCollection('news', ({ data }) => data.visible);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function hasNews(): Promise<boolean> {
  return (await getNews()).length > 0;
}
