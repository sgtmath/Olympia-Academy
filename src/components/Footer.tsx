import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-mantle/50 border-t border-white/5 py-20 mt-20 relative overflow-hidden backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-t from-mauve/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div
            className="w-9 h-9 rounded-xl bg-mauve/20 overflow-hidden flex-shrink-0 border border-white/10"
            style={{
              backgroundImage: 'url(/logo.png)',
              backgroundSize: '200% 100%',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <span className="font-display font-bold text-2xl tracking-tight text-text">Bijank</span>
        </div>
        <p className="text-subtext0 max-w-md mx-auto mb-12">
          Empowering the next generation of mathematicians through state-of-the-art learning and elite competition prep.
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-subtext1 uppercase tracking-widest mb-12">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
          <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <div className="pt-12 border-t border-white/5 text-subtext0 text-xs flex flex-col md:flex-row justify-between items-center gap-6">
          <div>&copy; 2026 Bijank. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
