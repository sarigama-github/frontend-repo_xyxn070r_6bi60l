import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const items = [
    { title: 'Our Mission', text: 'Fuse medieval valor with cyberpunk energy to craft unforgettable worlds.' },
    { title: 'Our Story', text: 'Forged by gamers, we build experiences where destiny and neon collide.' },
    { title: 'Our Power', text: 'Three.js, GSAP, and Framer Motion orchestrate cinematic UI and 3D.' },
  ];

  return (
    <div className="relative mx-auto max-w-7xl px-6">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.06),transparent_40%)]" />

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Holographic portraits */}
        <div className="grid grid-cols-2 gap-4">
          {[1,2,3,4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >
              <img
                src={`https://images.unsplash.com/photo-15${i}681393784-d120267933ba?q=80&w=800&auto=format&fit=crop`}
                alt="Team"
                className="w-full h-full object-cover opacity-70"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?q=80&w=1200&auto=format&fit=crop'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-fuchsia-500/10 to-transparent mix-blend-screen" />
              <div className="absolute inset-0 flex items-end p-3 text-xs tracking-wide text-white/80">Hologram #{i}</div>
            </motion.div>
          ))}
        </div>

        {/* Copy */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-orange-200"
          >
            A Guild of Worldbuilders
          </motion.h2>
          <div className="mt-8 space-y-6">
            {items.map((it, idx) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-xl bg-white/5 border border-white/10"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white">{it.title}</h3>
                <p className="mt-1 text-white/70">{it.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
