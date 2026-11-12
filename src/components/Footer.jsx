import { ArrowUp, Github, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';

export default function Footer({ onOpenCv }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-900 bg-slate-100/90 dark:bg-[#02050c] text-slate-600 dark:text-slate-400 py-12 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/80">
          {/* Brand & Title */}
          <div className="text-center md:text-left space-y-1">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-lg font-bold text-slate-900 dark:text-white font-['Outfit',sans-serif] hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors inline-block"
            >
              M. Vivek<span className="text-cyan-500 dark:text-cyan-400">.</span>
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Full-Stack Developer · Karachi, Pakistan
            </p>
          </div>

          {/* Quick Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Services</a>
            <a href="#education" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Education</a>
            <button onClick={onOpenCv} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
              Download CV
            </button>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/40 transition-colors shadow-sm"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/40 transition-colors shadow-sm"
              title="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${personalInfo.phoneRaw}`}
              className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/40 transition-colors shadow-sm"
              title="Direct Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 hover:text-white hover:bg-cyan-600 transition-colors shadow-sm cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} M. Vivek. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with React & Three.js</span>
            <span className="text-slate-400 dark:text-slate-600">·</span>
            <span>Aptech Garden Campus</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
