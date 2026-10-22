import React from 'react';
import { 
  User, 
  Code2, 
  Server, 
  Database, 
  Workflow, 
  CheckCircle2, 
  MapPin, 
  Building, 
  Sparkles,
  Quote
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Server,
      color: '#10b981', // Emerald
      bg: 'rgba(16, 185, 129, 0.1)',
      title: "Backend Engineering & Concurrency",
      description: "Deep expertise building Java and Spring Boot microservices with Spring Data JPA, Spring Security, distributed locking with Redis, and streaming batch processing."
    },
    {
      icon: Code2,
      color: '#06b6d4', // Cyan
      bg: 'rgba(6, 182, 212, 0.1)',
      title: "Modern Full Stack & Reactive UIs",
      description: "Crafting fluid, role-based dashboards in Vue.js (2 & 3), PrimeVue, and React. Designing intuitive state management, aspect-ratio image croppers, and accessible workflows."
    },
    {
      icon: Database,
      color: '#f59e0b', // Amber
      bg: 'rgba(245, 158, 11, 0.1)',
      title: "Data Integrity & Performance",
      description: "Advanced MySQL schema design, query optimization, composite indexing, and transactional integrity across large-scale datasets and cross-regional migrations."
    },
    {
      icon: Workflow,
      color: '#8b5cf6', // Violet
      bg: 'rgba(139, 92, 246, 0.1)',
      title: "Agile SDLC & Engineering Discipline",
      description: "End-to-end SDLC ownership: working with Business Analysts, QA teams, and PMs. Rigorous Root Cause Analysis (RCA), CI/CD automation with Jenkins, and zero-downtime releases."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[var(--bg-page)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-bg-light border theme-border text-xs font-mono theme-text-primary mb-3">
            <User className="w-3.5 h-3.5" />
            <span>PROFESSIONAL BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] max-w-2xl text-base">
            Bridging robust distributed backend architectures with intuitive user-centric applications.
          </p>
        </div>

        {/* Narrative & Quick Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[var(--text-secondary)] text-base leading-relaxed">
            <p>
              I am a <strong className="text-[var(--text-primary)] font-semibold">Java Full Stack Developer</strong> based in{' '}
              <span className="font-medium text-[var(--text-primary)]">Pune, Maharashtra</span>, currently engineering mission-critical 
              state-level education and admission platforms at{' '}
              <strong className="text-[var(--text-primary)] font-semibold">Maharashtra Knowledge Corporation Ltd. (MKCL)</strong>.
            </p>

            <p>
              My professional focus revolves around solving core engineering challenges: designing high-throughput batch 
              ingestion pipelines for over <strong className="text-[var(--text-primary)]">100,000+ records per cycle</strong>, orchestrating 
              secure distributed locking to eliminate race conditions, optimizing relational database queries to cut reporting 
              latencies, and building modern, responsive frontends in <strong className="text-[var(--text-primary)]">Vue.js and PrimeVue</strong>.
            </p>

            <p>
              With an engineering background that began in electronics and embedded systems (B.E. in Electronics & 
              Telecommunication, 2013), I bring a disciplined, systems-level problem-solving mindset to software engineering. 
              I understand hardware constraints, memory ceilings, network bottlenecks, and the importance of resilience. 
              Whether performing in-depth <strong className="text-[var(--text-primary)]">Root Cause Analysis (RCA)</strong> during live production incidents, 
              or partnering with Business Analysts and QA Engineers across Agile sprints, I take complete end-to-end ownership.
            </p>

            {/* Target Roles / Open for Opportunities */}
            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase text-[var(--text-secondary)] tracking-wider mb-2.5">
                Target Roles & Open Opportunities:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {PORTFOLIO_DATA.profile.openToRoles.map((role) => (
                  <div
                    key={role}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] text-xs font-semibold text-[var(--text-primary)] shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--theme-primary)' }} />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Interests Badges */}
            <div className="pt-1">
              <h4 className="text-xs font-mono uppercase text-[var(--text-secondary)] tracking-wider mb-2.5">
                Engineering Specializations:
              </h4>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.profile.careerInterests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-card)] text-xs text-[var(--text-primary)] font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 theme-text-primary" />
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Authentic Why Hire Me Card */}
            <div 
              className="mt-6 p-6 sm:p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-lg relative overflow-hidden"
              style={{ borderLeft: '4px solid var(--theme-primary)' }}
            >
              <div className="absolute top-4 right-4 text-[var(--text-secondary)] opacity-10">
                <Quote className="w-16 h-16" />
              </div>
              <div className="flex items-center gap-2 theme-text-primary font-semibold text-sm mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Why Work With Me?</span>
              </div>
              <p className="text-sm text-[var(--text-primary)]/90 italic leading-relaxed relative z-10">
                "{PORTFOLIO_DATA.profile.whyHireMe}"
              </p>
              <div className="mt-4 pt-3 border-t border-[var(--border-card)] flex items-center justify-between text-xs text-[var(--text-secondary)] font-mono">
                <span>— Purva Huddar</span>
                <span>Java Full Stack Developer • MKCL</span>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Pillars & Overview Card */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Quick Profile Overview Box */}
            <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-sm">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
                <Building className="w-4 h-4" style={{ color: 'var(--theme-primary)' }} />
                <span>At A Glance</span>
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-center justify-between py-1.5 border-b border-[var(--border-card)]">
                  <span className="text-[var(--text-secondary)]">Current Role</span>
                  <span className="font-medium text-[var(--text-primary)]">Java Full Stack Developer</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[var(--border-card)]">
                  <span className="text-[var(--text-secondary)]">Organization</span>
                  <span className="font-medium text-[var(--text-primary)]">MKCL, Pune</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[var(--border-card)]">
                  <span className="text-[var(--text-secondary)]">Total Engineering</span>
                  <span className="font-medium text-[var(--text-primary)]">3+ Yrs IT / 8+ Yrs Eng</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[var(--border-card)]">
                  <span className="text-[var(--text-secondary)]">Domain</span>
                  <span className="font-medium text-[var(--text-primary)]">EdTech & Enterprise Platforms</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--theme-primary)' }} /> Location
                  </span>
                  <span className="font-medium text-[var(--text-primary)]">Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* 4 Pillars List with Diverse Colors */}
            <div className="space-y-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-transparent transition-all flex items-start gap-4 shadow-sm"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: pillar.bg, color: pillar.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                        {pillar.title}
                      </h4>
                      <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
