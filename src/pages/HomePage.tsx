import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { 
  Rocket, 
  Bot, 
  Layout, 
  BarChart3, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Zap,
  TrendingUp,
  Share2,
  MessageSquare,
  ShieldCheck,
  Star,
  Building2,
  Send,
  Phone
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

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
}) => {
  const navigate = useNavigate();
  const { currency, prototypePrice } = useCurrency();

  // Instant booking form state
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [selectedServicePill, setSelectedServicePill] = useState('Web App & MVP Development');
  const [leadNotes, setLeadNotes] = useState('');

  const services = [
    {
      id: 'web-mvp',
      title: 'Web App & MVP Development',
      tagline: 'Modern. Fast. Responsive. Built to convert.',
      desc: 'Fullstack Next.js & React apps with Supabase PostgreSQL, Stripe/Razorpay billing, and responsive modern UI.',
      inrPrice: 'From ₹29,990',
      usdPrice: 'From $390',
      delivery: '⚡ 72h - 5 Days',
      badge: 'Most Popular',
      icon: Rocket,
      accent: 'text-brand-600 bg-brand-500/10 border-brand-500/20'
    },
    {
      id: 'performance-marketing',
      title: 'Performance Marketing & Paid Ads',
      tagline: 'Targeted funnels to maximize ROAS & leads.',
      desc: 'High-converting ad copy, visual creatives, Meta Pixel & CAPI tracking, and dedicated lead capture funnels.',
      inrPrice: 'From ₹14,990 / mo',
      usdPrice: 'From $199 / mo',
      delivery: '⚡ Performance Driven',
      badge: 'High ROAS',
      icon: TrendingUp,
      accent: 'text-rose-600 bg-rose-500/10 border-rose-500/20'
    },
    {
      id: 'social-media',
      title: 'Social Media & Content Engine',
      tagline: 'Content, strategy & growth for real brand authority.',
      desc: 'High-engagement LinkedIn & X/Twitter content engine, custom slide carousels, viral hooks, and scheduled distribution.',
      inrPrice: 'From ₹9,990 / mo',
      usdPrice: 'From $149 / mo',
      delivery: '⚡ 24-48h Turnaround',
      badge: 'Brand Growth',
      icon: Share2,
      accent: 'text-pink-600 bg-pink-500/10 border-pink-500/20'
    },
    {
      id: 'ai-bots',
      title: 'AI Chatbots & Intelligent Agents',
      tagline: 'Customer support & knowledge assistants.',
      desc: 'Smart chatbots trained on company FAQs, PDFs, and website data with Gemini 2.0 & OpenAI API integrations.',
      inrPrice: 'From ₹19,990',
      usdPrice: 'From $249',
      delivery: '⚡ 3 - 4 Days',
      badge: 'AI Powered',
      icon: Bot,
      accent: 'text-cyan-600 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      id: 'landing-pages',
      title: 'High-Converting Landing Pages',
      tagline: 'Sub-second speed designed to turn clicks into sales.',
      desc: 'Clean, modern Next.js landing pages with 98+ Google Lighthouse speed, mobile optimization, and WhatsApp lead capture.',
      inrPrice: 'From ₹9,990',
      usdPrice: 'From $129',
      delivery: '⚡ 48 Hours',
      badge: 'Fast Launch',
      icon: Layout,
      accent: 'text-indigo-600 bg-indigo-500/10 border-indigo-500/20'
    },
    {
      id: 'internal-tools',
      title: 'Internal Dashboards & Automations',
      tagline: 'Eliminate repetitive manual ops & spreadsheets.',
      desc: 'Custom CRUD admin portals, role-based access, automated webhook pipelines, and business database management.',
      inrPrice: 'From ₹34,990',
      usdPrice: 'From $450',
      delivery: '⚡ 5 - 7 Days',
      badge: 'Operational ROI',
      icon: BarChart3,
      accent: 'text-amber-600 bg-amber-500/10 border-amber-500/20'
    },
  ];

  const showcaseProjects = [
    {
      title: 'Hospee Telemedicine & Clinic Portal',
      category: 'HealthTech Platform',
      outcome: 'Doctor scheduling & Razorpay payment engine deployed in 5 days.',
      stack: 'Next.js • Supabase • Razorpay • WhatsApp Alerts',
      tag: 'Live at hospee.in'
    },
    {
      title: 'KuberFlow Payment Webhooks',
      category: 'FinTech Integration',
      outcome: 'Processed ₹14Cr+ transaction volume with zero dropped webhooks.',
      stack: 'AWS Lambda • Next.js • PostgreSQL • Stripe & Razorpay',
      tag: 'FinTech Enterprise'
    },
    {
      title: 'Luxury Stay Vacation Engine',
      category: 'Hospitality & Real Estate',
      outcome: 'Direct guest booking platform boosting direct reservations by 34%.',
      stack: 'Next.js • Tailwind • Cloudflare Edge • Instant Booking',
      tag: 'Hospitality Web App'
    },
    {
      title: 'ScalePilot Performance Ad Funnel',
      category: 'Paid Acquisition & CRO',
      outcome: 'Meta and Google search ad funnels scaling client ROAS to 4.2x.',
      stack: 'Meta Ads • CAPI • High-Speed Funnel • Lead CRM',
      tag: '4.2x ROAS'
    }
  ];

  const stats = [
    { value: '72 Hrs', label: 'Average MVP Turnaround', desc: 'Working interactive prototype in 3 days' },
    { value: '4.2x', label: 'Average Ad ROAS', desc: 'Measured on client paid campaigns' },
    { value: '99.4%', label: 'On-Time Delivery', desc: 'Guaranteed milestone delivery' },
    { value: '< 15 Mins', label: 'WhatsApp Response', desc: 'Direct technical founder communication' },
  ];

  const testimonials = [
    {
      quote: "Their performance ad funnels and landing page scaled our lead volume by 4.2x within 3 weeks. Fast, sharp, and zero back-and-forth.",
      name: "Vikram S.",
      role: "B2B SaaS Founder",
      city: "Bengaluru"
    },
    {
      quote: "Working with Janusoft feels like having an in-house senior tech team — only 10x faster and without the typical agency overhead.",
      name: "Dr. Ananya P.",
      role: "Clinic Network Director",
      city: "Mumbai"
    },
    {
      quote: "One WhatsApp message and the entire Next.js MVP was live in 4 days with Razorpay payments working. Outstanding execution.",
      name: "Rahul M.",
      role: "D2C Brand Founder",
      city: "Gurgaon"
    }
  ];

  const handleBookService = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    const msg = `Hi Janusoft! I'm interested in "${serviceTitle}". Let's discuss requirements and delivery timeline.`;
    const url = `https://wa.me/918918254625?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleSendLeadOnWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Janusoft! My name is ${leadName || 'a client'}. I need help with "${selectedServicePill}". Phone/WhatsApp: ${leadPhone || 'Not provided'}. Notes: ${leadNotes || 'Ready to discuss scope.'}`;
    const url = `https://wa.me/918918254625?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Punchy Uncluttered Hero */}
      <Hero />

      {/* 2. Client Trust Strip (Clean & Uncluttered) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Trusted Local & Global Presence</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Active Client Hubs Across India & Worldwide
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-slate-700">
            <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">📍 Bengaluru</span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">📍 Mumbai & GIFT City</span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">📍 Delhi NCR</span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">📍 Ahmedabad</span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">🌍 USA & Global</span>
          </div>
        </div>
      </section>

      {/* 3. Services Grid (TeamUp Inspired Layout) */}
      <section id="services" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-700 text-xs font-semibold mb-3 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Fast & Polished Execution</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            What We Build Fast
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            High-converting digital products, paid acquisition funnels, and generative AI automations delivered in hours and days, not weeks.
          </p>
        </div>

        {/* 6 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            const price = currency === 'INR' ? s.inrPrice : s.usdPrice;

            return (
              <div
                key={s.id}
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-brand-500/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`p-3.5 rounded-2xl border ${s.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-600 mb-3">
                    {s.tagline}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg">
                      {price}
                    </span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{s.delivery}</span>
                    </span>
                  </div>

                  <button
                    onClick={() => handleBookService(s.title)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-emerald-600 transition-colors shadow-sm group-hover:shadow-md"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Book on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Numbers We're Obsessed With (TeamUp Style) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest font-semibold">
              Performance & Velocity
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
              Numbers We're Obsessed With
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              PAN India & global execution in just a few days — speed, polish and outcomes measured every sprint.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 text-center">
            {stats.map((st, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-400 mb-2">
                  {st.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mb-1">
                  {st.label}
                </div>
                <div className="text-[11px] text-slate-400">
                  {st.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Showcase / Recent Launches */}
      <section id="work" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-800 text-xs font-semibold mb-3 border border-cyan-500/25">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span>Production Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Selected Recent Work
            </h2>
            <p className="mt-2 text-slate-600 text-sm max-w-xl">
              Real applications and ad engines built and scaled for founders.
            </p>
          </div>

          <Link
            to="/solutions"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-brand-600 hover:text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-200 transition-all self-start sm:self-auto"
          >
            <span>View All Blueprints</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showcaseProjects.map((p, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-600">
                    {p.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {p.outcome}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>{p.stack}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Loved by Founders & Teams (Testimonials) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-800 text-xs font-semibold mb-3 border border-amber-500/20">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Verified Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved by Founders & Teams
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Real words from real partners we've shipped and scaled with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-slate-500 text-[11px]">{t.role}</div>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">📍 {t.city}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. "Tell Us What You Need" Instant WhatsApp Form (TeamUp Style) */}
      <section id="book" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3 border border-emerald-200">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Instant WhatsApp Scoping</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tell Us What You Need
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm">
              Fill the form below — we'll reply on WhatsApp within minutes.
            </p>
          </div>

          <form onSubmit={handleSendLeadOnWhatsApp} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aditya Sharma"
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={leadPhone}
                  onChange={(e) => setLeadPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Service Interested In
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {services.map((s) => (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => setSelectedServicePill(s.title)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold text-center transition-all ${
                      selectedServicePill === s.title
                        ? 'bg-slate-900 text-white shadow-sm font-bold'
                        : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Project Notes / Target Timeline (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe what you want to build or your target goal..."
                value={leadNotes}
                onChange={(e) => setLeadNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl font-bold text-sm sm:text-base text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-2 hover:scale-[1.01]"
            >
              <MessageSquare className="w-5 h-5 fill-white/20" />
              <span>Send Inquiry on WhatsApp (Instant Reply)</span>
              <Send className="w-4 h-4 ml-1" />
            </button>

            <div className="flex items-center justify-center gap-4 text-xs text-slate-400 text-center">
              <span>🔒 100% Private & Direct with Founder</span>
              <span>•</span>
              <span>⚡ Average Reply: &lt;15 Mins</span>
            </div>
          </form>
        </div>
      </section>

      {/* 8. Ready to Grow Banner (Clean Closing CTA) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest font-semibold">
              Kickoff Your Project Today
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Ready To Grow With Janusoft?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              One conversation. A clear plan. A team that ships beautiful work, fast. 72-hour prototypes starting at {prototypePrice}.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/918918254625?text=Hi%20Janusoft!%20I'm%20ready%20to%20discuss%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                to="/estimator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur transition-all"
              >
                <span>Calculate Scope & Cost</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-4 text-xs text-slate-400">
              Direct Phone: <a href="tel:+918918254625" className="text-cyan-400 hover:underline font-mono">+91 89182 54625</a> • Legal Entity: Hackproof Technologies India Private Limited
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
