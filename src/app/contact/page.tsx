import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/data/site-config';
import EnquirySection from '@/components/EnquirySection';
import { MapPin, Mail, Phone, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | Emm Emm Velvet, Panipat',
  description:
    'Contact Emm Emm Velvet on Sanoli Road, Panipat. Request trade swatches, submit tech-pack briefs, or inquire about white-label manufacturing. WhatsApp (+91) 822 190 3070.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Emm Emm Velvet | Panipat, Haryana',
    description:
      'Sample swatch requests and white-label manufacturing inquiries. Sanoli Road, Panipat, Haryana - 132103.',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#FBF9F5] text-[#141715] pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl pb-10 border-b border-[#E5DFD4]">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C29B38] font-mono">
            Panipat, India
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#141715] mt-2 leading-tight">
            Connect With Us
          </h1>
          <p className="mt-4 text-base text-[#59564F] leading-relaxed">
            For swatch requests, sample development, and white-label manufacturing inquiries, contact our team in Panipat.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-[#E5DFD4]">
          <div className="bg-white border border-[#E8E2D8] p-6 rounded-xs">
            <div className="w-9 h-9 rounded-full bg-[#EDE7DA] text-[#C29B38] flex items-center justify-center mb-3">
              <MapPin className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg font-normal text-[#141715]">
              Address
            </h3>
            <p className="text-xs text-[#59564F] mt-2 leading-relaxed">
              {SITE_CONFIG.address.street},<br />
              {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} - {SITE_CONFIG.address.postalCode}, India
            </p>
          </div>

          <div className="bg-white border border-[#E8E2D8] p-6 rounded-xs">
            <div className="w-9 h-9 rounded-full bg-[#EDE7DA] text-[#C29B38] flex items-center justify-center mb-3">
              <Mail className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg font-normal text-[#141715]">
              Email
            </h3>
            <div className="mt-2 space-y-1 text-xs text-[#59564F]">
              <p>
                <a
                  href={`mailto:${SITE_CONFIG.contact.primaryEmail}`}
                  className="text-[#9A7420] font-semibold hover:underline"
                >
                  {SITE_CONFIG.contact.primaryEmail}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SITE_CONFIG.contact.secondaryEmail}`}
                  className="text-[#9A7420] font-semibold hover:underline"
                >
                  {SITE_CONFIG.contact.secondaryEmail}
                </a>
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#E8E2D8] p-6 rounded-xs">
            <div className="w-9 h-9 rounded-full bg-[#EDE7DA] text-[#C29B38] flex items-center justify-center mb-3">
              <Phone className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg font-normal text-[#141715]">
              Phone & WhatsApp
            </h3>
            <p className="text-xs text-[#59564F] mt-2 leading-relaxed">
              {SITE_CONFIG.contact.phone}
            </p>
            <div className="mt-3">
              <a
                href={SITE_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs uppercase font-mono font-semibold text-[#9A7420] hover:underline"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp →</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Swatch Request Form */}
      <EnquirySection />
    </div>
  );
}
