"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconCalculator, IconDocument, IconArrow, IconCheck } from "./Icons";

export default function ConversionTriggers() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/pdf-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setEmail("");
        }, 5000);
      } else {
        console.error("API Error:", data);
        alert(`Error: ${data.error || "Unknown error. Please check the console or contact info@eufta.in"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Network error: ${error instanceof Error ? error.message : "Please check your connection and try again"}`);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-32">
      <div className="absolute inset-0 bg-grid-modern" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Customs Duty Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative rounded-2xl border border-cyan-500/30 bg-white/95 backdrop-blur-sm p-10 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/30">
                <IconCalculator />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Customs Duty Calculator 2026
              </h3>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Calculate your exact duty savings under the 2026 India-EU FTA.
              Get instant results for your specific product category and export
              value.
            </p>
            <Link
              href="/fta-industries"
              className="group inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
            >
              Calculate Your Duty Savings
              <IconArrow />
            </Link>
            <p className="mt-6 text-xs text-slate-500 text-center font-medium">
              Free tool • No registration required • Instant results
            </p>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative rounded-2xl border border-indigo-500/30 bg-white/95 backdrop-blur-sm p-10 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/30">
                <IconDocument />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Get the 2026 Tariff Schedule PDF
              </h3>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Download the complete official tariff elimination schedule from
              the Jan 27, 2026 India-EU FTA. Includes all sectors, staging
              periods, and compliance requirements.
            </p>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 mb-2"
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
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  Download PDF Now
                </button>
                <p className="text-xs text-slate-500 text-center font-medium">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-xl bg-gradient-to-r from-cyan-50 to-cyan-100/50 p-8 text-center border-2 border-cyan-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg">
                    <IconCheck />
                  </div>
                </div>
                <p className="text-xl font-bold text-cyan-900 mb-2">
                  Success!
                </p>
                <p className="text-sm text-cyan-700 leading-relaxed">
                  The 2026 Tariff Schedule PDF has been sent to your email address. Please check your inbox (and spam folder).
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
