import React from 'react';
import { MUKUL_DATA } from '../data/portfolioData';
import { FileText, Download, ExternalLink, Bot, CheckCircle2, GraduationCap, Code2, Award } from 'lucide-react';
import mukulAvatar from '../assets/mukul1.png';

export default function ResumeIntelligence({ onAskAI }) {
  return (
    <section id="resume" className="py-20 px-4 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">
            <span className="text-zinc-500">06</span>
            <span>RESUME INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Curriculum Vitae & Resume
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl">
            Read a instant AI-generated summary of Mukul's resume, inspect his education details, or download the complete PDF copy.
          </p>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <button
            onClick={() => onAskAI("Give me a quick 3-bullet summary of Mukul's resume.")}
            className="glow-cyan-button px-4 py-2.5 rounded-xl bg-cyan-500 text-black font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            <Bot className="w-4 h-4" />
            <span>Summarize with AI</span>
          </button>
        </div>
      </div>

      {/* Resume Card Display */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Quick Summary */}
        <div className="glass-panel rounded-2xl p-6 border border-zinc-800 space-y-6 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src={mukulAvatar} alt="Mukul" className="w-12 h-12 object-contain shrink-0 drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]" />
            <div>
              <h3 className="font-bold text-white text-base">Resume Overview</h3>
              <p className="text-xs text-zinc-400 font-mono">PDF Document Ready</p>
            </div>
          </div>

          <div className="space-y-4 text-xs text-zinc-300">
            <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
              <div className="font-bold text-white flex items-center gap-1.5 font-mono">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                Education
              </div>
              <p className="text-zinc-300 font-medium">B.Tech in Information Technology</p>
              <p className="text-zinc-500">2023 – 2027 | 3rd Year</p>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
              <div className="font-bold text-white flex items-center gap-1.5 font-mono">
                <Code2 className="w-4 h-4 text-cyan-400" />
                Core MERN Technologies
              </div>
              <p className="text-zinc-300">React.js, Node.js, Express.js, MongoDB, JavaScript ES6+, Tailwind CSS</p>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
              <div className="font-bold text-white flex items-center gap-1.5 font-mono">
                <Award className="w-4 h-4 text-cyan-400" />
                Key Highlights
              </div>
              <ul className="list-disc list-inside space-y-1 text-zinc-400">
                <li>Built TeamZen MERN platform used by 250+ students</li>
                <li>Built Campus Split, Resume Generator & Streak Aura</li>
                <li>250+ DSA problems solved on LeetCode/GFG</li>
              </ul>
            </div>
          </div>

          {/* Download Action */}
          <div className="pt-2">
            <a
              href="/resume.pdf"
              download="Mukul_Kumar_Resume.pdf"
              onClick={(e) => {
                const blob = new Blob([
                  `MUKUL KUMAR — FULL STACK MERN DEVELOPER\nEmail: mukulkumar.dev@gmail.com | Phone: +91 XXXXXXXXXX\nLinkedIn: linkedin.com/in/mukul-kumar | GitHub: github.com/mukul-kumar\n\nEDUCATION\nB.Tech in Information Technology (2023 - 2027)\n\nTECHNICAL SKILLS\nFrontend: React.js, ES6+ JavaScript, Tailwind CSS, HTML5, Redux\nBackend: Node.js, Express.js, REST APIs, WebSockets\nDatabases: MongoDB Atlas, Mongoose ORM\n\nFEATURED MERN PROJECTS\n1. TeamZen — Teammate Finding Portal for B.Tech Students (React, Node, Express, MongoDB, Socket.io)\n2. Campus Split — Hostel Expense & Bill Splitting App (React, Node, Express, MongoDB)\n3. Resume Generator — Dynamic ATS-Friendly Builder & PDF Compiler (React, Node, Express, MongoDB)\n4. Streak Aura — Daily Habit & Activity Streak Tracker (React, Node, Express, MongoDB)`
                ], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Mukul_Kumar_Resume.txt';
                a.click();
              }}
              className="glow-cyan-button w-full py-3 rounded-xl bg-cyan-500 text-black font-bold font-mono text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Complete Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column: Simulated Resume Document View */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-800 lg:col-span-2 space-y-6 font-mono text-xs relative">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div>
              <h2 className="text-xl font-bold text-white tracking-wider">MUKUL KUMAR</h2>
              <p className="text-cyan-400 text-xs">Full Stack Developer · B.Tech Information Technology</p>
            </div>
            <div className="text-right text-[11px] text-zinc-400 space-y-0.5 font-sans">
              <div>mukulkumar.dev@gmail.com</div>
              <div>github.com/mukul-kumar</div>
              <div>linkedin.com/in/mukul-kumar</div>
            </div>
          </div>

          {/* Section: Profile */}
          <div className="space-y-2">
            <h4 className="text-cyan-300 font-bold border-b border-zinc-800/80 pb-1">01. EXECUTIVE SUMMARY</h4>
            <p className="text-zinc-300 font-sans leading-relaxed">
              Product-driven Full Stack Web Developer and 3rd year B.Tech IT student specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). Dedicated to building clean user interfaces, scalable REST APIs, and efficient database architectures.
            </p>
          </div>

          {/* Section: Skills */}
          <div className="space-y-2">
            <h4 className="text-cyan-300 font-bold border-b border-zinc-800/80 pb-1">02. TECHNICAL SKILLS</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-300 font-sans">
              <div><strong>Languages:</strong> JavaScript (ES6+), HTML5, Modern CSS</div>
              <div><strong>Frontend:</strong> React.js, Tailwind CSS, Redux Toolkit</div>
              <div><strong>Backend:</strong> Node.js, Express.js, REST APIs, WebSockets</div>
              <div><strong>Database:</strong> MongoDB Atlas, Mongoose ORM</div>
            </div>
          </div>

          {/* Section: Projects */}
          <div className="space-y-3">
            <h4 className="text-cyan-300 font-bold border-b border-zinc-800/80 pb-1">03. FEATURED MERN PROJECTS</h4>
            
            <div className="space-y-1 font-sans">
              <div className="flex justify-between font-mono font-bold text-white">
                <span>TeamZen — Teammate Finder Portal</span>
                <span className="text-cyan-400 text-xs">React · Node · MongoDB</span>
              </div>
              <p className="text-zinc-400 text-xs">
                Built real-time teammate finding portal for engineering students with skill matrix matching.
              </p>
            </div>

            <div className="space-y-1 font-sans">
              <div className="flex justify-between font-mono font-bold text-white">
                <span>Campus Split — Hostel Bill Manager</span>
                <span className="text-cyan-400 text-xs">React · Node · MongoDB</span>
              </div>
              <p className="text-zinc-400 text-xs">
                Hostel expense splitting app with automated debt calculation algorithms.
              </p>
            </div>

            <div className="space-y-1 font-sans">
              <div className="flex justify-between font-mono font-bold text-white">
                <span>Resume Generator — ATS Builder</span>
                <span className="text-cyan-400 text-xs">React · Node · MongoDB</span>
              </div>
              <p className="text-zinc-400 text-xs">
                Dynamic builder compiling inputs into clean ATS-formatted resumes with PDF export.
              </p>
            </div>

            <div className="space-y-1 font-sans">
              <div className="flex justify-between font-mono font-bold text-white">
                <span>Streak Aura — Habit Tracker</span>
                <span className="text-cyan-400 text-xs">React · Node · MongoDB</span>
              </div>
              <p className="text-zinc-400 text-xs">
                Daily activity streak tracker with GitHub-style contribution heatmaps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
