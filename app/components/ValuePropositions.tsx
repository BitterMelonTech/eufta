"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconFiscal, IconShield, IconGlobe, IconArrow } from "./Icons";

export default function ValuePropositions() {
  const items = [
    {
      title: "Fiscal Arbitrage",
      description:
        "Leveraging Dutch Article 23 VAT Deferment to eliminate the 21% upfront tax burden for importers.",
      icon: IconFiscal,
      gradient: "from-cyan-500 to-cyan-600",
      bgGradient: "from-cyan-50 to-cyan-100/50",
    },
    {
      title: "Regulatory Bridge",
      description:
        "Deciphering complex EU health, safety, and carbon regulations (Novel Foods, GMP, REACH, CBAM).",
      icon: IconShield,
      gradient: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100/50",
    },
    {
      title: "Omnichannel Scale",
      description:
        "Direct fulfillment into Amazon (EU5), Zalando, Otto, Allegro, and Bol.com from a single hub.",
      icon: IconGlobe,
      gradient: "from-violet-500 to-violet-600",
      bgGradient: "from-violet-50 to-violet-100/50",
    },
    {
      title: "Bidirectional Flow",
      description:
        "Servicing the surging Indian demand for European luxury, food, and machinery.",
      icon: IconArrow,
      gradient: "from-cyan-500 to-cyan-600",
      bgGradient: "from-cyan-50 to-cyan-100/50",
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-b from-white via-cyan-50/30 to-white py-32">
      <div className="absolute inset-0 bg-grid-modern [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-cyan-700 mb-6 shadow-sm"
          >
            Core Infrastructure
          </motion.div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Value Propositions
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600 leading-relaxed">
            Four strategic pillars that make eufta.in the essential infrastructure for
            Indian brands entering Europe
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition duration-300 group-hover:duration-500`} />
                <div className={`relative rounded-2xl bg-gradient-to-br ${item.bgGradient} p-8 shadow-xl ring-1 ring-slate-200/50 backdrop-blur-sm border border-white/50`}>
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg text-white`}>
                    <IconComponent />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  <Link
                    href="/services"
                    className="mt-6 flex items-center text-sm font-medium text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Learn more
                    <IconArrow />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
