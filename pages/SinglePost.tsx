import { getArticleSchema } from "../utils/schema";

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { Clock, User, ArrowRight } from 'lucide-react';
import { posts } from '../data/blogPosts';

const SinglePost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    const post = posts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div>
                <PageHeader title="Post not found" />
            </div>
        );
    }

    const recommendedPosts = posts
        .filter(p => (p.category === post.category || p.author === post.author) && p.slug !== post.slug)
        .slice(0, 3);

    const articleSchema = getArticleSchema(post);

    const currentUrl = `https://cedarpro.com.ng/blog/${post.category.toLowerCase().replace(/ /g, '-')}/${post.slug}`;

    const handleShare = (platform: string) => {
        const text = encodeURIComponent(post.title);
        const url = encodeURIComponent(currentUrl);
        let shareUrl = '';

        if (platform === 'twitter') shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        if (platform === 'linkedin') shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        if (platform === 'facebook') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;

        if (shareUrl) window.open(shareUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="animate-in fade-in duration-700">
            <SEO
                title={`${post.title} | Cedar Pro Nigeria`}
                description={post.excerpt}
                keywords={`tax insights Nigeria, forensic audit blog, corporate finance news Lagos, Cedar Professional Services insights, ${post.title}`}
                canonicalUrl={currentUrl}
                schemaData={articleSchema}
                image={post.image}
            />
            <PageHeader
                title={post.title}
                subtitle={post.category}
            />

            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-6 text-slate-400 text-sm font-bold uppercase tracking-widest mb-8">
                        <div className="flex items-center gap-2"><Clock size={16} /> {post.date}</div>
                        <div className="flex items-center gap-2"><User size={16} /> {post.author}</div>
                    </div>

                    <img loading="lazy"  src={post.image} alt={post.title} className="rounded-[2rem] shadow-lg mb-12" />

                    <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900 prose-a:text-blue-600 prose-img:rounded-3xl prose-img:shadow-xl">
                        <p className="text-xl text-slate-500 font-light leading-relaxed mb-12 border-l-4 border-blue-600 pl-8 italic">
                            {post.excerpt}
                        </p>
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                                <User size={32} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Written by</p>
                                <p className="text-xl font-display text-slate-900">{post.author}</p>
                                <Link to="/team" className="text-blue-600 text-sm hover:underline">View Team Profile</Link>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={() => handleShare('twitter')} className="p-3 bg-slate-50 text-slate-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors" aria-label="Share on Twitter">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </button>
                            <button onClick={() => handleShare('linkedin')} className="p-3 bg-slate-50 text-slate-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors" aria-label="Share on LinkedIn">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                            </button>
                            <button onClick={() => handleShare('facebook')} className="p-3 bg-slate-50 text-slate-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors" aria-label="Share on Facebook">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </button>
                        </div>
                    </div>

                    <hr className="my-16 border-slate-100" />

                    <div>
                        <h2 className="text-3xl font-display text-slate-900 mb-8">Recommended For You</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {recommendedPosts.map((recPost, i) => (
                                <Link to={`/blog/${recPost.category.toLowerCase().replace(/ /g, '-')}/${recPost.slug}`} key={i}>
                                    <article className="group cursor-pointer">
                                        <img loading="lazy"  src={recPost.image} alt={recPost.title} className="rounded-2xl shadow-md mb-4" />
                                        <h3 className="text-xl font-display text-slate-900 leading-tight group-hover:text-blue-600 transition-colors mb-2">
                                            {recPost.title}
                                        </h3>
                                        <p className="text-slate-500 font-light text-sm leading-relaxed line-clamp-2">
                                            {recPost.excerpt}
                                        </p>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SinglePost;
