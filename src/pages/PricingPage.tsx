import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pricing } from '../components/Pricing';
import { TrustedInIndia } from '../components/TrustedInIndia';
import { FAQ } from '../components/FAQ';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface PricingPageProps {
  onSelectPlan: (plan: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onSelectPlan }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePlanSelect = (planTitle: string) => {
    onSelectPlan(planTitle);
    navigate('/contact');
  };

  return (
    <div className="pt-28 pb-16">
      {/* Sub-page Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-center max-w-3xl mx-auto py-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-700 text-xs font-semibold mb-4 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Transparent Sprint Pricing • Zero Agency Overheads</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Fixed Investments,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-cyan-600 to-indigo-600">
              Guaranteed Sprint Outcomes.
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            No vague quotes, surprise hourly invoices, or hidden maintenance traps. All projects are delivered on fixed sprint budgets with 100% intellectual property ownership.
          </p>
        </div>
      </div>

      {/* Main Pricing Cards Grid */}
      <Pricing onSelectPlan={handlePlanSelect} />

      {/* Trust in India Section */}
      <div className="my-12">
        <TrustedInIndia />
      </div>

      {/* Pricing & Billing FAQ */}
      <FAQ />

      {/* Custom Enterprise Quote Callout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-500/30 shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Need an Accurate Custom Estimate?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Use our interactive scope calculator to configure your exact features, timeline urgency, and delivery sprint mode.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/estimator')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-indigo-600 shadow-md hover:shadow-brand-600/30 transition-all"
            >
              <span>Open Interactive Scope Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
