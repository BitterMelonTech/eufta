"use client";

import { motion } from "framer-motion";

export default function ValuePropositions() {
  const items = [
    {
      title: "Fiscal Arbitrage",
      description:
        "Leveraging Dutch Article 23 VAT Deferment to eliminate the 21% upfront tax burden for importers.",
      icon: "💰",
    },
    {
      title: "Regulatory Bridge",
      description:
        "Deciphering complex EU health, safety, and carbon regulations (Novel Foods, GMP, REACH, CBAM).",
      icon: "🛡️",
    },
    {
      title: "Omnichannel Scale",
      description:
        "Direct fulfillment into Amazon (EU5), Zalando, Otto, Allegro, and Bol.com from a single hub.",
      icon: "🌐",
    },
    {
      title: "Bidirectional Flow",
      description:
        "Servicing the surging Indian demand for European luxury, food, and machinery.",
      icon: "↔️",
    },
  ];

  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Core Value Propositions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Four pillars that make eufta.in the essential infrastructure for
            Indian brands entering Europe
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
