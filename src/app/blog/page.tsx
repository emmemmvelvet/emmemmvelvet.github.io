import React from 'react';
import type { Metadata } from 'next';
import BlogClientView from './BlogClientView';

export const metadata: Metadata = {
  title: 'The Textile & Design Journal | Emm Emm Velvet Panipat',
  description:
    'Read 12 textile design and engineering articles from Emm Emm Velvet. In-depth guides on chenille weaving, Holland vs Mosha velvet, contract Martindale specs, and bedding design.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'The Textile & Design Journal | Emm Emm Velvet',
    description:
      'Editorial articles on weaving, upholstery, and soft furnishings design.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Emm Emm Velvet Journal',
      },
    ],
  },
};

export default function BlogPage() {
  return <BlogClientView />;
}
