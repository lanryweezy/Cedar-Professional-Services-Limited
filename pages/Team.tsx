import React, { useState, Suspense, lazy } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { Personnel } from '../types';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const LazyTeamImage = lazy(() => import('../components/TeamMemberImage'));

const TeamModal: React.FC<{ person: Personnel | null; onClose: () => void }> = ({ person, onClose }) => {
    if (!person) return null;
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
            <div className="bg-white w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 flex flex-col lg:flex-row max-h-[90vh]">
                <div className="lg:w-2/5 h-64 lg:h-auto">
                    <Suspense fallback={<div className="w-full h-full bg-slate-200 animate-pulse" />}>
                        <LazyTeamImage src={person.image} alt={person.name} className="w-full h-full object-cover" />
                    </Suspense>
                </div>
                <div className="lg:w-3/5 p-12 lg:p-16 overflow-y-auto">
                    <button onClick={onClose} className="absolute top-8 right-8 p-3 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors focus:outline-none" aria-label="Close modal"><X size={20} aria-hidden="true" /></button>
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

const Team: React.FC = () => {
    const [selectedPerson, setSelectedPerson] = useState<Personnel | null>(null);
    const team: Personnel[] = [
        {
            name: "Olugbenga Folarin",
            title: "Managing Director & Consultant",
            qualifications: "B.Sc., MBA, CFAN, ACIS, ACTI, FCA.",
            bio: "Olugbenga is a Fellow Chartered Accountant with over 18 years post-qualification experience. Born July 15th 1980, he graduated from the University of Ado-Ekiti and obtained his MBA from OAU.\n\nHe is a Certified Forensic Accountant & Auditor (ICAN, 2011) and an Associate Chartered Stockbroker. His career includes leadership roles at International Standard Securities and serving as an accredited SME Auditor to the Bank of Industry (BOI) since 2015. He has incorporated over 2,000 Limited Liability Companies as a CAC Agent.",
            image: "/olugbenga_folarin.jpg"
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
            image: "/ayomiposi_awoniyi.jpg"
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
            <SEO 
                title="Our Team | Cedar Pro Nigeria" 
                description="Meet our ICAN Fellows and Forensic Audit Experts." 
                keywords="ICAN Fellows, Forensic Accountants Nigeria"
                canonicalUrl="https://cedarpro.com.ng/team"
            />
            <PageHeader title="Our Experts" subtitle="Multi-disciplinary veterans bringing global certification and local market mastery to every engagement." />
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {team.map((person, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedPerson(person)}
                                className="flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group text-left focus:outline-none"
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

export default Team;