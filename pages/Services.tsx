
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

const Services: React.FC = () => {
    const navigate = useNavigate();
    const strategicPillars = [
        {
            category: "Audit & Forensic Excellence",
            icon: <ShieldCheck className="w-8 h-8" />,
            items: [
                {
                    name: "Special Audits and Forensic Investigation",
                    desc: "Expert forensic accounting and fraud investigation in Nigeria. Detailed review of books and records to form a reliable opinion on financial affairs, compliant with CAMA 1990 and modern standards."
                },
                {
                    name: "Fraud Investigation",
                    desc: "Specialized investigations into financial irregularities and corporate fraud. We provide evidence-based reporting for legal and regulatory internal corporate requirements."
                },
                {
                    name: "Staff Auditing",
                    desc: "Personnel studies, management audit and advice on personnel related matters to ensure organizational efficiency."
                },
                {
                    name: "Fixed Assets Audit",
                    desc: "Fixed assets listing, identification and numbering services for corporate clients to maintain accurate asset registries."
                }
            ]
        },
        {
            category: "Financial & Tax Advisory",
            icon: <Award className="w-8 h-8" />,
            items: [
                {
                    name: "Tax Consultancy & Planning",
                    desc: "Navigate FIRS and LIRS complexities with ease. We handle tax registrations, capital acceptance certificates, and strategic tax planning for maximum fiscal efficiency."
                },
                {
                    name: "Accountancy Services",
                    desc: "Professional preparation of accounts, documentation of accounting systems, and expert implementation of computerized ERP software like Tally.ERP 9, Sage, and Peachtree."
                },
                {
                    name: "Financial Advisory Services",
                    desc: "Sourcing of funds and tailored financial packages for business expansion. Expert guidance on Bank of Industry (BOI) funding."
                },
                {
                    name: "Financial Due Diligence",
                    desc: "Comprehensive review of books for investors and management. Determine fair value and going concern through SWOT analysis."
                }
            ]
        },
        {
            category: "Corporate Strategy & Solutions",
            icon: <Settings className="w-8 h-8" />,
            items: [
                {
                    name: "Comprehensive Business Solutions",
                    desc: "We provide full-spectrum financial support to ensure your business maintains 100% compliance and thrives in a competitive market."
                },
                {
                    name: "Restructuring and Re-organization",
                    desc: "Revitalizing underperforming businesses through strategic restructuring and rejuvenation of morbid systems."
                },
                {
                    name: "Mergers and Acquisitions",
                    desc: "Strategic advisory on merger suitability and acquisition proposals. We conduct full investigations of target businesses."
                },
                {
                    name: "Secretariat Services",
                    desc: "Ensuring compliance with Companies and Allied Matters Decree and other related legislation."
                }
            ]
        },
        {
            category: "Specialized Financial Services",
            icon: <TrendingUp className="w-8 h-8" />,
            items: [
                {
                    name: "Reporting Accountants",
                    desc: "Licensed reporting accountants for security market entrants and quoted companies on the Nigerian Exchange."
                },
                {
                    name: "Bank Reconciliation Matters",
                    desc: "Advocating for clients to resolve extraneous bank charges. We investigate transaction histories to recover erroneous deductions."
                },
                {
                    name: "Human Capital Management",
                    desc: "Strategic search and recruitment of highly qualified professionals. We provide strategic staff outsourcing for contract roles."
                },
                {
                    name: "Training and Development",
                    desc: "Practical-oriented training in Banking, Accounting, and Information Technology facilitated by industry veterans."
                }
            ]
        }
    ];

    const faqs = [
        {
            q: "What are the requirements for FIRS Tax Clearance in Nigeria?",
            a: "Requirements include evidence of tax payments for the last three years, completed application forms, and audited financial statements. Cedar Pro assists in streamlining this process with FIRS and LIRS."
        },
        {
            q: "How can a company recover excess or erroneous bank charges?",
            a: "We conduct comprehensive investigations of bank statements and transaction histories to identify overcharges. Our team then advocates on your behalf to negotiate and recover erroneous deductions through professional representation."
        },
        {
            q: "Is Cedar Professional Services Limited accredited by the Bank of Industry (BOI)?",
            a: "Yes, Cedar Professional Services has been a licensed and accredited SME Auditor to the Bank of Industry (BOI) since 2015, supporting businesses in accessing and managing federal expansion funding."
        },
        {
            q: "Do you provide Tally.ERP 9 and Sage installation and training?",
            a: "Absolutely. We are experts in the implementation of computerized accounting systems. We handle setup, documentation, and practical staff training for Tally.ERP 9, Sage, Peachtree, and other ERP solutions."
        },
        {
            q: "What is your role in World Bank-funded projects like SFTAS?",
            a: "We serve as strategic consultants for programs like SFTAS (States Fiscal Transparency, Accountability and Sustainability). Our role includes payroll forensic auditing, revenue collection verification, and financial transparency investigations for state governments."
        }
    ];

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="animate-in fade-in duration-700">
            <SEO
                title="Professional Services | Cedar Professional Services Nigeria"
                description="Comprehensive financial, audit, tax, and advisory services. From forensic investigation to ERP implementation and BOI advisory."
                keywords="forensic audit Nigeria, tax consultancy Lagos, ERP implementation, financial due diligence, BOI advisory, business restructuring"
            />
            <PageHeader
                title="Core Strategic Pillars"
                subtitle="The foundations that guide our commitment to financial integrity and corporate excellence across 16 specialized service areas."
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                    {strategicPillars.map((pillar, idx) => (
                        <div key={idx} className="space-y-12">
                            <div className="flex items-center space-x-6">
                                <div className="p-4 bg-blue-600 text-white rounded-3xl shadow-xl shadow-blue-100">{pillar.icon}</div>
                                <h2 className="text-3xl font-display text-slate-900 tracking-tight">{pillar.category}</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {pillar.items.map((item, i) => (
                                    <article key={i} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-4">{item.name}</h3>
                                            <p className="text-slate-500 leading-relaxed font-light text-sm">{item.desc}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Tax & Compliance Checklist */}
                    <div className="pt-24">
                        <TaxChecklist />
                    </div>

                    {/* FAQ Section */}
                    <div className="pt-24 space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em]">Expert Guidance</h2>
                            <p className="text-4xl md:text-5xl font-display text-slate-900 tracking-tight leading-tight">Professional Answers to Your Most Pressing Questions.</p>
                        </div>
                        <div className="max-w-4xl mx-auto space-y-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="border border-slate-100 rounded-[2rem] bg-slate-50 overflow-hidden transition-all duration-300">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex justify-between items-center p-8 text-left group focus:outline-none"
                                    >
                                        <span className="font-bold text-slate-900 text-lg md:text-xl leading-tight pr-8">{faq.q}</span>
                                        <ChevronDown size={24} className={`text-slate-400 transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180 text-blue-600' : 'group-hover:text-blue-600'}`} />
                                    </button>
                                    <div className={`px-8 transition-all duration-500 ease-in-out ${openFaq === i ? 'pb-8 max-h-[1000px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'}`}>
                                        <p className="text-slate-600 leading-relaxed font-light text-lg border-t border-slate-200 pt-6">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            ))}
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
            </section>
        </div>
    );
};

export default Services;
