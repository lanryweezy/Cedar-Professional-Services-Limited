import fs from 'fs';
import path from 'path';

// Load blog posts dynamically
import { posts } from './blogPosts.js';

const BASE_URL = 'https://cedarpro.com.ng';
const PUBLIC_DIR = path.resolve('./dist');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');
const ROBOTS_PATH = path.join(PUBLIC_DIR, 'robots.txt');

const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/team',
  '/clients',
  '/contact',
  '/blog'
];

function generateSitemap() {
  const dynamicRoutes = posts.map(post => {
    const categorySlug = post.category.toLowerCase().replace(/ /g, '-');
    return `/blog/${categorySlug}/${post.slug}`;
  });

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes.map(route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR);
  }

  fs.writeFileSync(SITEMAP_PATH, sitemapXml, 'utf8');
  console.log(`✅ Sitemap generated at ${SITEMAP_PATH}`);
}

function generateRobots() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml`;

  fs.writeFileSync(ROBOTS_PATH, robotsTxt, 'utf8');
  console.log(`✅ Robots.txt generated at ${ROBOTS_PATH}`);
}

try {
    generateSitemap();
    generateRobots();
} catch (error) {
    console.error('Error generating SEO files:', error);
}
