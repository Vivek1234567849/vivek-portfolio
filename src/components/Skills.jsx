import { useState } from 'react';
import {
  Code, Cpu, Boxes, FileCode, Globe, Palette, Grid, Zap,
  Atom, CodeXml, Database, HardDrive, TableProperties, GitBranch,
  Github, Monitor, Terminal, Layers, Network, FileSpreadsheet,
  RefreshCw
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData.js';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const getIcon = (iconName) => {
    const iconProps = { className: "w-5 h-5 text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 transition-colors" };
    switch (iconName) {
      case 'Code': return <Code {...iconProps} />;
      case 'Cpu': return <Cpu {...iconProps} />;
      case 'Boxes': return <Boxes {...iconProps} />;
      case 'FileCode': return <FileCode {...iconProps} />;
      case 'Globe': return <Globe {...iconProps} />;
      case 'Palette': return <Palette {...iconProps} />;
      case 'Grid': return <Grid {...iconProps} />;
      case 'Zap': return <Zap {...iconProps} />;
      case 'Atom': return <Atom {...iconProps} />;
      case 'CodeXml': return <CodeXml {...iconProps} />;
      case 'Database': return <Database {...iconProps} />;
      case 'HardDrive': return <HardDrive {...iconProps} />;
      case 'TableProperties': return <TableProperties {...iconProps} />;
      case 'GitBranch': return <GitBranch {...iconProps} />;
      case 'Github': return <Github {...iconProps} />;
      case 'Monitor': return <Monitor {...iconProps} />;
      case 'Terminal': return <Terminal {...iconProps} />;
      case 'Layers': return <Layers {...iconProps} />;
      case 'Network': return <Network {...iconProps} />;
      case 'FileSpreadsheet': return <FileSpreadsheet {...iconProps} />;
      case 'RefreshCw': return <RefreshCw {...iconProps} />;
      default: return <Code {...iconProps} />;
    }
  };

  const displayedCategories = activeCategory === 'All'
    ? skillCategories
    : skillCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50/70 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-700 dark:text-cyan-300">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif] tracking-tight">
            Tools & Technologies
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Comprehensive full-stack toolset across server frameworks, frontends, relational databases, and architectural patterns.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              activeCategory === 'All'
                ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-semibold shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat.category
                  ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-semibold shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                  {category.category}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {category.description}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group p-4 rounded-xl glass-panel glass-panel-hover glow-border flex items-center gap-3.5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 transition-colors shadow-sm">
                      {getIcon(skill.icon)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors truncate">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block truncate font-mono">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
