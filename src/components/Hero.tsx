import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Code2, Users2, Calendar } from 'lucide-react';
import { TerminalSimulation } from './TerminalSimulation';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/15 dark:bg-brand-500/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyber-cyan/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 dark:bg-brand-500/15 border border-brand-500/30 text-brand-600 dark:text-brand-300 text-xs sm:text-sm font-medium mb-6 animate-pulse-slow">
            <Sparkles className="w-4 h-4 text-cyber-cyan" />
            <span>AI-Native IT Agency • janusoft.in</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Accepting Q2/Q3 Projects</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
            Next-Gen IT Services,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-cyber-cyan to-brand-400">
              Powered by AI Velocity.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-8">
            High-performance fullstack web applications, custom LLM integrations, and robust workflow automations built in days—not quarters. Direct senior technical founder partnership with zero agency overhead.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#estimator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base text-white bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-xl shadow-brand-600/30 hover:shadow-brand-600/50 hover:-translate-y-0.5 transition-all"
            >
              <Zap className="w-5 h-5 text-amber-300" />
              <span>Calculate Project Scope</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base text-slate-800 dark:text-slate-100 glass-panel hover:bg-slate-200/50 dark:hover:bg-slate-800/80 border border-slate-300 dark:border-slate-700 transition-all hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-cyber-cyan" />
              <span>Book Strategy Call</span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>10x Accelerated Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Users2 className="w-4 h-4 text-cyber-cyan" />
              <span>Direct Founder Collaboration</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% IP & Code Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-brand-400" />
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
