/**
 * Two full language versions of the site: English at `/`, Korean at `/ko/`.
 *
 * What deliberately stays in English in BOTH versions:
 *   - the lab name and its expansion
 *   - publication titles, authors, venues and link labels
 *   - research keywords / tag chips
 *
 * Those are the parts that keep growing, so single-sourcing them means adding a
 * paper never requires a translation. Only the prose below is doubled.
 */

export const locales = ['en', 'ko'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Name of each language, written in that language. */
export const localeLabel: Record<Locale, string> = {
  en: 'English',
  ko: '한국어',
};

/** `html lang` value for each version. */
export const htmlLang: Record<Locale, string> = {
  en: 'en',
  ko: 'ko',
};

/** Prefix a locale-less internal path with its locale segment. */
export function localeHref(locale: Locale, path: string): string {
  const normalised = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return normalised;
  return normalised === '/' ? '/ko/' : `/ko${normalised}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'ko' : 'en';
}

export const ui = {
  en: {
    nav: {
      home: 'Home',
      research: 'Research',
      people: 'People',
      publications: 'Publications',
      join: 'Join',
      contact: 'Contact',
      news: 'News',
    },
    common: {
      skipToContent: 'Skip to content',
      languageLabel: 'Language',
      switchTo: '한국어',
      switchToTitle: 'View this page in Korean',
      ongoing: 'Ongoing',
      completed: 'Completed',
      paused: 'Paused',
      learnMore: 'Learn more',
      emailAria: 'Email Prof. Yerin Hwang',
      mainNav: 'Main',
      mobileNav: 'Main (mobile)',
      footerNav: 'Footer',
      menu: 'Menu',
      email: 'Email',
    },
    home: {
      metaDescription:
        'LUMI Lab—Language Understanding and Machine Intelligence—at Dongguk University studies trustworthy language and multimodal models, reliable AI agents, evaluation, instruction following, and feedback.',
      heroLead:
        'We research natural language processing, large language models, and trustworthy AI—including LLM evaluation, reliable agents, multimodal systems, and AI safety—under Prof. Yerin Hwang at Dongguk University.',
      exploreResearch: 'Explore our research',
      joinLumi: 'Join LUMI',
      heroRecruiting:
        'We are growing. Graduate students, undergraduate research interns, and research collaborators are welcome to get in touch.',
      missionTitle: 'Researching reliability where it matters most',
      missionBody:
        'LUMI—Language Understanding and Machine Intelligence—is a research lab in the Department of Computer Science and Artificial Intelligence at Dongguk University, led by Prof. Yerin Hwang. Our work sits at the intersection of natural language processing, trustworthy AI, agentic systems, and multimodal evaluation. We investigate where advanced AI systems fail under realistic pressure and build benchmarks, analyses, and methods that help make their behavior more reliable.',
      projectsEyebrow: 'Ongoing Projects',
      projectsTitle: 'Questions we are working on now',
      projectsIntro:
        'Our current projects examine failures that emerge when AI systems must evaluate, choose, prioritize, or revise—not just generate an answer once.',
      exploreAllResearch: 'Explore all research',
      areasEyebrow: 'Research Areas',
      areasTitle: 'From evaluation to reliable action',
      areasIntro:
        'We study intelligence not only through what models know, but through how they judge, follow priorities, interact with tools, and respond when their first attempt is wrong.',
      pubsEyebrow: 'Publications',
      pubsTitle: 'Selected Work by the PI',
      pubsIntro: 'Selected research that informs the questions we are pursuing at LUMI.',
      viewAllPublications: 'View all publications',
      newsEyebrow: 'News',
      newsTitle: 'Latest from the lab',
      allNews: 'All news',
    },
    cta: {
      eyebrow: 'Join LUMI',
      title: 'We are building a new research group.',
      body: 'We welcome students and collaborators who want to study trustworthy AI through careful experiments, strong evaluations, and questions that matter beyond benchmark scores.',
      primary: 'Research opportunities',
      secondary: 'Contact us',
    },
    research: {
      metaDescription:
        'LUMI Lab studies reliability in language and multimodal AI: trustworthy evaluation, reliable agents, feedback and correction, and data-centric Korean NLP.',
      kicker: 'What we study',
      title: 'Reliable AI under conflict, uncertainty, and feedback',
      intro:
        'Powerful models often look reliable in clean, single-turn tests and fail when objectives conflict, evaluation signals are biased, tools carry different costs, or an earlier output must be repaired. Our research turns these pressure points into measurable questions and uses controlled experiments to understand both observable behavior and the mechanisms behind it.',
      areasEyebrow: 'Research Areas',
      areasTitle: 'Four directions',
      areasIntro:
        'Each area asks where a capability that looks solid in aggregate breaks down under a more demanding setting.',
      ongoingEyebrow: 'Ongoing Projects',
      ongoingTitle: 'What we are working on now',
      ongoingIntro: 'Three projects currently drive most of the experimental work.',
      projectPage: 'Project page',
      methodologyEyebrow: 'Methodology',
      methodologyTitle: 'How we work',
      methodologyBody:
        'We combine benchmark design, behavioral evaluation, human and model-based analysis, controlled interventions, and mechanistic tools. Across projects, we aim to separate capabilities that are often conflated—for example, recognizing an error versus correcting it, representing an instruction priority versus acting on it, or understanding a task versus matching its surface wording.',
      collabEyebrow: 'Collaboration',
      collabTitle: 'Work with us',
      collabIntro:
        'We are open to academic and industry collaboration on evaluation, agent reliability, and AI safety, and to students who want to take on these questions with us.',
      researchOpportunities: 'Research opportunities',
    },
    people: {
      metaDescription:
        'Prof. Yerin Hwang leads LUMI Lab in the Department of Computer Science and Artificial Intelligence at Dongguk University, researching trustworthy language models, LLM evaluation, reliable agents, and multimodal systems.',
      researchInterests: 'Research interests',
      links: 'Links',
      cv: 'CV (PDF)',
      labMembers: 'Lab members',
      publicationsHeading: 'Publications',
      publicationsNote:
        'Work produced after the launch of LUMI Lab will be marked separately as LUMI Lab research.',
      growingTitle: 'We are growing',
      growingBody:
        'New members will be added here as LUMI grows. We welcome inquiries from prospective graduate students and undergraduate research interns who are excited about trustworthy AI and careful empirical research.',
      joinLumi: 'Join LUMI',
      portraitPending: 'portrait not yet added',
      portraitOf: 'Portrait of',
    },
    publications: {
      metaDescription:
        'Selected publications and prior work by Prof. Yerin Hwang, covering LLM-as-a-Judge evaluation, instruction following, multimodal evaluation, and AI safety.',
      eyebrow: 'Publications',
      title: 'Selected Publications and Prior Work',
      intro:
        'This page currently highlights selected publications by the PI. Work produced after the launch of LUMI Lab will be marked separately as LUMI Lab research.',
      jumpToYear: 'Jump to year',
      equalContribution: '* Equal contribution.',
      equalContributionSr: 'An asterisk after an author name indicates equal contribution.',
    },
    join: {
      metaDescription:
        'LUMI Lab welcomes prospective graduate students, undergraduate research interns, and research collaborators interested in trustworthy language models, reliable agents, multimodal evaluation, and AI safety.',
      kicker: 'Join LUMI',
      title: 'Build careful, useful, and trustworthy AI research with us',
      intro:
        'We welcome inquiries from prospective graduate students, undergraduate research interns, and research collaborators interested in trustworthy language models, reliable agents, multimodal evaluation, and AI safety. We value curiosity, initiative, careful experimentation, clear communication, and respect for collaborators.',
      opportunitiesEyebrow: 'Opportunities',
      opportunitiesTitle: 'Who we are looking for',
      opportunities: [
        {
          title: 'Graduate students',
          text: 'Prospective graduate students who want to work on trustworthy LLMs, agent reliability, evaluation, or multimodal systems are encouraged to introduce their interests and prior experience.',
        },
        {
          title: 'Undergraduate research interns',
          text: 'Undergraduate students can inquire about research internships. Prior research is helpful but not required; evidence of initiative, solid programming foundations, and willingness to read and test ideas carefully is especially valuable.',
        },
        {
          title: 'Collaboration and projects',
          text: 'We welcome research collaboration, project participation, and proposal discussions with academic and industry partners whose goals align with the research of the lab.',
        },
      ],
      emailEyebrow: 'Getting in touch',
      emailTitle: 'Writing your first email',
      emailIntro:
        'There is no required format, and it does not need to be long — a few sentences are plenty. Three things are useful to know:',
      checklist: [
        'who you are, in a sentence or two',
        'what you would like to work on, and what draws you to it',
        'your CV, if you have one ready',
      ],
      transcriptNote:
        'Anything else is welcome but not expected: transcripts, code samples, a start date, links to past work. If you are unsure whether your background fits, write anyway — that is a good question to ask.',
      subjectLabel: 'A subject line like this helps, but is not required',
      subjectValue: '[LUMI Inquiry] Name — Graduate / Undergraduate Intern / Collaboration',
      disclaimer:
        'An inquiry does not constitute an admission or appointment offer. Formal university admission requirements and timelines apply separately.',
      faqEyebrow: 'FAQ',
      faqTitle: 'Common questions',
      faq: [
        {
          question: 'Do I need a fully formed research topic?',
          answer:
            'No. A concrete area of interest and evidence that you have explored it are enough for an initial inquiry.',
        },
        {
          question: 'Is prior research required for undergraduate interns?',
          answer:
            'No, but programming fundamentals, initiative, and willingness to read papers carefully are important.',
        },
        {
          question: 'Can I propose a collaboration?',
          answer: 'Yes. Briefly describe the shared problem, expected contribution, and timeline.',
        },
      ],
    },
    contact: {
      metaDescription:
        'Contact LUMI Lab at Dongguk University. Email Prof. Yerin Hwang about prospective-student inquiries, research collaboration, or project discussions.',
      kicker: 'Contact',
      title: 'Contact',
      lead: 'For prospective-student inquiries, research collaboration, or project discussions, email Prof. Yerin Hwang.',
      labelEmail: 'Email',
      labelDepartment: 'Department',
      labelInstitution: 'Institution',
      labelAddress: 'Address',
      labelAddressKo: 'Address (Korean)',
      linksHeading: 'Links',
      linksNav: 'Contact and profile links',
      personalWebsite: 'Personal Website',
    },
    notFound: {
      metaDescription: 'The page you are looking for does not exist or may have moved.',
      title: 'This page wandered off the research path.',
      body: 'The page you are looking for does not exist or may have moved.',
      cta: 'Back to LUMI',
    },
  },

  ko: {
    nav: {
      home: '홈',
      research: '연구',
      people: '구성원',
      publications: '논문',
      join: '지원',
      contact: '연락처',
      news: '소식',
    },
    common: {
      skipToContent: '본문으로 건너뛰기',
      languageLabel: '언어',
      switchTo: 'English',
      switchToTitle: '이 페이지를 영어로 보기',
      ongoing: '진행 중',
      completed: '완료',
      paused: '중단',
      learnMore: '자세히 보기',
      emailAria: '황예린 교수에게 메일 보내기',
      mainNav: '주 메뉴',
      mobileNav: '주 메뉴 (모바일)',
      footerNav: '푸터 메뉴',
      menu: '메뉴',
      email: '이메일',
    },
    home: {
      metaDescription:
        'LUMI Lab은 동국대학교 컴퓨터AI학부 황예린 교수 연구실입니다. 자연어처리와 대규모 언어모델을 중심으로 LLM 평가, 에이전트 신뢰성, 멀티모달 평가, AI 안전성을 연구합니다.',
      heroLead:
        'LUMI Lab은 동국대학교 컴퓨터AI학부 황예린 교수 연구실입니다. 자연어처리와 대규모 언어모델(LLM)을 중심으로 신뢰할 수 있는 AI를 연구하며, LLM 평가와 에이전트 신뢰성, 멀티모달 평가, AI 안전성이 주요 주제입니다.',
      exploreResearch: '연구 살펴보기',
      joinLumi: '지원 안내',
      heroRecruiting:
        '연구실을 함께 만들어 갈 대학원생, 학부 연구인턴, 공동 연구자를 모집하고 있습니다.',
      missionTitle: 'AI가 어디서 무너지는지를 연구합니다',
      missionBody:
        'LUMI Lab(Language Understanding and Machine Intelligence)은 동국대학교 컴퓨터AI학부 황예린 교수 연구실입니다. 자연어처리, 신뢰할 수 있는 AI, LLM 에이전트, 멀티모달 평가를 아우르는 주제를 다룹니다. 성능이 좋아 보이는 모델이 실제 환경에서는 어디서부터 어긋나는지를 확인하고, 그 동작을 개선할 수 있는 benchmark와 분석 방법을 함께 만듭니다.',
      projectsEyebrow: '진행 중인 연구',
      projectsTitle: '지금 다루고 있는 문제들',
      projectsIntro:
        'AI 시스템이 한 번 답을 내놓는 것으로 끝나지 않고 스스로 평가하고, 선택하고, 우선순위를 정하고, 고쳐야 하는 상황에서 어떤 문제가 생기는지를 살펴봅니다.',
      exploreAllResearch: '연구 전체 보기',
      areasEyebrow: '연구 분야',
      areasTitle: '평가부터 실제 동작까지',
      areasIntro:
        '모델이 무엇을 아는지보다, 어떻게 판단하고 무엇을 먼저 따르며 도구를 어떻게 쓰는지, 그리고 첫 시도가 틀렸을 때 어떻게 대응하는지를 봅니다.',
      pubsEyebrow: 'Publications',
      pubsTitle: '지도교수 주요 논문',
      pubsIntro: '현재 LUMI Lab에서 이어가고 있는 연구의 바탕이 된 논문들입니다.',
      viewAllPublications: '논문 전체 보기',
      newsEyebrow: '소식',
      newsTitle: '연구실 소식',
      allNews: '소식 전체 보기',
    },
    cta: {
      eyebrow: '연구실 지원',
      title: '이제 막 시작하는 연구실입니다.',
      body: '벤치마크 점수만으로는 답할 수 없는 질문을 꼼꼼한 실험과 제대로 된 평가로 파고들 학생, 그리고 공동 연구자를 기다립니다.',
      primary: '지원 안내 보기',
      secondary: '연락하기',
    },
    research: {
      metaDescription:
        'LUMI Lab은 언어·멀티모달 AI의 신뢰성을 연구합니다. 신뢰할 수 있는 평가, 에이전트 신뢰성, 피드백과 수정, 데이터 중심 연구와 한국어 NLP를 다룹니다.',
      kicker: '무엇을 연구하는가',
      title: '지시가 충돌하고 평가가 흔들릴 때도 믿을 수 있는 AI',
      intro:
        '성능이 좋은 모델도 조건이 깔끔한 단일 질의에서는 안정적으로 보입니다. 하지만 목표가 서로 충돌하거나, 평가 신호가 편향되어 있거나, 도구마다 비용이 다르거나, 앞서 내놓은 답을 고쳐야 하는 상황에서는 쉽게 무너집니다. 저희는 이런 지점을 측정 가능한 문제로 바꾸고, 통제된 실험으로 겉으로 드러나는 동작과 그 이면의 원인을 함께 확인합니다.',
      areasEyebrow: '연구 분야',
      areasTitle: '네 가지 방향',
      areasIntro:
        '네 분야 모두, 평균 점수로는 멀쩡해 보이는 능력이 조건이 까다로워지면 어디서부터 무너지는지를 다룹니다.',
      ongoingEyebrow: '진행 중인 연구',
      ongoingTitle: '지금 진행 중인 연구',
      ongoingIntro: '현재 연구실의 실험은 대부분 아래 세 프로젝트를 중심으로 진행됩니다.',
      projectPage: '프로젝트 페이지',
      methodologyEyebrow: '연구 방법',
      methodologyTitle: '연구하는 방식',
      methodologyBody:
        'benchmark 설계, 행동 기반 평가, 사람과 모델을 함께 활용한 분석, 통제된 개입, mechanistic 분석 도구를 함께 사용합니다. 모든 프로젝트에서 흔히 뭉뚱그려 다루는 능력들을 따로 떼어 보려 합니다. 오류를 알아보는 것과 실제로 고치는 것, 지시의 우선순위를 내부적으로 표현하는 것과 그에 따라 행동하는 것, 과제를 제대로 이해하는 것과 표현만 비슷한 것은 서로 다른 문제입니다.',
      collabEyebrow: '공동 연구',
      collabTitle: '함께 연구하기',
      collabIntro:
        '평가, 에이전트 신뢰성, AI 안전성 분야의 학계·산업계 공동 연구를 환영합니다. 이 주제를 함께 연구하고 싶은 학생의 연락도 기다립니다.',
      researchOpportunities: '지원 안내 보기',
    },
    people: {
      metaDescription:
        '황예린 교수는 동국대학교 컴퓨터AI학부에서 LUMI Lab을 이끌며 신뢰할 수 있는 언어모델, LLM 평가, 에이전트 신뢰성, 멀티모달 시스템을 연구합니다.',
      researchInterests: '연구 관심 분야',
      links: '링크',
      cv: 'CV (PDF)',
      labMembers: '연구실 구성원',
      publicationsHeading: 'Publications',
      publicationsNote: 'LUMI Lab 설립 이후의 연구는 LUMI Lab 연구로 따로 표시됩니다.',
      growingTitle: '함께할 분을 찾고 있습니다',
      growingBody:
        '신뢰할 수 있는 AI와 꼼꼼한 실증 연구에 관심 있는 대학원 진학 희망자와 학부 연구인턴의 문의를 환영합니다!',
      joinLumi: '지원 안내 보기',
      portraitPending: '사진 준비 중',
      portraitOf: '사진:',
    },
    publications: {
      metaDescription:
        '황예린 교수의 주요 논문과 이전 연구입니다. LLM-as-a-Judge 평가, 지시 수행, 멀티모달 평가, AI 안전성을 다룹니다.',
      eyebrow: 'Publications',
      title: '주요 논문 및 이전 연구',
      intro:
        '이 페이지에는 지도교수의 주요 논문을 정리했습니다. LUMI Lab 설립 이후의 연구는 LUMI Lab 연구로 따로 표시됩니다.',
      jumpToYear: '연도로 이동',
      equalContribution: '* 공동 제1저자.',
      equalContributionSr: '저자 이름 뒤의 별표는 공동 제1저자를 뜻합니다.',
    },
    join: {
      metaDescription:
        'LUMI Lab은 신뢰할 수 있는 언어모델, LLM 에이전트, 멀티모달 평가, AI 안전성에 관심 있는 대학원생과 학부 연구인턴, 공동 연구자를 모집하고 있습니다.',
      kicker: '연구실 지원',
      title: '믿을 수 있는 AI 연구, 함께 하실 분을 찾습니다',
      intro:
        '신뢰할 수 있는 언어모델, LLM 에이전트, 멀티모달 평가, AI 안전성에 관심 있는 대학원 진학 희망자와 학부 연구인턴, 그리고 공동 연구자의 문의를 환영합니다. 호기심과 주도성, 꼼꼼한 실험, 분명한 소통, 동료에 대한 존중을 중요하게 생각합니다.',
      opportunitiesEyebrow: '모집 분야',
      opportunitiesTitle: '이런 분을 찾고 있습니다',
      opportunities: [
        {
          title: '대학원생',
          text: '신뢰할 수 있는 LLM, 에이전트 신뢰성, 평가, 멀티모달 시스템을 연구하고 싶은 대학원 진학 희망자를 모집합니다. 관심 분야와 지금까지의 경험을 간단히 소개해 주세요.',
        },
        {
          title: '학부 연구인턴',
          text: '학부생도 연구 인턴을 문의할 수 있습니다. 연구 경험이 있으면 도움이 되지만 필수는 아닙니다. 스스로 찾아서 해본 경험, 탄탄한 프로그래밍 기초, 논문을 꼼꼼히 읽고 직접 확인해 보려는 태도를 눈여겨봅니다.',
        },
        {
          title: '공동 연구 및 과제',
          text: '연구실의 방향과 맞닿아 있는 학계·산업계 파트너와의 공동 연구, 과제 참여, 제안 논의를 환영합니다.',
        },
      ],
      emailEyebrow: '문의 방법',
      emailTitle: '첫 메일 쓰기',
      emailIntro:
        '정해진 형식은 없습니다. 길게 쓰지 않으셔도 되고 몇 문장이면 충분합니다. 아래 세 가지만 알려주시면 좋습니다.',
      checklist: [
        '어떤 분인지 (한두 문장이면 충분합니다)',
        '어떤 연구를 해보고 싶은지, 왜 관심이 생겼는지',
        'CV (준비되어 있다면)',
      ],
      transcriptNote:
        '그 밖의 것은 있으면 좋지만 꼭 필요하지 않습니다. 성적증명서, 코드 샘플, 시작 가능 시기, 이전 작업 링크 같은 것들입니다. 본인 배경이 맞을지 확신이 없더라도 일단 연락 주세요. 그것부터 같이 이야기하면 됩니다.',
      subjectLabel: '메일 제목은 이런 식이면 좋습니다 (필수는 아닙니다)',
      subjectValue: '[LUMI Inquiry] 이름 — 대학원 / 학부 인턴 / 공동 연구',
      disclaimer:
        '문의가 곧 입학이나 임용을 보장하지는 않습니다. 대학의 공식 입학 요건과 일정은 별도로 적용됩니다.',
      faqEyebrow: '자주 묻는 질문',
      faqTitle: '자주 묻는 질문',
      faq: [
        {
          question: '연구 주제가 완전히 정해져 있어야 하나요?',
          answer:
            '아닙니다. 관심 분야가 구체적이고 그 분야를 실제로 살펴본 흔적이 있다면 첫 문의로는 충분합니다.',
        },
        {
          question: '학부 연구인턴도 연구 경험이 필요한가요?',
          answer: '아닙니다. 다만 프로그래밍 기초, 주도성, 논문을 꼼꼼히 읽으려는 태도는 중요합니다.',
        },
        {
          question: '공동 연구를 제안해도 되나요?',
          answer: '네. 함께 풀고 싶은 문제, 기대하는 기여, 예상 일정을 간단히 적어 보내 주세요.',
        },
      ],
    },
    contact: {
      metaDescription:
        '동국대학교 LUMI Lab 연락처입니다. 대학원 진학 문의, 공동 연구, 과제 논의는 황예린 교수에게 메일로 연락해 주세요.',
      kicker: '연락처',
      title: '연락처',
      lead: '대학원 진학 문의, 공동 연구, 과제 논의는 황예린 교수에게 메일로 연락해 주세요.',
      labelEmail: '이메일',
      labelDepartment: '학부',
      labelInstitution: '소속',
      labelAddress: '주소 (영문)',
      labelAddressKo: '주소',
      linksHeading: '링크',
      linksNav: '연락처 및 프로필 링크',
      personalWebsite: '개인 홈페이지',
    },
    notFound: {
      metaDescription: '요청하신 페이지를 찾을 수 없습니다.',
      title: '이 페이지는 연구 경로에서 벗어났습니다.',
      body: '찾으시는 페이지가 없거나 위치가 바뀌었습니다.',
      cta: 'LUMI 홈으로',
    },
  },
} as const;

export type Ui = (typeof ui)[Locale];
