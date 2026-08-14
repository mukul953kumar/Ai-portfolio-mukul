import React, { useState, useEffect } from 'react';
import { MUKUL_DATA } from '../data/portfolioData';
import {
  HelpCircle, Layout, Database, Code, ShieldAlert, Zap, Rocket,
  ArrowRight, Bot, Sparkles, Play, Pause, CheckCircle2, ChevronRight, Terminal
} from 'lucide-react';

export default function HowIThink({ onAskAI }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const iconMap = {
    HelpCircle: HelpCircle,
    Layout: Layout,
    Database: Database,
    Code: Code,
    ShieldAlert: ShieldAlert,
    Zap: Zap,
    Rocket: Rocket
  };

  // Auto Simulation Timer
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStepIndex((prev) => (prev + 1) % MUKUL_DATA.howIThink.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeItem = MUKUL_DATA.howIThink[activeStepIndex];
  const ActiveIcon = iconMap[activeItem.icon] || Code;

  // Extra context details for each step to make it rich & educational
  const stepExtraInfo = [
    {
      action: "Identifies core pain points & defines strict functional requirements.",
      tools: "User Stories, Pain Point Mapping, Problem Scope Docs",
      outcome: "Clear understanding of the 'Why' before writing a single line of code."
    },
    {
      action: "Sketches intuitive user journeys and component states.",
      tools: "Framer Sketches, Component State Specs, Responsive Breakpoints",
      outcome: "Seamless user experience with predictable UI state transitions."
    },
    {
      action: "Architects MongoDB document schemas or database collections.",
      tools: "Sequelize ORM, ER Diagrams, REST API Endpoint Specs",
      outcome: "High data integrity and non-redundant database query performance."
    },
    {
      action: "Codes modular React components and Node.js REST API controllers.",
      tools: "React 18, ES6+ JS, Express.js, Custom Hooks",
      outcome: "A functional working prototype ready for real-world testing."
    },
    {
      action: "Validates input sanitization, error boundaries, and async network delays.",
      tools: "Error Handling Middleware, Edge Case Testing, Form Validation",
      outcome: "Resilient application that doesn't crash on bad inputs."
    },
    {
      action: "Optimizes SQL indices, reduces React re-renders, and cleans up code.",
      tools: "React DevTools, Database Indexing, Code Refactoring",
      outcome: "Lightning-fast page load speeds and clean, readable codebases."
    },
    {
      action: "Deploys frontend to Vercel and configures cloud environment variables.",
      tools: "Vercel, Git CI/CD, SSL/HTTPS Security",
      outcome: "Production-ready web application accessible worldwide."
    }
  ];

  const currentExtra = stepExtraInfo[activeStepIndex] || stepExtraInfo[0];

  return (
    <section id="process" className="py-20 px-4 max-w-7xl mx-auto space-y-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">
            <span className="text-zinc-500">04</span>
            <span>ENGINEERING METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            HOW I THINK & BUILD
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl">
            Click any stage in the interactive pipeline or launch the auto-simulation to inspect my 7-step engineering process.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Simulation Toggle Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer border ${
              isPlaying
                ? 'bg-amber-500/20 border-amber-500 text-amber-300 animate-pulse'
                : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white hover:border-cyan-400'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4 text-amber-400" /> : <Play className="w-4 h-4 text-cyan-400" />}
            <span>{isPlaying ? 'Pause Workflow' : 'Auto Simulate Workflow'}</span>
          </button>

          <button
            onClick={() => onAskAI("How does Mukul approach problem solving and system design?")}
            className="glow-cyan-button px-4 py-2.5 rounded-xl bg-cyan-500 text-black font-semibold text-xs font-mono flex items-center gap-2 shrink-0"
          >
            <Bot className="w-4 h-4" />
            <span className="hidden sm:inline">Ask AI</span>
          </button>
        </div>
      </div>

      {/* Interactive Step Pipeline Nodes */}
      <div className="overflow-x-auto pb-2">
        <div className="flex items-center justify-between min-w-[700px] bg-zinc-950/80 p-3 rounded-2xl border border-zinc-800">
          {MUKUL_DATA.howIThink.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Code;
            const isActive = activeStepIndex === idx;
            return (
              <React.Fragment key={idx}>
                <button
                  onClick={() => {
                    setActiveStepIndex(idx);
                    setIsPlaying(false);
                  }}
                  className={`flex flex-col items-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/40 shadow-lg shadow-cyan-500/10 scale-105'
                      : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                    isActive ? 'bg-cyan-500 text-black' : 'bg-zinc-900 border border-zinc-800 text-zinc-400'
                  }`}>
                    {item.step}
                  </div>
                  <span className="text-[11px] font-mono whitespace-nowrap">{item.title.split(' ')[0]}</span>
                </button>

                {idx < MUKUL_DATA.howIThink.length - 1 && (
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-colors ${
                    activeStepIndex > idx ? 'text-cyan-400' : 'text-zinc-800'
                  }`} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Selected Step Deep Inspector Stage */}
      <div className="glass-panel-glow rounded-2xl p-6 sm:p-8 border border-cyan-500/30 space-y-6 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
              <ActiveIcon className="w-7 h-7 text-cyan-400 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold">
                <span>STAGE {activeItem.step} OF 07</span>
                <span>•</span>
                <span className="text-amber-400 font-normal">{activeItem.subtitle}</span>
              </div>
              <h3 className="text-2xl font-black text-white mt-0.5">
                {activeItem.title}
              </h3>
            </div>
          </div>

          <button
            onClick={() => onAskAI(`Explain Mukul's process during Stage ${activeItem.step}: ${activeItem.title}`)}
            className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-cyan-400 text-cyan-300 font-mono text-xs flex items-center gap-1.5 self-start sm:self-auto"
          >
            <Bot className="w-4 h-4 text-cyan-400" />
            <span>Ask AI about Stage {activeItem.step}</span>
          </button>
        </div>

        {/* Step Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-1.5">
            <div className="text-cyan-400 font-mono font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Action Focus
            </div>
            <p className="text-zinc-300 leading-relaxed">
              {currentExtra.action}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-1.5">
            <div className="text-cyan-400 font-mono font-bold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              Tools & Methodologies
            </div>
            <p className="text-zinc-300 leading-relaxed font-mono text-[11px]">
              {currentExtra.tools}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-1.5">
            <div className="text-emerald-400 font-mono font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Stage Outcome
            </div>
            <p className="text-zinc-300 leading-relaxed">
              {currentExtra.outcome}
            </p>
          </div>
        </div>

        {/* Description Overview */}
        <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs text-zinc-300 leading-relaxed">
          <strong className="text-white font-mono uppercase block mb-1">Stage Overview:</strong>
          {activeItem.description}
        </div>
      </div>

      {/* All 7 Stages Cards Grid (Clickable to Select) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {MUKUL_DATA.howIThink.map((item, idx) => {
          const IconComponent = iconMap[item.icon] || Code;
          const isSelected = activeStepIndex === idx;
          return (
            <div
              key={idx}
              onClick={() => {
                setActiveStepIndex(idx);
                setIsPlaying(false);
              }}
              className={`glow-card rounded-2xl p-5 border space-y-3 transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-zinc-900 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                  : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`text-2xl font-black font-mono ${isSelected ? 'text-cyan-400' : 'text-zinc-600'}`}>
                    {item.step}
                  </span>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-cyan-500/10 border border-cyan-500/40 text-cyan-400' : 'bg-zinc-900 border border-zinc-800 text-zinc-500'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <h3 className={`text-base font-bold mt-3 transition-colors ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                  {item.title}
                </h3>
                <p className="text-xs text-cyan-400 font-mono mt-0.5">
                  {item.subtitle}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>{isSelected ? 'Inspecting Stage' : 'Click to inspect'}</span>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-cyan-400' : ''}`} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
