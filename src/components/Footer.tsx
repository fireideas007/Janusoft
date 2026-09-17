import React from 'react';
import { Terminal, Mail, Globe, Shield, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-950/80 pt-16 pb-12 text-slate-600 dark:text-slate-400 text-xs sm:text-sm overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-cyber-cyan to-brand-500 p-0.5 shadow-md shadow-brand-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-cyber-cyan" />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                  Janusoft
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase rounded bg-brand-500/20 text-brand-400 border border-brand-500/30">
                  .in
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              Next-generation IT agency delivering high-velocity software engineering, generative AI systems, and cloud architecture powered by state-of-the-art AI developer tooling.
            </p>

            <div className="pt-2 flex flex-col gap-2 font-mono text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyber-cyan" />
                <a href="mailto:hello@janusoft.in" className="hover:text-brand-500 transition-colors">
                  hello@janusoft.in
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>Domain: <strong>janusoft.in</strong> • Remote Global Delivery</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider font-mono">
              Offerings
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Fullstack Web Apps</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Legacy Modernization</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Cloud & DevOps SRE</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Enterprise AI & RAG</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Backend APIs & Microservices</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">DevSecOps & QA Audit</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider font-mono">
              Company
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#why-us" className="hover:text-brand-500 transition-colors">Why Janusoft</a></li>
              <li><a href="#estimator" className="hover:text-brand-500 transition-colors">Scope Estimator</a></li>
              <li><a href="#process" className="hover:text-brand-500 transition-colors">Our Playbook</a></li>
              <li><a href="#pricing" className="hover:text-brand-500 transition-colors">Pricing & Retainers</a></li>
              <li><a href="#faq" className="hover:text-brand-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Guarantee & Action */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider font-mono">
              Commitment
            </div>
            <div className="p-4 rounded-xl glass-panel border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <Shield className="w-3.5 h-3.5" />
                <span>100% IP Transfer</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">
                You retain complete, exclusive ownership of all code and architecture produced during your sprints.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Janusoft (janusoft.in). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Solo Founder Velocity • Engineered with AI</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-500 transition-colors flex items-center gap-1 text-xs"
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
