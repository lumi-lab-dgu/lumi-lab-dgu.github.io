/**
 * Single source of truth for lab-wide metadata.
 *
 * Anything that appears in more than one place on the site lives here so it can
 * be corrected once. Page copy that only appears once stays in its page file.
 */

export const site = {
  /** Compact brand mark used in the header, footer and page titles. */
  labName: 'LUMI Lab',
  /** Wordmark on its own, without the word "Lab". */
  labShortName: 'LUMI',
  /** Official full name. Do not paraphrase or re-expand the acronym. */
  labFullName: 'Language Understanding and Machine Intelligence Lab',
  /** The acronym expansion, used as a subtitle. */
  labExpansion: 'Language Understanding and Machine Intelligence',

  institution: 'Dongguk University',
  department: 'Department of Computer Science and Artificial Intelligence',
  location: 'Seoul, Republic of Korea',

  piName: 'Yerin Hwang',
  piNameKo: '황예린',
  /**
   * Change this one value when the appointment status changes, e.g.
   * 'Incoming Assistant Professor · starting September 2026'
   */
  piTitle: 'Assistant Professor',

  email: 'yerinhwang@dongguk.edu',

  address: '30, Pildong-ro 1-gil, Jung-gu, Seoul 04620, Republic of Korea',
  addressKo: '서울특별시 중구 필동로 1길 30, 동국대학교',

  /** Screen-reader label for the logo link. */
  srLabel:
    'LUMI Lab — Language Understanding and Machine Intelligence Lab at Dongguk University',

  defaultTitle:
    'LUMI Lab | Language Understanding and Machine Intelligence at Dongguk University',
  titleTemplate: '%s | LUMI Lab',
  defaultDescription:
    'LUMI Lab—Language Understanding and Machine Intelligence—at Dongguk University studies trustworthy language and multimodal models, reliable AI agents, evaluation, instruction following, and feedback.',

  /** Path (relative to /public) of the Open Graph image. */
  ogImage: '/og/lumi-og.png',
  /** Path (relative to /public) of the PI CV. Hidden automatically if absent. */
  cvPath: '/files/yerin-hwang-cv.pdf',
} as const;

export const links = {
  email: `mailto:${site.email}`,
  emailInquiry: `mailto:${site.email}?subject=${encodeURIComponent('[LUMI Inquiry]')}`,
  piWebsite: 'https://yerin-hwang49.github.io/',
  linkedin: 'https://www.linkedin.com/in/yerin-hwang-a6445627a',
  github: 'https://github.com/Yerin-Hwang49',
  scholar: 'https://scholar.google.com/citations?user=uYUNTrkAAAAJ',
  openreview: 'https://openreview.net/profile?id=~Yerin_Hwang1',
  department: 'https://cs.dongguk.edu/',
  previousLab: 'https://milab.snu.ac.kr/',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

/** Navigation shown on every page. `News` is appended only when news exists. */
export const baseNav: readonly NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research/' },
  { label: 'People', href: '/people/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Join', href: '/join/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const newsNavItem: NavItem = { label: 'News', href: '/news/' };
