
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Award,
    ChevronRight,
    ShieldAlert,
    Calculator,
    FileSearch,
    CheckCircle2,
    Check,
    Heart,
    Laptop,
    ShieldCheck,
    Cpu,
    Users
} from 'lucide-react';
import SEO from '../components/SEO';

const Home: React.FC = () => {
    const navigate = useNavigate();

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
                            Integrity in <br /><span className="text-blue-600 italic">Financial</span> Oversight.
                        </h1>
                        <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-light">
                            Expert forensic investigation, tax advisory, and statutory audit services. We safeguard your corporate legacy through precision and unmatched professional passion.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-6">
                            <button
                                onClick={() => navigate('/contact')}
                                className="px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-200 hover:bg-blue-600 transition-all flex items-center justify-center group focus:outline-none"
                            >
                                Book a Consultation
                                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} aria-hidden="true" />
                            </button>
                            <button
                                onClick={() => navigate('/services')}
                                className="px-10 py-5 bg-white border border-slate-200 text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-all text-center focus:outline-none"
                            >
                                Our Expertise
                            </button>
                        </div>
                    </div>
                    <div className="md:w-[45%] mt-16 md:mt-0 relative flex justify-center">
                        <div className="relative w-full max-w-md group">
                            <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-3 -z-10 transition-transform group-hover:rotate-6 duration-500 opacity-10"></div>
                            <img
                                src="/hero_inclusive.png"
                                alt="Modern Nigerian corporate financial office with black professionals"
                                className="rounded-[2.5rem] shadow-2xl relative z-10 border-[12px] border-white transition-transform group-hover:-translate-y-2 duration-500"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Regulatory Benchmarks */}
            {/* Regulatory Benchmarks */}
            <section className="py-12 bg-blue-900 border-y border-blue-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-10">
                        <h2 className="text-[10px] font-bold text-blue-200 uppercase tracking-[0.4em] mb-4">Regulatory Partners & Accreditations</h2>
                        <div className="h-0.5 w-8 bg-white/20 mx-auto rounded-full"></div>
                    </div>
                    <div className="relative w-full">
                        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 px-4 py-8">
                            {[
                                { label: "CAC", name: "Corporate Affairs Commission", domain: "cac.gov.ng", src: "/cac_logo.png" },
                                { label: "ICAN", name: "Inst. of Chartered Accountants", domain: "icanig.org", src: "/ican_logo.png" },
                                { label: "BOI", name: "Bank of Industry", domain: "boi.ng", src: "/boi_logo.png" },
                                { label: "FIRS", name: "Federal Inland Revenue", domain: "firs.gov.ng", src: "/firs_logo.svg" },
                                { label: "NGX", name: "Nigerian Exchange Group", domain: "ngxgroup.com", src: "/ngx_logo.png" }
                            ].map((partner, i) => (
                                <div key={i} className="flex flex-col items-center group cursor-default transition-all duration-300">
                                    <div className="p-4 bg-white rounded-2xl border border-white/10 group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all">
                                        <img
                                            src={partner.src || `https://logo.clearbit.com/${partner.domain}?size=128`}
                                            alt={partner.name}
                                            className="h-10 md:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <span className="mt-4 text-[10px] font-bold text-blue-200/50 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{partner.label}</span>
                                </div>
                            ))}
                        </div>
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
                                    <button onClick={() => navigate('/services')} className="text-xs font-bold uppercase tracking-widest text-blue-600 focus:outline-none">Details</button>
                                    <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Core Values */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em]">Our Principles</h2>
                        <h3 className="text-4xl font-display text-slate-900 tracking-tight">Core Values</h3>
                        <p className="text-slate-500 max-w-2xl mx-auto font-light">The principles that guide every audit, every investigation, and every client relationship.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Integrity",
                                icon: <ShieldCheck className="text-blue-600" size={32} />,
                                desc: "Uncompromising adherence to moral and ethical principles in all our professional engagements."
                            },
                            {
                                title: "Innovation",
                                icon: <Cpu className="text-blue-600" size={32} />,
                                desc: "Leveraging cutting-edge ERP solutions and forensic tools to deliver superior results."
                            },
                            {
                                title: "Commitment",
                                icon: <Users className="text-blue-600" size={32} />,
                                desc: "A deep-seated passion for our clients' success and long-term financial health."
                            }
                        ].map((v, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all duration-500 text-center space-y-6">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-2">
                                    {v.icon}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900">{v.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed font-light">{v.desc}</p>
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
                                src="/olugbenga_folarin.jpg"
                                alt="Managing Partner Olugbenga Folarin Portrait"
                                className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 lg:from-slate-900 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Success Stories */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em]">Client Success</h2>
                        <h3 className="text-4xl font-display text-slate-900 tracking-tight">Trusted by Industry Leaders.</h3>
                    </div>
                </div>

                <div className="relative w-full overflow-hidden">
                    <div className="flex animate-scroll hover:pause gap-8 w-max px-8">
                        {[
                            {
                                challenge: "Significant financial discrepancies and revenue leakage were suspected within a major division.",
                                solution: "Conducted a deep-dive forensic audit, tracing transactions and identifying control weaknesses.",
                                result: "Uncovered systemic issues leading to the recovery of over ₦50M in lost revenue and fortified internal controls.",
                                author: "Chief Financial Officer",
                                company: "Leading FMCG Manufacturer"
                            },
                            {
                                challenge: "Needed to secure significant capital for a new factory expansion but faced a complex BOI loan application process.",
                                solution: "As accredited BDSPs, we prepared a compelling business case, financial projections, and managed the entire application.",
                                result: "Successfully secured the required funding in record time, enabling the client to break ground ahead of schedule.",
                                author: "Managing Director",
                                company: "Agro-Allied Ventures"
                            },
                            {
                                challenge: "High tax liabilities were impacting profitability, coupled with the risk of non-compliance with evolving FIRS regulations.",
                                solution: "Developed and implemented a strategic tax plan that optimized deductions and credits while ensuring full regulatory adherence.",
                                result: "Reduced the client's overall tax liability by 30% in the first fiscal year, significantly boosting their bottom line.",
                                author: "Director of Operations",
                                company: "Oil & Gas Services Ltd"
                            },
                            {
                                quote: "The implementation of Tally ERP transformed our inventory management. We now have real-time visibility across all our branches.",
                                challenge: "Lacked centralized inventory control, leading to stockouts in some branches and overstocking in others.",
                                solution: "Designed and deployed a customized Tally ERP 9 solution connecting all branches to a central inventory system.",
                                result: "Achieved real-time, group-wide inventory visibility, reducing stock discrepancies by 95% and improving order fulfillment.",
                                author: "General Manager",
                                company: "Retail Chain Nigeria"
                            },
                            {
                                challenge: "The board required a higher level of assurance for investors beyond the standard statutory audit.",
                                solution: "Provided a rigorous external audit with an expanded scope, focusing on corporate governance and risk management frameworks.",
                                result: "The detailed audit report provided complete confidence to investors, leading to a successful subsequent funding round.",
                                author: "Board Chairman",
                                company: "Financial Services Group"
                            }
                        ].map((t, i) => (
                            <div key={i} className="w-[400px] p-8 bg-slate-50 hover:bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all duration-500 space-y-6 flex flex-col">
                                <div className="flex gap-1 text-blue-600">
                                    {[...Array(5)].map((_, j) => <CheckCircle2 key={j} size={16} fill="currentColor" className="text-blue-600" />)}
                                </div>
                                <div className="flex-grow space-y-4">
                                    <p className="text-slate-600 font-medium leading-relaxed"><strong>Challenge:</strong> {t.challenge}</p>
                                    <p className="text-slate-600 font-medium leading-relaxed"><strong>Solution:</strong> {t.solution}</p>
                                    <p className="text-blue-600 font-bold leading-relaxed"><strong>Result:</strong> {t.result}</p>
                                </div>
                                <div className="border-t border-slate-200 pt-6">
                                    <div className="font-bold text-slate-900">{t.author}</div>
                                    <div className="text-blue-500 text-xs font-bold uppercase tracking-widest mt-1">{t.company}</div>
                                </div>
                            </div>
                        ))}
                        {/* Duplicate for infinite scroll effect */}
                        {[
                           {
                                challenge: "Significant financial discrepancies and revenue leakage were suspected within a major division.",
                                solution: "Conducted a deep-dive forensic audit, tracing transactions and identifying control weaknesses.",
                                result: "Uncovered systemic issues leading to the recovery of over ₦50M in lost revenue and fortified internal controls.",
                                author: "Chief Financial Officer",
                                company: "Leading FMCG Manufacturer"
                            },
                            {
                                challenge: "Needed to secure significant capital for a new factory expansion but faced a complex BOI loan application process.",
                                solution: "As accredited BDSPs, we prepared a compelling business case, financial projections, and managed the entire application.",
                                result: "Successfully secured the required funding in record time, enabling the client to break ground ahead of schedule.",
                                author: "Managing Director",
                                company: "Agro-Allied Ventures"
                            },
                            {
                                challenge: "High tax liabilities were impacting profitability, coupled with the risk of non-compliance with evolving FIRS regulations.",
                                solution: "Developed and implemented a strategic tax plan that optimized deductions and credits while ensuring full regulatory adherence.",
                                result: "Reduced the client's overall tax liability by 30% in the first fiscal year, significantly boosting their bottom line.",
                                author: "Director of Operations",
                                company: "Oil & Gas Services Ltd"
                            },
                            {
                                quote: "The implementation of Tally ERP transformed our inventory management. We now have real-time visibility across all our branches.",
                                challenge: "Lacked centralized inventory control, leading to stockouts in some branches and overstocking in others.",
                                solution: "Designed and deployed a customized Tally ERP 9 solution connecting all branches to a central inventory system.",
                                result: "Achieved real-time, group-wide inventory visibility, reducing stock discrepancies by 95% and improving order fulfillment.",
                                author: "General Manager",
                                company: "Retail Chain Nigeria"
                            },
                            {
                                challenge: "The board required a higher level of assurance for investors beyond the standard statutory audit.",
                                solution: "Provided a rigorous external audit with an expanded scope, focusing on corporate governance and risk management frameworks.",
                                result: "The detailed audit report provided complete confidence to investors, leading to a successful subsequent funding round.",
                                author: "Board Chairman",
                                company: "Financial Services Group"
                            }
                        ].map((t, i) => (
                            <div key={`dup-${i}`} className="w-[400px] p-8 bg-slate-50 hover:bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all duration-500 space-y-6 flex flex-col">
                                <div className="flex gap-1 text-blue-600">
                                    {[...Array(5)].map((_, j) => <CheckCircle2 key={j} size={16} fill="currentColor" className="text-blue-600" />)}
                                </div>
                                <div className="flex-grow space-y-4">
                                    <p className="text-slate-600 font-medium leading-relaxed"><strong>Challenge:</strong> {t.challenge}</p>
                                    <p className="text-slate-600 font-medium leading-relaxed"><strong>Solution:</strong> {t.solution}</p>
                                    <p className="text-blue-600 font-bold leading-relaxed"><strong>Result:</strong> {t.result}</p>
                                </div>
                                <div className="border-t border-slate-200 pt-6">
                                    <div className="font-bold text-slate-900">{t.author}</div>
                                    <div className="text-blue-500 text-xs font-bold uppercase tracking-widest mt-1">{t.company}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Row */}
            <section className="py-24 bg-blue-900">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
                    <Heart className="mx-auto text-blue-400 animate-pulse" size={56} aria-hidden="true" />
                    <div className="space-y-6">
                        <blockquote className="text-3xl md:text-4xl font-display text-white leading-relaxed italic tracking-tight">
                            "Built on a shared vision of the future, achieved with humility, helping our clients maximize value at every turn."
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-px w-12 bg-blue-800"></div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-300">Our Corporate Culture</p>
                            <div className="h-px w-12 bg-blue-800"></div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <button
                            onClick={() => navigate('/contact')}
                            className="px-12 py-6 bg-white text-blue-900 font-bold rounded-2xl shadow-xl hover:bg-blue-50 transition-all flex items-center justify-center mx-auto group focus:outline-none"
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

export default Home;
