"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotificationBar() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-emerald-600 text-white shadow-lg"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <span className="animate-pulse">🆕</span>
          <span>
            New: Analysis of Union Budget 2026-27 impact on FTA Tariff Lines now live.
          </span>
          <Link
            href="/final-text"
            className="font-semibold underline hover:text-emerald-100 transition-colors"
          >
            View Update
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
