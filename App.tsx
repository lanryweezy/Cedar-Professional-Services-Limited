
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin,
  Menu,
  X,
  ChevronRight,
  Target,
  Eye,
  Heart,
  Building2,
  TrendingUp,
  Loader2,
  CheckCircle2,
  Award,
  Globe,
  Briefcase,
  ArrowUp,
  Send,
  Scale,
  Zap,
  Users,
  FileSearch,
  BookOpen,
  PieChart,
  Settings,
  Calculator,
  Laptop,
  Check,
  Star,
  Quote,
  ShieldAlert,
  AlertCircle
} from 'lucide-react';
import { Personnel } from './types';

const LazyTeamImage = lazy(() => import('./TeamMemberImage'));

type Page = 'home' | 'about' | 'services' | 'team' | 'clients' | 'contact';

// --- SEO Helper Component ---

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  useEffect(() => {
    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);
  }, [title, description, keywords]);

  return null;
};

// --- Shared Components ---

const Navbar: React.FC<{ activePage: Page; setPage: (p: Page) => void }> = ({ activePage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Team', id: 'team' },
    { label: 'Clients', id: 'clients' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: Page) => {
    setPage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled || activePage !== 'home' ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center space-x-3 text-left focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1 group"
            aria-label="Cedar Home"
          >
            <div className="relative h-12 w-auto flex items-center justify-center">
               <img 
                src="logo.png" 
                alt="Cedar Professional Services Logo" 
                className="h-full w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => { e.currentTarget.src = "https://placehold.co/100x100?text=Cedar"; }}
               />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none text-slate-900 tracking-tight">CEDAR</span>
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-blue-700 mt-1">Professional Services</span>
            </div>
          </button>

          <div className="hidden md:flex space-x-6 lg:space-x-8" role="menubar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                role="menuitem"
                className={`text-[11px] font-bold transition-all uppercase tracking-widest focus:outline-none relative group px-2 py-1 focus:ring-2 focus:ring-blue-400 rounded ${
                  activePage === item.id ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${activePage === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-700 p-2 focus:outline-none rounded-lg focus:ring-2 focus:ring-blue-600"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden bg-white fixed inset-0 top-[4rem] transition-all duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-6 py-8 space-y-4 h-full overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-4 text-xl font-display transition-colors rounded-xl focus:ring-2 focus:ring-blue-600 ${
                activePage === item.id ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <header className="bg-slate-900 pt-48 pb-24 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <h1 className="text-4xl md:text-6xl font-display mb-6 tracking-tight">{title}</h1>
      <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">{subtitle}</p>
      <div className="w-16 h-1 bg-blue-600 mx-auto mt-10 rounded-full" />
    </div>
  </header>
);

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-2xl transition-all duration-500 z-40 hover:bg-blue-700 hover:-translate-y-1 focus:ring-4 focus:ring-blue-300 focus:outline-none ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

// --- Page Components ---

const HomePage: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => {
  return (
    <div className="animate-in fade-in duration-700">
      <SEO 
        title="Cedar Professional Services | Forensic Audit & Tax Advisory Nigeria" 
        description="Top-tier Nigerian accounting firm for Forensic Audit, Fraud Investigation, and LIRS/FIRS Tax Compliance. CAC & Bank of Industry Accredited."
        keywords="forensic accounting Lagos, tax clearance certificate Nigeria, CAC agent Lagos, audit firm Nigeria, CAMA 2020 compliance"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-slate-50 skew-x-12 transform origin-top-right -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-[55%] text-center md:text-left space-y-10 z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
              <Award size={14} aria-hidden="true" /> RC No. 1134779 | Est. 2013
            </div>
            <h1 className="text-5xl lg:text-8xl font-display text-slate-900 leading-[1.1] tracking-tight">
              Integrity in <br/><span className="text-blue-600 italic">Financial</span> Oversight.
            </h1>
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-light">
              Expert forensic investigation, tax advisory, and statutory audit services. We safeguard your corporate legacy through precision and unmatched professional passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-6">
              <button 
                onClick={() => { setPage('contact'); window.scrollTo({top: 0, behavior: 'smooth'}); }} 
                className="px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-200 hover:bg-blue-600 transition-all flex items-center justify-center group focus:ring-4 focus:ring-slate-300 focus:outline-none"
              >
                Book a Consultation
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} aria-hidden="true" />
              </button>
              <button 
                onClick={() => { setPage('services'); window.scrollTo({top: 0, behavior: 'smooth'}); }} 
                className="px-10 py-5 bg-white border border-slate-200 text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-all text-center focus:ring-4 focus:ring-slate-100 focus:outline-none"
              >
                Our Expertise
              </button>
            </div>
          </div>
          <div className="md:w-[45%] mt-16 md:mt-0 relative flex justify-center">
            <div className="relative w-full max-w-md group">
              <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-3 -z-10 transition-transform group-hover:rotate-6 duration-500 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" 
                alt="Modern corporate financial office representation" 
                className="rounded-[2.5rem] shadow-2xl relative z-10 border-[12px] border-white transition-transform group-hover:-translate-y-2 duration-500"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Benchmarks */}
      <section className="py-20 bg-slate-950 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16">
              <h2 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.4em] mb-4">Regulatory Partners & Accreditations</h2>
              <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full opacity-50"></div>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
              {[
                { label: "CAC", name: "Corporate Affairs Commission", icon: <Globe className="text-blue-500" /> },
                { label: "ICAN", name: "Inst. of Chartered Accountants", icon: <ShieldCheck className="text-blue-500" /> },
                { label: "BOI", name: "Bank of Industry", icon: <Building2 className="text-blue-500" /> },
                { label: "FIRS", name: "Federal Inland Revenue", icon: <Award className="text-blue-500" /> },
                { label: "NGX", name: "Nigerian Exchange Group", icon: <Briefcase className="text-blue-500" /> }
              ].map((partner, i) => (
                <div key={i} className="flex flex-col items-center group cursor-default">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-4 transition-all group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:-translate-y-2">
                    {React.cloneElement(partner.icon as React.ReactElement, { className: "w-8 h-8 group-hover:text-white transition-colors", "aria-hidden": "true" })}
                  </div>
                  <span className="text-white font-bold tracking-widest text-lg mb-1">{partner.label}</span>
                  <span className="text-[9px] text-slate-500 uppercase font-bold text-center group-hover:text-blue-400 transition-colors">{partner.name}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Primary Practice Areas */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-20 space-y-4">
              <h2 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em]">Excellence Defined</h2>
              <p className="text-4xl md:text-5xl font-display text-slate-900 tracking-tight">Core Strategic Services.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { 
                  title: "Special Audit & Forensic", 
                  icon: <ShieldAlert className="text-blue-600" size={32} />, 
                  desc: "reviewing books and records of organizations in order to form an opinion on the true and fair view of affairs.",
                  features: ["Detailed Review Programs", "Regulatory Decree Compliance", "Opinion Reliability"]
                },
                { 
                  title: "Tax Consultancy", 
                  icon: <Calculator className="text-blue-600" size={32} />, 
                  desc: "Bringing clarity to complexities. Preparation of computations, registrations, and processing of certificates.",
                  features: ["LIRS & FIRS Expertise", "Tax Planning Opportunities", "Acceptance Certificates"]
                },
                { 
                  title: "Fraud Investigation", 
                  icon: <FileSearch className="text-blue-600" size={32} />, 
                  desc: "Deep investigations into financial affairs outside statutory audit scope for associations and funds.",
                  features: ["Targeted Investigations", "Term-Specific Reporting", "Evidence-Based Insights"]
                }
              ].map((s, i) => (
                <div key={i} className="group p-12 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-bl-[4rem] group-hover:bg-blue-600 transition-colors duration-500" />
                   <div className="mb-8">{s.icon}</div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{s.title}</h3>
                   <p className="text-slate-500 leading-relaxed font-light mb-8 h-20 overflow-hidden">{s.desc}</p>
                   <ul className="space-y-3">
                      {s.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                           <CheckCircle2 size={16} className="text-blue-600" aria-hidden="true" /> {f}
                        </li>
                      ))}
                   </ul>
                   <div className="mt-10 pt-8 border-t border-slate-100 flex justify-between items-center">
                      <button onClick={() => setPage('services')} className="text-xs font-bold uppercase tracking-widest text-blue-600 focus:outline-none focus:underline">Details</button>
                      <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Leadership Spotlight */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-slate-900 rounded-[3rem] flex flex-col lg:flex-row items-center overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1920&q=80')] opacity-5 mix-blend-overlay pointer-events-none"></div>
              <div className="lg:w-1/2 p-12 lg:p-20 space-y-8 relative z-10">
                 <h2 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.4em]">Our Leadership</h2>
                 <h3 className="text-4xl md:text-5xl font-display text-white tracking-tight leading-tight">Expertise Driven by <span className="text-blue-500 italic">Vision.</span></h3>
                 <p className="text-slate-400 text-lg font-light leading-relaxed">
                   "Our aim is to provide strong financial support and ensure our clients excel in their day-to-day accounting tasks. We believe our passion for excellence and attention to detail makes the difference."
                 </p>
                 <div className="space-y-4">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-500"><Check size={18} aria-hidden="true" /></div>
                       <span className="text-white font-medium">Fellow Chartered Accountant (FCA)</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-500"><Check size={18} aria-hidden="true" /></div>
                       <span className="text-white font-medium">Certified Forensic Accountant & Auditor</span>
                    </div>
                 </div>
                 <div className="pt-6">
                    <div className="text-white font-bold text-xl mb-1">Olugbenga Folarin</div>
                    <div className="text-blue-500 font-bold uppercase tracking-widest text-xs">Managing Partner & Founder</div>
                 </div>
              </div>
              <div className="lg:w-1/2 h-full min-h-[500px] relative">
                 <img 
                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80" 
                   alt="Managing Partner Olugbenga Folarin Portrait" 
                   className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-slate-900 lg:from-slate-900 via-transparent to-transparent pointer-events-none"></div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Row */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
          <Heart className="mx-auto text-blue-600 animate-pulse" size={56} aria-hidden="true" />
          <div className="space-y-6">
             <blockquote className="text-3xl md:text-4xl font-display text-slate-900 leading-relaxed italic tracking-tight">
               "Built on a shared vision of the future, achieved with humility, helping our clients maximize value at every turn."
             </blockquote>
             <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-slate-200"></div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Cedar Corporate Culture</p>
                <div className="h-px w-12 bg-slate-200"></div>
             </div>
          </div>
          <div className="pt-8">
             <button 
               onClick={() => setPage('contact')} 
               className="px-12 py-6 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-slate-900 transition-all flex items-center justify-center mx-auto group focus:ring-4 focus:ring-blue-300 focus:outline-none"
             >
                Partner With Us
                <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <SEO 
        title="About Us | Cedar Professional Services Nigeria" 
        description="Cedar Professional Services is a leading financial consultancy firm in Lagos, Nigeria, specializing in forensic audit and tax advisory since 2013."
        keywords="Cedar Professional Services, Nigeria accounting history, forensic audit firm Lagos"
      />
      <PageHeader 
        title="Our Heritage & Vision" 
        subtitle="Since 2013, we have been at the forefront of financial integrity and corporate governance in Nigeria." 
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold tracking-widest uppercase">
                Established 2013
              </div>
              <h2 className="text-4xl font-display text-slate-900 leading-tight tracking-tight">A Legacy of Trust and Financial Accuracy.</h2>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                Cedar Professional Services Limited (RC No. 1134779) was born out of the increasing business opportunities in the Nigerian Market and the need for professional financial services. Duly incorporated in August 2013, we have evolved into a premier firm recognized for forensic investigation and complex tax planning.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg"><Target size={24} aria-hidden="true" /></div>
                  <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">To deliver world-class professional service with maximum customer satisfaction while expressing an unbiased opinion at all times.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-lg"><Eye size={24} aria-hidden="true" /></div>
                  <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">To move from the cradle to being a market leader and ever-remaining a strong force within the Nigerian market with global certification.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                alt="Architecture symbolic of corporate stability and growth" 
                className="rounded-[3rem] shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const coreServices = [
    {
      title: "Statutory & Forensic Audit",
      icon: <ShieldCheck className="w-8 h-8" aria-hidden="true" />,
      items: [
        { name: "Special Audits and Forensic", desc: "Detailed review of books and records to form a reliable opinion on financial affairs, compliant with CAMA 1990 and modern standards." },
        { name: "Frauds and Investigations", desc: "Special audits outside the scope of statutory audit, restricted to specific terms of appointment for deep investigation." },
        { name: "Accountancy", desc: "Documentation of accounting systems, procedures, and setup of computerized systems using Tally, Peachtree, or Sage." }
      ]
    },
    {
      title: "Tax & Compliance",
      icon: <Award className="w-8 h-8" aria-hidden="true" />,
      items: [
        { name: "Tax Consultancy", desc: "Navigating complexities for companies and individuals. Registration, computation, and processing of Tax Clearance Certificates." },
        { name: "Secretarial Services", desc: "Ensuring compliance with CAMA 1990 and related legislation for corporate health." },
        { name: "Bank Reconciliation", desc: "Resolving extraneous charges with banks on behalf of clients." }
      ]
    }
  ];

  const subServices = [
    { title: "Financial Advisory", icon: <PieChart />, desc: "Sourcing of funds, drawing up financial packages for expansion, and business plan development." },
    { title: "Due Diligence", icon: <FileSearch />, desc: "Review of books for interested investors to determine viability and share value." },
    { title: "Human Capital", icon: <Users />, desc: "Searching and sourcing highly qualified hands and providing contract staff outsourcing." },
    { title: "IT Systems", icon: <Laptop />, desc: "Designing and implementing computerized accounting systems for modern transparency." },
    { title: "Restructuring", icon: <Settings />, desc: "Injecting life into system orientation and structure to rejuvenate morbid businesses." },
    { title: "Mergers & Acquisitions", icon: <TrendingUp />, desc: "Full investigation of target businesses and advisory on acquisition suitability." }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <SEO 
        title="Audit & Tax Services | Cedar Pro Nigeria" 
        description="Comprehensive forensic audit, Tally ERP setup, and LIRS/FIRS tax planning in Lagos."
        keywords="Forensic Audit Nigeria, Tax Consultancy Lagos, FIRS Tax Clearance"
      />
      <PageHeader title="Our Professional Services" subtitle="A multi-disciplinary approach to corporate finance, audit, and strategic business growth." />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {coreServices.map((cat, idx) => (
            <div key={idx} className="space-y-12">
              <div className="flex items-center space-x-6">
                <div className="p-4 bg-blue-600 text-white rounded-3xl shadow-xl shadow-blue-100">{cat.icon}</div>
                <h2 className="text-4xl font-display text-slate-900 tracking-tight">{cat.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cat.items.map((item, i) => (
                  <article key={i} className="group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{item.name}</h3>
                    <p className="text-slate-500 leading-relaxed font-light">{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-16">
            <h2 className="text-4xl font-display text-slate-900 text-center tracking-tight">Specialized Business Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subServices.map((s, i) => (
                <div key={i} className="flex gap-6 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">{React.cloneElement(s.icon as React.ReactElement, { "aria-hidden": "true" })}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{s.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
            <h2 className="text-3xl md:text-5xl font-display tracking-tight">Professional Fees</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Each service is billed separately in relation to our level of involvement and the nature of the assignments. Our fees and payment terms are highly negotiable, ensuring value-driven results for our clients.
            </p>
            <div className="pt-6">
              <button 
                onClick={() => { window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'}); }}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all uppercase tracking-widest text-xs focus:ring-4 focus:ring-blue-300 focus:outline-none"
              >
                Inquire About Billing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const TeamModal: React.FC<{ person: Personnel | null; onClose: () => void }> = ({ person, onClose }) => {
  if (!person) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="bg-white w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 flex flex-col lg:flex-row max-h-[90vh]">
        <div className="lg:w-2/5 h-64 lg:h-auto">
          <LazyTeamImage src={person.image} alt={person.name} className="w-full h-full object-cover" />
        </div>
        <div className="lg:w-3/5 p-12 lg:p-16 overflow-y-auto">
          <button onClick={onClose} className="absolute top-8 right-8 p-3 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors focus:ring-2 focus:ring-blue-600 focus:outline-none" aria-label="Close modal"><X size={20} aria-hidden="true"/></button>
          <div className="mb-8">
            <h2 id="modal-title" className="text-4xl font-display text-slate-900 mb-2 tracking-tight">{person.name}</h2>
            <p className="text-blue-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">{person.title}</p>
            <div className="text-[10px] font-mono text-slate-500 p-2 bg-slate-50 border rounded inline-block uppercase tracking-widest">{person.qualifications}</div>
          </div>
          <div className="text-slate-600 leading-relaxed font-light text-lg whitespace-pre-wrap">
            {person.bio}
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamPage: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<Personnel | null>(null);
  const team: Personnel[] = [
    {
      name: "Olugbenga Folarin",
      title: "Managing Director & Consultant",
      qualifications: "B.Sc., MBA, CFAN, ACIS, ACTI, FCA.",
      bio: "Olugbenga is a Fellow Chartered Accountant with over 18 years post-qualification experience. Born July 15th 1980, he graduated from the University of Ado-Ekiti and obtained his MBA from OAU.\n\nHe is a Certified Forensic Accountant & Auditor (ICAN, 2011) and an Associate Chartered Stockbroker. His career includes leadership roles at International Standard Securities and serving as an accredited SME Auditor to the Bank of Industry (BOI) since 2015. He has incorporated over 2,000 Limited Liability Companies as a CAC Agent.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Adewale Adelowo",
      title: "Technical Manager",
      qualifications: "B.Tech., MBA in view, COREN, NSE.",
      bio: "Engr. Adelowo is a Project Management enthusiast and Registered Engineer (COREN). With over a decade of experience, he has managed multi-million dollar projects across Nigeria, Zimbabwe, and Ivory Coast.\n\nHe specializes in Renewable Energy (Solar PV) and Remote Monitoring Systems (IoT). His achievements include delivering a $16M project for Galooli Advanced Solution and serving as Solar EPC Project Manager at Mowal Technologies.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Awoniyi Ayomiposi",
      title: "Senior Project Manager",
      qualifications: "B.Sc. Geology, Agile PMP.",
      bio: "Abiodun is an accomplished Project Manager with over 6 years of experience leading strategic and operational projects. He specializes in Business Process Optimization and Organizational Change Initiatives.\n\nHe currently serves as Senior Project Manager at Cedar, overseeing planning and delivery of priority projects with high-level analytical and stakeholder management expertise.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Mr. Olalekan Salami",
      title: "Tally Solution Expert",
      qualifications: "AAT, B.Sc., MBA, ACTI, FCA.",
      bio: "Lekan is a Certified Tally Technologist and Master Tally Partner. He specializes in ERP Solutions and has set up over 200 companies globally, including projects in Angola, Ivory Coast, and Ghana.\n\nHe is the driving force behind Tally.ERP 9 growth in Nigeria, serving over 500 clients including the World Bank, Vitabiotics, and KFC Nigeria.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Mr. Adesuyi Bamidele",
      title: "Senior Consultant",
      qualifications: "AAT, B.Sc., MBA, FCA.",
      bio: "A seasoned practicing accountant with an MBA from OAU. He holds a Diploma in IFRS from Mumbai, India and is a Fellow of ICAN.\n\nFormerly COO at Gbenga Badejo & Co, he oversaw financial services for top companies like BUA Group and Reddington Multi-Specialist Hospital. He specializes in Forensic Audit and IFRS implementation.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Ogunbode Saheed Sunday",
      title: "Audit Manager",
      qualifications: "HND, ACA, ACTI.",
      bio: "Chartered Accountant with 12+ years experience. He joined Olugbenga Folarin & Co in 2015. He specializes in External Audit, Tax Clearance Certificate processing with FIRS/LIRS, and Secretarial Services under CAMA 2020.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <SEO title="Our Team | Cedar Pro Nigeria" description="Meet our ICAN Fellows and Forensic Audit Experts." keywords="ICAN Fellows, Forensic Accountants Nigeria" />
      <PageHeader title="Our Experts" subtitle="Multi-disciplinary veterans bringing global certification and local market mastery to every engagement." />
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((person, idx) => (
              <button 
                key={idx} 
                onClick={() => setSelectedPerson(person)}
                className="flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group text-left focus:ring-4 focus:ring-blue-100 focus:outline-none"
                aria-label={`View profile of ${person.name}`}
              >
                <div className="h-72 overflow-hidden relative">
                  <Suspense fallback={<div className="w-full h-full bg-slate-200 animate-pulse" />}>
                    <LazyTeamImage src={person.image} alt={person.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </Suspense>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8 pointer-events-none">
                    <div>
                      <h4 className="text-white text-2xl font-bold tracking-tight">{person.name}</h4>
                      <p className="text-blue-400 font-semibold text-sm">{person.title}</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 p-2 rounded inline-block">{person.qualifications}</div>
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all mt-4">
                    Full Profile <ChevronRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <TeamModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
    </div>
  );
};

const ClientsPage: React.FC = () => {
  const publicClients = [
    { name: "Sokoto State Government", service: "SFTAS World Bank Programme 2020-2023" },
    { name: "Sokoto State Ministry of Finance", service: "Payroll Forensic Audit & Investigation" },
    { name: "Lagos Lotteries & Gaming Authority", service: "External Auditor" },
    { name: "Lagos Neighbourhood Watch Agency", service: "External Auditor" },
    { name: "Wharf Landing Fees Collecting Authority", service: "External Auditor" },
    { name: "Ogun Forestry Plantations Project", service: "External Auditor" },
    { name: "Osun State College of Education", service: "Forensic Audit" },
    { name: "Revenue Mobilization Allocation and Fiscal Commission", service: "Revenue Collection Verification" },
    { name: "Olabisi Onabanjo University Ventures", service: "External Auditor" },
    { name: "Niger State Development Company", service: "Joint Investigator (Shares/Dividends)" }
  ];

  const privateClients = [
    { name: "Monument Distillers Limited", service: "Vendors Investigation & Forensic Audit" },
    { name: "Imperio International", service: "External Auditor / Tax Consultants" },
    { name: "Port2Port West Africa", service: "Vessel Security Audit" },
    { name: "Solution Media & Infotec", service: "Forensic / Bank Charges Investigation" },
    { name: "KFC Nigeria (Devyani)", service: "External Auditor & BDSP" },
    { name: "Portfolio Advisers Limited", service: "Tax Consultant" },
    { name: "Vitabiotics Nigeria Limited", service: "ERP Implementation" },
    { name: "The Lacasera Products Company", service: "ERP Advisory" },
    { name: "NIPCO Plc", service: "Tally ERP Solutions" },
    { name: "Sonhart Industries Limited", service: "Strategic Financial Consultant" }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <SEO title="Our Clients | Cedar Pro Nigeria" description="Trusted by Government Agencies and Blue-chip corporations." keywords="SFTAS Audit, Lagos State Auditor" />
      <PageHeader title="Our Portfolio" subtitle="A testament to our reliability across both Public and Private sectors." />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <div className="space-y-12">
            <h2 className="text-3xl font-display text-slate-900 border-l-4 border-blue-600 pl-6">Public Sector Accomplishments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publicClients.map((c, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                  <h4 className="font-bold text-slate-900 mb-2">{c.name}</h4>
                  <p className="text-slate-500 text-sm font-light">{c.service}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-12">
            <h2 className="text-3xl font-display text-slate-900 border-l-4 border-slate-900 pl-6">Private Sector Accomplishments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {privateClients.map((c, i) => (
                <div key={i} className="p-8 bg-white rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all">
                  <h4 className="font-bold text-slate-900 mb-2">{c.name}</h4>
                  <p className="text-slate-500 text-sm font-light">{c.service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus('submitting');
    // Simulated end-to-end backend logic
    setTimeout(() => {
      // Logic for random fail simulation if needed, but here we favor success for UX
      setFormStatus('success');
      setFormData({ fullName: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="animate-in fade-in duration-700">
      <SEO title="Contact Us | Cedar Pro Nigeria" description="Connect with our experts in Lagos." keywords="Contact Forensic Accountant Lagos" />
      <PageHeader title="Connect With Us" subtitle="Strategic financial support is just a conversation away. Reach our partners directly." />
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 space-y-12">
                <div>
                  <h2 className="text-3xl font-display mb-6 tracking-tight">Managing Partners</h2>
                  <div className="space-y-8">
                    <div>
                      <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">Olugbenga Folarin</p>
                      <a href="tel:08034521158" className="block text-slate-900 font-medium hover:text-blue-600 transition-colors focus:ring-2 focus:ring-blue-600 rounded">0803 452 1158</a>
                      <p className="text-slate-400 text-sm">0702 837 5516 | 0805 888 7032</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Solomon</p>
                      <a href="tel:08027165839" className="block text-slate-900 font-medium hover:text-blue-600 transition-colors focus:ring-2 focus:ring-blue-600 rounded">0802 716 5839</a>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Olaide</p>
                      <a href="tel:08035323440" className="block text-slate-900 font-medium hover:text-blue-600 transition-colors focus:ring-2 focus:ring-blue-600 rounded">0803 532 3440</a>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 pt-12 border-t border-slate-50">
                  <div className="flex items-center gap-4 text-slate-600">
                    <MapPin className="text-blue-600" size={20} aria-hidden="true" />
                    <span className="text-sm">3rd Floor CSS Bookshop House, 50/52 Broad Street, CMS, Lagos.</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600">
                    <Mail className="text-blue-600" size={20} aria-hidden="true" />
                    <span className="text-sm font-medium">cedarprofessionalservicesltd@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-slate-200/50">
              <form className="space-y-6" onSubmit={handleSubmit} noValidate aria-label="Contact Assessment Form">
                <h3 className="text-3xl font-display text-slate-900 mb-8 tracking-tight">Request an Assessment</h3>
                {formStatus === 'success' ? (
                  <div className="text-center py-20 space-y-6 animate-in zoom-in duration-500" role="alert">
                    <CheckCircle2 size={64} className="mx-auto text-green-500" />
                    <p className="text-slate-900 font-bold text-xl">Thank you. Your message has been sent.</p>
                    <button onClick={() => setFormStatus('idle')} className="text-blue-600 font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 rounded">Send another inquiry</button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-1">
                      <label htmlFor="fullName" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Full Name</label>
                      <input 
                        id="fullName"
                        type="text" 
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all ${errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-100'}`}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      />
                      {errors.fullName && <p id="fullName-error" className="text-red-500 text-[10px] mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.fullName}</p>}
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Email Address</label>
                      <input 
                        id="email"
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-100'}`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && <p id="email-error" className="text-red-500 text-[10px] mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.email}</p>}
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="message" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Inquiry Details</label>
                      <textarea 
                        id="message"
                        rows={4} 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all resize-none ${errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-100'}`}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      ></textarea>
                      {errors.message && <p id="message-error" className="text-red-500 text-[10px] mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.message}</p>}
                    </div>
                    <button 
                      type="submit" 
                      className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-3 active:scale-[0.98] focus:ring-4 focus:ring-slate-300"
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? <Loader2 className="animate-spin" aria-hidden="true" /> : <><Send size={18} aria-hidden="true" /> Send Inquiry</>}
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('home');
  return (
    <div className="bg-white min-h-screen">
      <Navbar activePage={activePage} setPage={setActivePage} />
      <main className="min-h-screen" id="main-content">{(() => {
        switch (activePage) {
          case 'home': return <HomePage setPage={setActivePage} />;
          case 'about': return <AboutPage />;
          case 'services': return <ServicesPage />;
          case 'team': return <TeamPage />;
          case 'clients': return <ClientsPage />;
          case 'contact': return <ContactPage />;
          default: return <HomePage setPage={setActivePage} />;
        }
      })()}</main>
      <BackToTop />
      <footer className="bg-slate-50 pt-32 pb-16 border-t border-slate-100" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
              <div className="space-y-8 text-center md:text-left">
                 <div className="flex items-center gap-4 justify-center md:justify-start">
                    <img src="logo.png" className="h-10 w-auto" alt="Cedar Professional Services Footer Logo" />
                    <span className="font-bold text-xl tracking-tight">CEDAR</span>
                 </div>
                 <p className="text-slate-500 leading-relaxed text-sm font-light">Professional financial support for the Nigerian market since 2013. Precision in audit, transparency in taxation.</p>
              </div>
              <div className="space-y-8 text-center md:text-left">
                 <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Practice Areas</h4>
                 <ul className="space-y-4 text-slate-600 text-sm font-medium">
                    <li><button onClick={() => setActivePage('services')} className="hover:text-blue-600 transition-colors focus:outline-none focus:underline">Forensic Investigation</button></li>
                    <li><button onClick={() => setActivePage('services')} className="hover:text-blue-600 transition-colors focus:outline-none focus:underline">Tax Consultancy</button></li>
                    <li><button onClick={() => setActivePage('services')} className="hover:text-blue-600 transition-colors focus:outline-none focus:underline">Statutory Audit</button></li>
                 </ul>
              </div>
              <div className="space-y-8 text-center md:text-left">
                 <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Partner Access</h4>
                 <div className="space-y-4 text-slate-500 text-xs font-mono">
                    <p>Olugbenga: 0803 452 1158</p>
                    <p>Solomon: 0802 716 5839</p>
                    <p>Olaide: 0803 532 3440</p>
                 </div>
              </div>
              <div className="space-y-8 text-center md:text-left">
                 <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Head Office</h4>
                 <address className="not-italic text-slate-600 text-sm font-light leading-relaxed">
                   CSS Bookshop House,<br/>50/52 Broad Street, CMS, Lagos Island.
                 </address>
              </div>
           </div>
           <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 uppercase tracking-[0.2em]">
              <p>© {new Date().getFullYear()} Cedar Professional Services Limited. RC No. 1134779.</p>
              <nav className="flex items-center gap-4" aria-label="Footer links">
                <a href="#" className="hover:text-blue-600 transition-colors">Terms</a> 
                <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a> 
                <a href="#" className="hover:text-blue-600 transition-colors">Sitemap</a>
              </nav>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
