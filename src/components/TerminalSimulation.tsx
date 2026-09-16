import React, { useState, useEffect } from 'react';
import { Terminal as TermIcon, CheckCircle2, Cpu, Zap, Copy, Check } from 'lucide-react';

interface SimulationPreset {
  title: string;
  prompt: string;
  steps: { text: string; status: 'done' | 'running' | 'waiting'; time: string }[];
  output: string;
}

const PRESETS: SimulationPreset[] = [
  {
    title: 'MVP Web App',
    prompt: 'janusoft-cli scaffold --type fullstack-saas --auth supabase --ai gemini-flash',
    steps: [
      { text: 'Synthesizing architecture & database schemas...', status: 'done', time: '0.4s' },
      { text: 'Generating Next.js app router & secure server actions...', status: 'done', time: '0.9s' },
      { text: 'Configuring Gemini multi-modal processing pipeline...', status: 'done', time: '1.2s' },
      { text: 'Running automated vulnerability and load tests (100% pass)...', status: 'done', time: '1.7s' },
      { text: 'Deploying edge worker build to production...', status: 'done', time: '2.1s' },
    ],
    output: '✓ LIVE: https://demo-app.janusoft.in [Production Ready in 4 days]',
  },
  {
    title: 'Enterprise RAG & AI Agent',
    prompt: 'janusoft-cli agent init --knowledge-base ./docs --model grok-beta --rag pgvector',
    steps: [
      { text: 'Parsing & chunking unstructured enterprise PDFs...', status: 'done', time: '0.6s' },
      { text: 'Generating vector embeddings & indexing in PostgreSQL...', status: 'done', time: '1.1s' },
      { text: 'Synthesizing agent guardrails & strict citation validator...', status: 'done', time: '1.5s' },
      { text: 'Verifying hallucination zero-tolerance tests...', status: 'done', time: '1.9s' },
      { text: 'Exposing authenticated REST & WebSocket endpoints...', status: 'done', time: '2.4s' },
    ],
    output: '✓ RAG Copilot live. 99.4% answer accuracy with millisecond streaming.',
  },
  {
    title: 'Workflow Automation',
    prompt: 'janusoft-cli pipe create --source stripe-webhooks --sink hubspot-crm --enrich gpt4o',
    steps: [
      { text: 'Validating cryptographic webhook signatures...', status: 'done', time: '0.3s' },
      { text: 'Setting up idempotent dead-letter queue with retry logic...', status: 'done', time: '0.8s' },
      { text: 'Configuring automated customer tier enrichment with LLM...', status: 'done', time: '1.2s' },
      { text: 'Deploying serverless background worker cluster...', status: 'done', time: '1.8s' },
    ],
    output: '✓ Automation pipe active. Zero manual data entry required.',
  },
];

export const TerminalSimulation: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [visibleStepCount, setVisibleStepCount] = useState(1);

  const currentPreset = PRESETS[activeTab];

  useEffect(() => {
    setVisibleStepCount(1);
    const interval = setInterval(() => {
      setVisibleStepCount((prev) => {
        if (prev < currentPreset.steps.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 450);

    return () => clearInterval(interval);
  }, [activeTab, currentPreset.steps.length]);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentPreset.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden glass-panel border border-slate-700/60 shadow-2xl shadow-brand-500/10 dark:shadow-black/60">
      {/* Terminal Top Bar */}
      <div className="bg-slate-900/90 px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <TermIcon className="w-3.5 h-3.5 text-cyber-cyan" />
            janusoft-ai-engine ~ sprint-terminal
          </span>
        </div>

        {/* Preset Selector */}
        <div className="flex items-center gap-1 bg-slate-800/80 rounded-lg p-0.5">
          {PRESETS.map((preset, index) => (
            <button
              key={preset.title}
              onClick={() => setActiveTab(index)}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                activeTab === index
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {preset.title}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-5 font-mono text-xs sm:text-sm bg-slate-950/95 text-slate-200 min-h-[300px] flex flex-col justify-between">
        <div className="space-y-3">
          {/* Active Command */}
          <div className="flex items-start justify-between gap-2 text-slate-300 pb-2 border-b border-slate-800/80">
            <div className="flex items-center gap-2 break-all">
              <span className="text-cyber-cyan font-bold select-none">janusoft:~$</span>
              <span className="text-brand-300 font-semibold">{currentPreset.prompt}</span>
            </div>
            <button
              onClick={handleCopy}
              className="text-slate-500 hover:text-slate-300 p-1 transition-colors flex-shrink-0"
              title="Copy command"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Stepper Output */}
          <div className="space-y-2 pt-1">
            {currentPreset.steps.slice(0, visibleStepCount).map((step, idx) => (
              <div key={idx} className="flex items-center justify-between gap-3 text-slate-300 animate-in fade-in slide-in-from-left-2 duration-300">
                <div className="flex items-center gap-2 truncate">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span className="truncate">{step.text}</span>
                </div>
                <span className="text-[11px] text-slate-500 font-mono flex-shrink-0">{step.time}</span>
              </div>
            ))}

            {visibleStepCount < currentPreset.steps.length && (
              <div className="flex items-center gap-2 text-cyber-cyan animate-pulse">
                <Cpu className="w-3.5 h-3.5" />
                <span>Synthesizing logic with LLM orchestration...</span>
              </div>
            )}
          </div>
        </div>

        {/* Completion Result Banner */}
        {visibleStepCount >= currentPreset.steps.length && (
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between gap-2 animate-in zoom-in-95 duration-200">
            <span className="text-emerald-400 font-bold text-xs sm:text-sm">
              {currentPreset.output}
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-sans font-semibold">
              <Zap className="w-3 h-3 text-amber-400" /> 10x Fast
            </span>
          </div>
        )}
      </div>

      {/* Terminal Footer Info */}
      <div className="bg-slate-900/60 px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Engine Status: Active & Ready for Production Sprints</span>
        </div>
        <span className="hidden sm:inline text-slate-500">Janusoft Dev Matrix 2.4</span>
      </div>
    </div>
  );
};
