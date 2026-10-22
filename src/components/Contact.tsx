import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  Sparkles, 
  ExternalLink, 
  AlertCircle 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill in all required fields (Name, Email, Message).');
      return;
    }
    setFormError(null);

    const subjectEncoded = encodeURIComponent(formData.subject || `Inquiry from Portfolio - ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Purva,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    window.open(mailtoUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[var(--bg-page)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-bg-light border theme-border text-xs font-mono theme-text-primary mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] text-sm sm:text-base">
            Open to opportunities as Java Full Stack Developer, Tech Specialist, Associate Project Manager, and Tech Business Analyst.
            <span className="inline-flex items-center gap-1.5 ml-2 px-2.5 py-0.5 rounded-full text-xs font-semibold border border-[var(--border-card)] bg-[var(--bg-card)]" style={{ color: 'var(--theme-primary)' }}>
              🌐 Remote · Pan India
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
                <Sparkles className="w-4 h-4 theme-text-primary" />
                <span>Direct Contact Information</span>
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Feel free to reach out via email, phone, or connect directly through LinkedIn and GitHub.
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-card)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-[var(--text-secondary)] block">Email Address</span>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                      className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] hover:underline truncate block"
                    >
                      {PORTFOLIO_DATA.profile.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PORTFOLIO_DATA.profile.email, 'email')}
                  className="p-2 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-card-subtle)] border border-[var(--border-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer flex-shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy Email"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-card)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[var(--text-secondary)] block">Phone</span>
                    <a
                      href={`tel:${PORTFOLIO_DATA.profile.phone}`}
                      className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] hover:underline"
                    >
                      {PORTFOLIO_DATA.profile.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PORTFOLIO_DATA.profile.phone, 'phone')}
                  className="p-2 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-card-subtle)] border border-[var(--border-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer flex-shrink-0"
                  title="Copy phone to clipboard"
                  aria-label="Copy Phone"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-card)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[var(--text-secondary)] block">Base Location</span>
                  <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                    {PORTFOLIO_DATA.profile.location}
                  </span>
                </div>
              </div>

              {/* Profiles & Links */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--theme-primary)] transition-all flex items-center gap-2.5 text-xs text-[var(--text-primary)] group"
                >
                  <GithubIcon className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]" />
                  <span className="font-semibold truncate">GitHub</span>
                  <ExternalLink className="w-3 h-3 text-[var(--text-secondary)] ml-auto" />
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--theme-primary)] transition-all flex items-center gap-2.5 text-xs text-[var(--text-primary)] group"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />
                  <span className="font-semibold truncate">LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-[var(--text-secondary)] ml-auto" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-md space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-card)]">
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                    Generates a pre-filled email draft directly addressed to Purva Huddar.
                  </p>
                </div>
                <div className="w-9 h-9 rounded-xl theme-bg-light theme-text-primary flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
              </div>

              {formError && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-500">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {isSubmitted ? (
                <div className="p-8 text-center space-y-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[var(--text-primary)]">
                    Email Client Triggered!
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
                    Your message draft has been loaded into your default email app. If your client didn't open automatically, you can send an email directly to <strong className="theme-text-primary">{PORTFOLIO_DATA.profile.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl bg-[var(--bg-card-subtle)] hover:bg-[var(--bg-card)] border border-[var(--border-card)] text-xs font-semibold text-[var(--text-primary)] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                        Your Name <span className="theme-text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[var(--bg-card-subtle)] border border-[var(--border-card)] rounded-xl text-xs text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--theme-primary)] transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                        Your Email <span className="theme-text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rahul@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[var(--bg-card-subtle)] border border-[var(--border-card)] rounded-xl text-xs text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--theme-primary)] transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Java Full Stack Developer Opportunity at..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[var(--bg-card-subtle)] border border-[var(--border-card)] rounded-xl text-xs text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--theme-primary)] transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                      Message <span className="theme-text-primary">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi Purva, we came across your work on high-throughput Spring Boot and Redis systems..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[var(--bg-card-subtle)] border border-[var(--border-card)] rounded-xl text-xs text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--theme-primary)] transition-all font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl theme-btn-primary font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Launch Email Client Draft</span>
                  </button>

                  <p className="text-[11px] text-[var(--text-secondary)] text-center font-mono">
                    Direct integration: launches your email client with your message pre-loaded to purvaa.huddar17@gmail.com.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
