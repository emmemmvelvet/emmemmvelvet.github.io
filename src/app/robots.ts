import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/data/site-config';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.siteUrl || 'https://emmemmvelvet.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/demo-preloader', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/demo-preloader'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/images/', '/*.png$', '/*.jpg$', '/*.webp$', '/*.svg$'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
