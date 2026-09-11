export const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Cedar Professional Services Limited",
    "image": "https://cedarpro.com.ng/logo.png",
    "description": "Expert Forensic Accounting, Tax Advisory, and Statutory Audit in Lagos, Nigeria.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "36, Moloney Street, Onikan",
        "addressLocality": "Lagos",
        "addressRegion": "LA",
        "postalCode": "101223",
        "addressCountry": "NG"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 6.4468,
        "longitude": 3.4024
    },
    "url": "https://cedarpro.com.ng",
    "telephone": "+2348083812836",
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "17:00"
        }
    ],
    "sameAs": [
        "https://www.linkedin.com/company/cedarpro",
        "https://twitter.com/cedarpro"
    ]
});

export const getArticleSchema = (post: any) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": `https://cedarpro.com.ng/logo.png`, // Fallback image for now
    "datePublished": post.date,
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
    }
});
