import React, { useState, useEffect, useRef } from 'react';
import {
  Search, Bot, UserCheck, Code2, Cpu, Terminal, FileText, Mail,
  ArrowRight, CornerDownLeft, Sparkles, X
} from 'lucide-react';

export default function CommandPaletteModal({
  isOpen,
  onClose,
  onOpenChat,
  onOpenRecruiterMode,
  onSelectProject
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const commands = [
    {
      id: 'ask-ai',
      category: 'AI Assistant',
      title: 'Ask AI Portfolio Assistant',
      subtitle: 'Ask anything about Mukul’s projects, tech stack, or hire fit',
      icon: Bot,
      action: () => {
        onClose();
        onOpenChat('Hi, tell me about Mukul!');
      }
    },
    {
      id: 'recruiter',
      category: 'Hiring Brief',
      title: 'Launch Recruiter Mode',
      subtitle: 'Tailored technical candidate summary & fit score',
      icon: UserCheck,
      action: () => {
        onClose();
        onOpenRecruiterMode();
      }
    },
    {
      id: 'teamzen',
      category: 'Flagship Project',
      title: 'Inspect TeamZen Architecture',
      subtitle: 'Teammate finding portal (React, Node, Express, MongoDB)',
      icon: Code2,
      action: () => {
        onClose();
        onSelectProject('teamzen');
      }
    },
    {
      id: 'projects',
      category: 'Navigation',
      title: 'Jump to Featured Engineering Projects',
      subtitle: 'Explore TeamZen, DevPulse, ShopSphere & AlgoVisualizer',
      icon: Code2,
      action: () => {
        onClose();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'skills',
      category: 'Navigation',
      title: 'View Developer DNA & Skills',
      subtitle: 'Honest skill breakdown (Primary, Working Knowledge, Learning)',
      icon: Cpu,
      action: () => {
        onClose();
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'process',
      category: 'Navigation',
      title: 'Inspect How I Think & Build Process',
      subtitle: '7-step engineering problem solving methodology',
      icon: Terminal,
      action: () => {
        onClose();
        document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'resume',
      category: 'Navigation',
      title: 'View / Download Resume',
      subtitle: 'AI resume summary & B.Tech education details',
      icon: FileText,
      action: () => {
        onClose();
        document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'contact',
      category: 'Navigation',
      title: 'Contact Mukul Kumar',
      subtitle: 'Direct email, LinkedIn, GitHub & contact form',
      icon: Mail,
      action: () => {
        onClose();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(query.toLowerCase()) ||
      cmd.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/85 backdrop-blur-md">
      <div
        onKeyDown={handleKeyDown}
        className="w-full max-w-2xl glass-panel-glow rounded-2xl border border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col font-mono text-xs"
      >
        {/* Search Bar */}
        <div className="p-4 bg-zinc-950 border-b border-zinc-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search (e.g. TeamZen, Resume, Recruiter)..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-white text-sm placeholder-zinc-500 focus:outline-none"
          />
          <span className="hidden sm:inline-block px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400">
            ESC
          </span>
          <button onClick={onClose} className="p-1 rounded text-zinc-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Commands List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="p-8 text-center text-zinc-500 font-sans text-xs">
              No matching commands found. Try searching "TeamZen", "Resume", or "Ask AI".
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const IconComp = cmd.icon;
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-xl flex items-center justify-between transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500/10 border border-cyan-500/40 text-cyan-300'
                      : 'hover:bg-zinc-900 border border-transparent text-zinc-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-cyan-500 text-black'
                          : 'bg-zinc-900 border border-zinc-800 text-zinc-400'
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white flex items-center gap-2">
                        <span>{cmd.title}</span>
                        <span className="text-[10px] px-2 py-0.2 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                          {cmd.category}
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-400 font-sans mt-0.5">
                        {cmd.subtitle}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="flex items-center gap-1 text-[10px] text-cyan-400 font-mono">
                      <span>Jump</span>
                      <CornerDownLeft className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer Navigation Hints */}
        <div className="p-3 bg-zinc-950/80 border-t border-zinc-800 flex items-center justify-between text-[10px] text-zinc-500">
          <div className="flex items-center gap-3">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
            <span>ESC to exit</span>
          </div>
          <span className="text-cyan-400">Ctrl + K Command Palette</span>
        </div>
      </div>
    </div>
  );
}
