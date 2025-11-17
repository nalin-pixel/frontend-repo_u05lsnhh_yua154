import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => setStatus('Thanks! I will get back to you shortly.'), 700);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something fun</h2>
          <p className="mt-3 text-blue-200/80">Tell me about your idea. I love projects that mix tech with playful interaction.</p>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input required placeholder="Your name" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <textarea required placeholder="What are we building?" rows={5} className="mt-4 w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <div className="mt-4 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-medium"><Send size={16}/>Send</button>
            <span className="text-blue-200/70 text-sm">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
