import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  ShieldCheck
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  const certColors = [
    { color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' }, // Oracle
    { color: '#f97316', bg: 'rgba(249, 115, 22, 0.1)' }, // AWS
    { color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' }, // Spring
    { color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.1)' }, // Embedded
    { color: '#14b8a6', bg: 'rgba(20, 184, 166, 0.1)' }, // PCB
  ];

  return (
    <section id="education" className="py-20 bg-[var(--bg-page)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-bg-light border theme-border text-xs font-mono theme-text-primary mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & KNOWLEDGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] text-sm sm:text-base">
            Formal technical degrees and industry certifications verifying expertise in database development, cloud, and Java engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-[var(--border-card)]">
              <Award className="w-5 h-5 theme-text-primary" />
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Industry Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.certifications.map((cert, idx) => {
                const cfg = certColors[idx % certColors.length];
                return (
                  <div
                    key={cert.title}
                    className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-transparent transition-all duration-300 flex items-start justify-between gap-4 shadow-sm hover:shadow-md"
                    style={{ borderLeft: `4px solid ${cfg.color}` }}
                  >
                    <div className="space-y-1.5">
                      <span 
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold"
                        style={{ backgroundColor: cfg.bg, color: cfg.color }}
                      >
                        {cert.type === 'certification' ? 'Verified Credential' : 'Technical Diploma'}
                      </span>
                      <h4 className="text-base font-bold text-[var(--text-primary)] pt-1">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] font-medium">
                        Issued by <span className="text-[var(--text-primary)]">{cert.issuer}</span>
                      </p>
                    </div>

                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: cfg.bg, color: cfg.color }}
                    >
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-[var(--border-card)]">
              <GraduationCap className="w-5 h-5 theme-text-primary" />
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Academic Background
              </h3>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-transparent transition-all duration-300 space-y-3 shadow-sm hover:shadow-md"
                  style={{ borderLeft: '4px solid var(--theme-primary)' }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-base font-bold text-[var(--text-primary)]">
                        {edu.degree}
                      </h4>
                      <p className="text-xs sm:text-sm theme-text-primary font-medium mt-0.5">
                        {edu.institution}
                      </p>
                    </div>

                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-card)] text-[var(--text-primary)] text-xs font-mono flex-shrink-0">
                      <Calendar className="w-3.5 h-3.5" style={{ color: 'var(--theme-primary)' }} />
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-card)] pt-2.5">
                    {edu.scoreOrDetail}
                  </p>

                  <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-secondary)] font-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
