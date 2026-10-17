'use client';

import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/site-config';
import {
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  ChevronDown,
} from 'lucide-react';

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0E100E] text-[#FBF9F5] border-t border-[#1C201C] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Callout (Kirkby Studio Inspired) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-12 border-b border-[#202420] items-center">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C29B38] font-mono">
              B2B Inquiries & Sourcing
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5] font-normal mt-1 leading-snug">
              Manufacturing soft furnishings for global and domestic partners.
            </h3>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-[#C29B38] text-[#0E100E] hover:bg-[#DFCA9B] font-semibold text-xs uppercase tracking-widest px-5 py-3 rounded-xs transition-colors"
            >
              <span>Request Swatches</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Desktop Navigation Columns (Kirkby Studio Architectural Grid) */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 py-14 border-b border-[#202420]">
          {/* Column 1: Products */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C29B38] mb-4 font-mono">
              Products
            </h4>
            <ul className="space-y-2 text-xs text-[#A6A095]">
              <li>
                <Link href="/products?category=sofa-fabric" className="hover:text-[#FBF9F5] transition-colors">
                  Sofa Fabric (Chenille, Holland, Mosha)
                </Link>
              </li>
              <li>
                <Link href="/products?category=sofa-cover" className="hover:text-[#FBF9F5] transition-colors">
                  Sofa Cover (Quilted, Fur, Chenille)
                </Link>
              </li>
              <li>
                <Link href="/products?category=bedding" className="hover:text-[#FBF9F5] transition-colors">
                  Bedding (Sheets, Covers, Duets)
                </Link>
              </li>
              <li>
                <Link href="/products?category=cushions" className="hover:text-[#FBF9F5] transition-colors">
                  Cushions (Embroidery, Fur, Printed)
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#FBF9F5] transition-colors">
                  All Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Manufacturing */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C29B38] mb-4 font-mono">
              Manufacturing
            </h4>
            <ul className="space-y-2 text-xs text-[#A6A095]">
              <li>
                <Link href="/manufacturing" className="hover:text-[#FBF9F5] transition-colors">
                  White Label Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="hover:text-[#FBF9F5] transition-colors">
                  Custom Tech-Packs
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="hover:text-[#FBF9F5] transition-colors">
                  Private Brand Packaging
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FBF9F5] transition-colors">
                  Sample Requests
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C29B38] mb-4 font-mono">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-[#A6A095]">
              <li>
                <Link href="/about" className="hover:text-[#FBF9F5] transition-colors">
                  About Emm Emm Velvet
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#FBF9F5] transition-colors">
                  Journal & Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FBF9F5] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Location */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C29B38] mb-4 font-mono">
              Location
            </h4>
            <div className="text-xs text-[#A6A095] space-y-2">
              <p className="text-[#FBF9F5]">Emm Emm Velvet</p>
              <p>{SITE_CONFIG.location}</p>
              <p>Email: {SITE_CONFIG.contact.primaryEmail}</p>
              <p>Phone: {SITE_CONFIG.contact.phone}</p>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Navigation (Exact Kirkby Studio Style) */}
        <div className="md:hidden divide-y divide-[#202420] py-4 border-b border-[#202420]">
          <details className="group py-3">
            <summary className="flex items-center justify-between text-xs uppercase tracking-wider text-[#C29B38] font-mono cursor-pointer list-none">
              <span>Products</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform group-open:rotate-180" />
            </summary>
            <div className="mt-2.5 pl-2 flex flex-col space-y-1.5 text-xs text-[#A6A095]">
              <Link href="/products?category=sofa-fabric">Sofa Fabric</Link>
              <Link href="/products?category=sofa-cover">Sofa Cover</Link>
              <Link href="/products?category=bedding">Bedding</Link>
              <Link href="/products?category=cushions">Cushions</Link>
            </div>
          </details>

          <details className="group py-3">
            <summary className="flex items-center justify-between text-xs uppercase tracking-wider text-[#C29B38] font-mono cursor-pointer list-none">
              <span>Manufacturing</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform group-open:rotate-180" />
            </summary>
            <div className="mt-2.5 pl-2 flex flex-col space-y-1.5 text-xs text-[#A6A095]">
              <Link href="/manufacturing">White Label Overview</Link>
              <Link href="/contact">Request Swatches</Link>
            </div>
          </details>

          <details className="group py-3">
            <summary className="flex items-center justify-between text-xs uppercase tracking-wider text-[#C29B38] font-mono cursor-pointer list-none">
              <span>Company</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform group-open:rotate-180" />
            </summary>
            <div className="mt-2.5 pl-2 flex flex-col space-y-1.5 text-xs text-[#A6A095]">
              <Link href="/about">About Us (Est. 1995)</Link>
              <Link href="/blog">Journal</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </details>
        </div>

        {/* Social Icons & Contact Bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#202420]">
          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-[#2D332E] hover:border-[#C29B38] hover:text-[#C29B38] flex items-center justify-center transition-colors text-[#D4CDBC]"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={SITE_CONFIG.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full border border-[#2D332E] hover:border-[#C29B38] hover:text-[#C29B38] flex items-center justify-center transition-colors text-[#D4CDBC]"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={SITE_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-[#2D332E] hover:border-[#C29B38] hover:text-[#C29B38] flex items-center justify-center transition-colors text-[#D4CDBC]"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#8F8A7F]">
            <a href={`mailto:${SITE_CONFIG.contact.primaryEmail}`} className="hover:text-[#C29B38]">
              {SITE_CONFIG.contact.primaryEmail}
            </a>
            <span>·</span>
            <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} className="hover:text-[#C29B38]">
              {SITE_CONFIG.contact.phone}
            </a>
          </div>
        </div>

        {/* Kirkby Studio Signature Giant Architectural Wordmark */}
        <div className="py-10 overflow-hidden flex justify-center items-center">
          <div className="giant-wordmark tracking-tighter text-center">
            EMM EMM VELVET
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-[#1C201C] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#6E695F]">
          <p>© 1995–2026 Emm Emm Velvet. Panipat, Haryana. All rights reserved.</p>
          <p>White Label Manufacturing · B2B Only</p>
        </div>
      </div>
    </footer>
  );
}
