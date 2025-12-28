
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        {
            label: 'About',
            path: '/about',
            submenu: [
                { label: 'Our Story', path: '/about' },
                { label: 'Our Clients', path: '/clients' },
                { label: 'Our Team', path: '/team' }
            ]
        },
        { label: 'Contact', path: '/contact' },
        { label: 'Blog', path: '/blog' },
    ];

    const handleNavClick = () => {
        setIsOpen(false);
        setActiveDropdown(null);
        window.scrollTo(0, 0);
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled || isOpen ? 'glass-effect py-2' : 'bg-transparent py-4'}`}
            role="navigation"
            aria-label="Main Navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link
                        to="/"
                        onClick={handleNavClick}
                        className="flex items-center space-x-3 text-left focus:outline-none rounded-lg p-1 group"
                        aria-label="Cedar Home"
                    >
                        <div className="relative h-12 w-auto flex items-center justify-center">
                            <img
                                src="/logo.png"
                                alt="Cedar Professional Services Logo"
                                className="h-full w-auto object-contain transition-transform group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col text-slate-900 group-hover:text-blue-600 transition-colors">
                            <span className="font-bold text-xl leading-none tracking-tight">CEDAR</span>
                            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-blue-700 mt-1">Professional Services</span>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center space-x-4 lg:space-x-6" role="menubar">
                        {navItems.map((item) => (
                            <div
                                key={item.path}
                                className="relative group/nav"
                                onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {item.submenu ? (
                                    <div className="flex items-center">
                                        <NavLink
                                            to={item.path}
                                            onClick={handleNavClick}
                                            className={({ isActive }) => `flex items-center gap-1 px-3 py-4 text-[11px] font-bold uppercase tracking-widest transition-colors ${isActive || activeDropdown === item.label ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
                                        >
                                            {item.label}
                                            <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180 text-blue-600' : ''}`} />
                                        </NavLink>
                                    </div>
                                ) : (
                                    <NavLink
                                        to={item.path}
                                        onClick={handleNavClick}
                                        className={({ isActive }) => `text-[11px] font-bold transition-all uppercase tracking-widest focus:outline-none relative group px-3 py-4 rounded ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {item.label}
                                                <span className={`absolute bottom-2 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                            </>
                                        )}
                                    </NavLink>
                                )}

                                {item.submenu && (
                                    <div className={`absolute top-full left-0 w-48 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl shadow-2xl p-2 transition-all duration-300 origin-top transform ${activeDropdown === item.label ? 'opacity-100 scale-100 translate-y-2' : 'opacity-0 scale-95 pointer-events-none'}`}>
                                        {item.submenu.map((sub) => (
                                            <NavLink
                                                key={sub.path}
                                                to={sub.path}
                                                onClick={handleNavClick}
                                                className={({ isActive }) => `block px-4 py-3 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all ${isActive ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}`}
                                            >
                                                {sub.label}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 focus:outline-none rounded-lg transition-colors ${isOpen ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-100'}`}
                            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden bg-white fixed inset-0 z-40 transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`} style={{ top: '0', paddingTop: '5rem' }}>
                <div className="px-6 py-8 space-y-2 h-full overflow-y-auto bg-white">
                    {navItems.map((item, idx) => (
                        <div key={item.path} className="space-y-2">
                            {item.submenu ? (
                                <div className="space-y-2">
                                    <button
                                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                                        className="w-full flex justify-between items-center px-6 py-5 text-2xl font-display text-slate-900 rounded-2xl hover:bg-slate-50 transition-all"
                                    >
                                        {item.label}
                                        <ChevronDown size={24} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180 text-blue-600' : 'text-slate-300'}`} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-500 ${activeDropdown === item.label ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="grid grid-cols-1 gap-2 pl-6 pt-2 pb-4">
                                            {item.submenu.map((sub) => (
                                                <NavLink
                                                    key={sub.path}
                                                    to={sub.path}
                                                    onClick={handleNavClick}
                                                    className={({ isActive }) => `flex items-center justify-between px-6 py-4 text-lg font-display rounded-2xl transition-all ${isActive ? 'text-blue-600 bg-blue-50' : 'text-slate-600'}`}
                                                >
                                                    {sub.label}
                                                    <ChevronRight size={18} />
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <NavLink
                                    to={item.path}
                                    onClick={handleNavClick}
                                    style={{ transitionDelay: `${idx * 50}ms` }}
                                    className={({ isActive }) => `block w-full text-left px-6 py-5 text-2xl font-display transition-all duration-300 rounded-2xl outline-none transform ${isOpen ? 'translate-x-0' : 'translate-x-8'} ${isActive ? 'text-blue-600 bg-blue-50 font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
                                >
                                    {item.label}
                                </NavLink>
                            )}
                        </div>
                    ))}

                    <div className="pt-12 px-6">
                        <div className="h-px w-12 bg-blue-600 mb-8"></div>
                        <p className="text-slate-400 text-sm font-light leading-relaxed">
                            3rd Floor CSS Bookshop House, <br />
                            50/52 Broad Street, CMS, Lagos.
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
