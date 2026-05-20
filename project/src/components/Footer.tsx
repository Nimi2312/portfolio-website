import { Code2, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Code2 size={14} className="text-sky-400" />
          <span>Nimisha Amrutkar</span>
        </div>
        <p className="text-slate-600 text-xs flex items-center gap-1.5">
          Built with <Heart size={11} className="text-rose-400 fill-rose-400" /> using React & Tailwind
        </p>
        <p className="text-slate-600 text-xs">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
