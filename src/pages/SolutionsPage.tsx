import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IndustrySolutions } from '../components/IndustrySolutions';
import { TrustedInIndia } from '../components/TrustedInIndia';
import { RapidPrototypeOffer } from '../components/RapidPrototypeOffer';
import { Sparkles, ArrowRight } from 'lucide-react';

interface SolutionsPageProps {
  onSelectSolution: (solution: string) => void;
  onSelectOffer: (offer: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onSelectSolution, onSelectOffer }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSolutionSelect = (title: string) => {
    onSelectSolution(title);
    navigate('/contact');
  };

  const handleOfferSelect = (offer: string) => {
    onSelectOffer(offer);
    navigate('/contact');
  };

  return (
    <div className="pt-28 pb-16">
      {/* Sub-page Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-center max-w-3xl mx-auto py-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-700 text-xs font-semibold mb-4 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Domain Accelerators • Vertical IT Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Proven Industry Blueprints,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-cyan-600 to-indigo-600">
              Zero Generic Templates.
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Taking cues from enterprise transformation leaders like DRC Systems & MethodHub. We combine high-security Indian compliance (RBI, GST, DPDP) with modern fullstack architecture.
          </p>
        </div>
      </div>

      {/* Main Industry Solutions Showcase */}
      <IndustrySolutions onSelectSolution={handleSolutionSelect} />

      {/* Trust in India Section */}
      <div className="my-12">
        <TrustedInIndia />
      </div>

      {/* Low risk prototype offer */}
      <RapidPrototypeOffer onSelectOffer={handleOfferSelect} />
    </div>
  );
};
