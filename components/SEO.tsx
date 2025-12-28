
import React, { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    keywords: string;
    canonicalUrl?: string; // Optional canonical URL
    schemaData?: object; // Optional structured data for Schema.org
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonicalUrl, schemaData }) => {
    useEffect(() => {
        document.title = title;
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);

        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.setAttribute('name', 'keywords');
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', keywords);

        // Open Graph Meta Tags
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute('content', title);

        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (!ogDesc) {
            ogDesc = document.createElement('meta');
            ogDesc.setAttribute('property', 'og:description');
            document.head.appendChild(ogDesc);
        }
        ogDesc.setAttribute('content', description);

        // Canonical Link Tag
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalUrl) {
            if (!canonicalLink) {
                canonicalLink = document.createElement('link');
                canonicalLink.setAttribute('rel', 'canonical');
                document.head.appendChild(canonicalLink);
            }
            canonicalLink.setAttribute('href', canonicalUrl);
        } else if (canonicalLink) {
            // Remove canonical link if no canonicalUrl is provided
            document.head.removeChild(canonicalLink);
        }

        // Structured Data (Schema.org)
        let schemaScript = document.querySelector('script[type="application/ld+json"]');
        if (schemaData) {
            if (!schemaScript) {
                schemaScript = document.createElement('script');
                schemaScript.setAttribute('type', 'application/ld+json');
                document.head.appendChild(schemaScript);
            }
            schemaScript.textContent = JSON.stringify(schemaData);
        } else if (schemaScript) {
            // Remove schema script if no schemaData is provided
            document.head.removeChild(schemaScript);
        }

    }, [title, description, keywords, canonicalUrl, schemaData]);

    return null;
};

export default SEO;
