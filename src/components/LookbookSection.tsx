'use client';

import React from 'react';
import Link from 'next/link';
import { CATEGORIES_DATA } from '@/data/categories';
import { ArrowUpRight } from 'lucide-react';

export default function LookbookSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F4EFE6] text-[#141715]" id="collections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#D8D0C2]">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C29B38] font-mono font-medium">
              Home Furnishings
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141715] mt-1">
              The Collection
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#141715] hover:text-[#C29B38] border-b border-[#141715] hover:border-[#C29B38] pb-1 transition-colors self-start md:self-auto"
          >
            <span>View All Range</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Category Cards - Clean Visuals, Minimal Text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {CATEGORIES_DATA.map((cat, idx) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.id}`}
              className="group relative overflow-hidden bg-[#171A18] rounded-xs shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end min-h-[380px]"
            >
              <img
                src={cat.heroImage}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0E100E] via-[#0E100E]/50 to-transparent group-hover:via-[#0E100E]/65 transition-colors" />

              <div className="relative z-10 p-6 text-[#FBF9F5]">
                <span className="text-[10px] uppercase tracking-widest text-[#C29B38] font-mono">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#FBF9F5] mt-1">
                  {cat.title}
                </h3>

                {/* Subcategory Pills */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cat.subCategories.map((sub) => (
                    <span
                      key={sub}
                      className="text-[10px] uppercase tracking-wider bg-[#222822]/90 border border-[#3A423A] text-[#E8E2D8] px-2 py-0.5 rounded-xs font-mono"
                    >
                      {sub}
                    </span>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-[#333A33] flex items-center justify-between text-xs uppercase tracking-wider text-[#C29B38] font-semibold group-hover:text-[#DFCA9B]">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
