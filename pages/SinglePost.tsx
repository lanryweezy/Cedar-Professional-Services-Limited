
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

    const recommendedPosts = posts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 3);

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "image": post.image,
        "datePublished": new Date(post.date).toISOString(),
        "dateModified": new Date(post.date).toISOString(), // Assuming dateModified is the same as datePublished for now
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Cedar Professional Services Limited",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cedarpro.com.ng/logo.png"
            }
        },
        "description": post.excerpt,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://cedarpro.com.ng/blog/${post.slug}`
        }
    };

    return (
        <div className="animate-in fade-in duration-700">
            <SEO
                title={`${post.title} | Cedar Pro Nigeria`}
                description={post.excerpt}
                keywords={`tax insights Nigeria, forensic audit blog, corporate finance news Lagos, Cedar Professional Services insights, ${post.title}`}
                canonicalUrl={`https://cedarpro.com.ng/blog/${post.slug}`}
                schemaData={articleSchema}
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

                    <img src={post.image} alt={post.title} className="rounded-[2rem] shadow-lg mb-12" />

                    <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900 prose-a:text-blue-600">
                        {/* <p className="lead">{post.excerpt}</p> */}
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>

                    <hr className="my-16" />

                    <div>
                        <h2 className="text-3xl font-display text-slate-900 mb-8">Recommended For You</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {recommendedPosts.map((recPost, i) => (
                                <Link to={`/blog/${recPost.slug}`} key={i}>
                                    <article className="group cursor-pointer">
                                        <img src={recPost.image} alt={recPost.title} className="rounded-2xl shadow-md mb-4" />
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
