import { useState } from 'react';
import { Github, ExternalLink, Eye, CheckCircle2, X } from 'lucide-react';
import { projects } from '../data/portfolioData.js';
import { useTilt } from '../hooks/useTilt.js';

function ProjectCard({ project, onSelect }) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(8);

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group rounded-2xl glass-panel glass-panel-hover glow-border overflow-hidden flex flex-col justify-between transition-all"
    >
      <div>
        {/* Project Thumbnail with Zoom & Overlay */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

          {/* Category Tag */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-cyan-700 dark:text-cyan-300 shadow-sm">
            {project.category}
          </div>

          {/* Quick View Button on Hover */}
          <button
            onClick={() => onSelect(project)}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-400 transition-all opacity-0 group-hover:opacity-100 shadow-sm cursor-pointer"
            title="Inspect project details"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors font-['Outfit',sans-serif]">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 group-hover:border-slate-300 dark:group-hover:border-slate-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-800/60 mt-4 pt-4">
        <button
          onClick={() => onSelect(project)}
          className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>View Architecture</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['All', 'Frontend Development', 'Full-Stack Development'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white dark:bg-[#030712] border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-700 dark:text-cyan-300">
              Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif] tracking-tight">
              Crafted Web Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Production-tested applications showcasing end-to-end full-stack capabilities, modern UI engineering, and database management.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1 bg-slate-100 dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-semibold shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setActiveProject}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
            <div className="relative aspect-[16/9] bg-slate-950">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                    {activeProject.title}
                  </h3>
                  <span className="text-xs text-cyan-600 dark:text-cyan-400 font-mono mt-0.5 block">
                    {activeProject.category}
                  </span>
                </div>
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {activeProject.description}
              </p>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2.5">
                  Key Features & Highlights
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {activeProject.details.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
                  Stack Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
