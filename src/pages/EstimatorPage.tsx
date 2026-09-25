import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectEstimator } from '../components/ProjectEstimator';
import { TrustedInIndia } from '../components/TrustedInIndia';
import { FAQ } from '../components/FAQ';
import { Sparkles, Calculator, ShieldCheck } from 'lucide-react';

interface EstimatorPageProps {
  onPreFillScope: (scope: string) => void;
}

export const EstimatorPage: React.FC<EstimatorPageProps> = ({ onPreFillScope }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePreFill = (scope: string) => {
    onPreFillScope(scope);
    navigate('/contact');
  };

  return (
    <div className="pt-28 pb-16">
      {/* Sub-page Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-center max-w-3xl mx-auto py-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-800 text-xs font-semibold mb-4 border border-cyan-500/25">
            <Calculator className="w-3.5 h-3.5 text-cyan-700" />
            <span>Real-Time Scope & Budget Estimator</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Transparent Scoping,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-cyan-600 to-indigo-600">
              Zero Guesswork.
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Calculate your sprint investment in USD or INR. Mix and match core deliverables with custom feature modules, select standard or express blitz speed, and transfer your quote directly to kickoff.
          </p>
        </div>
      </div>

      {/* Main Project Estimator */}
      <ProjectEstimator onPreFillScope={handlePreFill} />

      {/* Trust in India Section */}
      <div className="my-12">
        <TrustedInIndia />
      </div>

      {/* Estimator FAQ */}
      <FAQ />
    </div>
  );
};
