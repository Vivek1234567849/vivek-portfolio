import { useState } from 'react';
import {
  Layout, Server, Cpu, Database, Smartphone, Check,
  Monitor, ShieldCheck, Zap, Bug, Link2, Rocket,
  ExternalLink, Sparkles, MessageSquare, ArrowRight, Eye, X, Crown
} from 'lucide-react';
import { services, promotionalServiceData, personalInfo } from '../data/portfolioData.js';
import { useTilt } from '../hooks/useTilt.js';

function PricingCard({ pkg, onSelectPackage }) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(8);
  const isPopular = pkg.popular;

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`relative p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between transition-all ${
        isPopular
          ? 'border-2 border-cyan-500/80 shadow-2xl shadow-cyan-500/15'
          : 'border border-slate-200 dark:border-slate-800'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-[11px] font-bold text-white uppercase tracking-wider shadow-md">
          Recommended · Full-Stack Value
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
            {pkg.icon === 'Monitor' && <Monitor className="w-6 h-6" />}
            {pkg.icon === 'Server' && <Server className="w-6 h-6" />}
            {pkg.icon === 'Cpu' && <Cpu className="w-6 h-6" />}
          </div>
          <span className="text-xs font-mono text-slate-500">
            {pkg.subtitle}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
          {pkg.name}
        </h3>

        {/* Pricing amount */}
        <div className="my-5">
          <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 font-mono">
            {pkg.price}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {pkg.priceNote}
          </p>
        </div>

        {/* Features */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
          <ul className="space-y-2.5">
            {pkg.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <Check className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800/80">
        <button
          onClick={() => onSelectPackage(pkg)}
          className={`w-full py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            isPopular
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-sky-300 text-white dark:text-slate-950 hover:opacity-95 shadow-lg shadow-cyan-500/20'
              : 'bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white'
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>DM Me For Orders & Details</span>
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  const [showPosterModal, setShowPosterModal] = useState(false);
  const [activeTab, setActiveTab] = useState('packages'); // 'packages' | 'pillars'

  const handleSelectPackage = (pkg) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whyIcons = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-cyan-500" />,
    Zap: <Zap className="w-5 h-5 text-amber-500" />,
    Bug: <Bug className="w-5 h-5 text-rose-500" />,
    Link2: <Link2 className="w-5 h-5 text-purple-500" />,
    Rocket: <Rocket className="w-5 h-5 text-emerald-500" />
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-50/70 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Promotional Banner Header inspired by official poster */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl glass-panel glow-border relative overflow-hidden text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-700 dark:text-cyan-300">
                <Crown className="w-3.5 h-3.5 text-cyan-500" />
                <span>{promotionalServiceData.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif] tracking-tight">
                {promotionalServiceData.slogan}
              </h2>

              <p className="text-base sm:text-lg text-cyan-600 dark:text-cyan-400 font-medium">
                {promotionalServiceData.tagline} · <span className="text-slate-700 dark:text-slate-300">{promotionalServiceData.formula}</span>
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                Whether you need a pixel-perfect frontend, high-performance server APIs, or a full turnkey web application, I deliver modern, reliable web solutions at transparent rates.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
                <button
                  onClick={() => setShowPosterModal(true)}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 dark:text-white bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-xl transition-all cursor-pointer shadow-sm"
                >
                  <Eye className="w-4 h-4 text-cyan-500" />
                  <span>View Official Promo Flyer</span>
                </button>

                <a
                  href={`mailto:${personalInfo.email}?subject=Website%20Development%20Order%20Inquiry`}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>DM Me For Orders</span>
                </a>
              </div>
            </div>

            {/* Flyer Thumbnail Preview */}
            <div className="md:col-span-4 flex justify-center">
              <div
                onClick={() => setShowPosterModal(true)}
                className="relative group cursor-pointer max-w-[240px] rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 shadow-2xl transition-transform duration-300 hover:scale-105"
                title="Click to view full poster"
              >
                <img
                  src={promotionalServiceData.posterImage}
                  alt="M. Vivek Full-Stack Developer Service Flyer"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-full bg-cyan-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Zoom Flyer</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frontend vs Backend Dual Engine Architecture */}
        <div className="mb-20 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
              Full-Stack Architecture Breakdown
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
              FRONTEND + BACKEND = COMPLETE WEBSITE
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Frontend Card */}
            <div className="p-8 rounded-2xl glass-panel glow-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <Layout className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    {promotionalServiceData.fullStackComparison.frontend.technologies.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                  {promotionalServiceData.fullStackComparison.frontend.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-5">
                  {promotionalServiceData.fullStackComparison.frontend.role}
                </p>

                <ul className="space-y-3">
                  {promotionalServiceData.fullStackComparison.frontend.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <Check className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-cyan-600 dark:text-cyan-400 flex items-center justify-between">
                <span>UI · UX · React · Bootstrap</span>
                <span>Interactive</span>
              </div>
            </div>

            {/* Backend Card */}
            <div className="p-8 rounded-2xl glass-panel glow-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Server className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    {promotionalServiceData.fullStackComparison.backend.technologies.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                  {promotionalServiceData.fullStackComparison.backend.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-5">
                  {promotionalServiceData.fullStackComparison.backend.role}
                </p>

                <ul className="space-y-3 mb-6">
                  {promotionalServiceData.fullStackComparison.backend.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Express API code mock from poster */}
                <div className="p-3 rounded-xl bg-slate-900 text-[11px] font-mono text-slate-300 border border-slate-800 overflow-x-auto">
                  <div className="text-slate-500 mb-1">// API & Server Engine</div>
                  <div><span className="text-purple-400">const</span> express = require(<span className="text-emerald-400">'express'</span>);</div>
                  <div>app.get(<span className="text-emerald-400">'/api'</span>, (req, res) =&gt; &#123;</div>
                  <div className="pl-4">res.json(&#123; message: <span className="text-emerald-400">'Backend is working!'</span> &#125;);</div>
                  <div>&#125;);</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center justify-between">
                <span>Express · Node.js · ASP.NET · SQL</span>
                <span>Scalable & Secure</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Tabs: Pricing Packages vs Core Deliverables */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('packages')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'packages'
                ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
            }`}
          >
            Website Development Packages & Pricing
          </button>
          <button
            onClick={() => setActiveTab('pillars')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'pillars'
                ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
            }`}
          >
            All Technical Services (5 Disciplines)
          </button>
        </div>

        {/* Tab 1: Pricing Packages */}
        {activeTab === 'packages' && (
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {promotionalServiceData.packages.map((pkg) => (
                <PricingCard
                  key={pkg.id}
                  pkg={pkg}
                  onSelectPackage={handleSelectPackage}
                />
              ))}
            </div>

            {/* Why Choose Me section from poster */}
            <div className="p-8 sm:p-10 rounded-3xl glass-panel glow-border">
              <div className="text-center max-w-xl mx-auto mb-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                  Why Choose Me?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Engineered with full-stack accountability, clean code, and fast turnaround.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {promotionalServiceData.whyChooseMe.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-4">
                        {whyIcons[item.icon] || <Check className="w-5 h-5 text-cyan-500" />}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 font-['Outfit',sans-serif]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Core 5 Disciplines */}
        {activeTab === 'pillars' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl glass-panel glass-panel-hover glow-border flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-sm">
                      {service.icon === 'Layout' && <Layout className="w-6 h-6" />}
                      {service.icon === 'Server' && <Server className="w-6 h-6" />}
                      {service.icon === 'Cpu' && <Cpu className="w-6 h-6" />}
                      {service.icon === 'Database' && <Database className="w-6 h-6" />}
                      {service.icon === 'Smartphone' && <Smartphone className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-['Outfit',sans-serif]">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
                    Key Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Official Poster Lightbox / Zoom Modal */}
      {showPosterModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl my-6">
            <div className="flex items-center justify-between p-4 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-semibold text-white">
                  M. Vivek · Official Service & Pricing Poster
                </h3>
              </div>
              <button
                onClick={() => setShowPosterModal(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 sm:p-4 bg-black flex justify-center max-h-[80vh] overflow-y-auto">
              <img
                src={promotionalServiceData.posterImage}
                alt="Full-Stack Developer Vivek Official Poster"
                className="max-h-[75vh] w-auto rounded-xl object-contain shadow-2xl"
              />
            </div>
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>"Your Idea + My Code = Your Website"</span>
              <a
                href={promotionalServiceData.posterImage}
                download="Vivek_FullStack_Services_Poster.webp"
                className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-colors"
              >
                Download Poster
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
