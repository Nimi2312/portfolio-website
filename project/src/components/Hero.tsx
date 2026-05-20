import { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, ArrowDown, Sparkles } from 'lucide-react';

const roles = [
'Frontend Developer',
'React.js Developer',
'UI Dashboard Developer',
'GenAI Explorer'
];

function useTyping(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export default function Hero() {
  const typed = useTyping(roles);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random(),
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.a * 0.5})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - dist / 120) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-pattern">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan-400/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium mb-6 animate-fade-in-up">
            <Sparkles size={12} />
            Available for opportunities
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-800 leading-tight text-white mb-4 animate-fade-in-up delay-100">
            Hi, I'm{' '}
            <span className="text-gradient">Nimisha</span>
            <br />
            Amrutkar
          </h1>

          <div className="h-10 flex items-center mb-6 animate-fade-in-up delay-200">
            <span className="text-xl md:text-2xl text-slate-300 font-medium">
              {typed}
              <span className="animate-blink text-sky-400">|</span>
            </span>
          </div>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-8 animate-fade-in-up delay-300">
            Full Stack Developer with expertise in{' '}
            <span className="text-sky-400 font-medium">React.js</span>,{' '}
            <span className="text-cyan-400 font-medium">Node.js</span>, and{' '}
            <span className="text-emerald-400 font-medium">Microsoft Azure</span>. Building
            scalable, intelligent web applications aligned with modern industry standards.
          </p>

          <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up delay-400">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-sky-500 text-white font-semibold text-sm hover:bg-sky-400 transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex items-center gap-4 animate-fade-in-up delay-500">
            <a
              href="https://github.com/Nimi2312"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500/50 hover:bg-sky-500/10 transition-all duration-200"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/nimisha-amrutkar-500394248"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500/50 hover:bg-sky-500/10 transition-all duration-200"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:nimishaamrutkar@gmail.com"
              className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500/50 hover:bg-sky-500/10 transition-all duration-200"
            >
              <Mail size={18} />
            </a>
            <a
              href="tel:+917045929996"
              className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500/50 hover:bg-sky-500/10 transition-all duration-200"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        {/* Visual card */}
        <div className="relative flex items-center justify-center">
          <div className="relative animate-float">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-sky-500/15 via-cyan-500/10 to-emerald-500/10 border border-sky-500/20 flex items-center justify-center shadow-2xl shadow-sky-500/10">
              <div className="text-center">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-sky-400 to-emerald-400 mx-auto mb-4 flex items-center justify-center shadow-xl shadow-sky-400/30">
                  <span className="font-display text-5xl font-800 text-white">N</span>
                </div>
                <p className="font-display text-lg font-700 text-white">Nimisha Amrutkar</p>
                <p className="text-sky-400 text-sm mt-1">B.Tech IT · Class of 2025</p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
                  <span className="text-xs text-slate-400">Open to work</span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-6 px-3 py-2 rounded-xl bg-[#0d1526] border border-sky-500/20 shadow-xl text-xs font-medium text-sky-300 whitespace-nowrap">
              CGPA: 8.64 / 10
            </div>
            <div className="absolute -bottom-4 -left-6 px-3 py-2 rounded-xl bg-[#0d1526] border border-emerald-500/20 shadow-xl text-xs font-medium text-emerald-300 whitespace-nowrap">
              Cloud + GenAI
            </div>

            {/* Orbit ring */}
            <div className="absolute inset-0 rounded-full border border-sky-400/10 scale-125 animate-spin-slow" />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
