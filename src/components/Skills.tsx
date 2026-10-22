import React, { useState } from 'react';
import { 
  Layers, 
  Search, 
  Server, 
  Code2, 
  Database, 
  Cloud, 
  Cpu, 
  ShieldCheck,
  CheckCircle
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryConfigs: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
    'Backend Development': { icon: Server, color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
    'Frontend Development': { icon: Code2, color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.1)' },
    'Database & Caching': { icon: Database, color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' },
    'DevOps & Cloud': { icon: Cloud, color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)' },
    'Architecture & Design': { icon: Cpu, color: '#f43f5e', bg: 'rgba(244, 63, 94, 0.1)' },
    'Testing, Monitoring & Support': { icon: ShieldCheck, color: '#14b8a6', bg: 'rgba(20, 184, 166, 0.1)' },
  };

  const categories = ['All', ...PORTFOLIO_DATA.skillCategories.map(c => c.name)];

  const filteredCategories = PORTFOLIO_DATA.skillCategories
    .filter(cat => selectedCategory === 'All' || cat.name === selectedCategory)
    .map(cat => {
      const filteredSkills = cat.skills.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...cat,
        skills: filteredSkills
      };
    })
    .filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 bg-[var(--bg-page)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-bg-light border theme-border text-xs font-mono theme-text-primary mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Skills & Enterprise Toolset
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] text-sm sm:text-base">
            Organized across the full enterprise development stack based on verified production experience.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-xl w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'theme-btn-primary shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-subtle)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Instant Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[var(--text-secondary)] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skills (e.g., Redis, Vue)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-xl text-xs text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--theme-primary)] transition-all font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Skills Cards Grid */}
        {filteredCategories.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] text-[var(--text-secondary)]">
            <p>No skills found matching "{searchQuery}". Try searching for another term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => {
              const config = categoryConfigs[category.name] || { icon: Server, color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' };
              const Icon = config.icon;
              return (
                <div
                  key={category.name}
                  className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] p-6 hover:shadow-lg transition-all duration-300 shadow-sm flex flex-col justify-between"
                  style={{ borderTop: `3px solid ${config.color}` }}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: config.bg, color: config.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--text-primary)] text-base">
                          {category.name}
                        </h3>
                        <p className="text-xs text-[var(--text-secondary)] line-clamp-1">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-[var(--border-card)]">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-card)] hover:border-transparent text-xs text-[var(--text-primary)] transition-all cursor-default"
                        >
                          <span 
                            className="w-1.5 h-1.5 rounded-full" 
                            style={{ backgroundColor: config.color }}
                          />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[var(--border-card)] flex items-center justify-between text-[11px] text-[var(--text-secondary)] font-mono">
                    <span>{category.skills.length} core technologies</span>
                    <span className="flex items-center gap-1" style={{ color: config.color }}>
                      <CheckCircle className="w-3 h-3" /> Production Grade
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
