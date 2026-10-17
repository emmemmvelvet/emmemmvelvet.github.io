'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/data/site-config';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Sleek Minimal Announcement Bar */}
      <div className="bg-[#111311] text-[#FBF9F5] border-b border-[#202420] text-[11px] py-2 px-4 tracking-wider uppercase">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#D4CDBC]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C29B38]"></span>
            <span>Established <strong>1995</strong> · Panipat, India · White Label Manufacturing</span>
          </div>
          <div className="flex items-center gap-4 text-[#D4CDBC]">
            <a
              href={SITE_CONFIG.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C29B38] hover:text-[#DFCA9B] font-medium transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Masthead */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-nav shadow-sm border-b border-[#E5DFD4]' : 'bg-[#FBF9F5] border-b border-[#EAE4D8]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Wordmark */}
            <Link href="/" className="group flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl tracking-tight text-[#141715] font-normal group-hover:text-[#C29B38] transition-colors">
                EMM EMM VELVET
              </span>
              <span className="text-[9.5px] uppercase tracking-[0.25em] text-[#706B62] font-mono -mt-0.5">
                Est. 1995 · Panipat
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Main navigation" className="hidden lg:flex items-center space-x-8 text-[13.5px] font-medium tracking-wide">
              {SITE_CONFIG.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-1 transition-colors ${
                      isActive
                        ? 'text-[#C29B38] font-semibold'
                        : 'text-[#20211F] hover:text-[#C29B38]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="ml-1.5 text-[9px] uppercase tracking-wider bg-[#111311] text-[#C29B38] px-1.5 py-0.5 rounded-xs font-mono">
                        {link.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C29B38]"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#141715] text-[#FBF9F5] hover:bg-[#C29B38] hover:text-[#111311] text-xs uppercase tracking-[0.14em] font-medium px-5 py-2.5 rounded-xs transition-all duration-200"
              >
                <span>Request Swatches</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#141715] hover:text-[#C29B38] focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#FBF9F5] border-t border-[#E5DFD4] shadow-xl px-5 pt-4 pb-8 space-y-3">
            <div className="flex flex-col space-y-2">
              {SITE_CONFIG.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between py-2.5 text-base border-b border-[#ECE7DC] ${
                      isActive ? 'text-[#C29B38] font-semibold' : 'text-[#20211F]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge ? (
                      <span className="text-[10px] bg-[#111311] text-[#C29B38] px-2 py-0.5 rounded font-mono">
                        {link.badge}
                      </span>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-[#999285]" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/contact"
                className="w-full text-center bg-[#141715] text-[#FBF9F5] text-xs uppercase tracking-widest font-semibold py-3.5 rounded-xs"
              >
                Request Swatches
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
