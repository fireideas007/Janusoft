import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const USD_TO_INR = 86;

  const plans: PricingPlan[] = [
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
      name: 'Custom & Cloud Systems',
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-300 text-xs font-semibold mb-3 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyber-cyan" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Predictable Investment. Zero Agency Markups.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            No surprise invoices or billable-hour tricks. Just fixed-price sprints and high-velocity results.
          </p>

          {/* Currency Switcher */}
          <div className="mt-6 inline-flex items-center gap-1 bg-slate-200 dark:bg-slate-800 p-1 rounded-xl text-xs font-mono">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currency === 'USD' ? 'bg-brand-600 text-white font-bold shadow' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('INR')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currency === 'INR' ? 'bg-brand-600 text-white font-bold shadow' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              INR (₹)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl glass-panel p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.recommended
                  ? 'border-2 border-brand-500 shadow-2xl shadow-brand-500/20 lg:-translate-y-2'
                  : 'border border-slate-200 dark:border-slate-800'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-brand-600 to-cyber-cyan text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-cyber-cyan mb-1">
                  {plan.bestFor}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 mb-6">
                  {plan.description}
                </p>

                {/* Price block */}
                <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <div className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {plan.price}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-1">
                    {plan.period}
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    What You Get:
                  </span>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                  plan.recommended
                    ? 'bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white shadow-lg shadow-brand-600/30 hover:scale-[1.01]'
                    : 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 max-w-3xl mx-auto p-5 rounded-2xl glass-panel border border-emerald-500/30 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 flex-shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <strong className="text-slate-900 dark:text-white">The Janusoft Peace-of-Mind Guarantee:</strong> Every sprint includes clean documentation, complete IP assignment, and 14 days of dedicated post-launch warranty support. If something we wrote breaks, we fix it immediately at zero cost.
          </div>
        </div>
      </div>
    </section>
  );
};
