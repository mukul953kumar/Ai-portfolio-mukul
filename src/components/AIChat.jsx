import React, { useState, useEffect, useRef } from 'react';
import {
  Bot, User, Send, X, Mic, MicOff, Volume2, VolumeX, Sparkles, Key,
  ExternalLink, ArrowRight, Layers, FileText, CheckCircle2,
  Code2, Database, ShieldAlert, Cpu, Terminal, RefreshCw, Copy, Check
} from 'lucide-react';
import { Github } from './Icons';
import mukulAvatar from '../assets/mukul1.png';
import { MUKUL_DATA } from '../data/portfolioData';

export default function AIChat({
  isOpen,
  onClose,
  initialPrompt,
  voiceEnabled,
  setVoiceEnabled,
  onSelectProject,
  onOpenRecruiterMode
}) {
  const [messages, setMessages] = useState([
    {
      id: 'welcome-1',
      sender: 'ai',
      text: "Hi! I'm Mukul's interactive portfolio assistant. Ask me anything about his projects, tech stack, TeamZen role, experience, or resume.",
      cardType: 'quick_prompts',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [geminiKey, setGeminiKey] = useState(localStorage.getItem('gemini_api_key') || '');
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle incoming initial prompt from parent components (e.g. Hero chips or "Ask about TeamZen")
  useEffect(() => {
    if (initialPrompt && isOpen) {
      handleUserQuery(initialPrompt);
    }
  }, [initialPrompt, isOpen]);

  // Speech Recognition Setup (Web Speech API)
  const handleMicToggle = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Speech Recognition is not supported in this browser. Please type your question.');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      setIsListening(true);
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputPrompt(transcript);
        setIsListening(false);
        handleUserQuery(transcript);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    }
  };

  // Text to speech synthesizer
  const speakText = (text) => {
    if (!voiceEnabled || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    // Clean text of markdown asterisks for speech
    const cleanText = text.replace(/[*_#`]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  // High Precision Knowledge Matching System
  const processKnowledgeQuery = async (queryText) => {
    const qLower = queryText.toLowerCase().trim();

    // 1. Check Gemini API if user provided key
    if (geminiKey.trim()) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                {
                  role: 'user',
                  parts: [
                    {
                      text: `System Instruction: You are Mukul's portfolio AI assistant. Answer truthfully based on this portfolio dataset: ${JSON.stringify(
                        MUKUL_DATA
                      )}. If asked about technologies Mukul doesn't know well (like Next.js), be honest that it's in learning stage. Keep answers concise and professional. Question: ${queryText}`
                    }
                  ]
                }
              ]
            })
          }
        );
        const data = await response.json();
        if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
          const aiReply = data.candidates[0].content.parts[0].text;
          return {
            text: aiReply,
            cardType: determineCardType(qLower)
          };
        }
      } catch (err) {
        console.warn('Gemini API call failed, falling back to local engine:', err);
      }
    }

    // 2. Local Knowledge Base Intelligent Matcher
    let bestMatch = null;
    let highestScore = 0;

    MUKUL_DATA.faqDatabase.forEach((faq) => {
      let score = 0;
      faq.keywords.forEach((kw) => {
        if (qLower.includes(kw)) {
          score += kw.length;
        }
      });
      if (score > highestScore) {
        highestScore = score;
        bestMatch = faq;
      }
    });

    // Check project specific questions
    if (qLower.includes('teamzen') || qLower.includes('role in teamzen')) {
      const teamzen = MUKUL_DATA.projects.find((p) => p.id === 'teamzen');
      let text = `Mukul was the Lead Full Stack Developer for **TeamZen**, a teammate-finding platform for B.Tech students built with React, Node.js, Express, and MongoDB.`;
      if (qLower.includes('auth') || qLower.includes('authentication')) {
        text = `Authentication in TeamZen is implemented using **JWT (JSON Web Tokens)** stored in secure HttpOnly cookies, accompanied by bcrypt password hashing and middleware authorization.`;
      }
      return {
        text,
        cardType: 'project_teamzen',
        projectData: teamzen
      };
    }

    if (bestMatch && highestScore > 2) {
      let projectData = null;
      if (bestMatch.cardType === 'project_list' || bestMatch.cardType === 'project_teamzen') {
        projectData = MUKUL_DATA.projects.find((p) => p.id === 'teamzen');
      }

      return {
        text: bestMatch.answer,
        cardType: bestMatch.cardType,
        projectData
      };
    }

    // Default intelligent fallback answer
    return {
      text: `Mukul is a Full Stack MERN Web Developer and B.Tech IT student specializing in React, Node.js, Express, and MongoDB. You can explore his flagship project TeamZen, inspect his Developer DNA, or launch Recruiter Mode for a quick hiring breakdown!`,
      cardType: 'general_info'
    };
  };

  const determineCardType = (qLower) => {
    if (qLower.includes('project') || qLower.includes('teamzen')) return 'project_list';
    if (qLower.includes('resume')) return 'resume';
    if (qLower.includes('skills') || qLower.includes('tech')) return 'skills';
    if (qLower.includes('contact') || qLower.includes('email')) return 'contact';
    if (qLower.includes('hire') || qLower.includes('why')) return 'hire';
    return 'general_info';
  };

  const handleUserQuery = async (queryText) => {
    if (!queryText.trim()) return;

    // Add User Message
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputPrompt('');
    setIsTyping(true);

    // Simulate AI thinking time for realistic response feel
    setTimeout(async () => {
      const response = await processKnowledgeQuery(queryText);

      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        cardType: response.cardType,
        projectData: response.projectData,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
      speakText(response.text);
    }, 450);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleUserQuery(inputPrompt);
  };

  const handleSaveKey = () => {
    localStorage.setItem('gemini_api_key', geminiKey.trim());
    setShowKeyInput(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-3xl h-[85vh] sm:h-[80vh] glass-panel rounded-2xl flex flex-col overflow-hidden border border-zinc-800 shadow-2xl relative">
        {/* Chat Header */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <Bot className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-sm sm:text-base font-mono">
                  Mukul's Portfolio AI
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {geminiKey ? 'Gemini 1.5 Live' : 'Structured Engine'}
                </span>
              </div>
              <p className="text-xs text-zinc-400">Ask anything about experience, projects, or hire fit</p>
            </div>
          </div>

          {/* Top Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowKeyInput(!showKeyInput)}
              title="Configure optional Gemini API Key"
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs flex items-center gap-1 font-mono"
            >
              <Key className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">API Key</span>
            </button>

            <button
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              title={voiceEnabled ? 'Mute AI voice' : 'Enable AI voice synthesis'}
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
            >
              {voiceEnabled ? (
                <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4 text-zinc-500" />
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Optional Gemini API Key Drawer */}
        {showKeyInput && (
          <div className="bg-zinc-900 border-b border-zinc-800 p-3 sm:p-4 flex flex-col sm:flex-row items-center gap-2">
            <input
              type="password"
              placeholder="Paste optional Gemini API key..."
              value={geminiKey}
              onChange={(e) => setGeminiKey(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
            />
            <div className="flex gap-2 w-full sm:w-auto shrink-0">
              <button
                onClick={handleSaveKey}
                className="px-3 py-1.5 rounded-lg bg-cyan-500 text-black text-xs font-semibold font-mono hover:bg-cyan-400"
              >
                Save Key
              </button>
              <button
                onClick={() => {
                  setGeminiKey('');
                  localStorage.removeItem('gemini_api_key');
                  setShowKeyInput(false);
                }}
                className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-400 text-xs font-mono hover:text-white"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-sm">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-cyan-400" />
                </div>
              )}

              <div
                className={`max-w-[88%] sm:max-w-[80%] space-y-3 rounded-2xl p-4 shadow-md ${
                  msg.sender === 'user'
                    ? 'bg-cyan-600 text-white rounded-tr-none'
                    : 'bg-zinc-900/90 border border-zinc-800 text-zinc-200 rounded-tl-none'
                }`}
              >
                {/* Text Content */}
                <div className="whitespace-pre-wrap leading-relaxed">
                  {msg.text}
                </div>

                {/* Interactive Card Renderers */}
                {msg.sender === 'ai' && (msg.cardType === 'profile' || msg.cardType === 'quick_prompts') && (
                  <div className="mt-3 p-3 rounded-xl bg-zinc-950/80 border border-cyan-500/30 flex items-center gap-3">
                    <img src={mukulAvatar} alt="Mukul" className="w-14 h-14 object-contain shrink-0 drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]" />
                    <div>
                      <h4 className="font-bold text-white text-sm">Mukul Kumar</h4>
                      <p className="text-[11px] text-cyan-400 font-mono">Full Stack MERN Developer & B.Tech IT Student</p>
                      <p className="text-[11px] text-zinc-400 mt-0.5">Focus: React.js, Node.js, Express, MongoDB</p>
                    </div>
                  </div>
                )}

                {msg.sender === 'ai' && msg.cardType === 'project_list' && (
                  <div className="mt-3 p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                        <Code2 className="w-3.5 h-3.5" />
                        FLAGSHIP PROJECT
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">
                        React · Node · MongoDB
                      </span>
                    </div>
                    <h4 className="font-bold text-white text-base">TeamZen — Teammate Finder</h4>
                    <p className="text-xs text-zinc-400">
                      Platform connecting engineering students with complementary skills for hackathons & major projects.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      <button
                        onClick={() => {
                          onClose();
                          onSelectProject('teamzen');
                        }}
                        className="px-3 py-1.5 rounded-lg bg-cyan-500 text-black font-semibold text-xs font-mono hover:bg-cyan-400 flex items-center gap-1"
                      >
                        <span>Deep Dive Story</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href="https://teamzen-demo.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-200 text-xs font-mono hover:bg-zinc-700 flex items-center gap-1"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3 text-cyan-400" />
                      </a>
                      <a
                        href="https://github.com/mukul-kumar/teamzen"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-200 text-xs font-mono hover:bg-zinc-700 flex items-center gap-1"
                      >
                        <span>GitHub</span>
                        <Github className="w-3 h-3 text-zinc-400" />
                      </a>
                    </div>
                  </div>
                )}

                {msg.sender === 'ai' && msg.cardType === 'project_teamzen' && (
                  <div className="mt-3 p-3 rounded-xl bg-zinc-950/80 border border-cyan-500/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-300 font-semibold">
                        Architecture Flow
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">
                        TeamZen Architecture
                      </span>
                    </div>
                    <div className="bg-zinc-900 p-2.5 rounded-lg text-xs font-mono text-zinc-300 border border-zinc-800 space-y-1">
                      <div>Frontend: <span className="text-cyan-400">React + Vite + Tailwind</span></div>
                      <div>API Layer: <span className="text-blue-400">Node.js + Express REST</span></div>
                      <div>Database: <span className="text-emerald-400">MongoDB Atlas Collections</span></div>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProject('teamzen');
                      }}
                      className="w-full mt-2 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono hover:bg-cyan-500/30 flex items-center justify-center gap-1"
                    >
                      <span>View Complete Project Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {msg.sender === 'ai' && msg.cardType === 'resume' && (
                  <div className="mt-3 p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5" />
                        RESUME SUMMARY
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">PDF Ready</span>
                    </div>
                    <p className="text-xs text-zinc-300">
                      Mukul Kumar — B.Tech IT (3rd Year). Focused on React, Node.js, Express, and MongoDB. MERN projects include TeamZen, Campus Split, Resume Generator & Streak Aura.
                    </p>
                    <a
                      href="#resume"
                      onClick={() => onClose()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-black font-semibold text-xs font-mono hover:bg-cyan-400"
                    >
                      <span>Open Resume Modal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                {msg.sender === 'ai' && msg.cardType === 'hire' && (
                  <div className="mt-3 p-3 rounded-xl bg-zinc-950/80 border border-emerald-500/30 space-y-2">
                    <h5 className="font-semibold text-emerald-400 text-xs font-mono flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      RECRUITER FIT HIGHLIGHTS
                    </h5>
                    <ul className="text-xs text-zinc-300 space-y-1 list-disc list-inside">
                      <li>Product-driven engineering over basic tutorial projects</li>
                      <li>Proven MERN Stack (React, Node, Express, MongoDB) experience</li>
                      <li>Transparent skill categorization & fast learner</li>
                    </ul>
                    <button
                      onClick={() => {
                        onClose();
                        onOpenRecruiterMode();
                      }}
                      className="w-full py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono hover:bg-emerald-500/30 flex items-center justify-center gap-1"
                    >
                      <span>Open Recruiter Candidate Summary</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {msg.sender === 'ai' && msg.cardType === 'contact' && (
                  <div className="mt-3 p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2">
                    <div className="text-xs font-mono text-cyan-400">Get in touch with Mukul:</div>
                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      <a
                        href="mailto:mukulkumar.dev@gmail.com"
                        className="px-3 py-1.5 rounded-lg bg-zinc-900 text-cyan-300 border border-zinc-700 hover:border-cyan-400"
                      >
                        mukulkumar.dev@gmail.com
                      </a>
                      <a
                        href="https://linkedin.com/in/mukul-kumar"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-zinc-900 text-blue-400 border border-zinc-700 hover:border-blue-400"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://github.com/mukul-kumar"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-700 hover:border-white"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                )}

                {/* Timestamp */}
                <div className="text-[10px] text-zinc-500 font-mono text-right pt-1">
                  {msg.timestamp}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4 h-4 text-zinc-300" />
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-3 items-center text-zinc-400 font-mono text-xs">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-cyan-400 animate-spin" />
              </div>
              <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-1.5">
                <span>AI analyzing knowledge base</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts Chips inside Chat */}
        <div className="px-4 py-2 bg-zinc-950/60 border-t border-zinc-800/80 flex items-center gap-2 overflow-x-auto text-xs font-mono">
          <span className="text-zinc-500 shrink-0">Prompts:</span>
          {['Who is Mukul?', 'Show best project', 'Does he know Next.js?', 'Why hire Mukul?', 'Give me resume'].map(
            (p, idx) => (
              <button
                key={idx}
                onClick={() => handleUserQuery(p)}
                className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-cyan-300 hover:border-cyan-500/40 shrink-0"
              >
                {p}
              </button>
            )
          )}
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-zinc-900 border-t border-zinc-800">
          <form onSubmit={handleFormSubmit} className="flex items-center gap-2">
            {/* Mic Toggle Button */}
            <button
              type="button"
              onClick={handleMicToggle}
              className={`p-2.5 rounded-xl border transition-all ${
                isListening
                  ? 'bg-red-500/20 border-red-500 text-red-400 animate-pulse'
                  : 'bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-white'
              }`}
              title={isListening ? 'Stop listening' : 'Speak question using microphone'}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>

            {/* Prompt Input */}
            <input
              type="text"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder="Ask anything about Mukul..."
              className="flex-1 bg-zinc-950 border border-zinc-800 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none"
            />

            {/* Send Button */}
            <button
              type="submit"
              className="glow-cyan-button px-4 py-2.5 rounded-xl bg-cyan-500 text-black font-semibold text-xs font-mono flex items-center gap-1.5 hover:bg-cyan-400 cursor-pointer"
            >
              <span>Send</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
