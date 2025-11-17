import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background gradient accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[80rem] h-[80rem] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_60%)]" />
      </div>

      <Navbar />
      <Hero />
      <Projects />
      <Contact />

      <footer className="relative border-t border-white/10/ ">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-blue-200/70">
          © {new Date().getFullYear()} Your Name. Crafted with a modern, playful tech vibe.
        </div>
      </footer>
    </div>
  )
}

export default App