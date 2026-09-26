import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Building2, 
  User, 
  DollarSign, 
  ArrowRight,
  Copy,
  Check
} from 'lucide-react';

interface ContactFormProps {
  initialService?: string;
  preFilledScope?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService = '',
  preFilledScope = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: initialService || 'Rapid MVP & Fullstack Web Apps',
    timeline: 'Within 2 Weeks',
    budget: '$1,500 - $3,500',
    message: preFilledScope || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync props if changed
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  React.useEffect(() => {
    if (preFilledScope) {
      setFormData((prev) => ({ ...prev, message: preFilledScope }));
    }
  }, [preFilledScope]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`Janusoft Project Inquiry: ${formData.service} - ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      `Hi Janusoft Team,\n\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nService: ${formData.service}\nTimeline: ${formData.timeline}\nBudget: ${formData.budget}\n\nProject Scope & Details:\n${formData.message}\n\nLooking forward to speaking with the founder!`
    );
    return `mailto:hello@janusoft.in?subject=${subject}&body=${body}`;
  };

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Janusoft! My name is ${formData.name}. I am interested in "${formData.service}" with target timeline "${formData.timeline}". Brief: ${formData.message}`
    );
    return `https://wa.me/919999999999?text=${text}`;
  };

  const copyBrief = () => {
    const brief = `Janusoft Inquiry\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\nDetails: ${formData.message}`;
    navigator.clipboard.writeText(brief);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden w-full">
      {/* Glow - strictly contained */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-brand-600/10 blur-[90px] sm:blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-300 text-xs font-semibold mb-3 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyber-cyan" />
            Let's Build Together
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ready to Accelerate Your IT Roadmap?
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Submit your project brief below for a detailed architecture breakdown and fixed timeline within 12 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-7 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Why Talk to Us First?
              </h3>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>
                    <strong className="text-slate-900 dark:text-white">Direct Founder Consultation:</strong> You talk directly with the engineer who will build your system.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-md bg-cyber-cyan/10 text-cyber-cyan mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>
                    <strong className="text-slate-900 dark:text-white">Same-Day Spec Assessment:</strong> Receive a clear technical approach, database schema sketch, and milestone roadmap.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-md bg-brand-500/10 text-brand-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>
                    <strong className="text-slate-900 dark:text-white">Zero Obligation:</strong> Free architecture review even if you decide not to proceed.
                  </span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-500" />
                  <span className="font-mono">hello@janusoft.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyber-cyan" />
                  <span>Guaranteed response within 12 hours</span>
                </div>
              </div>
            </div>

            {/* Instant direct WhatsApp CTA */}
            <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-500 text-white">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  Prefer Real-Time Chat?
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                Connect directly with the founder on WhatsApp for quick scoping and questions.
              </p>
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-5 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Project Brief Received!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900 dark:text-white">{formData.name}</strong>. The Janusoft founder will review your blueprint and email you back at <span className="font-mono text-brand-600 dark:text-cyber-cyan">{formData.email}</span> within 12 hours.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateMailtoLink()}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-colors shadow"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>
                    <button
                      onClick={copyBrief}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied Brief' : 'Copy Brief'}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Aditya Sharma"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-slate-100/70 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 text-slate-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="aditya@company.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-slate-100/70 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 text-slate-900 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Company / Project Name
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Janusoft / Stealth Startup"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-slate-100/70 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 text-slate-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Service Category
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-100/70 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 text-slate-900 dark:text-white"
                      >
                        <option value="Rapid Fullstack Web Apps & MVPs">Rapid Fullstack Web Apps & MVPs (Next.js + Supabase)</option>
                        <option value="Custom AI Chatbots & Knowledge Assistants">Custom AI Chatbots & Knowledge Assistants (RAG)</option>
                        <option value="High-Converting Landing Pages & Websites">High-Converting Landing Pages & Websites (Next.js)</option>
                        <option value="Internal Admin Dashboards & CRM Portals">Internal Admin Dashboards & CRM Portals</option>
                        <option value="Workflow Automations & Webhook Integrations">Workflow Automations & Webhook Integrations</option>
                        <option value="Website Redesign & Modernization">Website Redesign & Modernization</option>
                        <option value="Performance Marketing & Paid Ad Campaigns">Performance Marketing & Paid Ad Campaigns (Meta/Google Ads)</option>
                        <option value="Social Media Management & Organic Growth">Social Media Management & Organic Growth</option>
                        <option value="48-Hour Rapid POC Prototype ($390 / ₹29,990)">48-Hour Rapid POC Prototype ($390 / ₹29,990)</option>
                        <option value="Dedicated Monthly Senior Engineering Retainer">Dedicated Monthly Senior Engineering Retainer</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-100/70 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 text-slate-900 dark:text-white"
                      >
                        <option value="ASAP (Blitz 3-5 days)">ASAP (Blitz 3-5 days)</option>
                        <option value="Within 2 Weeks">Within 2 Weeks</option>
                        <option value="Within 1 Month">Within 1 Month</option>
                        <option value="Flexible / Exploring">Flexible / Exploring</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Approximate Budget
                      </label>
                      <div className="relative">
                        <DollarSign className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-slate-100/70 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 text-slate-900 dark:text-white"
                        >
                          <option value="Under $1,500 / ₹1.2L">Under $1,500 / ₹1.2L</option>
                          <option value="$1,500 - $3,500 / ₹1.2L - ₹3L">$1,500 - $3,500 / ₹1.2L - ₹3L</option>
                          <option value="$3,500 - $7,000 / ₹3L - ₹6L">$3,500 - $7,000 / ₹3L - ₹6L</option>
                          <option value="$7,000+ / ₹6L+">$7,000+ / ₹6L+</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Project Scope & Goals *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you want to build, key features, preferred AI models, or link to your requirements doc..."
                      className="w-full px-4 py-3 rounded-xl text-sm bg-slate-100/70 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 text-slate-900 dark:text-white leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-xl shadow-brand-600/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Project Scope for Review</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    Strict NDA honored. We never share client concepts or contact data with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
