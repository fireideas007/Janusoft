import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EngagementModels } from '../components/EngagementModels';
import { RapidPrototypeOffer } from '../components/RapidPrototypeOffer';
import { TrustedInIndia } from '../components/TrustedInIndia';
import { Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface EngagementPageProps {
  onSelectModel: (model: string) => void;
  onSelectOffer: (offer: string) => void;
}

export const EngagementPage: React.FC<EngagementPageProps> = ({ onSelectModel, onSelectOffer }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleModelSelect = (title: string) => {
    onSelectModel(title);
    navigate('/contact');
  };

  const handleOfferSelect = (offer: string) => {
    onSelectOffer(offer);
    navigate('/contact');
  };

  const comparisonRows = [
    {
      feature: 'Best Suited For',
      pilot: 'Idea validation & testing agency speed',
      fixed: 'Defined MVPs & system modernizations',
      retainer: 'Continuous feature releases & tech lead',
    },
    {
      feature: 'Financial Commitment',
      pilot: 'Flat $390 / ₹29,990 (100% credited)',
      fixed: 'Fixed milestone bid, zero surprises',
      retainer: 'Monthly subscription, pause anytime',
    },
    {
      feature: 'Turnaround SLA',
      pilot: 'Guaranteed 48 Hours',
      fixed: '7 to 14 Days per sprint',
      retainer: 'Weekly continuous rollouts',
    },
    {
      feature: 'Deliverable',
      pilot: 'Clickable live prototype + DB spec',
      fixed: 'Full production deployment on AWS',
      retainer: 'Direct founder engineering pod',
    },
    {
      feature: 'Risk Protection',
      pilot: '100% Money-back guarantee',
      fixed: '14-Day post-launch warranty',
      retainer: 'Cancel or pause with 7 days notice',
    },
  ];

  return (
    <div className="pt-28 pb-16">
      {/* Sub-page Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-center max-w-3xl mx-auto py-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-700 text-xs font-semibold mb-4 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Collaboration Frameworks • Hiring Models</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Transparent Engagement Models,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-cyan-600 to-indigo-600">
              Zero Hiring Headaches.
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Inspired by MethodHub's agile pod and project-based structures. We offer zero-bureaucracy partnership models designed to deliver working code immediately.
          </p>
        </div>
      </div>

      {/* Main Engagement Cards */}
      <EngagementModels onSelectModel={handleModelSelect} />

      {/* Deep-Dive Model Comparison Table */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Side-by-Side Engagement Comparison
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Compare risk, turnaround, and commitment to pick the best match for your organization.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl glass-panel border border-slate-200 shadow-md">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-semibold font-mono uppercase text-[11px]">
              <tr>
                <th className="p-4 sm:p-5">Dimension</th>
                <th className="p-4 sm:p-5 text-emerald-700">48h POC Pilot</th>
                <th className="p-4 sm:p-5 text-brand-700">Fixed Milestone Sprint</th>
                <th className="p-4 sm:p-5 text-indigo-700">Dedicated AI Retainer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonRows.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">{row.feature}</td>
                  <td className="p-4 sm:p-5 text-slate-600">{row.pilot}</td>
                  <td className="p-4 sm:p-5 text-slate-600">{row.fixed}</td>
                  <td className="p-4 sm:p-5 text-slate-600">{row.retainer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trust in India Section */}
      <div className="my-12">
        <TrustedInIndia />
      </div>

      {/* Rapid Prototype Offer */}
      <RapidPrototypeOffer onSelectOffer={handleOfferSelect} />
    </div>
  );
};
