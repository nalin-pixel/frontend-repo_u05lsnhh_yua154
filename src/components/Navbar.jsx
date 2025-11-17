import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-slate-900/40 border border-white/10 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500" />
              <span className="text-white font-semibold tracking-tight">My Portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-blue-100/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white"><Github size={20} /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white"><Linkedin size={20} /></a>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"><Mail size={16}/>Contact</a>
            </div>

            <button className="md:hidden text-white/80" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              <Menu />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-3 pt-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-blue-100/90 hover:text-white">
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-4 pt-2">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white"><Github size={20} /></a>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white"><Linkedin size={20} /></a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
