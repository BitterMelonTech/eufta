"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const regions = [
  {
    id: "gujarat",
    name: "Gujarat",
    cities: "Ahmedabad/Sanand",
    industries: ["Pharma/API logistics", "Auto components", "Textiles"],
    description:
      "Gujarat is India's pharmaceutical hub, with Ahmedabad and Sanand hosting major API manufacturers. eufta.in provides specialized QP batch release services for pharma exports and automotive component fulfillment.",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "from-cyan-50 to-cyan-100/50",
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    cities: "Tiruppur/Chennai",
    industries: ["Knitwear/Apparel fulfillment", "EV components"],
    description:
      "Tiruppur is the knitwear capital of India, while Chennai hosts EV manufacturing. We handle CBAM compliance for textiles and CE certification for EV components.",
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50/50",
  },
  {
    id: "up",
    name: "Uttar Pradesh",
    cities: "Noida/Jewar",
    industries: ["Electronics manufacturing", "Smartphone exports"],
    description:
      "Noida and Jewar are emerging as electronics manufacturing hubs. eufta.in provides CE certification support and marketplace enablement for smartphone and electronics exports.",
    color: "from-violet-500 to-purple-600",
    bgColor: "from-violet-50 to-purple-50/50",
  },
  {
    id: "odisha",
    name: "Odisha",
    cities: "Paradip",
    industries: ["Bulk metal reverse logistics", "LCL consolidation"],
    description:
      "Paradip port handles bulk metal exports. We provide LCL consolidation services and reverse logistics for metal products entering the EU market.",
    color: "from-amber-500 to-orange-600",
    bgColor: "from-amber-50 to-orange-50/50",
  },
];

export default function LocalizedContent() {
  const [activeRegion, setActiveRegion] = useState("gujarat");

  const activeRegionData =
    regions.find((r) => r.id === activeRegion) || regions[0];

  return (
    <div className="mt-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Indian Manufacturing Hubs
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Specialized logistics support for key industrial clusters
        </p>
      </div>

      {/* Region Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => setActiveRegion(region.id)}
            className={`relative rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              activeRegion === region.id
                ? "bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                : "bg-white text-slate-700 border border-slate-200 hover:border-cyan-300 hover:text-cyan-600 hover:shadow-md"
            }`}
          >
            {region.name}
            {activeRegion === region.id && (
              <motion.div
                layoutId="activeRegionTab"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 -z-10"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Active Region Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeRegion}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-xl"
        >
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${activeRegionData.color}`} />
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="mb-1">
                <span className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 mb-3">
                  Regional Hub
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                {activeRegionData.name}
              </h3>
              <p className="text-sm text-cyan-600 font-medium mb-4">{activeRegionData.cities}</p>
              <p className="text-slate-600 leading-relaxed">{activeRegionData.description}</p>
            </div>
            <div className="lg:w-72 flex-shrink-0">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                Key Industries
              </h4>
              <div className="space-y-3">
                {activeRegionData.industries.map((industry) => (
                  <div key={industry} className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-slate-50 to-cyan-50/30 border border-slate-100 px-4 py-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-white flex-shrink-0">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-slate-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
