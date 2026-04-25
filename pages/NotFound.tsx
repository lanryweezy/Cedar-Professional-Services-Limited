import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, ChevronLeft } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <SEO
                title="Page Not Found | Cedar Pro Nigeria"
                description="The page you are looking for does not exist."
                keywords="404, not found"
            />
            <div className="max-w-md w-full bg-white rounded-[2.5rem] p-10 text-center shadow-xl border border-slate-100">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldAlert size={40} />
                </div>
                <h1 className="text-4xl font-display text-slate-900 mb-4">404</h1>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    We couldn't find the page you're looking for. It might have been moved or doesn't exist.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-colors group"
                >
                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Homepage
                </button>
            </div>
        </div>
    );
};

export default NotFound;