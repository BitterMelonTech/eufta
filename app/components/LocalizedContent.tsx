"use client";

import { useState } from "react";

const regions = [
  {
    id: "gujarat",
    name: "Gujarat",
    cities: "Ahmedabad/Sanand",
    industries: ["Pharma/API logistics", "Auto components", "Textiles"],
    description:
      "Gujarat is India's pharmaceutical hub, with Ahmedabad and Sanand hosting major API manufacturers. eufta.in provides specialized QP batch release services for pharma exports and automotive component fulfillment.",
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    cities: "Tiruppur/Chennai",
    industries: ["Knitwear/Apparel fulfillment", "EV components"],
    description:
      "Tiruppur is the knitwear capital of India, while Chennai hosts EV manufacturing. We handle CBAM compliance for textiles and CE certification for EV components.",
  },
  {
    id: "up",
    name: "Uttar Pradesh",
    cities: "Noida/Jewar",
    industries: ["Electronics manufacturing", "Smartphone exports"],
    description:
      "Noida and Jewar are emerging as electronics manufacturing hubs. eufta.in provides CE certification support and marketplace enablement for smartphone and electronics exports.",
  },
  {
    id: "odisha",
    name: "Odisha",
    cities: "Paradip",
    industries: ["Bulk metal reverse logistics", "LCL consolidation"],
    description:
      "Paradip port handles bulk metal exports. We provide LCL consolidation services and reverse logistics for metal products entering the EU market.",
  },
];

export default function LocalizedContent() {
  const [activeRegion, setActiveRegion] = useState("gujarat");

  const activeRegionData =
    regions.find((r) => r.id === activeRegion) || regions[0];

  return (
    <div className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-8">
      <h2 className="text-2xl font-bold text-slate-900">
        Indian Manufacturing Hubs
      </h2>
      <p className="mt-2 text-slate-600">
        Specialized logistics support for key industrial clusters
      </p>

      {/* Region Tabs */}
      <div className="mt-6 border-b border-slate-200">
        <nav className="-mb-px flex space-x-4 overflow-x-auto" aria-label="Regions">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region.id)}
              className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
                activeRegion === region.id
                  ? "border-emerald-500 text-emerald-600"
                  : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"
              }`}
            >
              {region.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Active Region Content */}
      <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-900">
            {activeRegionData.name} ({activeRegionData.cities})
          </h3>
          <p className="mt-2 text-slate-600">{activeRegionData.description}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">
            Key Industries:
          </h4>
          <ul className="mt-2 space-y-1">
            {activeRegionData.industries.map((industry) => (
              <li key={industry} className="flex items-start text-sm text-slate-600">
                <span className="mr-2 text-emerald-600">•</span>
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
