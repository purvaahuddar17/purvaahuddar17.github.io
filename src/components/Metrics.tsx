import React from 'react';
import { 
  Users, 
  Building2, 
  Database, 
  Zap, 
  Rocket, 
  ShieldCheck, 
  TrendingUp 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Metrics: React.FC = () => {
  const metricConfigs = [
    {
      icon: Users,
      color: '#10b981', // Emerald
      bgLight: 'rgba(16, 185, 129, 0.1)',
      border: 'rgba(16, 185, 129, 0.3)'
    },
    {
      icon: Building2,
      color: '#06b6d4', // Cyan
      bgLight: 'rgba(6, 182, 212, 0.1)',
      border: 'rgba(6, 182, 212, 0.3)'
    },
    {
      icon: Database,
      color: '#f59e0b', // Amber
      bgLight: 'rgba(245, 158, 11, 0.1)',
      border: 'rgba(245, 158, 11, 0.3)'
    },
    {
      icon: Zap,
      color: '#a855f7', // Purple
      bgLight: 'rgba(168, 85, 247, 0.1)',
      border: 'rgba(168, 85, 247, 0.3)'
    },
    {
      icon: Rocket,
      color: '#f43f5e', // Rose
      bgLight: 'rgba(244, 63, 94, 0.1)',
      border: 'rgba(244, 63, 94, 0.3)'
    },
    {
      icon: ShieldCheck,
      color: '#14b8a6', // Teal
      bgLight: 'rgba(20, 184, 166, 0.1)',
      border: 'rgba(20, 184, 166, 0.3)'
    }
  ];

  return (
    <section id="impact" className="py-16 bg-[var(--bg-card)]/50 border-y border-[var(--border-card)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-bg-light border theme-border text-xs font-mono theme-text-primary mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>MEASURABLE ENGINEERING IMPACT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
            Production Scale & Verified Performance
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)]">
            Metrics achieved across high-concurrency admission, examination, and data infrastructure at MKCL.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.metrics.map((metric, index) => {
            const config = metricConfigs[index % metricConfigs.length];
            const Icon = config.icon;
            return (
              <div
                key={metric.label}
                className="group relative p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg"
                style={{
                  boxShadow: `0 4px 20px -2px ${config.bgLight}`
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div 
                      className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono"
                      style={{ color: config.color }}
                    >
                      {metric.value}
                    </div>
                    <div className="mt-2 text-base font-semibold text-[var(--text-primary)]">
                      {metric.label}
                    </div>
                  </div>
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ 
                      backgroundColor: config.bgLight,
                      color: config.color,
                      border: `1px solid ${config.border}`
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-card)] pt-3">
                  {metric.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Responsible Disclaimer */}
        <div className="mt-8 text-center text-xs text-[var(--text-secondary)] max-w-2xl mx-auto italic">
          * Figures reflect recorded production benchmarks, platform throughput, and optimization metrics achieved during project lifecycles at Maharashtra Knowledge Corporation Ltd. (MKCL).
        </div>

      </div>
    </section>
  );
};
