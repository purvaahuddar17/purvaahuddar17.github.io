import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  Mail,
  MapPin,
  Phone
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-[var(--bg-card)] border border-[var(--border-card)] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="px-6 py-4 bg-[var(--bg-card-subtle)] border-b border-[var(--border-card)] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: 'var(--theme-primary-light)', color: 'var(--theme-primary)' }}
            >
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                Purva Huddar — Official Curriculum Vitae
              </h2>
              <span className="text-xs text-[var(--text-secondary)] font-mono">
                Verified against production records
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-subtle)] border border-[var(--border-card)] text-[var(--text-primary)] text-xs font-medium transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" style={{ color: 'var(--theme-primary)' }} />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <a
              href="/Purva_Huddar_Resume.html"
              download="Purva_Huddar_Resume.html"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl theme-btn-primary text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-subtle)] transition-colors cursor-pointer ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-[var(--bg-page)] print:bg-white print:text-black print:p-0">
          
          <div className="max-w-3xl mx-auto space-y-8 bg-[var(--bg-card)] p-6 sm:p-10 rounded-2xl border border-[var(--border-card)] shadow-sm print:bg-white print:border-none print:shadow-none print:p-0">
            
            {/* Header */}
            <div className="border-b border-[var(--border-card)] print:border-slate-300 pb-6 text-center sm:text-left sm:flex sm:justify-between sm:items-end">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] print:text-black tracking-tight">
                  PURVA HUDDAR
                </h1>
                <p className="text-sm font-semibold theme-text-primary print:text-emerald-800 mt-1">
                  Java Full Stack Developer | 3+ Years of Experience
                </p>
                <p className="text-xs font-medium text-[var(--text-secondary)] print:text-slate-700 mt-1">
                  Open to: <span className="font-semibold text-[var(--text-primary)] print:text-black">Java Full Stack Developer</span> • <span className="font-semibold text-[var(--text-primary)] print:text-black">Tech Specialist</span> • <span className="font-semibold text-[var(--text-primary)] print:text-black">Associate Project Manager</span> • <span className="font-semibold text-[var(--text-primary)] print:text-black">Tech Business Analyst</span>
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-[var(--text-secondary)] print:text-slate-600 font-mono">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 theme-text-primary" />
                    {PORTFOLIO_DATA.profile.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 theme-text-primary" />
                    {PORTFOLIO_DATA.profile.phone}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 theme-text-primary" />
                    {PORTFOLIO_DATA.profile.location}
                  </span>
                </div>
              </div>

              <div className="mt-4 sm:mt-0 flex items-center justify-center sm:justify-end gap-3 text-xs font-mono theme-text-primary print:text-emerald-700">
                <a href={PORTFOLIO_DATA.profile.github} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <GithubIcon className="w-3.5 h-3.5" />
                  github.com/purvaahuddar17
                </a>
                <span>•</span>
                <a href={PORTFOLIO_DATA.profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider theme-text-primary print:text-emerald-800 font-bold">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-primary)]/90 print:text-slate-800 leading-relaxed">
                {PORTFOLIO_DATA.profile.summary}
              </p>
            </div>

            {/* Core Competencies */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider theme-text-primary print:text-emerald-800 font-bold">
                Technical Skills & Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {PORTFOLIO_DATA.skillCategories.map((cat) => (
                  <div key={cat.name} className="p-2.5 rounded-lg bg-[var(--bg-card-subtle)] print:bg-slate-50 border border-[var(--border-card)] print:border-slate-200">
                    <span className="font-semibold text-[var(--text-primary)] print:text-black block mb-1">
                      {cat.name}:
                    </span>
                    <span className="text-[var(--text-secondary)] print:text-slate-700">
                      {cat.skills.map(s => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-5">
              <h2 className="text-xs font-mono uppercase tracking-wider theme-text-primary print:text-emerald-800 font-bold">
                Professional Experience
              </h2>

              {PORTFOLIO_DATA.experiences.map((exp) => (
                <div key={exp.id} className="space-y-2 border-l-2 pl-4" style={{ borderColor: 'var(--theme-primary)' }}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-[var(--text-primary)] print:text-black">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-medium theme-text-primary print:text-emerald-700">
                        {exp.company} — {exp.location}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[var(--text-secondary)] print:text-slate-600">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] print:text-slate-700 italic">
                    {exp.summary}
                  </p>

                  <ul className="space-y-1.5 text-xs text-[var(--text-primary)]/90 print:text-slate-800 pt-1">
                    {exp.highlights.slice(0, 5).map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="theme-text-primary">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Key Featured Projects */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-wider theme-text-primary print:text-emerald-800 font-bold">
                Key Technical Projects
              </h2>
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-[var(--bg-card-subtle)] print:bg-slate-50 border border-[var(--border-card)] print:border-slate-200 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[var(--text-primary)] print:text-black">
                      {proj.title}
                    </h3>
                    <span className="font-mono theme-text-primary print:text-emerald-700">
                      {proj.technologies.slice(0, 4).join(', ')}
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] print:text-slate-700">
                    {proj.problem}
                  </p>
                  <p className="text-[var(--text-primary)] font-medium">
                    Impact: {proj.metrics.slice(0, 3).join(' • ')}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications & Education */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h2 className="text-xs font-mono uppercase tracking-wider theme-text-primary print:text-emerald-800 font-bold">
                  Certifications
                </h2>
                <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] print:text-slate-800">
                  {PORTFOLIO_DATA.certifications.map((c) => (
                    <li key={c.title} className="flex items-start gap-1.5">
                      <span className="text-emerald-500">✓</span>
                      <span>{c.title} — {c.issuer}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-xs font-mono uppercase tracking-wider theme-text-primary print:text-emerald-800 font-bold">
                  Education
                </h2>
                <ul className="space-y-2 text-xs text-[var(--text-secondary)] print:text-slate-800">
                  {PORTFOLIO_DATA.education.map((e) => (
                    <li key={e.degree}>
                      <span className="font-semibold block text-[var(--text-primary)] print:text-black">{e.degree}</span>
                      <span className="text-[var(--text-secondary)] print:text-slate-600">{e.institution} ({e.period})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
