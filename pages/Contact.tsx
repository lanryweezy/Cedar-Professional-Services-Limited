import React, { useState } from 'react';
import {
    CheckCircle2,
    AlertCircle,
    Loader2,
    Send,
    MapPin,
    Mail,
    Phone,
    User,
    Building2,
    Hash,
    HelpCircle,
    ChevronRight
} from 'lucide-react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        companyName: '',
        phone: '',
        serviceCategory: '',
        requirements: ''
    });

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
        if (!formData.requirements.trim()) newErrors.requirements = 'Project requirements are required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setFormStatus('submitting');
        setTimeout(() => {
            setFormStatus('success');
            setFormData({
                fullName: '',
                email: '',
                companyName: '',
                phone: '',
                serviceCategory: '',
                requirements: ''
            });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col lg:flex-row pt-20">
            <SEO
                title="Contact Us | Cedar Pro Nigeria"
                description="Connect with our experts in Lagos."
                keywords="Contact Forensic Accountant Lagos"
                canonicalUrl="https://cedarpro.com.ng/contact"
            />

            {/* Left Column - Office Info */}
            <div className="lg:w-[40%] bg-blue-900 text-white p-12 lg:p-20 space-y-16 relative overflow-hidden flex flex-col justify-center border-r border-white/5">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -mr-48 -mt-48" />

                <div className="space-y-6 relative z-10">
                    <h1 className="text-6xl font-display tracking-tight leading-tight">Lagos Office</h1>
                    <p className="text-slate-400 text-lg font-light leading-relaxed max-w-sm">
                        Visit our headquarters at the heart of Lagos Island for an in-person consultation.
                    </p>
                </div>

                <div className="space-y-10 relative z-10">
                    <div className="flex items-start gap-6 group">
                        <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform">
                            <MapPin size={24} className="text-white" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Address</p>
                            <p className="text-slate-100 font-medium leading-relaxed">
                                3rd Floor CSS Bookshop House, <br />
                                50/52 Broad Street, CMS, Lagos.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                        <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform">
                            <Phone size={24} className="text-white" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Direct Line</p>
                            <a href="tel:08034521158" className="text-slate-100 text-xl font-bold hover:text-blue-400 transition-colors">
                                0803 452 1158
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                        <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform">
                            <Mail size={24} className="text-white" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Email</p>
                            <a href="mailto:cedarprofessionalservicesltd@gmail.com" className="text-slate-100 font-medium break-all hover:text-blue-400 transition-colors tracking-tight">
                                cedarprofessionalservicesltd@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:w-[60%] bg-white p-12 lg:p-20 flex flex-col justify-center relative">
                <div className="max-w-3xl mx-auto w-full space-y-12 relative z-10">
                    <div className="space-y-4">
                        <h2 className="text-5xl font-display text-slate-900 tracking-tight leading-tight">Request an Assessment</h2>
                        <p className="text-slate-500 text-lg font-light">Provide details about your business requirements below.</p>
                    </div>

                    {formStatus === 'success' ? (
                        <div className="bg-slate-50 p-16 rounded-[3rem] text-center space-y-6 animate-in zoom-in duration-500 border border-slate-100" role="alert">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Assessment Requested!</h3>
                            <p className="text-slate-500 font-light max-w-sm mx-auto">Thank you for your interest. One of our partners will review your requirements and reach out within 24 hours.</p>
                            <button
                                onClick={() => setFormStatus('idle')}
                                className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all active:scale-95"
                            >
                                Send Another Request
                            </button>
                        </div>
                    ) : (
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label htmlFor="fullName" className="flex items-center gap-2 text-[10px] font-bold text-blue-800 uppercase tracking-widest">
                                        <User size={14} className="text-slate-300" /> Full Name
                                    </label>
                                    <input
                                        id="fullName"
                                        type="text"
                                        placeholder="Olumide Johnson"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        className={`w-full px-6 py-5 bg-slate-50 border-2 rounded-2xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all placeholder:text-slate-300 ${errors.fullName ? 'border-red-500' : 'border-slate-50'}`}
                                    />
                                    {errors.fullName && <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1 font-bold tracking-wide uppercase"><AlertCircle size={12} /> {errors.fullName}</p>}
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="email" className="flex items-center gap-2 text-[10px] font-bold text-blue-800 uppercase tracking-widest">
                                        <Mail size={14} className="text-slate-300" /> Work Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="example@company.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className={`w-full px-6 py-5 bg-slate-50 border-2 rounded-2xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all placeholder:text-slate-300 ${errors.email ? 'border-red-500' : 'border-slate-50'}`}
                                    />
                                    {errors.email && <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1 font-bold tracking-wide uppercase"><AlertCircle size={12} /> {errors.email}</p>}
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="companyName" className="flex items-center gap-2 text-[10px] font-bold text-blue-800 uppercase tracking-widest">
                                        <Building2 size={14} className="text-slate-300" /> Company Name
                                    </label>
                                    <input
                                        id="companyName"
                                        type="text"
                                        placeholder="Zenith Global Ltd"
                                        value={formData.companyName}
                                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                        className={`w-full px-6 py-5 bg-slate-50 border-2 rounded-2xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all placeholder:text-slate-300 ${errors.companyName ? 'border-red-500' : 'border-slate-50'}`}
                                    />
                                    {errors.companyName && <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1 font-bold tracking-wide uppercase"><AlertCircle size={12} /> {errors.companyName}</p>}
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="phone" className="flex items-center gap-2 text-[10px] font-bold text-blue-800 uppercase tracking-widest">
                                        <Hash size={14} className="text-slate-300" /> Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        type="text"
                                        placeholder="+234..."
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className={`w-full px-6 py-5 bg-slate-50 border-2 rounded-2xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all placeholder:text-slate-300 border-slate-50`}
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label htmlFor="service" className="flex items-center gap-2 text-[10px] font-bold text-blue-800 uppercase tracking-widest">
                                    <Hash size={14} className="text-slate-300" /> Service Category
                                </label>
                                <div className="relative">
                                    <select
                                        id="service"
                                        value={formData.serviceCategory}
                                        onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                                        className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Forensic Investigation & Fraud Audit</option>
                                        <option value="tax">Tax Consultancy & Compliance</option>
                                        <option value="audit">Statutory & Internal Audit</option>
                                        <option value="corporate">Corporate Restructuring</option>
                                        <option value="training">Tally/Sage Training</option>
                                    </select>
                                    <ChevronRight size={18} className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-slate-400 pointer-events-none" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label htmlFor="requirements" className="flex items-center gap-2 text-[10px] font-bold text-blue-800 uppercase tracking-widest">
                                    <HelpCircle size={14} className="text-slate-300" /> Project Requirements
                                </label>
                                <textarea
                                    id="requirements"
                                    rows={5}
                                    placeholder="Briefly describe the context of your inquiry..."
                                    value={formData.requirements}
                                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                    className={`w-full px-6 py-5 bg-slate-50 border-2 rounded-2xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all resize-none placeholder:text-slate-300 ${errors.requirements ? 'border-red-500' : 'border-slate-50'}`}
                                ></textarea>
                                {errors.requirements && <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1 font-bold tracking-wide uppercase"><AlertCircle size={12} /> {errors.requirements}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus === 'submitting'}
                                className="w-full py-6 bg-slate-900 text-white font-bold rounded-[2rem] hover:bg-blue-600 transition-all flex items-center justify-center gap-3 active:scale-[0.98] shadow-xl shadow-slate-200 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
                                {formStatus === 'submitting' ? (
                                    <Loader2 className="animate-spin" size={24} />
                                ) : (
                                    <>
                                        <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                        <span>Submit Assessment Request</span>
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;