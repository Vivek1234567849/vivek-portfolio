import { GraduationCap, Award, BookOpen, Calendar, CheckCircle } from 'lucide-react';
import { educationList } from '../data/portfolioData.js';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-white dark:bg-[#030712] border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-700 dark:text-cyan-300">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif] tracking-tight">
            Education & Formal Training
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Professional software engineering diploma at Aptech combined with commerce foundations.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto space-y-8">
          {educationList.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl glass-panel glow-border transition-all duration-300 hover:border-cyan-500/30"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-600 dark:text-cyan-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                      {item.credential}
                    </h3>
                    <p className="text-sm text-cyan-700 dark:text-cyan-300 font-medium mt-0.5">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>{item.duration}</span>
                </div>
              </div>

              <div className="py-4 space-y-3">
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{item.status}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Modules covered */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Key Subjects & Technical Modules</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.modules.map((mod, mIdx) => (
                    <span
                      key={mIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
