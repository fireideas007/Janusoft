import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Terminal, 
  Zap, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown, 
  Rocket, 
  Bot, 
  TrendingUp, 
  Share2, 
  Building2, 
  CreditCard, 
  HeartPulse, 
  Truck, 
  Layers, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

type ActiveMenu = 'services' | 'solutions' | 'engagement' | null;

export const Navbar: React.FC = () => {
  const { prototypePrice } = useCurrency();
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const location = useLocation();
  const menuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setMobileExpandedSection(null);
  }, [location.pathname]);

  const handleMouseEnter = (menu: ActiveMenu) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection(prev => prev === section ? null : section);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full max-w-full z-50 transition-all duration-300 ${
        scrolled || activeMenu !== null
          ? 'glass-panel bg-white/95 py-3 shadow-md shadow-slate-200/50'
          : 'bg-transparent py-4'
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-cyan-500 to-indigo-600 p-0.5 shadow-md shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">
                  Janusoft
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded bg-brand-500/10 text-brand-600 border border-brand-500/30">
                  .in
                </span>
              </div>
              <span className="text-[10px] tracking-wide text-slate-500 font-medium">
                AI-Native IT Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Mega Menus */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/80 p-1.5 rounded-2xl border border-slate-200/80 shadow-xs backdrop-blur">
            {/* 1. Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-brand-600 text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`
              }
            >
              Home
            </NavLink>

            {/* 2. Services (Mega Menu Trigger) */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all inline-flex items-center gap-1 ${
                    isActive || activeMenu === 'services'
                      ? 'bg-brand-50 text-brand-700 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`
                }
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'services' ? 'rotate-180 text-brand-600' : 'text-slate-400'}`} />
              </NavLink>
            </div>

            {/* 3. Solutions (Mega Menu Trigger) */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
            >
              <NavLink
                to="/solutions"
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all inline-flex items-center gap-1 ${
                    isActive || activeMenu === 'solutions'
                      ? 'bg-brand-50 text-brand-700 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`
                }
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'solutions' ? 'rotate-180 text-brand-600' : 'text-slate-400'}`} />
              </NavLink>
            </div>

            {/* 4. Engagement (Mega Menu Trigger) */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('engagement')}
            >
              <NavLink
                to="/engagement"
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all inline-flex items-center gap-1 ${
                    isActive || activeMenu === 'engagement'
                      ? 'bg-brand-50 text-brand-700 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`
                }
              >
                <span>Engagement</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'engagement' ? 'rotate-180 text-brand-600' : 'text-slate-400'}`} />
              </NavLink>
            </div>

            {/* 5. Scope Estimator */}
            <NavLink
              to="/estimator"
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-brand-600 text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`
              }
            >
              Estimator
            </NavLink>

            {/* 6. Pricing */}
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-brand-600 text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`
              }
            >
              Pricing
            </NavLink>

            {/* 7. Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-brand-600 text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop Right Action CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              to="/engagement"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-md shadow-brand-600/25 hover:shadow-brand-600/40 active:scale-[0.98] transition-all"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>48h Prototype ({prototypePrice})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-200/80 transition-colors"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MEGA MENUS CONTAINER (Full-width Techtaru Style) */}
      {/* ========================================================================= */}
      {activeMenu !== null && (
        <div 
          className="hidden lg:block absolute top-full left-0 right-0 w-full bg-white/95 border-b border-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200"
          onMouseEnter={() => {
            if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* 1. SERVICES MEGA MENU */}
            {activeMenu === 'services' && (
              <div>
                <div className="grid grid-cols-12 gap-8 items-start">
                  {/* Category Columns (9 cols) */}
                  <div className="col-span-9 grid grid-cols-4 gap-6">
                    {/* Col 1: Build */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-600">
                        <Rocket className="w-3.5 h-3.5" />
                        <span>Build & MVPs</span>
                      </div>
                      <ul className="space-y-2 text-xs">
                        <li>
                          <Link to="/services" className="font-semibold text-slate-900 hover:text-brand-600 transition-colors block">
                            Fullstack Web Apps & MVPs
                          </Link>
                          <span className="text-[11px] text-slate-500">Next.js, Supabase, Auth & DB</span>
                        </li>
                        <li>
                          <Link to="/services" className="font-semibold text-slate-900 hover:text-brand-600 transition-colors block">
                            Landing Pages & Websites
                          </Link>
                          <span className="text-[11px] text-slate-500">Sub-second load, 95+ Lighthouse</span>
                        </li>
                        <li>
                          <Link to="/services" className="font-semibold text-slate-900 hover:text-brand-600 transition-colors block">
                            Admin Dashboards & Portals
                          </Link>
                          <span className="text-[11px] text-slate-500">CRUD tables, search & metrics</span>
                        </li>
                        <li>
                          <Link to="/services" className="font-semibold text-slate-900 hover:text-brand-600 transition-colors block">
                            Website Modernization
                          </Link>
                          <span className="text-[11px] text-slate-500">WordPress to clean Next.js</span>
                        </li>
                      </ul>
                    </div>

                    {/* Col 2: AI Development */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-600">
                        <Bot className="w-3.5 h-3.5" />
                        <span>AI & Chatbots</span>
                      </div>
                      <ul className="space-y-2 text-xs">
                        <li>
                          <Link to="/services" className="font-semibold text-slate-900 hover:text-cyan-600 transition-colors block">
                            Custom AI Chatbots
                          </Link>
                          <span className="text-[11px] text-slate-500">Gemini 2.0 / OpenAI streaming UI</span>
                        </li>
                        <li>
                          <Link to="/services" className="font-semibold text-slate-900 hover:text-cyan-600 transition-colors block">
                            Document & FAQ Assistants
                          </Link>
                          <span className="text-[11px] text-slate-500">pgvector RAG without hallucinations</span>
                        </li>
                        <li>
                          <Link to="/services" className="font-semibold text-slate-900 hover:text-cyan-600 transition-colors block">
                            AI Workflow Automations
                          </Link>
                          <span className="text-[11px] text-slate-500">Automated summarization & alerts</span>
                        </li>
                        <li>
                          <Link to="/services" className="font-semibold text-slate-900 hover:text-cyan-600 transition-colors block">
                            Embeddable Web Widgets
                          </Link>
                          <span className="text-[11px] text-slate-500">Live chat widgets for your site</span>
                        </li>
                      </ul>
                    </div>

                    {/* Col 3: Performance Marketing */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>Performance Ads</span>
                      </div>
                      <ul className="space-y-2 text-xs">
                        <li>
                          <Link to="/services" className="font-semibold text-slate-900 hover:text-rose-600 transition-colors block">
                            Meta & Google Ads Funnels
                          </Link>
                          <span className="text-[11px] text-slate-500">Laser targeted paid acquisition</span>
                        </li>
                        <li>
                          <Link to="/services" className="font-semibold text-slate-900 hover:text-rose-600 transition-colors block">
                            Pixel & CAPI Tracking Setup
                          </Link>
                          <span className="text-[11px] text-slate-500">Conversions API & GA4 audit</span>
                        </li>
                        <li>
                          <Link to="/services" className="font-semibold text-slate-900 hover:text-rose-600 transition-colors block">
                            High-ROI Ad Creatives
                          </Link>
                          <span className="text-[11px] text-slate-500">Visual creative copy variations</span>
                        </li>
                        <li>
                          <Link to="/services" className="font-semibold text-slate-900 hover:text-rose-600 transition-colors block">
                            Lead Qualification Funnels
                          </Link>
                          <span className="text-[11px] text-slate-500">Dedicated landing opt-in flows</span>
                        </li>
                      </ul>
                    </div>

                    {/* Col 4: Social Media & Growth */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-pink-600">
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Social & Organic</span>
                      </div>
                      <ul className="space-y-2 text-xs">
                        <li>
                          <Link to="/services" className="font-semibold text-slate-900 hover:text-pink-600 transition-colors block">
                            Multi-Platform Calendar
                          </Link>
                          <span className="text-[11px] text-slate-500">Structured monthly scheduling</span>
                        </li>
                        <li>
                          <Link to="/services" className="font-semibold text-slate-900 hover:text-pink-600 transition-colors block">
                            LinkedIn Founder Branding
                          </Link>
                          <span className="text-[11px] text-slate-500">Thought leadership & carousels</span>
                        </li>
                        <li>
                          <Link to="/services" className="font-semibold text-slate-900 hover:text-pink-600 transition-colors block">
                            X / Twitter Hook Writing
                          </Link>
                          <span className="text-[11px] text-slate-500">Viral threads & engagement</span>
                        </li>
                        <li>
                          <Link to="/services" className="font-semibold text-slate-900 hover:text-pink-600 transition-colors block">
                            Instagram Carousel Designs
                          </Link>
                          <span className="text-[11px] text-slate-500">Sharp infographics & branding</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right Callout Card (Techtaru Style) */}
                  <div className="col-span-3">
                    <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 p-6 text-white shadow-xl space-y-3">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-mono uppercase font-bold">
                        <Sparkles className="w-3 h-3 text-cyan-300" />
                        <span>Not sure what you need?</span>
                      </div>
                      <h4 className="text-base font-extrabold leading-snug">
                        Most projects combine 2 or 3 services.
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Tell us what you want to achieve and we will architect the leanest sprint before anyone quotes a price.
                      </p>
                      <Link
                        to="/estimator"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-cyan-200 pt-1 group"
                      >
                        <span>Calculate Scope in Seconds</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">
                    All engineering sprints include 100% full source code ownership & 14-day warranty.
                  </span>
                  <Link
                    to="/services"
                    className="font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 hover:underline"
                  >
                    <span>VIEW ALL PRACTICE AREAS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* 2. SOLUTIONS MEGA MENU */}
            {activeMenu === 'solutions' && (
              <div>
                <div className="grid grid-cols-12 gap-8 items-start">
                  {/* Category Columns (9 cols) */}
                  <div className="col-span-9 grid grid-cols-4 gap-6">
                    {/* Col 1 */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-600">
                        <CreditCard className="w-3.5 h-3.5" />
                        <span>FinTech & Billing</span>
                      </div>
                      <ul className="space-y-2 text-xs">
                        <li>
                          <Link to="/solutions" className="font-semibold text-slate-900 hover:text-brand-600 transition-colors block">
                            Stripe / Razorpay Checkout
                          </Link>
                          <span className="text-[11px] text-slate-500">Multi-currency & auto-invoicing</span>
                        </li>
                        <li>
                          <Link to="/solutions" className="font-semibold text-slate-900 hover:text-brand-600 transition-colors block">
                            Webhook Idempotency
                          </Link>
                          <span className="text-[11px] text-slate-500">Zero dropped payments</span>
                        </li>
                        <li>
                          <Link to="/solutions" className="font-semibold text-slate-900 hover:text-brand-600 transition-colors block">
                            KYC & Receipt Extraction
                          </Link>
                          <span className="text-[11px] text-slate-500">Automated invoice data extraction</span>
                        </li>
                      </ul>
                    </div>

                    {/* Col 2 */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-indigo-600">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>B2B SaaS</span>
                      </div>
                      <ul className="space-y-2 text-xs">
                        <li>
                          <Link to="/solutions" className="font-semibold text-slate-900 hover:text-indigo-600 transition-colors block">
                            Multi-Tenant Architecture
                          </Link>
                          <span className="text-[11px] text-slate-500">PostgreSQL Row-Level Security</span>
                        </li>
                        <li>
                          <Link to="/solutions" className="font-semibold text-slate-900 hover:text-indigo-600 transition-colors block">
                            Organization & User RBAC
                          </Link>
                          <span className="text-[11px] text-slate-500">Team invites & permissions</span>
                        </li>
                        <li>
                          <Link to="/solutions" className="font-semibold text-slate-900 hover:text-indigo-600 transition-colors block">
                            Usage-Based Billing Tiers
                          </Link>
                          <span className="text-[11px] text-slate-500">Automated quota & tier gating</span>
                        </li>
                      </ul>
                    </div>

                    {/* Col 3 */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
                        <HeartPulse className="w-3.5 h-3.5" />
                        <span>Healthcare & Clinics</span>
                      </div>
                      <ul className="space-y-2 text-xs">
                        <li>
                          <Link to="/solutions" className="font-semibold text-slate-900 hover:text-rose-600 transition-colors block">
                            Doctor / Clinic Booking
                          </Link>
                          <span className="text-[11px] text-slate-500">Calendar slots & appointment reminders</span>
                        </li>
                        <li>
                          <Link to="/solutions" className="font-semibold text-slate-900 hover:text-rose-600 transition-colors block">
                            Patient Intake Vault
                          </Link>
                          <span className="text-[11px] text-slate-500">Encrypted records & reports</span>
                        </li>
                        <li>
                          <Link to="/solutions" className="font-semibold text-slate-900 hover:text-rose-600 transition-colors block">
                            WhatsApp Alerts
                          </Link>
                          <span className="text-[11px] text-slate-500">Automatic booking confirmations</span>
                        </li>
                      </ul>
                    </div>

                    {/* Col 4 */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
                        <Truck className="w-3.5 h-3.5" />
                        <span>Logistics & Retail</span>
                      </div>
                      <ul className="space-y-2 text-xs">
                        <li>
                          <Link to="/solutions" className="font-semibold text-slate-900 hover:text-emerald-600 transition-colors block">
                            Real-Time Dispatch Alerts
                          </Link>
                          <span className="text-[11px] text-slate-500">Driver updates via WhatsApp & SMS</span>
                        </li>
                        <li>
                          <Link to="/solutions" className="font-semibold text-slate-900 hover:text-emerald-600 transition-colors block">
                            Order Status Tracking
                          </Link>
                          <span className="text-[11px] text-slate-500">Public tracking endpoints</span>
                        </li>
                        <li>
                          <Link to="/solutions" className="font-semibold text-slate-900 hover:text-emerald-600 transition-colors block">
                            Headless Next.js Stores
                          </Link>
                          <span className="text-[11px] text-slate-500">Sub-second e-commerce catalogs</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right Callout Card (Techtaru Style) */}
                  <div className="col-span-3">
                    <div className="rounded-2xl bg-gradient-to-br from-brand-600 via-indigo-600 to-brand-700 p-6 text-white shadow-xl space-y-3">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-mono uppercase font-bold">
                        <Zap className="w-3 h-3 text-amber-300" />
                        <span>Built Once, Configured for You</span>
                      </div>
                      <h4 className="text-base font-extrabold leading-snug">
                        Launch in days instead of quarters.
                      </h4>
                      <p className="text-xs text-brand-100 leading-relaxed">
                        Pre-architected, battle-tested system modules adapted to your business branding with 100% full IP ownership.
                      </p>
                      <Link
                        to="/solutions"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-brand-100 pt-1 group underline"
                      >
                        <span>Explore Industry Blueprints</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">
                    Serving high-growth teams in Bengaluru, Mumbai, GIFT City, Ahmedabad & Delhi NCR.
                  </span>
                  <Link
                    to="/solutions"
                    className="font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 hover:underline"
                  >
                    <span>VIEW ALL 6 INDUSTRY BLUEPRINTS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* 3. ENGAGEMENT MEGA MENU */}
            {activeMenu === 'engagement' && (
              <div>
                <div className="grid grid-cols-12 gap-8 items-start">
                  {/* Category Columns (9 cols) */}
                  <div className="col-span-9 grid grid-cols-3 gap-6">
                    {/* Model 1: 48h Pilot */}
                    <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-50/40 space-y-2">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 text-[10px] font-bold">
                        <span>⚡ Lowest Risk • Instant Buy</span>
                      </div>
                      <h4 className="font-bold text-sm text-slate-900">
                        48-Hour Rapid POC Pilot
                      </h4>
                      <div className="text-xl font-extrabold text-slate-900 font-mono">
                        {prototypePrice}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Clickable working prototype URL + database schema blueprint delivered in 48 hours. 100% credited to full build.
                      </p>
                      <Link
                        to="/engagement"
                        className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:underline pt-1"
                      >
                        <span>Claim 48h Slot</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Model 2: Milestone Sprints */}
                    <div className="p-4 rounded-xl border border-brand-500/30 bg-brand-50/40 space-y-2">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-700 text-[10px] font-bold">
                        <span>🚀 Most Popular for MVPs</span>
                      </div>
                      <h4 className="font-bold text-sm text-slate-900">
                        Fixed-Price Milestone Sprints
                      </h4>
                      <div className="text-xl font-extrabold text-slate-900 font-mono">
                        Fixed Scope
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        End-to-end fullstack software delivered with fixed timeline, verified test harness, and zero surprise fees.
                      </p>
                      <Link
                        to="/engagement"
                        className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 hover:underline pt-1"
                      >
                        <span>Scope Project Sprint</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Model 3: Retainer */}
                    <div className="p-4 rounded-xl border border-indigo-500/30 bg-indigo-50/40 space-y-2">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-700 text-[10px] font-bold">
                        <span>🛠 Continuous Velocity</span>
                      </div>
                      <h4 className="font-bold text-sm text-slate-900">
                        Dedicated AI Retainer
                      </h4>
                      <div className="text-xl font-extrabold text-slate-900 font-mono">
                        Monthly
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Your on-demand senior engineering lead. Up to 4 major feature releases/month with direct founder Slack channel.
                      </p>
                      <Link
                        to="/engagement"
                        className="inline-flex items-center gap-1 text-xs font-bold text-indigo-700 hover:underline pt-1"
                      >
                        <span>Retainer Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Callout Card (Techtaru Style) */}
                  <div className="col-span-3">
                    <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 p-6 text-white shadow-xl space-y-3">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono uppercase font-bold">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        <span>Zero Risk Protection</span>
                      </div>
                      <h4 className="text-base font-extrabold leading-snug">
                        100% Money-Back Guarantee
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        If you're not thrilled with the architecture and prototype delivered in 48 hours, you receive a full refund with zero questions asked.
                      </p>
                      <Link
                        to="/engagement"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-1 group"
                      >
                        <span>Learn About Guarantees</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">
                    All engagement models billed through Hackproof Technologies India Pvt Ltd with GST invoicing.
                  </span>
                  <Link
                    to="/engagement"
                    className="font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 hover:underline"
                  >
                    <span>COMPARE ALL HIRING MODELS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MOBILE NAVIGATION DRAWER */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-4 rounded-2xl glass-panel bg-white border border-slate-200 shadow-xl space-y-3 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-1">
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  isActive ? 'bg-brand-600 text-white font-semibold' : 'text-slate-700 hover:bg-slate-100'
                }`
              }
            >
              Home
            </NavLink>

            {/* Mobile Accordion: Services */}
            <div>
              <button
                onClick={() => toggleMobileSection('services')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'services' ? 'rotate-180 text-brand-600' : ''}`} />
              </button>
              {mobileExpandedSection === 'services' && (
                <div className="pl-4 pr-2 py-2 space-y-1.5 text-xs bg-slate-50 rounded-xl my-1">
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 hover:text-brand-600 font-medium">
                    • Fullstack Web Apps & MVPs
                  </Link>
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 hover:text-brand-600 font-medium">
                    • Custom AI Chatbots & RAG
                  </Link>
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 hover:text-brand-600 font-medium">
                    • Performance Marketing (Meta & Google Ads)
                  </Link>
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 hover:text-brand-600 font-medium">
                    • Social Media Management & Carousels
                  </Link>
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-brand-600 font-bold">
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Accordion: Solutions */}
            <div>
              <button
                onClick={() => toggleMobileSection('solutions')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'solutions' ? 'rotate-180 text-brand-600' : ''}`} />
              </button>
              {mobileExpandedSection === 'solutions' && (
                <div className="pl-4 pr-2 py-2 space-y-1.5 text-xs bg-slate-50 rounded-xl my-1">
                  <Link to="/solutions" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 hover:text-brand-600 font-medium">
                    • FinTech & Multi-Currency Billing
                  </Link>
                  <Link to="/solutions" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 hover:text-brand-600 font-medium">
                    • B2B SaaS & Multi-Tenant Portals
                  </Link>
                  <Link to="/solutions" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 hover:text-brand-600 font-medium">
                    • Healthcare & Doctor Booking Vault
                  </Link>
                  <Link to="/solutions" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 hover:text-brand-600 font-medium">
                    • Logistics & Dispatch Notifications
                  </Link>
                  <Link to="/solutions" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-brand-600 font-bold">
                    View All Solutions →
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Accordion: Engagement */}
            <div>
              <button
                onClick={() => toggleMobileSection('engagement')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                <span>Engagement</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'engagement' ? 'rotate-180 text-brand-600' : ''}`} />
              </button>
              {mobileExpandedSection === 'engagement' && (
                <div className="pl-4 pr-2 py-2 space-y-1.5 text-xs bg-slate-50 rounded-xl my-1">
                  <Link to="/engagement" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 hover:text-brand-600 font-medium">
                    • 48-Hour Rapid POC Pilot ({prototypePrice})
                  </Link>
                  <Link to="/engagement" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 hover:text-brand-600 font-medium">
                    • Fixed-Price Milestone Sprints
                  </Link>
                  <Link to="/engagement" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 hover:text-brand-600 font-medium">
                    • Dedicated AI Developer Retainer
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/estimator"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  isActive ? 'bg-brand-600 text-white font-semibold' : 'text-slate-700 hover:bg-slate-100'
                }`
              }
            >
              Scope Estimator
            </NavLink>

            <NavLink
              to="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  isActive ? 'bg-brand-600 text-white font-semibold' : 'text-slate-700 hover:bg-slate-100'
                }`
              }
            >
              Pricing
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  isActive ? 'bg-brand-600 text-white font-semibold' : 'text-slate-700 hover:bg-slate-100'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          <div className="pt-2 border-t border-slate-200/80 flex flex-col gap-2">
            <Link
              to="/engagement"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-indigo-600 shadow-md"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>48h Prototype Sprint ({prototypePrice})</span>
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs text-slate-700 bg-slate-100 hover:bg-slate-200"
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-600" />
              <span>Talk with Founder</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
