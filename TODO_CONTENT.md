# Content TODO before public launch

- [ ] Create the GitHub organization `lumi-lab-dgu` (name confirmed available 2026-08-30)
- [ ] Create the repository `lumi-lab-dgu.github.io` inside it, and push
- [ ] Confirm whether PI title should be "Assistant Professor" or "Incoming Assistant Professor"
- [ ] Add final PI photo
- [ ] Add latest CV PDF
- [ ] Confirm office/lab room number if it should be public
- [ ] Confirm whether a transcript should be requested in initial student inquiries
- [ ] Add official URL for the EMNLP 2026 instruction-hierarchy paper when available
- [ ] Final check of English and Korean institutional address
- [ ] Decide whether to enable privacy-friendly analytics; default is no analytics

---

## Where each item is edited

| Item | File | Field |
| --- | --- | --- |
| GitHub organization / repository name | — | Decided: organization `lumi-lab-dgu`, repository `lumi-lab-dgu.github.io`, giving `https://lumi-lab-dgu.github.io/`. The build reads the URL from GitHub automatically. `public/robots.txt` already matches; change its `Sitemap:` line only if a different name is used. |
| PI title | `src/data/site.ts` | `piTitle` |
| PI photo | `src/assets/people/yerin-hwang.jpg` (preferred) or `public/people/yerin-hwang.jpg` | file name must match `photo:` in `src/content/people/yerin-hwang.md` |
| CV PDF | `public/files/yerin-hwang-cv.pdf` | path configured by `cvPath` in `src/data/site.ts` |
| Office / lab room number | `src/pages/contact/index.astro` | add a row to `contactRows` — deliberately omitted until confirmed |
| Transcript wording | `src/pages/join/index.astro` | the sentence under "What to include in your first email" |
| EMNLP 2026 paper URL | `src/content/publications/2026-instruction-hierarchy-multi-conflict.md` | add `paperUrl:` — the button appears automatically |
| Institutional address (EN / KO) | `src/data/site.ts` | `address`, `addressKo` |
| Analytics | — | Nothing is installed. See README → Analytics and privacy. |

## Notes

- The lab's official full name is settled and needs no confirmation:
  **Language Intelligence and Machine Intelligence Lab**.
- Nothing on the site states an unverified fact. Every optional link, button
  and section is hidden until its content exists, so shipping before the items
  above are resolved is safe — the page simply does not mention them.
- No preliminary or unpublished results from the three ongoing projects appear
  anywhere on the site. Keep it that way: the project descriptions are written
  at the level of research questions and evaluation design on purpose.
