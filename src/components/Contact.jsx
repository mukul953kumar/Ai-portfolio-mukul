import React, { useState } from 'react';
import { MUKUL_DATA } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, Bot, Sparkles, MapPin, Phone } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';

export default function Contact({ onAskAI }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">
            <span className="text-zinc-500">07</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Mukul Kumar
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl">
            Whether you are a recruiter discussing internship/full-time opportunities or a developer interested in collaborating, feel free to send a message or talk to the AI.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Direct Links & AI Trigger */}
        <div className="space-y-6">
          <div className="glass-panel rounded-2xl p-6 border border-zinc-800 space-y-6">
            <h3 className="text-xl font-bold text-white font-mono">Direct Communication</h3>
            
            <div className="space-y-4 font-mono text-xs">
              <a
                href={`mailto:${MUKUL_DATA.personal.email}`}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-400 text-zinc-200 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-zinc-400 text-[10px]">Email Address</div>
                  <div className="font-bold text-white group-hover:text-cyan-300">{MUKUL_DATA.personal.email}</div>
                </div>
              </a>

              <a
                href={MUKUL_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-400 text-zinc-200 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-zinc-400 text-[10px]">LinkedIn Profile</div>
                  <div className="font-bold text-white group-hover:text-blue-300">linkedin.com/in/mukul-kumar</div>
                </div>
              </a>

              <a
                href={MUKUL_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-500 text-zinc-200 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
                  <Github className="w-4 h-4 text-zinc-300 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-zinc-400 text-[10px]">GitHub Repositories</div>
                  <div className="font-bold text-white group-hover:text-cyan-300">github.com/mukul-kumar</div>
                </div>
              </a>
            </div>

            {/* Ask AI to contact */}
            <div className="pt-2 border-t border-zinc-800">
              <button
                onClick={() => onAskAI("How can I contact Mukul Kumar?")}
                className="w-full py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>Ask AI Assistant for Contact Card</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-800">
          <h3 className="text-xl font-bold text-white font-mono mb-4">Send a Direct Message</h3>

          {submitted ? (
            <div className="p-8 text-center space-y-3 bg-zinc-900/80 rounded-xl border border-emerald-500/30 text-emerald-300">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
              <h4 className="text-lg font-bold">Message Sent Successfully!</h4>
              <p className="text-xs text-zinc-300">
                Thank you for reaching out. Mukul will respond to your inquiry promptly via email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-zinc-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Recruiter or Hiring Manager Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-zinc-400 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-zinc-400 mb-1">Your Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi Mukul, we reviewed your TeamZen project and would like to discuss an opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 text-sm"
                />
              </div>

              <button
                type="submit"
                className="glow-cyan-button w-full py-3 rounded-xl bg-cyan-500 text-black font-bold font-mono text-xs flex items-center justify-center gap-2 hover:bg-cyan-400 cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
