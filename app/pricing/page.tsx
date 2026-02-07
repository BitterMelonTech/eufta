"use client";

import { motion } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import AnswerNugget from "../components/AnswerNugget";
import ServiceCostCalculator from "../components/ServiceCostCalculator";
import Link from "next/link";
import { IconCalculator, IconArrow } from "../components/Icons";

const servicePricing = [
  {
    id: "pick-pack",
    name: "Pick & Pack",
    price: 2.75,
    marketRate: "€3.20+",
    description: "Basic pick + packing per order",
    unit: "per order",
    savings: "14% below market",
  },
  {
    id: "extra-items",
    name: "Extra Items",
    price: 0.4,
    marketRate: "€0.60+",
    description: "Per additional SKU in same box",
    unit: "per SKU",
    savings: "33% below market",
  },
  {
    id: "storage",
    name: "Storage",
    price: 15.0,
    marketRate: "€25.00+",
    description: "Per month per standard pallet",
    unit: "per pallet/month",
    savings: "40% below market",
  },
  {
    id: "inbound",
    name: "Inbound",
    price: 6.0,
    marketRate: "€9.00+",
    description: "Unloading and inspection per pallet",
    unit: "per pallet",
    savings: "33% below market",
  },
  {
    id: "returns",
    name: "Returns",
    price: 4.5,
    marketRate: "€5.50+",
    description: "Inspection and restocking per order",
    unit: "per return",
    savings: "18% below market",
  },
  {
    id: "fiscal-rep",
    name: "Fiscal Representation",
    price: 150.0,
    marketRate: "€250.00+",
    description: "Monthly retainer for Article 23 management",
    unit: "per month",
    savings: "40% below market",
  },
];

export default function PricingPage() {
  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 py-20">
          <div className="absolute inset-0 bg-grid-modern [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Pricing", href: "/pricing" },
              ]}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-cyan-300 mt-6 mb-4">
                Competitive Rates
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Transparent <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">Pricing</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">
                Competitive, market-beating rates for all logistics and compliance services
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <AnswerNugget content="eufta.in offers transparent, competitive pricing: Pick & Pack from €2.75 (14% below market), Storage €15/pallet (40% below market), Fiscal Representation €150/month (40% below market). All prices in EUR." />

          {/* Pricing Table */}
          <section className="mt-16">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-400/30 px-4 py-2 text-sm font-medium text-cyan-700 mb-6"
              >
                Service Menu
              </motion.div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Our Service Pricing
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                Compare our competitive rates against market standards
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-xl">
              <table className="min-w-full divide-y divide-slate-100">
                <thead className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900">
                  <tr>
                    <th className="px-6 py-5 text-left text-sm font-semibold text-white">
                      Service
                    </th>
                    <th className="px-6 py-5 text-left text-sm font-semibold text-white hidden sm:table-cell">
                      Description
                    </th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-white">
                      Our Price
                    </th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-white">
                      Market Rate
                    </th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-white">
                      Savings
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100">
                  {servicePricing.map((service, index) => (
                    <motion.tr
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-cyan-50/30 transition-colors"
                    >
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="text-sm font-bold text-slate-900">
                          {service.name}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">{service.unit}</div>
                      </td>
                      <td className="px-6 py-5 hidden sm:table-cell">
                        <div className="text-sm text-slate-600">{service.description}</div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-center">
                        <div className="text-lg font-extrabold bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">
                          €{service.price.toFixed(2)}
                        </div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-center">
                        <div className="text-sm text-slate-400 line-through">
                          {service.marketRate}
                        </div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-center">
                        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-50 to-cyan-100 border border-cyan-200/60 px-3 py-1 text-xs font-bold text-cyan-700">
                          {service.savings}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Interactive Cost Calculator */}
          <section className="mt-24">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-400/30 px-4 py-2 text-sm font-medium text-cyan-700 mb-6"
              >
                <IconCalculator />
                <span className="ml-2">Cost Estimator</span>
              </motion.div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Build Your Custom Scenario
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                Select services, input your volumes, and get an instant cost estimate for your business
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-cyan-50/20 to-white p-8 shadow-xl">
              <ServiceCostCalculator industryName="Custom Scenario" />
            </div>
          </section>

          {/* Additional Info */}
          <section className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "No Hidden Fees",
                description: "Transparent pricing with no surprise charges. All costs clearly displayed upfront.",
                gradient: "from-cyan-500 to-blue-600",
              },
              {
                title: "Volume Discounts",
                description: "Custom pricing available for high-volume clients. Contact us for enterprise rates.",
                gradient: "from-indigo-500 to-violet-600",
              },
              {
                title: "Flexible Contracts",
                description: "Month-to-month flexibility. No long-term commitments required.",
                gradient: "from-violet-500 to-purple-600",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-1 bg-gradient-to-r ${item.gradient} absolute top-0 left-0 right-0`} />
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </section>

          {/* CTA */}
          <div className="mt-20 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-12 text-center">
            <div className="absolute inset-0 bg-grid-modern [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white mb-4">Need a Custom Quote?</h2>
              <p className="text-slate-300 mb-8 max-w-lg mx-auto">Contact our team for enterprise pricing, volume discounts, and custom service packages.</p>
              <Link
                href="mailto:info@eufta.in"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300"
              >
                Get Custom Quote
                <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
