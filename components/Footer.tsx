
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-50 pt-32 pb-16 border-t border-slate-100" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                    <div className="space-y-8 text-center md:text-left">
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <img src="/logo.png" className="h-10 w-auto" alt="Cedar Professional Services Footer Logo" />
                            <div className="flex flex-col text-left">
                                <span className="font-bold text-xl leading-none text-slate-900 tracking-tight uppercase">CEDAR</span>
                                <span className="text-[7px] font-bold tracking-[0.1em] uppercase text-blue-700">Professional Services</span>
                            </div>
                        </div>
                        <p className="text-slate-500 leading-relaxed text-sm font-light">Professional financial support for the Nigerian market since 2013. Precision in audit, transparency in taxation.</p>
                    </div>
                    <div className="space-y-8 text-center md:text-left">
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Practice Areas</h4>
                        <ul className="space-y-4 text-slate-600 text-sm font-medium">
                            <li><Link to="/services" className="hover:text-blue-600 transition-colors">Forensic Investigation</Link></li>
                            <li><Link to="/services" className="hover:text-blue-600 transition-colors">Tax Consultancy</Link></li>
                            <li><Link to="/services" className="hover:text-blue-600 transition-colors">Statutory Audit</Link></li>
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
                            CSS Bookshop House,<br />
                            50/52 Broad Street, CMS,<br />
                            <span className="font-medium text-slate-500">Lagos Island Financial District,</span><br />
                            Lagos, Nigeria.
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
    );
};

export default Footer;
