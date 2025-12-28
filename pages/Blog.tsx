import React from 'react';
import { Newspaper, ArrowRight, Clock, User } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
    const posts = [
        {
            title: "The Future of Taxation in Nigeria: A 2026 Outlook",
            excerpt: "As Nigeria's economy evolves, so does its tax landscape. We predict the key tax trends and policy shifts that will shape business and investment decisions in 2026.",
            date: "Oct 15, 2025",
            author: "Tax Advisory Team",
            category: "Tax Advisory",
            slug: "the-future-of-taxation-in-nigeria-a-2026-outlook",
            content: "Full content for The Future of Taxation in Nigeria: A 2026 Outlook"
        },
        {
            title: "AI and Automation in Financial Audits: What Nigerian Businesses Need to Know for 2026",
            excerpt: "Artificial Intelligence is set to revolutionize financial auditing. Discover how Nigerian companies can prepare for the shift towards automated, data-driven audits in 2026.",
            date: "Oct 22, 2025",
            author: "Audit & Assurance",
            category: "Forensic Audit",
            slug: "ai-and-automation-in-financial-audits-what-nigerian-businesses-need-to-know-for-2026",
            content: "Full content for AI and Automation in Financial Audits: What Nigerian Businesses Need to Know for 2026"
        },
        {
            title: "The Impact of Blockchain and Digital Currencies on Nigerian Commerce by 2026",
            excerpt: "From supply chain management to international payments, we explore the transformative potential of blockchain and digital currencies for Nigerian businesses in the coming years.",
            date: "Nov 05, 2025",
            author: "Financial Services",
            category: "Business Support",
            slug: "the-impact-of-blockchain-and-digital-currencies-on-nigerian-commerce-by-2026",
            content: "Full content for The Impact of Blockchain and Digital Currencies on Nigerian Commerce by 2026"
        },
        {
            title: "Navigating Cross-Border Transactions: A 2026 Guide for Nigerian Importers and Exporters",
            excerpt: "With the rise of AfCFTA and global trade shifts, this guide provides Nigerian businesses with the strategic insights needed to navigate the complexities of international trade in 2026.",
            date: "Nov 12, 2025",
            author: "Olugbenga Folarin",
            category: "Strategy & Operations",
            slug: "navigating-cross-border-transactions-a-2026-guide-for-nigerian-importers-and-exporters",
            content: "Full content for Navigating Cross-Border Transactions: A 2026 Guide for Nigerian Importers and Exporters"
        },
        {
            title: "Sustainable Finance and ESG Reporting: The New Frontier for Nigerian Corporations in 2026",
            excerpt: "Environmental, Social, and Governance (ESG) criteria are becoming critical for investors. Learn why ESG reporting will be a key differentiator for Nigerian companies by 2026.",
            date: "Nov 19, 2025",
            author: "Corporate Finance",
            category: "Financial Advisory",
            slug: "sustainable-finance-and-esg-reporting-the-new-frontier-for-nigerian-corporations-in-2026",
            content: "Full content for Sustainable Finance and ESG Reporting: The New Frontier for Nigerian Corporations in 2026"
        },
        {
            title: "A Decade of Digital Transformation in Nigerian Banking (2015-2025)",
            excerpt: "We trace the journey of Nigeria's banking sector from traditional banking to the digital-first landscape of today, highlighting key milestones and their impact.",
            date: "Sep 10, 2025",
            author: "Financial Services",
            category: "Business Support",
            slug: "a-decade-of-digital-transformation-in-nigerian-banking-2015-2025",
            content: "Full content for A Decade of Digital Transformation in Nigerian Banking (2015-2025)"
        },
        {
            title: "The Evolution of Corporate Tax in Nigeria: A 20-Year Retrospective",
            excerpt: "Explore the significant changes in Nigeria's corporate tax laws over the last two decades and what they mean for businesses today.",
            date: "Sep 17, 2025",
            author: "Tax Advisory Team",
            category: "Tax Advisory",
            slug: "the-evolution-of-corporate-tax-in-nigeria-a-20-year-retrospective",
            content: "Full content for The Evolution of Corporate Tax in Nigeria: A 20-Year Retrospective"
        },
        {
            title: "Lessons Learned: Key Findings from Major Nigerian Corporate Audits of the 2010s",
            excerpt: "A retrospective analysis of landmark audit cases in Nigeria from the last decade and the lessons they offer for modern corporate governance.",
            date: "Sep 24, 2025",
            author: "Audit & Assurance",
            category: "Forensic Audit",
            slug: "lessons-learned-key-findings-from-major-nigerian-corporate-audits-of-the-2010s",
            content: "Full content for Lessons Learned: Key Findings from Major Nigerian Corporate Audits of the 2010s"
        },
        {
            title: "From Paper to Platform: The Digitization of the CAC in Nigeria",
            excerpt: "A look at the Corporate Affairs Commission's journey towards full digitization and how it has streamlined business registration and compliance in Nigeria.",
            date: "Oct 01, 2025",
            author: "Corporate Services",
            category: "Business Support",
            slug: "from-paper-to-platform-the-digitization-of-the-cac-in-nigeria",
            content: "Full content for From Paper to Platform: The Digitization of the CAC in Nigeria"
        },
        {
            title: "Pivotal Moments in Nigerian Finance: A Look Back at the Last Decade",
            excerpt: "From banking reforms to fintech disruptions, we revisit the key events that have shaped Nigeria's financial landscape over the past 10 years.",
            date: "Oct 08, 2025",
            author: "Olugbenga Folarin",
            category: "Financial Advisory",
            slug: "pivotal-moments-in-nigerian-finance-a-look-back-at-the-last-decade",
            content: "Full content for Pivotal Moments in Nigerian Finance: A Look Back at the Last Decade"
        },
        {
            title: "The Gig Economy in 2026: Tax Implications for Nigerian Freelancers and Businesses",
            excerpt: "As the gig economy continues to grow, we break down the evolving tax responsibilities for independent contractors and the companies that hire them in Nigeria.",
            date: "Jan 15, 2026",
            author: "Tax Advisory Team",
            category: "Tax Advisory",
            slug: "the-gig-economy-in-2026-tax-implications-for-nigerian-freelancers-and-businesses",
            content: "Full content for The Gig Economy in 2026: Tax Implications for Nigerian Freelancers and Businesses"
        },
        {
            title: "Post-Election Economic Outlook for Nigeria in 2026",
            excerpt: "Analyzing the potential economic shifts and policy changes following the recent election cycle, and what they mean for your business strategy in 2026.",
            date: "Jan 29, 2026",
            author: "Olugbenga Folarin",
            category: "Strategy & Operations",
            slug: "post-election-economic-outlook-for-nigeria-in-2026",
            content: "Full content for Post-Election Economic Outlook for Nigeria in 2026"
        },
        {
            title: "Cybersecurity in the Boardroom: A 2026 Priority for Nigerian Companies",
            excerpt: "With digital threats becoming more sophisticated, we outline why cybersecurity is no longer just an IT issue, but a critical component of corporate governance.",
            date: "Feb 05, 2026",
            author: "Audit & Assurance",
            category: "Forensic Audit",
            slug: "cybersecurity-in-the-boardroom-a-2026-priority-for-nigerian-companies",
            content: "Full content for Cybersecurity in the Boardroom: A 2026 Priority for Nigerian Companies"
        },
        {
            title: "Real Estate Investment in Nigeria: Trends and Opportunities for 2026",
            excerpt: "A look at the most promising segments of the Nigerian real estate market for 2026, from commercial properties to residential developments.",
            date: "Feb 12, 2026",
            author: "Financial Services",
            category: "Financial Advisory",
            slug: "real-estate-investment-in-nigeria-trends-and-opportunities-for-2026",
            content: "Full content for Real Estate Investment in Nigeria: Trends and Opportunities for 2026"
        },
        {
            title: "The Manufacturer's Guide to Thriving in Nigeria's 2026 Economy",
            excerpt: "Navigating supply chain challenges, leveraging new technologies, and optimizing for growth in Nigeria's dynamic manufacturing sector.",
            date: "Feb 19, 2026",
            author: "Corporate Finance",
            category: "Business Support",
            slug: "the-manufacturers-guide-to-thriving-in-nigerias-2026-economy",
            content: "Full content for The Manufacturer's Guide to Thriving in Nigeria's 2026 Economy"
        },
        {
            title: "Navigating FIRS Tax Compliance in 2024",
            excerpt: "Stay ahead of regulatory changes with our comprehensive guide to new tax laws and compliance requirements in Nigeria.",
            date: "Dec 15, 2023",
            author: "Olugbenga Folarin",
            category: "Tax Advisory",
            slug: "navigating-firs-tax-compliance-in-2024",
            content: "Full content for Navigating FIRS Tax Compliance in 2024"
        },
        {
            title: "The Rise of Forensic Audit in Corporate Governance",
            excerpt: "How forensic investigation is becoming a cornerstone of modern corporate transparency and fraud prevention.",
            date: "Dec 05, 2023",
            author: "Audit Team",
            category: "Forensic Audit",
            slug: "the-rise-of-forensic-audit-in-corporate-governance",
            content: "Full content for The Rise of Forensic Audit in Corporate Governance"
        },
        {
            title: "SME Growth: Leveraging BOI Funding",
            excerpt: "A step-by-step guide for Nigerian SMEs looking to access Bank of Industry support for business expansion.",
            date: "Nov 20, 2023",
            author: "Financial Services",
            category: "Business Support",
            slug: "sme-growth-leveraging-boi-funding",
            content: "Full content for SME Growth: Leveraging BOI Funding"
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
                            <Link to={`/blog/${post.slug}`} key={i}>
                                <article className="group cursor-pointer">
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
                            </Link>
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

