"use client";

import AnswerNugget from "../components/AnswerNugget";
import Breadcrumbs from "../components/Breadcrumbs";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconFiscal, IconShield, IconGlobe, IconArrow } from "../components/Icons";

const services = [
  {
    id: "3pl-fulfillment",
    name: "3PL Fulfillment",
    icon: IconGlobe,
    description: "Next-day delivery across Western Europe from our Rotterdam hub. Automated pick-and-pack integrated with Shopify and Amazon.",
    features: [
      "Next-day delivery to 170M consumers",
      "Amazon EU5 MCF integration",
      "Zalando, Bol.com, Allegro integration",
      "Per-order costs under €3.00",
      "Real-time inventory tracking",
    ],
    pricing: "From €2.75 per order",
    link: "/pricing",
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-50/50 to-blue-50/30",
  },
  {
    id: "fiscal-representation",
    name: "Fiscal Representation",
    icon: IconFiscal,
    description: "Article 23 VAT Deferment via General Fiscal Representation. Eliminate the 21% upfront VAT burden at the border.",
    features: [
      "Article 23 VAT Deferment license",
      "Eliminate 21% upfront VAT payment",
      "Dutch VAT number registration",
      "Quarterly VAT filings managed",
      "No local Dutch office required",
    ],
    pricing: "€150/month retainer",
    link: "/fiscal-representation",
    gradient: "from-indigo-500 to-violet-600",
    bgGradient: "from-indigo-50/50 to-violet-50/30",
  },
  {
    id: "compliance-bridge",
    name: "Compliance Bridge",
    icon: IconShield,
    description: "Expert management of EFSA Novel Food registrations, EMA medicinal QP release, REACH, and CBAM regulations.",
    features: [
      "EFSA Novel Food registrations",
      "EMA QP batch release",
      "REACH Only Representative (OR)",
      "CBAM carbon reporting",
      "GMP site audit assistance",
    ],
    pricing: "Custom pricing",
    link: "/compliance-bridge",
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-50/50 to-purple-50/30",
  },
  {
    id: "marketplace-enablement",
    name: "Marketplace Enablement",
    icon: IconGlobe,
    description: "Direct fulfillment into Amazon (EU5), Zalando, Otto, Allegro, and Bol.com from a single hub.",
    features: [
      "Amazon EU5 full integration",
      "Zalando specialized onboarding",
      "Allegro Eastern Europe access",
      "Otto & Bol.com integration",
      "Multi-channel order management",
    ],
    pricing: "Setup + per-order fees",
    link: "/marketplace-enablement",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50/50 to-indigo-50/30",
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 py-20">
          <div className="absolute inset-0 bg-grid-modern [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
              ]}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-cyan-300 mt-6 mb-4">
                EU Market Entry Solutions
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Our <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">
                Complete logistics and compliance solutions for Indian brands entering the EU market under the 2026 FTA
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <AnswerNugget content="eufta.in provides 3PL fulfillment, Article 23 VAT deferment, regulatory compliance (EFSA/EMA/REACH), and marketplace enablement for Indian D2C and B2B brands exporting to the EU under the 2026 FTA." />

          {/* Services Grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Top gradient bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${service.gradient}`} />
                  
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg flex-shrink-0`}>
                        <IconComponent />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">
                          {service.name}
                        </h3>
                        <p className="text-sm font-semibold bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">{service.pricing}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">
                        Key Features
                      </h4>
                      <ul className="space-y-2.5">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                            <div className={`flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br ${service.gradient} text-white flex-shrink-0 mt-0.5`}>
                              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={service.link}
                      className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${service.gradient} px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:gap-3`}
                    >
                      Learn More
                      <IconArrow />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-12 text-center">
            <div className="absolute inset-0 bg-grid-modern [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Ready to Estimate Your Costs?
              </h2>
              <p className="text-xl mb-8 text-slate-300 max-w-xl mx-auto">
                Use our interactive pricing calculator to build your custom scenario and get an instant cost estimate
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300"
              >
                Build Your Cost Estimate
                <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
