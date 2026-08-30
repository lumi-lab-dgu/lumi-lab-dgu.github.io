import { getCollection, type CollectionEntry } from 'astro:content';

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
