"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconArrow } from "./Icons";

interface SectorData {
  id: string;
  sector: string;
  description: string;
  oldDuty: string;
  newDuty: string;
  details: string;
  impact: string;
  category: "export" | "import";
}

const sectorData: SectorData[] = [
  {
    id: "automotive",
    sector: "Automotive",
    description: "EU cars imported to India",
    oldDuty: "110%",
    newDuty: "10%",
    details: "Quota: 250,000 units/year",
    impact: "Massive reduction for high-end vehicles (>$15k CIF) over 5 years",
    category: "import",
  },
  {
    id: "textiles",
    sector: "Textiles & Apparel",
    description: "Indian exports to EU",
    oldDuty: "12.0%",
    newDuty: "0%",
    details: "99% of Indian exports - immediate duty elimination",
    impact: "Game-changer vs Bangladesh. Immediate 0% duty for 99% of exports",
    category: "export",
  },
  {
    id: "wines",
    sector: "Wines & Spirits",
    description: "EU wines and spirits to India",
    oldDuty: "150%",
    newDuty: "20-30% (Wines), 40% (Spirits)",
    details: "Wine duty: 20% premium, 30% mid-range. Spirits: 40%",
    impact: "Duties halved immediately from 150% to 75%, eventually dropping to 20-40%",
    category: "import",
  },
  {
    id: "machinery",
    sector: "Machinery & Engineering",
    description: "EU machinery to India",
    oldDuty: "Up to 44%",
    newDuty: "0%",
    details: "EU duties up to 44% slashed to 0% for Indian buyers",
    impact: "Complete elimination of duties on machinery imports from EU",
    category: "import",
  },
  {
    id: "sustainability",
    sector: "Green Transition Fund",
    description: "EU support for Indian MSMEs",
    oldDuty: "N/A",
    newDuty: "€500M",
    details: "EU Green Transition fund for Indian MSMEs",
    impact: "€500M EU Green Transition fund to support Indian MSMEs in sustainable practices",
    category: "export",
  },
];

export default function SectorImpact2026() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "export" | "import">("all");

  const filteredSectors = sectorData.filter((sector) => {
    const matchesSearch =
      sector.sector.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sector.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sector.impact.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || sector.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // JSON-LD Schema for structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Table",
    about: "India-EU FTA 2026 Sector Impact",
    name: "Sector Impact 2026: Official Duty Rates",
    description:
      "Verified duty elimination schedules from the Jan 27, 2026 India-EU Free Trade Agreement",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: sectorData.map((sector, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          name: sector.sector,
          description: `${sector.description}: Duty reduced from ${sector.oldDuty} to ${sector.newDuty}. ${sector.details}`,
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Previous Duty",
              value: sector.oldDuty,
            },
            {
              "@type": "PropertyValue",
              name: "New Duty (FTA 2026)",
              value: sector.newDuty,
            },
            {
              "@type": "PropertyValue",
              name: "Details",
              value: sector.details,
            },
          ],
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Sector Impact 2026: Verified Duty Rates
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
              Official duty elimination schedules from the Jan 27, 2026 India-EU
              FTA. Verified data from the final agreement.
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search sectors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-4 py-2 text-sm focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === "all"
                    ? "bg-cyan-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedCategory("export")}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === "export"
                    ? "bg-cyan-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Indian Exports
              </button>
              <button
                onClick={() => setSelectedCategory("import")}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === "import"
                    ? "bg-cyan-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                EU Imports
              </button>
            </div>
          </div>

          {/* Data Table - Desktop */}
          <div className="hidden lg:block overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Sector
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Description
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Previous Duty
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
                    New Duty (FTA 2026)
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Impact
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {filteredSectors.map((sector, index) => (
                  <motion.tr
                    key={sector.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-sm font-semibold text-slate-900">
                          {sector.sector}
                        </span>
                        <span
                          className={`ml-2 inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                            sector.category === "export"
                              ? "bg-cyan-100 text-cyan-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {sector.category === "export" ? "Export" : "Import"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {sector.description}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="text-sm font-semibold text-red-600">
                        {sector.oldDuty}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="text-sm font-bold text-cyan-600">
                        {sector.newDuty}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {sector.details}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {sector.impact}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card Grid - Mobile */}
          <div className="lg:hidden grid grid-cols-1 gap-6">
            {filteredSectors.map((sector, index) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg border-2 border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {sector.sector}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {sector.description}
                    </p>
                  </div>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                      sector.category === "export"
                        ? "bg-cyan-100 text-cyan-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {sector.category === "export" ? "Export" : "Import"}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="rounded-md bg-red-50 p-3">
                    <p className="text-xs font-medium text-red-700 mb-1">
                      Previous Duty
                    </p>
                    <p className="text-lg font-bold text-red-600">
                      {sector.oldDuty}
                    </p>
                  </div>
                  <div className="rounded-md bg-cyan-50 p-3">
                    <p className="text-xs font-medium text-cyan-700 mb-1">
                      New Duty (FTA 2026)
                    </p>
                    <p className="text-lg font-bold text-cyan-600">
                      {sector.newDuty}
                    </p>
                  </div>
                </div>
                <div className="border-t border-slate-200 pt-4 space-y-2">
                  <div>
                    <p className="text-xs font-semibold text-slate-700 mb-1">
                      Details
                    </p>
                    <p className="text-sm text-slate-600">{sector.details}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-700 mb-1">
                      Impact
                    </p>
                    <p className="text-sm text-slate-700">{sector.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredSectors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500">No sectors found matching your search.</p>
            </div>
          )}

          {/* Internal Linking for Topic Cluster */}
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-600 mb-4">
              For complete tariff schedules and official documentation:
            </p>
            <Link
              href="/final-text"
              className="inline-flex items-center rounded-md border-2 border-cyan-600 px-6 py-3 text-base font-semibold text-cyan-600 hover:bg-cyan-50 transition-colors"
            >
              View Final Agreement Text
              <IconArrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
