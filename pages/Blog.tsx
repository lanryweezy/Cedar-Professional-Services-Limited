import React from 'react';
import { Newspaper, ArrowRight, Clock, User } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Blog: React.FC = () => {
    const posts = [
        {
            title: "Navigating FIRS Tax Compliance in 2024",
            excerpt: "Stay ahead of regulatory changes with our comprehensive guide to new tax laws and compliance requirements in Nigeria.",
            date: "Dec 15, 2023",
            author: "Olugbenga Folarin",
            category: "Tax Advisory"
        },
        {
            title: "The Rise of Forensic Audit in Corporate Governance",
            excerpt: "How forensic investigation is becoming a cornerstone of modern corporate transparency and fraud prevention.",
            date: "Dec 05, 2023",
            author: "Audit Team",
            category: "Forensic Audit"
        },
        {
            title: "SME Growth: Leveraging BOI Funding",
            excerpt: "A step-by-step guide for Nigerian SMEs looking to access Bank of Industry support for business expansion.",
            date: "Nov 20, 2023",
            author: "Financial Services",
            category: "Business Support"
        }
    ];

    return (
        <div className="animate-in fade-in duration-700">
            <SEO
                title="Insights & Industry Updates | Cedar Pro Nigeria"
                description="Expert analysis on Nigerian tax laws, forensic audit trends, and corporate financial strategies."
                keywords="tax insights Nigeria, forensic audit blog, corporate finance news Lagos, Cedar Professional Services insights"
            />
            <PageHeader
                title="Insights"
                subtitle="Expert analysis and updates from the frontline of Nigerian finance and corporate regulation."
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {posts.map((post, i) => (
                            <article key={i} className="group cursor-pointer">
                                <div className="relative h-64 mb-8 overflow-hidden rounded-[2.5rem] bg-slate-100 border border-slate-100">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-slate-900/10 group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-blue-700 uppercase tracking-widest">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-6 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                                        <div className="flex items-center gap-2"><Clock size={14} /> {post.date}</div>
                                        <div className="flex items-center gap-2"><User size={14} /> {post.author}</div>
                                    </div>
                                    <h3 className="text-2xl font-display text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-500 font-light leading-relaxed line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="pt-4 flex items-center text-blue-600 font-bold text-xs uppercase tracking-widest gap-2">
                                        Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-24 p-12 lg:p-20 bg-slate-950 rounded-[3rem] text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -mr-48 -mt-48" />
                        <div className="relative z-10 space-y-8">
                            <Newspaper className="mx-auto text-blue-500" size={48} />
                            <h2 className="text-3xl md:text-5xl font-display text-white tracking-tight">Stay Informed</h2>
                            <p className="text-slate-400 max-w-xl mx-auto font-light text-lg">
                                Subscribe to our newsletter to receive the latest regulatory updates and financial insights directly in your inbox.
                            </p>
                            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-grow px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-blue-500 transition-colors"
                                />
                                <button className="px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
