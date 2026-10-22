import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Terminal as TerminalIcon, 
  Check, 
  Copy, 
  Server, 
  Activity, 
  ShieldCheck
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'java' | 'metrics' | 'terminal'>('java');
  const [copied, setCopied] = useState(false);
  const [liveLogIndex, setLiveLogIndex] = useState(3);

  const logs = [
    "[10:38:02] [main] INFO  c.m.admission.AdmissionApplication - Starting MKCL Admission Pipeline v3.2...",
    "[10:38:03] [main] INFO  c.m.config.RedisDistributedLock - Connected to Redis cluster at redis://prod-cache:6379",
    "[10:38:04] [main] INFO  c.m.service.BatchEngine - Thread pool initialized: 16 worker threads allocated",
    "[10:38:05] [pool-1] INFO  c.m.batch.ExcelStreamingParser - Center #4102: Processing batch with 102,400 rows",
    "[10:38:06] [pool-1] DEBUG c.m.lock.RedisLock - Acquired distributed lock for key [center:admission:4102]",
    "[10:38:07] [pool-1] INFO  c.m.validator.LearnerValidator - Schema validation: 102,400 passed, 0 syntax faults",
    "[10:38:08] [pool-1] INFO  c.m.dao.LearnerBatchDao - Executing batch insert: 5,000 rows/chunk with MySQL rewrite",
    "[10:38:09] [pool-1] INFO  c.m.lock.RedisLock - Released distributed lock [center:admission:4102] in 3,240ms",
    "[10:38:10] [pool-1] SUCCESS c.m.admission.IngestCoordinator - Cycle completed successfully. Audit record persisted."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveLogIndex((prev) => (prev < logs.length ? prev + 1 : 4));
    }, 2800);
    return () => clearInterval(timer);
  }, [logs.length]);

  const javaCodeSnippet = `package com.mkcl.admission.service;

@Service
@RequiredArgsConstructor
@Slf4j
public class LearnerAdmissionService {

    private final LearnerBatchRepository batchRepository;
    private final RedisDistributedLockManager lockManager;

    @Transactional(rollbackFor = BatchProcessingException.class)
    public BatchProcessResult processCenterBatch(String centerId, MultipartFile excelFile) {
        String lockKey = "lock:admission:center:" + centerId;
        
        return lockManager.executeWithLock(lockKey, 60, TimeUnit.SECONDS, () -> {
            log.info("Processing verified admission stream for centre: {}", centerId);
            try (InputStream stream = excelFile.getInputStream()) {
                StreamingExcelReader reader = new StreamingExcelReader(stream);
                while (reader.hasNextChunk()) {
                    List<LearnerRecord> chunk = reader.readNextChunk(5000);
                    validateEligibilityAndQuota(centerId, chunk);
                    batchRepository.saveAllInBatch(chunk);
                }
                return BatchProcessResult.success(centerId, reader.getTotalProcessed());
            }
        });
    }
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(javaCodeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow matching dynamic theme */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] blur-3xl pointer-events-none rounded-full opacity-20"
        style={{ backgroundColor: 'var(--theme-primary)' }}
      />
      <div 
        className="absolute top-10 right-10 w-96 h-96 blur-3xl pointer-events-none rounded-full opacity-15"
        style={{ backgroundColor: 'var(--theme-accent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill & Open For Roles */}
            <div className="space-y-2.5">
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)] text-xs font-mono text-[var(--text-secondary)] shadow-sm">
                <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: 'var(--theme-primary)' }}></span>
                <span className="font-semibold" style={{ color: 'var(--theme-primary)' }}>Open for Opportunities</span>
                <span className="opacity-40">•</span>
                <span>Remote</span>
                <span className="opacity-40">•</span>
                <span>Pan India</span>
              </div>

              {/* Target Roles Badges */}
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                <span className="text-xs font-mono text-[var(--text-secondary)] mr-1">Open To:</span>
                {PORTFOLIO_DATA.profile.openToRoles.map((role) => (
                  <span
                    key={role}
                    className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border border-[var(--border-card)] bg-[var(--bg-card-subtle)] text-[var(--text-primary)] shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full mr-1.5" style={{ backgroundColor: 'var(--theme-primary)' }} />
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Main Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.15]">
                Hi, I'm{' '}
                <span className="theme-text-primary">
                  {PORTFOLIO_DATA.profile.name}
                </span>
              </h1>
              <p className="mt-3 text-xl sm:text-2xl font-semibold text-[var(--text-primary)]/90 flex flex-wrap items-center gap-2">
                <span>Java Full Stack Developer</span>
                <span style={{ color: 'var(--theme-primary)' }}>|</span>
                <span className="text-[var(--text-secondary)] text-lg sm:text-xl font-normal">
                  Building Scalable Enterprise Applications
                </span>
              </p>
            </div>

            {/* Compelling Description */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              Specializing in high-throughput backend systems, RESTful microservices, and reactive web applications at{' '}
              <strong className="text-[var(--text-primary)] font-semibold">{PORTFOLIO_DATA.profile.currentCompany}</strong>. 
              Proven experience architecting distributed batch pipelines handling{' '}
              <span className="font-semibold text-[var(--text-primary)]">100,000+ records per cycle</span>, scaling state-wide 
              platforms to <span className="font-semibold text-[var(--text-primary)]">2.5 million+ annual learner admissions</span>, 
              and optimizing mission-critical production systems with Redis caching and distributed locking.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl theme-btn-primary font-semibold text-sm transition-all group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-subtle)] border border-[var(--border-card)] text-[var(--text-primary)] font-medium text-sm transition-all shadow-sm cursor-pointer"
              >
                <FileText className="w-4 h-4" style={{ color: 'var(--theme-primary)' }} />
                <span>Download My Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-[var(--bg-card-subtle)] border border-[var(--border-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium text-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Key Stack Badges */}
            <div className="pt-4 border-t border-[var(--border-card)] flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
              <span className="font-sans text-xs">Core Toolset:</span>
              {['Java 17+', 'Spring Boot', 'Vue.js', 'MySQL', 'Redis', 'Docker', 'REST APIs', 'Spring Batch'].map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md bg-[var(--bg-card)] border border-[var(--border-card)] text-[var(--text-primary)] hover:border-[var(--theme-primary)] transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Code Editor & Architecture Terminal */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#13171f] border border-[#2b3240] shadow-2xl overflow-hidden font-mono text-slate-100">
              
              {/* Window Header */}
              <div className="bg-[#0b0e14] px-4 py-3 border-b border-[#2b3240] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="ml-2 text-xs text-slate-300 font-sans font-medium flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5" style={{ color: 'var(--theme-primary)' }} />
                    <span>enterprise-backend-core</span>
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-[#1a202c] p-0.5 rounded-lg text-xs">
                  <button
                    onClick={() => setActiveTab('java')}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      activeTab === 'java'
                        ? 'bg-[var(--theme-primary)] text-white font-medium'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Service.java
                  </button>
                  <button
                    onClick={() => setActiveTab('metrics')}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      activeTab === 'metrics'
                        ? 'bg-[var(--theme-primary)] text-white font-medium'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Metrics.json
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      activeTab === 'terminal'
                        ? 'bg-[var(--theme-primary)] text-white font-medium'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Logs.sh
                  </button>
                </div>
              </div>

              {/* Tab Contents */}
              <div className="p-4 text-xs h-[380px] overflow-y-auto leading-relaxed text-slate-200">
                {activeTab === 'java' && (
                  <div className="relative">
                    <button
                      onClick={handleCopyCode}
                      className="absolute top-0 right-0 p-1.5 rounded-md bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                      title="Copy code"
                      aria-label="Copy Java Code"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <pre className="font-mono text-[11px] leading-5 text-slate-200">
                      <code>
                        <span className="text-rose-400">package</span> com.mkcl.admission.service;{'\n\n'}
                        <span className="text-amber-400">@Service</span>{'\n'}
                        <span className="text-amber-400">@RequiredArgsConstructor</span>{'\n'}
                        <span className="text-rose-400">public class</span> <span className="text-teal-300">LearnerAdmissionService</span> &#123;{'\n\n'}
                        {'  '}<span className="text-rose-400">private final</span> RedisLockManager lockManager;{'\n'}
                        {'  '}<span className="text-rose-400">private final</span> BatchRepository batchRepo;{'\n\n'}
                        {'  '}<span className="text-emerald-400">// Ingests bulk admissions (100K+ records/cycle)</span>{'\n'}
                        {'  '}<span className="text-amber-400">@Transactional</span>(rollbackFor = Exception.<span className="text-rose-400">class</span>){'\n'}
                        {'  '}<span className="text-rose-400">public</span> BatchResult <span className="text-cyan-400">processCenterBatch</span>(String centerId) &#123;{'\n'}
                        {'    '}String lockKey = <span className="text-emerald-300">"lock:admission:"</span> + centerId;{'\n\n'}
                        {'    '}<span className="text-emerald-400">// Redis distributed locking prevents duplicates</span>{'\n'}
                        {'    '}<span className="text-rose-400">return</span> lockManager.executeWithLock(lockKey, () -&gt; &#123;{'\n'}
                        {'      '}StreamingReader reader = <span className="text-rose-400">new</span> StreamingReader();{'\n'}
                        {'      '}List&lt;Record&gt; chunk;{'\n'}
                        {'      '}<span className="text-rose-400">while</span> ((chunk = reader.readChunk(5000)) != null) &#123;{'\n'}
                        {'        '}validateAndDeduplicate(chunk);{'\n'}
                        {'        '}batchRepo.saveAllInBatch(chunk);{'\n'}
                        {'      '}&#125;{'\n'}
                        {'      '}<span className="text-rose-400">return</span> BatchResult.ok(reader.count());{'\n'}
                        {'    '}&#125;);{'\n'}
                        {'  '}&#125;{'\n'}
                        &#125;
                      </code>
                    </pre>
                  </div>
                )}

                {activeTab === 'metrics' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-700">
                      <span className="text-slate-400">System Telemetry</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Activity className="w-3.5 h-3.5" /> Normal / Healthy
                      </span>
                    </div>
                    <pre className="text-teal-300 text-[11px] leading-5">
                      <code>{`{
  "system": "MKCL Enterprise Admission Platform",
  "status": "OPERATIONAL",
  "verified_uptime": "99.4%",
  "annual_throughput": "2,500,000+ learners",
  "connected_onboarding_centers": "5,000+",
  "batch_engine": {
    "records_per_cycle": "100,000+",
    "chunk_size": 5000,
    "concurrency_lock": "Redis Redisson Distributed Lock",
    "duplicate_prevention_rate": "100%"
  },
  "caching_optimization": {
    "engine": "Redis In-Memory Cluster",
    "latency_reduction": "~40%",
    "cache_hit_ratio": "94.8%"
  },
  "deployment_automation": {
    "pipeline": "Maven + Jenkins + Docker",
    "manual_effort_reduction": "~50%",
    "zero_downtime_deploy": true
  }
}`}</code>
                    </pre>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="space-y-1.5 font-mono text-[11px]">
                    <div className="text-slate-500 mb-2 flex items-center justify-between">
                      <span># Live Event Stream (Simulated Production Node)</span>
                      <span className="text-xs text-emerald-400">node-pune-04</span>
                    </div>
                    {logs.slice(0, liveLogIndex).map((log, idx) => (
                      <div
                        key={idx}
                        className={`transition-opacity duration-300 ${
                          log.includes('SUCCESS')
                            ? 'text-emerald-400 font-semibold'
                            : log.includes('Acquired')
                            ? 'text-amber-300'
                            : log.includes('DEBUG')
                            ? 'text-purple-300'
                            : 'text-slate-300'
                        }`}
                      >
                        {log}
                      </div>
                    ))}
                    <div className="flex items-center gap-1.5 text-emerald-400 pt-1">
                      <span>$</span>
                      <span className="w-2 h-4 bg-emerald-400 animate-pulse"></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Status Footer */}
              <div className="bg-[#0b0e14] px-4 py-2 border-t border-[#2b3240] text-[11px] text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Server className="w-3 h-3 text-emerald-400" />
                  Spring Boot 3.x • Java 17 • Redis 7.x
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Production Verified
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
