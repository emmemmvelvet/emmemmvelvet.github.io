import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOGS_DATA, BlogPost } from '@/data/blogs';
import {
  Clock,
  Calendar,
  User,
  ArrowUpRight,
  Share2,
  CheckCircle2,
  Bookmark,
  Sparkles,
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOGS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOGS_DATA.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found | Emm Emm Velvet Journal',
    };
  }

  return {
    title: `${post.title} | Emm Emm Velvet Journal`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOGS_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts from same or adjacent categories
  const relatedPosts = BLOGS_DATA.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Schema.org BlogPosting JSON-LD
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(', '),
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Emm Emm Velvet',
      logo: {
        '@type': 'ImageObject',
        url: 'https://emmemmvelvet.com/images/emmemm-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://emmemmvelvet.com/blog/${post.slug}`,
    },
    isPartOf: {
      '@type': 'Blog',
      name: 'The Textile & Design Journal',
      url: 'https://emmemmvelvet.com/blog',
    },
  };

  // BreadcrumbList for rich results
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://emmemmvelvet.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Journal',
        item: 'https://emmemmvelvet.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://emmemmvelvet.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <article className="bg-[#FBF9F5] text-[#141715] pt-10 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HTML Breadcrumb — pairs with BreadcrumbList JSON-LD for rich results */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-1.5 text-xs font-mono text-[#7A756D]">
            <li>
              <Link href="/" className="hover:text-[#C29B38] transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-[#B8B2A8]">/</li>
            <li>
              <Link href="/blog" className="hover:text-[#C29B38] transition-colors">Journal</Link>
            </li>
            <li aria-hidden="true" className="text-[#B8B2A8]">/</li>
            <li className="text-[#9A7420] font-semibold truncate max-w-[220px] sm:max-w-none" aria-current="page">
              {post.category}
            </li>
          </ol>
        </nav>

        {/* Article Header Meta */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#7A756D] font-mono">
            <span className="bg-[#141715] text-[#C29B38] px-2.5 py-0.5 rounded-xs uppercase tracking-wider font-semibold">
              {post.category}
            </span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#141715] font-normal leading-[1.12]">
            {post.title}
          </h1>

          <div className="pt-2 flex items-center gap-3 border-t border-[#E5DFD4]">
            <div className="w-9 h-9 rounded-full bg-[#EDE7DA] border border-[#C29B38] flex items-center justify-center text-[#9A7420]">
              <User className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="font-semibold text-[#141715] block">{post.author.name}</span>
              <span className="text-[#7A756D]">{post.author.role}</span>
            </div>
          </div>
        </div>

        {/* Hero Imagery */}
        <div className="my-10 relative aspect-[16/9] rounded-xs overflow-hidden shadow-lg bg-[#EDE7DA]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Editorial Body Content */}
        <div className="prose prose-lg max-w-none text-[#20211F]">
          {/* Lead Text */}
          <p className="font-serif text-xl sm:text-2xl text-[#141715] font-light leading-relaxed border-l-2 border-[#C29B38] pl-5 my-8 italic">
            "{post.content.lead}"
          </p>

          {/* Formatted Sections */}
          <div className="space-y-10 mt-10">
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#141715] font-normal">
                  {section.heading}
                </h2>
                <p className="text-base sm:text-lg text-[#4A4740] leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* Takeaways Alert Box */}
          <div className="my-12 p-8 bg-[#F4EFE6] border-l-4 border-[#C29B38] rounded-xs">
            <h3 className="font-serif text-xl text-[#141715] font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C29B38]" />
              <span>Key Specifier & Weaving Takeaways</span>
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-base text-[#4A4740] list-none p-0">
              {post.content.takeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5 pl-0">
                  <CheckCircle2 className="w-4 h-4 text-[#C29B38] shrink-0 mt-1" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="pt-8 border-t border-[#E5DFD4] flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#7A756D] mr-2">Filed under:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-[#EDE7DA] text-[#59564F] px-3 py-1 rounded-xs font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* B2B Sourcing Callout for this topic */}
        <div className="mt-14 p-8 sm:p-10 bg-[#121513] text-[#FBF9F5] rounded-xs border border-[#262D26] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-2xl text-[#FBF9F5]">
              Request memo swatches for this textile category
            </h4>
            <p className="text-xs sm:text-sm text-[#9E988D] mt-1 max-w-lg">
              Our Panipat facility provides rapid strike-offs and swatches for private-label and contract specifiers.
            </p>
          </div>
          <Link
            href={`/contact?topic=${encodeURIComponent(post.title)}`}
            className="bg-[#C29B38] text-[#0E100E] hover:bg-[#DFCA9B] font-semibold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xs transition-colors shrink-0"
          >
            Request Swatches
          </Link>
        </div>

        {/* Related Articles Grid */}
        <div className="mt-20 pt-14 border-t border-[#E5DFD4]">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#141715] mb-8">
            Further Reading from the Journal
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <div
                key={related.slug}
                className="bg-white border border-[#E8E2D8] p-5 rounded-xs flex flex-col justify-between group hover:border-[#C29B38] transition-all"
              >
                <div>
                  <div className="text-[10px] font-mono text-[#C29B38] uppercase tracking-wider mb-2">
                    {related.category}
                  </div>
                  <h4 className="font-serif text-lg text-[#141715] group-hover:text-[#C29B38] transition-colors leading-snug">
                    <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                  </h4>
                  <p className="text-xs text-[#59564F] mt-2 line-clamp-2">
                    {related.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#ECE7DC]">
                  <Link
                    href={`/blog/${related.slug}`}
                    className="text-xs uppercase tracking-wider text-[#C29B38] font-semibold flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
