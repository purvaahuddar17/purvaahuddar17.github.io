import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { SystemArchitecture } from './components/SystemArchitecture';
import { EducationCertifications } from './components/EducationCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

function PortfolioContent() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen transition-colors duration-300 font-sans selection:bg-[var(--theme-primary)] selection:text-white">
      {/* Top sticky navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Metrics />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <SystemArchitecture />
        <EducationCertifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Full Official Resume Modal / Print Viewer */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

export default App;
