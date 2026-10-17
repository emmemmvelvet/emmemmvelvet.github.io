export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export const SITE_CONFIG = {
  name: "Emm Emm Velvet",
  legalName: "Emm Emm Velvet",
  siteUrl: "https://emmemmvelvet.com",
  tagline: "Contemporary Home Furnishings & White Label Manufacturing",
  established: 1995,
  googleAnalyticsId: "G-6XW3857JM7",
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  location: "Sanoli Road, Panipat, Haryana - 132103, India",
  address: {
    street: "Sanoli Road",
    city: "Panipat",
    state: "Haryana",
    postalCode: "132103",
    country: "India",
    countryCode: "IN",
  },
  contact: {
    primaryEmail: "info@emmemmvelvet.com",
    secondaryEmail: "hello@emmemmvelvet.com",
    phone: "(+91) 822 190 3070",
    phoneRaw: "+918221903070",
    whatsapp: "+918221903070",
    whatsappLink: "https://wa.me/918221903070?text=Hello%20Emm%20Emm%20Velvet%2C%20I%20would%20like%20to%20enquire%20about%20manufacturing%20and%20catalogues.",
  },
  socials: {
    instagram: "https://www.instagram.com/emmemmvelvet/",
    facebook: "https://www.facebook.com/people/Emm-Emm-Velvet/61584658212943/",
    linkedin: "https://www.linkedin.com/company/emmemmvelvet",
  },
  summary:
    "Emm Emm Velvet is a premier manufacturer established in 1995 in Panipat, India. We produce sofa fabrics, sofa covers, bedding, and cushions for brands, hotels, and white-label partners.",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/products" },
    { label: "Manufacturing", href: "/manufacturing" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ] as NavLink[],
};
