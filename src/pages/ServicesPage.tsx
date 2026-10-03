import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Services } from '../components/Services';
import { TrustedInIndia } from '../components/TrustedInIndia';
import { FAQ } from '../components/FAQ';
import { ArrowRight } from 'lucide-react';

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
    <div className="pt-24 pb-16">
      {/* Main Services Filter & Grid (Clean, single clear header) */}
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
              Have a Custom Requirement?
            </h2>
            <p className="text-sm sm:text-base text-brand-100">
              Whether you need to launch a new MVP or run high-ROAS performance ads, Aditya provides a full technical assessment within 12 hours.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-white text-brand-700 hover:bg-brand-50 shadow-md transition-all"
              >
                <span>Request Spec & Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/estimator')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-white"
              >
                <span>Scope Estimator</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
