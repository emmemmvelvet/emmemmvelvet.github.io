import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

const BASE_URL = 'https://emmemmvelvet.com';

// 1. Extract blog slugs & dates from src/data/blogs.ts
const blogsFile = path.join(rootDir, 'src', 'data', 'blogs.ts');
let blogEntries = [];

if (fs.existsSync(blogsFile)) {
  const content = fs.readFileSync(blogsFile, 'utf-8');
  const postBlocks = content.split(/\{\s*slug:\s*["']/g).slice(1);
  for (const block of postBlocks) {
    const slugMatch = block.match(/^([^"']+)/);
    const dateMatch = block.match(/date:\s*["']([^"']+)["']/);
    if (slugMatch) {
      const slug = slugMatch[1];
      let isoDate = '2026-10-01';
      if (dateMatch) {
        const parsed = new Date(dateMatch[1]);
        if (!isNaN(parsed.getTime())) {
          isoDate = parsed.toISOString().split('T')[0];
        }
      }
      blogEntries.push({ slug, date: isoDate });
    }
  }
}

// 2. Static pages list with priorities and changefreq
const today = new Date().toISOString().split('T')[0];

const urls = [
  { loc: `${BASE_URL}/`, lastmod: today, changefreq: 'weekly', priority: '1.0' },
  { loc: `${BASE_URL}/products`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
  { loc: `${BASE_URL}/products?category=sofa-fabric`, lastmod: today, changefreq: 'weekly', priority: '0.85' },
  { loc: `${BASE_URL}/products?category=sofa-cover`, lastmod: today, changefreq: 'weekly', priority: '0.85' },
  { loc: `${BASE_URL}/products?category=bedding`, lastmod: today, changefreq: 'weekly', priority: '0.85' },
  { loc: `${BASE_URL}/products?category=cushions`, lastmod: today, changefreq: 'weekly', priority: '0.85' },
  { loc: `${BASE_URL}/manufacturing`, lastmod: '2026-10-01', changefreq: 'monthly', priority: '0.85' },
  { loc: `${BASE_URL}/about`, lastmod: '2026-10-01', changefreq: 'monthly', priority: '0.80' },
  { loc: `${BASE_URL}/blog`, lastmod: today, changefreq: 'weekly', priority: '0.85' },
  { loc: `${BASE_URL}/contact`, lastmod: '2026-10-01', changefreq: 'monthly', priority: '0.70' },
];

for (const blog of blogEntries) {
  urls.push({
    loc: `${BASE_URL}/blog/${blog.slug}`,
    lastmod: blog.date,
    changefreq: 'monthly',
    priority: '0.75',
  });
}

// Generate sitemap.xml
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

// Generate robots.txt
const robotsTxt = `# Emm Emm Velvet — Robots.txt
# Optimized for Googlebot, Google Search Console & Image Indexing

User-agent: *
Allow: /
Disallow: /api/
Disallow: /demo-preloader/
Disallow: /_next/

User-agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /demo-preloader/

User-agent: Googlebot-Image
Allow: /images/
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.webp$
Allow: /*.svg$

Sitemap: ${BASE_URL}/sitemap.xml
Host: ${BASE_URL}
`;

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf-8');

const outDir = path.join(rootDir, 'out');
if (fs.existsSync(outDir)) {
  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(outDir, 'robots.txt'), robotsTxt, 'utf-8');
  fs.writeFileSync(path.join(outDir, '.nojekyll'), '', 'utf-8');
  console.log(`✓ Copied sitemap.xml, robots.txt, and .nojekyll to out/`);
}

console.log(`✓ Generated public/sitemap.xml with ${urls.length} URLs`);
console.log(`✓ Generated public/robots.txt pointing to ${BASE_URL}/sitemap.xml`);
