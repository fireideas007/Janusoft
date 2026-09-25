import React from 'react';
import { ShieldCheck, MapPin, CheckCircle2, TrendingUp, Building, Star, Award, Zap } from 'lucide-react';

export const TrustedInIndia: React.FC = () => {
  const hubs = [
    { city: 'Bengaluru', focus: 'AI & SaaS Startups' },
    { city: 'Mumbai & GIFT City', focus: 'FinTech & Banking Integrations' },
    { city: 'Delhi NCR & Gurgaon', focus: 'Logistics & Enterprise Workflows' },
    { city: 'Pune & Ahmedabad', focus: 'Retail & Manufacturing Systems' },
    { city: 'Hyderabad', focus: 'HealthTech & Cloud APIs' },
  ];

  const clients = [
    {
      name: 'KuberFlow Payments',
      domain: 'FinTech • Mumbai',
      metric: '₹14Cr+ Volume',
      quote: 'Janusoft deployed our payment reconciliation and webhook pipeline in 6 days. Zero missed transactions during flash sales.',
      founder: 'Rajesh S., Head of Engineering',
    },
    {
      name: 'LogixExpress India',
      domain: 'Logistics • Gurgaon',
      metric: '40k+ Daily Pings',
      quote: 'Replaced our sluggish dispatch software with a real-time event-driven queue on AWS. Driver update delays dropped to near zero.',
      founder: 'Vikram Mehta, Director of Operations',
    },
    {
      name: 'ArogyaSync MedTech',
      domain: 'Healthcare • Bengaluru',
      metric: '100% Data Security',
      quote: 'Built our patient consultation portal and doctor appointment scheduler with strict role-based access. Delivered in a single sprint.',
      founder: 'Dr. Ananya P., Co-Founder',
    },
    {
      name: 'VyaparNext Retail',
      domain: 'Omnichannel Commerce • Ahmedabad',
      metric: '0.8s Load Time',
      quote: 'Migrated our slow legacy catalog into a headless Next.js storefront. Conversions jumped 28% within the first month.',
      founder: 'Chirag Patel, VP of Digital',
    },
  ];

  const metrics = [
    { value: '48h', label: 'Working Prototype SLA', desc: 'Clickable demo before full commitment' },
    { value: '99.98%', label: 'Infrastructure Uptime', desc: 'Battle-tested AWS & Cloudflare edge setups' },
    { value: '100%', label: 'IP & Code Ownership', desc: 'Direct Git handoff with zero vendor lock-in' },
    { value: 'GST Ready', label: 'Compliant Invoicing', desc: 'Hackproof Technologies India Pvt Ltd' },
  ];

  return (
    <section className="py-20 relative bg-slate-100/60 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-500/25">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Local Presence • Pan-India Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Ambitious Indian Businesses & Startups
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From GIFT City financial institutions to fast-scaling startups across Bengaluru and Delhi NCR. Delivering enterprise-grade engineering with local accountability.
          </p>
        </div>

        {/* Regional Hub Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {hubs.map((hub, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 shadow-sm text-xs text-slate-700"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
              <strong className="text-slate-900">{hub.city}:</strong>
              <span className="text-slate-500">{hub.focus}</span>
            </div>
          ))}
        </div>

        {/* Client Success Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {clients.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl glass-panel p-6 border border-slate-200/90 flex flex-col justify-between hover:shadow-lg hover:border-brand-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-slate-900 truncate">{c.name}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-brand-500/10 text-brand-700">
                    {c.metric}
                  </span>
                </div>
                <div className="text-[11px] font-medium text-brand-600 mb-3">{c.domain}</div>
                <p className="text-xs text-slate-600 leading-relaxed italic mb-4">
                  "{c.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700 truncate">{c.founder}</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proven Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
          {metrics.map((m, idx) => (
            <div key={idx} className="space-y-1 p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">
                {m.value}
              </div>
              <div className="text-xs font-bold text-slate-900">{m.label}</div>
              <div className="text-[11px] text-slate-500 leading-snug">{m.desc}</div>
            </div>
          ))}
        </div>

        {/* Legal & GST Transparency Callout */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Operated by <strong>Hackproof Technologies India Private Limited</strong>. All services billed with valid Indian GST compliance, NDA protection, and direct founder SLA guarantees.
        </div>
      </div>
    </section>
  );
};
