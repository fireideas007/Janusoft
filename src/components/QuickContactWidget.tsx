import React, { useState } from 'react';
import { MessageSquare, Phone, X } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export const QuickContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { prototypePrice } = useCurrency();

  const whatsappUrl = "https://wa.me/918918254625?text=" + encodeURIComponent("Hi Janusoft! I'm interested in building a project. Can we discuss scope and timeline?");
  const phoneUrl = "tel:+918918254625";

  return (
    <aside aria-label="Founder Quick Contact" className="fixed bottom-5 right-5 z-40">
      {isOpen ? (
        <div className="w-[300px] rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl shadow-slate-900/15 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="bg-slate-900 text-white p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-xs">
                  JS
                </div>
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900"></span>
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Aditya • Founder</span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-400">Online</span>
                </div>
                <p className="text-[10px] text-slate-400">Replies on WhatsApp in &lt;15 mins</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3.5 space-y-2.5 bg-slate-50/50">
            <div className="text-[11px] text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200/80 leading-relaxed">
              👋 Have an app, MVP, or ad campaign in mind? Chat directly with me on WhatsApp. 72h prototype from <strong className="text-slate-900">{prototypePrice}</strong>.
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md shadow-emerald-600/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Open WhatsApp Chat</span>
            </a>

            <a
              href={phoneUrl}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-600" />
              <span>Direct Call: +91 89182 54625</span>
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-600/30 hover:scale-105 transition-all group"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative">
            <MessageSquare className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
          </div>
          <span>Chat on WhatsApp</span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/20 text-white">
            Online
          </span>
        </button>
      )}
    </aside>
  );
};
