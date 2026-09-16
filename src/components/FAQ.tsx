import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: 'How can an AI-native solo founder deliver faster than a 10-person agency?',
    answer:
      'Traditional IT agencies suffer from massive communication latency—meetings between product managers, scrum masters, designers, and junior developers eating up 80% of project time. At Janusoft, a single experienced software engineer pairs with state-of-the-art agentic AI systems (Google Antigravity, Cursor, Gemini 2.0, Grok, GPT-4o). The AI handles boilerplate syntax and test scaffolding in seconds, while the founder focuses on high-level architecture, business logic, security, and quality control. The result is 10x development speed with zero bureaucratic lag.',
  },
  {
    question: 'Do I own 100% of the intellectual property and code?',
    answer:
      'Yes, unconditionally. Upon completion and final handover, all source code, database schemas, deployment pipelines, and associated assets are 100% assigned to your company. We provide clean Git repositories with comprehensive documentation.',
  },
  {
    question: 'How do you prevent AI hallucinations, security holes, and low-quality code?',
    answer:
      'AI is our accelerator, not our decision-maker. Every line of code synthesized during sprints is reviewed by human engineering experience and passed through automated linting (Biome/ESLint), strict TypeScript compilation, unit test suites (Vitest/Jest), and OWASP security checks. We never push unverified code to production.',
  },
  {
    question: 'What happens after the project is deployed to production?',
    answer:
      'Every fixed-price sprint comes with a 14-day complimentary warranty period. If any bug or deviation from the agreed blueprint arises, we patch it immediately at no cost. For ongoing feature development and 24/7 priority support, we offer our Dedicated AI Retainer model.',
  },
  {
    question: 'Can you work on existing codebases, or only new greenfield projects?',
    answer:
      'Both! We love building brand new MVPs from scratch, but we also specialize in integrating custom RAG/LLM copilots into existing platforms, refactoring legacy spaghetti code, and automating tedious manual backend workflows.',
  },
  {
    question: 'How do we communicate throughout the sprint?',
    answer:
      'Directly with the founder via a dedicated Slack or WhatsApp channel, coupled with daily async Loom video walkthroughs and live staging preview links. No frustrating ticket queues or waiting days for an email reply.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-300 text-xs font-semibold mb-3 border border-brand-500/20">
            <HelpCircle className="w-3.5 h-3.5 text-cyber-cyan" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Straightforward answers about our AI-augmented delivery model, ownership, and processes.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 text-slate-900 dark:text-white font-semibold hover:text-brand-600 dark:hover:text-cyber-cyan transition-colors"
                >
                  <span className="text-base sm:text-lg">{item.question}</span>
                  <div
                    className={`p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-600 dark:text-cyber-cyan' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200/50 dark:border-slate-800/50 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
