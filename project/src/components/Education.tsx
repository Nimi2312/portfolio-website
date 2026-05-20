import { useEffect, useRef } from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
  {
    school: 'Usha Mittal Institute of Technology, SNDT Women\'s University',
    location: 'Mumbai',
    degree: 'B.Tech, Information Technology',
    period: '2021 – 2025',
    score: 'CGPA: 8.64 / 10',
    highlight: true,
  },
  {
    school: "Achiever's Junior College",
    location: 'Kalyan',
    degree: 'HSC (Science)',
    period: '2021',
    score: '86%',
    highlight: false,
  },
  {
    school: 'Holy Cross Convent High School',
    location: 'Kalyan',
    degree: 'SSC',
    period: '2019',
    score: '81%',
    highlight: false,
  },
];

const certifications = [
  {
    title: 'Full Stack Web Development with MERN Stack & Generative AI',
    issuer: 'Udemy',
    color: 'sky',
  },
  {
    title: 'Machine Learning with Python',
    issuer: 'Coursera · 2024',
    color: 'emerald',
  },
  {
    title: 'Cloud Security Knowledge (CCSK v5)',
    issuer: 'Udemy',
    color: 'amber',
  },
  {
    title: 'C and C++ Programming',
    issuer: 'Smart Skill Council',
    color: 'cyan',
  },
];

const certColorMap: Record<string, string> = {
  sky: 'border-sky-500/25 bg-sky-500/5 text-sky-400',
  emerald: 'border-emerald-500/25 bg-emerald-500/5 text-emerald-400',
  amber: 'border-amber-500/25 bg-amber-500/5 text-amber-400',
  cyan: 'border-cyan-500/25 bg-cyan-500/5 text-cyan-400',
};

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll('.section-reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={ref} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap size={20} className="text-sky-400" />
            <span className="text-sky-400 text-sm font-medium uppercase tracking-widest">Education</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-white">
            Academic <span className="text-gradient">Journey</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education timeline */}
          <div className="section-reveal space-y-5">
            <h3 className="font-display text-lg font-700 text-white mb-6">Qualifications</h3>
            {education.map((e, i) => (
              <div
                key={i}
                className={`card-glow p-6 rounded-2xl border transition-all duration-200 ${
                  e.highlight
                    ? 'bg-sky-500/5 border-sky-500/20'
                    : 'bg-white/3 border-white/5'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h4 className="font-semibold text-white text-sm leading-snug">{e.school}</h4>
                    <p className="text-slate-400 text-xs mt-0.5">{e.location}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500 shrink-0">
                    <Calendar size={11} />
                    {e.period}
                  </span>
                </div>
                <p className="text-slate-300 text-sm">{e.degree}</p>
                <p className={`text-xs font-semibold mt-2 ${e.highlight ? 'text-sky-400' : 'text-slate-400'}`}>
                  {e.score}
                </p>
              </div>
            ))}

            {/* Leadership */}
            <div className="card-glow p-6 rounded-2xl bg-white/3 border border-white/5 mt-6">
              <h4 className="font-display text-sm font-700 text-white mb-2">PR/Outreach Lead</h4>
              <p className="text-sky-400 text-xs font-medium mb-3">GeeksforGeeks UMIT Chapter</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Increased event participation by 40% and organized 10+ technical webinars through strategic outreach and social media engagement.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="section-reveal">
            <h3 className="font-display text-lg font-700 text-white mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className={`card-glow flex items-start gap-4 p-5 rounded-2xl border ${certColorMap[cert.color]}`}
                >
                  <div className="w-9 h-9 rounded-xl border border-current/30 flex items-center justify-center shrink-0">
                    <Award size={16} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium leading-snug">{cert.title}</p>
                    <p className="text-slate-500 text-xs mt-1">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
