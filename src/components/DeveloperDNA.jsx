import React, { useState } from 'react';
import { MUKUL_DATA } from '../data/portfolioData';
import { Cpu, CheckCircle2, Bot, Sparkles, Code2, ShieldAlert, ArrowRight } from 'lucide-react';

export default function DeveloperDNA({ onAskAI }) {
  const [activeTab, setActiveTab] = useState('Primary');

  const categories = [
    { id: 'Primary', label: 'Primary Stack', count: '7 Skills' },
    { id: 'Working Knowledge', label: 'Working Knowledge', count: '5 Skills' },
    { id: 'Learning', label: 'Active Learning', count: '4 Skills' },
    { id: 'Exploring', label: 'Exploring', count: '3 Skills' }
  ];

  const currentCategoryGroup = MUKUL_DATA.developerDNA.categories.find(
    (cat) => cat.level === activeTab
  ) || MUKUL_DATA.developerDNA.categories[0];

  return (
    <section id="skills" className="py-16 px-4 max-w-7xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">
            <span className="text-zinc-500">02</span>
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            MY DEVELOPER DNA
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl">
            Honest, transparent skill categorization. Daily core expertise separated from active learning goals.
          </p>
        </div>

        {/* Category Pill Switcher */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-2 rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300 font-semibold shadow-lg shadow-cyan-500/10'
                  : 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <span>{cat.label}</span>
              <span className="text-[10px] opacity-60 font-normal">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Category Content */}
      <div className="space-y-4">
        {/* Category Description Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold shrink-0 ${currentCategoryGroup.badgeColor}`}>
              {currentCategoryGroup.level}
            </span>
            <p className="text-zinc-300 font-sans">
              {currentCategoryGroup.description}
            </p>
          </div>
          <span className="text-zinc-500 font-mono text-[11px] shrink-0">
            Click any skill to test AI
          </span>
        </div>

        {/* Concise Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {currentCategoryGroup.skills.map((skill, sIdx) => (
            <div
              key={sIdx}
              onClick={() => onAskAI(`Does Mukul know ${skill.name}? What is his experience with it?`)}
              className="glow-card p-4 rounded-xl bg-zinc-900/70 border border-zinc-800/90 hover:border-cyan-500/40 space-y-2.5 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between font-mono">
                <span className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs text-cyan-400 font-semibold">
                  {skill.rating}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 rounded-full bg-zinc-950 overflow-hidden border border-zinc-800">
                <div
                  className={`h-full bg-gradient-to-r ${currentCategoryGroup.color} rounded-full transition-all duration-700`}
                  style={{ width: `${skill.rating}%` }}
                />
              </div>

              {/* Note / Tooltip */}
              <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-0.5 font-sans">
                <span className="line-clamp-1">{skill.note}</span>
                <Bot className="w-3.5 h-3.5 text-zinc-600 group-hover:text-cyan-400 shrink-0 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Concise Honest AI Guarantee Banner */}
      <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
        <div className="flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="text-zinc-300">
            <strong>Honest AI Guarantee:</strong> Test how the portfolio AI handles unlearned tech (e.g. Next.js).
          </span>
        </div>

        <button
          onClick={() => onAskAI("Does Mukul know Next.js?")}
          className="glow-cyan-button px-3.5 py-1.5 rounded-lg bg-cyan-500 text-black font-bold shrink-0 hover:bg-cyan-400 transition-colors"
        >
          Test AI (e.g. Next.js)
        </button>
      </div>
    </section>
  );
}
