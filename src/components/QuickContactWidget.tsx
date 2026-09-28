import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  X, 
  Phone, 
  Mail, 
  ArrowRight, 
  Zap, 
  Sparkles, 
  CheckCircle2,
  Terminal,
  Minimize2
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export const QuickContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);
  const { prototypePrice } = useCurrency();

  const whatsappUrl = "https://wa.me/919999999999?text=" + encodeURIComponent("Hello Janusoft! I'm interested in building a project. Can we discuss scope and timeline?");
  const emailUrl = "mailto:hello@janusoft.in?subject=" + encodeURIComponent("Project Inquiry - Janusoft Specification");

  if (isDismissed) {
    return null;
  }

  return (
    <aside aria-label="Founder Consultation Widget" className="fixed bottom-5 right-5 z-40 max-w-[calc(100vw-2.5rem)]">
      {isOpen ? (
        <div className="w-[330px] sm:w-[360px] max-w-full rounded-2xl glass-panel bg-white/95 border border-slate-200/90 shadow-2xl shadow-slate-900/15 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-brand-600/30 border border-cyan-400/40 flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-bold text-xs tracking-tight text-white">
                  <span>Founder Fast-Lane</span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Online
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono">
                  Aditya • Lead Engineer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Minimize widget"
                aria-label="Minimize"
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsDismissed(true)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Close widget"
                aria-label="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Body Pitch */}
          <div className="p-4 space-y-3.5">
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Tell us what you are building and we will tell you what it takes. We usually reply <strong className="text-slate-900 font-semibold">within 2 hours</strong>.
            </p>

            <div className="space-y-2">
              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Call & Email secondary grid */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-semibold text-[11px] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Call Us</span>
                </a>
                <a
                  href={emailUrl}
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-semibold text-[11px] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-600" />
                  <span>Email Spec</span>
                </a>
              </div>
            </div>

            {/* Teaser link for 48h prototype / estimator */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <Link
                to="/engagement"
                onClick={() => setIsOpen(false)}
                className="text-slate-500 hover:text-brand-600 transition-colors flex items-center gap-1"
              >
                <Zap className="w-3 h-3 text-amber-500" />
                <span>48h Prototype ({prototypePrice})</span>
              </Link>
              <Link
                to="/estimator"
                onClick={() => setIsOpen(false)}
                className="font-bold text-brand-600 hover:text-brand-700 hover:underline flex items-center gap-0.5"
              >
                <span>Calculate Scope</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        /* Collapsed Floating Launcher Button */
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 py-3 px-4 rounded-full bg-slate-900 text-white shadow-2xl shadow-slate-900/30 hover:bg-brand-600 transition-all hover:scale-105 active:scale-95 border border-slate-700/80"
          aria-label="Open chat with founder"
        >
          <div className="relative">
            <MessageSquare className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400"></span>
          </div>
          <span className="text-xs font-bold tracking-tight">
            Chat with Founder
          </span>
        </button>
      )}
    </aside>
  );
};
