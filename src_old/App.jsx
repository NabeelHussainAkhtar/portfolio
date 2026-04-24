import React, { useState, useEffect } from 'react';
import {
  Mail,
  ExternalLink,
  Cpu,
  Code2,
  Globe,
  Smartphone,
  Database,
  Layers,
  ChevronRight,
  Terminal,
  Zap,
  Coffee,
  Award,
  Calendar,
  Briefcase,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Activity
} from 'lucide-react';

const Github = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


const App = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [scrolled, setScrolled] = useState(false);
  const [terminalText, setTerminalText] = useState('Initializing system...');
  const [isJarvisOpen, setIsJarvisOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const messages = [
      'Booting N&L Connect Core...',
      'Loading Java Microservices...',
      'Optimizing UI Aesthetic...',
      'Establishing Secure Connection...',
      'System Online. Welcome, Nabeel.'
    ];
    let i = 0;
    const interval = setInterval(() => {
      setTerminalText(messages[i % messages.length]);
      i++;
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const experiences = [
    {
      role: "Java Full Stack Developer",
      period: "2023 - Present",
      highlights: [
        "Architected RESTful microservices using Spring Boot & Eureka.",
        "Secured applications with JWT & RBAC implementations.",
        "Built automated CI/CD pipelines using Jenkins and GitHub Actions.",
        "Optimized database performance, reducing query latency by 30%."
      ]
    },
    {
      role: "Software Engineering Graduate",
      period: "2020 - 2024",
      highlights: [
        "Completed B.E. in Computer Science at VTU.",
        "Developed end-to-end projects using React and Firebase.",
        "Won innovation awards for UI/UX prototyping."
      ]
    }
  ];

  const services = [
    {
      title: "Microservices Architecture",
      desc: "Building scalable, distributed systems using Java Spring Cloud and Kafka.",
      icon: <Cpu className="text-cyan-400" size={24} />
    },
    {
      title: "SuperApp Development",
      desc: "Creating all-in-one ecosystems with seamless cross-module integration.",
      icon: <Smartphone className="text-blue-400" size={24} />
    },
    {
      title: "Skeuomorphic UI/UX",
      desc: "Designing modern interfaces with depth, realism, and aesthetic precision.",
      icon: <Layers className="text-purple-400" size={24} />
    }
  ];

  const projects = [
    {
      title: "N&L Connect",
      type: "SuperApp",
      category: "mobile",
      desc: "An ambitious mobile ecosystem integrating Chat, Music, AI, and Gaming with a custom skeuomorphic UI.",
      link: "https://nl-connect.pages.dev/home",
      tags: ["React", "AI", "Cloudflare"],
      color: "from-cyan-500 to-blue-500",
      image: "/nl_connect.png"
    },
    {
      title: "Bites N' More",
      type: "Full Stack ERP",
      category: "web",
      desc: "Complete restaurant automation system: Customer App, Kitchen Display, Admin Portal, and Rider Tracking.",
      link: "https://bnm-customer.pages.dev/",
      tags: ["Java", "Spring Boot", "React"],
      color: "from-orange-500 to-red-500",
      image: "/bites_n_more.png"
    },
    {
      title: "Ramzan 2026",
      type: "Utility App",
      category: "web",
      desc: "Comprehensive Islamic utility with prayer times, Quran player, and live Mecca/Madina feeds.",
      link: "https://ramzan2026.vercel.app/",
      tags: ["Vite", "Tailwind", "Firebase"],
      color: "from-emerald-500 to-teal-600",
      image: "/ramzan.png"
    },
    {
      title: "Time Machine",
      type: "Python Utility",
      category: "tools",
      desc: "Automated decryption tool for recovering gallery files using hex-key manipulation.",
      link: "#",
      tags: ["Python", "Automation"],
      color: "from-purple-500 to-indigo-600",
      image: "/time_machine.png"
    }

  ];

  const skills = [
    { name: "Java 8-17", icon: <Code2 size={20} />, level: "Expert" },
    { name: "Spring Boot", icon: <Cpu size={20} />, level: "Expert" },
    { name: "React.js", icon: <Layers size={20} />, level: "Advanced" },
    { name: "Microservices", icon: <Zap size={20} />, level: "Advanced" },
    { name: "PostgreSQL", icon: <Database size={20} />, level: "Advanced" },
    { name: "Docker/K8s", icon: <Terminal size={20} />, level: "Intermediate" },
  ];

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

      {/* Floating JARVIS Button */}
      <div className="fixed bottom-8 right-8 z-[100]">
        {isJarvisOpen && (
          <div className="absolute bottom-20 right-0 w-72 bg-[#131B2B] border border-cyan-500/30 rounded-2xl p-6 shadow-2xl animate-in slide-in-from-bottom-4 duration-300 backdrop-blur-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
              <span className="text-xs font-bold tracking-widest text-cyan-400">JARVIS CORE</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              "System online. Nabeel is currently specializing in <span className="text-cyan-400">Microservices</span> and <span className="text-blue-400">AI Integration</span>. How can I assist your inquiry?"
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 flex flex-col space-y-2">
              <a href="mailto:nabeelhussain2k02@gmail.com" className="text-xs text-cyan-400 hover:underline flex items-center">
                <Mail size={12} className="mr-2" /> Execute Email protocol
              </a>
              <a href="#projects" className="text-xs text-slate-400 hover:underline flex items-center">
                <Activity size={12} className="mr-2" /> Retrieve Project data
              </a>
            </div>
          </div>
        )}
        <button
          onClick={() => setIsJarvisOpen(!isJarvisOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${isJarvisOpen ? 'bg-cyan-500 rotate-90' : 'bg-[#131B2B] border border-cyan-500/30 hover:scale-110'}`}
        >
          <Sparkles className={isJarvisOpen ? 'text-white' : 'text-cyan-400'} />
        </button>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0F1C]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-lg shadow-cyan-500/20 border border-white/10 group">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
            </div>
            <span className="font-bold tracking-tight text-xl hidden sm:block">Nabeel Akhtar</span>
          </div>
          <div className="flex items-center space-x-8 text-sm font-medium">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#contact" className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all active:scale-95">Connect</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl rounded-full opacity-30 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 relative flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-6 animate-pulse">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <span>AVAILABLE FOR NEW OPPORTUNITIES</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">SuperApps</span> & Digital Ecosystems.
            </h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl">
              I am a Java Full Stack Developer & AI Builder based in Bengaluru. I specialize in building scalable microservices and visually stunning user experiences with a JARVIS-inspired aesthetic.
            </p>

            {/* System Status Terminal */}
            <div className="bg-[#131B2B] border border-white/10 rounded-xl p-4 mb-10 inline-flex items-center space-x-4 max-w-md w-full shadow-inner">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="h-4 w-[1px] bg-white/10"></div>
              <div className="font-mono text-xs text-cyan-400/80 flex items-center">
                <span className="mr-2 text-slate-500">SYS_ADMIN:\</span>
                <span>{terminalText}</span>
                <span className="w-2 h-4 bg-cyan-400 ml-1 animate-pulse"></span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-1 active:scale-95 flex items-center">
                View My Work <ChevronRight className="ml-2" size={18} />
              </a>
              <a href="https://github.com/NabeelHussainAkhtar" target="_blank" className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 font-bold rounded-xl transition-all flex items-center">
                <Github className="mr-2" size={18} /> GitHub
              </a>
            </div>
          </div>
          <div className="relative group flex-shrink-0">
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-all duration-500"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/10 p-4 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden group-hover:border-cyan-500/50 transition-all duration-500">
              <div className="w-full h-full rounded-full overflow-hidden border border-white/20">
                <img src="/logo.png" alt="Nabeel Akhtar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Expertise</h2>
            <p className="text-slate-400">What I bring to the technical landscape.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="p-8 bg-[#131B2B] border border-white/5 rounded-3xl hover:border-cyan-500/30 transition-all group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center space-x-4 mb-12">
            <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400">
              <Briefcase size={28} />
            </div>
            <h2 className="text-3xl font-bold">Professional Journey</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="p-8 bg-[#131B2B] border border-white/5 rounded-3xl hover:border-cyan-500/30 transition-colors relative group">
                <div className="absolute top-8 right-8 text-slate-600 group-hover:text-cyan-400 transition-colors">
                  <Calendar size={20} />
                </div>
                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                <span className="text-cyan-400 text-sm font-bold block mb-6">{exp.period}</span>
                <ul className="space-y-4">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 text-slate-400 text-sm">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.5)]"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white/2 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
              <p className="text-slate-400">Hand-picked selection of full-stack ecosystems.</p>
            </div>
            <div className="flex p-1 bg-white/10 rounded-xl border border-white/10 overflow-x-auto">
              {['all', 'web', 'mobile', 'tools'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg text-sm font-medium capitalize transition-all whitespace-nowrap ${activeTab === tab ? 'bg-cyan-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="group relative bg-[#131B2B] border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-video relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-30 transition-opacity z-10`}></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0A0F1C]/20 group-hover:bg-transparent transition-colors z-10"></div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{project.type}</span>
                      <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                    </div>
                    <a href={project.link} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-cyan-500 transition-colors group/btn">
                      <ExternalLink size={20} className="group-hover/btn:scale-110 transition-transform" />
                    </a>
                  </div>
                  <p className="text-slate-400 mb-6 line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 rounded-md text-xs font-medium text-slate-300 border border-white/10">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Arsenal</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                I build robust, performance-optimized backends using Java and Spring Cloud, while crafting intuitive frontends with React and Tailwind. My background includes building full CI/CD pipelines and managing containerized deployments.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, idx) => (
                  <div key={idx} className="p-4 bg-[#131B2B] rounded-2xl border border-white/5 flex items-center space-x-3 shadow-inner hover:border-cyan-500/20 transition-colors cursor-default">
                    <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                      {skill.icon}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{skill.name}</div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{skill.level}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:grid grid-cols-3 gap-4 rotate-3 relative opacity-50 group-hover:opacity-100 transition-opacity">
              {[...Array(9)].map((_, i) => (
                <div key={i} className={`aspect-square rounded-2xl bg-[#131B2B] border border-white/5 flex items-center justify-center transform ${i % 2 === 0 ? 'translate-y-4' : ''}`}>
                  <div className="w-1/2 h-1/2 bg-white/5 rounded-full blur-xl animate-pulse"></div>
                </div>
              ))}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-8 bg-[#0A0F1C]/80 border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-500/20 backdrop-blur-xl">
                  <div className="text-4xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl shadow-cyan-500/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-extrabold text-white mb-6">Let's build the next SuperApp.</h2>
              <p className="text-cyan-100 mb-10 text-lg opacity-90">Ready to bring enterprise-grade Java engineering and aesthetic design to your team.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:nabeelhussain2k02@gmail.com" className="px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl flex items-center shadow-lg hover:scale-105 transition-transform active:scale-95">
                  <Mail className="mr-2" size={18} /> Send an Email
                </a>
                <a href="https://linkedin.com/in/nabeel-hussain-akhtar-b66a55227" target="_blank" className="px-8 py-4 bg-black/20 hover:bg-black/30 border border-white/20 text-white font-bold rounded-2xl flex items-center transition-all">
                  <Linkedin className="mr-2" size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-lg object-cover" />
            <div className="text-slate-500 text-sm">
              © 2026 Nabeel Hussain Akhtar. Built with React & Tailwind.
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/NabeelHussainAkhtar" target="_blank" className="p-2 bg-white/5 rounded-lg hover:text-cyan-400 transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com/in/nabeel-hussain-akhtar-b66a55227" target="_blank" className="p-2 bg-white/5 rounded-lg hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:nabeelhussain2k02@gmail.com" className="p-2 bg-white/5 rounded-lg hover:text-cyan-400 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;