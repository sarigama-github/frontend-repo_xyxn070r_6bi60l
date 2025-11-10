import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative w-full h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#070716]/40 via-[#070716]/30 to-[#070716]" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-orange-200 drop-shadow-[0_0_30px_rgba(56,189,248,0.35)]"
          >
            Enter the Realm of Legends
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-base md:text-xl text-white/80"
          >
            Experience the future of fantasy gaming.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-8 flex items-center justify-center gap-3 flex-wrap"
          >
            <a href="#games" className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 bg-cyan-500/20 border border-cyan-400/40 text-cyan-100 hover:bg-cyan-500/30 transition-colors">
              <span className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl group-hover:blur-2xl pointer-events-none" />
              <span className="font-medium">Play Now</span>
            </a>
            <a href="#home" className="group inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white/10 border border-white/20 hover:bg-white/15 transition-colors">
              <span className="font-medium">Explore</span>
            </a>
            <a href="#about" className="group inline-flex items-center gap-2 rounded-full px-6 py-3 bg-fuchsia-500/20 border border-fuchsia-400/40 text-fuchsia-100 hover:bg-fuchsia-500/30 transition-colors">
              <span className="font-medium">Join Community</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 flex justify-center"
          >
            <a href="#home" className="group inline-flex flex-col items-center text-white/70">
              <span className="text-xs tracking-wider">Scroll</span>
              <span className="mt-2 h-10 w-6 rounded-full border border-white/30 flex items-start justify-center overflow-hidden">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/70 animate-bounce" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
