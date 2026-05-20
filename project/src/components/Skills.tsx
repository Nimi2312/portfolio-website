import { useEffect, useRef, useState } from 'react';
import { Zap } from 'lucide-react';

const categories = [
  {
    title: 'Languages',
    color: 'sky',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'C++', level: 65 },
    ],
  },
  {
    title: 'Frontend',
    color: 'cyan',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Redux', level: 78 },
    ],
  },
  {
    title: 'Backend',
    color: 'emerald',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 82 },
      { name: 'Fastify', level: 78 },
      { name: 'REST APIs', level: 88 },
    ],
  },
  {
    title: 'Cloud & Tools',
    color: 'amber',
    skills: [
      { name: 'Microsoft Azure', level: 75 },
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'Git / GitHub', level: 88 },
    ],
  },
];

const colorMap: Record<string, string> = {
  sky: 'from-sky-400 to-sky-500',
  cyan: 'from-cyan-400 to-cyan-500',
  emerald: 'from-emerald-400 to-emerald-500',
  amber: 'from-amber-400 to-orange-400',
};

const badgeColorMap: Record<string, string> = {
  sky: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
};

const techBadges = [
  'React.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Next.js',
  'MongoDB', 'MySQL', 'Azure', 'Fastify', 'Redux', 'Express.js',
  'REST API', 'Git', 'Python', 'Generative AI',
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(level), 100);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${colorMap[color]} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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
    <section id="skills" ref={ref} className="py-28 relative bg-white/[0.01]">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="section-reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Zap size={20} className="text-sky-400" />
            <span className="text-sky-400 text-sm font-medium uppercase tracking-widest">Skills</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-white">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        <div className="section-reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="card-glow p-6 rounded-2xl bg-white/3 border border-white/5"
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-5 ${badgeColorMap[cat.color]}`}>
                {cat.title}
              </div>
              {cat.skills.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} color={cat.color} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech bubble cloud */}
        <div className="section-reveal">
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">All Technologies</p>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-slate-300 text-xs font-medium hover:border-sky-500/40 hover:text-sky-300 hover:bg-sky-500/8 transition-all duration-200 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
