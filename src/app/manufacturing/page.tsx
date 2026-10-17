import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { OEM_PROCESS_STEPS, CONTRACT_SECTORS } from '@/data/oem-capabilities';
import { SITE_CONFIG } from '@/data/site-config';
import {
  ArrowUpRight,
  CheckCircle2,
  Package,
  Layers,
  Scissors,
  Truck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'White Label Manufacturing | OEM Soft Furnishings from Panipat | Emm Emm Velvet',
  description:
    'Turnkey private label and contract manufacturing. Custom fabrics, tech-pack execution, quilting, embroidery, and private packaging from Panipat, India.',
  keywords: [
    'White label textile manufacturing India',
    'Private label soft furnishings',
    'OEM sofa fabric manufacturer',
    'Contract manufacturing Panipat',
    'Custom sofa cover manufacturer',
    'Tech-pack textile execution',
    'B2B soft furnishings India',
    'Quilting embroidery manufacturer India',
  ],
  alternates: {
    canonical: '/manufacturing',
  },
  openGraph: {
    title: 'White Label Soft Furnishings Manufacturing | Emm Emm Velvet',
    description:
      'Contract manufacturing for retail brands and hospitality specifiers. Woven sofa fabrics, quilted covers, bedding, and cushions.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Emm Emm Velvet white label manufacturing facility in Panipat, India',
      },
    ],
  },
};

export default function ManufacturingPage() {
  return (
    <div className="bg-[#FBF9F5] text-[#141715] pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="max-w-3xl pb-10 border-b border-[#E5DFD4]">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C29B38] font-mono">
            B2B Private Label Partner
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#141715] mt-2 leading-tight">
            White label manufacturing engineered for your brand.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#59564F] leading-relaxed">
            We manufacture custom fabrics, quilted covers, bedding sets, and embroidered cushions for brands, hospitality groups, and retailers under their exclusive label.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#141715] text-[#FBF9F5] hover:bg-[#C29B38] hover:text-[#0E100E] text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-xs transition-colors"
            >
              <span>Submit Tech-Pack Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={SITE_CONFIG.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#C29B38] text-[#9A7420] hover:bg-[#C29B38] hover:text-[#0E100E] text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-xs transition-colors"
            >
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="py-16 border-b border-[#E5DFD4]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#E8E2D8] p-6 rounded-xs">
              <div className="w-9 h-9 rounded-full bg-[#EDE7DA] text-[#C29B38] flex items-center justify-center mb-3">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg font-normal text-[#141715]">
                Custom Weaves
              </h3>
              <p className="text-xs text-[#59564F] mt-1.5 leading-relaxed">
                Warp density, weft composition, and pile height tailored to your performance and price requirements.
              </p>
            </div>

            <div className="bg-white border border-[#E8E2D8] p-6 rounded-xs">
              <div className="w-9 h-9 rounded-full bg-[#EDE7DA] text-[#C29B38] flex items-center justify-center mb-3">
                <Scissors className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg font-normal text-[#141715]">
                Cut & Sew
              </h3>
              <p className="text-xs text-[#59564F] mt-1.5 leading-relaxed">
                Computerized multi-needle quilting, multi-head embroidery, and custom dimensions.
              </p>
            </div>

            <div className="bg-white border border-[#E8E2D8] p-6 rounded-xs">
              <div className="w-9 h-9 rounded-full bg-[#EDE7DA] text-[#C29B38] flex items-center justify-center mb-3">
                <Package className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg font-normal text-[#141715]">
                Private Labeling
              </h3>
              <p className="text-xs text-[#59564F] mt-1.5 leading-relaxed">
                Custom brand labels, care tags, barcodes, and retail presentation packaging.
              </p>
            </div>

            <div className="bg-white border border-[#E8E2D8] p-6 rounded-xs">
              <div className="w-9 h-9 rounded-full bg-[#EDE7DA] text-[#C29B38] flex items-center justify-center mb-3">
                <Truck className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg font-normal text-[#141715]">
                Direct Dispatch
              </h3>
              <p className="text-xs text-[#59564F] mt-1.5 leading-relaxed">
                Dispatched from Panipat with sea export gateways (Mundra / Nhava Sheva) and Pan-India logistics.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Process Steps */}
        <div className="py-16 border-b border-[#E5DFD4]">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#141715] mb-10">
            Manufacturing Workflow
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OEM_PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-white border border-[#E8E2D8] p-6 rounded-xs"
              >
                <span className="font-mono text-xl text-[#C29B38] block mb-2">
                  {step.number}
                </span>
                <h3 className="font-serif text-xl text-[#141715]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#59564F] mt-2 leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-4 pt-3 border-t border-[#ECE7DC] space-y-1.5">
                  {step.details.slice(0, 2).map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#141715]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C29B38] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sectors */}
        <div className="py-16">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#141715] mb-8">
            Sectors We Serve
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTRACT_SECTORS.map((sector) => (
              <div
                key={sector.title}
                className="bg-white border border-[#E8E2D8] p-5 rounded-xs flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block bg-[#EDE7DA] text-[#9A7420] text-[9.5px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-xs font-semibold mb-2">
                    {sector.badge}
                  </span>
                  <h3 className="font-serif text-lg font-normal text-[#141715]">
                    {sector.title}
                  </h3>
                  <p className="text-xs text-[#59564F] mt-1.5 leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#ECE7DC]">
                  <Link
                    href={`/contact?sector=${encodeURIComponent(sector.title)}`}
                    className="text-xs uppercase tracking-wider text-[#C29B38] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
