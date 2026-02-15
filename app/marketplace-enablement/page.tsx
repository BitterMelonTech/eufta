"use client";

import { motion } from "framer-motion";
import AnswerNugget from "../components/AnswerNugget";
import Breadcrumbs from "../components/Breadcrumbs";
import Link from "next/link";
import { IconArrow } from "../components/Icons";

const marketplaces = [
  {
    name: "Amazon (EU5)",
    description: "Full MCF integration across UK, Germany, France, Italy, and Spain",
    visitors: "500M+",
    integration: "Multi-Channel Fulfillment (MCF)",
    features: ["Pan-European inventory", "Prime eligibility", "Automated returns"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Zalando",
    description: "Specialized onboarding for fashion and lifestyle products",
    visitors: "121M",
    integration: "Direct API integration",
    features: ["Fashion-focused", "Invite-only access", "Premium positioning"],
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    name: "Allegro",
    description: "Critical for volume in Eastern European markets",
    visitors: "289M",
    integration: "Fulfillment by Allegro",
    features: ["Poland market leader", "High volume potential", "Local trust"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Bol.com",
    description: "Local trust for Benelux markets (Netherlands, Belgium)",
    visitors: "13.8M",
    integration: "Bol.com Fulfillment",
    features: ["Benelux leader", "Fast delivery", "Local customer service"],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    name: "Otto",
    description: "Germany's largest online retailer for fashion and home",
    visitors: "50M+",
    integration: "Otto Marketplace",
    features: ["German market", "Signup fee: €10k", "Premium positioning"],
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    name: "Wehkamp",
    description: "Invite-only Dutch fashion marketplace",
    visitors: "5M+",
    integration: "Direct integration",
    features: ["Exclusive access", "Fashion focus", "Netherlands market"],
    gradient: "from-rose-500 to-pink-600",
  },
];

const pricingCards = [
  { name: "Pick & Pack", price: "€2.75", market: "€3.20+", unit: "per order" },
  { name: "Extra Items", price: "€0.40", market: "€0.60+", unit: "per SKU" },
  { name: "Storage", price: "€15.00", market: "€25.00+", unit: "per pallet/month" },
  { name: "Inbound", price: "€6.00", market: "€9.00+", unit: "per pallet" },
  { name: "Returns", price: "€4.50", market: "€5.50+", unit: "per return" },
  { name: "Fiscal Rep", price: "€150", market: "€250+", unit: "per month" },
];

export default function MarketplaceEnablement() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketplace Enablement",
    description:
      "Direct fulfillment into Amazon EU5, Zalando, Allegro, Otto, Bol.com, and Wehkamp from a single Rotterdam hub. Next-day delivery to 170M consumers with per-order costs under €3.00.",
    provider: {
      "@type": "Organization",
      name: "eufta.in",
      url: "https://eufta.in",
    },
    serviceType: "Marketplace Enablement & 3PL Fulfillment",
    areaServed: "European Union",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which European marketplaces can Indian brands sell on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Indian brands can sell on Amazon EU5 (UK, Germany, France, Italy, Spain), Zalando (121M visitors, fashion-focused), Allegro (289M visitors, Poland market leader), Bol.com (13.8M visitors, Benelux leader), Otto (50M+ visitors, Germany's largest online retailer), and Wehkamp (invite-only Dutch fashion marketplace). eufta.in provides integration with all six platforms from a single Rotterdam hub.",
        },
      },
      {
        "@type": "Question",
        name: "How much does European marketplace fulfillment cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "eufta.in offers competitive rates: Pick & Pack from €2.75/order (market rate €3.20+), extra items €0.40/SKU, storage €15/pallet/month, inbound processing €6/pallet, returns handling €4.50/return, and Fiscal Representation €150/month. These rates are 25-40% below typical European 3PL providers.",
        },
      },
      {
        "@type": "Question",
        name: "How long does marketplace integration take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The integration process follows 4 steps: (1) Account Setup — marketplace account creation and verification, (2) API Integration — connecting Shopify, WooCommerce, or custom stores to the WMS with real-time inventory sync, (3) Product Onboarding — bulk catalog upload with localized descriptions and compliance labeling, (4) Fulfillment Activation — go-live with automated pick-and-pack from the Rotterdam warehouse. The typical timeline is 2-4 weeks from start to first order.",
        },
      },
      {
        "@type": "Question",
        name: "What is Amazon Multi-Channel Fulfillment (MCF) for EU5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Amazon Multi-Channel Fulfillment (MCF) allows sellers to fulfill orders from non-Amazon channels (Shopify, own website) using Amazon's EU5 fulfillment network across UK, Germany, France, Italy, and Spain. eufta.in provides full MCF integration with pan-European inventory management, Prime eligibility, and automated returns processing.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 py-20">
          <div className="absolute inset-0 bg-grid-modern [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Marketplace Enablement", href: "/marketplace-enablement" },
              ]}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-blue-300 mt-6 mb-4">
                6 Platforms Integrated
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Marketplace <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">Enablement</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">
                Direct fulfillment into Europe&apos;s largest e-commerce platforms from a single Rotterdam hub
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <AnswerNugget content="Next-day delivery across Western Europe from our Rotterdam hub. Automated pick-and-pack integrated with Shopify and Amazon. Per-order costs under €3.00." />

          {/* Service Pricing Overview */}
          <section className="mt-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900">
                3PL Service Architecture
              </h2>
              <p className="mt-3 text-slate-600">Competitive rates for all fulfillment services</p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {pricingCards.map((card, index) => (
                <motion.div
                  key={card.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 absolute top-0 left-0 right-0" />
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    {card.name}
                  </h3>
                  <p className="text-2xl font-extrabold bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent mb-1">
                    {card.price}
                  </p>
                  <p className="text-xs text-slate-400 line-through mb-1">
                    {card.market}
                  </p>
                  <p className="text-xs text-slate-500">
                    {card.unit}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Marketplace Grid */}
          <section className="mt-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Integrated Marketplaces
              </h2>
              <p className="mt-3 text-slate-600">Reach 1 billion+ monthly visitors across Europe</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {marketplaces.map((marketplace, index) => (
                <motion.div
                  key={marketplace.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${marketplace.gradient}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold text-slate-900">
                        {marketplace.name}
                      </h3>
                      <span className={`rounded-full bg-gradient-to-r ${marketplace.gradient} px-3 py-1 text-xs font-bold text-white shadow-sm`}>
                        {marketplace.visitors}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                      {marketplace.description}
                    </p>
                    <div className="border-t border-slate-100 pt-4 mb-4">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Integration
                      </p>
                      <p className="text-sm text-slate-700 font-medium">
                        {marketplace.integration}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {marketplace.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start text-sm text-slate-600 gap-2"
                        >
                          <div className={`flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br ${marketplace.gradient} text-white flex-shrink-0 mt-0.5`}>
                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Integration Steps */}
          <section className="mt-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Integration Process
              </h2>
              <p className="mt-3 text-slate-600">Get live on European marketplaces in 4 simple steps</p>
            </div>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Account Setup",
                  description: "We assist with marketplace account creation and verification. For platforms like Otto, we handle the €10k signup fee coordination.",
                  gradient: "from-cyan-500 to-blue-600",
                },
                {
                  step: "2",
                  title: "API Integration",
                  description: "Connect your Shopify, WooCommerce, or custom store to our WMS. Real-time inventory sync across all marketplaces.",
                  gradient: "from-indigo-500 to-violet-600",
                },
                {
                  step: "3",
                  title: "Product Onboarding",
                  description: "Bulk upload product catalogs with localized descriptions. We handle translation and compliance labeling.",
                  gradient: "from-violet-500 to-purple-600",
                },
                {
                  step: "4",
                  title: "Fulfillment Activation",
                  description: "Go live with automated pick-and-pack. Orders flow directly from marketplaces to our Rotterdam warehouse.",
                  gradient: "from-blue-500 to-indigo-600",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white font-bold text-lg shadow-lg`}>
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* B2B Sales Support */}
          <section className="mt-20">
            <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-cyan-50/50 to-white p-8 shadow-lg">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                B2B Sales & Regional Language Support
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Outsourced SDR teams fluent in German, French, and Dutch manage
                professional outreach to wholesalers who value direct communication
                and punctuality. This model converts fixed labor costs into
                variable, performance-linked service fees.
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {[
                  { market: "German Market", desc: "Native German SDRs for DACH region wholesale outreach", gradient: "from-cyan-500 to-blue-600" },
                  { market: "French Market", desc: "French-speaking team for Benelux and France B2B sales", gradient: "from-indigo-500 to-violet-600" },
                  { market: "Dutch Market", desc: "Local Dutch support for Rotterdam-based wholesale clients", gradient: "from-blue-500 to-indigo-600" },
                ].map((item, idx) => (
                  <div key={idx} className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
                    <div className={`h-1 bg-gradient-to-r ${item.gradient} absolute top-0 left-0 right-0`} />
                    <p className="font-bold text-slate-900 mt-2">{item.market}</p>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-20 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-12 text-center">
            <div className="absolute inset-0 bg-grid-modern [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Ready to Go Live on European Marketplaces?
              </h2>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                Start selling on Amazon EU5, Zalando, Allegro, and more from a single Rotterdam hub
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  Estimate Costs
                  <IconArrow />
                </Link>
                <Link
                  href="mailto:info@eufta.in"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-cyan-400/30 bg-white/5 backdrop-blur-md px-8 py-4 text-base font-semibold text-white hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300"
                >
                  Contact Sales
                  <IconArrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
