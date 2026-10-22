import React, { useState } from 'react';
import { 
  Layers, 
  ShieldCheck, 
  Server, 
  Database, 
  Cpu, 
  Workflow, 
  Code2, 
  Key, 
  RefreshCw, 
  CheckCircle2, 
  Info,
  ArrowDown,
  ArrowRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SystemArchitecture: React.FC = () => {
  const [selectedTierId, setSelectedTierId] = useState<string>('service-tier');

  const tiers = PORTFOLIO_DATA.representativeArchitecture;
  const currentTier = tiers.find(t => t.id === selectedTierId) || tiers[2];

  const tierConfigs: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
    'client-tier': { icon: Code2, color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.1)' },
    'gateway-tier': { icon: Key, color: '#f43f5e', bg: 'rgba(244, 63, 94, 0.1)' },
    'service-tier': { icon: Server, color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
    'cache-tier': { icon: RefreshCw, color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' },
    'data-tier': { icon: Database, color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)' },
    'devops-tier': { icon: Workflow, color: '#14b8a6', bg: 'rgba(20, 184, 166, 0.1)' }
  };

  const activeConfig = tierConfigs[currentTier.id] || { icon: Server, color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' };

  return (
    <section id="architecture" className="py-20 bg-[var(--bg-page)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-bg-light border theme-border text-xs font-mono theme-text-primary mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>ENTERPRISE BLUEPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Representative Enterprise Architecture
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] text-sm sm:text-base">
            Interactive visualization of a high-throughput, multi-tier web application flow based on production engineering practices.
          </p>
        </div>

        {/* Disclaimer Note */}
        <div className="mb-10 p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] flex items-start gap-3 text-xs text-[var(--text-secondary)] shadow-sm">
          <Info className="w-4 h-4 theme-text-primary flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[var(--text-primary)] font-medium">Architectural Disclosure Note:</strong> This diagram is a representative illustration of standard enterprise architecture patterns, distributed locking, and batch ingestion flows corresponding to Purva Huddar's documented competencies. It does not disclose confidential or proprietary infrastructure of Maharashtra Knowledge Corporation Ltd. (MKCL).
          </p>
        </div>

        {/* Interactive Architecture Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual Pipeline Flow */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-mono uppercase text-[var(--text-secondary)] tracking-wider mb-2">
              Click any architectural tier to inspect technical details:
            </div>

            {tiers.map((tier, index) => {
              const cfg = tierConfigs[tier.id] || { icon: Server, color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' };
              const Icon = cfg.icon;
              const isSelected = selectedTierId === tier.id;

              return (
                <div key={tier.id} className="relative">
                  <button
                    onClick={() => setSelectedTierId(tier.id)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--bg-card)] shadow-lg translate-x-1'
                        : 'bg-[var(--bg-card)]/60 border-[var(--border-card)] hover:bg-[var(--bg-card)]'
                    }`}
                    style={{
                      borderColor: isSelected ? cfg.color : undefined,
                      borderLeft: `4px solid ${cfg.color}`
                    }}
                  >
                    <div className="flex items-center gap-3.5">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                        style={{
                          backgroundColor: isSelected ? cfg.color : cfg.bg,
                          color: isSelected ? '#ffffff' : cfg.color
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-[var(--text-secondary)]">
                          Tier 0{index + 1}
                        </div>
                        <h4 className="text-sm font-bold text-[var(--text-primary)]">
                          {tier.name.split('. ')[1]}
                        </h4>
                        <span className="text-[11px] font-mono text-[var(--text-secondary)] truncate block max-w-[280px]">
                          {tier.tech}
                        </span>
                      </div>
                    </div>

                    <ArrowRight 
                      className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1' : 'opacity-40'}`}
                      style={{ color: isSelected ? cfg.color : undefined }}
                    />
                  </button>

                  {/* Flow Arrow connecting tiers */}
                  {index < tiers.length - 1 && (
                    <div className="flex justify-center my-1">
                      <ArrowDown className="w-3.5 h-3.5 opacity-30" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Inspector Panel */}
          <div className="lg:col-span-6 sticky top-28">
            <div 
              className="p-7 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-xl space-y-6"
              style={{ borderTop: `4px solid ${activeConfig.color}` }}
            >
              
              {/* Header */}
              <div className="flex items-start justify-between pb-5 border-b border-[var(--border-card)]">
                <div>
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-mono font-semibold"
                    style={{ backgroundColor: activeConfig.bg, color: activeConfig.color }}
                  >
                    TIER INSPECTOR
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mt-2">
                    {currentTier.name}
                  </h3>
                  <div className="mt-1 text-xs font-mono" style={{ color: activeConfig.color }}>
                    {currentTier.tech}
                  </div>
                </div>

                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: activeConfig.bg, color: activeConfig.color }}
                >
                  <Cpu className="w-5 h-5" />
                </div>
              </div>

              {/* Role & Responsibility */}
              <div>
                <h4 className="text-xs font-mono uppercase text-[var(--text-secondary)] tracking-wider mb-2">
                  Role & Architectural Responsibilities:
                </h4>
                <p className="text-sm text-[var(--text-primary)] leading-relaxed bg-[var(--bg-card-subtle)] p-4 rounded-xl border border-[var(--border-card)]">
                  {currentTier.role}
                </p>
              </div>

              {/* Engineering Highlights */}
              <div>
                <h4 className="text-xs font-mono uppercase text-[var(--text-secondary)] tracking-wider mb-3">
                  Production Engineering Highlights:
                </h4>
                <div className="space-y-2.5">
                  {currentTier.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: activeConfig.color }} />
                      <span className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resilience & Scalability Note */}
              <div className="pt-4 border-t border-[var(--border-card)] flex items-center justify-between text-xs text-[var(--text-secondary)] font-mono">
                <span className="flex items-center gap-1.5" style={{ color: activeConfig.color }}>
                  <ShieldCheck className="w-4 h-4" /> ACID / Idempotent Compliant
                </span>
                <span>Production Scaled: 2.5M+ records</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
