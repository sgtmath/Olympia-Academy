import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Sparkles,
  Menu,
  X,
  ChevronRight,
  MessageSquare,
  HelpCircle,
  Info,
  Home as HomeIcon,
  BookMarked,
  Newspaper
} from 'lucide-react';

// --- Types ---
type Section = 'home' | 'about' | 'courses' | 'blog' | 'faq' | 'contact';

// --- Components ---

const Navbar = ({ activeSection, setActiveSection }: { activeSection: Section, setActiveSection: (s: Section) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string, id: Section }[] = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Courses', id: 'courses' },
    { name: 'Blog', id: 'blog' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-mantle/80 backdrop-blur-md border-b border-surface0 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActiveSection('home')}>
            <div className="bg-mauve p-2 rounded-xl rotate-3 group-hover:rotate-0 transition-transform">
              <Calculator className="w-6 h-6 text-base" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-text">Hugging<span className="text-mauve">Math</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveSection(link.id)}
                className={`text-sm font-medium transition-colors relative py-2 ${activeSection === link.id ? 'text-mauve' : 'text-subtext1 hover:text-mauve'}`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-mauve rounded-full" />
                )}
              </button>
            ))}
            <button className="bg-mauve text-base px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-pink transition-all shadow-lg shadow-mauve/20 active:scale-95">
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-mantle border-b border-surface0 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { setActiveSection(link.id); setIsOpen(false); }}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium ${activeSection === link.id ? 'bg-surface0 text-mauve' : 'text-subtext1'}`}
                >
                  {link.name}
                </button>
              ))}
              <button className="w-full bg-mauve text-base px-6 py-4 rounded-xl text-base font-bold mt-4">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Home = ({ setActiveSection }: { setActiveSection: (s: Section) => void }) => (
  <div className="space-y-32">
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mauve/10 text-mauve text-xs font-bold uppercase tracking-widest mb-8 border border-mauve/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              The Future of Math Education
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-display font-bold text-text leading-[0.9] mb-8"
            >
              Love Math. <br />
              <span className="text-mauve">Master</span> It.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-subtext1 mb-12 leading-relaxed max-w-xl"
            >
              HuggingMath is where curiosity meets rigorous training. We help students unlock their mathematical potential through intuitive learning and elite competition prep.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <button 
                onClick={() => setActiveSection('courses')}
                className="w-full sm:w-auto bg-mauve text-base px-10 py-5 rounded-2xl font-bold hover:bg-pink transition-all shadow-xl shadow-mauve/20 flex items-center justify-center gap-3 group"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setActiveSection('about')}
                className="w-full sm:w-auto bg-surface0 text-text border border-surface1 px-10 py-5 rounded-2xl font-bold hover:bg-surface1 transition-all"
              >
                Our Story
              </button>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-mauve/20 to-blue/20 rounded-[60px] border border-surface1 p-12 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mauve/10 via-transparent to-transparent opacity-50 group-hover:scale-150 transition-transform duration-1000" />
              <Calculator className="w-48 h-48 text-mauve drop-shadow-2xl" />
              
              {/* Floating elements */}
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-10 right-10 bg-surface1 p-4 rounded-2xl border border-surface2 shadow-2xl">
                <Trophy className="w-8 h-8 text-yellow" />
              </motion.div>
              <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 5, delay: 1 }} className="absolute bottom-10 left-10 bg-surface1 p-4 rounded-2xl border border-surface2 shadow-2xl">
                <GraduationCap className="w-8 h-8 text-blue" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-mauve/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[150px]" />
      </div>
    </section>

    {/* Stats */}
    <section className="py-20 bg-mantle border-y border-surface0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: 'Students', value: '10k+', icon: Users, color: 'text-blue' },
            { label: 'Medals', value: '450+', icon: Trophy, color: 'text-yellow' },
            { label: 'Courses', value: '25+', icon: BookOpen, color: 'text-mauve' },
            { label: 'Rating', value: '4.9/5', icon: Sparkles, color: 'text-pink' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className={`w-12 h-12 mx-auto mb-4 bg-surface0 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-4xl font-display font-bold text-text mb-1">{stat.value}</div>
              <div className="text-sm text-subtext0 font-bold uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const About = () => (
  <section className="pt-40 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="aspect-square bg-surface0 rounded-[40px] overflow-hidden border border-surface1">
            <img src="https://picsum.photos/seed/math-team/800/800" alt="Team" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-mauve p-10 rounded-[40px] shadow-2xl hidden md:block">
            <div className="text-4xl font-display font-bold text-base mb-2">15+</div>
            <div className="text-sm font-bold text-base/80 uppercase tracking-widest">Years of Excellence</div>
          </div>
        </div>
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-text mb-8">Our Mission is to <span className="text-mauve">Humanize</span> Mathematics.</h2>
          <p className="text-lg text-subtext1 mb-8 leading-relaxed">
            HuggingMath started with a simple idea: math shouldn't be scary. It should be something you want to "hug" and embrace. We believe that every student has a mathematical spark, and our job is to provide the right environment for it to grow into a flame.
          </p>
          <div className="space-y-6">
            {[
              { title: 'Intuitive Learning', desc: 'We focus on the "why" before the "how", building deep conceptual understanding.' },
              { title: 'Elite Mentorship', desc: 'Learn from former Olympiad champions and passionate educators.' },
              { title: 'Global Community', desc: 'Connect with math enthusiasts from all around the world.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-3xl bg-surface0 border border-surface1 hover:border-mauve/30 transition-colors">
                <div className="w-12 h-12 bg-mauve/10 rounded-2xl flex items-center justify-center flex-shrink-0">
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

const Courses = () => (
  <section className="pt-40 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-text mb-6">Master the <span className="text-mauve">Curriculum</span></h2>
        <p className="text-subtext1 max-w-2xl mx-auto text-lg">From foundational logic to advanced competition theory, we have a path for every learner.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Foundations of Logic', level: 'Beginner', duration: '12 Weeks', price: '$299', icon: Target, color: 'blue' },
          { title: 'Olympiad Algebra', level: 'Intermediate', duration: '16 Weeks', price: '$499', icon: Calculator, color: 'mauve' },
          { title: 'Number Theory Pro', level: 'Advanced', duration: '20 Weeks', price: '$699', icon: Sparkles, color: 'pink' },
          { title: 'Geometry Mastery', level: 'Intermediate', duration: '14 Weeks', price: '$449', icon: BookOpen, color: 'teal' },
          { title: 'Combinatorics Elite', level: 'Advanced', duration: '18 Weeks', price: '$599', icon: Cpu, color: 'peach' },
          { title: 'Mock Test Series', level: 'All Levels', duration: 'Ongoing', price: '$149', icon: Trophy, color: 'yellow' },
        ].map((course, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-surface0 rounded-[32px] border border-surface1 overflow-hidden group hover:border-mauve/50 transition-all"
          >
            <div className="p-8">
              <div className={`w-14 h-14 bg-${course.color}/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <course.icon className={`w-7 h-7 text-${course.color}`} />
              </div>
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-full bg-surface1 text-subtext1 text-[10px] font-bold uppercase tracking-widest">{course.level}</span>
                <span className="text-mauve font-bold">{course.price}</span>
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">{course.title}</h3>
              <div className="flex items-center gap-4 text-sm text-subtext0 mb-8">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  {course.duration}
                </div>
              </div>
              <button className="w-full py-4 rounded-2xl bg-surface1 text-text font-bold hover:bg-mauve hover:text-base transition-all flex items-center justify-center gap-2">
                Enroll Now
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Blog = () => (
  <section className="pt-40 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-text mb-6">The <span className="text-mauve">Math</span> Journal</h2>
          <p className="text-subtext1 text-lg">Insights, tips, and stories from the world of mathematics.</p>
        </div>
        <button className="text-mauve font-bold flex items-center gap-2 hover:gap-4 transition-all">
          View all articles <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          { 
            title: 'How to Approach Unseen Problems', 
            excerpt: 'Mastering the art of problem solving requires a mindset shift. Here is how to tackle the unknown.',
            date: 'March 15, 2026',
            category: 'Strategy',
            img: 'https://picsum.photos/seed/math1/800/500'
          },
          { 
            title: 'The Beauty of Prime Numbers', 
            excerpt: 'Exploring the distribution and mystery of the building blocks of arithmetic.',
            date: 'March 10, 2026',
            category: 'Theory',
            img: 'https://picsum.photos/seed/math2/800/500'
          }
        ].map((post, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[16/9] bg-surface0 rounded-[40px] overflow-hidden mb-8 border border-surface1">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-mauve font-bold text-xs uppercase tracking-widest">{post.category}</span>
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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: "Is HuggingMath suitable for beginners?", a: "Absolutely! We have courses specifically designed for students who are just starting their mathematical journey, focusing on building a strong logical foundation." },
    { q: "Do you provide one-on-one coaching?", a: "Yes, we offer personalized mentorship programs where students can work directly with our elite coaches for targeted improvement." },
    { q: "What competitions do you prepare for?", a: "We primarily focus on IMO, AMC (8/10/12), AIME, and various regional and national math olympiads." },
    { q: "Can I access the course material offline?", a: "Our platform allows you to download certain resources and practice sets for offline use, though video lessons require an internet connection." },
    { q: "Is there a refund policy?", a: "Yes, we offer a 14-day satisfaction guarantee. If you feel the course isn't the right fit, you can request a full refund within the first two weeks." }
  ];

  return (
    <section className="pt-40 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-text mb-6">Common <span className="text-mauve">Questions</span></h2>
          <p className="text-subtext1 text-lg">Everything you need to know about HuggingMath.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-surface0 rounded-3xl border border-surface1 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-surface1 transition-colors"
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
                    <div className="p-6 pt-0 text-subtext1 leading-relaxed border-t border-surface1/50">
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
};

const Contact = () => (
  <section className="pt-40 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-mantle rounded-[60px] p-8 md:p-20 border border-surface0 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-mauve/5 blur-[100px] -z-0" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-text mb-8">Get in <span className="text-mauve">Touch</span></h2>
            <p className="text-lg text-subtext1 mb-12">Have questions about our programs or want to schedule a demo? Our team is here to help you.</p>
            
            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email Us', value: 'hello@huggingmath.com', color: 'text-mauve' },
                { icon: Phone, label: 'Call Us', value: '+1 (888) MATH-HUG', color: 'text-blue' },
                { icon: MapPin, label: 'Visit Us', value: '42 Fibonacci Way, Math City', color: 'text-red' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-surface0 rounded-2xl flex items-center justify-center border border-surface1 shadow-lg">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-subtext0 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-lg font-bold text-text">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-16 border-t border-surface0">
              <div className="text-sm font-bold text-subtext0 uppercase tracking-widest mb-6">Follow our journey</div>
              <div className="flex gap-4">
                {[Twitter, Linkedin, Github].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-surface0 border border-surface1 flex items-center justify-center text-subtext1 hover:text-mauve hover:border-mauve transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-surface0 p-10 rounded-[40px] border border-surface1 shadow-inner">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-subtext0 tracking-widest">First Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-mantle border border-surface1 text-text focus:outline-none focus:ring-2 focus:ring-mauve/50 transition-all" placeholder="Ada" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-subtext0 tracking-widest">Last Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-mantle border border-surface1 text-text focus:outline-none focus:ring-2 focus:ring-mauve/50 transition-all" placeholder="Lovelace" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-subtext0 tracking-widest">Email Address</label>
                <input type="email" className="w-full px-6 py-4 rounded-2xl bg-mantle border border-surface1 text-text focus:outline-none focus:ring-2 focus:ring-mauve/50 transition-all" placeholder="ada@math.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-subtext0 tracking-widest">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-mantle border border-surface1 text-text focus:outline-none focus:ring-2 focus:ring-mauve/50 transition-all resize-none" placeholder="How can we help you?" />
              </div>
              <button className="w-full bg-mauve text-base py-5 rounded-2xl font-bold hover:bg-pink transition-all shadow-xl shadow-mauve/20 active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-base text-text selection:bg-mauve/30 selection:text-mauve">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {activeSection === 'home' && <Home setActiveSection={setActiveSection} />}
            {activeSection === 'about' && <About />}
            {activeSection === 'courses' && <Courses />}
            {activeSection === 'blog' && <Blog />}
            {activeSection === 'faq' && <FAQ />}
            {activeSection === 'contact' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-mantle border-t border-surface0 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="bg-mauve p-2 rounded-xl">
              <Calculator className="w-6 h-6 text-base" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-text">Hugging<span className="text-mauve">Math</span></span>
          </div>
          <p className="text-subtext0 max-w-md mx-auto mb-12">
            Empowering the next generation of mathematicians through intuitive learning and elite competition prep.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-subtext1 uppercase tracking-widest mb-12">
            <button onClick={() => setActiveSection('home')} className="hover:text-mauve transition-colors">Home</button>
            <button onClick={() => setActiveSection('about')} className="hover:text-mauve transition-colors">About</button>
            <button onClick={() => setActiveSection('courses')} className="hover:text-mauve transition-colors">Courses</button>
            <button onClick={() => setActiveSection('blog')} className="hover:text-mauve transition-colors">Blog</button>
            <button onClick={() => setActiveSection('faq')} className="hover:text-mauve transition-colors">FAQ</button>
            <button onClick={() => setActiveSection('contact')} className="hover:text-mauve transition-colors">Contact</button>
          </div>
          <div className="pt-12 border-t border-surface0 text-subtext0 text-xs flex flex-col md:flex-row justify-between items-center gap-6">
            <div>© 2026 HuggingMath. All rights reserved.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-mauve transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-mauve transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
