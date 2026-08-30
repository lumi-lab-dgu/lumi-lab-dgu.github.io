# LUMI Lab website

Official website of **LUMI Lab — Language Understanding and Machine Intelligence
Lab**, Department of Computer Science and Artificial Intelligence, Dongguk
University.

It is a static site built with [Astro](https://astro.build/). There is no
server, no database and no contact form: everything is plain HTML, CSS and a
few lines of JavaScript, published to GitHub Pages.

This README is written so that a lab member who is not a web developer can keep
the site up to date.

---

## Contents

1. [Running the site on your computer](#running-the-site-on-your-computer)
2. [English and Korean](#english-and-korean)
3. [Everyday content edits](#everyday-content-edits)
4. [Where everything lives](#where-everything-lives)
5. [Deploying to GitHub Pages](#deploying-to-github-pages)
6. [Custom domain](#custom-domain)
7. [Analytics and privacy](#analytics-and-privacy)
8. [Design notes](#design-notes)

---

## Running the site on your computer

You need [Node.js](https://nodejs.org/) 20 or newer (22 LTS recommended).
Check with `node -v`.

```bash
npm install     # once, and again whenever dependencies change
npm run dev     # start the local preview at http://localhost:4321
```

Leave `npm run dev` running while you edit — the browser updates by itself.
Press `Ctrl+C` to stop it.

Before pushing changes, run both of these and make sure they finish without
errors:

```bash
npm run check   # type-checks the site and validates all content frontmatter
npm run build   # produces the production site in dist/
npm run preview # optional: serve the built site exactly as it will be published
```

`npm run check` is the important one for content edits: if a Markdown file is
missing a required field or has a typo in a field name, it fails and tells you
which file and which field.

> While the `news` collection is empty, the build prints one
> `No files found matching "**/*.md" in directory "src/content/news"` warning.
> That is expected and harmless — it disappears once the first news item is
> added.

There is one more script, needed only if you change the social-sharing image:

```bash
npm run og      # re-renders public/og/lumi-og.png from public/og/lumi-og.svg
```

---

## English and Korean

The site exists in two full versions with a toggle in the header:

| Language | URL |
| --- | --- |
| English | `https://lumi-lab-dgu.github.io/` |
| Korean  | `https://lumi-lab-dgu.github.io/ko/` |

**Some things stay in English in both versions, deliberately:**

- the lab name and its expansion (LUMI, Language Understanding and Machine
  Intelligence)
- everything about a publication — title, authors, venue, and the
  Paper / PDF / Code / Project links
- the research keyword chips (`LLM-as-a-Judge`, `Tool Use`, …)

That is what keeps the two versions from becoming a burden. The parts that grow
over time are single-sourced, so **adding a paper never requires a
translation**. Only the fixed prose is written twice.

### Where each piece of text lives

| Text | File |
| --- | --- |
| Every interface string and page paragraph | `src/data/i18n.ts` — `ui.en` and `ui.ko` side by side |
| Research area titles and descriptions | `src/data/research.ts` — each has `{ en, ko }` |
| Project titles, summaries, descriptions | `src/content/projects/` (en) and `src/content/projects-ko/` (ko) |
| PI role, affiliation and biography | `src/content/people/yerin-hwang.md` — `roleKo`, `affiliationKo`, `bioShortKo`, `bioLongKo` |
| Publications | `src/content/publications/` — English only, used by both versions |

`src/data/i18n.ts` is the file to open for almost any wording change. The
English and Korean objects have identical shapes, so if you add a key to one
and forget the other, `npm run check` fails and names the missing key.

### Adding a page

Page bodies live once in `src/views/`, and `src/pages/` holds two thin route
files per page — one English, one Korean — that render the same view with a
different `lang`. To add a page, create the view, then a route file in
`src/pages/` and one in `src/pages/ko/`.

### If a translation is missing

Korean project files and Korean person fields fall back to the English text
rather than rendering blank, so a half-translated entry still produces a
complete page.

---

## Everyday content edits

All content lives in Markdown files under `src/content/` and in one settings
file, `src/data/site.ts`. You should not need to touch any component to add a
project, a person, a paper or a news item.

The text between the two `---` lines at the top of a Markdown file is called
*frontmatter*: it is the structured data. Everything below is free prose.

### Change the PI title, email, address or lab metadata

Edit `src/data/site.ts`. For example, to switch the appointment status:

```ts
piTitle: 'Incoming Assistant Professor · starting September 2026',
```

Every place the title appears on the site updates at once.

### Add an ongoing project

Create a new file in `src/content/projects/`, for example
`src/content/projects/evaluating-long-context-agents.md`:

```markdown
---
title: Evaluating Long-Context Agents
summary: >-
  One or two sentences shown on the home page card.
status: ongoing          # ongoing | completed | paused
tags:
  - LLM Agents
  - Evaluation
order: 4                 # lower numbers appear first
featured: true           # show on the home page
visible: true            # set to false to hide a draft
anchor: long-context     # link target: /research/#long-context
---

The full description shown on the Research page goes here. Two or three
paragraphs is a good length.
```

The home page shows every project with `featured: true`; `/research/` shows
every project with `visible: true`, grouped by status.

To mark a project finished, change `status` to `completed`. It moves below the
ongoing projects on the Research page and its card label changes.

For the Korean version, add a file of the **same name** in
`src/content/projects-ko/` with just `title`, `summary` and the Korean body.
Structure — status, tags, order, anchor — always comes from the English file, so
it is never defined twice. Without the Korean file the project still appears on
`/ko/`, showing the English text.

### Add a publication

Create a new file in `src/content/publications/`. Only frontmatter is used —
the body can be empty:

```markdown
---
title: "Paper Title: With a Subtitle"
authors:
  - Student Name*
  - Yerin Hwang*
  - Coauthor Name
venue: ACL 2027
year: 2027
description: >-
  One sentence describing what the paper studies.
paperUrl: https://aclanthology.org/...
pdfUrl:                     # omit the line entirely if there is no link
codeUrl: https://github.com/...
projectUrl:
selected: true
showOnHome: false
labEra: lumi                # pre-lumi | lumi
order: 1                    # ordering within the year
---
```

Notes:

- Publications are **not translated** — the same entry serves both versions.
- Wrap the title in double quotes if it contains a colon.
- Append `*` to an author name for equal contribution. The
  `* Equal contribution.` footnote appears automatically when at least one
  author is marked.
- Any link field you leave out simply has no button. Never point a link at a
  URL that does not exist yet — leave the field off instead.
- `Yerin Hwang` is highlighted automatically in the author list.

**Mark a publication as LUMI work**

```yaml
labEra: lumi
```

Once the list contains both `lumi` and `pre-lumi` entries, small
`LUMI Lab` / `Prior to LUMI` labels appear. While everything is `pre-lumi`
they stay hidden, because the page intro already says so.

**Show a publication on the home page**

```yaml
showOnHome: true
```

The home page shows at most four such publications, newest first.

### Add the first news item

Create a file in `src/content/news/`, for example
`src/content/news/2026-09-01-emnlp-acceptance.md`:

```markdown
---
date: 2026-09-01
title: Paper accepted at EMNLP 2026
summary: Optional one-line context.
url: https://aclanthology.org/...   # optional
visible: true
---
```

The moment the first visible news item exists, three things appear by
themselves:

- a **News** section on the home page,
- a **/news/** page,
- a **News** link in the main navigation, between Home and Research.

Until then none of them exist — the site shows no empty section and no
"coming soon" placeholder. Deleting all news items reverses this cleanly.

### Add a new member

Create a file in `src/content/people/`, for example
`src/content/people/hong-gildong.md`:

```markdown
---
name: Gildong Hong
nameKo: 홍길동
role: M.S. Student
lead: false
affiliation: Department of Computer Science and Artificial Intelligence, Dongguk University
bioShort: >-
  Two or three sentences.
interests:
  - LLM evaluation
  - Tool use
email: someone@dongguk.edu     # all contact fields are optional
github: https://github.com/...
photo: hong-gildong.jpg        # optional
order: 10
visible: true
---

An optional longer biography.
```

Members appear under the PI on `/people/`, in `order`. Keep `lead: true` on the
PI only.

Optional Korean fields: `roleKo`, `affiliationKo`, `bioShortKo`, `bioLongKo`.
Each falls back to its English counterpart when absent.

### Add the PI photo

Put the image at **either** of these paths, using the file name in the `photo:`
field of `src/content/people/yerin-hwang.md`:

- `src/assets/people/yerin-hwang.jpg` — recommended; Astro resizes and
  optimises it automatically.
- `public/people/yerin-hwang.jpg` — served exactly as provided.

A roughly square image of at least 480×480 px works best. Until a file exists,
the page shows a `YH` initials placeholder rather than a broken image.

### Add the CV

Put the PDF at:

```
public/files/yerin-hwang-cv.pdf
```

The CV button on `/people/` appears automatically once the file is there, and
stays hidden while it is not. To use a different name, change `cvPath` in
`src/data/site.ts`.

---

## Where everything lives

```
src/
  components/     reusable pieces of the interface
  content/        all editable content (projects, people, publications, news)
  data/
    site.ts       lab name, PI details, email, address
    i18n.ts       every English and Korean interface string and paragraph
    research.ts   the four research areas and the three principles
  layouts/        the page shell shared by every page
  views/          one file per page, shared by both languages
  pages/          thin route files: src/pages (English), src/pages/ko (Korean)
  styles/
    global.css    colours, typography, spacing, shared components
  utils/
    paths.ts      base-path helpers — always use withBase() for internal links
  fonts/          self-hosted Inter and Manrope subsets
  content.config.ts   the schema every content file is validated against

public/           files copied as-is: favicon, robots.txt, OG image, CV, photos
scripts/          one-off maintenance scripts
.github/workflows/deploy.yml   the GitHub Pages deployment
```

Two rules keep the site maintainable:

1. **Content never goes inside a component.** If you find yourself editing a
   `.astro` file to change wording that belongs to a project, person or paper,
   it belongs in `src/content/` or `src/data/site.ts` instead.
2. **Internal links always go through `withBase()`.** Writing `/research/`
   directly breaks the site when it is served from a sub-path such as
   `https://owner.github.io/repo-name/`.

---

## Deploying to GitHub Pages

The repository ships with `.github/workflows/deploy.yml`, which builds and
publishes the site on every push to `main`.

1. **Create the organization and the repository.** The lab uses a dedicated
   GitHub organization so the site keeps a short URL and stays a lab asset
   rather than living under one personal account. An organization is not a
   second GitHub account — you create it while signed in as yourself, for free.

   - Signed in, go to **+ (top right) → New organization** and choose the
     **Free** plan. Name it `lumi-lab-dgu`.
   - Inside the new organization, create a repository named exactly
     `lumi-lab-dgu.github.io`, public, with no README or .gitignore
     (this folder already has both).

   Naming the repository `<organization>.github.io` is what produces the short
   address `https://lumi-lab-dgu.github.io/`. Any other repository name still
   works, but is served from a sub-path such as
   `https://lumi-lab-dgu.github.io/<repo-name>/`.

   Changing this later changes every link to the site, so it is worth settling
   before the first public announcement.

2. **Push this code** to that repository, on the `main` branch. From this
   folder:

   ```bash
   git init
   git add .
   git commit -m "LUMI Lab website"
   git branch -M main
   git remote add origin https://github.com/lumi-lab-dgu/lumi-lab-dgu.github.io.git
   git push -u origin main
   ```

   Commit `package-lock.json` — the deployment uses `npm ci`, which requires
   it. It is already tracked; `node_modules/` and `dist/` are ignored.

3. In the repository, open **Settings**.

4. Choose **Pages** in the left sidebar.

5. Under *Build and deployment*, set **Source** to **GitHub Actions**.

6. Open the **Actions** tab and confirm the *Deploy to GitHub Pages* run
   finishes green. The first run takes a couple of minutes.

7. The deployed URL is shown at the top of the **Pages** settings page and on
   the finished workflow run.

8. **You do not need to edit any path configuration.** The workflow asks GitHub
   for the site's origin and base path and passes both into the build, so the
   same code works for either repository layout above. The fallbacks in
   `astro.config.mjs` are only used for local builds.

   The `Sitemap:` line in `public/robots.txt` is already set to
   `https://lumi-lab-dgu.github.io/sitemap-index.xml`, which matches the
   organization above. If you end up using a different organization or
   repository name, that one line is the only thing to update by hand.

### Building locally for a specific target

Only needed if you want to reproduce the deployed output on your own machine:

```bash
cp .env.example .env    # then edit PUBLIC_SITE_URL and PUBLIC_BASE_PATH
npm run build
npm run preview
```

---

## Custom domain

The site can later be served from a lab domain (for example
`lumi.dongguk.edu` or a domain the lab registers). That needs two things: a
`CNAME` file in `public/`, and DNS records pointing at GitHub Pages.

Neither is set up here, on purpose — guessing a domain that has not been agreed
on would break the site. Once the domain is decided, add it under
**Settings → Pages → Custom domain** and GitHub will create the `CNAME` file
for you.

---

## Analytics and privacy

The site ships with **no analytics and no cookies**. Nothing about visitors is
collected or stored, there is no contact form, and no third-party scripts,
fonts or images are loaded — the two typefaces are served from this repository.

If measuring traffic later becomes useful, prefer a privacy-friendly,
cookie-free option (for example a self-hosted or university-approved
analytics service) so that no consent banner is required.

---

## Design notes

- **Colour.** Purple (`#5146B8`) carries the academic identity; gold
  (`#E5A93A`) appears only as small marks and details, never as body text on a
  light background. All text meets WCAG AA contrast.
- **Type.** Manrope for headings, Inter for body text, both self-hosted as
  latin/latin-ext subsets in `src/fonts/` with `font-display: swap`. Korean
  text falls back to the reader's system Korean font.
- **JavaScript.** About fifteen lines, all of it optional: Escape and
  click-outside handling for the mobile menu. Every page works with JavaScript
  disabled.
- **Motion.** Short hover transitions only, and everything respects
  `prefers-reduced-motion: reduce`.
- **Empty states.** The site never advertises what it does not have yet: no
  news section without news, no member grid without members, no CV button
  without a CV, no link buttons without URLs.
