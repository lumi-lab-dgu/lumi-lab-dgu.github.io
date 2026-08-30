import type { Locale } from './i18n';

/**
 * The four research areas and the three principles, shared by the home page
 * and /research/.
 *
 * Titles and descriptions are translated; the keyword chips stay in English in
 * both versions, because they are the terms readers search for.
 */

export interface ResearchArea {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  /** English in both versions, on purpose. */
  keywords: string[];
}

export const researchAreas: readonly ResearchArea[] = [
  {
    id: 'trustworthy-evaluation',
    title: {
      en: 'Trustworthy Evaluation',
      ko: '신뢰할 수 있는 평가',
    },
    description: {
      en: 'We study bias, robustness, uncertainty, and faithfulness when language and vision–language models are used as evaluators.',
      ko: '언어모델과 vision–language 모델을 평가자로 쓸 때 나타나는 편향과 강건성, 불확실성, 충실성을 연구합니다.',
    },
    keywords: ['LLM-as-a-Judge', 'Evaluation', 'Robustness'],
  },
  {
    id: 'reliable-agents',
    title: {
      en: 'Reliable Agents',
      ko: '에이전트 신뢰성',
    },
    description: {
      en: 'We examine instruction hierarchy, tool use, cost-aware decisions, and safety when agents face conflicting or misleading signals.',
      ko: '에이전트가 서로 충돌하거나 잘못된 신호를 받았을 때의 instruction hierarchy와 도구 사용, 비용을 고려한 판단, 안전성을 살펴봅니다.',
    },
    keywords: ['Agent Reliability', 'Tool Use', 'AI Safety'],
  },
  {
    id: 'feedback-multimodal',
    title: {
      en: 'Feedback & Multimodal Systems',
      ko: '피드백과 멀티모달 시스템',
    },
    description: {
      en: 'We evaluate whether models can diagnose failures, express actionable feedback, and carry out precise corrections without causing new errors.',
      ko: '모델이 스스로 실패를 진단하고, 실행 가능한 피드백을 만들고, 새로운 오류 없이 정확히 고칠 수 있는지를 평가합니다.',
    },
    keywords: ['Multimodal AI', 'Feedback', 'Image Editing'],
  },
  {
    id: 'data-centric-korean-nlp',
    title: {
      en: 'Data-Centric & Korean NLP',
      ko: '데이터 중심 연구와 한국어 NLP',
    },
    description: {
      en: 'We develop evaluation and training data, metrics, and analyses that reflect language-specific and real-world model behavior.',
      ko: '언어마다 다른 특성과 실제 환경에서의 동작을 반영하는 평가·학습 데이터와 지표, 분석 방법을 만듭니다.',
    },
    keywords: ['Data Generation', 'Evaluation Data', 'Korean NLP'],
  },
] as const;

export interface ResearchPrinciple {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const researchPrinciples: readonly ResearchPrinciple[] = [
  {
    title: { en: 'Measure carefully', ko: '제대로 측정하기' },
    description: {
      en: 'Design evaluations that isolate the capability we actually want to understand.',
      ko: '정말 알고 싶은 능력만 따로 떼어 볼 수 있도록 평가를 설계합니다.',
    },
  },
  {
    title: { en: 'Stress realistic systems', ko: '실제 조건에서 시험하기' },
    description: {
      en: 'Study behavior under conflict, feedback, imperfect outputs, and deployment constraints.',
      ko: '지시 충돌과 피드백, 불완전한 출력, 배포 환경의 제약 속에서 모델이 어떻게 동작하는지 봅니다.',
    },
  },
  {
    title: { en: 'Explain failures', ko: '실패의 원인 찾기' },
    description: {
      en: 'Move beyond aggregate scores to understand why a system behaves the way it does.',
      ko: '종합 점수에 머무르지 않고, 왜 그렇게 동작하는지까지 파고듭니다.',
    },
  },
] as const;
