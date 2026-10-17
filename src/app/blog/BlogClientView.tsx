'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BLOGS_DATA, BlogPost } from '@/data/blogs';
import { ArrowUpRight, Search, Clock, BookOpen, Tag } from 'lucide-react';

export default function BlogClientView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract unique categories
  const categories = ['all', ...Array.from(new Set(BLOGS_DATA.map((b) => b.category)))];

  // Filtered blogs
  const filteredBlogs = BLOGS_DATA.filter((post) => {
    const matchesCategory =
      selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOGS_DATA[0];

  return (
    <div className="bg-[#FBF9F5] min-h-screen text-[#141715] pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl pb-10 border-b border-[#E5DFD4]">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C29B38] font-mono">
            Journal & Editorial
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#141715] mt-2 leading-tight">
            Textile & Interior Journal
          </h1>
          <p className="mt-4 text-base text-[#59564F] leading-relaxed">
            Perspectives on fabrics, tactile weaves, and contemporary interior design from our Panipat studio.
          </p>
        </div>

        {/* Featured Editorial Cover Story */}
        {selectedCategory === 'all' && searchQuery.trim() === '' && (
          <div className="py-12 border-b border-[#E5DFD4]">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#C29B38] bg-[#0E100E] text-[#FBF9F5] px-3 py-1 rounded-xs inline-block mb-4">
              Cover Story · Feature
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#E8E2D8] rounded-xs overflow-hidden group hover:border-[#C29B38] transition-all hover:shadow-xl">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:h-[460px] overflow-hidden bg-[#EDE7DA]">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#7A756D] font-mono mb-3">
                    <span className="text-[#C29B38] font-semibold">{featuredPost.category}</span>
                    <span>·</span>
                    <span>{featuredPost.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#141715] group-hover:text-[#C29B38] transition-colors leading-tight font-normal">
                    <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h2>

                  <p className="text-sm text-[#59564F] mt-4 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs text-[#7A756D] font-mono">
                    <span>By {featuredPost.author.name}</span>
                    <span>·</span>
                    <span className="text-[#9E988D]">{featuredPost.author.role}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#ECE7DC]">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 bg-[#141715] text-[#FBF9F5] hover:bg-[#C29B38] hover:text-[#0E100E] text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-xs transition-colors"
                  >
                    <span>Read Complete Editorial</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="py-8 border-b border-[#E5DFD4] flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs uppercase tracking-wider font-mono px-3.5 py-1.5 rounded-xs transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#141715] text-[#FBF9F5]'
                    : 'bg-[#EDE7DA] text-[#59564F] hover:bg-[#DDD5C4]'
                }`}
              >
                {cat === 'all' ? 'All Articles (12)' : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search topics, yarns, specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#EDE7DA] border border-[#DDD5C4] focus:border-[#C29B38] text-xs px-3.5 py-2 pl-9 rounded-xs focus:outline-none placeholder-[#7A756D]"
            />
            <Search className="w-4 h-4 text-[#7A756D] absolute left-3 top-2.5" />
          </div>
        </div>

        {/* 12 Articles Grid */}
        <div className="pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-[#E8E2D8] rounded-xs overflow-hidden flex flex-col justify-between group hover:border-[#C29B38] transition-all hover:shadow-lg"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EDE7DA]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#0E100E]/85 text-[#C29B38] text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded-xs">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2.5 text-xs text-[#7A756D] font-mono mb-2.5">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#141715] group-hover:text-[#C29B38] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#59564F] mt-3 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono bg-[#F2ECE0] text-[#706B62] px-2 py-0.5 rounded-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#ECE7DC] mt-4 flex items-center justify-between">
                  <span className="text-[11px] text-[#7A756D] font-mono">
                    By {post.author.name}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#C29B38] group-hover:text-[#A88328]"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-20 bg-white border border-[#E5DFD4] rounded-xs">
              <p className="text-base text-[#59564F]">
                No articles found matching your query.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 text-xs uppercase tracking-widest text-[#C29B38] font-mono hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
