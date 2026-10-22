import React, { useState } from 'react';
import { 
  FolderGit2, 
  FileSpreadsheet, 
  Crop, 
  LifeBuoy, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { ProjectDetail } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const projectConfigs: Record<string, { icon: React.ElementType; color: string; bg: string; border: string }> = {
    'bulk-admission-system': {
      icon: FileSpreadsheet,
      color: '#10b981', // Emerald
      bg: 'rgba(16, 185, 129, 0.1)',
      border: 'rgba(16, 185, 129, 0.3)'
    },
    'dynamic-document-cropper': {
      icon: Crop,
      color: '#f43f5e', // Rose / Coral
      bg: 'rgba(244, 63, 94, 0.1)',
      border: 'rgba(244, 63, 94, 0.3)'
    },
    'support-ticketing-system': {
      icon: LifeBuoy,
      color: '#f59e0b', // Amber / Gold
      bg: 'rgba(245, 158, 11, 0.1)',
      border: 'rgba(245, 158, 11, 0.3)'
    },
  };

  return (
    <section id="projects" className="py-20 bg-[var(--bg-page)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-bg-light border theme-border text-xs font-mono theme-text-primary mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PRODUCTION DELIVERABLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Featured Enterprise Projects
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] text-sm sm:text-base">
            Mission-critical systems engineered for high scale, reliable batch processing, and intuitive user workflows.
          </p>
        </div>

        {/* Project Cards Grid with Distinct Colors */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => {
            const config = projectConfigs[project.id] || {
              icon: FolderGit2,
              color: '#10b981',
              bg: 'rgba(16, 185, 129, 0.1)',
              border: 'rgba(16, 185, 129, 0.3)'
            };
            const Icon = config.icon;

            return (
              <div
                key={project.id}
                className="group rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-transparent transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between overflow-hidden relative"
                style={{
                  borderTop: `4px solid ${config.color}`,
                }}
              >
                {/* Content */}
                <div className="p-6 sm:p-7 space-y-5">
                  
                  {/* Icon & Category Badge */}
                  <div className="flex items-center justify-between">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
                      style={{ 
                        backgroundColor: config.bg, 
                        color: config.color,
                        border: `1px solid ${config.border}`
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span 
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold"
                      style={{ backgroundColor: config.bg, color: config.color }}
                    >
                      MKCL Platform
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:opacity-90 transition-opacity">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Top 2 Metric Highlights */}
                  <div className="space-y-2 py-3 border-y border-[var(--border-card)] text-xs">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[var(--text-primary)] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: config.color }} />
                        <span className="truncate">{m}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-card)] text-[11px] font-mono text-[var(--text-primary)]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-card)] text-[11px] font-mono text-[var(--text-secondary)]">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                </div>

                {/* Bottom Action Footer */}
                <div className="p-6 bg-[var(--bg-card-subtle)] border-t border-[var(--border-card)] mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-3 px-4 rounded-xl font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn"
                    style={{
                      backgroundColor: config.bg,
                      color: config.color,
                      border: `1px solid ${config.border}`
                    }}
                  >
                    <span>View Architecture & Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal Window */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
