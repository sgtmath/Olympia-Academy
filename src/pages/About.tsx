import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const VALUES = [
  { title: 'Intuitive Learning', desc: 'We focus on the "why" before the "how", building deep conceptual understanding.' },
  { title: 'Elite Mentorship', desc: 'Learn from former Olympiad champions and passionate educators.' },
  { title: 'Global Community', desc: 'Connect with math enthusiasts from all around the world.' },
];

export default function About() {
  return (
    <section className="pt-40 pb-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square bg-surface1/30 backdrop-blur-xl rounded-[40px] overflow-hidden border border-white/5 shadow-2xl">
              <img src="https://picsum.photos/seed/math-team/800/800" alt="Team" className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-surface1/80 backdrop-blur-xl p-10 rounded-[40px] shadow-[0_0_50px_rgba(139,92,246,0.2)] hidden md:block border border-white/10">
              <div className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-mauve to-blue mb-2">15+</div>
              <div className="text-sm font-bold text-subtext1 uppercase tracking-widest">Years of Excellence</div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-text mb-8">Our Mission is to <span className="text-transparent bg-clip-text bg-gradient-to-r from-mauve to-blue">Decode</span> Mathematics.</h2>
            <p className="text-lg text-subtext1 mb-8 leading-relaxed">
              Bijank started with a simple idea: math shouldn't be archaic. It should be something you want to master and embrace. We believe that every student has a mathematical spark, and our job is to provide the right environment for it to grow into a flame.
            </p>
            <div className="space-y-6">
              {VALUES.map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-3xl bg-surface1/30 backdrop-blur-md border border-white/5 hover:border-mauve/30 transition-colors shadow-lg">
                  <div className="w-12 h-12 bg-mauve/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-mauve/20">
                    <CheckCircle2 className="w-6 h-6 text-mauve" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-text mb-2">{item.title}</h4>
                    <p className="text-subtext0 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
