import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Play, Heart, Film } from 'lucide-react';

const GAMES = [
  {
    id: 'aegis',
    title: 'Aegis of Neon',
    category: 'RPG',
    color: '#22d3ee',
    video: 'https://cdn.coverr.co/videos/coverr-epic-smoke-5842/1080p.mp4',
    desc: 'Wield rune-forged blades in a city of chrome and shadows.'
  },
  {
    id: 'wyrm',
    title: 'Wyrm Protocol',
    category: 'Action',
    color: '#a855f7',
    video: 'https://cdn.coverr.co/videos/coverr-smoke-33-6637/1080p.mp4',
    desc: 'Hack the dragon network and ride the data-storm.'
  },
  {
    id: 'citadel',
    title: 'Citadel IX',
    category: 'Fantasy',
    color: '#fb923c',
    video: 'https://cdn.coverr.co/videos/coverr-fire-02-3251/1080p.mp4',
    desc: 'Forge alliances in a realm of ember-lit ruins.'
  },
  {
    id: 'arena',
    title: 'Neon Arena',
    category: 'Multiplayer',
    color: '#60a5fa',
    video: 'https://cdn.coverr.co/videos/coverr-colorful-smoke-7396/1080p.mp4',
    desc: 'Clash in holographic battlegrounds with friends.'
  },
];

const CATEGORIES = ['All', 'RPG', 'Action', 'Fantasy', 'Multiplayer'];

function GameCard({ game, onSelect }) {
  return (
    <motion.button
      layout
      onClick={() => onSelect(game)}
      whileHover={{ rotateX: 4, rotateY: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 text-left"
    >
      <div className="relative aspect-[4/3]">
        <video className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src={game.video} autoPlay loop muted playsInline />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: `inset 0 0 40px ${game.color}33` }} />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-white">{game.title}</h3>
          <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: `${game.color}22`, color: game.color }}>{game.category}</span>
        </div>
        <p className="mt-1 text-sm text-white/70 line-clamp-2">{game.desc}</p>
      </div>
    </motion.button>
  );
}

function GameDetails({ game }) {
  if (!game) return null;
  return (
    <motion.div
      key={game.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
      style={{ boxShadow: `0 0 80px ${game.color}33` }}
    >
      <div className="relative h-52 md:h-64">
        <video className="absolute inset-0 w-full h-full object-cover" src={game.video} autoPlay loop muted playsInline />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3">
          <span className="inline-block w-3 h-3 rounded-full" style={{ background: game.color }} />
          <h4 className="text-xl font-bold">{game.title}</h4>
        </div>
        <p className="mt-2 text-white/70">{game.desc}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-100 hover:bg-cyan-500/30 transition-colors"><Play size={16}/> Play</a>
          <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/15 transition-colors"><Heart size={16}/> Wishlist</a>
          <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/20 border border-fuchsia-400/40 text-fuchsia-100 hover:bg-fuchsia-500/30 transition-colors"><Film size={16}/> Watch Trailer</a>
        </div>
        <div className="mt-6 flex items-center gap-1 text-amber-300">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" className="opacity-80" />)}
          <span className="ml-2 text-sm text-white/70">4.9 • Player acclaim</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ShowcaseDetail() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(GAMES[0]);
  const filtered = useMemo(() => GAMES.filter(g => filter === 'All' ? true : g.category === filter), [filter]);

  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-orange-200">Choose Your Destiny</h2>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-1.5 rounded-full text-sm border ${filter===c ? 'bg-white/15 border-white/40' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
            >{c}</button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-5">
        <AnimatePresence mode="wait">
          <motion.div key={filter} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }} className="md:col-span-2 grid sm:grid-cols-2 gap-5">
            {filtered.map(g => (
              <GameCard key={g.id} game={g} onSelect={setSelected} />
            ))}
          </motion.div>
        </AnimatePresence>
        <div>
          <AnimatePresence mode="wait">
            <GameDetails key={selected?.id} game={selected} />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
