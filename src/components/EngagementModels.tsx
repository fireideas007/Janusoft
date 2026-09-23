import React from 'react';
import { Layers, Zap, Clock, ShieldCheck, ArrowRight, CheckCircle2, UserCheck, Sparkles, Building2 } from 'lucide-react';

interface EngagementModelsProps {
  onSelectModel: (modelName: string) => void;
}

export const EngagementModels: React.FC<EngagementModelsProps> = ({ onSelectModel }) => {
  const models = [
    {
      id: 'pilot',
      badge: 'Lowest Risk • Instant Buy',
      badgeColor: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30',
      title: '48-Hour Rapid POC Pilot',
      tagline: 'De-risk before full commitment. Working prototype in 48 hours.',
      investment: '$390 / ₹29,990',
      period: 'flat one-time fee',
      creditedNote: '100% Credited to your full build',
      description: 'Ideal for founders and tech leaders who want to see working code and verified architecture before greenlighting full development.',
      deliverables: [
        'Live clickable React/Next.js interactive prototype',
        'PostgreSQL schema & API contract architecture',
        'Fixed-price milestone implementation SOW',
        '30-minute founder roadmap strategy call',
        '100% Money-back guarantee if not satisfied',
      ],
      ctaText: 'Claim 48h Prototype Slot',
      popular: false,
    },
    {
      id: 'fixed-sprint',
      badge: 'Most Popular for MVPs',
      badgeColor: 'bg-brand-500/10 text-brand-700 border-brand-500/30',
      title: 'Fixed-Price Milestone Sprints',
      tagline: 'Guaranteed delivery scope, fixed timeline, zero surprises.',
      investment: 'From $1,690 / ₹1.45L',
      period: 'per milestone sprint',
      creditedNote: 'Fixed scope • Zero hourly overages',
      description: 'Ideal for new web SaaS launches, legacy app modernization, or specialized LLM/RAG copilot integration with defined deliverables.',
      deliverables: [
        'Complete fullstack application ready for production',
        'Supabase/PostgreSQL schema, auth & payment integration',
        'Automated CI/CD deployment on AWS / Vercel / Cloudflare',
        'Automated Playwright/Vitest testing & OWASP audit',
        '100% Git source code & intellectual property transfer',
      ],
      ctaText: 'Scope Project Sprint',
      popular: true,
    },
    {
      id: 'dedicated-pod',
      badge: 'Scalable Staff Augmentation',
      badgeColor: 'bg-indigo-500/10 text-indigo-700 border-indigo-500/30',
      title: 'Dedicated AI-Augmented Engineer',
      tagline: 'Senior technical partner on demand with 3x-4x developer velocity.',
      investment: '$3,490 / ₹3,00,000',
      period: 'per month / retainer',
      creditedNote: 'No long-term lock-in • Pause or cancel anytime',
      description: 'Inspired by modern agile pods. Direct senior tech lead execution accelerated by frontier AI tools to ship continuous features and maintain cloud infrastructure.',
      deliverables: [
        'Up to 4 high-impact feature releases per month',
        'Direct Slack / WhatsApp communication with senior founder',
        'Continuous performance, security tuning & code reviews',
        '48-hour SLA response on critical technical blockers',
        'Bi-weekly roadmap & architecture alignment reviews',
      ],
      ctaText: 'Hire Dedicated Engineer',
      popular: false,
    },
  ];

  return (
    <section id="engagement-models" className="py-24 relative bg-slate-100/50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-600 text-xs font-semibold mb-3 border border-brand-500/20">
            <Layers className="w-3.5 h-3.5 text-brand-600" />
            <span>Structured Engagement Models</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            How Forward-Thinking Teams Partner With Us
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Inspired by global IT leaders like DRC Systems & MethodHub, optimized for unprecedented agility. Choose the collaboration structure that fits your roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {models.map((m) => (
            <div
              key={m.id}
              className={`rounded-2xl glass-panel p-8 flex flex-col justify-between relative transition-all duration-300 ${
                m.popular
                  ? 'border-2 border-brand-500 shadow-2xl shadow-brand-500/15 lg:-translate-y-2'
                  : 'border border-slate-200/90 shadow-sm'
              }`}
            >
              {m.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  Recommended For Fast Launches
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${m.badgeColor}`}>
                    {m.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {m.title}
                </h3>
                <p className="text-xs font-medium text-brand-600 mt-1 mb-4">
                  {m.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {m.description}
                </p>

                {/* Investment line */}
                <div className="mb-6 pb-6 border-b border-slate-200">
                  <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    {m.investment}
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">
                    {m.period}
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-600 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{m.creditedNote}</span>
                  </div>
                </div>

                {/* Deliverables checklist */}
                <div className="space-y-2.5 mb-8">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    What You Receive:
                  </div>
                  {m.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action CTA */}
              <button
                onClick={() => onSelectModel(m.title)}
                className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 shadow-md ${
                  m.popular
                    ? 'text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-brand-600/30'
                    : 'text-slate-800 bg-white hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <span>{m.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
