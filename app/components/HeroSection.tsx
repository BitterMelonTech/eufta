"use client";

import { motion } from "framer-motion";
import { IconArrow, IconCalculator } from "./Icons";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 via-indigo-950 to-slate-900 px-4 py-32 sm:px-6 lg:px-8">
      {/* Modern animated background */}
      <div className="absolute inset-0 bg-grid-modern [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Official Signing Badge - Modern Cyan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 backdrop-blur-md border border-cyan-400/30 px-6 py-3 text-sm font-semibold text-cyan-300 mb-8 shadow-xl shadow-cyan-500/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            OFFICIALLY SIGNED: Jan 27, 2026
          </motion.div>
          
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Duty Free Export to EU
            </span>
            <br />
            <span className="text-white drop-shadow-lg">The Mother of All Trade Deals</span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-200">
            The definitive Rotterdam bridge for Indian D2C and B2B brands to
            exploit the officially signed 2026 EU-India FTA. Physical warehousing, Article 23
            VAT deferment, and pan-European marketplace enablement.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-cyan-500/50 transition-all duration-300 hover:shadow-cyan-400/60"
            >
              <span className="absolute inset-0 w-3 bg-white/20 transition-all duration-300 ease-out group-hover:w-full animate-shimmer"></span>
              <span className="relative">View Our Services</span>
            </motion.a>
            <motion.a
              href="/pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 rounded-xl border-2 border-cyan-400/30 bg-white/5 backdrop-blur-md px-8 py-4 text-base font-semibold text-white transition-all hover:bg-cyan-500/10 hover:border-cyan-400/50 shadow-lg"
            >
              <IconCalculator />
              Estimate Costs
              <IconArrow />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
