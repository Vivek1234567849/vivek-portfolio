import vivekLogo from '../assets/images/vivek-logo.png';
import { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';

export default function Navbar({ onOpenCv, theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'skills', 'services', 'education', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#030712]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 py-3 shadow-md shadow-slate-900/5 dark:shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 group font-['Outfit',sans-serif]"
        >
          <img
  src={vivekLogo}
  alt="Website by Vivek"
  className="w-12 h-12 object-contain rounded-lg bg-white p-1 shadow-md group-hover:scale-110 transition-transform duration-300"
/>
          <span>
            M. Vivek<span className="text-cyan-500 dark:text-cyan-400">.</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 relative ${
                  isActive
                    ? 'text-cyan-600 dark:text-cyan-400 font-semibold'
                    : 'hover:text-slate-900 dark:hover:text-white text-slate-600 dark:text-slate-300'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions (Theme Toggle, GitHub, CV) */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600 transition-transform hover:-rotate-12" />
            )}
          </button>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="View GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenCv}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg shadow-md shadow-cyan-600/25 transition-all duration-200 hover:shadow-cyan-500/40 hover:scale-[1.02] cursor-pointer whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile menu & theme button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-700 dark:text-slate-300 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          <button
            onClick={onOpenCv}
            className="p-2 text-cyan-600 dark:text-cyan-400 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            title="Download CV"
          >
            <FileText className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#030712]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV</span>
            </button>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <Github className="w-4 h-4" />
              <span>GitHub · {personalInfo.githubUsername}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
