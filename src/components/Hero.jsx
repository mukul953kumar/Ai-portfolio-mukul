import React, { useState } from 'react';
import { Bot, Sparkles, Send, ArrowRight, User, Terminal, Code2, Cpu, CheckCircle2 } from 'lucide-react';
import mukulAvatar from '../assets/mukul1.png';

export default function Hero({ onSendPrompt, onOpenRecruiterMode, onSelectProject }) {
  const [inputPrompt, setInputPrompt] = useState('');

  const suggestedPrompts = [
    { text: 'Who is Mukul?', icon: User, tag: 'Bio' },
    { text: 'Explore my projects', icon: Code2, tag: 'Projects' },
    { text: 'Why should you hire me?', icon: CheckCircle2, tag: 'Recruiter' },
    { text: 'Show my tech stack', icon: Cpu, tag: 'Skills' },
    { text: 'What was his role in TeamZen?', icon: Terminal, tag: 'TeamZen' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputPrompt.trim()) return;
    onSendPrompt(inputPrompt);
    setInputPrompt('');
  };

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
      {/* Subtle Glow Backdrop */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        {/* Profile Avatar PNG (Free Floating) */}
        <div className="relative inline-block group">
          <img
            src={mukulAvatar}
            alt="Mukul Kumar"
            className="w-32 h-32 sm:w-44 sm:h-44 mx-auto object-contain drop-shadow-[0_0_25px_rgba(0,240,255,0.35)] group-hover:drop-shadow-[0_0_35px_rgba(0,240,255,0.6)] transition-all duration-500 group-hover:scale-105 cursor-pointer"
          />
        </div>

        {/* Status Badge */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-zinc-400">Available for Opportunities</span>
            <span className="text-zinc-600">|</span>
            <span className="text-cyan-400 font-semibold">B.Tech IT (3rd Year)</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            MUKUL KUMAR
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-cyan-200 to-zinc-400">
            Full Stack Developer & React Engineer
          </p>
          <p className="text-base sm:text-lg text-cyan-400/90 font-mono tracking-wide">
            "Don't browse my portfolio. Talk to it."
          </p>
        </div>

        {/* Interactive AI Query Box */}
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="relative glass-panel-glow rounded-2xl p-2 sm:p-2.5 transition-all shadow-2xl group focus-within:border-cyan-400/60"
          >
            <div className="flex items-center gap-3 px-3">
              <Bot className="w-6 h-6 text-cyan-400 shrink-0 animate-pulse" />
              <input
                type="text"
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                placeholder="Ask me anything about Mukul..."
                className="w-full bg-transparent text-white placeholder-zinc-500 focus:outline-none text-sm sm:text-base py-3"
              />
              <button
                type="submit"
                className="glow-cyan-button px-4 py-2.5 rounded-xl bg-cyan-500 text-black font-semibold text-xs sm:text-sm font-mono flex items-center gap-2 cursor-pointer hover:bg-cyan-400 shrink-0"
              >
                <span>Ask AI</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Quick Prompt Chips */}
          <div className="mt-6 space-y-3">
            <p className="text-xs text-zinc-500 font-mono tracking-wider uppercase">
              Suggested Prompts
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {suggestedPrompts.map((prompt, idx) => {
                const IconComponent = prompt.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => onSendPrompt(prompt.text)}
                    className="px-3.5 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800/90 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-zinc-300 hover:text-cyan-300 text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer group shadow-sm"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>{prompt.text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Hero CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 font-mono text-xs sm:text-sm">
          <button
            onClick={onOpenRecruiterMode}
            className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-300 font-medium transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/5"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Launch Recruiter Mode</span>
          </button>
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-all flex items-center gap-2"
          >
            <span>Explore Engineering Projects</span>
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
