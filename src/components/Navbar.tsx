import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  FileText, 
  Terminal, 
  Layers, 
  Briefcase, 
  FolderGit2, 
  GraduationCap, 
  Mail, 
  Sun, 
  Moon,
  Palette,
  Check
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useTheme, type AccentTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, setTheme, isDark, toggleDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themePickerOpen, setThemePickerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const themes: { id: AccentTheme; name: string; color: string; label: string }[] = [
    { id: 'emerald', name: 'Spring Emerald', color: '#10b981', label: 'Spring Boot' },
    { id: 'amber', name: 'Warm Amber', color: '#f59e0b', label: 'Espresso & Gold' },
    { id: 'rose', name: 'Sunset Rose', color: '#f43f5e', label: 'Coral & Berry' },
    { id: 'teal', name: 'Nordic Teal', color: '#14b8a6', label: 'Cyan & Sea' },
  ];

  const navLinks = [
    { href: '#about', label: 'About', icon: Terminal },
    { href: '#skills', label: 'Skills', icon: Layers },
    { href: '#experience', label: 'Experience', icon: Briefcase },
    { href: '#projects', label: 'Projects', icon: FolderGit2 },
    { href: '#architecture', label: 'Architecture', icon: Layers },
    { href: '#education', label: 'Education', icon: GraduationCap },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'architecture', 'education', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--bg-card)]/90 backdrop-blur-md border-b border-[var(--border-card)] shadow-lg shadow-black/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Purva Huddar Home"
          >
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md transition-transform group-hover:scale-105"
              style={{ backgroundColor: 'var(--theme-primary)' }}
            >
              PH
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[var(--text-primary)] group-hover:opacity-80 transition-opacity text-base tracking-tight">
                {PORTFOLIO_DATA.profile.name}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--theme-accent)' }}></span>
                <span className="text-xs text-[var(--text-secondary)] font-mono">Java Full Stack Dev</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'theme-bg-light theme-text-primary theme-border border'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-subtle)]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Theme Palette Picker */}
          <div className="hidden sm:flex items-center gap-2.5">
            
            {/* Palette Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setThemePickerOpen(!themePickerOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--border-card)] bg-[var(--bg-card-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-mono transition-all cursor-pointer"
                title="Change color theme"
              >
                <Palette className="w-3.5 h-3.5" style={{ color: 'var(--theme-primary)' }} />
                <span className="capitalize">{theme}</span>
              </button>

              {themePickerOpen && (
                <div 
                  className="absolute right-0 mt-2 w-48 p-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-xl z-50 animate-fadeIn space-y-1"
                  onClick={() => setThemePickerOpen(false)}
                >
                  <div className="px-2 py-1 text-[10px] font-mono uppercase text-[var(--text-secondary)] border-b border-[var(--border-card)] mb-1">
                    Choose Accent Palette
                  </div>
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTheme(t.id)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs transition-colors cursor-pointer ${
                        theme === t.id
                          ? 'bg-[var(--bg-card-subtle)] font-semibold text-[var(--text-primary)]'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--bg-card-subtle)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span 
                          className="w-3.5 h-3.5 rounded-full flex-shrink-0" 
                          style={{ backgroundColor: t.color }}
                        />
                        <span>{t.name}</span>
                      </div>
                      {theme === t.id && <Check className="w-3.5 h-3.5" style={{ color: t.color }} />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-subtle)] border border-[var(--border-card)] transition-colors cursor-pointer"
              title={isDark ? "Switch to polished light mode" : "Switch to dark mode"}
              aria-label="Toggle theme mode"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
            </button>

            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-subtle)] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-subtle)] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg theme-btn-primary font-medium text-xs shadow-sm cursor-pointer ml-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleDark}
              className="p-1.5 rounded-lg text-[var(--text-secondary)] border border-[var(--border-card)]"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
            </button>
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg theme-btn-primary text-xs font-medium cursor-pointer"
            >
              <FileText className="w-3 h-3" />
              <span>CV</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-card-subtle)]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[var(--border-card)] bg-[var(--bg-card)]/98 backdrop-blur-xl px-4 pt-3 pb-6 mt-3 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'theme-bg-light theme-text-primary'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--bg-card-subtle)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Icon className="w-4 h-4" style={{ color: 'var(--theme-primary)' }} />
                {link.label}
              </a>
            );
          })}

          {/* Mobile Palette Selector */}
          <div className="pt-3 border-t border-[var(--border-card)]">
            <div className="text-xs font-mono text-[var(--text-secondary)] mb-2 px-1">
              Select Color Palette:
            </div>
            <div className="grid grid-cols-2 gap-2">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-2.5 py-2 rounded-xl text-xs border ${
                    theme === t.id
                      ? 'border-[var(--theme-primary)] bg-[var(--bg-card-subtle)] font-bold text-[var(--text-primary)]'
                      : 'border-[var(--border-card)] text-[var(--text-secondary)]'
                  }`}
                >
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: t.color }} />
                  <span>{t.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
