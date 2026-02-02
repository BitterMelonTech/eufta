"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface RegionalImpact {
  city: string;
  state: string;
  industries: string[];
  impact: string;
  dutySavings?: string;
  icon: string;
}

const regionalImpacts: RegionalImpact[] = [
  {
    city: "Chennai",
    state: "Tamil Nadu",
    industries: ["Automotive", "Electronics", "IT Services"],
    impact:
      "Automotive duty savings: EU cars drop from 110% to 10% over 5 years. Chennai's auto hub benefits from reduced import costs on European machinery and components.",
    dutySavings: "110% → 10% (Automotive)",
    icon: "🚗",
  },
  {
    city: "Pune",
    state: "Maharashtra",
    industries: ["Automotive", "IT", "Manufacturing"],
    impact:
      "Automotive and manufacturing sectors gain from 0% duty on EU machinery imports (previously up to 44%). IT services benefit from 144 open service sectors.",
    dutySavings: "Up to 44% → 0% (Machinery)",
    icon: "🏭",
  },
  {
    city: "Tiruppur",
    state: "Tamil Nadu",
    industries: ["Textiles", "Apparel", "Knitwear"],
    impact:
      "Textile export boom: Immediate 0% duty on 99% of exports to EU. Game-changer vs Bangladesh. Tiruppur's knitwear industry gains massive competitive advantage.",
    dutySavings: "12% → 0% (Textiles)",
    icon: "👕",
  },
  {
    city: "Surat",
    state: "Gujarat",
    industries: ["Textiles", "Diamonds", "Gems & Jewellery"],
    impact:
      "Textile and diamond exports benefit from 0% duty elimination. Surat's textile mills and diamond cutting industry gain direct access to EU markets.",
    dutySavings: "12% → 0% (Textiles), 4% → 0% (Gems)",
    icon: "💎",
  },
  {
    city: "Bangalore",
    state: "Karnataka",
    industries: ["IT Services", "R&D", "Biotech"],
    impact:
      "IT services mobility: 144 open service sectors including IT, R&D, and biotech. Bangalore's tech professionals gain enhanced EU mobility rights and 18-month post-study work options.",
    dutySavings: "Service Sector Access",
    icon: "💻",
  },
];

export default function RegionalImpact() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Regional Impact: City-Wise FTA Benefits
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            How the 2026 India-EU FTA transforms specific Indian manufacturing
            and service hubs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regionalImpacts.map((region, index) => (
            <motion.div
              key={region.city}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl border-2 border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl">{region.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {region.city}
                      </h3>
                      <p className="text-sm text-slate-500">{region.state}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-slate-500 mb-2">
                  Key Industries
                </p>
                <div className="flex flex-wrap gap-2">
                  {region.industries.map((industry) => (
                    <span
                      key={industry}
                      className="inline-flex rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-800"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              {region.dutySavings && (
                <div className="mb-4 rounded-lg bg-emerald-50 p-3 border border-emerald-200">
                  <p className="text-xs font-semibold text-emerald-900 mb-1">
                    Duty Savings
                  </p>
                  <p className="text-sm font-bold text-emerald-700">
                    {region.dutySavings}
                  </p>
                </div>
              )}

              <p className="text-sm leading-relaxed text-slate-700">
                {region.impact}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center space-x-4">
          <Link
            href="/fta-industries"
            className="inline-flex items-center rounded-md bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors"
          >
            Explore All Industries
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
          <Link
            href="/final-text"
            className="inline-flex items-center rounded-md border-2 border-emerald-600 px-6 py-3 text-base font-semibold text-emerald-600 hover:bg-emerald-50 transition-colors"
          >
            View Final Agreement Text
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
