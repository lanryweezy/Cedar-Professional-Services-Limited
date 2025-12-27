
import React from 'react';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <header className="bg-slate-900 pt-32 md:pt-48 pb-16 md:pb-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">{title}</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">{subtitle}</p>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-10 rounded-full" />
        </div>
    </header>
);

export default PageHeader;
