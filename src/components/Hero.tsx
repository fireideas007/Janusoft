import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Code2, Users2, Calendar, Clock } from 'lucide-react';
import { TerminalSimulation } from './TerminalSimulation';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden w-full">
      {/* Background radial glow - strictly contained to avoid mobile gutter */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-brand-600/15 blur-[80px] sm:blur-[130px] rounded-full" />
        <div className="absolute top-1/3 -right-20 sm:right-10 w-[240px] sm:w-[400px] h-[240px] sm:h-[400px] bg-cyan-500/10 blur-[70px] sm:blur-[110px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <Zap className="w-4 h-4 text-brand-600 fill-brand-600" />
            <span>Zero-Risk Entry: 48-Hour Working Prototype ($390 • 100% Refundable)</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Next-Gen IT Services,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-cyan-600 to-indigo-600">
              Powered by AI Velocity.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8">
            High-performance fullstack web applications, custom LLM integrations, and cloud architectures built in days—not quarters. Direct senior technical founder partnership with zero agency bloat.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#prototype-offer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-xl shadow-brand-600/30 hover:shadow-brand-600/50 hover:-translate-y-0.5 transition-all"
            >
              <Zap className="w-5 h-5 text-amber-300" />
              <span>Claim 48h Prototype ($390)</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#estimator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm sm:text-base text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all hover:-translate-y-0.5"
            >
              <Clock className="w-4 h-4 text-brand-600" />
              <span>Calculate Scope & Cost</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-semibold text-sm sm:text-base text-slate-600 hover:text-slate-900 transition-all"
            >
              <Calendar className="w-4 h-4 text-cyan-600" />
              <span>Book Strategy Call</span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>10x Accelerated Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Users2 className="w-4 h-4 text-cyan-600" />
              <span>Direct Founder Lead</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>100% IP & Code Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-brand-600" />
              <span>Production-Grade Architecture</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Terminal Preview */}
        <div className="mt-6">
          <TerminalSimulation />
        </div>
      </div>
    </section>
  );
};
