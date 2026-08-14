import React, { useState } from 'react';
import { MUKUL_DATA } from '../data/portfolioData';
import {
  Code2, ExternalLink, ArrowRight, Bot, Sparkles, Layers, CheckCircle2, Star,
  Search, ShieldAlert, Cpu, Terminal, Zap
} from 'lucide-react';
import { Github } from './Icons';
import ProjectDetailModal from './ProjectDetailModal';

export default function Projects({ onAskAI, selectedProjectId, setSelectedProjectId }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Full Stack', 'AI & Web Apps', 'Frontend & DSA'];

  const filteredProjects = MUKUL_DATA.projects.filter((proj) => {
    const matchesFilter =
      activeFilter === 'All' ||
      proj.category.toLowerCase().includes(activeFilter.toLowerCase());
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const flagshipProject = MUKUL_DATA.projects.find((p) => p.id === 'teamzen');
  const activeProjectModal = MUKUL_DATA.projects.find((p) => p.id === selectedProjectId);

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto space-y-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">
            <span className="text-zinc-500">03</span>
            <span>ENGINEERING SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl">
            Practical products built with React, Node.js, Express, MongoDB, and Tailwind CSS. Click any project to inspect its architecture, engineering story, or ask AI.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech or project..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-zinc-950 border border-zinc-800 focus:border-cyan-400 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none font-mono"
            />
          </div>

          <div className="flex flex-wrap gap-1 font-mono text-xs">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300 font-semibold shadow-md shadow-cyan-500/10'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FLAGSHIP HERO SPOTLIGHT CARD (TeamZen) */}
      {flagshipProject && (activeFilter === 'All' || activeFilter === 'Full Stack') && !searchQuery && (
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-cyan-500/40 relative overflow-hidden space-y-6 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  ⚡ FLAGSHIP PRODUCT SHOWCASE
                </span>
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  42 Stars · 180 Commits
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                TeamZen — Teammate Finder for B.Tech Students
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                {flagshipProject.problem}
              </p>

              {/* Architecture Flow Pills */}
              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-1.5 font-mono text-xs">
                <div className="text-cyan-400 font-bold text-[11px] uppercase flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  Live System Architecture Flow
                </div>
                <div className="flex flex-wrap items-center gap-2 text-zinc-300">
                  <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-cyan-300">
                    React 18 + Vite
                  </span>
                  <span>➔</span>
                  <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-blue-300">
                    Node.js + Express
                  </span>
                  <span>➔</span>
                  <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-emerald-300">
                    MongoDB Atlas
                  </span>
                  <span>➔</span>
                  <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-purple-300">
                    Socket.io WebSockets
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Hero Actions & Stats */}
            <div className="flex flex-col gap-3 shrink-0 justify-center">
              <button
                onClick={() => setSelectedProjectId('teamzen')}
                className="glow-cyan-button px-5 py-3 rounded-2xl bg-cyan-500 text-black font-bold font-mono text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/25"
              >
                <span>Read Engineering Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onAskAI("How does team matching work in TeamZen?")}
                className="px-5 py-2.5 rounded-2xl bg-zinc-900 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-mono text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>Ask AI: How TeamZen Works?</span>
              </button>

              <div className="flex items-center justify-center gap-3 pt-1 font-mono text-xs">
                <a
                  href={flagshipProject.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white flex items-center gap-1.5"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
                <a
                  href={flagshipProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white flex items-center gap-1.5"
                >
                  <span>GitHub</span>
                  <Github className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ALL PROJECTS GRID DISPLAY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className={`glow-card glass-panel rounded-2xl p-6 flex flex-col justify-between border transition-all relative group ${
              proj.featured ? 'border-cyan-500/30 bg-zinc-900/60' : 'border-zinc-800/80 bg-zinc-900/40'
            }`}
          >
            {/* Header & Badges */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                  proj.featured
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                    : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                }`}>
                  {proj.badge}
                </span>

                <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono">
                  {proj.stats?.commits && <span>{proj.stats.commits} commits</span>}
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <span>{proj.title}</span>
                  <span className="text-xs font-mono text-zinc-500 font-normal">
                    — {proj.category}
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1 font-medium">
                  {proj.subtitle}
                </p>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                {proj.tagline}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {proj.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-cyan-300 text-[11px] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Interactive AI Prompt Chips inside Project Card */}
              {proj.aiPrompts && (
                <div className="pt-2">
                  <div className="text-[10px] font-mono text-zinc-500 mb-1">Quick Ask AI:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.aiPrompts.slice(0, 2).map((promptText, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => onAskAI(promptText)}
                        className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 text-zinc-400 hover:text-cyan-300 text-[10px] font-mono transition-colors text-left"
                      >
                        "{promptText}"
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Card Footer Actions */}
            <div className="pt-5 mt-5 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedProjectId(proj.id)}
                  className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <span>Engineering Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={proj.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-cyan-400 text-cyan-300 flex items-center gap-1 transition-all"
                >
                  <span>Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-white text-zinc-300 flex items-center gap-1 transition-all"
                >
                  <span>Code</span>
                  <Github className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Deep Dive Story Modal */}
      {selectedProjectId && (
        <ProjectDetailModal
          project={activeProjectModal}
          onClose={() => setSelectedProjectId(null)}
          onAskAI={onAskAI}
        />
      )}
    </section>
  );
}
