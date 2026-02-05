// Batch 2 of blog posts - to be merged into blogData.tsx
// This file contains blog post data for 56 additional posts

import React from "react";
import Link from "next/link";

export const batch2BlogPosts = [
  // Industry-Specific Guides (8 sectors)
  {
    id: "leather-footwear-export-eu",
    title: "Leather & Footwear Export to EU: 0% Duty Under 2026 FTA with REACH Compliance",
    description: "Indian leather manufacturers can export footwear and leather goods to EU with zero duty. Complete guide to REACH Chrome VI compliance and market opportunities.",
    category: "Industry Guide",
    readTime: "9 min read",
    date: "2026-02-22",
    keywords: ["leather export EU", "footwear export", "REACH Chrome VI", "leather goods"],
    geoKeywords: ["How to export leather products to EU", "leather footwear export from India", "REACH compliance for leather"],
    answerNugget: "Leather & Footwear exports to EU now have 0% duty (down from 17%) under 2026 FTA. Key requirement: REACH Chrome VI compliance (max 3mg/kg). Example savings: €3.06M annually on €1.5M monthly exports. Major markets: Italy, Germany, France.",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          India's leather industry, valued at $1.8 billion in EU exports, benefits significantly from the 2026 FTA. With duty elimination from 17% to 0%, Indian leather manufacturers can now compete directly with European brands.
        </p>
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Duty Elimination Impact</h2>
        <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-lg p-6">
          <p className="text-slate-700 mb-4"><strong>Example:</strong> Leather manufacturer exports €1.5M products monthly</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-slate-700">Pre-FTA Duty (17%)</span>
              <span className="font-semibold text-red-600">€255,000/month</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-slate-700">Post-FTA Duty (0%)</span>
              <span className="font-semibold text-cyan-600">€0/month</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-slate-900 font-bold">Annual Savings</span>
              <span className="font-bold text-cyan-600 text-lg">€3,060,000</span>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">REACH Chrome VI Compliance</h2>
        <p className="text-slate-700 mb-4">
          EU REACH regulation sets strict limits on chromium VI in leather products:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
          <li><strong>Maximum Limit:</strong> 3mg/kg (3 parts per million) of chromium VI</li>
          <li><strong>Testing Required:</strong> Third-party lab testing with certificate</li>
          <li><strong>Documentation:</strong> REACH compliance certificate must accompany shipment</li>
          <li><strong>Penalties:</strong> Non-compliance can result in customs rejection and fines</li>
        </ul>
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Key Export Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-cyan-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-900 mb-2">Leather Footwear</h3>
            <p className="text-sm text-slate-600 mb-2">Export value: $900M annually</p>
            <p className="text-xs text-slate-500">Shoes, boots, sandals, formal footwear</p>
          </div>
          <div className="border border-cyan-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-900 mb-2">Leather Goods</h3>
            <p className="text-sm text-slate-600 mb-2">Export value: $600M annually</p>
            <p className="text-xs text-slate-500">Bags, wallets, belts, accessories</p>
          </div>
          <div className="border border-cyan-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-900 mb-2">Finished Leather</h3>
            <p className="text-sm text-slate-600 mb-2">Export value: $300M annually</p>
            <p className="text-xs text-slate-500">Processed leather for manufacturing</p>
          </div>
        </div>
        <div className="mt-8 p-6 bg-slate-900 text-white rounded-lg">
          <h3 className="text-xl font-bold mb-4">Ready to Export Leather Products?</h3>
          <p className="mb-4">Contact eufta.in for leather export support with REACH compliance.</p>
          <a href="mailto:info@eufta.in" className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-6 py-3 text-sm font-semibold hover:bg-cyan-500 transition-colors">Get Leather Export Guidance</a>
        </div>
      </div>
    ),
  },
  // Continue with more posts...
];
