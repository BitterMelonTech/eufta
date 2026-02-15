"use client";

import AnswerNugget from "../components/AnswerNugget";
import Breadcrumbs from "../components/Breadcrumbs";
import LastUpdated from "../components/LastUpdated";
import ServiceCostCalculator from "../components/ServiceCostCalculator";
import FTADutyCalculator from "../components/FTADutyCalculator";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IconArrow } from "../components/Icons";

const industries = [
  {
    id: "textiles",
    name: "Textiles & Apparel",
    oldDuty: "12.0%",
    newDuty: "0%",
    compliance: "CBAM Reporting: Mandatory carbon footprint data.",
    description: "From Tiruppur knitwear to Gujarat denim, we handle CBAM compliance and next-day delivery to Zalando and Amazon EU5.",
    regions: ["Tamil Nadu (Tiruppur)", "Gujarat"],
    icon: "T",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "pharma",
    name: "Pharma & Med-Tech",
    oldDuty: "11.0%",
    newDuty: "0%",
    compliance: "QP Batch Release: Mandatory EU-based certification.",
    description: "QP-certified batch release in Rotterdam. We manage Annex 21 compliance and GMP site audits for API and finished formulations.",
    regions: ["Gujarat (Ahmedabad/Sanand)", "Hyderabad"],
    icon: "P",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    id: "engineering",
    name: "Engineering Goods",
    oldDuty: "22.0%",
    newDuty: "0%",
    compliance: "CE Certification: Technical safety file audit.",
    description: "CE marking support and technical file preparation. Fulfillment for automotive components, machinery, and electronics.",
    regions: ["UP (Noida/Jewar)", "Tamil Nadu (Chennai)"],
    icon: "E",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: "marine",
    name: "Marine Products",
    oldDuty: "26.0%",
    newDuty: "0%",
    compliance: "Veterinary Inspection: Clearance via Border Control Posts (BCP).",
    description: "BCP clearance and cold chain logistics for seafood exports. Specialized handling for frozen and chilled products.",
    regions: ["Kerala", "Tamil Nadu"],
    icon: "M",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: "chemicals",
    name: "Chemicals & Plastics",
    oldDuty: "12.8%",
    newDuty: "0%",
    compliance: "REACH OR: eufta.in acts as 'Only Representative' for registration.",
    description: "We act as your REACH Only Representative, managing ECHA registrations and handling the 19.5% fee increase for large companies.",
    regions: ["Gujarat", "Maharashtra"],
    icon: "C",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    id: "leather",
    name: "Leather & Footwear",
    oldDuty: "17.0%",
    newDuty: "0%",
    compliance: "REACH (Chrome VI): Strict limits on chromium content.",
    description: "REACH compliance for leather goods. Quality control and fulfillment for fashion marketplaces across Europe.",
    regions: ["Tamil Nadu", "UP"],
    icon: "L",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "gems",
    name: "Gems & Jewellery",
    oldDuty: "4.0%",
    newDuty: "0%",
    compliance: "Origin Certification: Proven 'Change in Tariff Heading'.",
    description: "Origin certification support and secure logistics for precious stones and jewelry exports.",
    regions: ["Gujarat (Surat)", "Mumbai"],
    icon: "G",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    id: "toys",
    name: "Toys & Sports Goods",
    oldDuty: "4.7%",
    newDuty: "0%",
    compliance: "Toy Safety Directive: Verification of EN 71 standards.",
    description: "EN 71 compliance verification and fulfillment for toys and sports equipment across European marketplaces.",
    regions: ["Delhi NCR", "Punjab"],
    icon: "S",
    gradient: "from-green-500 to-emerald-600",
  },
];

export default function FTAIndustries() {
  const [activeTab, setActiveTab] = useState("textiles");

  const activeIndustry = industries.find((ind) => ind.id === activeTab) || industries[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "FTA Industries - Specialized Logistics",
    description: "Specialized logistics for Textiles (CBAM), Pharma (QP), Marine (BCP), and Engineering (CE)",
    serviceType: "Export Logistics",
    areaServed: "European Union",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 py-20">
          <div className="absolute inset-0 bg-grid-modern [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "FTA Industries", href: "/fta-industries" },
              ]}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-cyan-300 mt-6 mb-4">
                8 Export Sectors Covered
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                FTA <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">Industries</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">
                Specialized logistics and compliance for Indian export sectors under the 2026 EU-India FTA
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <AnswerNugget content="Specialized logistics for Textiles (CBAM), Pharma (QP), Marine (BCP), and Engineering (CE). Deep-dives into tariff schedules for 15+ sectors." />

          {/* February 2026 Update Notice */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <LastUpdated date="2026-02-15" />
            <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50/50 p-4 flex-1 min-w-[300px]">
              <p className="text-sm font-bold text-amber-800 mb-1">February 2026 Update</p>
              <p className="text-sm text-amber-700 leading-relaxed">
                Tariff rates reflect the India-EU FTA (signed Jan 27, 2026) and Union Budget 2026-27 BCD changes (Feb 1, 2026). Critical minerals now at 0% BCD unilaterally.
                Sources: <a href="https://www.commerce.gov.in" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">Min. of Commerce</a>, <a href="https://www.cbic.gov.in" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">CBIC</a>, <a href="https://policy.trade.ec.europa.eu" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">DG Trade</a>.
              </p>
            </div>
          </div>

          {/* Tabbed Interface */}
          <div className="mt-12">
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
                Select an Industry
              </h2>
              <p className="text-sm text-slate-600">
                Click on any industry to view detailed tariff and compliance information
              </p>
            </div>
            
            {/* Industry Tabs Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {industries.map((industry, index) => (
                <motion.button
                  key={industry.id}
                  onClick={() => setActiveTab(industry.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative overflow-hidden rounded-xl p-4 text-left transition-all duration-200 ${
                    activeTab === industry.id
                      ? "ring-2 ring-cyan-500 shadow-lg shadow-cyan-500/10 bg-white"
                      : "border border-slate-200 bg-white hover:border-cyan-300 hover:shadow-md"
                  }`}
                >
                  {/* Top gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.gradient} ${activeTab === industry.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'} transition-opacity`} />
                  
                  <div className="flex items-start gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${industry.gradient} text-white text-xs font-bold flex-shrink-0 shadow-sm`}>
                      {industry.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-sm font-bold leading-tight ${
                        activeTab === industry.id
                          ? "text-slate-900"
                          : "text-slate-700 group-hover:text-slate-900"
                      }`}>
                        {industry.name}
                      </h3>
                      <div className="mt-1.5 flex items-center gap-1.5">
                        <span className="text-xs font-medium text-slate-400 line-through">
                          {industry.oldDuty}
                        </span>
                        <svg className="h-3 w-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <span className={`text-xs font-extrabold ${
                          activeTab === industry.id
                            ? "text-cyan-600"
                            : "text-cyan-500"
                        }`}>
                          {industry.newDuty}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Active Industry Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-8 relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl"
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${activeIndustry.gradient}`} />
                
                <div className="p-8">
                  <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${activeIndustry.gradient} text-white text-lg font-bold shadow-lg`}>
                        {activeIndustry.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-extrabold text-slate-900">
                          {activeIndustry.name}
                        </h2>
                        <div className="mt-2 flex items-center gap-3">
                          <span className="inline-flex items-center rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-semibold text-red-700">
                            Before: {activeIndustry.oldDuty}
                          </span>
                          <svg className="h-4 w-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <span className="inline-flex items-center rounded-full bg-cyan-50 border border-cyan-200 px-3 py-1 text-xs font-bold text-cyan-700">
                            After FTA: {activeIndustry.newDuty}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                          Overview
                        </h3>
                        <p className="text-base leading-relaxed text-slate-700">
                          {activeIndustry.description}
                        </p>
                      </div>
                      
                      <div className="rounded-xl bg-gradient-to-br from-slate-50 to-white p-6 border border-slate-200/80">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                          Key Manufacturing Regions
                        </h3>
                        <ul className="space-y-3">
                          {activeIndustry.regions.map((region) => (
                            <li key={region} className="flex items-center text-sm text-slate-700 gap-3">
                              <div className={`flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br ${activeIndustry.gradient} text-white flex-shrink-0`}>
                                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                              </div>
                              <span className="font-medium">{region}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-xl bg-gradient-to-br from-slate-50 to-white p-6 border border-slate-200/80">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                          Tariff & Compliance
                        </h3>
                        <dl className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-xl bg-white p-5 border border-red-100 shadow-sm">
                              <dt className="text-xs font-semibold uppercase tracking-wide text-red-500 mb-1">
                                Previous Duty
                              </dt>
                              <dd className="text-3xl font-extrabold text-slate-900">
                                {activeIndustry.oldDuty}
                              </dd>
                            </div>
                            <div className="rounded-xl bg-white p-5 border border-cyan-100 shadow-sm">
                              <dt className="text-xs font-semibold uppercase tracking-wide text-cyan-600 mb-1">
                                New Duty (FTA 2026)
                              </dt>
                              <dd className="text-3xl font-extrabold bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">
                                {activeIndustry.newDuty}
                              </dd>
                            </div>
                          </div>
                          <div className={`rounded-xl border-l-4 border-cyan-500 bg-gradient-to-r from-cyan-50/50 to-white p-5`}>
                            <dt className="text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">
                              Key Compliance Step
                            </dt>
                            <dd className="text-sm leading-relaxed text-slate-700">
                              {activeIndustry.compliance}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                    
                    <div>
                      <FTADutyCalculator
                        industryName={activeIndustry.name}
                        oldDuty={activeIndustry.oldDuty}
                        newDuty={activeIndustry.newDuty}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Service Cost Calculator */}
          <div className="mt-16">
            <ServiceCostCalculator industryName={activeIndustry.name} />
          </div>

          {/* All Industries Table */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Complete Industry Directory
              </h2>
              <p className="mt-3 text-slate-600">All sectors covered under the 2026 EU-India FTA</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-xl">
              <table className="min-w-full divide-y divide-slate-100">
                <thead className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                      Sector
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white">
                      Old Duty
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white">
                      New Duty
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white hidden md:table-cell">
                      Key Compliance Step
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {industries.map((industry, index) => (
                    <motion.tr
                      key={industry.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.03 }}
                      onClick={() => { setActiveTab(industry.id); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                      className="hover:bg-cyan-50/30 transition-colors cursor-pointer"
                    >
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${industry.gradient} text-white text-xs font-bold shadow-sm`}>
                            {industry.icon}
                          </div>
                          <span className="text-sm font-bold text-slate-900">{industry.name}</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-center text-sm text-slate-400 line-through">
                        {industry.oldDuty}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-center">
                        <span className="text-sm font-bold text-cyan-600">{industry.newDuty}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 hidden md:table-cell">
                        {industry.compliance}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-12 text-center">
            <div className="absolute inset-0 bg-grid-modern [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Ready to Export Under the FTA?
              </h2>
              <p className="text-xl mb-8 text-slate-300 max-w-xl mx-auto">
                Get personalized compliance and logistics solutions for your industry
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  View Our Services
                  <IconArrow />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-cyan-400/30 bg-white/5 backdrop-blur-md px-8 py-4 text-base font-semibold text-white hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300"
                >
                  Estimate Costs
                  <IconArrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
