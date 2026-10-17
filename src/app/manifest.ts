import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/data/site-config';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_CONFIG.name} — Home Furnishings & Manufacturing`,
    short_name: SITE_CONFIG.name,
    description: SITE_CONFIG.tagline,
    start_url: '/',
    display: 'standalone',
    background_color: '#FBF9F5',
    theme_color: '#0E100E',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
