import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Users, Trophy, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

const STATS = [
  { label: 'Elite Students', value: '10k+', icon: Users, color: 'text-blue', border: 'border-blue/20', bg: 'bg-blue/10' },
  { label: 'Gold Medals', value: '450+', icon: Trophy, color: 'text-yellow', border: 'border-yellow/20', bg: 'bg-yellow/10' },
  { label: 'Masterclasses', value: '25+', icon: BookOpen, color: 'text-mauve', border: 'border-mauve/20', bg: 'bg-mauve/10' },
  { label: 'Satisfaction', value: '4.9/5', icon: Sparkles, color: 'text-pink', border: 'border-pink/20', bg: 'bg-pink/10' },
];

export default function Home() {
  return (
    <div className="space-y-32 relative">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-screen pointer-events-none overflow-hidden flex justify-center -z-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[20%] w-[500px] h-[500px] bg-mauve/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 right-[20%] w-[600px] h-[600px] bg-blue/20 rounded-full blur-[150px]" 
        />
      </div>

      <section className="relative pt-48 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface1/50 border border-white/10 text-text text-xs font-bold uppercase tracking-widest mb-10 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-mauve" />
            The Future of Math Education
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[7rem] font-display font-bold text-text leading-[1.05] mb-10 max-w-5xl tracking-tight"
          >
            Decode <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mauve via-blue to-sky">The Infinite.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-subtext1 mb-14 leading-relaxed max-w-3xl"
          >
            <span className="font-display font-bold text-text">Bijank</span>{' '}
            <span lang="sa" className="sanskrit-text text-mauve font-display font-bold">बीजाङ्क</span> is where curiosity meets rigorous training. We help elite minds unlock their mathematical potential through state-of-the-art learning and competition prep.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link
              to="/courses"
              className="w-full sm:w-auto bg-text text-base px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3 group"
            >
              Start Learning
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto bg-surface1/50 backdrop-blur-md text-text border border-white/5 px-10 py-5 rounded-2xl font-bold hover:bg-surface2 transition-all flex items-center justify-center"
            >
              View Methodology
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-surface0/30 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group bg-surface1/40 backdrop-blur-md border ${stat.border} p-8 rounded-3xl hover:bg-surface2/50 transition-colors flex flex-col items-center justify-center text-center`}
              >
                <div className={`w-16 h-16 mb-6 ${stat.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.2)]`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-display font-bold text-text mb-2 tracking-tight">{stat.value}</div>
                <div className="text-sm text-subtext0 font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
