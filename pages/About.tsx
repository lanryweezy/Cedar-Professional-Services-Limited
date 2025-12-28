
import React from 'react';
import { Target, Eye, ShieldCheck, Cpu, Users } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const About: React.FC = () => {
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

            <section className="py-24 bg-blue-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-[10px] font-bold text-blue-300 uppercase tracking-[0.3em]">Our Principles</h2>
                        <h3 className="text-4xl font-display text-white tracking-tight">Core Values</h3>
                        <p className="text-blue-100 max-w-2xl mx-auto font-light">The principles that guide every audit, every investigation, and every client relationship.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Integrity",
                                icon: <ShieldCheck className="text-blue-400" size={32} />,
                                desc: "Uncompromising adherence to moral and ethical principles in all our professional engagements."
                            },
                            {
                                title: "Innovation",
                                icon: <Cpu className="text-blue-400" size={32} />,
                                desc: "Leveraging cutting-edge ERP solutions and forensic tools to deliver superior results."
                            },
                            {
                                title: "Commitment",
                                icon: <Users className="text-blue-400" size={32} />,
                                desc: "A deep-seated passion for our clients' success and long-term financial health."
                            }
                        ].map((v, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 hover:bg-white/10 hover:border-blue-400/30 hover:shadow-2xl transition-all duration-500 text-center space-y-6 group">
                                <div className="w-16 h-16 bg-blue-950/50 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-500">
                                    {v.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white">{v.title}</h4>
                                <p className="text-blue-100 text-sm leading-relaxed font-light">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
