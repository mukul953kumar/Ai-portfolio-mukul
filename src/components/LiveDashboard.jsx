import React, { useState, useEffect } from 'react';
import { MUKUL_DATA } from '../data/portfolioData';
import { Activity, Star, GitBranch, Code, RefreshCw, Cpu, CheckCircle2 } from 'lucide-react';
import { Github } from './Icons';

export default function LiveDashboard() {
  const [githubData, setGithubData] = useState(MUKUL_DATA.githubStats);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Try fetching live public GitHub stats
    const fetchGitHubStats = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/mukul-kumar`);
        if (res.ok) {
          const user = await res.json();
          setGithubData((prev) => ({
            ...prev,
            publicRepos: user.public_repos || prev.publicRepos,
            avatarUrl: user.avatar_url
          }));
        }
      } catch (err) {
        console.warn('GitHub API rate limit or network offline, using structured metrics');
      } finally {
        setLoading(false);
      }
    };
    fetchGitHubStats();
  }, []);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto space-y-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>REAL-TIME STATUS & GITHUB DATA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Developer Dashboard
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl">
            Current coding activity, active building goals, and GitHub repository metrics.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Currently Status */}
        <div className="glass-panel rounded-2xl p-6 border border-zinc-800 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-white font-mono text-base flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              CURRENTLY ACTIVE FOCUS
            </h3>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/30">
              Live Status
            </span>
          </div>

          <div className="space-y-4 font-mono text-xs">
            {MUKUL_DATA.liveDashboard.statusIndicators.map((ind, idx) => (
              <div key={idx} className="space-y-1.5 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
                <div className="flex justify-between font-bold text-zinc-200">
                  <span>{ind.label}</span>
                  <span className="text-cyan-400">{ind.note}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-950 overflow-hidden border border-zinc-800">
                  <div
                    className={`h-full ${ind.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${ind.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-800 space-y-2 font-mono text-xs">
            <div className="text-zinc-400 font-bold uppercase">Currently Exploring:</div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-300 font-sans">
              {MUKUL_DATA.liveDashboard.exploringTopics.map((topic, idx) => (
                <li key={idx} className="flex items-center gap-1.5 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: GitHub Activity Stats */}
        <div className="glass-panel rounded-2xl p-6 border border-zinc-800 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-white font-mono text-base flex items-center gap-2">
              <Github className="w-5 h-5 text-cyan-400" />
              GITHUB METRICS & ACTIVITY
            </h3>
            <a
              href={`https://github.com/${githubData.username}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1"
            >
              <span>@{githubData.username}</span>
            </a>
          </div>

          {/* Metric Badges */}
          <div className="grid grid-cols-3 gap-3 font-mono text-center">
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
              <div className="text-xl font-bold text-cyan-400">{githubData.publicRepos}</div>
              <div className="text-[10px] text-zinc-500 uppercase mt-0.5">Repositories</div>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
              <div className="text-xl font-bold text-amber-400">{githubData.totalStars}</div>
              <div className="text-[10px] text-zinc-500 uppercase mt-0.5">Total Stars</div>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
              <div className="text-xl font-bold text-emerald-400">{githubData.contributionsThisYear}</div>
              <div className="text-[10px] text-zinc-500 uppercase mt-0.5">Commits (Year)</div>
            </div>
          </div>

          {/* Languages Breakdown */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-zinc-400 font-bold uppercase">Language Composition</div>
            <div className="space-y-2">
              {githubData.topLanguages.map((lang, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-zinc-300">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                      {lang.name}
                    </span>
                    <span className="text-zinc-500">{lang.percent}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-zinc-950 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
