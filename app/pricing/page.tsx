"use client";

import { useState } from "react";
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
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Pricing", href: "/pricing" },
            ]}
          />
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Transparent Pricing
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Competitive, market-beating rates for all logistics and compliance services
            </p>
          </div>

          <AnswerNugget content="eufta.in offers transparent, competitive pricing: Pick & Pack from €2.75 (14% below market), Storage €15/pallet (40% below market), Fiscal Representation €150/month (40% below market). All prices in EUR." />

          {/* Pricing Table */}
          <section className="mt-16">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50/50 px-4 py-2 text-sm font-medium text-cyan-700 mb-6"
              >
                Service Menu
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Our Service Pricing
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                Compare our competitive rates against market standards
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-cyan-200/50 shadow-xl">
              <table className="min-w-full divide-y divide-cyan-100">
                <thead className="bg-gradient-to-r from-cyan-600 to-cyan-500">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                      Service
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                      Description
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white">
                      Our Price
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white">
                      Market Rate
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white">
                      Savings
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-cyan-100">
                  {servicePricing.map((service, index) => (
                    <motion.tr
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-cyan-50/50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-slate-900">
                          {service.name}
                        </div>
                        <div className="text-xs text-slate-500">{service.unit}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-600">{service.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-lg font-bold text-cyan-600">
                          €{service.price.toFixed(2)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm text-slate-500 line-through">
                          {service.marketRate}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="inline-flex items-center rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">
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
                className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50/50 px-4 py-2 text-sm font-medium text-cyan-700 mb-6"
              >
                Cost Estimator
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Build Your Custom Scenario
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                Select services, input your volumes, and get an instant cost estimate for your business
              </p>
            </div>

            <div className="rounded-2xl border-2 border-cyan-200/50 bg-gradient-to-br from-white to-cyan-50/30 p-8 shadow-xl">
              <ServiceCostCalculator industryName="Custom Scenario" />
            </div>
          </section>

          {/* Additional Info */}
          <section className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-cyan-200/50 bg-white p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                No Hidden Fees
              </h3>
              <p className="text-sm text-slate-600">
                Transparent pricing with no surprise charges. All costs clearly displayed upfront.
              </p>
            </div>
            <div className="rounded-xl border border-cyan-200/50 bg-white p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Volume Discounts
              </h3>
              <p className="text-sm text-slate-600">
                Custom pricing available for high-volume clients. Contact us for enterprise rates.
              </p>
            </div>
            <div className="rounded-xl border border-cyan-200/50 bg-white p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Flexible Contracts
              </h3>
              <p className="text-sm text-slate-600">
                Month-to-month flexibility. No long-term commitments required.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              href="mailto:info@eufta.in"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Custom Quote
              <IconArrow />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
