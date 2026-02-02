"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconAutomotive, IconFactory, IconTextile, IconDiamond, IconTech, IconArrow } from "./Icons";

interface RegionalImpact {
  city: string;
  state: string;
  industries: string[];
  impact: string;
  dutySavings?: string;
  icon: "automotive" | "factory" | "textile" | "diamond" | "tech";
}

const iconMap = {
  automotive: IconAutomotive,
  factory: IconFactory,
  textile: IconTextile,
  diamond: IconDiamond,
  tech: IconTech,
};

const regionalImpacts: RegionalImpact[] = [
  {
    city: "Chennai",
    state: "Tamil Nadu",
    industries: ["Automotive", "Electronics", "IT Services"],
    impact:
      "Automotive duty savings: EU cars drop from 110% to 10% over 5 years. Chennai's auto hub benefits from reduced import costs on European machinery and components.",
    dutySavings: "110% → 10% (Automotive)",
    icon: "automotive",
  },
  {
    city: "Pune",
    state: "Maharashtra",
    industries: ["Automotive", "IT", "Manufacturing"],
    impact:
      "Automotive and manufacturing sectors gain from 0% duty on EU machinery imports (previously up to 44%). IT services benefit from 144 open service sectors.",
    dutySavings: "Up to 44% → 0% (Machinery)",
    icon: "factory",
  },
  {
    city: "Tiruppur",
    state: "Tamil Nadu",
    industries: ["Textiles", "Apparel", "Knitwear"],
    impact:
      "Textile export boom: Immediate 0% duty on 99% of exports to EU. Game-changer vs Bangladesh. Tiruppur's knitwear industry gains massive competitive advantage.",
    dutySavings: "12% → 0% (Textiles)",
    icon: "textile",
  },
  {
    city: "Surat",
    state: "Gujarat",
    industries: ["Textiles", "Diamonds", "Gems & Jewellery"],
    impact:
      "Textile and diamond exports benefit from 0% duty elimination. Surat's textile mills and diamond cutting industry gain direct access to EU markets.",
    dutySavings: "12% → 0% (Textiles), 4% → 0% (Gems)",
    icon: "diamond",
  },
  {
    city: "Bangalore",
    state: "Karnataka",
    industries: ["IT Services", "R&D", "Biotech"],
    impact:
      "IT services mobility: 144 open service sectors including IT, R&D, and biotech. Bangalore's tech professionals gain enhanced EU mobility rights and 18-month post-study work options.",
    dutySavings: "Service Sector Access",
    icon: "tech",
  },
];

export default function RegionalImpact() {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50/50 px-4 py-2 text-sm font-medium text-emerald-700 mb-6"
          >
            Regional Analysis
          </motion.div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Regional Impact: City-Wise FTA Benefits
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
            How the 2026 India-EU FTA transforms specific Indian manufacturing
            and service hubs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regionalImpacts.map((region, index) => {
            const IconComponent = iconMap[region.icon];
            return (
              <motion.div
                key={region.city}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg">
                    <IconComponent />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {region.city}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium">{region.state}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">
                    Key Industries
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {region.industries.map((industry) => (
                      <span
                        key={industry}
                        className="inline-flex rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/50 px-3 py-1.5 text-xs font-semibold text-emerald-800"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                {region.dutySavings && (
                  <div className="mb-6 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 p-4 border border-emerald-200/50">
                    <p className="text-xs font-semibold text-emerald-900 mb-2 uppercase tracking-wide">
                      Duty Savings
                    </p>
                    <p className="text-lg font-bold text-emerald-700">
                      {region.dutySavings}
                    </p>
                  </div>
                )}

                <p className="text-sm leading-relaxed text-slate-700">
                  {region.impact}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center space-x-4">
          <Link
            href="/fta-industries"
            className="group inline-flex items-center rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore All Industries
            <IconArrow />
          </Link>
          <Link
            href="/final-text"
            className="inline-flex items-center rounded-xl border-2 border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 transition-all duration-300"
          >
            View Final Agreement Text
            <IconArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
