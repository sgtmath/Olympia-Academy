import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const FAQS = [
  { q: 'Is Bijank suitable for beginners?', a: 'Absolutely! We have courses specifically designed for students who are just starting their mathematical journey, focusing on building a strong logical foundation.' },
  { q: 'Do you provide one-on-one coaching?', a: 'Yes, we offer personalized mentorship programs where students can work directly with our elite coaches for targeted improvement.' },
  { q: 'What competitions do you prepare for?', a: 'We primarily focus on IMO, AMC (8/10/12), AIME, and various regional and national math olympiads.' },
  { q: 'Can I access the course material offline?', a: 'Our platform allows you to download certain resources and practice sets for offline use, though video lessons require an internet connection.' },
  { q: 'Is there a refund policy?', a: 'Yes, we offer a 14-day satisfaction guarantee. If you feel the course is not the right fit, you can request a full refund within the first two weeks.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="pt-40 pb-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-text mb-6">Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-mauve to-blue">Questions</span></h2>
          <p className="text-subtext1 text-lg">Everything you need to know about Bijank.</p>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-surface1/30 backdrop-blur-md rounded-3xl border border-white/5 overflow-hidden shadow-lg">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-surface2/40 transition-colors"
              >
                <span className="font-bold text-text">{faq.q}</span>
                <ChevronRight className={`w-5 h-5 text-mauve transition-transform ${openIndex === i ? 'rotate-90' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="p-6 pt-0 text-subtext1 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
