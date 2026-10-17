'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/data/site-config';
import { Send, CheckCircle2, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';

export default function EnquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: 'sofa-fabric',
    service: 'white-label',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate instantaneous B2B lead capture
    setSubmitted(true);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#0C0E0C] text-[#FBF9F5] border-t border-[#1C201C]" id="enquiry">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C29B38] font-mono font-medium">
              B2B Trade Inquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.12] text-[#FBF9F5] mt-3">
              Request trade swatches, spec sheets & catalogues.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#9E988D] leading-relaxed">
              We manufacture soft furnishings for furniture brands, retailers, and hospitality projects. B2B only.
            </p>

            <div className="mt-10 space-y-5 text-sm text-[#D4CDBC] border-t border-[#202620] pt-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C29B38] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#FBF9F5] font-sans">Panipat Facility</strong>
                  <span className="text-xs text-[#8F8A7F]">{SITE_CONFIG.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C29B38] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#FBF9F5] font-sans">Direct Inquiries</strong>
                  <span className="text-xs text-[#8F8A7F]">
                    {SITE_CONFIG.contact.primaryEmail} / {SITE_CONFIG.contact.secondaryEmail}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C29B38] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#FBF9F5] font-sans">Telephone & WhatsApp Direct</strong>
                  <span className="text-xs text-[#8F8A7F]">{SITE_CONFIG.contact.phone}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#202620]">
              <a
                href={SITE_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#17241C] border border-[#2D4536] hover:border-[#C29B38] text-[#DFCA9B] hover:text-[#FBF9F5] text-xs uppercase tracking-widest font-mono px-5 py-3 rounded-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#C29B38]" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form (Abhi Home Architecture) */}
          <div className="lg:col-span-7 bg-[#151815] border border-[#262D26] p-8 sm:p-10 rounded-xs shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#1A2E22] border border-[#C29B38] flex items-center justify-center mx-auto text-[#C29B38]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#FBF9F5]">Inquiry Received</h3>
                <p className="text-sm text-[#9E988D] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our contract textile division has received your swatch and specification request for <strong>{formData.company || 'your brand'}</strong>. We will respond within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs uppercase tracking-widest text-[#C29B38] hover:underline font-mono"
                >
                  ← Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A6A095] font-mono mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Wright"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0E100E] border border-[#2E362F] focus:border-[#C29B38] text-[#FBF9F5] text-sm px-4 py-3 rounded-xs focus:outline-none placeholder-[#5A574F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A6A095] font-mono mb-2">
                      Company / Brand Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Studio Nordic / Casa Design"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#0E100E] border border-[#2E362F] focus:border-[#C29B38] text-[#FBF9F5] text-sm px-4 py-3 rounded-xs focus:outline-none placeholder-[#5A574F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A6A095] font-mono mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alexander@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0E100E] border border-[#2E362F] focus:border-[#C29B38] text-[#FBF9F5] text-sm px-4 py-3 rounded-xs focus:outline-none placeholder-[#5A574F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A6A095] font-mono mb-2">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0E100E] border border-[#2E362F] focus:border-[#C29B38] text-[#FBF9F5] text-sm px-4 py-3 rounded-xs focus:outline-none placeholder-[#5A574F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A6A095] font-mono mb-2">
                      Product Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-[#0E100E] border border-[#2E362F] focus:border-[#C29B38] text-[#FBF9F5] text-sm px-4 py-3 rounded-xs focus:outline-none"
                    >
                      <option value="sofa-fabric">Sofa Fabric (Chenille, Holland, Mosha)</option>
                      <option value="sofa-cover">Sofa Cover (Quilted, Embroidery, Fur, Chenille, Printed)</option>
                      <option value="bedding">Bedding (Bed Sheets, Bed Cover, Duet, Comforter)</option>
                      <option value="cushions">Cushions (Embroidery, Chenille, Fur, Printed)</option>
                      <option value="all">Complete Range</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A6A095] font-mono mb-2">
                      Requirement Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#0E100E] border border-[#2E362F] focus:border-[#C29B38] text-[#FBF9F5] text-sm px-4 py-3 rounded-xs focus:outline-none"
                    >
                      <option value="white-label">White-Label / Private Label OEM</option>
                      <option value="roll-goods">Woven Roll Goods Supply</option>
                      <option value="hospitality">Hospitality Specification</option>
                      <option value="custom">Custom Development</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A6A095] font-mono mb-2">
                    Project Brief or Target Specs
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details on target fabrics, dimensions, order quantities, or private label requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0E100E] border border-[#2E362F] focus:border-[#C29B38] text-[#FBF9F5] text-sm px-4 py-3 rounded-xs focus:outline-none placeholder-[#5A574F]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C29B38] text-[#0E100E] hover:bg-[#DFCA9B] font-semibold text-xs uppercase tracking-[0.18em] py-3.5 rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-[#706B62] text-center">
                  B2B Trade Guarantee: We respect your brand confidentiality. Custom weaves and tech-packs remain protected.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
