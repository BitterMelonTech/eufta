"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotificationBar() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span>
            New: Analysis of Union Budget 2026-27 impact on FTA Tariff Lines now live.
          </span>
          <Link
            href="/final-text"
            className="font-semibold underline hover:text-cyan-100 transition-colors"
          >
            View Update
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
