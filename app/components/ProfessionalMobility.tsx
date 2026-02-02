"use client";

import { motion } from "framer-motion";
import { IconGraduation, IconBriefcase, IconCheck } from "./Icons";

export default function ProfessionalMobility() {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/50 px-4 py-2 text-sm font-medium text-blue-700 mb-6"
          >
            Professional Mobility
          </motion.div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Indian Professionals & Students: EU Mobility Rights
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
            The 2026 India-EU FTA includes significant professional mobility
            provisions for Indian professionals and students
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Post-Study Work Rights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative rounded-2xl border border-emerald-200/50 bg-white/80 backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg">
                <IconGraduation />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                18-Month Post-Study Work Rights
              </h3>
            </div>
            <p className="text-slate-700 mb-8 leading-relaxed">
              Indian students completing higher education in EU member states
              are now eligible for 18 months of post-study work authorization.
              This allows graduates to gain valuable international work
              experience and contribute to the EU economy.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 flex-shrink-0 mt-0.5">
                  <IconCheck />
                </div>
                <span className="text-slate-700">
                  <strong className="text-slate-900">Extended Stay:</strong> 18 months to find employment
                  after graduation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 flex-shrink-0 mt-0.5">
                  <IconCheck />
                </div>
                <span className="text-slate-700">
                  <strong className="text-slate-900">Work Authorization:</strong> Full-time employment
                  rights during the 18-month period
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 flex-shrink-0 mt-0.5">
                  <IconCheck />
                </div>
                <span className="text-slate-700">
                  <strong className="text-slate-900">Pathway to Long-term:</strong> Opportunity to transition
                  to long-term work permits
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Open Service Sectors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative rounded-2xl border border-blue-200/50 bg-white/80 backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
                <IconBriefcase />
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
