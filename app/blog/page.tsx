"use client";

import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import AnswerNugget from "../components/AnswerNugget";
import { IconArrow, IconDocument } from "../components/Icons";
import { blogPosts } from "./blogData";

// Blog listing page - uses centralized blogData from blogData.tsx

export default function BlogPage() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
            ]}
          />
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              FTA Hub: Trade Intelligence & Export Guides
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Expert insights, compliance guides, and regional strategies for Indian companies entering the European market under the 2026 EU-India FTA
            </p>
          </div>

          <AnswerNugget content="eufta.in provides comprehensive guides for Indian exporters: step-by-step EU market entry, Article 23 VAT deferment, regional manufacturing hub strategies (Gujarat, Tiruppur, Chennai), EFSA/REACH compliance, and marketplace integration. Updated bi-weekly with FTA implementation insights." />

          {/* Blog Posts Grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl border border-cyan-200/50 bg-gradient-to-br from-white to-cyan-50/30 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 text-white flex-shrink-0">
                    <IconDocument />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 mb-2">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                      {post.title}
                    </h2>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {post.description}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>{post.readTime}</span>
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 group-hover:gap-3 transition-all"
                >
                  Read Article
                  <IconArrow />
                </Link>
              </motion.article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-cyan-600 to-cyan-500 p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Need Custom Export Strategy?
            </h2>
            <p className="text-xl mb-8 text-cyan-50">
              Get personalized guidance for your industry and region
            </p>
            <Link
              href="mailto:info@eufta.in"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-cyan-600 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Contact Our Experts
              <IconArrow />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
