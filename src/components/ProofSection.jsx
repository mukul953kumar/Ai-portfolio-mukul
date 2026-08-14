import React from 'react';
import { MUKUL_DATA } from '../data/portfolioData';
import { CheckCircle2, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { Github } from './Icons';

export default function ProofSection({ onSelectProject }) {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">
            <span className="text-zinc-500">06</span>
            <span>VERIFIABLE EVIDENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            PROOF &gt; CLAIMS
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl">
            Don't take my word for it. Every technical claim is backed by real code repositories, commit activity, and live production deployments.
          </p>
        </div>
      </div>

      {/* Proof Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MUKUL_DATA.proofMatrix.map((item, idx) => (
          <div
            key={idx}
            className="glow-card glass-panel rounded-2xl p-6 border border-zinc-800 space-y-4 hover:border-cyan-500/40 transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                CLAIM #{idx + 1}
              </div>
              <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded">
                Verified
              </span>
            </div>

            <h3 className="text-base font-bold text-white">
              "{item.claim}"
            </h3>

            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              <strong className="text-zinc-400 font-mono">Proof Evidence: </strong>
              {item.evidence}
            </p>

            <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs font-mono text-zinc-400 flex items-center justify-between">
              <span>Metrics: {item.metrics}</span>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-2 pt-2 font-mono text-xs">
              <button
                onClick={() => onSelectProject('teamzen')}
                className="px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 flex items-center gap-1"
              >
                <span>Technical Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-700 hover:border-white flex items-center gap-1"
              >
                <span>View Code</span>
                <Github className="w-3 h-3" />
              </a>
              <a
                href={item.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-zinc-900 text-cyan-300 border border-zinc-700 hover:border-cyan-400 flex items-center gap-1"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
