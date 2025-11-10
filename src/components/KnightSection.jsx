import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

// This section simulates a cinematic 3D knight scene using layered parallax, lights, and particles.
// It is optimized for web and mobile with graceful fallbacks.
export default function KnightSection() {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      controls.start({ rotateY: px * 10, rotateX: -py * 6, transition: { type: 'spring', stiffness: 120, damping: 20 } });
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [controls]);

  return (
    <div ref={containerRef} className="relative w-full min-h-[100svh] overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-10" />

      {/* Floating embers */}
      <div className="pointer-events-none absolute inset-0">{
        Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="absolute w-1 h-1 bg-orange-400/80 rounded-full blur-[1px] animate-ping" style={{ top: `${Math.random()*100}%`, left: `${Math.random()*100}%`, animationDuration: `${2 + Math.random()*3}s` }} />
        ))
      }</div>

      {/* Knight silhouette (stylized) */}
      <motion.div
        animate={controls}
        className="relative mx-auto max-w-5xl px-6 pt-28 md:pt-36"
      >
        <div className="relative aspect-[5/3] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/60 to-black/60 shadow-[0_0_80px_rgba(56,189,248,0.25)]">
          {/* Mist */}
          <div className="absolute inset-0 opacity-60 mix-blend-screen" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=2940&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />

          {/* Cinematic light beams */}
          <div className="absolute -left-10 top-0 h-full w-1/2 bg-gradient-to-br from-cyan-400/10 via-fuchsia-400/5 to-transparent blur-2xl" />
          <div className="absolute -right-10 top-0 h-full w-1/2 bg-gradient-to-bl from-orange-400/10 via-cyan-400/5 to-transparent blur-2xl" />

          {/* Stylized knight SVG */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="520" height="520" viewBox="0 0 520 520" className="drop-shadow-[0_0_25px_rgba(56,189,248,0.45)]">
              <defs>
                <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee"/>
                  <stop offset="50%" stopColor="#a855f7"/>
                  <stop offset="100%" stopColor="#fb923c"/>
                </linearGradient>
              </defs>
              <g fill="none" stroke="url(#g)" strokeWidth="2">
                <path d="M260 60c-40 20-80 60-90 110 30-20 70-20 110-20s80 0 110 20c-10-50-50-90-90-110l-20-10-20 10z"/>
                <path d="M170 220c-10 60 10 120 90 120s100-60 90-120c-30-20-60-30-90-30s-60 10-90 30z"/>
                <path d="M160 360c20 40 60 80 100 80s80-40 100-80"/>
                <path d="M230 190l-30 20 30 20m60-40 30 20-30 20"/>
                <path d="M260 340v100"/>
              </g>
              <g>
                <circle cx="260" cy="160" r="6" fill="#22d3ee" className="animate-pulse"/>
                <circle cx="220" cy="260" r="4" fill="#a855f7" className="animate-pulse"/>
                <circle cx="300" cy="260" r="4" fill="#fb923c" className="animate-pulse"/>
              </g>
            </svg>
          </div>

          {/* Pulsing runes ring */}
          <div className="absolute inset-0 flex items-end justify-center pb-6">
            <div className="relative">
              <div className="w-56 h-56 rounded-full border border-cyan-400/40 animate-pulse" />
              <div className="absolute inset-0 rounded-full blur-2xl bg-cyan-500/20" />
            </div>
          </div>

          {/* CTA */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <a href="#games" className="group inline-flex items-center gap-2 rounded-full px-6 py-3 bg-cyan-500/20 border border-cyan-400/40 text-cyan-100 hover:bg-cyan-500/30 transition-colors">
              <span className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl group-hover:blur-2xl pointer-events-none" />
              <span className="font-medium">Enter the Arena</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Dragon silhouette (optional flair) */}
      <div className="pointer-events-none absolute -top-10 right-0 opacity-30">
        <div className="w-[36rem] h-40 bg-gradient-to-r from-cyan-400/40 to-fuchsia-400/20 blur-2xl rotate-12 animate-pulse" />
      </div>
    </div>
  );
}
