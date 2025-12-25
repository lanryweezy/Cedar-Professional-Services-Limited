
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
  Send,
  HelpCircle,
  Plus,
  Minus,
  Scale,
  Zap,
  Users,
  Smartphone,
  Hash
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
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled || activePage !== 'home' ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}
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
              <span className="font-bold text-xl leading-none text-slate-900">CEDAR</span>
              <span className="text-[9px] font-bold tracking-widest uppercase text-blue-700 mt-1">Professional Services</span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8" role="menubar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                role="menuitem"
                className={`text-xs font-bold transition-all uppercase tracking-widest focus:outline-none ${
                  activePage === item.id 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : 'text-slate-600 hover:text-blue-600'
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
              className="text-slate-700 p-2 focus:outline-none rounded-lg"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white fixed inset-0 top-[4rem] transition-all duration-300 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        aria-hidden={!isOpen}
      >
        <div className="px-6 py-8 space-y-4 h-full overflow-y-auto" role="menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              role="menuitem"
              className={`block w-full text-left px-4 py-4 text-xl font-display transition-colors rounded-xl ${
                activePage === item.id ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-8 mt-4 border-t border-slate-100">
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Links</p>
             <a href="tel:08034521158" className="flex items-center gap-4 text-slate-600 font-medium py-3">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600"><Phone size={18} /></div>
                Call Us
             </a>
             <a href="mailto:cedarprofessionalservicesltd@gmail.com" className="flex items-center gap-4 text-slate-600 font-medium py-3">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600"><Mail size={18} /></div>
                Email Us
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <header className="bg-slate-900 pt-48 pb-24 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 relative z-10">
      <h1 className="text-4xl md:text-6xl font-display mb-6">{title}</h1>
      <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
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
      className={`fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-2xl transition-all duration-500 z-40 hover:bg-blue-700 hover:-translate-y-1 ${
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="animate-in fade-in duration-700">
      <SEO 
        title="Cedar Professional Services | Forensic Audit & Tax Advisory Nigeria" 
        description="Top-tier Nigerian accounting firm for Forensic Audit, Fraud Investigation, and LIRS/FIRS Tax Compliance. CAC & Bank of Industry Accredited."
        keywords="forensic accounting Lagos, tax clearance certificate Nigeria, CAC agent Lagos, audit firm Nigeria, CAMA 2020 compliance"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        <div 
          className="absolute top-0 right-0 w-[60%] h-full bg-slate-50 skew-x-12 transform origin-top-right -z-10 transition-transform duration-75"
          style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0) skewX(12deg)` }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-[55%] text-center md:text-left space-y-10 z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase animate-in slide-in-from-left-8 duration-500">
              <Award size={14} /> RC No. 1134779 | Est. 2013
            </div>
            <h1 className="text-5xl lg:text-8xl font-display text-slate-900 leading-[1.1] animate-in slide-in-from-left-12 duration-700">
              Integrity in <br/><span className="text-blue-600 italic">Financial</span> Oversight.
            </h1>
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed animate-in slide-in-from-left-16 duration-1000">
              Expert forensic investigation, tax advisory, and statutory audit services. We safeguard your corporate legacy through precision and unmatched professional passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-6">
              <button 
                onClick={() => { setPage('contact'); window.scrollTo({top: 0, behavior: 'smooth'}); }} 
                className="px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-200 hover:bg-blue-600 transition-all flex items-center justify-center group"
              >
                Book a Consultation
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={() => { setPage('services'); window.scrollTo({top: 0, behavior: 'smooth'}); }} 
                className="px-10 py-5 bg-white border border-slate-200 text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-all text-center"
              >
                Our Expertise
              </button>
            </div>
          </div>
          <div className="md:w-[45%] mt-16 md:mt-0 relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse delay-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" 
                alt="Corporate Financial Consulting" 
                className="rounded-[2.5rem] shadow-2xl relative z-10 border-[12px] border-white animate-in zoom-in duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Row - Restored to Turn 3 Slate 900 background */}
      <section className="py-12 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-60 transition-opacity hover:opacity-100">
              <div className="flex items-center gap-2 font-display text-2xl text-white"><Globe size={24} className="text-blue-500" /> CAC</div>
              <div className="flex items-center gap-2 font-display text-2xl text-white"><ShieldCheck size={24} className="text-blue-500" /> ICAN</div>
              <div className="flex items-center gap-2 font-display text-2xl text-white"><Building2 size={24} className="text-blue-500" /> BOI</div>
              <div className="flex items-center gap-2 font-display text-2xl text-white"><Award size={24} className="text-blue-500" /> FIRS</div>
              <div className="flex items-center gap-2 font-display text-2xl text-white"><Briefcase size={24} className="text-blue-500" /> NGX</div>
           </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em]">Core Competencies</h2>
              <p className="text-4xl md:text-5xl font-display text-slate-900">Professional support for complex markets.</p>
            </div>
            <button onClick={() => setPage('services')} className="text-slate-900 font-bold flex items-center gap-2 hover:text-blue-600 transition-colors uppercase text-xs tracking-widest border-b-2 border-slate-900 pb-1">
              View All Services <ChevronRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Forensic Audit", icon: <Scale className="text-blue-600" size={32} />, desc: "Unbiased expert opinion and in-depth investigations into financial irregularities." },
              { title: "Tax Advisory", icon: <TrendingUp className="text-blue-600" size={32} />, desc: "Strategic planning and compliance with LIRS and FIRS regulations." },
              { title: "ERP Implementation", icon: <Zap className="text-blue-600" size={32} />, desc: "Seamless integration of Tally.ERP 9 and Sage to optimize operations." }
            ].map((s, i) => (
              <div key={i} className="group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="mb-8">{s.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8">{s.desc}</p>
                <div className="w-12 h-1 bg-slate-200 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cedar Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-10 relative z-10">
            <h2 className="text-4xl md:text-6xl font-display leading-tight">Why organizations trust Cedar Pro.</h2>
            <div className="space-y-8">
              {[
                { title: "Global Certification", desc: "Our services adhere to international financial reporting standards (IFRS) and IPSAS." },
                { title: "Qualified Experts", desc: "Our team includes ICAN Fellows, Chartered Stockbrokers, and COREN Registered Engineers." },
                { title: "Measured Results", desc: "Delivering what we promise with quantifiable returns for private and public sector clients." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0"><CheckCircle2 size={20} /></div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative z-10">
            <div className="space-y-6 pt-12">
               <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center p-8 group hover:bg-blue-600 transition-all duration-500">
                  <Users className="text-blue-500 group-hover:text-white mb-4" size={40} />
                  <div className="text-3xl font-display mb-1">18+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white">Years Experience</div>
               </div>
               <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center p-8 group hover:bg-blue-600 transition-all duration-500">
                  <Building2 className="text-blue-500 group-hover:text-white mb-4" size={40} />
                  <div className="text-3xl font-display mb-1">50+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white">State Agencies</div>
               </div>
            </div>
            <div className="space-y-6">
               <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center p-8 group hover:bg-blue-600 transition-all duration-500">
                  <Briefcase className="text-blue-500 group-hover:text-white mb-4" size={40} />
                  <div className="text-3xl font-display mb-1">2k+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white">CAC Registrations</div>
               </div>
               <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center p-8 group hover:bg-blue-600 transition-all duration-500">
                  <TrendingUp className="text-blue-500 group-hover:text-white mb-4" size={40} />
                  <div className="text-3xl font-display mb-1">SME</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white">Growth Partner</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Row */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <Heart className="mx-auto text-blue-600 animate-pulse" size={48} />
          <blockquote className="text-2xl md:text-3xl font-display text-slate-900 leading-relaxed italic">
            "Our aim is to provide strong financial support at all levels. We believe that our zeal and passion for excellence will help the companies we work with achieve excellence."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
             <div className="w-12 h-[1px] bg-slate-200" />
             <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Cedar Corporate Philosophy</p>
             <div className="w-12 h-[1px] bg-slate-200" />
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
              <h2 className="text-4xl font-display text-slate-900 leading-tight">A Legacy of Trust and Financial Accuracy.</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Cedar Professional Services Limited (RC No. 1134779) was established to bridge the gap in specialized financial oversight within the Nigerian business ecosystem. Over the last decade, we have evolved into a premier firm recognized for forensic investigation, statutory audit, and complex tax planning.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg"><Target size={24} /></div>
                  <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">To deliver a world class professional service with maximum customer satisfaction to our various clientele and expressing an unbiased opinion at all times.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-lg"><Eye size={24} /></div>
                  <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">To move from the cradle to being the market leader and ever remaining a very strong force within the Nigerian market.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                alt="Modern Architecture" 
                className="rounded-[3rem] shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 hidden md:block max-w-[280px]">
                <p className="text-3xl font-display text-blue-600 mb-1">100%</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Compliance Record</p>
                <p className="mt-4 text-slate-500 text-xs">Unwavering commitment to statutory standards and CAMA 2020 regulations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-display">Core Values</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">The principles that guide every audit, every investigation, and every client relationship.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Integrity", icon: <ShieldCheck />, desc: "Uncompromising adherence to moral and ethical principles in all our professional engagements." },
              { title: "Innovation", icon: <Lightbulb />, desc: "Leveraging cutting-edge ERP solutions and forensic tools to deliver superior results." },
              { title: "Commitment", icon: <Heart />, desc: "A deep-seated passion for our clients' success and long-term financial health." }
            ].map((v, i) => (
              <div key={i} className="text-center space-y-6 group">
                <div className="w-20 h-20 bg-white/5 border border-white/10 text-blue-400 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    {
      q: "What are the requirements for FIRS Tax Clearance in Nigeria?",
      a: "Requirements include evidence of tax payments for the last three years, completed application forms, and audited financial statements. Cedar Pro assists in streamlining this process with FIRS and LIRS."
    },
    {
      q: "How can a company recover excess or erroneous bank charges?",
      a: "Our Bank Reconciliation Experts perform a forensic review of your transaction history to identify extraneous charges and advocate with commercial banks for full recovery of your funds."
    },
    {
      q: "Is Cedar Professional Services Limited accredited by the Bank of Industry (BOI)?",
      a: "Yes, we are accredited SME Auditors and Business Development Support Providers (BDSP) with the Bank of Industry Limited, helping businesses access capital and maintain compliance."
    },
    {
      q: "Do you provide Tally.ERP 9 and Sage installation and training?",
      a: "Absolutely. Our 'Tally Solution Experts' specialize in the implementation, customization, and staff training for Tally, Sage, Peachtree, and other computerized accounting systems."
    },
    {
      q: "What is your role in World Bank-funded projects like SFTAS?",
      a: "We act as Joint Consultants and Auditors, ensuring fiscal transparency, accountability, and sustainability for State Governments as part of global performance-for-results initiatives."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-display text-slate-900">Expert Guidance</h2>
          <p className="text-slate-500">Professional answers to your most pressing financial and compliance questions.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-50 rounded-3xl overflow-hidden transition-all border border-slate-100">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-white transition-colors"
                aria-expanded={openIndex === idx}
              >
                <span className="font-bold text-slate-900 pr-6 text-lg">{faq.q}</span>
                {openIndex === idx ? <Minus className="flex-shrink-0 text-blue-600" /> : <Plus className="flex-shrink-0 text-slate-400" />}
              </button>
              {openIndex === idx && (
                <div className="px-8 pb-8 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesPage: React.FC = () => {
  const coreServices = [
    {
      title: "Core Strategic Pillars",
      icon: <ShieldCheck className="w-10 h-10" />,
      items: [
        { name: "Special Audits and Forensic Investigation", desc: "Expert forensic accounting and fraud investigation in Nigeria. Detailed review of books and records to form a reliable opinion on financial affairs, compliant with CAMA 2020." },
        { name: "Accountancy Services", desc: "Professional preparation of accounts, documentation of accounting systems, and expert implementation of computerized ERP software like Tally.ERP 9, Sage, and Peachtree." },
        { name: "Tax Consultancy & Planning", desc: "Navigate FIRS and LIRS complexities with ease. We handle tax registrations, capital acceptance certificates, and strategic tax planning for maximum fiscal efficiency." },
        { name: "Fraud Investigation", desc: "Specialized investigations into financial irregularities and corporate fraud. We provide evidence-based reporting for legal and regulatory internal corporate requirements." }
      ]
    }
  ];

  const otherServices = [
    { name: "Financial Advisory Services", desc: "Sourcing of funds and tailored financial packages for business expansion. Expert guidance on Bank of Industry (BOI) funding." },
    { name: "Financial Due Diligence", desc: "Comprehensive review of books for investors and management. Determine fair value and going concern through SWOT analysis." },
    { name: "Human Capital Management", desc: "Strategic search and recruitment of highly qualified professionals. We provide strategic staff outsourcing for contract roles." },
    { name: "Training and Development", desc: "Practical-oriented training in Banking, Accounting, and Information Technology facilitated by industry veterans." },
    { name: "Restructuring and Re-organization", desc: "Revitalizing underperforming businesses through strategic restructuring and rejuvenation of morbid systems." },
    { name: "Mergers and Acquisitions", desc: "Strategic advisory on merger suitability and acquisition proposals. We conduct full investigations of target businesses." },
    { name: "Reporting Accountants", desc: "Licensed reporting accountants for security market entrants and quoted companies on the Nigerian Exchange." },
    { name: "Bank Reconciliation Matters", desc: "Advocating for clients to resolve extraneous bank charges. We investigate transaction histories to recover erroneous deductions." },
    { name: "Staff Auditing", desc: "Personnel studies, management audit and advice on personnel related matters." },
    { name: "Fixed Assets Audit", desc: "Fixed assets listing, identification and numbering services for corporate clients." },
    { name: "Secretariat Services", desc: "Ensuring compliance with Companies and Allied Matters Decree and other related legislation." },
    { name: "Economic and Feasibility Studies", desc: "Studies to recommend project viability on behalf of individuals and companies." }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <SEO 
        title="Audit & Tax Services | Cedar Pro Nigeria" 
        description="Comprehensive forensic audit, Tally ERP setup, and LIRS/FIRS tax planning in Lagos."
        keywords="Forensic Audit Nigeria, Tax Consultancy Lagos, FIRS Tax Clearance, Tally ERP installation, CAMA 2020 compliance"
      />
      <PageHeader title="Our Professional Services" subtitle="Tailored financial support and forensic accounting designed for the Nigerian business environment." />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {coreServices.map((cat, idx) => (
            <div key={idx} className="space-y-12">
              <div className="flex items-center space-x-6">
                <div className="p-4 bg-blue-600 text-white rounded-3xl shadow-xl shadow-blue-100">{cat.icon}</div>
                <h2 className="text-4xl font-display text-slate-900">{cat.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cat.items.map((item, i) => (
                  <article key={i} className="group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.name}</h3>
                    <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-32 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl font-display text-slate-900">Comprehensive Business Solutions</h2>
              <p className="text-slate-500 text-lg">We provide full-spectrum financial support to ensure your business maintains 100% compliance and thrives in a competitive market.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherServices.map((service, i) => (
                <article key={i} className="flex flex-col p-8 bg-white border border-slate-100 rounded-3xl hover:border-blue-200 hover:shadow-lg transition-all">
                   <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6"><CheckCircle2 size={20} /></div>
                   <h4 className="font-bold text-slate-900 mb-3">{service.name}</h4>
                   <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
};

const TeamModal: React.FC<{ person: Personnel | null; onClose: () => void }> = ({ person, onClose }) => {
  if (!person) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" onClick={onClose} />
      <div className="bg-white w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 animate-in zoom-in-95 duration-300 flex flex-col lg:flex-row max-h-[90vh]">
        <div className="lg:w-2/5 h-64 lg:h-auto">
          <LazyTeamImage src={person.image} alt={person.name} className="w-full h-full object-cover" />
        </div>
        <div className="lg:w-3/5 p-12 lg:p-16 overflow-y-auto">
          <button onClick={onClose} className="absolute top-8 right-8 p-3 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"><X size={20}/></button>
          <div className="mb-8">
            <h2 className="text-4xl font-display text-slate-900 mb-2">{person.name}</h2>
            <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">{person.title}</p>
            <div className="text-xs font-mono text-slate-400 p-2 bg-slate-50 border rounded inline-block uppercase tracking-wider">{person.qualifications}</div>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed whitespace-pre-wrap font-light text-lg">
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
      title: "Managing Director",
      qualifications: "B.Sc., MBA, CFAN, ACIS, ACTI, FCA.",
      bio: "Folarin Olugbenga is a Fellow Chartered Accountant with over 18 years post qualification work experience in key Managerial levels in different organizations and industries. Born July 15th 1980, he graduated with a second-class upper division in Accounting from the University of Ado-Ekiti; and obtained his Masters in Business Administration from the Obafemi Awolowo University, Ile-Ife (OAU).\n\nHe is the Managing Consultant of Cedar Professional Services Limited, specializing in Forensic Accounting and Fraud Investigation. He is an accredited SME Auditor to the Bank of Industry Limited (BOI) since 2015 and a Business Development Support Provider (BDSP) with the Bank based on track records.\n\nOlugbenga is also an Associate Chartered Stockbroker and a Member of the Board of Directors of Portfolio Advisers Limited. He started his career with Dosal Business Consulting Limited and Olaniyi Olagoke & Co. Chartered Accountants.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Adewale Adelowo",
      title: "Technical Manager",
      qualifications: "B.Tech., MBA in view, COREN, NSE.",
      bio: "Adewale Adelowo is a highly capable and experienced Project Management and People Development Enthusiast with a strong background in electrical and electronics engineering. He is a Registered Engineer with COREN and a Prince2 Certified Project Manager.\n\nWith over a decade of progressive experience, he has a proven track record of managing multi-million-dollar projects across Nigeria, Ivory Coast, Zimbabwe, Zambia, and Tanzania. His technical expertise is centered on Renewable Energy (Solar PV), Remote Monitoring Systems (M2M, IoT), and advanced control systems.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Awoniyi Ayomiposi",
      title: "Senior Project Manager",
      qualifications: "B.Sc., Agile PMP.",
      bio: "Accomplished Project Manager with over 6 years of experience leading strategic and operational projects across diverse industries. He holds a B.Sc. in Geology from Adekunle Ajasin University and certifications in Agile Methodologies and Organizational Leadership.\n\nHe oversees planning, execution, and successful delivery of priority projects at Cedar Professional Services Limited, ensuring alignment with business goals and global standards in documentation and risk management.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Mr. Olalekan Salami",
      title: "Tally Solution Expert",
      qualifications: "AAT, B.Sc., MBA, ACTI, FCA.",
      bio: "Lekan is a Certified Tally Technologist and Master Tally Partner specializing in ERP Solutions. He holds a B.Sc. in Accounting and an MBA from OAU, Ile-Ife. A young Fellow Chartered Accountant of international repute.\n\nHe is the driving force behind the growth of Tally.ERP 9 software in Nigeria, serving over 500 clients. He has set up over 200 companies' ERP systems globally and travelled to countries such as Angola, Ivory Coast, and Ghana to demonstrate his competence.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Mr. Adesuyi Bamidele",
      title: "Senior Consultant",
      qualifications: "AAT, B.Sc., MBA, FCA.",
      bio: "A seasoned and versatile practicing accountant. Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) with a Diploma in International Financial Reporting Standards (IFRS) from Mumbai, India.\n\nHis wealth of professionalism spans all sectors of the economy. He served as Chief Operating Officer at Gbenga Badejo & Co, overseeing unique financial services for top companies including BUA Group, Vital Products Plc, and Reddington Hospital.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Saheed Sunday Ogunbode",
      title: "Audit Manager",
      qualifications: "HND, ACA, ACTI.",
      bio: "Chartered Accountant with over twelve years of experience in audit process and general accounting activities. He graduated from Osun State Polytechnic, Iree.\n\nSaheed joined Olugbenga Folarin & Co in 2015. He handles external audits, monthly/annual returns, and processes Tax Clearance Certificates with FIRS & LIRS. He also provides secretarial services ensuring compliance with CAMA 2020.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <SEO title="Our Team | Cedar Pro Nigeria" description="Meet our ICAN Fellows and Forensic Audit Experts." keywords="ICAN Fellows, Forensic Accountants Nigeria, Olugbenga Folarin" />
      <PageHeader title="Our Experts" subtitle="A multi-talented team of seasoned professionals dedicated to corporate precision and financial integrity." />
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((person, idx) => (
              <button 
                key={idx} 
                onClick={() => setSelectedPerson(person)}
                className="flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group text-left focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <div className="h-72 overflow-hidden relative">
                  <Suspense fallback={<div className="w-full h-full bg-slate-200 animate-pulse" />}>
                    <LazyTeamImage src={person.image} alt={person.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </Suspense>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                    <div>
                      <h4 className="text-white text-2xl font-bold">{person.name}</h4>
                      <p className="text-blue-400 font-semibold text-sm">{person.title}</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 p-2 rounded inline-block">{person.qualifications}</div>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{person.bio}</p>
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                    Profile <ChevronRight size={14} />
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
  const clients = [
    { name: "Sokoto State Government", ind: "Govt", project: "SFTAS World Bank Programme 2020-2023" },
    { name: "Sokoto State Ministry of Finance", ind: "Govt", project: "State Payroll Forensic Audit & Investigation" },
    { name: "Lagos Lotteries and Gaming Authority", ind: "Govt", project: "External Auditor" },
    { name: "Monument Distillers Limited", ind: "FMCG", project: "Forensic Audit & Vendors Investigation" },
    { name: "KFC Nigeria (Devyani Nigeria Ltd)", ind: "Food", project: "ERP Implementation & Audit" },
    { name: "Stanbic IBTC Bank Plc", ind: "Banking", project: "Revenue Collection Verification" },
    { name: "Ogun Forestry Project", ind: "Govt", project: "Statutory Year-End Audit" },
    { name: "Olabisi Onabanjo University", ind: "Education", project: "Ventures External Auditor" },
    { name: "Osun State College of Education", ind: "Education", project: "Forensic Audit" }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <SEO title="Our Clients | Cedar Pro Nigeria" description="Trusted by Government Agencies and Blue-chip corporations." keywords="SFTAS Audit, Lagos State Auditor, NGO audit Nigeria" />
      <PageHeader title="Our Portfolio" subtitle="Trusted by leading Government Ministries, Agencies, and Corporate Entities across Nigeria." />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clients.map((c, i) => (
                <div key={i} className="p-10 rounded-[2rem] border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all group">
                   <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform"><Building2 size={32} /></div>
                   <h4 className="text-xl font-bold text-slate-900 mb-2">{c.name}</h4>
                   <p className="text-slate-500 text-sm leading-relaxed">{c.project}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const inputClasses = "w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:outline-none transition-all text-slate-900 text-lg placeholder:text-slate-300 shadow-sm";
  const labelClasses = "text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 group-focus-within:text-blue-600 transition-colors mb-1";

  return (
    <div className="animate-in fade-in duration-700">
      <SEO title="Contact Us | Cedar Pro Nigeria" description="Connect with our experts in Lagos." keywords="Contact Forensic Accountant Lagos" />
      <PageHeader title="Connect With Us" subtitle="Discuss any of our specialized services or request a professional assessment of your financial systems." />
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[750px]">
            {/* Sidebar Info */}
            <div className="lg:w-[40%] p-12 lg:p-16 text-white space-y-16 flex flex-col justify-between">
              <div>
                <h2 className="text-5xl font-display mb-6">Lagos Office</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-12">Visit our headquarters at the heart of Lagos Island for an in-person consultation.</p>
                
                <div className="space-y-10">
                  <a 
                    href="https://maps.google.com/?q=CSS+Bookshop+House+Broad+Street+Lagos" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-start gap-6 group hover:translate-x-1 transition-transform"
                  >
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-blue-500 transition-colors"><MapPin size={24} /></div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-blue-400 text-[10px] mb-1">Address</h4>
                      <p className="text-slate-300 leading-relaxed">3rd Floor CSS Bookshop House, 50/52 Broad Street, CMS, Lagos.</p>
                    </div>
                  </a>

                  <a href="tel:+2348034521158" className="flex items-start gap-6 group hover:translate-x-1 transition-transform">
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-blue-500 transition-colors"><Phone size={24} /></div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-blue-400 text-[10px] mb-1">Direct Line</h4>
                      <p className="text-slate-300 leading-relaxed text-lg">0803 452 1158</p>
                    </div>
                  </a>

                  <a href="mailto:cedarprofessionalservicesltd@gmail.com" className="flex items-start gap-6 group hover:translate-x-1 transition-transform">
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-blue-500 transition-colors"><Mail size={24} /></div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-blue-400 text-[10px] mb-1">Email</h4>
                      <p className="text-slate-300 leading-relaxed break-all">cedarprofessionalservicesltd@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="pt-12 border-t border-white/10">
                 <p className="text-xs text-slate-500 italic">Response time is usually within 24 business hours.</p>
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:w-[60%] bg-white p-12 lg:p-16 flex flex-col justify-center">
              {formStatus === 'success' ? (
                <div className="text-center space-y-8 animate-in zoom-in duration-500 max-w-md mx-auto">
                  <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner"><CheckCircle2 size={48} /></div>
                  <h3 className="text-4xl font-display text-slate-900">Inquiry Submitted</h3>
                  <p className="text-slate-500 text-lg leading-relaxed">Thank you for contacting Cedar Professional Services. Your request has been forwarded to our senior consulting team.</p>
                  <button onClick={() => setFormStatus('idle')} className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all uppercase tracking-widest text-xs">Send New Inquiry</button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setFormStatus('submitting'); setTimeout(() => setFormStatus('success'), 1500); }}>
                   <div className="text-center lg:text-left mb-6">
                     <h3 className="text-3xl font-display text-slate-900 mb-2">Request an Assessment</h3>
                     <p className="text-slate-500">Provide details about your business requirements below.</p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1 group">
                        <label htmlFor="fullName" className={labelClasses}>
                          <Users size={12} /> Full Name
                        </label>
                        <input id="fullName" type="text" className={inputClasses} placeholder="Olumide Johnson" required />
                      </div>
                      <div className="space-y-1 group">
                        <label htmlFor="workEmail" className={labelClasses}>
                          <Mail size={12} /> Work Email
                        </label>
                        <input id="workEmail" type="email" className={inputClasses} placeholder="example@company.com" required />
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1 group">
                        <label htmlFor="company" className={labelClasses}>
                          <Building2 size={12} /> Company Name
                        </label>
                        <input id="company" type="text" className={inputClasses} placeholder="Zenith Global Ltd" />
                      </div>
                      <div className="space-y-1 group">
                        <label htmlFor="phone" className={labelClasses}>
                          <Smartphone size={12} /> Phone Number
                        </label>
                        <input id="phone" type="tel" className={inputClasses} placeholder="+234..." required />
                      </div>
                   </div>

                   <div className="space-y-1 group">
                      <label htmlFor="service" className={labelClasses}>
                        <Hash size={12} /> Service Category
                      </label>
                      <select id="service" className={`${inputClasses} cursor-pointer appearance-none`}>
                        <option>Forensic Investigation & Fraud Audit</option>
                        <option>Statutory Audit & Accountancy</option>
                        <option>Tax Consultancy & Planning</option>
                        <option>ERP Implementation (Tally/Sage)</option>
                        <option>Financial Due Diligence</option>
                        <option>Other Professional Services</option>
                      </select>
                   </div>

                   <div className="space-y-1 group">
                      <label htmlFor="details" className={labelClasses}>
                        <HelpCircle size={12} /> Project Requirements
                      </label>
                      <textarea id="details" rows={4} className={`${inputClasses} resize-none`} placeholder="Briefly describe the context of your inquiry..." required></textarea>
                   </div>

                   <div className="pt-4">
                     <button 
                      type="submit" 
                      className="w-full py-6 bg-slate-900 text-white font-bold rounded-[2rem] shadow-2xl hover:bg-blue-600 transition-all uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 active:scale-[0.98] focus:ring-4 focus:ring-blue-100 outline-none"
                      disabled={formStatus === 'submitting'}
                     >
                      {formStatus === 'submitting' ? <Loader2 className="animate-spin" /> : <><Send size={18} /> Submit Assessment Request</>}
                     </button>
                   </div>
                </form>
              )}
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
    <div className="bg-white min-h-screen text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar activePage={activePage} setPage={setActivePage} />
      <main className="min-h-screen">{(() => {
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
      <footer className="bg-slate-50 pt-32 pb-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
              <div className="space-y-8">
                 <div className="flex items-center gap-4">
                    <img src="logo.png" className="h-10 w-auto" alt="Logo" />
                    <span className="font-bold text-xl">CEDAR</span>
                 </div>
                 <p className="text-slate-500 leading-relaxed text-sm">Professional financial support for the Nigerian market since 2013. Precision in audit, transparency in taxation.</p>
              </div>
              <div className="space-y-8">
                 <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Quick Access</h4>
                 <ul className="space-y-4 text-slate-600 text-sm font-medium">
                    <li><button onClick={() => setActivePage('about')} className="hover:text-blue-600">Company Background</button></li>
                    <li><button onClick={() => setActivePage('services')} className="hover:text-blue-600">Core Services</button></li>
                    <li><button onClick={() => setActivePage('team')} className="hover:text-blue-600">Executive Team</button></li>
                 </ul>
              </div>
              <div className="space-y-8">
                 <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Accreditation</h4>
                 <div className="flex gap-4">
                    <div className="w-14 h-14 bg-white border rounded-2xl flex items-center justify-center p-2 shadow-sm"><img src="https://placehold.co/100x100?text=CAC" alt="CAC" className="grayscale opacity-50" /></div>
                    <div className="w-14 h-14 bg-white border rounded-2xl flex items-center justify-center p-2 shadow-sm"><img src="https://placehold.co/100x100?text=BOI" alt="BOI" className="grayscale opacity-50" /></div>
                    <div className="w-14 h-14 bg-white border rounded-2xl flex items-center justify-center p-2 shadow-sm"><img src="https://placehold.co/100x100?text=ICAN" alt="ICAN" className="grayscale opacity-50" /></div>
                 </div>
              </div>
              <div className="space-y-8">
                 <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Head Office</h4>
                 <address className="not-italic text-slate-600 text-sm leading-relaxed">CSS Bookshop House, CMS, Lagos Island, Nigeria.</address>
              </div>
           </div>
           <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 uppercase tracking-[0.2em]">
              <p>© {new Date().getFullYear()} Cedar Professional Services Limited. RC No. 1134779.</p>
              <p className="flex items-center gap-4"><span>Terms</span> <span>Privacy</span> <span>Sitemap</span></p>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
