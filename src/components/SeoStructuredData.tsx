import React from 'react';
import { SITE_CONFIG } from '@/data/site-config';

export default function SeoStructuredData() {
  const schemaOrganization = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness'],
        '@id': 'https://emmemmvelvet.com/#organization',
        name: SITE_CONFIG.name,
        legalName: SITE_CONFIG.legalName,
        url: 'https://emmemmvelvet.com/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://emmemmvelvet.com/images/emmemm-logo.png',
          width: 200,
          height: 60,
        },
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
        foundingDate: '1995',
        foundingLocation: {
          '@type': 'Place',
          name: 'Panipat, Haryana, India',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Sanoli Road',
            addressLocality: 'Panipat',
            addressRegion: 'Haryana',
            postalCode: '132103',
            addressCountry: 'IN',
          },
        },
        description: SITE_CONFIG.summary,
        telephone: SITE_CONFIG.contact.phoneRaw,
        email: SITE_CONFIG.contact.primaryEmail,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE_CONFIG.address.street,
          addressLocality: SITE_CONFIG.address.city,
          addressRegion: SITE_CONFIG.address.state,
          postalCode: SITE_CONFIG.address.postalCode,
          addressCountry: SITE_CONFIG.address.countryCode,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '29.3909',
          longitude: '76.9635',
        },
        areaServed: [
          { '@type': 'Country', name: 'India' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'United States' },
        ],
        priceRange: '$$',
        currenciesAccepted: 'INR, USD',
        paymentAccepted: 'Bank Transfer, LC',
        sameAs: [
          SITE_CONFIG.socials.instagram,
          SITE_CONFIG.socials.facebook,
          SITE_CONFIG.socials.linkedin,
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'Sales & Contract Sourcing',
            email: SITE_CONFIG.contact.primaryEmail,
            telephone: SITE_CONFIG.contact.phoneRaw,
            availableLanguage: ['English', 'Hindi'],
            contactOption: 'TollFree',
          },
        ],
        knowsAbout: [
          'Sofa Fabric',
          'Chenille Upholstery',
          'Holland Velvet',
          'Mosha Velvet',
          'Sofa Covers',
          'Quilted Furniture Protectors',
          'Embroidered Sofa Covers',
          'Bedding and Sheet Sets',
          'Duvets and Comforters',
          'Artisan Cushion Covers',
          'White Label Manufacturing',
          'Private Label Textiles',
          'Contract Manufacturing India',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Soft Furnishings Catalogue',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Chenille Sofa Fabric' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Holland Velvet Sofa Fabric' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Quilted Sofa Cover' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Embroidered Cushion Cover' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Comforter & Duvet' } },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://emmemmvelvet.com/#website',
        url: 'https://emmemmvelvet.com/',
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.tagline,
        publisher: { '@id': 'https://emmemmvelvet.com/#organization' },
        inLanguage: 'en',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://emmemmvelvet.com/products?search={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Does Emm Emm Velvet do white label and private label manufacturing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. White-label manufacturing is our core specialty. We manufacture custom sofa fabrics, sofa covers, bedding ensembles, and artisan cushions to buyer tech-pack specifications with custom branding, labels, and packaging.',
            },
          },
          {
            '@type': 'Question',
            name: 'What categories of soft furnishings does Emm Emm Velvet manufacture?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Emm Emm Velvet specializes in home furnishings across four categories: 1) Sofa Fabric (Chenille, Holland, Mosha); 2) Sofa Covers (Quilted, Embroidery, Fur, Chenille, Printed); 3) Bedding (Bed Sheets, Bed Covers, Duets, Comforters); and 4) Cushions (Embroidery, Chenille, Fur, Printed).',
            },
          },
          {
            '@type': 'Question',
            name: 'Where is Emm Emm Velvet located and when was it established?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Emm Emm Velvet was established in 1995. The facility is situated on Sanoli Road, Panipat, Haryana - 132103, India.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Emm Emm Velvet a retail store?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, Emm Emm Velvet is a manufacturer serving wholesale buyers, furniture brands, interior designers, and hospitality projects.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the minimum order quantity for white label manufacturing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Minimum order quantities vary by product category and customization level. Please contact us via the inquiry form or WhatsApp (+91 822 190 3070) for a tailored quote.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
    />
  );
}
