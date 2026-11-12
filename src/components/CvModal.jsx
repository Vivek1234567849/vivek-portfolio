import { useState } from 'react';
import { X, Download, Printer, Copy, Check, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, educationList, skillCategories, projects } from '../data/portfolioData.js';

export default function CvModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // safe fallback
    }

    const cvContent = `=====================================================
M. VIVEK - FULL-STACK DEVELOPER
=====================================================
Location: ${personalInfo.location}
Phone: ${personalInfo.phone}
Email: ${personalInfo.email}
GitHub: ${personalInfo.github}

PROFESSIONAL SUMMARY
-----------------------------------------------------
${personalInfo.bio}

EDUCATION
-----------------------------------------------------
1. ${educationList[0].institution}
   Credential: ${educationList[0].credential}
   Status: ${educationList[0].status}
   Curriculum: ${educationList[0].modules.join(', ')}

2. ${educationList[1].institution}
   Credential: ${educationList[1].credential}
   Status: ${educationList[1].status}

TECHNICAL SKILLS
-----------------------------------------------------
- Backend: PHP, Laravel, ASP.NET Core 8/10, C#
- Frontend: HTML5, CSS3, Bootstrap, JavaScript, React.js, Razor Views
- Database: SQL Server, MySQL, Entity Framework Core 8
- Development Tools: Git, GitHub, Visual Studio 2022, VS Code
- Architecture: MVC Pattern, REST API Design, ORM, Database Migrations

KEY PROJECTS
-----------------------------------------------------
1. ${projects[0].title} (${projects[0].category})
   Technologies: ${projects[0].technologies.join(', ')}
   Description: ${projects[0].description}

2. ${projects[1].title} (${projects[1].category})
   Technologies: ${projects[1].technologies.join(', ')}
   Description: ${projects[1].description}

3. ${projects[2].title} (${projects[2].category})
   Technologies: ${projects[2].technologies.join(', ')}
   Description: ${projects[2].description}

=====================================================
Generated from M. Vivek's Official Developer Portfolio
=====================================================`;

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `M_Vivek_FullStack_Developer_CV.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const text = `${personalInfo.name} - ${personalInfo.role}\nEmail: ${personalInfo.email}\nPhone: ${personalInfo.phone}\nGitHub: ${personalInfo.github}\n\n${personalInfo.bio}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-title"
    >
      <div className="relative w-full max-w-3xl my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-500" />
            <h2 id="cv-title" className="text-base font-semibold text-slate-900 dark:text-white">
              Curriculum Vitae · M. Vivek
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Print CV"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopy}
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Copy details"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors shadow-lg shadow-cyan-600/20 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ml-2 cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Printable CV Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 dark:text-slate-300 font-sans leading-relaxed text-sm">
          {/* Header section */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-base mt-1">
                {personalInfo.role}
              </p>
            </div>
            <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <a href={`tel:${personalInfo.phoneRaw}`} className="hover:text-cyan-600 dark:hover:text-cyan-300">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-600 dark:hover:text-cyan-300">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-300 underline">
                  github.com/{personalInfo.githubUsername}
                </a>
              </div>
            </div>
          </div>

          {/* Profile Statement */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-2">
              Professional Profile
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              {personalInfo.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-3">
              Education & Training
            </h3>
            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/30 border border-slate-200 dark:border-slate-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-base">
                      {edu.credential}
                    </h4>
                    <span className="text-xs text-cyan-700 dark:text-cyan-300 font-mono font-medium">
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                    {edu.institution}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-xs mt-2">
                    {edu.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <span className="text-slate-700 dark:text-slate-500 font-medium">Core Coursework:</span>
                    {edu.modules.map((mod, i) => (
                      <span key={i} className="text-slate-800 dark:text-slate-300">
                        {mod}{i < edu.modules.length - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-3">
              Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/30 border border-slate-200 dark:border-slate-800/80">
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-xs mb-1.5">
                    {cat.category}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {cat.skills.map((s) => s.name).join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-3">
              Key Featured Projects
            </h3>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/30 border border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-900 dark:text-white">{proj.title}</h4>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{proj.category}</span>
                  </div>
                  <p className="text-xs text-cyan-700 dark:text-cyan-300 font-mono mt-1">
                    {proj.technologies.join(' · ')}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
          <p className="text-xs text-slate-500">
            M. Vivek · Karachi, Pakistan · {personalInfo.email}
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
