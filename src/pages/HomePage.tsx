import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { TrustedInIndia } from '../components/TrustedInIndia';
import { RapidPrototypeOffer } from '../components/RapidPrototypeOffer';
import { ComparisonMatrix } from '../components/ComparisonMatrix';
import { 
  Rocket, 
  Bot, 
  Layout, 
  BarChart3, 
  Workflow, 
  RefreshCw, 
  ArrowRight, 
  Sparkles, 
  Calculator, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Zap,
  CreditCard,
  Building2,
  HeartPulse,
  Truck,
  TrendingUp,
  Share2
} from 'lucide-react';

interface HomePageProps {
  onSelectService: (service: string) => void;
  onPreFillScope: (scope: string) => void;
  onSelectPlan: (plan: string) => void;
  selectedService: string;
  preFilledScope: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectService,
  onPreFillScope,
  onSelectPlan,
}) => {
  const navigate = useNavigate();

  const handleScopeSelect = (scope: string) => {
    onPreFillScope(scope);
    navigate('/contact');
  };

  const coreServices = [
    {
      title: 'Rapid Fullstack Web Apps & MVPs',
      tagline: 'Database, user auth & payment checkout in days.',
      icon: Rocket,
      iconColor: 'text-brand-600 bg-brand-500/10 border-brand-500/20',
      timeline: '4 - 7 Days',
      badge: 'Most Popular',
      desc: 'Next.js & React apps with Supabase PostgreSQL, Stripe/Razorpay billing, and responsive UI.',
    },
    {
      title: 'Custom AI Chatbots & Document Assistants',
      tagline: 'Customer support & knowledge search with Gemini / OpenAI.',
      icon: Bot,
      iconColor: 'text-cyan-600 bg-cyan-500/10 border-cyan-500/20',
      timeline: '3 - 5 Days',
      badge: 'High Demand',
      desc: 'Smart chatbots trained on your company FAQs, PDFs, and website data with zero hallucinations.',
    },
    {
      title: 'High-Converting Landing Pages & Websites',
      tagline: 'Sub-second load times designed to turn clicks into clients.',
      icon: Layout,
      iconColor: 'text-indigo-600 bg-indigo-500/10 border-indigo-500/20',
      timeline: '2 - 4 Days',
      badge: 'Fast Turnaround',
      desc: 'Tailwind CSS & Next.js marketing sites with 95+ Google Lighthouse scores and direct WhatsApp alerts.',
    },
    {
      title: 'Internal Admin Dashboards & CRM Portals',
      tagline: 'Clean portals to manage users, orders & business metrics.',
      icon: BarChart3,
      iconColor: 'text-amber-600 bg-amber-500/10 border-amber-500/20',
      timeline: '3 - 6 Days',
      badge: 'Operational ROI',
      desc: 'Interactive tables, instant filtering, CRUD data management, and one-click CSV export.',
    },
    {
      title: 'Workflow Automations & Webhooks',
      tagline: 'Connect apps & eliminate manual data entry.',
      icon: Workflow,
      iconColor: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20',
      timeline: '2 - 4 Days',
      badge: 'Save 20+ Hours',
      desc: 'Automate webhooks for Stripe, WhatsApp notifications, Google Sheets, and CRM synchronization.',
    },
    {
      title: 'Website Redesign & Modernization',
      tagline: 'Upgrade dated WordPress sites into high-speed modern apps.',
      icon: RefreshCw,
      iconColor: 'text-violet-600 bg-violet-500/10 border-violet-500/20',
      timeline: '3 - 5 Days',
      badge: 'Fresh Upgrade',
      desc: 'Transform slow, clunky sites into sleek, mobile-optimized Next.js web applications.',
    },
    {
      title: 'Performance Marketing & Paid Ad Funnels',
      tagline: 'Meta (FB/IG) & Google Ads funnels to acquire paying clients.',
      icon: TrendingUp,
      iconColor: 'text-rose-600 bg-rose-500/10 border-rose-500/20',
      timeline: '3 - 5 Days Setup',
      badge: 'High ROI',
      desc: 'High-converting ad copy, visual creatives, Meta Pixel & CAPI tracking, and dedicated lead capture funnels.',
    },
    {
      title: 'Social Media Management & Growth',
      tagline: 'Build authority & inbound deal flow on LinkedIn & X/Twitter.',
      icon: Share2,
      iconColor: 'text-pink-600 bg-pink-500/10 border-pink-500/20',
      timeline: 'Monthly / Ongoing',
      badge: 'Brand Authority',
      desc: 'Content calendars, custom carousel slide designs, viral hook writing, and scheduled multi-channel distribution.',
    },
  ];

  const industryHighlights = [
    { name: 'FinTech & Payments', icon: CreditCard, benefit: 'Stripe & Razorpay auto-billing, webhook idempotency, secure checkout' },
    { name: 'B2B SaaS & Portals', icon: Building2, benefit: 'Multi-tenant auth, user roles, billing tiers, responsive dashboards' },
    { name: 'Healthcare & Clinics', icon: HeartPulse, benefit: 'Doctor booking engine, encrypted intake forms, WhatsApp alerts' },
    { name: 'Logistics & Dispatch', icon: Truck, benefit: 'Order status endpoints, live driver dispatch alerts, inventory sync' },
  ];

  return (
    <div className="space-y-4">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trusted by Clients Across India */}
      <TrustedInIndia />

      {/* 3. 48-Hour Rapid Prototype Pilot Banner */}
      <RapidPrototypeOffer onSelectOffer={handleScopeSelect} />

      {/* 4. Dynamic Services Portal Preview */}
      <section className="py-20 relative bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-700 text-xs font-semibold mb-3 border border-brand-500/20">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                <span>Dedicated Practice Areas</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Focused IT Services, Delivered in Days
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
                We specialize in 6 core engineering offerings powered by frontier AI developer velocity.
              </p>
            </div>
            <Link
              to="/services"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-200 transition-all self-start md:self-auto"
            >
              <span>Explore All Services & Deliverables</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl glass-panel border border-slate-200/90 p-6 flex flex-col justify-between hover:border-brand-500/40 hover:shadow-lg transition-all group bg-white"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className={`p-3 rounded-xl border ${service.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-brand-500/10 text-brand-700 border border-brand-500/30">
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-600 mt-1 mb-2">
                      {service.tagline}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-600" />
                      <span>Sprint: <strong className="text-slate-800">{service.timeline}</strong></span>
                    </span>
                    <Link
                      to="/services"
                      className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Dynamic Industry Solutions Portal Preview */}
      <section className="py-20 relative bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-800 text-xs font-semibold mb-3 border border-cyan-500/25">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                <span>Industry Blueprints</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Tailored Solutions for Modern Sectors
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
                Ready-to-deploy architectural patterns configured for high-growth Indian and global businesses.
              </p>
            </div>
            <Link
              to="/solutions"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-cyan-800 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 transition-all self-start md:self-auto"
            >
              <span>View All Industry Blueprints</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryHighlights.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-cyan-500/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-700 border border-cyan-500/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-slate-900 mb-2">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ind.benefit}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100">
                    <Link
                      to="/solutions"
                      className="text-xs font-semibold text-cyan-700 hover:text-cyan-900 flex items-center gap-1"
                    >
                      <span>Explore Stack</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Dynamic Estimator & Engagement Callout */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Estimator Teaser */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-600 to-indigo-700 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur border border-white/20">
                  <Calculator className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Transparent Estimation</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                  Calculate Your Project Timeline & Cost in Seconds
                </h3>
                <p className="text-brand-100 text-xs sm:text-sm leading-relaxed">
                  Configure deliverables, choose optional modules, select currency (USD or INR), and get an instant transparent ballpark estimate.
                </p>
              </div>

              <div className="mt-8 relative z-10">
                <Link
                  to="/estimator"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white text-brand-700 hover:bg-brand-50 shadow-md transition-all"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Launch Interactive Calculator</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Engagement Models Teaser */}
            <div className="p-8 rounded-3xl glass-panel border border-slate-200 shadow-sm flex flex-col justify-between bg-white">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-semibold border border-emerald-500/20">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Partnership Models</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Flexible Engagement: 48h Pilot to Monthly Retainer
                </h3>
                <div className="space-y-2.5 text-xs text-slate-600 pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span><strong>48h POC Pilot ($390):</strong> Clickable working prototype in 48 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span><strong>Fixed Milestone Sprints:</strong> Fixed price, guaranteed timeline, zero surprises</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span><strong>Dedicated AI Retainer:</strong> On-demand senior engineering pod</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/engagement"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white shadow-md transition-all"
                >
                  <span>Compare Engagement Models</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Comparison Matrix */}
      <ComparisonMatrix />

      {/* 8. Bottom Kickoff CTA Banner */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 p-8 sm:p-14 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="space-y-4 max-w-2xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Kickstart Your Build Today</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Ready to Launch in Days, Not Quarters?
              </h2>
              <p className="text-sm sm:text-base text-brand-100 leading-relaxed">
                Connect directly with the founder for a technical spec assessment and fixed milestone quote within 12 hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-sm sm:text-base text-brand-700 bg-white hover:bg-brand-50 shadow-xl transition-all hover:scale-[1.02]"
                >
                  <span>Contact Founder</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/estimator"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur transition-all"
                >
                  <Calculator className="w-4 h-4 text-cyan-300" />
                  <span>Instant Scope Estimator</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
