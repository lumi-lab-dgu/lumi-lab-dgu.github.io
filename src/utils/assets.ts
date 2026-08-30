import fs from 'node:fs';
import path from 'node:path';

/**
 * Build-time existence check for a file in `public/`.
 *
 * Used so that optional assets (the PI portrait, the CV PDF) either render
 * properly or are omitted entirely — never as a broken image or a dead button.
 */
export function publicFileExists(publicPath: string): boolean {
  const relative = publicPath.replace(/^\/+/, '');
  const absolute = path.join(process.cwd(), 'public', relative);
  try {
    return fs.statSync(absolute).isFile();
  } catch {
    return false;
  }
}
