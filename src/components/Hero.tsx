import React from 'react';
import { ArrowRight, Zap, Rocket, MessageSquare, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCurrency } from '../context/CurrencyContext';

export const Hero: React.FC = () => {
  const { prototypePrice } = useCurrency();
  const whatsappUrl = "https://wa.me/918918254625?text=" + encodeURIComponent("Hi Janusoft! I'm looking to build a project fast. Can we discuss scope and timeline?");

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden w-full">
      {/* Subtle soft backdrop ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-brand-500/10 blur-[100px] sm:blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-cyan-500/10 blur-[90px] sm:blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow badge inspired by TeamUp */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold mb-6 shadow-sm hover:bg-slate-800 transition-colors">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>⚡ India's Fastest Digital & AI Execution Studio</span>
          <span className="text-slate-400">•</span>
          <span className="text-emerald-400 font-mono">Prototype from {prototypePrice}</span>
        </div>

        {/* Big Bold Punchy Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
          Need Work Done Fast?{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-cyan-600 to-indigo-600">
            Janusoft Now.
          </span>
        </h1>

        {/* Crisp Uncluttered Subtitle */}
        <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Custom web apps, AI MVPs, performance marketing, and social media engines delivered in days, not months. One WhatsApp message and it's done.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-sm sm:text-base text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all"
          >
            <MessageSquare className="w-5 h-5 fill-white/20" />
            <span>Book on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm sm:text-base text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>

        {/* Clean Trust Strip */}
        <div className="pt-6 border-t border-slate-200/60 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>72-Hour Rapid Prototypes</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Direct WhatsApp Updates</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-600" />
            <span>100% Code & IP Ownership</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <span>GST Invoicing Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};
