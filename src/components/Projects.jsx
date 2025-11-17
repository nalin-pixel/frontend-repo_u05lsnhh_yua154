import { motion } from 'framer-motion';
import { Code2, Sparkles, Globe, Layers } from 'lucide-react';

const items = [
  {
    icon: Code2,
    title: 'Realtime Dashboard',
    desc: 'A responsive data visualization dashboard with live updates and interactive charts.',
    tags: ['React', 'WebSockets', 'Tailwind']
  },
  {
    icon: Globe,
    title: '3D Landing Page',
    desc: 'An immersive hero with Spline integration and smooth scroll animations.',
    tags: ['Spline', 'Framer Motion', 'Vite']
  },
  {
    icon: Layers,
    title: 'Design System',
    desc: 'A component library with tokens, theming, and accessibility-first patterns.',
    tags: ['Radix', 'CVA', 'Storybook']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl md:text-4xl font-bold text-white">Highlighted Work</motion.h2>
          <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}} className="mt-3 text-blue-200/80">A selection of projects that blend technology and playful interactivity.</motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={i} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="group relative rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:border-white/20 hover:bg-slate-900/60 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-white">
                <it.icon />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{it.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {it.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-blue-200/80">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
