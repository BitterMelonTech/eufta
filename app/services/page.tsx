"use client";

import { Metadata } from "next";
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
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
            ]}
          />
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Complete logistics and compliance solutions for Indian brands entering the EU market
            </p>
          </div>

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
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative rounded-2xl border border-cyan-200/50 bg-gradient-to-br from-white to-cyan-50/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg flex-shrink-0">
                      <IconComponent />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {service.name}
                      </h3>
                      <p className="text-cyan-600 font-semibold">{service.pricing}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 flex-shrink-0 mt-0.5">
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
                    className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Learn More
                    <IconArrow />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-cyan-600 to-cyan-500 p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Estimate Your Costs?
            </h2>
            <p className="text-xl mb-8 text-cyan-50">
              Use our interactive pricing calculator to build your custom scenario and get an instant cost estimate.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-cyan-600 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Build Your Cost Estimate
              <IconArrow />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
