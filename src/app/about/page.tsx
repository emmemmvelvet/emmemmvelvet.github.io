import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/site-config';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Emm Emm Velvet | Established 1995, Panipat',
  description:
    'Established in 1995 on Sanoli Road, Panipat. Emm Emm Velvet manufactures contemporary sofa fabrics, sofa covers, bedding, and cushions for brands and trade partners.',
  keywords: [
    'Emm Emm Velvet history',
    'Textile manufacturer since 1995',
    'Panipat textile manufacturer',
    'Soft furnishings manufacturer India',
    'About Emm Emm Velvet',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Emm Emm Velvet | Established 1995',
    description:
      'Home furnishings manufacturer established in 1995 in Panipat, Haryana. Specializing in sofa fabrics, covers, bedding, and cushions.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Emm Emm Velvet — established 1995, Panipat, India',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#FBF9F5] text-[#141715] pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl pb-10 border-b border-[#E5DFD4]">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C29B38] font-mono">
            Established 1995 · Panipat
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#141715] mt-2 leading-tight">
            Thirty years of textile manufacturing in Panipat.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#59564F] leading-relaxed">
            Founded in 1995 on Sanoli Road, Panipat, Emm Emm Velvet produces contemporary soft furnishings and upholstery fabrics for private-label brands and trade partners worldwide.
          </p>
        </div>

        {/* Story Section */}
        <div className="py-16 border-b border-[#E5DFD4]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-xs overflow-hidden shadow-md bg-[#EAE4D8]">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80"
                alt="Emm Emm Velvet textiles and home furnishings"
                className="w-full h-full object-cover"
                fetchPriority="high"
                loading="eager"
                width={1400}
                height={1050}
              />
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#C29B38] font-mono">
                Our Story
              </span>
              <h2 className="font-serif text-3xl text-[#141715]">
                Specialized Craftsmanship & Scale
              </h2>
              <p className="text-sm text-[#59564F] leading-relaxed">
                Since our founding in 1995, Emm Emm Velvet has focused on tactile quality, dense weaves, and durable finishing. What started with specialized velvet and upholstery fabrics has grown into a complete soft-furnishings manufacturing setup.
              </p>
              <p className="text-sm text-[#59564F] leading-relaxed">
                Today, we supply furniture manufacturers, hotel projects, and retail brands across four core areas: sofa fabrics, sofa covers, bedding ensembles, and artisan cushions.
              </p>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#141715] text-[#FBF9F5] hover:bg-[#C29B38] hover:text-[#0E100E] text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-xs transition-colors"
                >
                  <span>Connect With Us</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Key Areas */}
        <div className="py-16">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#141715] mb-8">
            What We Produce
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#E8E2D8] p-6 rounded-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C29B38] font-mono">01</span>
                <h3 className="font-serif text-xl text-[#141715] mt-1">Sofa Fabric</h3>
                <p className="text-xs text-[#59564F] mt-2 font-mono">
                  Chenille · Holland · Mosha
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#E8E2D8] p-6 rounded-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C29B38] font-mono">02</span>
                <h3 className="font-serif text-xl text-[#141715] mt-1">Sofa Cover</h3>
                <p className="text-xs text-[#59564F] mt-2 font-mono">
                  Quilted · Embroidery · Fur · Chenille · Printed
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#E8E2D8] p-6 rounded-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C29B38] font-mono">03</span>
                <h3 className="font-serif text-xl text-[#141715] mt-1">Bedding</h3>
                <p className="text-xs text-[#59564F] mt-2 font-mono">
                  Bed Sheet · Bed Cover · Duet · Comforter
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#E8E2D8] p-6 rounded-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C29B38] font-mono">04</span>
                <h3 className="font-serif text-xl text-[#141715] mt-1">Cushion</h3>
                <p className="text-xs text-[#59564F] mt-2 font-mono">
                  Embroidery · Chenille · Fur · Printed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
