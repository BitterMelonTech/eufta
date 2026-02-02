"use client";

import { motion } from "framer-motion";
import { IconArrow } from "./Icons";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-32 sm:px-6 lg:px-8">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Official Signing Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 rounded-full bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 px-6 py-3 text-sm font-semibold text-emerald-300 mb-8 shadow-lg"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            OFFICIALLY SIGNED: Jan 27, 2026
          </motion.div>
          
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent animate-gradient">
              Duty Free Export to EU
            </span>
            <br />
            <span className="text-white">The Mother of All Trade Deals</span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-300">
            The definitive Rotterdam bridge for Indian D2C and B2B brands to
            exploit the officially signed 2026 EU-India FTA. Physical warehousing, Article 23
            VAT deferment, and pan-European marketplace enablement.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-base font-semibold text-white shadow-2xl transition-all duration-300 hover:shadow-emerald-500/50"
            >
              <span className="absolute inset-0 w-3 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative">Explore Services</span>
            </motion.a>
            <a
              href="/fiscal-representation"
              className="group inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30"
            >
              Learn about Article 23
              <IconArrow />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
