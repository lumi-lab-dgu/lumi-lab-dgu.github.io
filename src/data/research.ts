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
      ko: '언어모델과 시각-언어모델이 평가자로 쓰일 때 나타나는 편향, 강건성, 불확실성, 충실성을 연구합니다.',
    },
    keywords: ['LLM-as-a-Judge', 'Evaluation', 'Robustness'],
  },
  {
    id: 'reliable-agents',
    title: {
      en: 'Reliable Agents',
      ko: '안정적인 에이전트',
    },
    description: {
      en: 'We examine instruction hierarchy, tool use, cost-aware decisions, and safety when agents face conflicting or misleading signals.',
      ko: '에이전트가 서로 충돌하거나 오도하는 신호를 마주할 때의 지시 위계, 도구 사용, 비용을 고려한 판단, 안전성을 살펴봅니다.',
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
      ko: '모델이 실패를 진단하고, 실행 가능한 피드백을 표현하고, 새로운 오류를 만들지 않으면서 정확히 수정할 수 있는지를 평가합니다.',
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
      ko: '언어의 특성과 실제 환경에서의 모델 동작을 반영하는 평가·학습 데이터, 지표, 분석을 개발합니다.',
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
    title: { en: 'Measure carefully', ko: '정확하게 측정한다' },
    description: {
      en: 'Design evaluations that isolate the capability we actually want to understand.',
      ko: '정말로 알고 싶은 능력만 분리해서 볼 수 있도록 평가를 설계합니다.',
    },
  },
  {
    title: { en: 'Stress realistic systems', ko: '현실적인 조건에서 밀어붙인다' },
    description: {
      en: 'Study behavior under conflict, feedback, imperfect outputs, and deployment constraints.',
      ko: '충돌, 피드백, 불완전한 출력, 실제 배포 제약 아래에서의 동작을 살펴봅니다.',
    },
  },
  {
    title: { en: 'Explain failures', ko: '실패를 설명한다' },
    description: {
      en: 'Move beyond aggregate scores to understand why a system behaves the way it does.',
      ko: '종합 점수에 머무르지 않고, 시스템이 왜 그렇게 동작하는지까지 파고듭니다.',
    },
  },
] as const;
