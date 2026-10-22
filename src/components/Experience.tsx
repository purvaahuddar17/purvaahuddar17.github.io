import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>('mkcl-fullstack');

  const expColors: Record<string, { color: string; bg: string }> = {
    'mkcl-fullstack': { color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
    'mkcl-intern': { color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.1)' },
    'hardware-electronics': { color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' },
  };

  return (
    <section id="experience" className="py-20 bg-[var(--bg-page)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-bg-light border theme-border text-xs font-mono theme-text-primary mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] text-sm sm:text-base">
            Track record of designing, scaling, and maintaining enterprise applications and engineering systems.
          </p>
        </div>

        {/* Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Organization List / Selector */}
          <div className="lg:col-span-4 space-y-3">
            {PORTFOLIO_DATA.experiences.map((exp) => {
              const isActive = activeExpId === exp.id;
              const cfg = expColors[exp.id] || { color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' };
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExpId(exp.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[var(--bg-card)] shadow-lg'
                      : 'bg-[var(--bg-card)]/60 border-[var(--border-card)] hover:bg-[var(--bg-card)]'
                  }`}
                  style={{
                    borderColor: isActive ? cfg.color : undefined,
                    borderLeft: `4px solid ${cfg.color}`
                  }}
                >
                  <div className="space-y-1">
                    <span 
                      className="text-xs font-mono font-semibold block"
                      style={{ color: cfg.color }}
                    >
                      {exp.period}
                    </span>
                    <h3 className="font-bold text-[var(--text-primary)] text-base">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      {exp.company.split('(')[0]}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 mt-1 transition-transform ${
                      isActive ? 'translate-x-1' : 'opacity-40'
                    }`}
                    style={{ color: isActive ? cfg.color : undefined }}
                  />
                </button>
              );
            })}

            {/* Quick Summary Box */}
            <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] text-xs text-[var(--text-secondary)] space-y-2">
              <div className="flex items-center gap-2 theme-text-primary font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Enterprise Track Record</span>
              </div>
              <p className="leading-relaxed">
                Over 3 years of specialized full-stack Java development backed by an 8-year hardware & electronics foundation, providing deep analytical rigor for complex distributed systems.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Experience Card */}
          <div className="lg:col-span-8">
            {PORTFOLIO_DATA.experiences
              .filter((exp) => exp.id === activeExpId)
              .map((exp) => {
                const cfg = expColors[exp.id] || { color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' };
                return (
                  <div
                    key={exp.id}
                    className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] p-6 sm:p-8 shadow-xl space-y-6"
                  >
                    {/* Top Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-[var(--border-card)]">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                          {exp.role}
                        </h3>
                        <div 
                          className="mt-1 text-sm font-semibold"
                          style={{ color: cfg.color }}
                        >
                          {exp.company}
                        </div>
                        {exp.domain && (
                          <div className="mt-1 text-xs text-[var(--text-secondary)] font-mono">
                            Domain: {exp.domain}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col sm:items-end gap-1 text-xs text-[var(--text-secondary)] font-mono">
                        <span className="flex items-center gap-1.5 bg-[var(--bg-card-subtle)] px-3 py-1 rounded-full text-[var(--text-primary)]">
                          <Calendar className="w-3.5 h-3.5" style={{ color: cfg.color }} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 mt-1">
                          <MapPin className="w-3.5 h-3.5 opacity-60" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm sm:text-base text-[var(--text-primary)]/90 leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Highlights Bullet List */}
                    <div>
                      <h4 className="text-xs font-mono uppercase text-[var(--text-secondary)] tracking-wider mb-3">
                        Key Technical Contributions & Achievements:
                      </h4>
                      <div className="space-y-3">
                        {exp.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 
                              className="w-4 h-4 flex-shrink-0 mt-1" 
                              style={{ color: cfg.color }}
                            />
                            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div className="pt-4 border-t border-[var(--border-card)]">
                      <h4 className="text-xs font-mono uppercase text-[var(--text-secondary)] tracking-wider mb-2.5">
                        Technologies & Tools Applied:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-card)] text-xs font-mono text-[var(--text-primary)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                );
              })}
          </div>

        </div>

      </div>
    </section>
  );
};
