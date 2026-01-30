"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Gateway to{" "}
            <span className="text-emerald-400">450M Consumers</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            The definitive Rotterdam bridge for Indian D2C and B2B brands to
            exploit the 2026 EU-India FTA. Physical warehousing, Article 23
            VAT deferment, and pan-European marketplace enablement.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#services"
              className="rounded-md bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Explore Services
            </a>
            <a
              href="/fiscal-representation"
              className="text-base font-semibold leading-6 text-white hover:text-emerald-400"
            >
              Learn about Article 23 <span aria-hidden="true">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
