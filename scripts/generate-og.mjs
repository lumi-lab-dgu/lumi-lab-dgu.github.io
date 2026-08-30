/**
 * Rasterises public/og/lumi-og.svg to public/og/lumi-og.png (1200×630).
 *
 * Open Graph consumers do not render SVG, so the PNG is committed to the
 * repository. Re-run this only when the SVG changes:
 *
 *   npm run og
 *
 * `sharp` is a dev dependency and is also what Astro uses to optimise images.
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

const root = process.cwd();
const source = path.join(root, 'public', 'og', 'lumi-og.svg');
const target = path.join(root, 'public', 'og', 'lumi-og.png');

const svg = await readFile(source);
const png = await sharp(svg, { density: 144 }).resize(1200, 630, { fit: 'fill' }).png().toBuffer();

await writeFile(target, png);
console.log(`Wrote ${path.relative(root, target)} (${png.length} bytes)`);
