import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ShieldCheck,
    Award,
    PieChart,
    FileSearch,
    Users,
    Laptop,
    Settings,
    TrendingUp,
    Briefcase,
    Search,
    GraduationCap,
    RefreshCw,
    Combine,
    FileBarChart,
    ArrowLeftRight,
    UserCircle,
    ClipboardCheck,
    BookOpen,
    ChevronDown
} from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import TaxChecklist from '../components/TaxChecklist';
import LeadMagnet from '../components/LeadMagnet';

const Services: React.FC = () => {
    const navigate = useNavigate();
    const strategicPillars = [
        {
            category: "Audit & Forensic Excellence",
            icon: <ShieldCheck className="w-6 h-6" />,
            image: "/service_audit.png",
            items: [
                {
                    name: "Special Audits and Forensic Investigation",
                    desc: "Expert forensic accounting and fraud investigation in Nigeria. Detailed review to form a reliable opinion, compliant with CAMA 2020, ISA, and modern forensic standards."
                },
                {
                    name: "Detailed Fraud Investigation",
                    desc: "Specialized investigations into financial irregularities. We provide evidence-based reporting for legal proceedings and EFCC/regulatory compliance."
                },
                {
                    name: "Staff Studies & Management Audit",
                    desc: " comprehensive personnel audits and management reviews to drive organizational efficiency and curb payroll fraud."
                },
                {
                    name: "Fixed Assets Management",
                    desc: "End-to-end fixed assets verification, tagging, and register construction to ensure asset security and accurate financial reporting."
                }
            ]
        },
        {
            category: "Financial & Tax Advisory",
            icon: <Award className="w-6 h-6" />,
            image: "/service_tax.png",
            items: [
                {
                    name: "Tax Consultancy & Planning",
                    desc: "Navigate the Finance Act 2023 nuances. We handle CIT, VAT, WHT, and EDT filings with FIRS and LIRS, ensuring zero penalty exposure."
                },
                {
                    name: "Accountancy Services",
                    desc: "Professional bookkeeping and financial statement preparation in accordance with IFRS. Experts in Tally.ERP 9, Sage, and Peachtree integration."
                },
                {
                    name: "Financial Advisory Services",
                    desc: "Sourcing of funds and tailored financial packages. Accredited Bank of Industry (BOI) consultants for SME funding and expansion capital."
                },
                {
                    name: "Financial Due Diligence",
                    desc: "Buy-side and sell-side due diligence. we assess fair value and 'going concern' status through rigorous SWOT and financial analysis."
                }
            ]
        },
        {
            category: "Corporate Strategy & Solutions",
            icon: <Settings className="w-6 h-6" />,
            image: "/service_strategy.png",
            items: [
                {
                    name: "Comprehensive Business Solutions",
                    desc: "From startup registration to post-incorporation filings. We ensure 100% compliance with Nigerian corporate law and market best practices."
                },
                {
                    name: "Business Restructuring",
                    desc: "Revitalizing underperforming entities. We design strategic turnaround plans for distressed businesses in the Nigerian market."
                },
                {
                    name: "Mergers and Acquisitions",
                    desc: "Strategic advisory on mergers. We conduct deep-dive investigations of target companies to uncover hidden liabilities before you sign."
                },
                {
                    name: "Company Secretarial Services",
                    desc: "Filing of Annual Returns and statutory compliance with the Corporate Affairs Commission (CAC) under the Companies and Allied Matters Act 2020."
                }
            ]
        },
        {
            category: "Specialized Financial Services",
            icon: <TrendingUp className="w-6 h-6" />,
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
            items: [
                {
                    name: "Reporting Accountants",
                    desc: "Licensed reporting accountants for IPOs and capital market transactions on the Nigerian Exchange Group (NGX)."
                },
                {
                    name: "Bank Reconciliation & Recovery",
                    desc: "Forensic analysis of bank statements to recover excess bank charges and illegal deductions from Nigerian commercial banks."
                },
                {
                    name: "Human Capital Management",
                    desc: "Executive search and recruitment for finance roles. We verify credentials and background to ensure you hire trusted professionals."
                },
                {
                    name: "Corporate Training",
                    desc: "Practical workshops on Nigerian Tax Laws, Forensic Accounting, and ERP usage facilitated by seasoned industry veterans."
                }
            ]
        }
    ];

    const faqs = [
        {
            q: "What are the requirements for FIRS Tax Clearance in Nigeria?",
            a: "Requirements include evidence of tax payments (CIT, VAT, EDT) for the last three years, TIN validation, and audited financial statements. Cedar Pro assists in streamlining this process via the FIRS TaxPro Max portal."
        },
        {
            q: "How can a company recover excess or erroneous bank charges?",
            a: "We conduct forensic investigations of your bank statements over a 6-year period (statute of limitations). Our team identifies illegal charges and engages the bank for immediate reversal and refund."
        },
        {
            q: "Is Cedar Professional Services Limited accredited by the Bank of Industry (BOI)?",
            a: "Yes, we are accredited Business Development Support Providers (BDSP) with the Bank of Industry. We help Nigerian SMEs package bankable business plans to access low-interest BOI intervention funds."
        },
        {
            q: "Do you provide Tally.ERP 9 and Sage installation and training?",
            a: "Absolutely. We are authorized partners for major ERP solutions. We handle installation, chart of accounts setup to Nigerian standards, and staff training for Tally.ERP 9 and Sage 50/Cloud."
        },
        {
            q: "What is your role in World Bank-funded projects like SFTAS?",
            a: "We serve as Independent Verification Agents (IVAs) and consultants for programs like SFTAS. Our role involves validating state-level fiscal performance indicators and ensuring transparency in public fund management."
        }
    ];

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="animate-in fade-in duration-700">
            <SEO
                title="Professional Services | Cedar Professional Services Nigeria"
                description="Comprehensive financial, audit, tax, and advisory services. From forensic investigation to ERP implementation and BOI advisory."
                keywords="forensic audit Nigeria, tax consultancy Lagos, ERP implementation, financial due diligence, BOI advisory, business restructuring"
                canonicalUrl="https://cedarpro.com.ng/services"
            />
            <PageHeader
                title="Core Strategic Pillars"
                subtitle="The foundations that guide our commitment to financial integrity and corporate excellence across 16 specialized service areas."
            />

            <section className="py-24 bg-white space-y-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {strategicPillars.map((pillar, idx) => (
                        <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''} mb-32 last:mb-0`}>
                            {/* Image Side */}
                            <div className="lg:w-1/2 w-full">
                                <div className="relative group">
                                    <div className={`absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 transition-transform duration-500 group-hover:rotate-6 opacity-10 -z-10`} />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent rounded-[3rem] z-10 pointer-events-none" />
                                    <img
                                        src={pillar.image}
                                        alt={pillar.category}
                                        className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover border-[8px] border-white"
                                        loading={idx === 0 ? "eager" : "lazy"}
                                    />
                                    <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg z-20 flex items-center gap-4">
                                        <div className="p-3 bg-blue-600 text-white rounded-xl">
                                            {pillar.icon}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-800">Core Competency</p>
                                            <p className="text-slate-900 font-bold">{pillar.category}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="lg:w-1/2 w-full space-y-8">
                                <div className="space-y-4">
                                    <h2 className="text-4xl lg:text-5xl font-display text-slate-900 leading-tight tracking-tight">
                                        {pillar.category}
                                    </h2>
                                    <div className="h-1 w-20 bg-blue-600 rounded-full" />
                                </div>

                                <div className="grid grid-cols-1 gap-6">
                                    {pillar.items.map((item, i) => (
                                        <div key={i} className="group p-6 bg-slate-50 hover:bg-white border border-slate-100 hover:shadow-xl rounded-3xl transition-all duration-300">
                                            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                                {item.name}
                                            </h3>
                                            <p className="text-slate-600 text-sm leading-relaxed font-light pl-4 border-l-2 border-slate-200 group-hover:border-blue-200 transition-colors">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tax & Compliance Checklist */}
            <div className="pt-24">
                <TaxChecklist />
            </div>

            {/* FAQ Section */}
            <section className="py-24 bg-blue-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-[10px] font-bold text-blue-300 uppercase tracking-[0.3em]">Expert Guidance</h2>
                        <p className="text-4xl md:text-5xl font-display text-white tracking-tight leading-tight">Professional Answers.</p>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`border ${openFaq === i ? 'border-blue-500 bg-blue-800/30' : 'border-white/10 bg-white/5'} rounded-[2rem] overflow-hidden transition-all duration-300 backdrop-blur-sm`}>
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex justify-between items-center p-8 text-left group focus:outline-none"
                                >
                                    <span className={`font-bold text-lg md:text-xl leading-tight pr-8 transition-colors ${openFaq === i ? 'text-white' : 'text-blue-100 group-hover:text-white'}`}>{faq.q}</span>
                                    <ChevronDown size={24} className={`transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180 text-blue-400' : 'text-blue-400/50 group-hover:text-blue-400'}`} />
                                </button>
                                <div className={`px-8 transition-all duration-500 ease-in-out ${openFaq === i ? 'pb-8 max-h-[1000px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'}`}>
                                    <p className="text-blue-100 leading-relaxed font-light text-lg border-t border-white/10 pt-6">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <LeadMagnet />
                </div>
            </div>

            <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white text-center space-y-8 relative overflow-hidden mt-12">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
                <h2 className="text-3xl md:text-5xl font-display tracking-tight leading-tight">Professional Fees</h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                    Each service is billed separately in relation to our level of involvement and the nature of the assignments. Our fees and payment terms are highly negotiable, ensuring value-driven results for our clients.
                </p>
                <div className="pt-6">
                    <button
                        onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                        className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all uppercase tracking-widest text-xs focus:outline-none"
                    >
                        Inquire About Billing
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;