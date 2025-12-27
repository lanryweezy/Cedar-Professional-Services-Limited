
import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Send, MapPin, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setFormStatus('submitting');
        setTimeout(() => {
            setFormStatus('success');
            setFormData({ fullName: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <div className="animate-in fade-in duration-700">
            <SEO title="Contact Us | Cedar Pro Nigeria" description="Connect with our experts in Lagos." keywords="Contact Forensic Accountant Lagos" />
            <PageHeader title="Connect With Us" subtitle="Strategic financial support is just a conversation away. Reach our partners directly." />
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-12">
                            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 space-y-12">
                                <div>
                                    <h2 className="text-3xl font-display mb-6 tracking-tight">Managing Partners</h2>
                                    <div className="space-y-8">
                                        <div>
                                            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">Olugbenga Folarin</p>
                                            <a href="tel:08034521158" className="block text-slate-900 font-medium hover:text-blue-600 transition-colors rounded">0803 452 1158</a>
                                            <p className="text-slate-400 text-sm">0702 837 5516 | 0805 888 7032</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Solomon</p>
                                            <a href="tel:08027165839" className="block text-slate-900 font-medium hover:text-blue-600 transition-colors rounded">0802 716 5839</a>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Olaide</p>
                                            <a href="tel:08035323440" className="block text-slate-900 font-medium hover:text-blue-600 transition-colors rounded">0803 532 3440</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6 pt-12 border-t border-slate-50">
                                    <div className="flex items-center gap-4 text-slate-600">
                                        <MapPin className="text-blue-600" size={20} aria-hidden="true" />
                                        <span className="text-sm">3rd Floor CSS Bookshop House, 50/52 Broad Street, CMS, Lagos.</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-600">
                                        <Mail className="text-blue-600" size={20} aria-hidden="true" />
                                        <span className="text-sm font-medium">cedarprofessionalservicesltd@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-slate-200/50">
                            <form className="space-y-6" onSubmit={handleSubmit} noValidate aria-label="Contact Assessment Form">
                                <h3 className="text-3xl font-display text-slate-900 mb-8 tracking-tight">Request an Assessment</h3>
                                {formStatus === 'success' ? (
                                    <div className="text-center py-20 space-y-6 animate-in zoom-in duration-500" role="alert">
                                        <CheckCircle2 size={64} className="mx-auto text-green-500" />
                                        <p className="text-slate-900 font-bold text-xl">Thank you. Your message has been sent.</p>
                                        <button onClick={() => setFormStatus('idle')} className="text-blue-600 font-bold hover:underline focus:outline-none rounded">Send another inquiry</button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="space-y-1">
                                            <label htmlFor="fullName" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Full Name</label>
                                            <input
                                                id="fullName"
                                                type="text"
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl focus:border-blue-600 focus:outline-none transition-all ${errors.fullName ? 'border-red-500' : 'border-slate-100'}`}
                                            />
                                            {errors.fullName && <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.fullName}</p>}
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Email Address</label>
                                            <input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl focus:border-blue-600 focus:outline-none transition-all ${errors.email ? 'border-red-500' : 'border-slate-100'}`}
                                            />
                                            {errors.email && <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.email}</p>}
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="message" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Inquiry Details</label>
                                            <textarea
                                                id="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl focus:border-blue-600 focus:outline-none transition-all resize-none ${errors.message ? 'border-red-500' : 'border-slate-100'}`}
                                            ></textarea>
                                            {errors.message && <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.message}</p>}
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-3 active:scale-[0.98] outline-none"
                                            disabled={formStatus === 'submitting'}
                                        >
                                            {formStatus === 'submitting' ? <Loader2 className="animate-spin" aria-hidden="true" /> : <><Send size={18} aria-hidden="true" /> Send Inquiry</>}
                                        </button>
                                    </>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
