import { useState, useEffect } from 'react';
import { ArrowDown, FileText, Terminal, MapPin, Sparkles, Code2, Layers, Cpu, Github, Mail, Phone, CheckCircle2, ShieldCheck } from 'lucide-react';
import { personalInfo, heroTypewriterPhrases } from '../data/portfolioData.js';

export default function Hero({ mousePosition, onOpenCv, theme = 'dark' }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Animated metric counters
  const [counts, setCounts] = useState({ projects: 0, tech: 0, semester: 0 });

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const updateCounters = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts({
        projects: Math.floor(ease * 3),
        tech: Math.floor(ease * 10),
        semester: Math.floor(ease * 4)
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      } else {
        setCounts({ projects: 3, tech: 10, semester: 4 });
      }
    };

    const frameId = requestAnimationFrame(updateCounters);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = heroTypewriterPhrases[phraseIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % heroTypewriterPhrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const marqueeItems = [
    'REACT.JS & JSX',
    'ASP.NET CORE MVC',
    'LARAVEL & PHP',
    'C# & SQL SERVER',
    'APTECH SOFTWARE ENGINEERING',
    'RESTFUL API DESIGN',
    'DATABASE INTEGRATION',
    'RESPONSIVE WEB DESIGN'
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-8 flex flex-col justify-center overflow-hidden bg-radial-glow transition-colors duration-300"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" />

      {/* Floating subtle ambient blurred orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
            {/* Location & Title Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-slate-900 dark:text-slate-200">{personalInfo.role}</span>
              <span className="text-slate-400 dark:text-slate-600">·</span>
              <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                <MapPin className="w-3 h-3 text-cyan-500" />
                {personalInfo.location}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white font-['Outfit',sans-serif] leading-[1.08]">
                Hi, I'm <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-500 to-purple-600 dark:from-cyan-400 dark:via-sky-300 dark:to-purple-400">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300">
                {personalInfo.role}
              </p>
            </div>

            {/* Typewriter Subtitle Box */}
            <div className="h-10 flex items-center justify-center lg:justify-start">
              <div className="flex items-center gap-2 font-mono text-sm sm:text-base text-cyan-700 dark:text-cyan-300 bg-slate-100 dark:bg-slate-900/60 px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800/80 shadow-sm">
                <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span className="tracking-wide">
                  {heroTypewriterPhrases[phraseIndex].substring(0, charIndex)}
                </span>
                <span className="inline-block w-2 h-4 bg-cyan-500 animate-pulse ml-0.5" />
              </div>
            </div>

            {/* Profile Overview Copy */}
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Pursuing Software Engineering at Aptech Garden Campus. Dedicated to developing fast, robust, and scalable web solutions using React.js, ASP.NET Core MVC, and Laravel.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white dark:text-slate-950 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-sky-300 hover:from-cyan-500 hover:to-blue-500 dark:hover:from-cyan-300 dark:hover:to-sky-200 rounded-xl shadow-lg shadow-cyan-600/20 dark:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <button
                onClick={onOpenCv}
                className="flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-white bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-md"
              >
                <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Quick Metrics Strip with Animated Counters */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mono tabular-nums">
                  {counts.projects}+
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Production Projects
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-cyan-600 dark:text-cyan-400 font-mono tabular-nums">
                  {counts.tech}+
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Core Technologies
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400 font-mono tabular-nums">
                  {counts.semester}th
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Semester Aptech
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Premium Developer Profile Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel glow-border border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden space-y-6">
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-cyan-500" />
                  <span>developer.profile.json</span>
                </span>
              </div>

              {/* Profile Card Header with Avatar & Online Status */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-md">
                    <img
                      src={personalInfo.avatar}
                      alt="M. Vivek"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" title="Online & Available" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold font-mono">
                    {personalInfo.role}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Aptech Garden Campus · 4th Semester
                  </p>
                </div>
              </div>

              {/* Live Syntax-Highlighted Code Card */}
              <div className="p-4 rounded-2xl bg-slate-950 text-slate-300 font-mono text-xs leading-relaxed border border-slate-800/80 shadow-inner overflow-x-auto">
                <div className="text-slate-500 mb-1.5">// Current System Status</div>
                <div><span className="text-purple-400">const</span> <span className="text-cyan-300">stack</span> = &#123;</div>
                <div className="pl-4">frontend: [<span className="text-emerald-400">'React.js'</span>, <span className="text-emerald-400">'Tailwind'</span>],</div>
                <div className="pl-4">backend: [<span className="text-emerald-400">'ASP.NET Core'</span>, <span className="text-emerald-400">'Laravel'</span>],</div>
                <div className="pl-4">database: [<span className="text-emerald-400">'SQL Server'</span>, <span className="text-emerald-400">'MySQL'</span>],</div>
                <div className="pl-4">availability: <span className="text-amber-400">'Open for Projects'</span>,</div>
                <div className="pl-4">commitment: <span className="text-cyan-400">'100% Quality'</span></div>
                <div>&#125;;</div>
              </div>

              {/* Status & Quick Channels Footer */}
              <div className="pt-2 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Verified Aptech Engineer</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    title="GitHub Profile"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    title="Email"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`tel:${personalInfo.phoneRaw}`}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    title="Phone"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Marquee Ribbon Divider */}
      <div className="w-full mt-12 py-3 bg-slate-100/80 dark:bg-slate-950/80 border-y border-slate-200 dark:border-slate-800/80 overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs font-mono font-medium text-slate-600 dark:text-slate-400">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="text-cyan-500 dark:text-cyan-400 font-bold">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
