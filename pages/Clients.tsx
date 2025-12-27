
import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Clients: React.FC = () => {
    const publicClients = [
        { name: "Sokoto State Government", service: "SFTAS World Bank Programme 2020-2023", domain: "sokotostate.gov.ng" },
        { name: "Sokoto State Ministry of Finance", service: "Payroll Forensic Audit & Investigation", domain: "finance.sokotostate.gov.ng" },
        { name: "Lagos Lotteries & Gaming Authority", service: "External Auditor", domain: "lslga.org" },
        { name: "Lagos Neighbourhood Watch Agency", service: "External Auditor", domain: "lnwa.lagosstate.gov.ng" },
        { name: "Wharf Landing Fees Collecting Authority", service: "External Auditor", domain: "lagosstate.gov.ng" },
        { name: "Ogun Forestry Plantations Project", service: "External Auditor", domain: "ogunstate.gov.ng" },
        { name: "Osun State College of Education", service: "Forensic Audit", domain: "osunstate.gov.ng" },
        { name: "Revenue Mobilization Allocation and Fiscal Commission", service: "Revenue Collection Verification", domain: "rmafc.gov.ng" },
        { name: "Olabisi Onabanjo University Ventures", service: "External Auditor", domain: "oouagoiwoye.edu.ng" },
        { name: "Niger State Development Company", service: "Joint Investigator (Shares/Dividends)", domain: "nigerstate.gov.ng" }
    ];

    const privateClients = [
        { name: "Monument Distillers Limited", service: "Vendors Investigation & Forensic Audit", domain: "monumentdistillers.com" },
        { name: "Imperio International", service: "External Auditor / Tax Consultants", domain: "imperio.com" },
        { name: "Port2Port West Africa", service: "Vessel Security Audit", domain: "port2port.com" },
        { name: "Solution Media & Infotec", service: "Forensic / Bank Charges Investigation", domain: "solutionmi.com" },
        { name: "KFC Nigeria (Devyani)", service: "External Auditor & BDSP", domain: "kfc.com" },
        { name: "Portfolio Advisers Limited", service: "Tax Consultant", domain: "portfolioadvisors.com" },
        { name: "Vitabiotics Nigeria Limited", service: "ERP Implementation", domain: "vitabiotics.com" },
        { name: "The Lacasera Products Company", service: "ERP Advisory", domain: "lacasera.com" },
        { name: "NIPCO Plc", service: "Tally ERP Solutions", domain: "nipcoplc.com" },
        { name: "Sonhart Industries Limited", service: "Strategic Financial Consultant", domain: "sonhart.com" }
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
                                <div key={i} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all flex items-start gap-4">
                                    <div className="w-12 h-12 shrink-0 rounded-full bg-white p-2 border border-slate-100 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={`https://logo.clearbit.com/${c.domain}`}
                                            alt={`${c.name} logo`}
                                            className="w-full h-full object-contain"
                                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2 leading-tight">{c.name}</h4>
                                        <p className="text-slate-500 text-sm font-light">{c.service}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-12">
                        <h2 className="text-3xl font-display text-slate-900 border-l-4 border-slate-900 pl-6">Private Sector Accomplishments</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {privateClients.map((c, i) => (
                                <div key={i} className="p-8 bg-white rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all flex items-start gap-4">
                                    <div className="w-12 h-12 shrink-0 rounded-full bg-slate-50 p-2 border border-slate-100 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={`https://logo.clearbit.com/${c.domain}`}
                                            alt={`${c.name} logo`}
                                            className="w-full h-full object-contain"
                                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2 leading-tight">{c.name}</h4>
                                        <p className="text-slate-500 text-sm font-light">{c.service}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Clients;
