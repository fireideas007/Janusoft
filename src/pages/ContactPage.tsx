import React, { useEffect } from 'react';
import { ContactForm } from '../components/ContactForm';
import { TrustedInIndia } from '../components/TrustedInIndia';
import { Sparkles, MapPin, Building2, ShieldCheck, Mail, Globe, MessageSquare } from 'lucide-react';

interface ContactPageProps {
  initialService: string;
  preFilledScope: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService, preFilledScope }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-16">
      {/* Sub-page Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-center max-w-3xl mx-auto py-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-700 text-xs font-semibold mb-4 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Direct Founder Access • Rapid Kickoff</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Ready to Build?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-cyan-600 to-indigo-600">
              Talk Directly with the Engineer.
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            No sales reps or junior liaisons. You consult directly with the technical founder. Receive a comprehensive architecture assessment, schema plan, and fixed timeline within 12 hours.
          </p>
        </div>
      </div>

      {/* Main Contact Form */}
      <ContactForm initialService={initialService} preFilledScope={preFilledScope} />

      {/* Trust in India Section */}
      <div className="my-12">
        <TrustedInIndia />
      </div>

      {/* Corporate & Legal Entity Verification Details */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-3xl glass-panel border border-slate-200 p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <Building2 className="w-4 h-4 text-brand-600" />
              <span>Registered Entity</span>
            </div>
            <p className="leading-relaxed">
              <strong>Hackproof Technologies India Private Limited</strong><br />
              Operated as an enterprise AI-augmented software engineering practice.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Tax & Contracts</span>
            </div>
            <p className="leading-relaxed">
              Standard Indian GST compliant invoicing, mutual Non-Disclosure Agreements (NDA), and strict IP ownership assignment contracts provided.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <Globe className="w-4 h-4 text-cyan-600" />
              <span>Global & Pan-India</span>
            </div>
            <p className="leading-relaxed">
              Remote delivery worldwide with primary delivery operations across Bengaluru, Mumbai, GIFT City, Delhi NCR, and Ahmedabad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
