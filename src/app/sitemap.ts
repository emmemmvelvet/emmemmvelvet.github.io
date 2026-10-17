import { MetadataRoute } from 'next';
import { BLOGS_DATA } from '@/data/blogs';
import { CATEGORIES_DATA } from '@/data/categories';
import { SITE_CONFIG } from '@/data/site-config';

export const dynamic = 'force-static';

/** Parse a human-readable date string like "October 8, 2026" into a Date */
function parsePostDate(dateStr: string): Date {
  const parsed = new Date(dateStr);
  return isNaN(parsed.getTime()) ? new Date() : parsed;
}

/** Most-recent post date — used as the blog index lastModified */
const latestPostDate = BLOGS_DATA.reduce<Date>((latest, post) => {
  const d = parsePostDate(post.date);
  return d > latest ? d : latest;
}, new Date(0));

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.siteUrl || 'https://emmemmvelvet.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/manufacturing`,
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: latestPostDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Specific category landing URLs for deep search indexing
  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES_DATA.map((cat) => ({
    url: `${baseUrl}/products?category=${cat.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOGS_DATA.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: parsePostDate(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...categoryRoutes, ...blogRoutes];
}
