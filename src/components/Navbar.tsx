import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Terminal, 
  Menu, 
  X, 
  ArrowRight, 
  MessageSquare,
  Sparkles,
  Zap,
  Globe
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export const Navbar: React.FC = () => {
  const { currency, setCurrency, prototypePrice } = useCurrency();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const whatsappUrl = "https://wa.me/918918254625?text=" + encodeURIComponent("Hi Janusoft! I'm interested in building a project with you. Can we discuss scope and timeline?");

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/solutions' },
    { name: 'Why Us', path: '/engagement' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Estimator', path: '/estimator' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 pt-3 sm:pt-4">
      <nav 
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-lg shadow-slate-900/5 py-2.5 px-4 sm:px-6' 
            : 'bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-sm py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-cyan-400 flex items-center justify-center shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
                  Janusoft
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
              <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest hidden sm:inline">
                Execution Studio
              </span>
            </div>
          </Link>

          {/* Desktop Direct Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-lg text-xs lg:text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-brand-600 bg-brand-50/80 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center gap-3">
            {/* Currency Switcher */}
            <div className="flex items-center rounded-xl bg-slate-100/90 p-0.5 border border-slate-200 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setCurrency('INR')}
                className={`px-2 py-1 rounded-lg transition-all flex items-center gap-1 ${
                  currency === 'INR'
                    ? 'bg-white text-emerald-700 shadow-sm font-bold'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Display pricing in Indian Rupees"
              >
                <span>🇮🇳</span>
                <span>₹ INR</span>
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-2 py-1 rounded-lg transition-all flex items-center gap-1 ${
                  currency === 'USD'
                    ? 'bg-white text-brand-700 shadow-sm font-bold'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Display pricing in US Dollars"
              >
                <span>🇺🇸</span>
                <span>$ USD</span>
              </button>
            </div>

            {/* WhatsApp CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md shadow-emerald-600/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Book on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            {/* Quick Currency Toggle for Mobile */}
            <button
              onClick={() => setCurrency(currency === 'INR' ? 'USD' : 'INR')}
              className="px-2 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700"
            >
              {currency === 'INR' ? '🇮🇳 ₹' : '🇺🇸 $'}
            </button>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-slate-100 mt-3 animate-in fade-in slide-in-from-top-2 duration-200 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-xl text-xs font-bold text-center transition-all ${
                      isActive
                        ? 'bg-brand-600 text-white shadow-sm'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md text-center"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp (Instant Reply)</span>
              </a>

              <div className="flex items-center justify-center gap-3 pt-2 text-[11px] text-slate-400">
                <span>⚡ 72h Prototype: {prototypePrice}</span>
                <span>•</span>
                <span>PAN India & Global</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
