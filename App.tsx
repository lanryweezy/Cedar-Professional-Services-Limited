
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
  Lightbulb,
  Building2,
  TrendingUp,
  Loader2,
  CheckCircle2,
  Award,
  Globe,
  Briefcase,
  ChevronUp,
  Linkedin,
  ArrowUp,
  Send
} from 'lucide-react';
import { Personnel } from './types';

// Lazy load the image component
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
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled || activePage !== 'home' ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center space-x-3 text-left focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1"
            aria-label="Cedar Professional Services - Go to Home Page"
          >
            <div className="relative h-12 w-auto flex items-center justify-center">
               <img 
                src="logo.png" 
                alt="Cedar Logo" 
                className="h-full w-auto object-contain"
                onError={(e) => { e.currentTarget.src = "https://placehold.co/100x100?text=Cedar"; }}
               />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-slate-900">CEDAR</span>
              <span className="text-[10px] font-medium tracking-widest uppercase text-blue-700">Professional Services</span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8" role="menubar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                role="menuitem"
                className={`text-sm font-semibold transition-colors uppercase tracking-wider focus:outline-none focus:text-blue-600 ${
                  activePage === item.id 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-700 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
            >
              {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-navigation-menu"
        className={`md:hidden bg-white border-t border-slate-100 shadow-xl fixed inset-x-0 bottom-0 top-[4rem] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!isOpen}
      >
        <div className="px-4 pt-4 pb-10 space-y-4 h-full overflow-y-auto" role="menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              role="menuitem"
              className={`block w-full text-left px-4 py-4 text-lg font-bold transition-colors rounded-xl focus:outline-none focus:bg-blue-50 ${
                activePage === item.id ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-8 px-4 border-t border-slate-100 mt-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Contact</p>
            <div className="space-y-4">
              <a href="tel:08034521158" className="flex items-center gap-3 text-slate-600 font-medium">
                <Phone size={18} className="text-blue-600" /> 0803 452 1158
              </a>
              <a href="mailto:cedarprofessionalservicesltd@gmail.com" className="flex items-center gap-3 text-slate-600 font-medium break-all">
                <Mail size={18} className="text-blue-600" /> cedarprofessionalservicesltd@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-slate-900 pt-40 pb-24 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
      <h1 className="text-4xl md:text-6xl font-display mb-6">{title}</h1>
      <p className="text-xl text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
      <div className="w-20 h-1 bg-blue-600 mx-auto mt-8 rounded-full" />
    </div>
  </div>
);

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-2xl transition-all duration-300 z-40 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-75 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

// --- Individual Page Components ---

const HomePage: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="animate-in fade-in duration-700">
      <SEO 
        title="Cedar Professional Services | Forensic Accounting & Tax Consultancy Nigeria" 
        description="Leading Nigerian firm specializing in forensic accounting, fraud investigation, statutory audit, and tax advisory services. Founded in 2013."
        keywords="forensic accounting Nigeria, tax consultancy Lagos, audit firm Nigeria, Cedar Professional Services, financial advisory Lagos"
      />
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
        <div 
          className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 transform origin-top-right -z-10 transition-transform duration-75"
          style={{ transform: `translate3d(0, ${scrollY * 0.2}px, 0) skewX(12deg)` }}
        />
        <div 
          className="absolute left-10 top-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10"
          style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left space-y-8 z-10">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide uppercase animate-in slide-in-from-left-8 duration-500">
              Founded 2013 | RC No. 1134779
            </div>
            <h1 className="text-5xl lg:text-7xl font-display text-slate-900 leading-tight animate-in slide-in-from-left-12 duration-700">
              Excellence in <span className="text-blue-600 italic">Financial</span> Integrity.
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed animate-in slide-in-from-left-16 duration-1000">
              World-class forensic accounting, tax consultancy, and audit services designed to help Nigerian organizations achieve excellence through precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => { setPage('contact'); window.scrollTo({top: 0, behavior: 'smooth'}); }} 
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center"
              >
                Request Consultation
                <ChevronRight className="ml-2" size={20} />
              </button>
              <button 
                onClick={() => { setPage('services'); window.scrollTo({top: 0, behavior: 'smooth'}); }} 
                className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-all text-center"
              >
                Our Expertise
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
            <div 
              className="relative w-full max-w-md transition-transform duration-75"
              style={{ transform: `translate3d(0, ${scrollY * -0.05}px, 0)` }}
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Financial Professional" 
                className="rounded-3xl shadow-2xl relative z-10 border-8 border-white animate-in zoom-in duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-4xl font-display text-blue-600">10+ Years</div>
              <p className="text-slate-500 font-medium">Of Professional Service in Nigeria</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-display text-blue-600">2,000+</div>
              <p className="text-slate-500 font-medium">Companies Registered & Supported</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-display text-blue-600">50+</div>
              <p className="text-slate-500 font-medium">Public & Private Sector Clients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage: React.FC = () => {
  const values = [
    { icon: <Target aria-hidden="true" />, title: "Mission", text: "To deliver a world class professional service with maximum customer satisfaction and expressing an unbiased opinion at all times." },
    { icon: <Eye aria-hidden="true" />, title: "Vision", text: "To move from the cradle to being the market leader and ever remaining a very strong force within the Nigerian market." },
    { icon: <Heart aria-hidden="true" />, title: "Culture", text: "Global standards driven by multi-cultural teams focus on values, principles, and attitudes that guide our behaviors." },
    { icon: <Lightbulb aria-hidden="true" />, title: "Philosophy", text: "Commitment to the needs of valued clients, delivering what we promise with quantifiable and measurable returns." },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <SEO 
        title="About Us | Cedar Professional Services" 
        description="Learn about the corporate profile, mission, and history of Cedar Professional Services Limited. Incorporated in 2013."
        keywords="about Cedar Professional Services, corporate background, financial service mission"
      />
      <PageHeader title="Who We Are" subtitle="A team of professional accountants specializing in forensic accounting, fraud investigation, and tax advisory." />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 font-bold rounded text-xs uppercase tracking-widest">Company Background</div>
              <h2 className="text-4xl font-display text-slate-900 leading-tight">A Commitment to Nigerian Business Growth</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>Cedar Professional Services Limited was born out of the increasing business opportunities in the Nigerian Market and the need for professional financial services in the country.</p>
                <p>The company was duly incorporated in August 2013 with the Corporate Affairs Commission (C.A.C) with the RC No. 1134779.</p>
                <p>We believe that our zeal, passion for excellence and attention to details would help the companies we work with, achieve excellence in their day to day accounting and finance tasks.</p>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="text-blue-600 mb-6">{v.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{v.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.text}</p>
                </div>
              ))}
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
      title: "Core Pillars of Excellence",
      icon: <ShieldCheck className="w-10 h-10" />,
      items: [
        { name: "Special Audits and Forensic", desc: "Detailed review of books and records to form a reliable opinion on the true and fair view of affairs, following detailed programmes designed for special demands and CAMA 1990 provisions." },
        { name: "Accountancy Services", desc: "Preparation of accounts for any requested period, documenting accounting systems/procedures, and expert implementation of computerized ERPs like Tally, Sage, and Peachtree." },
        { name: "Tax Consultancy", desc: "Bringing clarity to tax complexities, providing planning advice, processing Capital Acceptance Certificates, and handling registrations with tax offices for companies and individuals." },
        { name: "Frauds & Investigations", desc: "Carrying out high-level investigations into the financial affairs of any organization or fund, operating outside statutory audit scopes to meet specific client appointment terms." }
      ]
    }
  ];

  const otherServices = [
    { 
      name: "Financial Advisory Services", 
      desc: "Sourcing of funds and drawing up tailored financial packages. We analyze cost of raising capital, cash flow, and insurance needs to facilitate business expansion and turnaround for firms of all sizes." 
    },
    { 
      name: "Financial Due Diligence & Planning", 
      desc: "In-depth review of books and records for investors or management. We determine fair value and going-concern viability based on a thorough SWOT analysis (Strengths, Weaknesses, Opportunities, Threats)." 
    },
    { 
      name: "Human Capital Management", 
      desc: "Sourcing highly qualified and competent professionals through open, competitive processes. We also provide strategic outsourcing for essential roles like drivers, secretaries, and security officers." 
    },
    { 
      name: "Training and Development", 
      desc: "Practical-oriented training in Banking, Accounting, and IT. Our veterans facilitate in-house sessions tailored to your specific organizational needs, keeping your team abreast of global economic changes." 
    },
    { 
      name: "Economic & Feasibility Studies", 
      desc: "Conducting rigorous feasibility and viability studies for proposed projects. We help individual and corporate clients identify the most promising investment paths and maximize potential returns." 
    },
    { 
      name: "Information Technology", 
      desc: "Design and implementation of modern computerized accounting systems. We ensure our clients are kept abreast of the latest technological breakthroughs to maintain a competitive edge in a digital world." 
    },
    { 
      name: "Restructuring & Valuation", 
      desc: "Revitalizing underperforming businesses through strategic restructuring and reorganization. We inject fresh life into morbid systems by implementing new orientations and robust operational structures." 
    },
    { 
      name: "Mergers & Acquisitions", 
      desc: "Providing expert advice on the suitability of acquisition or merger proposals. We conduct full target investigations, capital issue reviews, and comprehensive reporting to ensure successful reconstructions." 
    },
    { 
      name: "Reporting Accountants", 
      desc: "Acting as qualified reporting accountants for new entrants into the security market. We support both startups and existing quoted companies through complex reporting requirements and security issues." 
    },
    { 
      name: "Secretarial Services", 
      desc: "Comprehensive secretarial support to ensure full compliance with the Companies and Allied Matters Decree of 1990 and other related legislation, protecting your corporate legal standing." 
    },
    { 
      name: "Bank Reconciliation Matters", 
      desc: "Acting as a powerful advocate for clients to resolve extraneous or erroneous bank charges. We investigate transaction histories to reconcile discrepancies and protect your financial interests." 
    },
    { 
      name: "Staff Auditing", 
      desc: "Detailed personnel management studies and management audits. We provide expert advice on personnel-related matters and assist in recruiting the right talent to drive your organizational goals." 
    },
    { 
      name: "Fixed Assets Audit", 
      desc: "Providing professional fixed asset listing, identification, and numbering services. Our systematic approach ensures accurate tracking, valuation, and physical verification of all your corporate assets." 
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <SEO 
        title="Our Services | Cedar Professional Services" 
        description="Comprehensive descriptions of our core and specialized financial services, from Forensic Audit to Human Capital Management."
        keywords="forensic accounting Lagos, tax planning Nigeria, Tally ERP setup, business restructuring Nigeria"
      />
      <PageHeader title="Our Services" subtitle="Specialized financial services born out of the need for professional financial support in the Nigerian Market." />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {coreServices.map((cat, idx) => (
              <div key={idx} className="group space-y-12">
                <div className="flex items-center space-x-4 border-b border-slate-100 pb-6">
                  <div className="p-3 bg-blue-600 text-white rounded-2xl">
                    {cat.icon}
                  </div>
                  <h2 className="text-3xl font-display text-slate-900">{cat.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {cat.items.map((item, i) => (
                    <div key={i} className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                      <h4 className="text-xl font-bold text-slate-900 mb-4">{item.name}</h4>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="space-y-16">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 font-bold rounded-full text-xs uppercase tracking-widest">Extended Expertise</div>
                <h2 className="text-4xl font-display text-slate-900">Other Specialized Services</h2>
                <p className="text-slate-500">Beyond our core pillars, we provide comprehensive financial support across all facets of corporate management and growth.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherServices.map((service, i) => (
                  <div key={i} className="flex flex-col p-8 bg-white border border-slate-100 rounded-3xl hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-shrink-0">
                        <CheckCircle2 size={24} className="text-blue-600" aria-hidden="true" />
                      </div>
                      <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{service.name}</h4>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-display mb-6">Our Fee Policy</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Each service will be billed separately in relation to our level of involvement and the nature of the assignments. The fees and payment terms are negotiable, ensuring value-based engagement for all our partners.
          </p>
        </div>
      </section>
    </div>
  );
};

const TeamModal: React.FC<{ person: Personnel | null; onClose: () => void }> = ({ person, onClose }) => {
  if (!person) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="modal-member-name">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" 
        onClick={onClose} 
      />
      <div className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative z-10 animate-in zoom-in-95 duration-300 border border-slate-100">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors z-20 focus:outline-none focus:ring-2 focus:ring-blue-600"
          aria-label="Close professional profile"
        >
          <X size={24} aria-hidden="true" />
        </button>
        
        <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
          <div className="lg:w-2/5 relative h-64 lg:h-auto">
            <LazyTeamImage 
              src={person.image} 
              alt={`Photo of ${person.name}`} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent lg:hidden" />
          </div>
          
          <div className="lg:w-3/5 p-8 lg:p-12 overflow-y-auto">
            <div className="mb-8">
              <h2 id="modal-member-name" className="text-3xl sm:text-4xl font-display text-slate-900 mb-2">{person.name}</h2>
              <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">{person.title}</p>
              <div className="inline-block px-3 py-1 bg-slate-50 text-slate-500 font-mono text-[10px] rounded border border-slate-100 uppercase tracking-widest">
                {person.qualifications}
              </div>
            </div>
            
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed whitespace-pre-wrap font-light">
                {person.bio}
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-6">
               <div className="flex flex-col">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Connect</span>
                 <div className="flex gap-4">
                    <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors focus:ring-2 focus:ring-blue-600" aria-label={`View ${person.name}'s LinkedIn profile`}>
                      <Linkedin size={20} aria-hidden="true" />
                    </button>
                    <button className="p-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors focus:ring-2 focus:ring-blue-600" aria-label={`Send email to ${person.name}`}>
                      <Mail size={20} aria-hidden="true" />
                    </button>
                 </div>
               </div>
               <button className="ml-auto px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                 Request Meeting
               </button>
            </div>
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
      title: "Managing Director",
      qualifications: "B.Sc., MBA, CFAN, ACIS, ACTI, FCA.",
      bio: "Folarin Olugbenga is a Fellow Chartered Accountant with over 18 years post qualification work experience in key Managerial levels in different organizations and industries. Born July 15th 1980, he graduated with a second-class upper division in Accounting from the University of Ado-Ekiti; and obtained his Masters in Business Administration from the Obafemi Awolowo University, Ile-Ife (OAU).\n\nHe is also the Managing Consultant of Cedar Professional Services Limited, a firm basically into Forensic Accounting/Fraud Investigation, Accountancy Services, Taxation and other Consultancy services. Olugbenga is a Certified Forensic Accountant & Auditor, an additional certification he obtained from the Institute of Chartered Accountants of Nigeria (ICAN) in 2011.\n\nHe started his career with Dosal Business Consulting Limited, and later joined Olaniyi Olagoke & Co. Chartered Accountants. He has served as joint auditors on World Bank Finance Project Audits and is an accredited SME Auditor to the Bank of Industry Limited (BOI).",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Adewale Adelowo",
      title: "Technical Manager",
      qualifications: "B.Tech., MBA in view, COREN, NSE.",
      bio: "Adewale Adelowo is a highly capable and experienced Project Management and People Development Enthusiast with a strong background in electrical and electronics engineering. He is a Registered Engineer with the Council for the Regulation of Engineering Nigeria (COREN) and holds the Prince2 Certified Project Manager designation (2018).\n\nWith over a decade of progressive experience, he has a proven track record of managing and delivering multi-million-dollar projects across Nigeria, Ivory Coast, Zimbabwe, Zambia, and Tanzania, specializing in innovative energy and technology solutions. His technical expertise is centered on Renewable Energy (Solar PV), Remote Monitoring Systems (M2M, IoT), and advanced control systems (Deepsea, ComAP).",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Mr. Olalekan Salami",
      title: "Tally Solution Expert",
      qualifications: "AAT, B.Sc., MBA, ACTI, FCA.",
      bio: "Lekan is a Certified Tally Technologist, a Master Tally Partner, Tally Service Partner and Tally Integrator who specialized in ERP Solutions. He holds a B. Sc. Accounting and a Master in Business Administration from the prestigious Obafemi Awolowo University, Ile-Ife.\n\nHe is the driving force behind the growth of Tally.ERP 9 software in Nigeria, serving over 500 clients across Africa. His strength lies in his ease of interpretation of financial transactions and alignment of ERP systems with various standards including IFRS and IPSAS. He has set up over 200 companies' ERP systems globally, travelling to Angola, Ivory Coast, and Ghana.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Mr. Adesuyi Oluwayomi Bamidele",
      title: "Senior Consultant",
      qualifications: "AAT, B.Sc., MBA, FCA.",
      bio: "A seasoned and versatile practicing accountant. He holds a Bachelor Honors from Olabisi Onabanjo University and a Masters Degree in Business Administration (MBA) from Obafemi Awolowo University. He is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) and has a Diploma in IFRS from Mumbai, India.\n\nHis wealth of professionalism spans over all sectors of the economy. He served as Chief Operating Officer at Gbenga Badejo & Co, overseeing unique financial services for top companies including BUA Group, Vital Products Plc, and Reddington Hospital. He has deep expertise in forensic audit and investigation in collaboration with the Forensic Compliance Institute (FCI), USA.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Awoniyi Ayomiposi",
      title: "Senior Project Manager",
      qualifications: "B.Sc., Agile PMP.",
      bio: "Accomplished Project Manager with over 6 years of progressive experience leading strategic, technical, and operational projects across diverse industries. He holds a B.Sc. in Geology from Adekunle Ajasin University and certifications in Project Management and Agile Methodologies.\n\nHis career is marked by a consistent track record of delivering projects on scope and within budget. He oversees planning, execution, and successful delivery of priority projects at Cedar Professional Services, managing risk, quality assurance, and project documentation in accordance with global standards.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Ogunbode Saheed Sunday",
      title: "Audit Manager",
      qualifications: "HND, ACA, ACTI.",
      bio: "Chartered Accountant with over twelve years work experience. He graduated with an upper credit in Accounting from the Osun State Polytechnic, Iree. Saheed is currently an Audit Manager at Cedar Professional Services Limited.\n\nOver the years, he has been involved in external audits of diverse clients, assisting them in filling monthly and annual returns, and processing Tax Clearance Certificates with FIRS and LIRS. He also provides secretarial services ensuring compliance with CAMA 2020.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <SEO 
        title="Meet the Team | Cedar Professional Services" 
        description="Learn about our expert team lead by Olugbenga Folarin."
        keywords="Cedar team, Olugbenga Folarin, audit experts"
      />
      <PageHeader title="Our Experts" subtitle="A multi-talented team of seasoned professionals with deep specialization in Nigerian and International markets." />
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" role="list" aria-label="Team members">
            {team.map((person, idx) => (
              <button 
                key={idx} 
                onClick={() => setSelectedPerson(person)}
                className="flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-blue-600"
                role="listitem"
                aria-label={`View professional profile of ${person.name}, ${person.title}`}
              >
                <div className="h-80 overflow-hidden relative">
                  <Suspense fallback={<div className="w-full h-full bg-slate-200 animate-pulse" />}>
                    <LazyTeamImage src={person.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </Suspense>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                    <div>
                      <h4 className="text-white text-2xl font-bold">{person.name}</h4>
                      <p className="text-blue-400 font-semibold">{person.title}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                     <div className="bg-white/90 backdrop-blur p-2 rounded-full text-blue-600 shadow-lg">
                        <ChevronRight size={20} aria-hidden="true" />
                     </div>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-slate-50 p-2 rounded border border-slate-100">{person.qualifications}</div>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 font-light">{person.bio}</p>
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all pt-2">
                    View Full Profile <ChevronRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <TeamModal 
        person={selectedPerson} 
        onClose={() => setSelectedPerson(null)} 
      />
    </div>
  );
};

const ClientsPage: React.FC = () => {
  const publicClients = [
    { name: "Sokoto State Government", industry: "Government", project: "World Bank - States Fiscal Transparency (SFTAS) Programme 2020-2023" },
    { name: "Sokoto State Ministry of Finance", industry: "Government", project: "State Payroll Forensic Audit & Investigation" },
    { name: "Lagos State Lotteries & Gaming Authority", industry: "Government", project: "External Auditor" },
    { name: "Lagos State Neighbourhood Watch Agency", industry: "Government", project: "External Auditor" },
    { name: "Wharf Landing Fees Collecting Authority", industry: "Government", project: "External Auditor" },
    { name: "Niger State Development Company Ltd", industry: "Government", project: "Joint Investigator (Stock Market Shares & Dividends)" },
    { name: "Revenue Mobilization Allocation & Fiscal Commission", industry: "Federal Agency", project: "Verification and Reconciliation of Revenue Collection" },
    { name: "Ogun State Forestry Plantations Project", industry: "Government", project: "External Auditor" },
    { name: "Osun State College of Education", industry: "Government", project: "Forensic Audit" }
  ];

  const privateClients = [
    { name: "Monument Distillers Limited", industry: "FMCG", project: "Vendors Investigation and Forensic Audit" },
    { name: "KFC Nigeria (Devyani Nigeria Ltd)", industry: "Food Service", project: "ERP Implementation & Support" },
    { name: "Vitabiotics Nigeria Limited", industry: "Manufacturing", project: "Financial Advisory" },
    { name: "Stanbic IBTC Bank Plc", industry: "Banking", project: "Verification of Revenue Collection Remittances" },
    { name: "Portfolio Advisers Limited", industry: "Stockbroking", project: "Tax Consultant" },
    { name: "Imperio International", industry: "FMCG", project: "External Auditor/Tax Consultants" },
    { name: "Port2Port West Africa Limited", industry: "Security", project: "External Auditor / Tax Consultants" },
    { name: "Solution Media & Infotec Ltd", industry: "Hospitality", project: "Forensic/Bank Charges Investigation" },
    { name: "Uee & Cee Limited", industry: "Food Processing", project: "External Auditor & Tax Consultants" }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <SEO 
        title="Our Clients | Cedar Professional Services" 
        description="Trusted by government and private entities across Nigeria."
        keywords="Cedar clients, public sector audit, private sector consultancy"
      />
      <PageHeader title="Client Accomplishments" subtitle="Trusted by leading Government Ministries, Agencies, Parastatals, and Corporate Entities across Nigeria." />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <div className="space-y-12">
            <h2 className="text-3xl font-display flex items-center gap-4">
              <span className="w-12 h-1 bg-blue-600" aria-hidden="true" /> Public Sector Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publicClients.map((c, i) => (
                <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg transition-all">
                  <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-2 block">{c.industry}</span>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{c.name}</h4>
                  <p className="text-slate-500 text-sm">{c.project}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-12">
            <h2 className="text-3xl font-display flex items-center gap-4">
              <span className="w-12 h-1 bg-blue-600" aria-hidden="true" /> Private Sector Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {privateClients.map((c, i) => (
                <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg transition-all">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2 block">{c.industry}</span>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{c.name}</h4>
                  <p className="text-slate-500 text-sm">{c.project}</p>
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
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate professional contact API interaction
    setTimeout(() => {
      setFormStatus('success');
    }, 1200);
  };

  return (
    <div className="animate-in fade-in duration-700">
      <SEO 
        title="Contact Us | Cedar Professional Services" 
        description="Connect with us for expert financial support in Lagos."
        keywords="contact Cedar, Lagos accounting office"
      />
      <PageHeader title="Connect with Us" subtitle="Discuss any of the services in this profile or request further clarification from our expert partners." />
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 text-white space-y-12">
              <h2 className="text-4xl font-display">Office Location</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Lagos Office</h4>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      3rd Floor Css Bookshop House, <br />
                      50/52 Broad Street, CMS, Lagos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Key Personnel Contacts</h4>
                    <ul className="text-slate-400 text-lg space-y-2">
                      <li><span className="text-white font-semibold">Olugbenga:</span> 0803 452 1158</li>
                      <li><span className="text-white font-semibold">Solomon:</span> 0802 716 5839</li>
                      <li><span className="text-white font-semibold">Olaide:</span> 0803 532 3440</li>
                      <li><span className="text-white font-semibold">Yomi:</span> 0802 744 4958</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Official Email</h4>
                    <p className="text-slate-400 text-lg break-all">cedarprofessionalservicesltd@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white p-12 lg:p-20 relative min-h-[500px] flex flex-col justify-center">
              {formStatus === 'success' ? (
                <div className="text-center space-y-6 animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-display text-slate-900">Inquiry Submitted</h3>
                  <p className="text-slate-500 max-w-xs mx-auto">Thank you for your interest. One of our consultants will contact you shortly.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="text-blue-600 font-bold uppercase tracking-widest text-sm hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="full-name" className="text-slate-700 text-sm font-bold uppercase tracking-widest">Full Name</label>
                      <input id="full-name" type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-slate-700 text-sm font-bold uppercase tracking-widest">Email Address</label>
                      <input id="email" type="email" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="john@company.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-slate-700 text-sm font-bold uppercase tracking-widest">Interest Area</label>
                    <select id="service" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none">
                      <option>Forensic Accounting / Fraud Investigation</option>
                      <option>Statutory Audit Services</option>
                      <option>Tax Consultancy & Compliance</option>
                      <option>ERP / Tally Solutions</option>
                      <option>Human Capital / Staff Auditing</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-slate-700 text-sm font-bold uppercase tracking-widest">Message</label>
                    <textarea id="message" rows={6} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Tell us about your organization's needs..." required></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full py-5 bg-blue-600 text-white font-bold rounded-xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all uppercase tracking-widest text-sm focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Footer: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => {
  const handleNavClick = (id: Page) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
             <div className="flex items-center space-x-3">
                <div className="h-12 w-auto">
                   <img 
                    src="logo.png" 
                    alt="Cedar Logo" 
                    className="h-full w-auto object-contain"
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/100x100?text=Cedar"; }}
                   />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-slate-900">CEDAR</span>
                  <span className="text-[10px] text-blue-600 uppercase tracking-widest">Professional Services</span>
                </div>
             </div>
             <p className="text-slate-500 leading-relaxed">
               Providing strong financial support in terms of forensic accounting, audit and tax advisory services since 2013.
             </p>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 uppercase tracking-widest text-sm">Our Site</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-4 text-slate-600">
                <li><button onClick={() => handleNavClick('home')} className="hover:text-blue-600 transition-colors focus:outline-none focus:text-blue-600 text-left">Home</button></li>
                <li><button onClick={() => handleNavClick('about')} className="hover:text-blue-600 transition-colors focus:outline-none focus:text-blue-600 text-left">About Company</button></li>
                <li><button onClick={() => handleNavClick('services')} className="hover:text-blue-600 transition-colors focus:outline-none focus:text-blue-600 text-left">Our Services</button></li>
                <li><button onClick={() => handleNavClick('team')} className="hover:text-blue-600 transition-colors focus:outline-none focus:text-blue-600 text-left">Meet the Team</button></li>
              </ul>
            </nav>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="space-y-4 text-slate-600 text-sm">
              <li className="flex items-center gap-3"><Phone size={16} className="text-blue-600" aria-hidden="true" /> 0803 452 1158</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-blue-600" aria-hidden="true" /> cedarprofessionalservicesltd@gmail.com</li>
              <li className="flex items-start gap-3"><MapPin size={16} className="text-blue-600 mt-1" aria-hidden="true" /> CMS, Lagos.</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 uppercase tracking-widest text-sm">Accreditation</h4>
            <div className="flex gap-4">
               <div className="w-16 h-16 bg-white border border-slate-200 rounded-xl flex items-center justify-center p-2">
                  <span className="text-[10px] font-bold text-slate-400 text-center uppercase tracking-tighter leading-none">C.A.C Agent</span>
               </div>
               <div className="w-16 h-16 bg-white border border-slate-200 rounded-xl flex items-center justify-center p-2">
                  <span className="text-[10px] font-bold text-slate-400 text-center uppercase tracking-tighter leading-none">ICAN Certified</span>
               </div>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Cedar Professional Services Limited. RC No. 1134779.</p>
          <p>Integrity • Precision • Excellence</p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('home');

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home': return <HomePage setPage={setActivePage} />;
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'team': return <TeamPage />;
      case 'clients': return <ClientsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setPage={setActivePage} />;
    }
  };

  return (
    <div className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Navbar activePage={activePage} setPage={setActivePage} />
      <main id="main-content" className="min-h-screen">
        {renderCurrentPage()}
      </main>
      <BackToTop />
      <Footer setPage={setActivePage} />
    </div>
  );
};

export default App;
