import React, { useState } from 'react';
import { 
  Rocket, 
  BrainCircuit, 
  Workflow, 
  Server, 
  ShieldCheck, 
  RefreshCw,
  Database,
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Sparkles,
  CloudLightning,
  Layers,
  FileCheck2,
  Code2
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'enterprise-web-apps',
    category: 'apps',
    title: 'Enterprise Fullstack Web Applications',
    tagline: 'Custom web platforms, client portals & B2B SaaS engineered for scale.',
    description: 'From concept to high-availability production. We engineer responsive web applications built with Next.js/React, TypeScript, enterprise authentication, payment gateways, and resilient database architectures.',
    iconName: 'Rocket',
    deliverables: [
      'Production-ready Next.js / React application with strict type safety',
      'Multi-tenant PostgreSQL / Supabase schema with RLS security policies',
      'Enterprise authentication (OAuth 2.0, SSO, Magic Links) & role-based access',
      'Payment processing & subscription billing integration (Stripe / Razorpay)',
      'Automated CI/CD pipeline and zero-downtime edge deployment',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Stripe'],
    timeline: '7 to 14 Days',
    badge: 'Core Practice',
  },
  {
    id: 'legacy-modernization',
    category: 'apps',
    title: 'Legacy Application Modernization & Refactoring',
    tagline: 'De-risk technical debt. Modernize legacy stacks into maintainable TypeScript.',
    description: 'Transform sluggish, fragile legacy codebases (PHP, jQuery, legacy React, monolithic scripts) into blazing-fast, modular TypeScript systems with zero regression and no business downtime.',
    iconName: 'RefreshCw',
    deliverables: [
      'Comprehensive codebase architecture & technical debt audit report',
      'Systematic migration from legacy JavaScript/PHP to strict TypeScript',
      'Modular component system & clean state management refactoring',
      'Automated regression safety test harness to protect existing workflows',
      'Performance overhaul targeting 95+ Google Lighthouse scores',
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'Vite', 'Vitest', 'Lighthouse'],
    timeline: '5 to 12 Days',
    badge: 'High ROI',
  },
  {
    id: 'cloud-devops',
    category: 'cloud',
    title: 'Cloud Architecture, DevOps & SRE Automation',
    tagline: 'Resilient cloud infrastructure, Docker orchestration & automated CI/CD.',
    description: 'Modernize your deployment workflow with bulletproof cloud setups. We configure Docker containerization, reverse proxying, Cloudflare edge security, and automated GitHub Actions pipelines on AWS, GCP, or Vercel.',
    iconName: 'CloudLightning',
    deliverables: [
      'Multi-stage Docker containerization & Docker Compose orchestration',
      'Nginx reverse proxy with automated SSL/TLS & Cloudflare edge integration',
      'Automated GitHub Actions CI/CD pipelines (test, build, deploy)',
      'Cloud cost optimization audit (reduce infrastructure bills by 30–50%)',
      'Automated daily database backups & disaster recovery playbooks',
    ],
    techStack: ['AWS (EC2/S3)', 'Docker', 'Nginx', 'Cloudflare', 'GitHub Actions', 'Linux'],
    timeline: '3 to 7 Days',
    badge: 'Infrastructure',
  },
  {
    id: 'gen-ai-rag',
    category: 'ai',
    title: 'Enterprise Generative AI & Knowledge RAG Systems',
    tagline: 'Proprietary enterprise search, custom copilots & secure LLM pipelines.',
    description: 'Empower internal teams and customers with AI grounded in your proprietary documents. We implement high-accuracy RAG vector pipelines with Gemini 2.0, Grok, or GPT-4o, complete with citation sources and zero-hallucination guardrails.',
    iconName: 'BrainCircuit',
    deliverables: [
      'Enterprise document ingestion & chunking pipeline (PDFs, docs, tables)',
      'High-dimension vector embeddings indexed with pgvector / Pinecone',
      'Multi-model routing (Gemini 2.0 Flash/Pro, GPT-4o, Grok-Beta)',
      'Anti-hallucination validation filters & strict source citations',
      'Streaming conversational UI with response caching to slash token costs',
    ],
    techStack: ['Gemini 2.0', 'Grok', 'OpenAI', 'pgvector', 'FastAPI', 'LangChain'],
    timeline: '5 to 10 Days',
    badge: 'Frontier AI',
  },
  {
    id: 'automation-pipes',
    category: 'ai',
    title: 'Autonomous Workflow & Business Process Automation',
    tagline: 'Replace repetitive manual tasks with resilient, event-driven pipelines.',
    description: 'Connect disjointed business systems. We architect intelligent background workers, webhook listeners, and AI-augmented document processors that automate customer onboarding, CRM updates, and transaction logging.',
    iconName: 'Workflow',
    deliverables: [
      'Bidirectional data sync between CRMs, ERPs, and internal databases',
      'Cryptographically verified webhook receivers with dead-letter retry queues',
      'Automated AI document parsing & invoice data extraction',
      'Real-time alert dispatching (Slack, WhatsApp, Email, SMS)',
      'Administrative telemetry dashboard for pipeline health & error tracing',
    ],
    techStack: ['Python', 'Node.js', 'BullMQ', 'Redis', 'Inngest', 'Webhooks'],
    timeline: '3 to 7 Days',
    badge: 'Productivity',
  },
  {
    id: 'backend-apis',
    category: 'apis',
    title: 'Scalable Backend APIs & Microservices Integration',
    tagline: 'Type-safe REST & GraphQL endpoints engineered for high concurrency.',
    description: 'Build or modernize the core engine of your software. We develop high-speed RESTful and GraphQL APIs with comprehensive OpenAPI/Swagger documentation, Redis caching layers, and database optimization.',
    iconName: 'Server',
    deliverables: [
      'Type-safe RESTful / GraphQL API architecture with OpenAPI documentation',
      'Role-Based Access Control (RBAC) with JWT & secure session tokens',
      'Redis caching layer for sub-50ms high-throughput response times',
      'Rate limiting, payload validation, and DDoS protection filters',
      'Complete Postman / Bruno API test collections and SDK stubs',
    ],
    techStack: ['Node.js', 'Python FastAPI', 'PostgreSQL', 'Redis', 'OpenAPI', 'Docker'],
    timeline: '4 to 10 Days',
    badge: 'High Concurrency',
  },
  {
    id: 'database-engineering',
    category: 'apis',
    title: 'Database Engineering, Data Pipelines & Analytics',
    tagline: 'Relational & vector schema design, query tuning & ETL pipelines.',
    description: 'Ensure data integrity and lightning-fast query speeds. We design clean relational schemas, tune slow SQL queries, build automated data aggregation pipelines, and create real-time operational dashboards.',
    iconName: 'Database',
    deliverables: [
      'Normalized PostgreSQL / Supabase database architecture & migration scripts',
      'Query profiling, composite index optimization & connection pooling',
      'Automated ETL / ELT sync pipelines into analytics data warehouses',
      'Row-level security (RLS) policies for multi-tenant data isolation',
      'Custom business intelligence dashboard with interactive charts',
    ],
    techStack: ['PostgreSQL', 'Supabase', 'SQL Optimization', 'Prisma', 'pgvector'],
    timeline: '4 to 8 Days',
    badge: 'Data Core',
  },
  {
    id: 'security-qa',
    category: 'qa',
    title: 'Quality Engineering, DevSecOps & Security Hardening',
    tagline: 'Comprehensive automated testing, OWASP audits & security hardening.',
    description: 'Ship code with complete confidence. We retrofit legacy and modern apps with automated End-to-End and unit test suites, conduct rigorous OWASP Top 10 vulnerability audits, and implement secure headers and secret hygiene.',
    iconName: 'ShieldCheck',
    deliverables: [
      'End-to-End automated testing suite (Playwright / Cypress)',
      'Comprehensive OWASP Top 10 vulnerability audit & mitigation report',
      'Content Security Policy (CSP), CORS, and HTTP security headers hardening',
      'Automated CI test gates preventing regressions on new pull requests',
      'Zero-vulnerability verification certification for clients and stakeholders',
    ],
    techStack: ['Playwright', 'Vitest / Jest', 'OWASP ZAP', 'GitHub Actions', 'SonarQube'],
    timeline: '3 to 6 Days',
    badge: 'Security & QA',
  },
];

type PracticeCategory = 'all' | 'apps' | 'cloud' | 'ai' | 'apis' | 'qa';

const CATEGORIES: { id: PracticeCategory; label: string }[] = [
  { id: 'all', label: 'All Practice Areas' },
  { id: 'apps', label: 'Apps & Modernization' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'ai', label: 'Enterprise AI & Automation' },
  { id: 'apis', label: 'APIs & Data Engineering' },
  { id: 'qa', label: 'DevSecOps & QA' },
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<PracticeCategory>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-brand-600" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-indigo-600" />;
      case 'CloudLightning':
        return <CloudLightning className="w-6 h-6 text-sky-600" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-cyan-600" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-emerald-600" />;
      case 'Server':
        return <Server className="w-6 h-6 text-amber-600" />;
      case 'Database':
        return <Database className="w-6 h-6 text-violet-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-rose-600" />;
      default:
        return <Layers className="w-6 h-6 text-brand-600" />;
    }
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-600 text-xs font-semibold mb-3 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Enterprise Practice Areas • Modern IT Services</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Enterprise IT Capabilities, Delivered at AI Velocity
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Inspired by top global IT consultancies, re-engineered for agility. We deliver production-grade applications, cloud infrastructure, and frontier AI integrations in days without agency bloat.
          </p>
        </div>

        {/* Practice Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const count = cat.id === 'all' 
              ? SERVICES_DATA.length 
              : SERVICES_DATA.filter((s) => s.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25 font-semibold scale-[1.02]'
                    : 'bg-white/80 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200/80 shadow-sm'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[11px] px-1.5 py-0.5 rounded-full font-mono ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-200/70 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-2xl glass-panel border border-slate-200/90 p-7 hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-slate-100/90 border border-slate-200/80 group-hover:scale-105 transition-transform shadow-sm">
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-brand-500/10 text-brand-700 border border-brand-500/30">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-brand-600 mt-1 mb-3">
                  {service.tagline}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-200/80">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5 text-brand-600" />
                    <span>Key Enterprise Deliverables:</span>
                  </div>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer info: Tech stack, Timeline, Action */}
              <div className="pt-5 border-t border-slate-200/80">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 text-slate-700 border border-slate-200/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-brand-600" />
                    <span>Avg: <strong className="text-slate-800">{service.timeline}</strong></span>
                  </div>

                  <a
                    href="#contact"
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    <span>Request Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Delivery Assurance Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl glass-panel border border-brand-500/20 shadow-lg shadow-brand-500/5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-slate-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>100% IP & Code Ownership</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Full Git repository transfer with zero vendor lock-in or proprietary runtime licensing.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-slate-900 text-sm">
                <ShieldCheck className="w-4 h-4 text-brand-600" />
                <span>Security & OWASP Ready</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Strict input validation, role-based access control, cryptographic secrets management, and SSL.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-slate-900 text-sm">
                <Code2 className="w-4 h-4 text-cyan-600" />
                <span>Modern Clean Architecture</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Modular TypeScript, automated Vitest/Playwright tests, and documented OpenAPI endpoints.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-slate-900 text-sm">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>Guaranteed Sprint Timelines</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Fixed-price deliverables with milestones delivered in 3 to 14 days, supported by daily updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
