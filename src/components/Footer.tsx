import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Mail, Globe, Shield, ArrowUp, Building2, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-100/70 pt-16 pb-12 text-slate-600 text-xs sm:text-sm overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-cyan-500 to-indigo-600 p-0.5 shadow-md shadow-brand-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">
                  Janusoft
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase rounded bg-brand-500/10 text-brand-700 border border-brand-500/30">
                  .in
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Next-generation IT agency delivering high-velocity software engineering, generative AI systems, and cloud architecture powered by state-of-the-art AI developer tooling.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2 font-mono">
                <Mail className="w-3.5 h-3.5 text-brand-600" />
                <a href="mailto:hello@janusoft.in" className="hover:text-brand-600 transition-colors">
                  hello@janusoft.in
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-500 font-mono">
                <Globe className="w-3.5 h-3.5 text-emerald-500" />
                <span>Domain: <strong>janusoft.in</strong> • Remote Global Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 pt-1">
                <Building2 className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <span>Legal Entity: <strong>Hackproof Technologies India Private Limited</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                <span>Serving Clients in Bengaluru, Mumbai, GIFT City, Delhi NCR & Ahmedabad</span>
              </div>
            </div>
          </div>

          {/* Quick Links: Services & Solutions */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-bold text-slate-900 text-xs uppercase tracking-wider font-mono">
              Practice Areas
            </div>
            <ul className="space-y-2 text-xs">
              <li><Link to="/services" className="hover:text-brand-600 transition-colors">Web Apps & MVPs</Link></li>
              <li><Link to="/services" className="hover:text-brand-600 transition-colors">Custom AI Chatbots</Link></li>
              <li><Link to="/services" className="hover:text-brand-600 transition-colors">Websites & Landing Pages</Link></li>
              <li><Link to="/services" className="hover:text-brand-600 transition-colors">Admin Dashboards</Link></li>
              <li><Link to="/services" className="hover:text-brand-600 transition-colors">API Automations</Link></li>
              <li><Link to="/services" className="hover:text-brand-600 transition-colors">Website Modernization</Link></li>
            </ul>
          </div>

          {/* Company & Engagement */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-bold text-slate-900 text-xs uppercase tracking-wider font-mono">
              Explore
            </div>
            <ul className="space-y-2 text-xs">
              <li><Link to="/engagement" className="hover:text-brand-600 transition-colors">Hiring Models</Link></li>
              <li><Link to="/estimator" className="hover:text-brand-600 transition-colors">Scope Estimator</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-600 transition-colors">Pricing & Plans</Link></li>
              <li><Link to="/contact" className="hover:text-brand-600 transition-colors">Contact Founder</Link></li>
              <li><Link to="/engagement" className="text-emerald-700 font-semibold hover:underline">48h Prototype ($390)</Link></li>
            </ul>
          </div>

          {/* Guarantee & Action */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-bold text-slate-900 text-xs uppercase tracking-wider font-mono">
              Commitment
            </div>
            <div className="p-4 rounded-xl glass-panel border border-slate-200 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                <Shield className="w-3.5 h-3.5" />
                <span>100% IP Transfer & GST Billing</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">
                You retain complete, exclusive ownership of all code, architecture, and IP. Billed through Hackproof Technologies India Pvt Ltd.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left leading-relaxed">
            © {new Date().getFullYear()} Janusoft (janusoft.in). A software engineering brand of <strong>Hackproof Technologies India Private Limited</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline text-[11px] text-slate-400">Solo Founder Velocity • Powered by AI</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-200/80 text-slate-600 hover:text-brand-600 transition-colors flex items-center gap-1 text-xs"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
