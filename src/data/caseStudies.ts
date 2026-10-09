/**
 * Add only real, client-approved case studies. Each one generates a page at /case-studies/[slug]/.
 */
export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  services: string[];
  title: string;
  summary: string;
  metrics: { label: string; value: string }[];
  timeframe: string;
  challenge: string;
  solution: string[];
  results: string;
  testimonial?: { quote: string; name: string; role: string };
  published: string;
};

export const caseStudies: CaseStudy[] = [];
