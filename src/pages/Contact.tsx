import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const CONTACT_INFO = [
  { icon: Mail, label: 'Email Us', value: 'hello@bijank.com', color: 'text-mauve' },
  { icon: Phone, label: 'Call Us', value: '+1 (888) MATH-HUG', color: 'text-blue' },
  { icon: MapPin, label: 'Visit Us', value: '42 Fibonacci Way, Math City', color: 'text-red' },
];

const SOCIAL_LINKS = [Twitter, Linkedin, Github];

export default function Contact() {
  return (
    <section className="pt-40 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-surface1/30 backdrop-blur-2xl rounded-[60px] p-8 md:p-20 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mauve/10 blur-[150px] pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue/10 blur-[120px] pointer-events-none -z-0" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-text mb-8">Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-mauve to-blue">Touch</span></h2>
              <p className="text-lg text-subtext1 mb-12">Have questions about our programs or want to schedule a demo? Our team is here to help you.</p>

              <div className="space-y-8">
                {CONTACT_INFO.map((item, i) => (
                  <div key={i} className="flex gap-6 items-center">
                    <div className="w-14 h-14 bg-surface0/50 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/5 shadow-lg">
                      <item.icon className={`w-6 h-6 ${item.color} drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]`} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-subtext0 uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-lg font-bold text-text">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-16 border-t border-white/5">
                <div className="text-sm font-bold text-subtext0 uppercase tracking-widest mb-6">Follow our journey</div>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-surface0/50 backdrop-blur-md border border-white/5 flex items-center justify-center text-subtext1 hover:text-mauve hover:border-mauve/50 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-surface0/50 backdrop-blur-xl p-10 rounded-[40px] border border-white/5 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-subtext0 tracking-widest">First Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-surface1/50 border border-white/5 text-text focus:outline-none focus:ring-2 focus:ring-mauve/50 transition-all backdrop-blur-md" placeholder="Ada" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-subtext0 tracking-widest">Last Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-surface1/50 border border-white/5 text-text focus:outline-none focus:ring-2 focus:ring-mauve/50 transition-all backdrop-blur-md" placeholder="Lovelace" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-subtext0 tracking-widest">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl bg-surface1/50 border border-white/5 text-text focus:outline-none focus:ring-2 focus:ring-mauve/50 transition-all backdrop-blur-md" placeholder="ada@math.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-subtext0 tracking-widest">Message</label>
                  <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-surface1/50 border border-white/5 text-text focus:outline-none focus:ring-2 focus:ring-mauve/50 transition-all resize-none backdrop-blur-md" placeholder="How can we help you?" />
                </div>
                <button className="w-full bg-mauve text-[#ffffff] py-5 rounded-2xl font-bold hover:bg-mauve/90 transition-all shadow-[0_0_30px_rgba(139,92,246,0.3)] active:scale-[0.98]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
