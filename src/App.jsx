import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Services from './components/Services.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx';
import CvModal from './components/CvModal.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import { useMousePosition } from './hooks/useMousePosition.js';
import { useTheme } from './hooks/useTheme.js';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const mousePosition = useMousePosition();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-700 dark:selection:text-cyan-200 transition-colors duration-300">
      {/* Developer Boot Loader */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* Desktop Custom Tracking Cursor */}
      <CustomCursor mousePosition={mousePosition} />

      {/* Main Navigation with Theme Switcher */}
      <Navbar
        onOpenCv={() => setIsCvOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          mousePosition={mousePosition}
          onOpenCv={() => setIsCvOpen(true)}
          theme={theme}
        />
        <About />
        <Projects />
        <Skills />
        <Services />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenCv={() => setIsCvOpen(true)} />

      {/* Interactive Curriculum Vitae Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </div>
  );
}
