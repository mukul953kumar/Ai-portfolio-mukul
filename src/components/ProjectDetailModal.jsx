import React, { useState } from 'react';
import {
  X, ExternalLink, Layers, ShieldAlert, Zap, BookOpen,
  Bot, ArrowRight, CheckCircle2, Code2, Database, Cpu, ChevronRight, Terminal
} from 'lucide-react';
import { Github } from './Icons';

export default function ProjectDetailModal({ project, onClose, onAskAI }) {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="w-full max-w-4xl max-h-[90vh] glass-panel rounded-2xl flex flex-col overflow-hidden border border-zinc-800 shadow-2xl relative">
        {/* Header */}
        <div className="px-6 py-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              {project.badge || 'Engineering Story'}
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white font-mono">
              PROJECT: {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 overflow-y-auto space-y-8 text-zinc-300 text-sm leading-relaxed">
          {/* Subtitle & Hero CTA */}
          <div className="space-y-4 border-b border-zinc-800/80 pb-6">
            <p className="text-base sm:text-lg text-zinc-200 font-medium">
              {project.subtitle}
            </p>
            <p className="text-zinc-400 font-mono text-xs">
              "{project.tagline}"
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="glow-cyan-button px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold text-xs font-mono flex items-center gap-1.5"
              >
                <span>LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs font-mono hover:border-zinc-500 flex items-center gap-1.5"
              >
                <span>GITHUB REPO</span>
                <Github className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => {
                  onClose();
                  onAskAI(`Tell me about ${project.title}'s architecture and challenges.`);
                }}
                className="px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono hover:bg-cyan-500/20 flex items-center gap-1.5"
              >
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>Ask AI about {project.title}</span>
              </button>
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/70 border border-red-500/20 rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold tracking-wider">
                <ShieldAlert className="w-4 h-4" />
                PROBLEM STATEMENT
              </div>
              <p className="text-zinc-300 text-xs sm:text-sm">
                {project.problem}
              </p>
            </div>

            <div className="bg-zinc-900/70 border border-emerald-500/20 rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                ENGINEERING SOLUTION
              </div>
              <p className="text-zinc-300 text-xs sm:text-sm">
                {project.solution}
              </p>
            </div>
          </div>

          {/* INTERACTIVE SYSTEM ARCHITECTURE VISUALIZER */}
          {project.architecture && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-mono text-xs text-zinc-400 uppercase tracking-wider font-bold flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400 animate-pulse" />
                  INTERACTIVE SYSTEM ARCHITECTURE FLOW
                </h4>
                <span className="text-[11px] font-mono text-zinc-500">
                  Click any layer node to inspect
                </span>
              </div>

              {/* Interactive Node Pipeline Switcher */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {project.architecture.map((item, idx) => {
                  const isSelected = selectedLayerIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedLayerIndex(idx)}
                      className={`p-3 rounded-xl border font-mono text-xs text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300 shadow-md shadow-cyan-500/10 scale-105'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-zinc-500">LAYER 0{idx + 1}</span>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>}
                      </div>
                      <div className="font-bold text-white mt-1 text-xs">{item.layer}</div>
                      <div className="text-[10px] text-cyan-400 mt-0.5 truncate">{item.tech}</div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Architecture Layer Inspector Panel */}
              {project.architecture[selectedLayerIndex] && (
                <div className="p-4 rounded-xl bg-zinc-950 border border-cyan-500/30 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-cyan-400">
                    <span className="font-bold text-sm">
                      Layer 0{selectedLayerIndex + 1}: {project.architecture[selectedLayerIndex].layer}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-cyan-300">
                      {project.architecture[selectedLayerIndex].tech}
                    </span>
                  </div>
                  <p className="text-zinc-300 font-sans text-xs leading-relaxed pt-1">
                    {project.architecture[selectedLayerIndex].detail}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Key Features */}
          {project.keyFeatures && (
            <div className="space-y-3">
              <h4 className="font-mono text-xs text-zinc-400 uppercase tracking-wider font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                KEY ENGINEERING FEATURES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges & Solutions */}
          {project.challenges && (
            <div className="space-y-3">
              <h4 className="font-mono text-xs text-zinc-400 uppercase tracking-wider font-bold flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-purple-400" />
                HARDEST ENGINEERING CHALLENGES
              </h4>
              <div className="space-y-3">
                {project.challenges.map((chal, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-2 text-xs"
                  >
                    <h5 className="font-bold text-white text-sm">{chal.title}</h5>
                    <p className="text-red-300/90">
                      <strong className="text-red-400">Issue:</strong> {chal.issue}
                    </p>
                    <p className="text-emerald-300/90">
                      <strong className="text-emerald-400">Resolution:</strong> {chal.resolution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Learnings */}
          {project.learnings && (
            <div className="space-y-3">
              <h4 className="font-mono text-xs text-zinc-400 uppercase tracking-wider font-bold flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                KEY TAKEAWAYS & LESSONS LEARNED
              </h4>
              <ul className="space-y-2 list-disc list-inside text-xs text-zinc-300 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                {project.learnings.map((learn, idx) => (
                  <li key={idx}>{learn}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
