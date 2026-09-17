import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, Clock, ShieldCheck, Zap } from 'lucide-react';

interface ProjectEstimatorProps {
  onPreFillScope: (scopeSummary: string) => void;
}

interface FeatureOption {
  id: string;
  name: string;
  days: number;
  costUSD: number;
  category: string;
}

const BASE_PROJECT_TYPES = [
  { id: 'saas-mvp', name: 'Fullstack SaaS / Web App', baseDays: 6, baseCostUSD: 1499, description: 'Complete web application foundation with database, UI, and logic' },
  { id: 'ai-copilot', name: 'GenAI & RAG Knowledge Copilot', baseDays: 5, baseCostUSD: 1299, description: 'Custom LLM integration, document embeddings, and streaming agent' },
  { id: 'automation', name: 'Business Process Automation', baseDays: 4, baseCostUSD: 899, description: 'Multi-app sync pipelines, webhooks, and background worker queues' },
  { id: 'api-infra', name: 'Backend API & Cloud Architecture', baseDays: 5, baseCostUSD: 1199, description: 'Scalable serverless microservices, database design, and auth' },
];

const ADDON_FEATURES: FeatureOption[] = [
  { id: 'auth-rbac', name: 'User Authentication & RBAC (Supabase/Auth0)', days: 1, costUSD: 250, category: 'Security' },
  { id: 'payments', name: 'Stripe / Razorpay Payment & Subscriptions', days: 2, costUSD: 350, category: 'Monetization' },
  { id: 'ai-search', name: 'Vector Search & RAG Chatbot Integration', days: 2, costUSD: 450, category: 'AI' },
  { id: 'admin-dash', name: 'Comprehensive Admin Analytics Dashboard', days: 2, costUSD: 390, category: 'UI/UX' },
  { id: 'third-party-api', name: 'CRM & ERP Third-Party API Integrations', days: 1.5, costUSD: 300, category: 'Data' },
  { id: 'seo-audit', name: 'SEO Optimization, OG Meta & Core Web Vitals', days: 1, costUSD: 200, category: 'Growth' },
  { id: 'testing-suite', name: 'End-to-End Automated Test Suite & CI/CD', days: 1.5, costUSD: 290, category: 'QA' },
];

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onPreFillScope }) => {
  const [selectedType, setSelectedType] = useState(BASE_PROJECT_TYPES[0].id);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['auth-rbac', 'payments']);
  const [speedMode, setSpeedMode] = useState<'standard' | 'blitz'>('standard');
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  const USD_TO_INR_RATE = 86;

  const currentBase = BASE_PROJECT_TYPES.find((t) => t.id === selectedType)!;

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const calculatedDays = Math.ceil(
    (currentBase.baseDays +
      selectedAddons.reduce((acc, id) => {
        const addon = ADDON_FEATURES.find((f) => f.id === id);
        return acc + (addon ? addon.days : 0);
      }, 0)) * (speedMode === 'blitz' ? 0.7 : 1)
  );

  const rawCostUSD =
    currentBase.baseCostUSD +
    selectedAddons.reduce((acc, id) => {
      const addon = ADDON_FEATURES.find((f) => f.id === id);
      return acc + (addon ? addon.costUSD : 0);
    }, 0);

  const finalCostUSD = speedMode === 'blitz' ? Math.round(rawCostUSD * 1.25) : rawCostUSD;
  const finalCostINR = Math.round(finalCostUSD * USD_TO_INR_RATE);

  const formattedCost =
    currency === 'USD'
      ? `$${finalCostUSD.toLocaleString()}`
      : `₹${finalCostINR.toLocaleString()}`;

  const handleTransferToContact = () => {
    const addonNames = selectedAddons
      .map((id) => ADDON_FEATURES.find((f) => f.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const summary = `Estimated Scope: ${currentBase.name} | Timeline: ~${calculatedDays} days (${speedMode === 'blitz' ? 'Express Blitz' : 'Standard Sprint'}) | Selected Modules: ${addonNames || 'None'} | Budget Target: ${formattedCost}`;

    onPreFillScope(summary);
  };

  return (
    <section id="estimator" className="py-20 relative bg-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 text-cyber-cyan text-xs font-semibold mb-3 border border-cyber-cyan/20">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Scope & Pricing Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Estimate Your Project in Seconds
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            No vague quotes or hidden surprises. Configure your requirements and get an instant transparent timeline & ballpark estimation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Configurator */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Base Type */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                1. Select Core Deliverable
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BASE_PROJECT_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                      selectedType === type.id
                        ? 'border-brand-500 bg-brand-500/10 dark:bg-brand-500/15 shadow-sm shadow-brand-500/20'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-sm text-slate-900 dark:text-white">
                      {type.name}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                      {type.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Addon modules */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                2. Select Required Features & Modules
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ADDON_FEATURES.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-start gap-3 p-3 rounded-xl border text-left text-xs transition-all ${
                        isChecked
                          ? 'border-cyber-cyan/60 bg-cyber-cyan/5 text-slate-900 dark:text-white'
                          : 'border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center flex-shrink-0 transition-colors ${
                          isChecked
                            ? 'bg-cyber-cyan text-slate-950 font-bold'
                            : 'border border-slate-400 dark:border-slate-600'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium leading-snug">{addon.name}</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                          +{addon.days}d sprint
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Speed & Urgency */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                3. Delivery Velocity Mode
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setSpeedMode('standard')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    speedMode === 'standard'
                      ? 'border-brand-500 bg-brand-500/10'
                      : 'border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2 font-semibold text-sm text-slate-900 dark:text-white">
                    <Clock className="w-4 h-4 text-brand-500" />
                    <span>Standard Sprint</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Structured high-velocity development with daily async updates.
                  </p>
                </button>

                <button
                  onClick={() => setSpeedMode('blitz')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    speedMode === 'blitz'
                      ? 'border-amber-500 bg-amber-500/10'
                      : 'border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2 font-semibold text-sm text-slate-900 dark:text-white">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span>Express Blitz (Priority)</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Maximum dedication. Rapid turnaround expedited for imminent launches.
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Calculation Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 glass-panel p-7 rounded-2xl border border-brand-500/30 shadow-2xl shadow-brand-500/10">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Estimated Summary
                </span>
                {/* Currency Switcher */}
                <div className="flex items-center gap-1 bg-slate-200/80 p-1 rounded-lg text-xs font-mono">
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`px-2 py-0.5 rounded transition-all ${
                      currency === 'USD' ? 'bg-brand-600 text-white font-bold shadow-sm' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    USD
                  </button>
                  <button
                    onClick={() => setCurrency('INR')}
                    className={`px-2 py-0.5 rounded transition-all ${
                      currency === 'INR' ? 'bg-brand-600 text-white font-bold shadow-sm' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    INR (₹)
                  </button>
                </div>
              </div>

              {/* Metric Card */}
              <div className="my-6 space-y-4">
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Ballpark Investment</span>
                  <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-cyber-cyan to-brand-400 tracking-tight mt-1">
                    {formattedCost}
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Fixed sprint scope. Zero surprise fees.
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyber-cyan" />
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Estimated Delivery Time:
                    </span>
                  </div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                    {calculatedDays} Business Days
                  </span>
                </div>
              </div>

              {/* Deliverable list */}
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>100% Full Source Code & IP Transfer</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>14-Day Post-Launch Bug Warranty Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Production Deployment & Setup Docs</span>
                </div>
              </div>

              {/* CTA Transfer to Contact */}
              <button
                onClick={handleTransferToContact}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-lg shadow-brand-600/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <Sparkles className="w-4 h-4 text-cyber-cyan" />
                <span>Lock In This Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-400 mt-3">
                Pre-fills your project inquiry below for an instant founder response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
