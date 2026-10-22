import React, { useState } from 'react';
import { 
  X, 
  AlertCircle, 
  Target, 
  CheckCircle2, 
  Database, 
  Server, 
  Code2, 
  TrendingUp, 
  ShieldAlert
} from 'lucide-react';
import type { ProjectDetail } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'engineering' | 'impact'>('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-[var(--bg-card)] border border-[var(--border-card)] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[var(--bg-card-subtle)] border-b border-[var(--border-card)] flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full theme-bg-light border theme-border text-xs font-mono theme-text-primary">
                ENTERPRISE CASE STUDY
              </span>
              <span className="opacity-40">•</span>
              <span className="text-[var(--text-secondary)] text-xs font-mono">Production Implemented</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 py-2.5 bg-[var(--bg-card-subtle)]/70 border-b border-[var(--border-card)] flex items-center gap-2 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'theme-btn-primary font-semibold shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
            }`}
          >
            Overview & Problem
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'architecture'
                ? 'theme-btn-primary font-semibold shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
            }`}
          >
            Architecture & Flow
          </button>
          <button
            onClick={() => setActiveTab('engineering')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'engineering'
                ? 'theme-btn-primary font-semibold shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
            }`}
          >
            Engineering Challenges
          </button>
          <button
            onClick={() => setActiveTab('impact')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'impact'
                ? 'theme-btn-primary font-semibold shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
            }`}
          >
            Measurable Results
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[var(--text-primary)] text-sm">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Problem & Objective Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-red-500 font-semibold text-xs font-mono uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4" />
                    <span>The Problem Statement</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-primary)]/90 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-500 font-semibold text-xs font-mono uppercase tracking-wider">
                    <Target className="w-4 h-4" />
                    <span>Business Objective</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-primary)]/90 leading-relaxed">
                    {project.objective}
                  </p>
                </div>
              </div>

              {/* Technical Contributions */}
              <div className="p-5 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-card)]">
                <h4 className="text-xs font-mono uppercase text-[var(--text-secondary)] tracking-wider mb-3">
                  My Technical Contributions:
                </h4>
                <div className="space-y-2.5">
                  {project.contribution.map((c, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div>
                <h4 className="text-xs font-mono uppercase text-[var(--text-secondary)] tracking-wider mb-2.5">
                  Applied Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-card)] text-xs font-mono text-[var(--text-primary)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: ARCHITECTURE & FLOW */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              
              {/* Architecture Workflow Bar */}
              <div className="p-5 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-card)] font-mono text-xs">
                <div className="text-[var(--text-secondary)] mb-2 uppercase tracking-wider text-[11px]">
                  Pipeline Architecture Flow:
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] theme-text-primary flex items-center justify-between overflow-x-auto gap-2">
                  <span>{project.architectureSummary}</span>
                </div>
              </div>

              {/* Implementation Breakdown Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Frontend */}
                <div className="p-5 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-card)] space-y-3">
                  <div className="flex items-center gap-2 text-cyan-500 font-semibold text-xs font-mono uppercase">
                    <Code2 className="w-4 h-4" />
                    <span>Frontend Implementation</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                    {project.frontendImplementation.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-500">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Backend */}
                <div className="p-5 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-card)] space-y-3">
                  <div className="flex items-center gap-2 text-emerald-500 font-semibold text-xs font-mono uppercase">
                    <Server className="w-4 h-4" />
                    <span>Backend Implementation</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                    {project.backendImplementation.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-500">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Database & Integration */}
              <div className="p-5 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-card)] space-y-3">
                <div className="flex items-center gap-2 text-amber-500 font-semibold text-xs font-mono uppercase">
                  <Database className="w-4 h-4" />
                  <span>Database & Caching Design</span>
                </div>
                <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                  {project.databaseDetails.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-500">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          )}

          {/* TAB 3: ENGINEERING CHALLENGES */}
          {activeTab === 'engineering' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-card)] text-xs text-[var(--text-secondary)]">
                Real-world engineering constraints encountered in production and how they were systematically resolved.
              </div>

              {project.challenges.map((c, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-card)] space-y-3"
                >
                  <div className="flex items-start gap-2 text-amber-500 font-semibold text-xs">
                    <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Challenge #{i + 1}: {c.challenge}</span>
                  </div>
                  <div className="pl-6 border-l-2 theme-border text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    <strong className="text-[var(--text-primary)] font-semibold">Architectural Resolution:</strong>{' '}
                    {c.solution}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: MEASURABLE RESULTS */}
          {activeTab === 'impact' && (
            <div className="space-y-6">
              
              {/* Highlight Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl theme-bg-light border theme-border flex items-center gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[var(--theme-primary)]/20 flex items-center justify-center theme-text-primary flex-shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-[var(--text-primary)]">{m}</span>
                  </div>
                ))}
              </div>

              {/* Full Impact Statements */}
              <div className="p-5 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-card)] space-y-3">
                <h4 className="text-xs font-mono uppercase text-[var(--text-secondary)] tracking-wider">
                  Verified Production Outcome:
                </h4>
                <div className="space-y-2.5">
                  {project.impact.map((imp, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{imp}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[var(--bg-card-subtle)] border-t border-[var(--border-card)] flex items-center justify-between text-xs">
          <span className="text-[var(--text-secondary)] italic">
            * Representative case study documented in Purva Huddar's professional experience.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-subtle)] border border-[var(--border-card)] text-[var(--text-primary)] font-medium transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>

    </div>
  );
};
