import { useEffect, useRef } from 'react';
import { User, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const stats = [
  { label: 'Projects Built', value: '5+' },
  { label: 'CGPA', value: '8.75' },
  { label: 'Certifications', value: '4' },
  { label: 'Tech Stack', value: '15+' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.15 }
    );
    const els = ref.current?.querySelectorAll('.section-reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <User size={20} className="text-sky-400" />
            <span className="text-sky-400 text-sm font-medium uppercase tracking-widest">About Me</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-white">
            Crafting <span className="text-gradient">Digital Experiences</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="section-reveal">
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              I'm a Full Stack Developer specializing in building scalable, performant web applications.
              With a strong foundation in the{' '}
              <span className="text-sky-400 font-medium">frontend development</span> and hands-on experience with{' '}
              <span className="text-cyan-400 font-medium">in building responsive and modern UI dashboards.</span>, Skilled in working with the Microsoft Azure platform, I focus on creating scalable, user-friendly, and performance-driven web applications.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Currently upskilling in{' '}
              <span className="text-emerald-400 font-medium">MERN technologies along with Generative AI</span> to build intelligent,
              cloud-native systems. I thrive in collaborative environments and am passionate about
              UI performance optimization and modern developer tooling.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin size={16} className="text-sky-400 shrink-0" />
                Mumbai, India
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <GraduationCap size={16} className="text-sky-400 shrink-0" />
                B.Tech in Information Technology — UMIT, SNDT Women's University
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Briefcase size={16} className="text-sky-400 shrink-0" />
                Analyst at PCGI Systems (Frontend Technologies)
              </div>
            </div>
          </div>

          <div className="section-reveal grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="card-glow relative p-6 rounded-2xl bg-white/3 border border-white/5 text-center group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <p className="font-display text-3xl font-800 text-gradient mb-2">{s.value}</p>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
