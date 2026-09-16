import React from 'react';
import { Check, X, Sparkles, Clock, Zap, DollarSign, ShieldAlert, Cpu } from 'lucide-react';

export const ComparisonMatrix: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'Development Velocity',
      traditional: '2 to 6 months per milestone',
      janusoft: '3 to 14 days per functional sprint',
      icon: Zap,
    },
    {
      feature: 'Point of Contact',
      traditional: 'Junior account manager & endless meetings',
      janusoft: 'Direct senior technical founder access',
      icon: Clock,
    },
    {
      feature: 'Pricing & Overhead',
      traditional: 'High retainers paying for agency offices & sales staff',
      janusoft: 'Lean, transparent fixed-sprints & value-based pricing',
      icon: DollarSign,
    },
    {
      feature: 'Engineering Stack',
      traditional: 'Outdated legacy patterns, slow copy-paste code',
      janusoft: 'AI-orchestrated (Antigravity/Cursor), modern TypeScript & serverless',
      icon: Cpu,
    },
    {
      feature: 'Scope Creep & Risk',
      traditional: 'Billing by the hour with unexpected scope bills',
      janusoft: 'Clear milestones, upfront estimates, daily async updates',
      icon: ShieldAlert,
    },
  ];

  return (
    <section id="why-us" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-300 text-xs font-semibold mb-3 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyber-cyan" />
            The Janusoft Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Forward-Thinking Companies Choose AI-Native IT
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Traditional agencies throw bodies at problems. Janusoft uses cutting-edge AI orchestration to build faster, cleaner, and with zero administrative bloat.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl glass-panel border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 p-4 sm:p-5">
            <div className="md:col-span-4 uppercase tracking-wider">Dimension</div>
            <div className="hidden md:block md:col-span-4 uppercase tracking-wider text-rose-500">Traditional Agency</div>
            <div className="hidden md:block md:col-span-4 uppercase tracking-wider text-brand-600 dark:text-cyber-cyan">Janusoft Model</div>
          </div>

          <div className="divide-y divide-slate-200 dark:divide-slate-800/60">
            {comparisonRows.map((row, idx) => {
              const Icon = row.icon;
              return (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 gap-3 md:gap-4 items-center hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <div className="md:col-span-4 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-white text-sm">
                      {row.feature}
                    </span>
                  </div>

                  {/* Traditional column */}
                  <div className="md:col-span-4 flex items-start gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span>{row.traditional}</span>
                  </div>

                  {/* Janusoft column */}
                  <div className="md:col-span-4 flex items-start gap-2 text-xs sm:text-sm font-medium text-slate-900 dark:text-white bg-brand-500/5 dark:bg-brand-500/10 p-2.5 rounded-xl border border-brand-500/20">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{row.janusoft}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
