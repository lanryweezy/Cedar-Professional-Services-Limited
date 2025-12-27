
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

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
            className={`fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-2xl transition-all duration-500 z-40 hover:bg-blue-700 hover:-translate-y-1 focus:outline-none ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
                }`}
            aria-label="Back to top"
        >
            <ArrowUp size={20} />
        </button>
    );
};

export default BackToTop;
