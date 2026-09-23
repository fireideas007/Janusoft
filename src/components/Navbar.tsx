import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, Terminal, Zap } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Engagement', href: '#engagement-models' },
    { name: 'Estimator', href: '#estimator' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Why Us', href: '#why-us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full max-w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-panel py-3 shadow-md shadow-slate-200/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
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
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#prototype-offer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-md shadow-brand-600/25 hover:shadow-brand-600/40 active:scale-[0.98] transition-all"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>48h Prototype ($390)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-200/80 transition-colors"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl glass-panel border border-slate-200 shadow-xl space-y-3 animate-in fade-in duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-slate-200/80 flex flex-col gap-2">
              <a
                href="#prototype-offer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-indigo-600 shadow-md"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>48h Prototype Sprint ($390)</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs text-slate-700 bg-slate-100 hover:bg-slate-200"
              >
                <span>Book Strategy Call</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
