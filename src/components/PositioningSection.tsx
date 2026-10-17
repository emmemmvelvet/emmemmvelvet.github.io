import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function PositioningSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#FBF9F5] text-[#141715] border-b border-[#E5DFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C29B38] font-mono font-medium">
              About Emm Emm Velvet
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-[#141715] mt-3">
              Crafted in Panipat. Engineered to scale.
            </h2>
            <p className="mt-4 text-[#59564F] text-base leading-relaxed">
              Manufacturing since 1995. We produce contemporary soft furnishings and upholstery fabrics for private-label brands and trade partners worldwide.
            </p>
            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#141715] hover:text-[#C29B38] border-b-2 border-[#C29B38] pb-0.5 transition-colors"
              >
                <span>Read our story</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Clean Points */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="border-t border-[#E5DFD4] pt-5">
              <span className="font-mono text-xs font-semibold text-[#C29B38]">01</span>
              <h3 className="text-base font-semibold text-[#141715] mt-1.5">
                Tactile Quality
              </h3>
              <p className="text-xs sm:text-sm text-[#59564F] mt-1.5 leading-relaxed">
                Refined textures across chenille, Holland, and Mosha weaves with durable handfeel.
              </p>
            </div>

            <div className="border-t border-[#E5DFD4] pt-5">
              <span className="font-mono text-xs font-semibold text-[#C29B38]">02</span>
              <h3 className="text-base font-semibold text-[#141715] mt-1.5">
                White Label
              </h3>
              <p className="text-xs sm:text-sm text-[#59564F] mt-1.5 leading-relaxed">
                Full private label programs with custom sizing, branding, labels, and packaging.
              </p>
            </div>

            <div className="border-t border-[#E5DFD4] pt-5">
              <span className="font-mono text-xs font-semibold text-[#C29B38]">03</span>
              <h3 className="text-base font-semibold text-[#141715] mt-1.5">
                Since 1995
              </h3>
              <p className="text-xs sm:text-sm text-[#59564F] mt-1.5 leading-relaxed">
                Three decades of dependable manufacturing experience in Panipat, India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
