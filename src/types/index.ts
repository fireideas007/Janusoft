export interface ServiceItem {
  id: string;
  category: 'web-apps' | 'ai-bots' | 'websites' | 'dashboards' | 'automations' | 'marketing';
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  deliverables: string[];
  techStack: string[];
  timeline: string;
  badge?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  bestFor: string;
  recommended?: boolean;
  highlightBadge?: string;
  ctaText: string;
}

export interface EstimatorFeature {
  id: string;
  name: string;
  days: number;
  cost: number;
  category: 'core' | 'ai' | 'infra' | 'security';
}
