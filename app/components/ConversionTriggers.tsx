"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ConversionTriggers() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your email service
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Customs Duty Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-xl border-2 border-emerald-500/50 bg-white p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <span className="text-2xl">🧮</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Customs Duty Calculator 2026
              </h3>
            </div>
            <p className="text-slate-600 mb-6">
              Calculate your exact duty savings under the 2026 India-EU FTA.
              Get instant results for your specific product category and export
              value.
            </p>
            <Link
              href="/fta-industries"
              className="inline-flex w-full items-center justify-center rounded-md bg-emerald-600 px-6 py-4 text-base font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors"
            >
              Calculate Your Duty Savings
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
            <p className="mt-4 text-xs text-slate-500 text-center">
              Free tool • No registration required • Instant results
            </p>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border-2 border-emerald-500/50 bg-white p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Get the 2026 Tariff Schedule PDF
              </h3>
            </div>
            <p className="text-slate-600 mb-6">
              Download the complete official tariff elimination schedule from
              the Jan 27, 2026 India-EU FTA. Includes all sectors, staging
              periods, and compliance requirements.
            </p>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your.email@example.com"
                    className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors"
                >
                  Download PDF Now
                </button>
                <p className="text-xs text-slate-500 text-center">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-lg bg-emerald-50 p-6 text-center border border-emerald-200"
              >
                <span className="text-4xl mb-4 block">✓</span>
                <p className="text-lg font-semibold text-emerald-900 mb-2">
                  Success!
                </p>
                <p className="text-sm text-emerald-700">
                  Check your email for the 2026 Tariff Schedule PDF download
                  link.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
