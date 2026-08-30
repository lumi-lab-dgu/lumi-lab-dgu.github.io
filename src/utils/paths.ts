/**
 * Base-path helpers.
 *
 * GitHub Pages serves project repositories from a sub-path
 * (https://owner.github.io/repo-name/), so no internal URL may be written as a
 * bare root-relative string. Every internal link, image, favicon and file path
 * goes through `withBase()`.
 */

const RAW_BASE: string = import.meta.env.BASE_URL ?? '/';

/** Base without a trailing slash: '' for a root deploy, '/repo' otherwise. */
const BASE = RAW_BASE.endsWith('/') ? RAW_BASE.slice(0, -1) : RAW_BASE;

/** Prefix an internal, root-relative path with the configured base path. */
export function withBase(path: string): string {
  const normalised = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${normalised}`;
}

/** Absolute URL for canonical links, Open Graph tags and structured data. */
export function absoluteUrl(path: string, siteUrl: URL | undefined): string {
  const relative = withBase(path);
  return siteUrl ? new URL(relative, siteUrl).href : relative;
}

/**
 * True when `href` matches the current pathname, tolerating a missing or extra
 * trailing slash. Used for `aria-current` on navigation links.
 */
export function isCurrentPath(href: string, pathname: string): boolean {
  const strip = (value: string) => {
    const withoutTrailing = value.length > 1 ? value.replace(/\/+$/, '') : value;
    return withoutTrailing === '' ? '/' : withoutTrailing;
  };
  return strip(withBase(href)) === strip(pathname);
}
