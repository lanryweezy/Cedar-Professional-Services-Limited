import React from 'react';
import { Newspaper, ArrowRight, Clock, User } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { posts } from '../data/blogPosts'; // Import posts from the new data file

const Blog: React.FC = () => {
    const [activeCategory, setActiveCategory] = React.useState('All');

    const filteredPosts = activeCategory === 'All'
        ? posts
        : posts.filter(post => post.category === activeCategory);

    return (
        <div className="animate-in fade-in duration-700">
            <SEO
                title="Accounting & Tax Insights | Cedar Pro Nigeria"
                description="Expert analysis on Nigerian tax laws (FIRS/LIRS/NRS), accounting practices, forensic audit trends, and corporate financial strategies by certified ICAN/ACCA professionals."
                keywords="tax insights Nigeria, FIRS updates, accounting blog Nigeria, ICAN articles, forensic audit blog, corporate finance news Lagos, Cedar Professional Services insights"
                canonicalUrl="https://cedarpro.com.ng/blog"
            />
            <PageHeader
                title="Insights"
                subtitle="Expert analysis and updates from the frontline of Nigerian finance and corporate regulation."
            />

            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-display text-slate-900 mb-4 tracking-tight">Latest Analysis</h2>
                            <p className="text-slate-600 font-light text-lg">Stay ahead with our deep dives into the Nigerian regulatory environment and financial landscape.</p>
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                            {['All', 'Tax Advisory', 'Forensic Audit', 'Financial Advisory', 'Business Support'].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2 rounded-full border transition-all whitespace-nowrap text-sm font-medium ${
                                        activeCategory === cat
                                        ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200'
                                        : 'bg-white border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {filteredPosts.map((post, i) => {
                            const categorySlug = post.category.toLowerCase().replace(/ /g, '-');
                            return (
                            <Link to={`/blog/${categorySlug}/${post.slug}`} key={post.slug} className="flex">
                                <article className="group cursor-pointer bg-white rounded-[2.5rem] p-4 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col w-full">
                                    <div className="relative h-64 mb-8 overflow-hidden rounded-[2rem] bg-slate-100 border border-slate-100">
                                        <img loading="lazy" src={post.image} alt={post.title}  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-blue-700 uppercase tracking-widest">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="px-4 pb-4 space-y-4 flex-grow flex flex-col">
                                        <div className="flex items-center gap-6 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                                            <div className="flex items-center gap-2"><Clock size={14} /> {post.date}</div>
                                            <div className="flex items-center gap-2"><User size={14} /> {post.author}</div>
                                        </div>
                                        <h3 className="text-2xl font-display text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-500 font-light leading-relaxed line-clamp-3 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <div className="pt-6 flex items-center justify-between border-t border-slate-50 mt-auto">
                                            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                                Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        )})}
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