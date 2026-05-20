import { useEffect, useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const jobs = [
  {
    title: 'Analyst – Frontend Technologies',
    company: 'PCGI Systems',
    period: 'Oct 2025 – Present',
    type: 'Full-time',
    color: 'sky',
    points: [
      'Developed and maintained backend services using Fastify, including API creation and database integration.',
      'Worked on UI enhancements and implemented frontend logic using TypeScript.',
      'Assisted in database design, API validation, and performed functional and QA testing.',
    ],
  },
  {
    title: 'Frontend Trainee Developer',
    company: 'Tata Technologies',
    period: 'Jan 2025 – Apr 2025',
    type: 'Internship',
    color: 'emerald',
    points: [
      'Developed 5+ responsive dashboards using React.js and Tailwind CSS.',
      'Integrated RESTful APIs, improving performance by 15%.',
      'Implemented global state management using React Context API.',
      'Collaborated with UI/UX teams to deliver optimized interfaces.',
    ],
  },
];

const colorMap: Record<string, { dot: string; badge: string; line: string }> = {
  sky: {
    dot: 'bg-sky-400 shadow-sky-400/50',
    badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    line: 'border-sky-400/20',
  },
  emerald: {
    dot: 'bg-emerald-400 shadow-emerald-400/50',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    line: 'border-emerald-400/20',
  },
};

export default function Experience() {
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
    <section id="experience" ref={ref} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase size={20} className="text-sky-400" />
            <span className="text-sky-400 text-sm font-medium uppercase tracking-widest">Experience</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-white">
            Work <span className="text-gradient">History</span>
          </h2>
        </div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/30 via-emerald-500/30 to-transparent hidden md:block" />

          <div className="space-y-10">
            {jobs.map((job, i) => {
              const c = colorMap[job.color];
              return (
                <div key={i} className="section-reveal relative md:pl-20">
                  {/* Timeline dot */}
                  <div className={`hidden md:flex absolute left-4 top-6 w-4 h-4 rounded-full ${c.dot} shadow-md items-center justify-center`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  <div className={`card-glow p-8 rounded-2xl bg-white/3 border border-white/5 border-l-2 ${c.line}`}>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div>
                        <h3 className="font-display text-xl font-700 text-white mb-1">{job.title}</h3>
                        <p className="text-sky-400 font-medium text-sm">{job.company}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${c.badge}`}>
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-slate-400 text-xs">
                          <Calendar size={12} />
                          {job.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2.5">
                      {job.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${c.dot} shrink-0`} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
