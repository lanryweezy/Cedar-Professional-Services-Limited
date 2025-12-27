
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Team', path: '/team' },
        { label: 'Clients', path: '/clients' },
        { label: 'Contact', path: '/contact' },
    ];

    const handleNavClick = () => {
        setIsOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-effect py-2' : 'bg-transparent py-4'}`}
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
                        <div className="flex flex-col">
                            <span className="font-bold text-xl leading-none text-slate-900 tracking-tight">CEDAR</span>
                            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-blue-700 mt-1">Professional Services</span>
                        </div>
                    </Link>

                    <div className="hidden md:flex space-x-6 lg:space-x-8" role="menubar">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={handleNavClick}
                                role="menuitem"
                                className={({ isActive }) => `text-[11px] font-bold transition-all uppercase tracking-widest focus:outline-none relative group px-2 py-1 rounded ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                                    }`}
                            >
                                {({ isActive }) => (
                                    <>
                                        {item.label}
                                        <span className={`absolute -bottom-1 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-700 p-2 focus:outline-none rounded-lg"
                            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden bg-white fixed inset-0 top-[4rem] transition-all duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="px-6 py-8 space-y-4 h-full overflow-y-auto">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={handleNavClick}
                            className={({ isActive }) => `block w-full text-left px-4 py-4 text-xl font-display transition-colors rounded-xl outline-none ${isActive ? 'text-blue-600' : 'text-slate-700 hover:bg-slate-50'
                                }`}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
