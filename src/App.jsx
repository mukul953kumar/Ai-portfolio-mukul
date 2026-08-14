import React, { useState, useEffect } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveDashboard from './components/LiveDashboard';
import DeveloperDNA from './components/DeveloperDNA';
import Projects from './components/Projects';
import HowIThink from './components/HowIThink';
import Journey from './components/Journey';
import ProofSection from './components/ProofSection';
import ResumeIntelligence from './components/ResumeIntelligence';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import RecruiterModeModal from './components/RecruiterModeModal';
import CommandPaletteModal from './components/CommandPaletteModal';

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [recruiterModalOpen, setRecruiterModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [initialPrompt, setInitialPrompt] = useState('');
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // Global Ctrl + K / Cmd + K keydown listener for Command Palette
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenChatWithPrompt = (promptText) => {
    setInitialPrompt(promptText);
    setChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative bg-grid-pattern">
      {/* Subtle Node Particle Canvas */}
      <ParticleCanvas />

      {/* Navigation Dock */}
      <Navbar
        onOpenChat={() => handleOpenChatWithPrompt('Hi, tell me about Mukul!')}
        onOpenRecruiterMode={() => setRecruiterModalOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        voiceEnabled={voiceEnabled}
        setVoiceEnabled={setVoiceEnabled}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero
          onSendPrompt={handleOpenChatWithPrompt}
          onOpenRecruiterMode={() => setRecruiterModalOpen(true)}
          onSelectProject={(id) => setSelectedProjectId(id)}
        />

        {/* Live Developer Dashboard */}
        <LiveDashboard />

        {/* Developer DNA (Skills) */}
        <DeveloperDNA onAskAI={handleOpenChatWithPrompt} />

        {/* Projects Deep-Dive */}
        <Projects
          onAskAI={handleOpenChatWithPrompt}
          selectedProjectId={selectedProjectId}
          setSelectedProjectId={setSelectedProjectId}
        />

        {/* How I Think */}
        <HowIThink onAskAI={handleOpenChatWithPrompt} />

        {/* Developer Journey Timeline */}
        <Journey />

        {/* Proof > Claims Matrix */}
        <ProofSection onSelectProject={(id) => setSelectedProjectId(id)} />

        {/* Resume Intelligence */}
        <ResumeIntelligence onAskAI={handleOpenChatWithPrompt} />

        {/* Contact */}
        <Contact onAskAI={handleOpenChatWithPrompt} />
      </main>

      {/* Footer */}
      <Footer
        onOpenChat={() => handleOpenChatWithPrompt('How can I contact Mukul?')}
        onOpenRecruiterMode={() => setRecruiterModalOpen(true)}
      />

      {/* AI Assistant Modal */}
      <AIChat
        isOpen={chatOpen}
        onClose={() => {
          setChatOpen(false);
          setInitialPrompt('');
        }}
        initialPrompt={initialPrompt}
        voiceEnabled={voiceEnabled}
        setVoiceEnabled={setVoiceEnabled}
        onSelectProject={(id) => setSelectedProjectId(id)}
        onOpenRecruiterMode={() => setRecruiterModalOpen(true)}
      />

      {/* Recruiter Mode Modal */}
      <RecruiterModeModal
        isOpen={recruiterModalOpen}
        onClose={() => setRecruiterModalOpen(false)}
        onAskAI={handleOpenChatWithPrompt}
      />

      {/* Command Palette Modal (Ctrl + K) */}
      <CommandPaletteModal
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenChat={handleOpenChatWithPrompt}
        onOpenRecruiterMode={() => setRecruiterModalOpen(true)}
        onSelectProject={(id) => setSelectedProjectId(id)}
      />
    </div>
  );
}
