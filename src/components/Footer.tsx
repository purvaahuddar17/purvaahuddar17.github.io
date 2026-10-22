import React from 'react';
import { 
  Mail, 
  ArrowUp,
  FileText
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--bg-card)] border-t border-[var(--border-card)] pt-16 pb-12 text-[var(--text-secondary)] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[var(--border-card)]">
          
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div 
                className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: 'var(--theme-primary)' }}
              >
                PH
              </div>
              <span className="text-base font-bold text-[var(--text-primary)] tracking-tight">
                {PORTFOLIO_DATA.profile.name}
              </span>
            </div>
            <p className="text-[var(--text-secondary)] text-xs leading-relaxed max-w-sm">
              Java Full Stack Developer specializing in Spring Boot microservices, high-throughput batch systems, Redis distributed caching, and reactive enterprise frontends at MKCL.
            </p>
            <div className="text-[var(--text-secondary)] font-mono text-[11px]">
              Location: Pune, Maharashtra, India
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-mono uppercase text-[var(--text-primary)] tracking-wider">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" className="hover:text-[var(--text-primary)] transition-colors">About Me</a>
              <a href="#skills" className="hover:text-[var(--text-primary)] transition-colors">Technical Skills</a>
              <a href="#experience" className="hover:text-[var(--text-primary)] transition-colors">Experience</a>
              <a href="#projects" className="hover:text-[var(--text-primary)] transition-colors">Featured Projects</a>
              <a href="#architecture" className="hover:text-[var(--text-primary)] transition-colors">Architecture</a>
              <a href="#impact" className="hover:text-[var(--text-primary)] transition-colors">Key Metrics</a>
              <a href="#education" className="hover:text-[var(--text-primary)] transition-colors">Certifications</a>
              <a href="#contact" className="hover:text-[var(--text-primary)] transition-colors">Contact</a>
            </div>
          </div>

          {/* Socials & Resume CTA */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase text-[var(--text-primary)] tracking-wider">
              Connect & Verify
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-card)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
                title="GitHub"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-card)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="w-9 h-9 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-card)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
                title="Email"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onOpenResume}
              className="mt-2 w-full py-2.5 px-3 rounded-xl bg-[var(--bg-card-subtle)] hover:bg-[var(--bg-card)] border border-[var(--border-card)] text-xs text-[var(--text-primary)] font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" style={{ color: 'var(--theme-primary)' }} />
              <span>View & Print Official CV</span>
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[var(--text-secondary)] text-[11px]">
          <div>
            © {currentYear} Purva Huddar. All rights reserved. Built with React, TypeScript & Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-mono cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
