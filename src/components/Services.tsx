import React, { useState } from 'react';
import { 
  Rocket, 
  Bot, 
  Layout, 
  BarChart3, 
  Workflow, 
  RefreshCw, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  FileCheck2,
  Code2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Share2
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-mvp',
    category: 'web-apps',
    title: 'Rapid Fullstack Web Apps & MVPs',
    tagline: 'From idea to live production software with database, auth & payments in days.',
    description: 'We build complete web applications with modern authentication, PostgreSQL databases, user dashboards, and Stripe/Razorpay payment processing. Clean, modular code that you 100% own.',
    iconName: 'Rocket',
    deliverables: [
      'Production-ready Next.js / React application with clean architecture',
      'PostgreSQL / Supabase database with secure user authentication',
      'Stripe or Razorpay payment checkout & subscription billing',
      'Mobile-responsive UI crafted with Tailwind CSS',
      'Live deployment on Vercel / Cloudflare with full Git source handoff',
    ],
    techStack: ['Next.js', 'React', 'Supabase', 'Tailwind CSS', 'Stripe / Razorpay'],
    timeline: '4 to 7 Days',
    badge: 'Most Requested',
  },
  {
    id: 'ai-chatbots',
    category: 'ai-bots',
    title: 'Custom AI Chatbots & Document Assistants',
    tagline: 'Intelligent customer support & internal document search powered by frontier AI.',
    description: 'Empower your customers or team with an AI bot trained on your specific business knowledge, documents, and FAQs. Integrated with Gemini 2.0 or OpenAI with strict prompt guardrails so it never hallucinates.',
    iconName: 'Bot',
    deliverables: [
      'Custom AI chatbot trained on your company FAQs, PDFs, and website data',
      'Fast streaming conversational UI with suggested prompts & citations',
      'Integration with Gemini 2.0 or OpenAI API with strict answer guardrails',
      'Embeddable chat widget for your website or dedicated internal portal',
      'Admin dashboard to view user conversations and update knowledge files',
    ],
    techStack: ['Gemini 2.0', 'OpenAI', 'Supabase pgvector', 'Next.js', 'Tailwind'],
    timeline: '3 to 5 Days',
    badge: 'High Demand',
  },
  {
    id: 'landing-pages',
    category: 'websites',
    title: 'High-Converting Landing Pages & Websites',
    tagline: 'Sleek, blazing-fast marketing websites designed to convert visitors into clients.',
    description: 'Ditch bloated WordPress page builders. We build ultra-clean, mobile-first marketing pages that load in under 1 second, showcase your product with crisp design, and connect directly to your lead channels.',
    iconName: 'Layout',
    deliverables: [
      'High-converting layout with sleek typography and smooth micro-interactions',
      'Lead intake contact forms hooked to direct Email and WhatsApp alerts',
      'Sub-second load times achieving 95+ Google Lighthouse scores',
      'Full mobile responsiveness optimized for phones, tablets & desktops',
      'SEO meta tags, OpenGraph social preview cards & analytics integration',
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'SEO Optimized'],
    timeline: '2 to 4 Days',
    badge: 'Quick Turnaround',
  },
  {
    id: 'admin-dashboards',
    category: 'dashboards',
    title: 'Internal Tools & Custom Admin Dashboards',
    tagline: 'Clean, intuitive dashboards to manage your users, data, orders & metrics.',
    description: 'Stop wrestling with messy spreadsheets. We build tailored internal portals and admin panels to let your team view data, manage users, update records, and inspect analytics with secure role-based access.',
    iconName: 'BarChart3',
    deliverables: [
      'Interactive data tables with instant search, filtering, and pagination',
      'Safe CRUD workflows to view, create, edit, and delete records',
      'Summary metric cards and visual charts for revenue, orders, and users',
      'Role-based login access (Admin vs Team Member) using Supabase Auth',
      'One-click CSV/Excel export for reporting and analysis',
    ],
    techStack: ['Next.js', 'Supabase', 'Tailwind CSS', 'Recharts', 'PostgreSQL'],
    timeline: '3 to 6 Days',
    badge: 'Operational ROI',
  },
  {
    id: 'api-automations',
    category: 'automations',
    title: 'Workflow Automations & API Integrations',
    tagline: 'Connect your business tools and eliminate repetitive manual data entry.',
    description: 'We connect your disjointed apps with reliable webhook scripts and background automations. From sending instant WhatsApp updates on new orders to syncing customer data between web forms and your CRM.',
    iconName: 'Workflow',
    deliverables: [
      'Automated webhook receivers for Stripe, Razorpay, Shopify & web forms',
      'Real-time alert dispatching to WhatsApp, Slack, or Email',
      'Bidirectional data synchronization with Google Sheets, Airtable, or CRM',
      'Automated customer onboarding & email confirmation sequences',
      'Resilient error-handling logic that never drops a lead or transaction',
    ],
    techStack: ['Python', 'Node.js', 'Webhooks', 'Resend', 'WhatsApp API'],
    timeline: '2 to 4 Days',
    badge: 'Save 20+ Hours',
  },
  {
    id: 'redesign-modernize',
    category: 'websites',
    title: 'Website Redesign & Frontend Rebuild',
    tagline: 'Transform outdated, sluggish websites into modern, high-speed web apps.',
    description: 'Give your online presence an immediate upgrade. We take your dated website and rebuild it with a modern aesthetic, responsive design, and cutting-edge tech that makes your company look established and credible.',
    iconName: 'RefreshCw',
    deliverables: [
      'Complete aesthetic redesign with contemporary design standards',
      'Flawless responsive behavior on iPhones, Androids, iPads & desktops',
      'Migration from slow legacy builders to clean, maintainable Next.js/React',
      'Preserving all existing URL structures so you do not lose Google rankings',
      'Fast hosting configuration with automatic SSL and zero server maintenance',
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    timeline: '3 to 5 Days',
    badge: 'Fresh Upgrade',
  },
  {
    id: 'performance-marketing',
    category: 'marketing',
    title: 'Performance Marketing & Paid Ad Campaigns',
    tagline: 'High-ROI Meta (FB/IG) & Google Ads funnels configured to acquire paying customers.',
    description: 'We build and execute laser-targeted paid acquisition campaigns. From Meta Pixel & Google Tag Manager tracking setups to high-converting ad copy, visual creative design, and automated lead capture funnels.',
    iconName: 'TrendingUp',
    deliverables: [
      'Complete Meta (Facebook/Instagram) & Google Ads campaign setup & audience targeting',
      'Pixel tracking, Google Tag Manager & Conversions API (CAPI) integration',
      'High-converting ad copy variations & visual creative graphics crafted for conversions',
      'Dedicated landing page opt-in & lead qualification funnel optimization',
      'Transparent weekly ROI analytics dashboard tracking CAC, ROAS & CPL',
    ],
    techStack: ['Meta Ads', 'Google Ads', 'GA4', 'Conversions API', 'Canva / Figma'],
    timeline: '3 to 5 Days Setup',
    badge: 'Growth Engine',
  },
  {
    id: 'social-media-growth',
    category: 'marketing',
    title: 'Social Media Management & Organic Growth',
    tagline: 'Consistent authority-building content across LinkedIn, X/Twitter & Instagram.',
    description: 'Grow brand credibility and warm inbound deal flow with structured social media management. We handle monthly content calendars, visually sharp carousel slides, hook writing, and organic distribution.',
    iconName: 'Share2',
    deliverables: [
      'Monthly multi-channel content calendar tailored to your industry & niche',
      'Engaging carousel slides, infographics & punchy visual post designs',
      'Viral hook writing & thought leadership copy for LinkedIn & X/Twitter',
      'Automated multi-platform scheduling & hashtag optimization',
      'Monthly audience growth, impressions & engagement report',
    ],
    techStack: ['LinkedIn Growth', 'X / Twitter', 'Instagram', 'Canva / AI Graphics', 'Buffer / Notion'],
    timeline: 'Monthly / Ongoing',
    badge: 'Brand Authority',
  },
];

type ServiceCategory = 'all' | 'web-apps' | 'ai-bots' | 'websites' | 'dashboards' | 'automations' | 'marketing';

const CATEGORIES: { id: ServiceCategory; label: string }[] = [
  { id: 'all', label: 'All Services' },
  { id: 'web-apps', label: 'Web Apps & MVPs' },
  { id: 'ai-bots', label: 'Custom AI Chatbots' },
  { id: 'websites', label: 'Websites & Landing Pages' },
  { id: 'dashboards', label: 'Admin Dashboards' },
  { id: 'automations', label: 'API Automations' },
  { id: 'marketing', label: 'Social & Performance Marketing' },
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-brand-600" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-cyan-600" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-indigo-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-amber-600" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-emerald-600" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-violet-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-rose-600" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-pink-600" />;
      default:
        return <Zap className="w-6 h-6 text-brand-600" />;
    }
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-700 text-xs font-semibold mb-3 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>AI-Accelerated Engineering • What We Build</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Focused IT Services, Delivered in Days
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            No bloated 10-person agency overhead. We specialize in building modern fullstack web apps, custom AI chatbots, and sleek dashboards powered by frontier AI velocity.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const count = cat.id === 'all' 
              ? SERVICES_DATA.length 
              : SERVICES_DATA.filter((s) => s.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25 font-semibold scale-[1.02]'
                    : 'bg-white/80 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200/80 shadow-sm'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[11px] px-1.5 py-0.5 rounded-full font-mono ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-200/70 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-2xl glass-panel border border-slate-200/90 p-7 hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-slate-100/90 border border-slate-200/80 group-hover:scale-105 transition-transform shadow-sm">
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-brand-500/10 text-brand-700 border border-brand-500/30">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-brand-600 mt-1 mb-3">
                  {service.tagline}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-200/80">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5 text-brand-600" />
                    <span>Included in This Sprint:</span>
                  </div>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer info: Tech stack, Timeline, Action */}
              <div className="pt-5 border-t border-slate-200/80">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 text-slate-700 border border-slate-200/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-brand-600" />
                    <span>Sprint: <strong className="text-slate-800">{service.timeline}</strong></span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    <span>Request Sprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vibe Coding / AI-Native Delivery Assurance Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl glass-panel border border-brand-500/20 shadow-lg shadow-brand-500/5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-slate-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>100% Code & IP Ownership</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Full Git repository transfer with clean code. No proprietary locks or recurring agency fees.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-slate-900 text-sm">
                <ShieldCheck className="w-4 h-4 text-brand-600" />
                <span>Modern Clean Tech</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Built on Next.js, React, Tailwind, and Supabase. Fast, reliable, and easily maintainable.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-slate-900 text-sm">
                <Code2 className="w-4 h-4 text-cyan-600" />
                <span>Direct Founder Execution</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                You work directly with the builder using cutting-edge AI tools (Cursor & Antigravity) for rapid delivery.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-slate-900 text-sm">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>2 to 7 Day Delivery</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Clear fixed-price milestones delivered in days, with daily async previews and updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
