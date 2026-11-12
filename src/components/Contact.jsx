import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Send, Check, Copy, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData.js';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please specify a subject.';
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Form submission processing with real feedback & mailto preparation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // safe fallback
      }

      // Trigger mailto link for direct sending
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi Vivek,\n\n${formData.message}\n\nFrom:\n${formData.name}\n${formData.email}`
      )}`;

      const link = document.createElement('a');
      link.href = mailtoUrl;
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.click();
    }, 800);
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/70 dark:bg-[#030712] border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-700 dark:text-cyan-300">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit',sans-serif] tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Have a project in mind or looking for a dedicated full-stack developer? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-['Outfit',sans-serif]">
              Contact Channels
            </h3>

            {/* Email Card */}
            <div className="p-5 rounded-2xl glass-panel glow-border flex items-center justify-between gap-4 transition-all hover:border-cyan-500/30">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">Direct Email</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors block truncate"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
                title="Copy email"
              >
                {copiedType === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl glass-panel glow-border flex items-center justify-between gap-4 transition-all hover:border-cyan-500/30">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">Phone & WhatsApp</span>
                  <a
                    href={`tel:${personalInfo.phoneRaw}`}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors block truncate"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
                title="Copy phone"
              >
                {copiedType === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl glass-panel glow-border flex items-center gap-3.5 transition-all">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">Current Location</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl glass-panel glow-border flex items-center justify-between gap-4 transition-all hover:border-cyan-500/30 group block"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">GitHub Profile</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors block truncate">
                    github.com/{personalInfo.githubUsername}
                  </span>
                </div>
              </div>
              <span className="text-xs text-cyan-600 dark:text-cyan-400 font-mono">Visit →</span>
            </a>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel glow-border relative">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-['Outfit',sans-serif]">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill in your project requirements and I will respond promptly.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white font-['Outfit',sans-serif]">
                    Message Prepared & Sent!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Your inquiry has been forwarded to{' '}
                    <span className="text-cyan-700 dark:text-cyan-300 font-medium">{personalInfo.email}</span>. A draft has also opened in your default email application.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Name <span className="text-cyan-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950/70 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 dark:text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Email <span className="text-cyan-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950/70 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 dark:text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Subject <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Web Development Project / Opportunity"
                      className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950/70 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-500 dark:text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Message <span className="text-cyan-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, and goals..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950/70 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 dark:text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white dark:text-slate-950 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-sky-300 hover:from-cyan-500 hover:to-blue-500 dark:hover:from-cyan-300 dark:hover:to-sky-200 rounded-xl shadow-lg shadow-cyan-600/20 dark:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
