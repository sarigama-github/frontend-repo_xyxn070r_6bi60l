import React, { useEffect } from 'react';
import Hero from './components/Hero.jsx';
import KnightSection from './components/KnightSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ShowcaseDetail from './components/ShowcaseDetail.jsx';

function useCursorTrail() {
  useEffect(() => {
    const root = document.body;
    const dots = Array.from({ length: 16 }).map(() => {
      const d = document.createElement('div');
      d.className = 'pointer-events-none fixed top-0 left-0 w-3 h-3 rounded-full blur-sm bg-cyan-400/60 mix-blend-screen';
      d.style.transition = 'transform 120ms linear, opacity 600ms ease';
      d.style.opacity = '0';
      root.appendChild(d);
      return d;
    });
    let i = 0;
    const move = (e) => {
      const { clientX: x, clientY: y } = e;
      const dot = dots[i % dots.length];
      dot.style.opacity = '1';
      dot.style.transform = `translate3d(${x - 6}px, ${y - 6}px, 0)`;
      i++;
    };
    const fade = () => {
      dots.forEach((d) => (d.style.opacity = '0'));
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('blur', fade);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('blur', fade);
      dots.forEach((d) => d.remove());
    };
  }, []);
}

export default function App() {
  useCursorTrail();

  return (
    <div className="min-h-screen bg-[#070716] text-white selection:bg-cyan-500/30 selection:text-white">
      <a href="#hero" className="sr-only">Skip to content</a>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/50 bg-black/20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-[0_0_30px_#22d3ee]" />
            <span className="font-semibold tracking-wide">Realm of Legends</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-cyan-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#games" className="hover:text-cyan-300 transition-colors">Games</a>
            <a href="#details" className="hover:text-cyan-300 transition-colors">Details</a>
          </nav>
          <a href="#games" className="px-3 py-1.5 rounded-md bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-200 transition-colors text-sm">Play Now</a>
        </div>
      </header>

      <main>
        <section id="hero" className="relative min-h-[100svh]"> 
          <Hero />
        </section>
        <section id="home" className="relative min-h-[100svh]">
          <KnightSection />
        </section>
        <section id="about" className="relative py-24 md:py-32">
          <AboutSection />
        </section>
        <section id="games" className="relative py-20 md:py-28">
          <ShowcaseDetail />
        </section>
      </main>

      <footer className="relative border-t border-white/10 mt-16">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Realm of Legends. Enter the cyber-fantasy.</p>
          <div className="flex gap-3">
            <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>Online</span>
            <span>v1.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
