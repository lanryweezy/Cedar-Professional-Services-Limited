import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Calculator, ShieldCheck, FileSearch, HelpCircle } from 'lucide-react';

const checklistItems = [
    {
        id: 'tax',
        title: 'Tax Compliance',
        icon: <Calculator size={24} />,
        questions: [
            'Do you have a valid Tax Clearance Certificate for the current year?',
            'Are you registered with FIRS and LIRS?',
            'Is your company compliant with CAMA 2020 tax requirements?'
        ]
    },
    {
        id: 'audit',
        title: 'Audit & Integrity',
        icon: <ShieldCheck size={24} />,
        questions: [
            'Have your accounts been audited in the last 12 months?',
            'Are you planning for a major corporate expansion?',
            'Do you need to verify revenue collection for a state-funded project?'
        ]
    },
    {
        id: 'forensic',
        title: 'Forensic & Fraud',
        icon: <FileSearch size={24} />,
        questions: [
            'Are there unexplained irregularities in your bank charges?',
            'Do you suspect fraudulent activity within your organization?',
            'Do you need an unbiased opinion on a complex financial matter?'
        ]
    }
];

const TaxChecklist: React.FC = () => {
    const [answers, setAnswers] = useState<Record<string, boolean>>({});

    const toggleAnswer = (questionId: string) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: !prev[questionId]
        }));
    };

    const answeredCount = Object.values(answers).filter(Boolean).length;

    return (
        <div className="glass-effect rounded-[3rem] p-8 lg:p-12 space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                    <h3 className="text-3xl font-display text-slate-900 tracking-tight">Tax & Compliance Checklist</h3>
                    <p className="text-slate-500 font-light">Identify your professional service needs in seconds.</p>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-blue-50 text-blue-700 rounded-2xl font-bold text-sm">
                    {answeredCount} Items Flagged
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {checklistItems.map((category) => (
                    <div key={category.id} className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                                {category.icon}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900">{category.title}</h4>
                        </div>
                        <ul className="space-y-4">
                            {category.questions.map((q, idx) => {
                                const qId = `${category.id}-${idx}`;
                                const isChecked = !!answers[qId];
                                return (
                                    <li
                                        key={idx}
                                        onClick={() => toggleAnswer(qId)}
                                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex gap-4 ${isChecked
                                                ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200 py-6'
                                                : 'bg-white border-slate-100 text-slate-600 hover:border-blue-200'
                                            }`}
                                    >
                                        <div className={`shrink-0 mt-1`}>
                                            {isChecked ? <CheckCircle2 size={18} /> : <HelpCircle size={18} className="text-slate-300" />}
                                        </div>
                                        <span className="text-sm font-medium leading-relaxed">{q}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>

            {answeredCount > 0 && (
                <div className="pt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="p-8 bg-slate-900 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-2 text-center md:text-left">
                            <h4 className="text-xl font-bold">We can help with these {answeredCount} items.</h4>
                            <p className="text-slate-400 font-light text-sm">Our experts specialize in resolving these specific compliance challenges.</p>
                        </div>
                        <button
                            onClick={() => window.location.href = '/contact'}
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center gap-2 group whitespace-nowrap"
                        >
                            Request Specialized Consultation
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaxChecklist;
