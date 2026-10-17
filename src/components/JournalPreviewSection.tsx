import React from 'react';
import Link from 'next/link';
import { BLOGS_DATA } from '@/data/blogs';
import { ArrowUpRight, Clock, BookOpen } from 'lucide-react';

export default function JournalPreviewSection() {
  const featuredArticles = BLOGS_DATA.slice(0, 3);

  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5] text-[#141715] border-t border-[#E5DFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5DFD4]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C29B38] font-mono">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Editorial Journal</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-[#141715] mt-2">
              Textile & Design Perspectives
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#59564F] max-w-xl">
              Insights on yarn construction, upholstery performance, and contemporary furnishings.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#141715] hover:text-[#C29B38] border-b-2 border-[#C29B38] pb-1 transition-colors self-start md:self-auto"
          >
            <span>View All 12 Editorial Articles</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {featuredArticles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col justify-between bg-white border border-[#E8E2D8] rounded-xs overflow-hidden hover:border-[#C29B38] transition-all hover:shadow-lg"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E2DCCF]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0E100E]/85 text-[#C29B38] text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-xs">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#7A756D] font-mono mb-3">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#141715] group-hover:text-[#C29B38] transition-colors leading-snug">
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#59564F] mt-3 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#C29B38] group-hover:text-[#A88328] transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
