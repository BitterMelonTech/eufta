"use client";

import { motion } from "framer-motion";

export default function ProfessionalMobility() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Indian Professionals & Students: EU Mobility Rights
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            The 2026 India-EU FTA includes significant professional mobility
            provisions for Indian professionals and students
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Post-Study Work Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border-2 border-emerald-200 bg-white p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                18-Month Post-Study Work Rights
              </h3>
            </div>
            <p className="text-slate-700 mb-6">
              Indian students completing higher education in EU member states
              are now eligible for 18 months of post-study work authorization.
              This allows graduates to gain valuable international work
              experience and contribute to the EU economy.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-emerald-600 text-xl">✓</span>
                <span className="text-slate-700">
                  <strong>Extended Stay:</strong> 18 months to find employment
                  after graduation
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-emerald-600 text-xl">✓</span>
                <span className="text-slate-700">
                  <strong>Work Authorization:</strong> Full-time employment
                  rights during the 18-month period
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-emerald-600 text-xl">✓</span>
                <span className="text-slate-700">
                  <strong>Pathway to Long-term:</strong> Opportunity to transition
                  to long-term work permits
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Open Service Sectors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border-2 border-blue-200 bg-white p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                144 Open Service Sectors
              </h3>
            </div>
            <p className="text-slate-700 mb-6">
              The FTA opens 144 service sectors for Indian professionals,
              creating unprecedented opportunities for skilled workers across
              key industries.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  IT Services
                </p>
                <p className="text-xs text-slate-600">
                  Software development, cloud services, digital transformation
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  Finance
                </p>
                <p className="text-xs text-slate-600">
                  Banking, insurance, fintech, investment advisory
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  R&D
                </p>
                <p className="text-xs text-slate-600">
                  Research, innovation, technology development
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  Healthcare
                </p>
                <p className="text-xs text-slate-600">
                  Medical services, telemedicine, health tech
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 border border-blue-200">
              <p className="text-sm font-semibold text-blue-900">
                Total Sectors Opened: 144
              </p>
              <p className="text-xs text-blue-700 mt-1">
                Includes IT, Finance, R&D, Healthcare, Engineering, Legal, and
                more
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
