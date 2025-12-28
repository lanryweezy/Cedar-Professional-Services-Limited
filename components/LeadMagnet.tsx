
import React from 'react';
import { DownloadCloud, ArrowRight } from 'lucide-react';

const LeadMagnet: React.FC = () => {
    return (
        <div className="bg-blue-50 rounded-[3rem] p-12 lg:p-20 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
            <div className="relative z-10 space-y-6">
                <DownloadCloud className="mx-auto text-blue-500" size={48} />
                <h2 className="text-3xl md:text-5xl font-display text-slate-900 tracking-tight">
                    Get Our Free Tax Compliance Checklist
                </h2>
                <p className="text-slate-500 max-w-xl mx-auto font-light text-lg">
                    Ensure your business is fully compliant with the latest FIRS and LIRS regulations. Our checklist covers all the essentials.
                </p>
                <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-grow px-8 py-5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <button className="px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all whitespace-nowrap flex items-center justify-center group">
                        Download Now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LeadMagnet;
