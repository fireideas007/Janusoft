import React from 'react';
import { 
  Rocket, 
  BrainCircuit, 
  Workflow, 
  Server, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Code,
  Sparkles
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'mvp-saas',
    title: 'Rapid MVP & Fullstack Web Apps',
    tagline: 'From napkin sketch to live production SaaS in 7–14 days.',
    description: 'We build end-to-end web applications with modern authentication, database architecture, responsive UI, payments (Stripe/Razorpay), and deployment pipelines.',
    iconName: 'Rocket',
    deliverables: [
      'Production-ready Next.js / React application',
      'PostgreSQL / Supabase schema & secure RLS policies',
      'Stripe / Razorpay subscription checkout integration',
      'Clean CI/CD deployment on Vercel / AWS',
      'Complete Git repository transfer & documentation',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Stripe'],
    timeline: '7 to 14 Days',
    badge: 'Most Popular',
  },
  {
    id: 'gen-ai-rag',
    title: 'Generative AI & LLM Copilots',
    tagline: 'Custom RAG systems and autonomous AI agents for your business.',
    description: 'Integrate Gemini, GPT-4o, Grok, or Claude into your product. We build specialized RAG search engines, customer support copilots, and intelligent document parsers with zero hallucination guardrails.',
    iconName: 'BrainCircuit',
    deliverables: [
      'Document vectorization & embedding pipeline (pgvector / Pinecone)',
      'Gemini / Grok / OpenAI API integration with fallback routing',
      'Enterprise streaming chat interface with citation sources',
      'Prompt engineering & anti-hallucination validation test suite',
      'Cost optimization & token caching setup',
    ],
    techStack: ['Gemini 2.0', 'Grok', 'OpenAI', 'LangChain / LlamaIndex', 'pgvector', 'FastAPI'],
    timeline: '5 to 10 Days',
    badge: 'High Demand',
  },
  {
    id: 'automation-pipes',
    title: 'Workflow Automation & Data Sync',
    tagline: 'Eliminate manual work with intelligent automated pipelines.',
    description: 'Connect your CRMs, ERPs, databases, and third-party APIs with reliable, resilient event-driven background workers that never drop an event.',
    iconName: 'Workflow',
    deliverables: [
      'Automated bidirectional sync between business apps',
      'Webhook receivers with signature verification & retry queues',
      'Custom web scraping & structured data extraction',
      'Automated email/Slack notification alerts',
      'Admin dashboard to monitor pipeline health & logs',
    ],
    techStack: ['Node.js', 'Python', 'Inngest / BullMQ', 'Redis', 'Docker', 'Webhooks'],
    timeline: '3 to 7 Days',
  },
  {
    id: 'cloud-backend',
    title: 'Cloud Architecture & Backend APIs',
    tagline: 'Robust, auto-scaling backend infrastructure for high reliability.',
    description: 'Design and deploy secure RESTful and GraphQL APIs, microservices, and serverless architectures tailored to handle enterprise traffic spikes without breaking the bank.',
    iconName: 'Server',
    deliverables: [
      'Type-safe REST / GraphQL API endpoints with OpenAPI / Swagger',
      'Role-based access control (RBAC) & OAuth 2.0 / JWT auth',
      'Database indexing, query optimization, & automated backups',
      'Serverless edge functions or containerized Docker setups',
      'Environment security audit & secrets management',
    ],
    techStack: ['Node.js', 'Python FastAPI', 'PostgreSQL', 'Docker', 'AWS / Cloudflare', 'Redis'],
    timeline: '5 to 12 Days',
  },
  {
    id: 'modernization-audit',
    title: 'Code Modernization & Security Audit',
    tagline: 'Upgrade legacy stacks, fix vulnerabilities, and optimize performance.',
    description: 'Transform sluggish legacy code into high-speed, maintainable TypeScript architectures. We conduct deep code reviews, resolve OWASP security flaws, and boost lighthouse scores to 95+.',
    iconName: 'ShieldCheck',
    deliverables: [
      'Comprehensive security & vulnerability audit report',
      'Legacy migration (e.g., JavaScript to strict TypeScript)',
      'Performance audit: Core Web Vitals optimization to 95+',
      'Unit & integration test coverage addition',
      'Architectural refactor roadmap and pull requests',
    ],
    techStack: ['TypeScript', 'Jest / Vitest', 'Lighthouse', 'SonarQube', 'Security Hardening'],
    timeline: '4 to 8 Days',
  },
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-brand-500" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-cyber-cyan" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-emerald-500" />;
      case 'Server':
        return <Server className="w-6 h-6 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-indigo-400" />;
      default:
        return <Code className="w-6 h-6 text-brand-500" />;
    }
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-300 text-xs font-semibold mb-3 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyber-cyan" />
            Specialized Offerings
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            High-Impact IT Services Delivered at AI Speed
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Every service is scoped for maximum value, engineered with top-tier AI tooling, and delivered with surgical precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-2xl glass-panel border border-slate-200 dark:border-slate-800/80 p-7 hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-brand-500/10 text-brand-600 dark:bg-brand-500/20 dark:text-cyber-cyan border border-brand-500/30">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-cyber-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-brand-600 dark:text-brand-300 mt-1 mb-3">
                  {service.tagline}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-200 dark:border-slate-800/60">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    What's Included:
                  </div>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer info: Tech stack, Timeline, Action */}
              <div className="pt-5 border-t border-slate-200 dark:border-slate-800/60">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-cyber-cyan" />
                    <span>Avg: <strong className="text-slate-800 dark:text-slate-200">{service.timeline}</strong></span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 dark:text-cyber-cyan hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    <span>Request Sprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
