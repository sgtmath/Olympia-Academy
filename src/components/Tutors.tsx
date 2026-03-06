import React from 'react';
import { TUTORS_DATA } from '../constants';
import type { Tutor } from '../types';

const TutorCard: React.FC<{ tutor: Tutor }> = ({ tutor }) => (
  <div className="bg-ctp-base rounded-3xl shadow-sm border border-ctp-surface0 overflow-hidden group hover:shadow-xl transition-all duration-300">
    <div className="aspect-square overflow-hidden">
      <img 
        src={tutor.image} 
        alt={tutor.name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale hover:grayscale-0"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold font-serif text-ctp-text mb-2">{tutor.name}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {tutor.credentials.map((cred, i) => (
          <span key={i} className="text-xs font-bold uppercase tracking-wider text-ctp-mauve bg-ctp-mauve/10 px-3 py-1 rounded-full">
            {cred}
          </span>
        ))}
      </div>
      <p className="text-ctp-subtext0 leading-relaxed italic">
        "{tutor.bio}"
      </p>
    </div>
  </div>
);

const Tutors: React.FC = () => {
  return (
    <section id="tutors" className="py-24 bg-ctp-base">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-ctp-text">Meet Our Mentors</h2>
          <div className="w-20 h-1.5 bg-ctp-mauve mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-lg text-ctp-subtext0 max-w-2xl mx-auto">
            Learn from the best. Our tutors are world-class mathematicians with a proven track record of success.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TUTORS_DATA.map((tutor) => (
            <TutorCard key={tutor.name} tutor={tutor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutors;
