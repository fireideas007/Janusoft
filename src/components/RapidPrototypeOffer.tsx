import React, { useState } from 'react';
import { Zap, Clock, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, MessageSquare, Terminal, FileCode2 } from 'lucide-react';

interface RapidPrototypeOfferProps {
  onSelectOffer: (details: string) => void;
}

export const RapidPrototypeOffer: React.FC<RapidPrototypeOfferProps> = ({ onSelectOffer }) => {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  const priceText = currency === 'USD' ? '$390' : '₹29,990';
  const usdEquiv = currency === 'USD' ? '$390' : '₹29,990';

  const handleClaim = () => {
    onSelectOffer(`48-Hour Working Prototype Sprint (${priceText}). Please reserve a slot and send kickoff requirements.`);
  };

  return (
    <section id="prototype-offer" className="py-20 relative overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-slate-50 border-y border-brand-500/20">
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl glass-panel border-2 border-brand-500/30 p-8 sm:p-12 shadow-2xl shadow-brand-500/10 relative">
          {/* Top urgency pill */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-600 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-brand-600/25">
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>Instant Buy • Low Risk Pilot</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>2 of 3 Prototype Slots Available This Week</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left pitch */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Don't Buy PowerPoints.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-cyan-600 to-indigo-600">
                  Get a Working Interactive Prototype in 48 Hours.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Tired of traditional IT agencies requiring 4 weeks of discovery meetings and $30k commitments just to see a wireframe? We build an actual, clickable prototype with working UI, real database schema, and live preview URL in 48 hours.
              </p>

              {/* 3 Irresistible Guarantees */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                  <div className="p-1 rounded bg-emerald-500/10 text-emerald-600 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong>100% Investment Credited:</strong> The entire {priceText} fee is credited towards your full project build if you decide to proceed.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                  <div className="p-1 rounded bg-brand-500/10 text-brand-600 mt-0.5 flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong>Zero Risk Guarantee:</strong> If you are not 100% blown away by the speed and architecture, get an immediate, no-questions-asked refund.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                  <div className="p-1 rounded bg-indigo-500/10 text-indigo-600 mt-0.5 flex-shrink-0">
                    <FileCode2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong>100% Code & Spec Ownership:</strong> You keep the complete source code, database architecture, and technical milestone SOW regardless of your next steps.
                  </div>
                </div>
              </div>
            </div>

            {/* Right card CTA */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xl space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Pilot Sprint Package
                  </span>
                  {/* Currency selector */}
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-[11px] font-mono">
                    <button
                      onClick={() => setCurrency('USD')}
                      className={`px-2 py-0.5 rounded transition-all ${
                        currency === 'USD' ? 'bg-brand-600 text-white font-bold' : 'text-slate-600'
                      }`}
                    >
                      USD
                    </button>
                    <button
                      onClick={() => setCurrency('INR')}
                      className={`px-2 py-0.5 rounded transition-all ${
                        currency === 'INR' ? 'bg-brand-600 text-white font-bold' : 'text-slate-600'
                      }`}
                    >
                      INR (₹)
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                      {priceText}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/ flat fixed fee</span>
                  </div>
                  <p className="text-xs text-brand-600 font-semibold mt-1">
                    Delivered in 48 Hours • 100% Refundable
                  </p>
                </div>

                <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
                    <span>Guaranteed 48-Hour delivery SLA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                    <span>Working Next.js / React interactive preview</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    <span>PostgreSQL schema & API contract blueprint</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>30-min strategy & sprint scoping session with founder</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={handleClaim}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 hover:-translate-y-0.5 active:scale-[0.98] transition-all"
                  >
                    <span>Claim 48-Hour Prototype ({priceText})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/919999999999?text=Hi%20Janusoft%20team,%20I%20want%20to%20claim%20a%2048-Hour%20Working%20Prototype%20Sprint."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Discuss Prototype on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
