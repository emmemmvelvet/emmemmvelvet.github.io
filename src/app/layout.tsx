import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoStructuredData from "@/components/SeoStructuredData";
import { SITE_CONFIG } from "@/data/site-config";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0E100E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://emmemmvelvet.com"),
  title: {
    default: "Emm Emm Velvet | Home Furnishings & White Label Manufacturing (Est. 1995)",
    template: "%s | Emm Emm Velvet",
  },
  description:
    "Emm Emm Velvet is a manufacturer on Sanoli Road, Panipat. Specializing in sofa fabrics, tailored sofa covers, bedding, and cushions for brands and white-label partners.",
  keywords: [
    "Emm Emm Velvet",
    "Textile manufacturer Panipat",
    "Sofa fabric manufacturer India",
    "Holland velvet supplier",
    "Chenille upholstery fabric",
    "Mosha velvet fabric",
    "Quilted sofa covers manufacturer",
    "Embroidered sofa cover",
    "Bedding manufacturer Panipat",
    "Duvet comforter manufacturer",
    "Artisan cushion supplier",
    "White label textile manufacturer",
    "Contract textiles India",
    "OEM home furnishings",
    "Private label soft furnishings",
    "B2B textile supplier India",
    "Multi Needle Sofa Cover",
    "Chenille Sofa Cover",
    "Panipat Sofa Cover",
  ],
  authors: [{ name: "Emm Emm Velvet", url: "https://emmemmvelvet.com" }],
  creator: "Emm Emm Velvet",
  publisher: "Emm Emm Velvet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://emmemmvelvet.com/",
    siteName: "Emm Emm Velvet",
    title: "Emm Emm Velvet | Home Furnishings & White Label Manufacturing (Est. 1995)",
    description:
      "Contract textile manufacturer established 1995 in Panipat, India. Woven sofa fabrics, quilted covers, bedding ensembles, and artisan cushions for global brands and trade.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Emm Emm Velvet — Sofa fabrics, covers, bedding and cushions manufactured in Panipat, India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emm Emm Velvet | Contract Textile Manufacturer (Est. 1995)",
    description:
      "Indian textile manufacturer specializing in sofa fabrics, quilted sofa covers, bedding, and cushions for white-label and contract specifiers.",
    images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        {/* Preconnect to external image CDN for faster LCP */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <SeoStructuredData />
      </head>
      <body className="font-body min-h-screen flex flex-col bg-[#FBF9F5] text-[#151715] selection:bg-[#C29B38] selection:text-[#FBF9F5]">
        {SITE_CONFIG.googleAnalyticsId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.googleAnalyticsId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
            >
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${SITE_CONFIG.googleAnalyticsId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
