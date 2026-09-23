import React, { useState } from 'react';
import { 
  CreditCard, 
  HeartPulse, 
  Store, 
  Truck, 
  GraduationCap, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap,
  Cpu
} from 'lucide-react';

interface IndustrySolutionsProps {
  onSelectSolution: (solutionTitle: string) => void;
}

interface IndustryItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
  badge: string;
  highlightMetric: string;
  capabilities: string[];
  sampleStack: string[];
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: 'fintech',
    name: 'FinTech & Payments',
    icon: CreditCard,
    tagline: 'High-security transaction flows & subscription infrastructure.',
    description: 'We build frictionless payment integrations, automated billing pipelines, KYC document extraction, and financial data reconciliation with bank-grade security standards.',
    badge: 'High Security',
    highlightMetric: '99.99% Transaction Integrity',
    capabilities: [
      'Stripe & Razorpay multi-currency checkout & auto-invoicing',
      'Webhook idempotency & retry queues for zero lost payments',
      'Automated KYC document data extraction using LLM vision',
      'Transaction reconciliation & ledger audit logging',
    ],
    sampleStack: ['Next.js', 'PostgreSQL', 'Stripe', 'Razorpay', 'Redis'],
  },
  {
    id: 'b2b-saas',
    name: 'B2B SaaS & Marketplaces',
    icon: Building2,
    tagline: 'Multi-tenant architecture & enterprise user management.',
    description: 'Launch market-ready B2B software with complex organization hierarchies, role-based access control (RBAC), team invites, and tier-based feature gating.',
    badge: 'Scalability',
    highlightMetric: 'Multi-Tenant by Design',
    capabilities: [
      'Multi-tenant PostgreSQL schema with Row-Level Security (RLS)',
      'Enterprise SSO, OAuth 2.0 & Magic Link authentication',
      'Custom customer analytics dashboards & telemetry',
      'Usage-based metering & automated billing tiers',
    ],
    sampleStack: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind', 'Stripe'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare & MedTech',
    icon: HeartPulse,
    tagline: 'HIPAA-compliant portals & secure medical record handling.',
    description: 'Patient booking portals, doctor scheduling engines, and secure medical document vaults built with strict encryption, audit logs, and data governance.',
    badge: 'Compliance Ready',
    highlightMetric: 'Zero Data Exposure Protocol',
    capabilities: [
      'Encrypted patient records & access audit trails',
      'Real-time appointment scheduling & calendar syncing',
      'Intelligent medical report transcription & summarization',
      'Telehealth video room integrations & intake forms',
    ],
    sampleStack: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    icon: Truck,
    tagline: 'Real-time dispatch, shipment tracking & ERP integrations.',
    description: 'Replace messy spreadsheets with resilient event-driven logistics pipelines that coordinate dispatch schedules, driver alerts, and warehouse inventory in real time.',
    badge: 'Real-Time Sync',
    highlightMetric: 'Sub-second Event Delivery',
    capabilities: [
      'Real-time parcel & order tracking status endpoints',
      'Automated WhatsApp/SMS dispatch notifications to drivers',
      'Automated shipping label generation & warehouse sync',
      'ERP and CRM bidirectional sync with background workers',
    ],
    sampleStack: ['Python', 'BullMQ', 'Redis', 'Inngest', 'Webhooks'],
  },
  {
    id: 'edtech',
    name: 'EdTech & Learning',
    icon: GraduationCap,
    tagline: 'Interactive course platforms & AI-powered student copilots.',
    description: 'Deliver engaging digital education with structured lesson management, automated quiz generation, student progress analytics, and personalized AI tutor assistants.',
    badge: 'AI Augmented',
    highlightMetric: '10x Content Evaluation',
    capabilities: [
      'Course video streaming with progress tracking & bookmarks',
      'AI-powered quiz generation & automatic assignment scoring',
      'Personalized student doubt-solving copilot with Gemini 2.0',
      'Instructor analytics dashboard & certification generator',
    ],
    sampleStack: ['Next.js', 'Gemini 2.0', 'Supabase Vector', 'Tailwind'],
  },
  {
    id: 'ecommerce',
    name: 'Modern E-Commerce & Retail',
    icon: Store,
    tagline: 'High-speed headless commerce & real-time inventory sync.',
    description: 'Say goodbye to sluggish generic e-commerce templates. We build custom Next.js storefronts that load under 1 second, boosting conversions and scaling during flash sales.',
    badge: 'Performance',
    highlightMetric: '95+ Google Lighthouse',
    capabilities: [
      'Blazing-fast headless Next.js storefronts with dynamic filtering',
      'Real-time inventory synchronization across multi-channel stores',
      'Automated abandoned cart recovery via email & WhatsApp',
      'Custom checkout optimizations to minimize drop-offs',
    ],
    sampleStack: ['Next.js', 'Tailwind CSS', 'Stripe', 'Redis', 'Vercel'],
  },
];

export const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({ onSelectSolution }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(INDUSTRIES[0].id);

  const active = INDUSTRIES.find((i) => i.id === selectedIndustry) || INDUSTRIES[0];
  const ActiveIcon = active.icon;

  return (
    <section id="solutions" className="py-24 relative bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-600 text-xs font-semibold mb-3 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Industry Solution Accelerators</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tailored IT Solutions for Your Industry
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Inspired by enterprise solution delivery at DRC Systems & MethodHub. We combine deep domain architecture patterns with AI velocity so you never start from zero.
          </p>
        </div>

        {/* Industry selector tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            const isSelected = selectedIndustry === ind.id;

            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`p-4 rounded-2xl text-center flex flex-col items-center gap-2.5 transition-all duration-200 ${
                  isSelected
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25 scale-[1.03] font-semibold'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-white/20 text-white' : 'bg-white text-brand-600 shadow-sm'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium leading-tight">{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Spotlight Card */}
        <div className="rounded-3xl glass-panel border border-slate-200/90 p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="p-3 rounded-2xl bg-brand-500/10 text-brand-600 border border-brand-500/20">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-slate-900">{active.name}</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-700 border border-brand-500/30">
                      {active.badge}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-brand-600 mt-0.5">{active.tagline}</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {active.description}
              </p>

              {/* Deliverable list */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Industry-Specific Capabilities:
                </div>
                {active.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Technology tags */}
              <div className="pt-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Accelerated Stack:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {active.sampleStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 text-slate-700 border border-slate-200/80 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right highlight metrics & CTA */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-gradient-to-br from-brand-600 via-indigo-600 to-brand-700 text-white p-7 sm:p-8 shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-brand-200">
                    Core Engineering Standard
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    {active.highlightMetric}
                  </div>
                  <p className="text-xs text-brand-100/90 leading-relaxed pt-1">
                    Delivered via our 4-phase AI-native engineering playbook with automated regression testing and direct founder oversight.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/10 backdrop-blur border border-white/20 space-y-2 text-xs">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <Zap className="w-4 h-4 text-amber-300" />
                    <span>Typical Sprint: 7 to 12 Days</span>
                  </div>
                  <p className="text-brand-100 text-[11px] leading-snug">
                    Get an end-to-end working deployment on AWS or Cloudflare with full Git code and database ownership transferred to you.
                  </p>
                </div>

                <button
                  onClick={() => onSelectSolution(`${active.name} Solution Blueprint`)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white text-brand-700 hover:bg-brand-50 shadow-lg transition-all"
                >
                  <span>Request {active.name} Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
