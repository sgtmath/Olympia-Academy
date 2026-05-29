import React from 'react';
import { ArrowRight } from 'lucide-react';

const POSTS = [
  {
    title: 'How to Approach Unseen Problems',
    excerpt: 'Mastering the art of problem solving requires a mindset shift. Here is how to tackle the unknown.',
    date: 'March 15, 2026',
    category: 'Strategy',
    img: 'https://picsum.photos/seed/math1/800/500',
  },
  {
    title: 'The Beauty of Prime Numbers',
    excerpt: 'Exploring the distribution and mystery of the building blocks of arithmetic.',
    date: 'March 10, 2026',
    category: 'Theory',
    img: 'https://picsum.photos/seed/math2/800/500',
  },
];

export default function Blog() {
  return (
    <section className="pt-40 pb-24 relative">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-mauve/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-text mb-6">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-mauve to-blue">Math</span> Journal</h2>
            <p className="text-subtext1 text-lg">Insights, tips, and stories from the world of mathematics.</p>
          </div>
          <button className="text-mauve font-bold flex items-center gap-2 hover:gap-4 transition-all">
            View all articles <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {POSTS.map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[16/9] bg-surface1/30 backdrop-blur-md rounded-[40px] overflow-hidden mb-8 border border-white/5 shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-mauve/20 to-blue/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none mix-blend-overlay" />
                <img src={post.img} alt={post.title} className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-mauve font-bold text-xs uppercase tracking-widest drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]">{post.category}</span>
                <span className="w-1 h-1 bg-surface2 rounded-full" />
                <span className="text-subtext0 text-xs">{post.date}</span>
              </div>
              <h3 className="text-3xl font-bold text-text mb-4 group-hover:text-mauve transition-colors">{post.title}</h3>
              <p className="text-subtext1 leading-relaxed">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
