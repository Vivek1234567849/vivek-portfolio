import { useState } from 'react';
import { Layers, Layout, Server, Database, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';
import { useTilt } from '../hooks/useTilt.js';
import profileImage from '../assets/images/avatar_developer_vivek_1794162790912.jpg';

function PillarCard({ pillar, index }) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(10);

  const iconMap = {
    Layers: <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    Layout: <Layout className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
    Server: <Server className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    Database: <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
  };

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="p-6 rounded-2xl glass-panel glass-panel-hover glow-border flex flex-col justify-between transition-all"
    >
      <div>
        <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center mb-4 shadow-sm">
          {iconMap[pillar.icon] || <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />}
        </div>
        <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2 font-['Outfit',sans-serif]">
          {pillar.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {pillar.desc}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2 text-xs text-cyan-700 dark:text-cyan-400/90 font-mono">
        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
        <span>Core Focus Area 0{index + 1}</span>
      </div>
    </div>
  );
}

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/70 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-700 dark:text-cyan-300">
            About M. Vivek
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif] tracking-tight">
            Engineering Web Systems with Precision
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Bridging frontend responsiveness with backend database architectures.
          </p>
        </div>

        {/* Bio Spotlight with Avatar */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Avatar Column */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-20 dark:opacity-30 group-hover:opacity-50 blur-md transition duration-500" />
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shadow-xl">
                  {!imgError && profileImage ? (
                    <img
                      src={profileImage}
                      alt="M. Vivek Portrait"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-[#0a1628] to-slate-950 transition-transform duration-500 group-hover:scale-105 select-none"
                      aria-label="M. Vivek Initials Placeholder"
                    >
                      <span className="text-5xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 font-['Outfit',sans-serif]">
                        MV
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-widest mt-1">
                        Full-Stack
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 right-2 px-2 py-1 bg-slate-900/80 backdrop-blur-sm rounded-lg text-[11px] text-center font-mono text-cyan-300 border border-cyan-500/30">
                    M. Vivek · Full-Stack Dev
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Content Column */}
            <div className="md:col-span-8 space-y-5">
              <blockquote className="text-base sm:text-lg text-slate-800 dark:text-slate-200 font-medium leading-relaxed italic border-l-2 border-cyan-500 pl-4">
                "{personalInfo.aboutQuote}"
              </blockquote>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {personalInfo.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <div className="text-xs">
                    <span className="text-slate-500 dark:text-slate-400 block">Education:</span>
                    <span className="text-slate-900 dark:text-white font-medium">Aptech Software Engineering</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                  <div className="text-xs">
                    <span className="text-slate-500 dark:text-slate-400 block">Location:</span>
                    <span className="text-slate-900 dark:text-white font-medium">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalInfo.corePillars.map((pillar, idx) => (
            <PillarCard key={idx} pillar={pillar} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
