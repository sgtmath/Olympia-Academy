import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { COURSES_DATA } from '../constants';

export default function Courses() {
  return (
    <section className="pt-40 pb-24 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-text mb-6">Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-mauve to-blue">Curriculum</span></h2>
          <p className="text-subtext1 max-w-2xl mx-auto text-lg">From foundational logic to advanced competition theory, we have a path for every learner.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES_DATA.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-surface1/30 backdrop-blur-xl rounded-[32px] border border-white/5 overflow-hidden group hover:border-mauve/50 transition-all shadow-xl hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-8 relative z-10">
                <div className="w-14 h-14 bg-mauve/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-mauve/20 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                  {course.icon}
                </div>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 rounded-full bg-surface2/50 text-subtext1 text-[10px] font-bold uppercase tracking-widest border border-white/10">{course.level}</span>
                </div>
                <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-mauve transition-colors">{course.title}</h3>
                <p className="text-subtext0 text-sm mb-8">{course.description}</p>
                <Link
                  to={`/courses/${course.id}`}
                  className="w-full py-4 rounded-2xl bg-surface2/30 text-text font-bold hover:bg-mauve hover:text-white transition-all flex items-center justify-center gap-2 border border-white/5 hover:border-transparent group/btn"
                >
                  View Curriculum
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
