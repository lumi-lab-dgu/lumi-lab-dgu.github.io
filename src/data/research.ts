/** The four research areas, shared by the home page and /research/. */

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  keywords: string[];
}

export const researchAreas: readonly ResearchArea[] = [
  {
    id: 'trustworthy-evaluation',
    title: 'Trustworthy Evaluation',
    description:
      'We study bias, robustness, uncertainty, and faithfulness when language and vision–language models are used as evaluators.',
    keywords: ['LLM-as-a-Judge', 'Evaluation', 'Robustness'],
  },
  {
    id: 'reliable-agents',
    title: 'Reliable Agents',
    description:
      'We examine instruction hierarchy, tool use, cost-aware decisions, and safety when agents face conflicting or misleading signals.',
    keywords: ['Agent Reliability', 'Tool Use', 'AI Safety'],
  },
  {
    id: 'feedback-multimodal',
    title: 'Feedback & Multimodal Systems',
    description:
      'We evaluate whether models can diagnose failures, express actionable feedback, and carry out precise corrections without causing new errors.',
    keywords: ['Multimodal AI', 'Feedback', 'Image Editing'],
  },
  {
    id: 'data-centric-korean-nlp',
    title: 'Data-Centric & Korean NLP',
    description:
      'We develop evaluation and training data, metrics, and analyses that reflect language-specific and real-world model behavior.',
    keywords: ['Data Generation', 'Evaluation Data', 'Korean NLP'],
  },
] as const;

/** The three principles shown under "How we work" on /research/. */
export interface ResearchPrinciple {
  title: string;
  description: string;
}

export const researchPrinciples: readonly ResearchPrinciple[] = [
  {
    title: 'Measure carefully',
    description:
      'Design evaluations that isolate the capability we actually want to understand.',
  },
  {
    title: 'Stress realistic systems',
    description:
      'Study behavior under conflict, feedback, imperfect outputs, and deployment constraints.',
  },
  {
    title: 'Explain failures',
    description:
      'Move beyond aggregate scores to understand why a system behaves the way it does.',
  },
] as const;
