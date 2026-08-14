import React, { useState } from 'react';
import { MUKUL_DATA } from '../data/portfolioData';
import { Calendar, ChevronDown, ChevronUp, Award, Rocket, Code2, Sparkles } from 'lucide-react';

export default function Journey() {
  const [expandedYear, setExpandedYear] = useState('2026');

  return (
    <section id="journey" className="py-20 px-4 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">
            <span className="text-zinc-500">05</span>
            <span>GROWTH TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            DEVELOPER JOURNEY
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl">
            My progression from web fundamentals in 2024 to full-stack engineering, real-world projects, and production readiness in 2026.
          </p>
        </div>
      </div>

      {/* Interactive Timeline */}
      <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-32 space-y-8">
        {MUKUL_DATA.journey.map((item) => {
          const isExpanded = expandedYear === item.year;
          return (
            <div key={item.year} className="relative pl-6 md:pl-8 group">
              {/* Year Dot Marker */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all cursor-pointer ${
                  isExpanded
                    ? 'bg-cyan-400 border-cyan-300 shadow-lg shadow-cyan-500/50 scale-125'
                    : 'bg-zinc-900 border-zinc-700 group-hover:border-cyan-400'
                }`}
              />

              {/* Year Label (Absolute Left on Desktop) */}
              <div className="md:absolute md:-left-28 md:top-0 font-mono font-bold text-lg text-cyan-400 mb-1 md:mb-0">
                {item.year}
              </div>

              {/* Milestone Card */}
              <div
                onClick={() => setExpandedYear(isExpanded ? null : item.year)}
                className={`glass-panel rounded-2xl p-5 border transition-all cursor-pointer space-y-3 ${
                  isExpanded ? 'border-cyan-500/40 bg-zinc-900/80 shadow-xl' : 'border-zinc-800 hover:border-zinc-700 bg-zinc-900/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                      {item.milestone}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">
                      {item.title}
                    </h3>
                  </div>

                  <button className="p-2 rounded-lg bg-zinc-800 text-zinc-400 group-hover:text-white">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="pt-4 border-t border-zinc-800 space-y-3 animate-fadeIn">
                    <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-cyan-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs flex items-start gap-2">
                      <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-300 font-mono">Key Milestone: </strong>
                        <span className="text-zinc-300">{item.keyAchievement}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
