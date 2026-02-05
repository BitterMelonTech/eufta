"use client";

import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import AnswerNugget from "../components/AnswerNugget";
import { IconArrow, IconDocument } from "../components/Icons";

const blogPosts = [
  {
    id: "how-to-export-india-to-eu-2026",
    title: "How to Export from India to EU in 2026: Complete Guide for Indian Manufacturers",
    description: "Step-by-step guide for Indian companies entering the European market under the 2026 EU-India FTA. Learn about duty elimination, compliance requirements, and logistics setup.",
    category: "Export Guide",
    readTime: "12 min read",
    date: "February 15, 2026",
    keywords: ["India EU export", "export to Europe", "India EU FTA 2026", "Rotterdam logistics"],
    geoKeywords: ["How do I export from India to EU", "India to Europe export process", "EU India trade agreement benefits"],
  },
  {
    id: "article-23-vat-deferment-guide",
    title: "Article 23 VAT Deferment: Save 21% on EU Imports for Indian D2C Brands",
    description: "Complete guide to Dutch Article 23 VAT deferment for Indian exporters. Eliminate upfront 21% VAT payment and improve cash flow instantly.",
    category: "Fiscal Strategy",
    readTime: "10 min read",
    date: "2026-02-12",
    keywords: ["Article 23 VAT", "VAT deferment Netherlands", "Indian exporters EU", "Dutch VAT"],
    geoKeywords: ["How to avoid VAT payment on EU imports", "Article 23 Netherlands for Indian companies", "VAT deferment benefits"],
  },
  {
    id: "gujarat-pharma-export-eu",
    title: "Gujarat Pharma Companies: Export APIs to EU with 0% Duty Under 2026 FTA",
    description: "Gujarat-based pharmaceutical manufacturers can now export APIs and formulations to EU with zero duty. Learn about QP batch release and EMA compliance.",
    category: "Regional Focus",
    readTime: "8 min read",
    date: "2026-02-10",
    keywords: ["Gujarat pharma export", "API export to EU", "pharmaceutical compliance EU", "Ahmedabad pharma"],
    geoKeywords: ["Gujarat pharmaceutical companies export to Europe", "API export from Ahmedabad to EU", "pharma compliance for Indian companies"],
  },
  {
    id: "tiruppur-textile-export-eu",
    title: "Tiruppur Textile Exporters: 0% Duty on Apparel to EU Market in 2026",
    description: "Tiruppur knitwear manufacturers can eliminate 12% duty on textile exports to EU. Complete guide to CBAM compliance and marketplace integration.",
    category: "Regional Focus",
    readTime: "9 min read",
    date: "2026-02-08",
    keywords: ["Tiruppur textile export", "textile export to EU", "CBAM compliance", "knitwear export"],
    geoKeywords: ["Tiruppur companies export to Europe", "textile export from Tamil Nadu to EU", "apparel export India to EU"],
  },
  {
    id: "rotterdam-warehouse-logistics",
    title: "Why Rotterdam Warehouse is Best for Indian Exporters: 170M Consumers in 24 Hours",
    description: "Rotterdam offers the fastest access to 170 million European consumers. Learn about multimodal connectivity, Article 23 benefits, and fulfillment costs.",
    category: "Logistics",
    readTime: "7 min read",
    date: "2026-02-05",
    keywords: ["Rotterdam warehouse", "Netherlands logistics", "EU fulfillment hub", "Rotterdam port"],
    geoKeywords: ["Best warehouse location for Indian exporters in EU", "Rotterdam vs other EU ports", "Netherlands logistics advantages"],
  },
  {
    id: "efsa-novel-foods-compliance",
    title: "EFSA Novel Foods Compliance: How Indian Ayush Brands Enter EU Market",
    description: "Complete guide to EFSA Novel Foods regulation for Indian wellness brands. Learn about Article 4 Consultation and dossier approval process.",
    category: "Compliance",
    readTime: "11 min read",
    date: "2026-02-03",
    keywords: ["EFSA Novel Foods", "Ayush export to EU", "wellness products EU", "Indian ingredients EU"],
    geoKeywords: ["How to get EFSA approval for Indian products", "Ayush products export to Europe", "Novel Foods regulation compliance"],
  },
  {
    id: "amazon-eu5-marketplace-setup",
    title: "Amazon EU5 Marketplace Setup: Complete Guide for Indian Sellers",
    description: "Step-by-step guide to selling on Amazon UK, Germany, France, Italy, and Spain from India. Learn about MCF integration and fulfillment costs.",
    category: "Marketplace",
    readTime: "10 min read",
    date: "2026-02-01",
    keywords: ["Amazon EU5", "Amazon Europe selling", "Indian sellers Amazon", "EU marketplace"],
    geoKeywords: ["How to sell on Amazon Europe from India", "Amazon EU5 setup guide", "Indian products on Amazon EU"],
  },
  {
    id: "chennai-automotive-export-eu",
    title: "Chennai Automotive Export: 0% Duty on Auto Components to EU Under FTA",
    description: "Chennai-based automotive manufacturers can save millions with zero duty on component exports. Learn about CE certification and engineering goods compliance.",
    category: "Regional Focus",
    readTime: "8 min read",
    date: "2026-01-30",
    keywords: ["Chennai automotive export", "auto components EU", "CE certification", "engineering goods export"],
    geoKeywords: ["Chennai auto companies export to Europe", "automotive parts export from India to EU", "CE marking for Indian manufacturers"],
  },
  {
    id: "reach-compliance-indian-chemicals",
    title: "REACH Compliance for Indian Chemical Exporters: Only Representative Guide",
    description: "Indian chemical manufacturers need REACH Only Representative (OR) to export to EU. Complete guide to ECHA registration and compliance.",
    category: "Compliance",
    readTime: "9 min read",
    date: "2026-01-28",
    keywords: ["REACH compliance", "chemical export EU", "Only Representative", "ECHA registration"],
    geoKeywords: ["REACH compliance for Indian companies", "chemical export to Europe requirements", "Only Representative EU"],
  },
  {
    id: "d2c-brand-eu-expansion",
    title: "Indian D2C Brands: Complete EU Expansion Guide with Cost Calculator",
    description: "Complete roadmap for Indian D2C brands expanding to EU. Learn about fulfillment costs, VAT management, marketplace integration, and compliance.",
    category: "Strategy",
    readTime: "15 min read",
    date: "2026-01-27",
    keywords: ["D2C brand EU expansion", "Indian brands Europe", "EU market entry", "D2C fulfillment"],
    geoKeywords: ["How to expand D2C brand to Europe", "Indian D2C companies in EU", "EU market entry strategy for Indian brands"],
  },
];

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
