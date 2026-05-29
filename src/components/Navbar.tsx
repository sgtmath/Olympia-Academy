import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Courses', to: '/courses' },
  { name: 'Blog', to: '/blog' },
  { name: 'FAQ', to: '/faq' },
  { name: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-mantle/70 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div
              className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-mauve/20 overflow-hidden flex-shrink-0"
              style={{
                backgroundImage: 'url(/logo.png)',
                backgroundSize: '200% 100%',
                backgroundPosition: 'right center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <span className="font-display font-bold text-2xl tracking-tight text-text">Bijank</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `text-sm font-medium transition-colors relative py-2 ${isActive ? 'text-mauve text-shadow-sm' : 'text-subtext1 hover:text-text'}`}
              >
                {link.name}
              </NavLink>
            ))}
            <button className="bg-mauve text-[#ffffff] px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-mauve/90 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all active:scale-95">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-mantle/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-subtext1 hover:bg-surface0 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button className="w-full bg-mauve text-[#ffffff] px-6 py-4 rounded-xl text-base font-bold mt-4 hover:bg-mauve/90 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
