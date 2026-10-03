import React, { useState } from 'react';
import { 
  ArrowRight, 
  Zap, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Send,
  Phone,
  Sparkles
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { submitLead } from '../services/leadService';

export const Hero: React.FC = () => {
  const { prototypePrice } = useCurrency();

  // Hero Lead Capture Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Web App & MVP');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // 1. Submit to backend API & local backup
      await submitLead({
        name,
        phone,
        service,
        notes,
        source: 'Hero Above-The-Fold Capture',
      });

      setSubmitted(true);

      // 2. Open WhatsApp for instant founder chat
      const cleanPhone = phone.replace(/[^0-9]/g, '');
      const msg = encodeURIComponent(
        `Hi Janusoft! My name is ${name}. I need help with "${service}". Phone: ${phone}. Notes: ${notes || 'Ready to discuss requirements.'}`
      );
      const waUrl = `https://wa.me/918918254625?text=${msg}`;
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 600);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-20 overflow-hidden w-full">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-brand-500/10 blur-[100px] sm:blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-cyan-500/10 blur-[90px] sm:blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Column: Bold Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>⚡ Fast-Track IT Execution Studio</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-mono">Prototype: {prototypePrice}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Need Work Done Fast?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-cyan-600 to-indigo-600">
                Janusoft Now.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              India's fastest digital & AI execution studio. Custom web applications, AI MVPs, performance marketing, and social media engines delivered in days, not quarters.
            </p>

            {/* Quick Guarantees Strip */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                <span><strong>72h</strong> Prototype SLA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Direct WhatsApp Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-600" />
                <span>100% Code & IP Ownership</span>
              </div>
            </div>

            {/* Founder Contact Quick Bar */}
            <div className="pt-4 border-t border-slate-200/80 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Aditya (Lead Architect): Online</span>
              </span>
              <span>•</span>
              <a
                href="https://wa.me/918918254625?text=Hi%20Janusoft!"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-700 hover:underline flex items-center gap-1"
              >
                <span>WhatsApp: +91 89182 54625</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero High-Converting Lead Capture Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-8 relative">
              <div className="mb-5">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Instant Scope & Quote</span>
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
                    &lt; 15m Response
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Request Your Build
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Share your requirements — we'll reply directly on WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Inquiry Received!</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Aditya is reviewing your request and will reach out to you on WhatsApp at <strong>{phone}</strong> shortly.
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/918918254625?text=${encodeURIComponent(`Hi Janusoft! I just submitted an inquiry for "${service}" from ${name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Open WhatsApp Directly</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmitLead} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rohan Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Needed
                    </label>
                    <div className="grid grid-cols-2 gap-1.5">
                      {[
                        'Web App & MVP',
                        'Performance Ads',
                        'Social Media',
                        'AI Chatbot',
                      ].map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => setService(item)}
                          className={`py-1.5 px-2 rounded-lg text-xs font-medium text-center transition-all ${
                            service === item
                              ? 'bg-slate-900 text-white font-bold shadow-sm'
                              : 'bg-slate-100/80 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Brief Requirement (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Telemedicine booking MVP with Razorpay..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Submitting...' : 'Get Fast Quote & Callback'}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>

                  <div className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-2 pt-1">
                    <span>🔒 Private</span>
                    <span>•</span>
                    <span>💬 Direct Founder Reply</span>
                    <span>•</span>
                    <span>⚡ No Spam</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
