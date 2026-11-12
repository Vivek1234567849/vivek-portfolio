import { useState, useEffect } from 'react';
import { Terminal, Cpu } from 'lucide-react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  const logs = [
    'BOOTING KERNEL & SYSTEM MODULES...',
    'COMPILING THREE.JS 3D PROCEDURAL SHADERS...',
    'SYNCING FULL-STACK ENGINEERING STACK...',
    'INITIALIZING M. VIVEK DEVELOPER PORTFOLIO...',
    'READY.'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 400);
          return 100;
        }
        const step = Math.floor(Math.random() * 15) + 10;
        const next = Math.min(prev + step, 100);
        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const idx = Math.min(Math.floor((progress / 100) * logs.length), logs.length - 1);
    setLogIndex(idx);
  }, [progress, logs.length]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-slate-100 p-6 select-none">
      {/* Background ambient glow */}
      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-purple-500/10 blur-[140px] pointer-events-none translate-x-32 translate-y-24" />

      <div className="relative w-full max-w-md p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>sys.init.sh</span>
          </div>
        </div>

        {/* Brand identity */}
        <div className="text-center mb-6">
          <div className="inline-flex p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-3">
            <Cpu className="w-7 h-7" />
          </div>
          <h2 className="text-lg font-bold tracking-tight text-white font-['Outfit',sans-serif]">
            M. VIVEK
          </h2>
          <p className="text-xs text-cyan-400/90 font-mono tracking-widest uppercase mt-0.5">
            Full-Stack Developer
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-xs font-mono text-slate-400">
            <span className="text-slate-300 truncate max-w-[260px]">{logs[logIndex]}</span>
            <span className="text-cyan-400 font-semibold tabular-nums">{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-purple-500 rounded-full transition-all duration-150 ease-out shadow-sm shadow-cyan-500/50"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Skip button */}
        <div className="flex justify-end pt-2">
          <button
            onClick={onComplete}
            className="text-xs text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Skip Intro →
          </button>
        </div>
      </div>
    </div>
  );
}
