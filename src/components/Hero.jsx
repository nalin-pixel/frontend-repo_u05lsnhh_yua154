import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/70 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.35)]"
          >
            Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">Your Name</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-blue-100/90 max-w-xl"
          >
            A developer focused on building interactive, playful, modern products with a strong technical foundation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#projects" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-colors">Get in touch</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-blue-200/80 text-sm"
          >
            Built with a techy, interactive vibe — powered by a real 3D scene you can explore.
          </motion.div>
        </div>

        <div className="lg:col-span-6" />
      </div>
    </section>
  );
}
