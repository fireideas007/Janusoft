import React from 'react';
import { Cpu, Code, Database, Sparkles, Layers } from 'lucide-react';

export const TechStack: React.FC = () => {
  const categories = [
    {
      title: 'AI Intelligence & LLM Ecosystem',
      icon: Cpu,
      description: 'Frontier AI models powering our automated reasoning, vector search, and custom agent systems.',
      tags: [
        { name: 'Gemini 2.0 / Flash', note: 'Google DeepMind' },
        { name: 'Grok Beta', note: 'xAI' },
        { name: 'GPT-4o', note: 'OpenAI' },
        { name: 'Claude 3.5 Sonnet', note: 'Anthropic' },
        { name: 'pgvector / Pinecone', note: 'Vector Embeddings' },
        { name: 'LangChain & LlamaIndex', note: 'Agentic Workflows' },
      ],
    },
    {
      title: 'AI-Native IDEs & Development Engines',
      icon: Sparkles,
      description: 'Advanced agentic coding environments enabling single-founder 10x engineering velocity.',
      tags: [
        { name: 'Google Antigravity', note: 'DeepMind Agentic IDE' },
        { name: 'Cursor AI', note: 'AI Pair Programming' },
        { name: 'GitHub Copilot Workspace', note: 'CI/CD Automation' },
        { name: 'Biome & ESLint', note: 'Strict Type Hygiene' },
      ],
    },
    {
      title: 'Frontend & Fullstack Applications',
      icon: Code,
      description: 'Modern, high-performance UI frameworks delivering sub-second load times and smooth UX.',
      tags: [
        { name: 'Next.js 15 (App Router)', note: 'Server Actions' },
        { name: 'React 18 / 19', note: 'Component Architecture' },
        { name: 'TypeScript', note: 'Strict Type Safety' },
        { name: 'Tailwind CSS', note: 'Design System' },
        { name: 'Vite', note: 'Blazing Fast Bundling' },
        { name: 'Framer Motion', note: 'Fluid Animations' },
      ],
    },
    {
      title: 'Backend, Cloud & Database Systems',
      icon: Database,
      description: 'Scalable data storage, serverless cloud computing, and resilient message queues.',
      tags: [
        { name: 'PostgreSQL / Supabase', note: 'Relational & Auth' },
        { name: 'Python FastAPI', note: 'Async Microservices' },
        { name: 'Node.js & Bun', note: 'Runtime Velocity' },
        { name: 'AWS & Cloudflare Edge', note: 'Serverless Compute' },
        { name: 'Docker Containers', note: 'Isolated Environments' },
        { name: 'Redis & BullMQ', note: 'Event Queues' },
      ],
    },
  ];

  return (
    <section id="tech" className="py-24 relative bg-slate-100/50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-300 text-xs font-semibold mb-3 border border-brand-500/20">
            <Layers className="w-3.5 h-3.5 text-cyber-cyan" />
            Modern Tech & AI Stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Powered by Frontier AI & Modern Cloud
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            We don't use legacy bloated frameworks. Every project is built on modern, battle-tested technologies that scale effortlessly from day one.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-7 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cat.tags.map((tag, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex flex-col justify-center"
                    >
                      <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                        {tag.name}
                      </div>
                      <div className="text-[11px] font-mono text-brand-600 dark:text-cyber-cyan mt-0.5">
                        {tag.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
