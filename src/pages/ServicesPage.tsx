import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Services } from '../components/Services';
import { TrustedInIndia } from '../components/TrustedInIndia';
import { FAQ } from '../components/FAQ';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Clock } from 'lucide-react';

interface ServicesPageProps {
  onSelectService: (service: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelect = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    navigate('/contact');
  };

  return (
    <div className="pt-28 pb-16">
      {/* Sub-page Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-center max-w-3xl mx-auto py-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-700 text-xs font-semibold mb-4 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Practice Areas & Core Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            High-Impact IT Services,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-cyan-600 to-indigo-600">
              Delivered at 10x AI Speed.
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Inspired by global IT leaders like DRC Systems & MethodHub. Every practice area is staffed with senior engineering rigor, accelerated by frontier AI developer tools, and delivered in fixed-price sprints.
          </p>
        </div>
      </div>

      {/* Main Services Filter & Grid */}
      <Services onSelectService={handleSelect} />

      {/* Trust in India Section */}
      <div className="my-12">
        <TrustedInIndia />
      </div>

      {/* FAQ on Services */}
      <FAQ />

      {/* Bottom CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-3xl bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="space-y-4 max-w-2xl mx-auto relative z-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold">
              Have a Custom IT Requirement?
            </h2>
            <p className="text-sm sm:text-base text-brand-100">
              Whether you need to modernize an existing system or launch a greenfield platform, we provide a full technical assessment and milestone roadmap within 12 hours.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-white text-brand-700 hover:bg-brand-50 shadow-md transition-all"
              >
                <span>Request Technical Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/estimator')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-white"
              >
                <span>Calculate Scope & Cost</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
