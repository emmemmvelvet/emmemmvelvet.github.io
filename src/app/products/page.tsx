import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import ProductsClientView from './ProductsClientView';

export const metadata: Metadata = {
  title: 'Textile Collections & Specifications | Sofa Fabrics, Bedding, Covers & Cushions',
  description:
    'Explore Emm Emm Velvet’s contract soft furnishings catalogue: Chenille, Holland & Mosha sofa fabrics, quilted & embroidered sofa covers, hospitality bedding, and artisan cushions. Direct Panipat manufacturing.',
  keywords: [
    'Chenille sofa fabric',
    'Holland velvet fabric',
    'Mosha velvet sofa fabric',
    'Quilted sofa cover manufacturer',
    'Embroidered sofa cover India',
    'Bedding manufacturer India',
    'Artisan cushion cover',
    'Soft furnishings wholesale',
    'Contract upholstery fabric India',
  ],
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Textile Collections & Specifications | Emm Emm Velvet',
    description:
      'Contract and white-label textile collections: Sofa Fabrics, Quilted Sofa Covers, Bedding Ensembles, and Artisan Cushions from Panipat, India.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Emm Emm Velvet — Sofa fabrics, covers, bedding and cushion collections',
      },
    ],
  },
};

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FBF9F5] flex items-center justify-center p-8 text-center text-xs uppercase tracking-widest font-mono text-[#7A756D]">
          Loading Textile Range...
        </div>
      }
    >
      <ProductsClientView />
    </Suspense>
  );
}
