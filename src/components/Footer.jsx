import React from 'react';
import { ArrowUp, Code2, Bot, Heart } from 'lucide-react';

export default function Footer({ onOpenChat, onOpenRecruiterMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800 bg-[#050507] text-zinc-400 py-12 px-4 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
            <Code2 className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <div className="text-white font-bold text-sm">MUKUL KUMAR</div>
            <div className="text-[11px] text-zinc-500">Interactive AI Developer Portfolio © 2026</div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-400">
          <button onClick={onOpenChat} className="hover:text-cyan-400 flex items-center gap-1">
            <Bot className="w-3.5 h-3.5 text-cyan-400" />
            <span>Ask AI</span>
          </button>
          <span>·</span>
          <button onClick={onOpenRecruiterMode} className="hover:text-cyan-400">
            Recruiter Mode
          </button>
          <span>·</span>
          <a href="https://github.com/mukul-kumar" target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </a>
          <span>·</span>
          <a href="https://linkedin.com/in/mukul-kumar" target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-400 text-zinc-300 hover:text-white flex items-center gap-1.5 transition-all"
        >
          <span>Back to top</span>
          <ArrowUp className="w-4 h-4 text-cyan-400" />
        </button>
      </div>
    </footer>
  );
}
