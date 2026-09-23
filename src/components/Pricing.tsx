import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const USD_TO_INR = 86;

  const plans: PricingPlan[] = [
    {
      id: 'poc-pilot',
      name: '48h Rapid POC Pilot',
      price: currency === 'USD' ? '$390' : '₹29,990',
      period: 'flat 48h delivery',
      description: 'Lowest risk entry point. Clickable working prototype & architecture blueprint delivered in 48 hours.',
      bestFor: 'Founders Testing Idea or Velocity',
      highlightBadge: '⚡ Instant Buy • Zero Risk',
      ctaText: 'Claim 48h Prototype',
      features: [
        'Live interactive React/Next.js preview URL',
        'PostgreSQL schema & API contract blueprint',
        'Full build milestone roadmap & fixed SOW',
        '30-min strategy & scoping call with founder',
        '100% credited towards full project',
        '100% Money-back guarantee if not thrilled',
      ],
    },
    {
      id: 'mvp-sprint',
      name: 'Rapid MVP Sprint',
      price: currency === 'USD' ? '$1,890' : `₹${(1890 * USD_TO_INR).toLocaleString()}`,
      period: 'per sprint / one-time',
      description: 'Ideal for early-stage founders & teams needing a market-ready web app or SaaS launched in days.',
      bestFor: 'Startups & Product Launches',
      ctaText: 'Book MVP Sprint',
      features: [
        'Complete Next.js / React application',
        'Supabase / PostgreSQL database & auth',
        'Stripe or Razorpay payment integration',
        'Responsive UI optimized for desktop & mobile',
        '100% full source code & IP ownership',
        '7-14 days turnaround time',
        '14 days post-launch warranty & bug fixes',
      ],
    },
    {
      id: 'ai-retainer',
      name: 'Dedicated AI Retainer',
      price: currency === 'USD' ? '$3,490' : `₹${(3490 * USD_TO_INR).toLocaleString()}`,
      period: 'per month',
      description: 'Your on-demand senior AI-native engineering partner. Continuous iterations, feature rollouts, and support.',
      bestFor: 'Growing Businesses & Scaleups',
      recommended: true,
      highlightBadge: 'Most Popular',
      ctaText: 'Start Monthly Retainer',
      features: [
        'Up to 4 feature sprints per month',
        'Generative AI / LLM & RAG integrations',
        'Continuous performance & security tuning',
        'Direct Slack / WhatsApp channel with founder',
        '48-hour SLA response on critical issues',
        'No lock-in contract — pause or cancel anytime',
        'Bi-weekly architecture & roadmap reviews',
      ],
    },
    {
      id: 'enterprise-custom',
      name: 'Custom Enterprise Cloud',
      price: 'Custom',
      period: 'tailored scope',
      description: 'Tailored enterprise architectures, large-scale database migrations, custom agent clusters, and high-security compliance.',
      bestFor: 'Enterprises & Large Systems',
      ctaText: 'Schedule Scoping Call',
      features: [
        'Full architecture audit & technical roadmap',
        'Private LLM deployment & custom fine-tuning',
        'Complex event-driven microservices',
        'Enterprise SSO, RBAC & SOC2 readiness',
        'Custom SLA & dedicated emergency standby',
        'Formal NDA & customized IP assignment contracts',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 text-xs font-semibold mb-3 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Predictable Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Predictable Investment. Zero Agency Markups.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            No surprise invoices or billable-hour tricks. From a 48-hour low-risk pilot to full enterprise outcome sprints.
          </p>

          {/* Currency Switcher */}
          <div className="mt-6 inline-flex items-center gap-1 bg-slate-200/80 p-1 rounded-xl text-xs font-mono">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currency === 'USD' ? 'bg-brand-600 text-white font-bold shadow' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('INR')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currency === 'INR' ? 'bg-brand-600 text-white font-bold shadow' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              INR (₹)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl glass-panel p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-300 ${
                plan.recommended
                  ? 'border-2 border-brand-500 shadow-2xl shadow-brand-500/20 lg:-translate-y-2'
                  : plan.id === 'poc-pilot'
                  ? 'border-2 border-emerald-500/40 shadow-xl shadow-emerald-500/10'
                  : 'border border-slate-200/90 shadow-sm'
              }`}
            >
              {plan.highlightBadge && (
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md whitespace-nowrap ${
                  plan.recommended
                    ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white'
                    : 'bg-emerald-600 text-white'
                }`}>
                  {plan.highlightBadge}
                </div>
              )}

              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 mb-1">
                  {plan.bestFor}
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-500 mt-2 mb-5 leading-snug">
                  {plan.description}
                </p>

                {/* Price block */}
                <div className="mb-5 pb-5 border-b border-slate-200">
                  <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    {plan.price}
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-1">
                    {plan.period}
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    What You Get:
                  </span>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm ${
                  plan.recommended
                    ? 'text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-md shadow-brand-600/30'
                    : plan.id === 'poc-pilot'
                    ? 'text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/25'
                    : 'text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* IP & Money-Back Notice */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl glass-panel border border-brand-500/20 p-5 text-center flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span>Zero Agency Overhead Guarantee</span>
          </div>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span>100% full source code ownership on completion</span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span className="text-emerald-700 font-semibold">14-day warranty on all delivered code</span>
        </div>
      </div>
    </section>
  );
};
