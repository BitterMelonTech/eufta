"use client";

import React, { useState } from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import AnswerNugget from "../components/AnswerNugget";
import { IconArrow, IconDocument } from "../components/Icons";
import { blogPosts } from "./blogData";

const POSTS_PER_PAGE = 12;

const categories = Array.from(new Set(blogPosts.map(p => p.category)));

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? blogPosts.filter(p => p.category === selectedCategory)
    : blogPosts;

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const gradients = [
    "from-cyan-500 to-cyan-600",
    "from-indigo-500 to-indigo-600",
    "from-violet-500 to-violet-600",
    "from-blue-500 to-blue-600",
    "from-purple-500 to-purple-600",
    "from-teal-500 to-teal-600",
  ];

  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 py-20">
          <div className="absolute inset-0 bg-grid-modern [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
              ]}
            />
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              FTA Hub: <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">Trade Intelligence</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">
              Expert insights, compliance guides, and regional strategies for Indian companies entering the European market under the 2026 EU-India FTA
            </p>
            <p className="mt-3 text-sm text-slate-400">
              {filteredPosts.length} articles {selectedCategory ? `in ${selectedCategory}` : 'total'} — Showing {startIndex + 1}-{Math.min(endIndex, filteredPosts.length)}
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <AnswerNugget content="eufta.in provides comprehensive guides for Indian exporters: step-by-step EU market entry, Article 23 VAT deferment, regional manufacturing hub strategies (Gujarat, Tiruppur, Chennai), EFSA/REACH compliance, and marketplace integration." />

          {/* Category Filter */}
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              onClick={() => handleCategoryChange(null)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                !selectedCategory
                  ? "bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              All ({blogPosts.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {cat} ({blogPosts.filter(p => p.category === cat).length})
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % POSTS_PER_PAGE) * 0.04 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Top gradient bar */}
                <div className={`h-1 bg-gradient-to-r ${gradients[index % gradients.length]}`} />
                
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[index % gradients.length]} text-white flex-shrink-0 shadow-sm`}>
                      <IconDocument />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 mb-2">
                        {post.category}
                      </span>
                      <h2 className="text-lg font-bold text-slate-900 leading-tight line-clamp-2 group-hover:text-cyan-600 transition-colors">
                        {post.title}
                      </h2>
                    </div>
                  </div>
                  
                  <p className="text-slate-500 text-sm mb-5 line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span className="font-medium">{post.readTime}</span>
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 group-hover:gap-3 transition-all"
                  >
                    Read Article
                    <IconArrow />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex flex-col items-center gap-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>
                
                <div className="flex items-center gap-1">
                  {getPageNumbers().map((page, index) => (
                    <React.Fragment key={index}>
                      {page === '...' ? (
                        <span className="px-2 text-slate-400">...</span>
                      ) : (
                        <button
                          onClick={() => handlePageChange(page as number)}
                          className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all duration-200 ${
                            currentPage === page
                              ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                              : 'border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                          }`}
                        >
                          {page}
                        </button>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Next
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <p className="text-sm text-slate-400">
                Page {currentPage} of {totalPages}
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-20 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-12 text-center">
            <div className="absolute inset-0 bg-grid-modern [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Need Custom Export Strategy?
              </h2>
              <p className="text-xl mb-8 text-slate-300 max-w-xl mx-auto">
                Get personalized guidance for your industry and region
              </p>
              <Link
                href="mailto:info@eufta.in"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300"
              >
                Contact Our Experts
                <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
