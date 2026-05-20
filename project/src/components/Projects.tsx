import { useEffect, useRef } from 'react';
import { FolderOpen, ExternalLink, Github, ShoppingCart, BookOpen, Activity } from 'lucide-react';

const projects = [
  {
    title: 'Pixora',
    subtitle: 'E-Commerce Web Application',
    icon: ShoppingCart,
    color: 'sky',
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['React.js', 'Tailwind CSS', 'Context API', 'REST APIs'],
    points: [
      'Dynamic e-commerce frontend with modular component architecture.',
      'Cart management and checkout workflow using React Context API.',
      'Integrated REST APIs for dynamic product rendering and efficient state handling.',
    ],
    github: 'https://github.com/Nimi2312',
  },
  {
    title: 'Eklavya',
    subtitle: 'Full Stack Tutoring Platform',
    icon: BookOpen,
    color: 'emerald',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'GitHub', 'Authentication'],
    points: [
      'Full-stack tutoring system with role-based dashboards for tutors and students.',
      'Backend APIs using Node.js with database integration and authentication logic.',
      'Version control managed with Git and GitHub for collaborative development.',
    ],
    github: 'https://github.com/Nimi2312',
  },
  {
    title: 'BRETECTION',
    subtitle: 'ML-Based Breast Cancer Classification',
    icon: Activity,
    color: 'amber',
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Python', 'Machine Learning', 'Responsive UI', 'Data Visualization'],
    points: [
      'Responsive UI integrated with machine learning prediction logic.',
      'Enabled structured data input and real-time result visualization.',
    ],
    github: 'https://github.com/Nimi2312',
  },
];

const colorMap: Record<string, { badge: string; glow: string; tag: string }> = {
  sky: {
    badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    glow: 'from-sky-500/20',
    tag: 'bg-sky-500/10 text-sky-300 border-sky-500/15',
  },
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    glow: 'from-emerald-500/20',
    tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/15',
  },
  amber: {
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    glow: 'from-amber-500/20',
    tag: 'bg-amber-500/10 text-amber-300 border-amber-500/15',
  },
};

export default function Projects() {
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
    <section id="projects" ref={ref} className="py-28 relative bg-white/[0.01]">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="section-reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <FolderOpen size={20} className="text-sky-400" />
            <span className="text-sky-400 text-sm font-medium uppercase tracking-widest">Projects</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-white">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const c = colorMap[p.color];
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="section-reveal card-glow group rounded-2xl bg-white/3 border border-white/5 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${c.glow} to-transparent`} />
                  <div className="absolute top-3 left-3">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${c.badge}`}>
                      <Icon size={16} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-700 text-white mb-0.5">{p.title}</h3>
                  <p className="text-slate-400 text-xs mb-4">{p.subtitle}</p>

                  <ul className="space-y-2 mb-5 flex-1">
                    {p.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-400 text-xs leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-sky-400 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className={`px-2 py-0.5 rounded-full border text-xs font-medium ${c.tag}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-slate-400 text-xs hover:text-white transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-slate-400 text-xs hover:text-sky-400 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
