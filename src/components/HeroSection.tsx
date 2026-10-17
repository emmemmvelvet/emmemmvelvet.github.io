import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden bg-[#101311] text-[#FBF9F5]">
      {/* Background Layer: Real Editorial Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2000&q=85"
          alt="Emm Emm Velvet contemporary woven textiles and furnishings"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          fetchPriority="high"
          loading="eager"
          width={2000}
          height={1333}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0E0D]/90 via-[#0C0E0D]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E0D] via-transparent to-[#0C0E0D]/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <span className="text-xs uppercase tracking-[0.25em] text-[#C29B38] font-mono block mb-4">
            Established 1995 · Panipat
          </span>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-[#FBF9F5]">
            Textiles for modern living.
          </h1>

          {/* Subtitle - Short and punchy */}
          <p className="mt-5 text-base sm:text-lg text-[#D4CDBC]/90 font-light leading-relaxed max-w-lg">
            Sofa fabrics, tailored covers, bedding, and cushions. Manufactured for brands, hospitality, and white-label programs.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#FBF9F5] text-[#0E100E] hover:bg-[#C29B38] font-semibold text-xs uppercase tracking-[0.14em] px-7 py-3.5 rounded-xs transition-colors"
            >
              <span>Explore Collections</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#FBF9F5]/40 hover:border-[#FBF9F5] text-[#FBF9F5] font-medium text-xs uppercase tracking-[0.14em] px-7 py-3.5 rounded-xs backdrop-blur-sm transition-colors"
            >
              <span>Request Swatches</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
