# SEO Analysis & Improvements — emmemmvelvet.com

## ✅ What Was Already Good
- `metadataBase` correctly set in root layout
- `canonical` alternates on every page
- `robots.ts` and `sitemap.ts` present
- `robots` metadata with full Googlebot directives
- Twitter Card + OpenGraph on most pages
- `generateStaticParams` for blog posts (SSG)
- `generateMetadata` for dynamic blog pages
- Structured data component (`SeoStructuredData`) with `@graph`
- FAQ schema with relevant Q&As
- `lang="en"` on `<html>` element
- `display: swap` on all Google Fonts
- Single `<h1>` per page (confirmed)
- Google Analytics via `next/script` with `afterInteractive`
- `aria-label` on social icon links

---

## 🔧 Fixes Implemented

### 1. Sitemap — Accurate `lastModified` Dates
**File:** [`sitemap.ts`](file:///Users/uditjuneja/Documents/agy/website/src/app/sitemap.ts)
- **Before:** All entries used `new Date()` (always "today"), giving Google no freshness signal.
- **After:** Blog post entries now use the actual post publication date. Blog index uses the most recent post date. Static pages use pinned dates.

### 2. OpenGraph Title Inconsistency Fixed
**File:** [`layout.tsx`](file:///Users/uditjuneja/Documents/agy/website/src/app/layout.tsx)
- **Before:** Root OG title said "Architectural Textiles & White-Label Furnishings" — different from page title.
- **After:** Consistent "Home Furnishings & White Label Manufacturing (Est. 1995)" across title and OG.
- **Also:** Changed `locale` from `en_US` → `en_IN` (correct locale for an India-based business).

### 3. Preconnect to Image CDN Added
**File:** [`layout.tsx`](file:///Users/uditjuneja/Documents/agy/website/src/app/layout.tsx)
- Added `<link rel="preconnect">` and `<link rel="dns-prefetch">` for `images.unsplash.com`.
- This reduces DNS + TCP handshake time for LCP images loaded from Unsplash.

### 4. Enriched OG Alt Text
**File:** [`layout.tsx`](file:///Users/uditjuneja/Documents/agy/website/src/app/layout.tsx)
- Before: `"Emm Emm Velvet Upholstery and Soft Furnishings"` — generic.
- After: Descriptive alt including products and location.

### 5. Organization → LocalBusiness + Richer Schema
**File:** [`SeoStructuredData.tsx`](file:///Users/uditjuneja/Documents/agy/website/src/components/SeoStructuredData.tsx)
- **Type:** `Organization` → `['Organization', 'LocalBusiness']` — more specific, better for local SEO.
- **Logo:** String URL → proper `ImageObject` with dimensions.
- **Added:** `geo` coordinates (lat/lng for Panipat), `areaServed` countries, `priceRange`, `currenciesAccepted`, `paymentAccepted`.
- **Added:** `hasOfferCatalog` with product offers.
- **Added:** `image` field for the organization.
- **WebSite schema:** Added `description` + `SearchAction` (enables Sitelinks Searchbox eligibility).
- **New FAQ:** Added MOQ question (very common B2B search query).

### 6. Blog Post Pages — BreadcrumbList JSON-LD
**File:** [`blog/[slug]/page.tsx`](file:///Users/uditjuneja/Documents/agy/website/src/app/blog/%5Bslug%5D/page.tsx)
- Added `BreadcrumbList` JSON-LD: `Home → Journal → [Category]`
- Replaced generic "back" link with a semantic `<nav aria-label="Breadcrumb">` HTML element
- This HTML breadcrumb pairs with the JSON-LD for Google rich results (breadcrumb trail in SERPs)

### 7. Blog Post Schema Improvements
**File:** [`blog/[slug]/page.tsx`](file:///Users/uditjuneja/Documents/agy/website/src/app/blog/%5Bslug%5D/page.tsx)
- Added `dateModified` to `BlogPosting` (was only `datePublished`)
- Added `keywords` field (joins post tags)
- Added `isPartOf` Blog entity
- Twitter Card now uses `seoTitle`/`seoDescription` instead of plain title/excerpt

### 8. Blog Metadata — Keywords from Tags
**File:** [`blog/[slug]/page.tsx`](file:///Users/uditjuneja/Documents/agy/website/src/app/blog/%5Bslug%5D/page.tsx)
- Metadata `keywords` now pulled from `post.tags` array per article.

### 9. Products Page — OG Image Added
**File:** [`products/page.tsx`](file:///Users/uditjuneja/Documents/agy/website/src/app/products/page.tsx)
- **Before:** `openGraph` had no `images` — would show no preview when shared on LinkedIn/WhatsApp.
- **After:** OG image added with correct dimensions and descriptive alt.
- Also added `keywords` array.

### 10. Manufacturing Page — Title, Keywords & OG Image
**File:** [`manufacturing/page.tsx`](file:///Users/uditjuneja/Documents/agy/website/src/app/manufacturing/page.tsx)
- Enhanced title: now includes "OEM Soft Furnishings from Panipat" (key B2B search term).
- Added 8 targeted B2B keywords.
- Added OG image.

### 11. About Page — OG Image & Keywords Added
**File:** [`about/page.tsx`](file:///Users/uditjuneja/Documents/agy/website/src/app/about/page.tsx)
- Added OG image (was missing).
- Added brand/history keywords.
- Added `fetchPriority="high"` + explicit dimensions to the hero image.

### 12. LCP Image Optimization
**File:** [`HeroSection.tsx`](file:///Users/uditjuneja/Documents/agy/website/src/components/HeroSection.tsx)
- Added `fetchPriority="high"`, `loading="eager"`, and explicit `width/height` to the hero background image.
- Browsers deprioritize images inside `<div>` containers — this hint forces high priority.

### 13. Contact Page — Heading Hierarchy Fixed
**File:** [`contact/page.tsx`](file:///Users/uditjuneja/Documents/agy/website/src/app/contact/page.tsx)
- **Before:** Address/Email/Phone cards used `<h2>` while page `<h1>` was "Connect With Us".
- **After:** Changed to `<h3>` — correct hierarchy: `h1 → h3`.

### 14. Nav Accessibility
**File:** [`Header.tsx`](file:///Users/uditjuneja/Documents/agy/website/src/components/Header.tsx)
- Added `aria-label="Main navigation"` to the desktop `<nav>` element.

### 15. Global Keywords Expanded
**File:** [`layout.tsx`](file:///Users/uditjuneja/Documents/agy/website/src/app/layout.tsx)
- Added 2 more high-value terms: "Private label soft furnishings", "B2B textile supplier India".

---

## 🚧 Remaining Recommendations (Manual Action Required)

| Issue | Action |
|-------|--------|
| **No self-hosted OG image** | Create a 1200×630 branded image at `/public/images/og-default.jpg` and use it instead of the Unsplash URL (external URLs can be blocked by crawlers) |
| **Logo file missing** | Add `/public/images/emmemm-logo.png` — referenced in JSON-LD but doesn't exist |
| **Google Search Console** | Submit `https://emmemmvelvet.com/sitemap.xml` to GSC to trigger re-crawl |
| **Core Web Vitals** | Consider using `next/image` for all `<img>` tags to get automatic WebP conversion and blur placeholders |
| **Blog image `loading="lazy"`** | Blog post hero images could benefit from `loading="lazy"` except for the above-fold one |
| **Google Analytics 4** | Verify GA4 property `G-6XW3857JM7` is set up in Google Analytics dashboard |
