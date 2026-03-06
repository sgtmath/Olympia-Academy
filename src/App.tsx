import React from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  Cpu, 
  Trophy, 
  Users, 
  BookOpen, 
  Target, 
  ArrowRight, 
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  GraduationCap,
  Sparkles
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-900">OLYMPIA</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#programs" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Programs</a>
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</a>
          <a href="#results" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Results</a>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6"
        >
          <Sparkles className="w-3 h-3" />
          Admissions Open for 2026
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6"
        >
          Master the Art of <span className="text-indigo-600">Problem Solving.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-slate-600 mb-10 leading-relaxed"
        >
          Join the elite league of Olympiad winners. Expert coaching for Math (IMO, AMC) and Cyber (ZCO, INOI) competitions.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 group">
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition-all">
            View Curriculum
          </button>
        </motion.div>
      </div>
    </div>
    
    {/* Background Elements */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none opacity-20">
      <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-400 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-[150px]" />
    </div>
  </section>
);

const StatCard = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-indigo-600" />
    </div>
    <div className="text-3xl font-display font-bold text-slate-900 mb-1">{value}</div>
    <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{label}</div>
  </div>
);

const ProgramCard = ({ title, description, icon: Icon, features, color }: { title: string, description: string, icon: any, features: string[], color: string }) => (
  <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden group hover:border-indigo-200 transition-all">
    <div className={`h-2 w-full ${color}`} />
    <div className="p-8">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${color.replace('bg-', 'bg-opacity-10 ')}`}>
        <Icon className={`w-7 h-7 ${color.replace('bg-', 'text-')}`} />
      </div>
      <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 mb-8 leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <button className="mt-10 w-full py-3 rounded-xl border border-slate-200 text-slate-900 font-semibold hover:bg-slate-50 transition-all">
        Learn More
      </button>
    </div>
  </div>
);

const FeatureItem = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex gap-6">
    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center shadow-sm">
      <Icon className="w-6 h-6 text-indigo-600" />
    </div>
    <div>
      <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Stats Section */}
        <section id="results" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard icon={Trophy} value="500+" label="Medals Won" />
              <StatCard icon={Users} value="2500+" label="Students Mentored" />
              <StatCard icon={Target} value="98%" label="Success Rate" />
              <StatCard icon={GraduationCap} value="50+" label="Expert Mentors" />
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">Specialized Programs</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Tailored curriculum designed to challenge and inspire the next generation of problem solvers.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProgramCard 
                title="Mathematics Olympiad"
                description="From foundational concepts to advanced number theory and combinatorics. Prepare for IMO, AMC 8/10/12, and regional competitions."
                icon={Calculator}
                color="bg-indigo-600"
                features={[
                  "Advanced Geometry & Trigonometry",
                  "Number Theory & Algebra Mastery",
                  "Weekly Mock Olympiads",
                  "Personalized Doubt Clearing"
                ]}
              />
              <ProgramCard 
                title="Cyber & Informatics"
                description="Master algorithms, data structures, and competitive programming. Focused coaching for ZCO, INOI, and IOI tracks."
                icon={Cpu}
                color="bg-emerald-600"
                features={[
                  "C++ & Python Mastery",
                  "Advanced Data Structures",
                  "Algorithmic Problem Solving",
                  "Online Judge Practice Sessions"
                ]}
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="features" className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Why Olympia Academy?</h2>
                <div className="space-y-10">
                  <FeatureItem 
                    icon={BookOpen}
                    title="Proprietary Curriculum"
                    description="Our study material is curated by former Olympiad winners and industry experts, focusing on first principles."
                  />
                  <FeatureItem 
                    icon={Users}
                    title="Peer Learning Groups"
                    description="Collaborate with the brightest minds in the country. Our community fosters healthy competition and growth."
                  />
                  <FeatureItem 
                    icon={Target}
                    title="Result Oriented Approach"
                    description="We don't just teach; we train. Our rigorous testing schedule ensures you are ready for the big day."
                  />
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-indigo-600/20 rounded-[40px] border border-white/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-display font-bold text-indigo-400 mb-4">#1</div>
                    <div className="text-xl font-medium text-slate-300">Ranked Institute for<br/>Olympiad Preparation</div>
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/30 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-indigo-600 rounded-[40px] p-8 md:p-16 text-white grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to excel?</h2>
                <p className="text-indigo-100 mb-10 text-lg">Schedule a free counseling session with our mentors today and discover your potential.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>admissions@olympia.edu</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span>123 Academy Way, Silicon Valley, CA</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 text-slate-900">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-slate-500">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="John" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-slate-500">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-500">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-500">Program Interest</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Math Olympiad</option>
                      <option>Cyber Olympiad</option>
                      <option>Both</option>
                    </select>
                  </div>
                  <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all mt-4 shadow-lg shadow-indigo-100">
                    Get Free Counseling
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-slate-900">OLYMPIA</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500 font-medium">
              <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Cookie Policy</a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs">
            © 2026 Olympia Academy. All rights reserved. Master problem solving with elite mentors.
          </div>
        </div>
      </footer>
    </div>
  );
}
