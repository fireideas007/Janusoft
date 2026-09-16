import React from 'react';
import { Compass, Cpu, ShieldCheck, Rocket, Sparkles, CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Architectural Blueprint & Spec',
      subtitle: 'Day 1 — Clarity First',
      description:
        'We turn your vision into an ironclad technical specification: database schemas, API contracts, security requirements, and UI wireframes. No ambiguity.',
      icon: Compass,
      highlights: ['Interactive architecture diagram', 'Milestone & timeline agreement', 'Fixed pricing sign-off'],
    },
    {
      step: '02',
      title: 'AI-Accelerated Core Sprint',
      subtitle: 'Days 2–5 — 10x Velocity',
      description:
        'Using Antigravity and Cursor coupled with frontier models (Gemini 2.0, GPT-4o, Grok), we write clean, type-safe fullstack code at unprecedented velocity.',
      icon: Cpu,
      highlights: ['Daily async video/loom updates', 'Staging environment preview links', 'Clean modular code structure'],
    },
    {
      step: '03',
      title: 'Hardening, QA & Security Audit',
      subtitle: 'Days 6–7 — Zero Compromises',
      description:
        'Fast does not mean careless. Every line of code passes strict linting, automated end-to-end testing, OWASP security checks, and mobile responsiveness validation.',
      icon: ShieldCheck,
      highlights: ['Automated test suite (Jest/Vitest)', 'Security & vulnerability review', 'Lighthouse 95+ score tuning'],
    },
    {
      step: '04',
      title: 'Production Deploy & Code Handoff',
      subtitle: 'Launch Day — You Own Everything',
      description:
        'We push your build to production cloud infrastructure (Vercel, AWS, Cloudflare), set up monitoring, and transfer 100% repository IP rights directly to you.',
      icon: Rocket,
      highlights: ['Domain & SSL configuration', '14-day warranty for peace of mind', 'Comprehensive handover docs'],
    },
  ];

  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-300 text-xs font-semibold mb-3 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyber-cyan" />
            The AI-Native Playbook
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How We Deliver Enterprise Quality in Days
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            A battle-tested 4-phase engineering pipeline designed specifically for high-velocity software delivery.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl glass-panel p-7 border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between hover:border-brand-500/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Step indicator header */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-black text-slate-300 dark:text-slate-700 group-hover:text-brand-500 transition-colors">
                      {item.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-brand-600 dark:text-cyber-cyan group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-cyber-cyan tracking-wide uppercase">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/60 space-y-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
