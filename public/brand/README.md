# public/brand/

Brand assets for reuse in slides, posters and profiles.

The wordmark itself is drawn in code rather than shipped as an image:

- `src/components/Logo.astro` — the header/footer wordmark and light mark
- `public/favicon.svg` — the browser tab icon
- `public/og/lumi-og.svg` — the Open Graph card source (`npm run og` rebuilds
  the PNG next to it)

Colours:

| Token           | Value     | Use                                    |
| --------------- | --------- | -------------------------------------- |
| Primary         | `#5146B8` | links, buttons, primary accents        |
| Primary (dark)  | `#332B82` | wordmark, hover states, headings       |
| Accent (gold)   | `#E5A93A` | small marks and details only           |
| Ink             | `#17213A` | body text and dark sections            |
| Background      | `#FAFAF6` | page background                        |

Typefaces: Manrope (headings) and Inter (body), both self-hosted from
`src/fonts/`.
