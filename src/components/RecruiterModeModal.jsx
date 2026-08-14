import React, { useState } from 'react';
import { MUKUL_DATA } from '../data/portfolioData';
import {
  UserCheck, X, Copy, Check, Download, ExternalLink, Sparkles, CheckCircle2,
  FileText, Briefcase, Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import mukulAvatar from '../assets/mukul1.png';

export default function RecruiterModeModal({ isOpen, onClose, onAskAI }) {
  const [selectedRole, setSelectedRole] = useState('Full Stack');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const roleProfiles = {
    'Frontend': {
      fitScore: '96%',
      highlight: 'Specialized in React 18, ES6+ JavaScript, Tailwind CSS, component optimization, and dynamic MERN interfaces.',
      keyProjects: ['TeamZen (React Frontend)', 'Resume Generator', 'Streak Aura'],
      primaryTech: ['React.js', 'JavaScript ES6+', 'HTML5/CSS3', 'Tailwind CSS', 'Redux Toolkit']
    },
    'Full Stack': {
      fitScore: '95%',
      highlight: 'End-to-end MERN stack engineering (MongoDB, Express, React, Node). Skilled in REST APIs, state management, and schema design.',
      keyProjects: ['TeamZen (MERN + Socket.io)', 'Campus Split (MERN)', 'Resume Generator'],
      primaryTech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Tailwind CSS']
    },
    'Internship': {
      fitScore: '98%',
      highlight: 'Immediate availability for B.Tech IT 3rd year summer/fall engineering internships. Quick learner with high initiative.',
      keyProjects: ['TeamZen', 'Campus Split', 'Resume Generator', 'Streak Aura'],
      primaryTech: ['React.js', 'JavaScript', 'Node.js', 'MongoDB', 'Git']
    },
    'Full-Time': {
      fitScore: '93%',
      highlight: 'Targeting Junior/Associate Full Stack or Frontend Developer roles upon graduation with proven MERN project track record.',
      keyProjects: ['TeamZen', 'Campus Split', 'Resume Generator'],
      primaryTech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'System Architecture']
    }
  };

  const currentProfile = roleProfiles[selectedRole] || roleProfiles['Full Stack'];

  const handleCopySummary = () => {
    const summaryText = `Candidate: Mukul Kumar (Full Stack MERN Developer & B.Tech IT Student)\nTarget Role: ${selectedRole}\nBest Projects: ${currentProfile.keyProjects.join(
      ', '
    )}\nCore Tech: ${currentProfile.primaryTech.join(
      ', '
    )}\nContact: mukulkumar.dev@gmail.com | github.com/mukul-kumar`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="w-full max-w-3xl glass-panel-glow rounded-2xl flex flex-col overflow-hidden border border-cyan-500/40 shadow-2xl relative font-sans">
        {/* Header */}
        <div className="px-6 py-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white font-mono">
                  RECRUITER MODE — CANDIDATE BRIEF
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Ready to Hire
                </span>
              </div>
              <p className="text-xs text-zinc-400">Tailored technical summary for recruiters & hiring managers</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Role Selector Tabs */}
        <div className="p-4 bg-zinc-950 border-b border-zinc-800 space-y-2">
          <label className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
            What type of candidate role are you looking for?
          </label>
          <div className="flex flex-wrap gap-2">
            {['Frontend', 'Full Stack', 'Internship', 'Full-Time'].map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-4 py-2 rounded-xl font-mono text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedRole === role
                    ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/20'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>{role}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Role Fit Summary */}
        <div className="p-6 space-y-6 text-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-zinc-900/90 border border-zinc-800">
            <div className="flex items-center gap-3">
              <img src={mukulAvatar} alt="Mukul" className="w-14 h-14 object-contain shrink-0 drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]" />
              <div>
                <h4 className="text-xl font-extrabold text-white">Mukul Kumar</h4>
                <p className="text-xs font-mono text-cyan-400 mt-0.5">
                  Full Stack MERN Developer & B.Tech IT Student (3rd Year)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-xs text-zinc-400 font-mono">Role Match Score</div>
                <div className="text-2xl font-black text-emerald-400 font-mono">
                  {currentProfile.fitScore}
                </div>
              </div>
            </div>
          </div>

          {/* Highlight */}
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-cyan-500/20 text-xs text-zinc-300 leading-relaxed">
            <strong className="text-cyan-300 font-mono uppercase block mb-1">Tailored Assessment:</strong>
            {currentProfile.highlight}
          </div>

          {/* Tech Stack & Best Projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
              <h5 className="font-mono text-cyan-400 font-bold uppercase">Primary Skill Alignment</h5>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {currentProfile.primaryTech.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-zinc-950 text-zinc-200 border border-zinc-800 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
              <h5 className="font-mono text-cyan-400 font-bold uppercase">Best Proof MERN Projects</h5>
              <ul className="space-y-1 text-zinc-300 list-disc list-inside">
                {currentProfile.keyProjects.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleCopySummary}
                className="px-4 py-2.5 rounded-xl bg-cyan-500 text-black font-bold flex items-center gap-1.5 hover:bg-cyan-400 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Summary Copied!' : 'Copy Summary for Hiring Team'}</span>
              </button>

              <a
                href="mailto:mukulkumar.dev@gmail.com"
                className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 hover:border-cyan-400 flex items-center gap-1.5"
              >
                <span>Contact Mukul</span>
              </a>
            </div>

            <button
              onClick={() => {
                onClose();
                onAskAI(`Why should we hire Mukul for a ${selectedRole} role?`);
              }}
              className="text-cyan-400 hover:underline flex items-center gap-1"
            >
              <span>Ask AI candidate details</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
