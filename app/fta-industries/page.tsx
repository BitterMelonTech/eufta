"use client";

import AnswerNugget from "../components/AnswerNugget";
import Breadcrumbs from "../components/Breadcrumbs";
import ServiceCostCalculator from "../components/ServiceCostCalculator";
import FTADutyCalculator from "../components/FTADutyCalculator";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const industries = [
  {
    id: "textiles",
    name: "Textiles & Apparel",
    oldDuty: "12.0%",
    newDuty: "0%",
    compliance: "CBAM Reporting: Mandatory carbon footprint data.",
    description: "From Tiruppur knitwear to Gujarat denim, we handle CBAM compliance and next-day delivery to Zalando and Amazon EU5.",
    regions: ["Tamil Nadu (Tiruppur)", "Gujarat"],
  },
  {
    id: "pharma",
    name: "Pharma & Med-Tech",
    oldDuty: "11.0%",
    newDuty: "0%",
    compliance: "QP Batch Release: Mandatory EU-based certification.",
    description: "QP-certified batch release in Rotterdam. We manage Annex 21 compliance and GMP site audits for API and finished formulations.",
    regions: ["Gujarat (Ahmedabad/Sanand)", "Hyderabad"],
  },
  {
    id: "engineering",
    name: "Engineering Goods",
    oldDuty: "22.0%",
    newDuty: "0%",
    compliance: "CE Certification: Technical safety file audit.",
    description: "CE marking support and technical file preparation. Fulfillment for automotive components, machinery, and electronics.",
    regions: ["UP (Noida/Jewar)", "Tamil Nadu (Chennai)"],
  },
  {
    id: "marine",
    name: "Marine Products",
    oldDuty: "26.0%",
    newDuty: "0%",
    compliance: "Veterinary Inspection: Clearance via Border Control Posts (BCP).",
    description: "BCP clearance and cold chain logistics for seafood exports. Specialized handling for frozen and chilled products.",
    regions: ["Kerala", "Tamil Nadu"],
  },
  {
    id: "chemicals",
    name: "Chemicals & Plastics",
    oldDuty: "12.8%",
    newDuty: "0%",
    compliance: "REACH OR: eufta.in acts as 'Only Representative' for registration.",
    description: "We act as your REACH Only Representative, managing ECHA registrations and handling the 19.5% fee increase for large companies.",
    regions: ["Gujarat", "Maharashtra"],
  },
  {
    id: "leather",
    name: "Leather & Footwear",
    oldDuty: "17.0%",
    newDuty: "0%",
    compliance: "REACH (Chrome VI): Strict limits on chromium content.",
    description: "REACH compliance for leather goods. Quality control and fulfillment for fashion marketplaces across Europe.",
    regions: ["Tamil Nadu", "UP"],
  },
  {
    id: "gems",
    name: "Gems & Jewellery",
    oldDuty: "4.0%",
    newDuty: "0%",
    compliance: "Origin Certification: Proven 'Change in Tariff Heading'.",
    description: "Origin certification support and secure logistics for precious stones and jewelry exports.",
    regions: ["Gujarat (Surat)", "Mumbai"],
  },
  {
    id: "toys",
    name: "Toys & Sports Goods",
    oldDuty: "4.7%",
    newDuty: "0%",
    compliance: "Toy Safety Directive: Verification of EN 71 standards.",
    description: "EN 71 compliance verification and fulfillment for toys and sports equipment across European marketplaces.",
    regions: ["Delhi NCR", "Punjab"],
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
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "FTA Industries", href: "/fta-industries" },
            ]}
          />
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              FTA Industries
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Specialized logistics and compliance for Indian export sectors
              under the 2026 EU-India FTA
            </p>
          </div>

          <AnswerNugget content="Specialized logistics for Textiles (CBAM), Pharma (QP), Marine (BCP), and Engineering (CE). Deep-dives into tariff schedules for 15+ sectors." />

          {/* Tabbed Interface */}
          <div className="mt-12">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Select an Industry
              </h2>
              <p className="text-sm text-slate-600">
                Click on any industry to view detailed tariff and compliance information
              </p>
            </div>
            
            {/* Industry Tabs Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
              {industries.map((industry, index) => (
                <motion.button
                  key={industry.id}
                  onClick={() => setActiveTab(industry.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative rounded-lg border-2 p-4 text-left transition-all duration-200 ${
                    activeTab === industry.id
                      ? "border-emerald-500 bg-emerald-50 shadow-md"
                      : "border-slate-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/50 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-sm font-semibold leading-tight ${
                        activeTab === industry.id
                          ? "text-emerald-900"
                          : "text-slate-700 group-hover:text-emerald-700"
                      }`}>
                        {industry.name}
                      </h3>
                      <div className="mt-2 flex items-center gap-2">
                        <span className={`text-xs font-medium ${
                          activeTab === industry.id
                            ? "text-emerald-700"
                            : "text-slate-500"
                        }`}>
                          {industry.oldDuty}
                        </span>
                        <span className="text-slate-400">→</span>
                        <span className={`text-xs font-bold ${
                          activeTab === industry.id
                            ? "text-emerald-600"
                            : "text-emerald-500"
                        }`}>
                          {industry.newDuty}
                        </span>
                      </div>
                    </div>
                    {activeTab === industry.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-2 flex-shrink-0"
                      >
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                      </motion.div>
                    )}
                  </div>
                  {activeTab === industry.id && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "3rem" }}
                      className="absolute -bottom-1 left-1/2 h-1 -translate-x-1/2 rounded-full bg-emerald-500"
                    ></motion.div>
                  )}
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
                className="mt-8 rounded-xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-lg"
              >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    {activeIndustry.name}
                  </h2>
                  <div className="mt-2 flex items-center gap-4">
                    <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-800">
                      Before: {activeIndustry.oldDuty}
                    </span>
                    <span className="text-slate-400">→</span>
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                      After: {activeIndustry.newDuty}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-2">
                      Overview
                    </h3>
                    <p className="text-base leading-relaxed text-slate-700">
                      {activeIndustry.description}
                    </p>
                  </div>
                  
                  <div className="rounded-lg bg-white p-5 shadow-sm border border-slate-200">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
                      Key Manufacturing Regions
                    </h3>
                    <ul className="space-y-2">
                      {activeIndustry.regions.map((region) => (
                        <li key={region} className="flex items-center text-sm text-slate-700">
                          <span className="mr-2 text-emerald-500">📍</span>
                          {region}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-5 shadow-sm border border-slate-200">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
                      Tariff & Compliance
                    </h3>
                    <dl className="space-y-4">
                      <div className="rounded-md bg-slate-50 p-4">
                        <dt className="text-xs font-medium uppercase tracking-wide text-slate-500 mb-1">
                          Previous Duty
                        </dt>
                        <dd className="text-2xl font-bold text-slate-900">
                          {activeIndustry.oldDuty}
                        </dd>
                      </div>
                      <div className="rounded-md bg-emerald-50 p-4">
                        <dt className="text-xs font-medium uppercase tracking-wide text-emerald-700 mb-1">
                          New Duty (FTA 2026)
                        </dt>
                        <dd className="text-2xl font-bold text-emerald-600">
                          {activeIndustry.newDuty}
                        </dd>
                      </div>
                      <div className="mt-4 rounded-md border-l-4 border-emerald-500 bg-slate-50 p-4">
                        <dt className="text-xs font-semibold uppercase tracking-wide text-slate-700 mb-2">
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
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Service Cost Calculator */}
          <ServiceCostCalculator industryName={activeIndustry.name} />

          {/* All Industries Table */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900">
              Complete Industry Directory
            </h2>
            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-700">
                      Sector
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-700">
                      Old Duty
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-700">
                      New Duty
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-700">
                      Key Compliance Step
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {industries.map((industry) => (
                    <tr key={industry.id} className="hover:bg-slate-50">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
                        {industry.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                        {industry.oldDuty}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-emerald-600">
                        {industry.newDuty}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {industry.compliance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
