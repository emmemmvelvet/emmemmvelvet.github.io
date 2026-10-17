import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const OEM_POINTS = [
  {
    num: "01",
    title: "Specification",
    desc: "We work directly to your tech-packs, dimensions, and fabric briefs.",
  },
  {
    num: "02",
    title: "Sampling",
    desc: "Fast lab dips, strike-offs, and pre-production sample approval.",
  },
  {
    num: "03",
    title: "Production",
    desc: "Precision weaving, quilting, and embroidery at scale in Panipat.",
  },
  {
    num: "04",
    title: "Private Packaging",
    desc: "Delivered under your brand with custom woven tags and barcodes.",
  },
];

export default function OemSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#121513] text-[#FBF9F5] border-t border-[#202722]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C29B38] font-mono">
            B2B Services
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FBF9F5] mt-1 leading-tight">
            White Label Manufacturing
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9E988D]">
            We produce custom soft furnishings under your brand label for retail and hospitality programs.
          </p>
        </div>

        {/* 4 Clean Minimal Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 pt-10 border-t border-[#262D27]">
          {OEM_POINTS.map((item) => (
            <div key={item.num} className="bg-[#171B18] border border-[#273028] p-6 rounded-xs">
              <span className="font-mono text-xl text-[#C29B38] block mb-3">
                {item.num}
              </span>
              <h3 className="font-serif text-xl font-normal text-[#FBF9F5]">
                {item.title}
              </h3>
              <p className="text-xs text-[#9E988D] mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Minimal Banner */}
        <div className="mt-12 p-8 bg-[#181D19] border border-[#2B352D] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#FBF9F5]">
              Have a tech-pack or sample brief?
            </h4>
            <p className="text-xs text-[#9E988D] mt-1">
              Contact our team for swatch cards and manufacturing quotations.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C29B38] text-[#0E100E] hover:bg-[#DFCA9B] font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-xs transition-colors shrink-0"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
