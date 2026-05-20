import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MessageSquare, CheckCircle } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'nimishaamrutkar@gmail.com',
    href: 'mailto:nimishaamrutkar@gmail.com',
    color: 'sky',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7045929996',
    href: 'tel:+917045929996',
    color: 'emerald',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'nimisha-amrutkar-500394248',
    href: 'https://linkedin.com/in/nimisha-amrutkar-500394248',
    color: 'cyan',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Nimi2312',
    href: 'https://github.com/Nimi2312',
    color: 'amber',
  },
];

const colorMap: Record<string, string> = {
  sky: 'bg-sky-500/10 border-sky-500/20 text-sky-400 hover:bg-sky-500/20',
  emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20',
  cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20',
  amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400 hover:bg-amber-500/20',
};

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll('.section-reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" ref={ref} className="py-28 relative bg-white/[0.01]">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="section-reveal mb-16 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <MessageSquare size={20} className="text-sky-400" />
            <span className="text-sky-400 text-sm font-medium uppercase tracking-widest">Contact</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-white mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
            Open to full-time roles, freelance projects, and exciting collaborations. Drop a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="section-reveal space-y-4">
            {contactLinks.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className={`flex items-center gap-4 p-5 rounded-2xl border transition-all duration-200 ${colorMap[c.color]}`}
                >
                  <div className="w-10 h-10 rounded-xl border border-current/20 flex items-center justify-center">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-white text-xs font-medium">{c.label}</p>
                    <p className="text-slate-400 text-sm">{c.value}</p>
                  </div>
                </a>
              );
            })}

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-sky-500/10 to-emerald-500/5 border border-sky-500/15">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-semibold">Available for opportunities</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
Frontend Developer with experience in React.js, UI development, and manual testing, currently seeking opportunities to contribute and grow in software development.              </p>
            </div>
          </div>

          {/* Form */}
          <div className="section-reveal">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
                <CheckCircle size={48} className="text-emerald-400" />
                <p className="font-display text-xl font-700 text-white">Message Sent!</p>
                <p className="text-slate-400 text-sm text-center">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Nimisha Amrutkar"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-500/50 focus:bg-sky-500/5 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="nimishaaa04@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-500/50 focus:bg-sky-500/5 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Start here..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-500/50 focus:bg-sky-500/5 transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-sky-500 text-white font-semibold text-sm hover:bg-sky-400 transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
