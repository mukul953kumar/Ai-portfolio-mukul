import React, { useState, useEffect } from 'react';
import { Bot, UserCheck, Volume2, VolumeX, Sparkles, Home, Code2, Cpu, FileText, User, Search } from 'lucide-react';
import mukulAvatar from '../assets/mukul1.png';

export default function Navbar({
  onOpenChat,
  onOpenRecruiterMode,
  onOpenCommandPalette,
  voiceEnabled,
  setVoiceEnabled,
  activeSection,
  setActiveSection
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'process', label: 'Process' },
    { id: 'journey', label: 'Journey' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* DESKTOP SLEEK FLOATING NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-40 pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none">
        <div
          className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2.5 border ${
            scrolled
              ? 'bg-zinc-950/85 backdrop-blur-xl border-zinc-800/90 shadow-2xl shadow-black/80'
              : 'bg-zinc-900/40 backdrop-blur-md border-zinc-800/50'
          }`}
        >
          {/* Brand Logo & Name */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group cursor-pointer shrink-0"
          >
            <img
              src={mukulAvatar}
              alt="Mukul"
              className="w-8 h-8 object-contain shrink-0 drop-shadow-[0_0_6px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-xs sm:text-sm tracking-wide group-hover:text-cyan-300 transition-colors">
                  MUKUL KUMAR
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              </div>
              <span className="text-[10px] text-zinc-400 font-mono hidden sm:block">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Clean Navigation */}
          <nav className="hidden md:flex items-center space-x-1 text-xs font-mono">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'text-cyan-300 bg-cyan-500/10 font-medium'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2">
            {/* Command Palette (Ctrl + K) Button */}
            <button
              onClick={onOpenCommandPalette}
              title="Open Command Palette (Ctrl + K)"
              className="px-2.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-cyan-400/50 transition-all font-mono text-xs hidden lg:flex items-center gap-1.5 cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[10px] bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-800 text-zinc-400 font-mono">
                ⌘K
              </span>
            </button>

            {/* Voice Mute/ON Toggle */}
            <button
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              title={voiceEnabled ? 'Voice output ON' : 'Voice output muted'}
              className={`p-2 rounded-xl border transition-all text-xs flex items-center gap-1 ${
                voiceEnabled
                  ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-400'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              {voiceEnabled ? (
                <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4 text-zinc-500" />
              )}
            </button>

            {/* Recruiter Mode Button */}
            <button
              onClick={onOpenRecruiterMode}
              className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-700/80 text-cyan-300 hover:border-cyan-400 transition-all font-mono text-xs hidden sm:flex items-center gap-1.5 shadow-sm"
            >
              <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Recruiter Mode</span>
            </button>

            {/* Ask AI Button */}
            <button
              onClick={onOpenChat}
              className="glow-cyan-button px-3.5 py-1.5 rounded-xl bg-cyan-500 text-black font-semibold font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-cyan-500/20"
            >
              <Bot className="w-4 h-4" />
              <span className="hidden sm:inline">Ask AI</span>
              <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FUTURISTIC FLOATING BOTTOM NAVIGATION DOCK */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-40">
        <div className="glass-panel-glow bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-2xl px-3 py-2 shadow-2xl flex items-center justify-around font-mono text-[11px]">
          {/* Home */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('about');
            }}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeSection === 'about' ? 'text-cyan-400' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </button>

          {/* Projects */}
          <button
            onClick={() => scrollToSection('projects')}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeSection === 'projects' ? 'text-cyan-400' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Projects</span>
          </button>

          {/* Center ASK AI Button */}
          <button
            onClick={onOpenChat}
            className="glow-cyan-button -mt-5 p-3 rounded-2xl bg-cyan-500 text-black font-bold flex flex-col items-center gap-0.5 shadow-lg shadow-cyan-500/40 border-2 border-zinc-950"
          >
            <Bot className="w-5 h-5 animate-pulse" />
            <span className="text-[10px]">Ask AI</span>
          </button>

          {/* Recruiter Mode */}
          <button
            onClick={onOpenRecruiterMode}
            className="flex flex-col items-center gap-1 text-zinc-400 hover:text-cyan-300 transition-colors"
          >
            <UserCheck className="w-4 h-4 text-cyan-400" />
            <span>Recruiter</span>
          </button>

          {/* Resume */}
          <button
            onClick={() => scrollToSection('resume')}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeSection === 'resume' ? 'text-cyan-400' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </button>
        </div>
      </div>
    </>
  );
}
