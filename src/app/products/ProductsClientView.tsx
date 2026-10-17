'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CATEGORIES_DATA, PRODUCTS_CATALOG, ProductItem } from '@/data/categories';
import { ArrowUpRight, Search, Check, ShieldCheck, Layers, Sparkles, Filter, X } from 'lucide-react';

export default function ProductsClientView() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProductModal, setActiveProductModal] = useState<ProductItem | null>(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  // Filtered products
  const filteredProducts = PRODUCTS_CATALOG.filter((product) => {
    const matchesCategory =
      activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.weaveStructure.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FBF9F5] min-h-screen text-[#141715] pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl pb-10 border-b border-[#E5DFD4]">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C29B38] font-mono">
            Manufacturing · Panipat, India
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#141715] mt-2 leading-tight">
            Soft Furnishings Collection
          </h1>
          <p className="mt-4 text-base text-[#59564F] leading-relaxed">
            Sofa fabrics, sofa covers, bedding, and cushions. Produced for white-label programs, furniture brands, and trade partners.
          </p>
        </div>

        {/* Filters and Search Toolbar */}
        <div className="py-8 border-b border-[#E5DFD4] space-y-6">
          {/* Main Category Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('all');
                }}
                className={`text-xs uppercase tracking-wider font-mono px-4 py-2 rounded-xs transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-[#141715] text-[#FBF9F5]'
                    : 'bg-[#EDE7DA] text-[#59564F] hover:bg-[#DDD5C4]'
                }`}
              >
                All Products (16)
              </button>

              {CATEGORIES_DATA.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                  }}
                  className={`text-xs uppercase tracking-wider font-mono px-4 py-2 rounded-xs transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-[#141715] text-[#FBF9F5]'
                      : 'bg-[#EDE7DA] text-[#59564F] hover:bg-[#DDD5C4]'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search weave, yarn, type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#EDE7DA] border border-[#DDD5C4] focus:border-[#C29B38] text-xs px-3.5 py-2 pl-9 rounded-xs focus:outline-none placeholder-[#7A756D]"
              />
              <Search className="w-4 h-4 text-[#7A756D] absolute left-3 top-2.5" />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="pt-10">
          <div className="flex items-center justify-between text-xs text-[#7A756D] font-mono mb-6">
            <span>Showing {filteredProducts.length} specifications</span>
            <span>Contract & White-Label Sourcing</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-[#E5DFD4] rounded-xs overflow-hidden flex flex-col justify-between group hover:border-[#C29B38] transition-all hover:shadow-xl"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#EDE7DA]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#0E100E]/85 text-[#C29B38] text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded-xs">
                      {product.subCategory}
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-[#8C867B] block">
                      {product.categoryLabel}
                    </span>
                    <h3 className="font-serif text-xl text-[#141715] font-normal mt-1 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#59564F] mt-2 line-clamp-2 leading-relaxed">
                      {product.tagline}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#EAE4D8] space-y-1.5 text-[11px] text-[#6E695F]">
                      <div className="flex justify-between">
                        <span className="text-[#9E988D]">Weave:</span>
                        <span className="font-mono text-[#141715] truncate max-w-[150px]">
                          {product.weaveStructure}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#9E988D]">Handfeel:</span>
                        <span className="font-mono text-[#141715] truncate max-w-[150px]">
                          {product.handfeel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveProductModal(product)}
                    className="flex-1 bg-[#141715] text-[#FBF9F5] hover:bg-[#C29B38] hover:text-[#0E100E] text-xs uppercase tracking-wider font-semibold py-2.5 rounded-xs transition-colors text-center cursor-pointer"
                  >
                    View Specs
                  </button>
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                    className="border border-[#C29B38] text-[#9A7420] hover:bg-[#C29B38] hover:text-[#0E100E] text-xs px-3 py-2.5 rounded-xs transition-colors flex items-center justify-center"
                    title="Request Swatch"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-white border border-[#E5DFD4] rounded-xs">
              <p className="text-base text-[#59564F]">
                No textile specifications found matching your filter criteria.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 text-xs uppercase tracking-widest text-[#C29B38] font-mono hover:underline"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* B2B Sourcing Support Banner */}
        <div className="mt-20 bg-[#121513] text-[#FBF9F5] border border-[#232924] p-8 sm:p-10 rounded-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C29B38] font-mono">
              White Label Manufacturing
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal mt-1 text-[#FBF9F5]">
              Looking for custom specifications or private label?
            </h3>
            <p className="text-xs sm:text-sm text-[#9E988D] mt-1 max-w-lg">
              Send us your reference targets for custom sampling, sizing, and price quotations.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C29B38] text-[#0E100E] hover:bg-[#DFCA9B] font-semibold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xs transition-colors shrink-0"
          >
            <span>Request Swatches</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Technical Spec Drawer / Modal */}
      {activeProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#FBF9F5] border border-[#C29B38] rounded-xs max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-[#141715] shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveProductModal(null)}
              className="absolute top-4 right-4 text-[#7A756D] hover:text-[#141715] p-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs uppercase font-mono text-[#C29B38] tracking-widest">
              {activeProductModal.categoryLabel} · {activeProductModal.subCategory}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#141715] mt-1">
              {activeProductModal.name}
            </h3>
            <p className="text-sm text-[#59564F] mt-2 leading-relaxed">
              {activeProductModal.description}
            </p>

            <div className="mt-6 pt-4 border-t border-[#E5DFD4] space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-4 py-2 border-b border-[#ECE7DC]">
                <span className="text-[#7A756D] font-mono">Weave Structure:</span>
                <span className="font-semibold">{activeProductModal.weaveStructure}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 py-2 border-b border-[#ECE7DC]">
                <span className="text-[#7A756D] font-mono">Fiber Composition:</span>
                <span className="font-semibold">{activeProductModal.composition}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 py-2 border-b border-[#ECE7DC]">
                <span className="text-[#7A756D] font-mono">Tactile Handfeel:</span>
                <span className="font-semibold">{activeProductModal.handfeel}</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-xs uppercase font-mono tracking-wider text-[#141715] font-semibold mb-2">
                Contract Suitability:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProductModal.suitableFor.map((item) => (
                  <span
                    key={item}
                    className="text-xs bg-[#EDE7DA] text-[#59564F] px-2.5 py-1 rounded-xs font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-xs uppercase font-mono tracking-wider text-[#141715] font-semibold mb-2">
                White-Label OEM Options:
              </h4>
              <ul className="space-y-1.5 text-xs text-[#59564F]">
                {activeProductModal.oemOptions.map((opt) => (
                  <li key={opt} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C29B38]" />
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5DFD4] flex flex-wrap gap-3">
              <Link
                href={`/contact?product=${encodeURIComponent(activeProductModal.name)}`}
                className="flex-1 bg-[#141715] text-[#FBF9F5] hover:bg-[#C29B38] hover:text-[#0E100E] text-xs uppercase tracking-widest font-semibold py-3.5 text-center rounded-xs transition-colors"
              >
                Order Swatch Memo for this Fabric
              </Link>
              <button
                type="button"
                onClick={() => setActiveProductModal(null)}
                className="border border-[#CCC] hover:border-[#141715] text-xs uppercase tracking-widest px-5 py-3.5 rounded-xs transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
