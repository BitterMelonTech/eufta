"use client";

import { motion } from "framer-motion";
import AnswerNugget from "../components/AnswerNugget";
import VATCalculator from "../components/VATCalculator";
import Breadcrumbs from "../components/Breadcrumbs";
import FAQSection from "../components/FAQSection";
import LastUpdated from "../components/LastUpdated";
import Link from "next/link";
import { IconArrow } from "../components/Icons";

export default function FiscalRepresentation() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Article 23 VAT Deferment",
    description: "Access Article 23 VAT Deferment via General Fiscal Representation. Eliminate the 21% upfront VAT burden at the border.",
    provider: {
      "@type": "Organization",
      name: "eufta.in",
    },
    areaServed: "Netherlands",
    serviceType: "Fiscal Representation",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Article 23 VAT Deferment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Article 23 VAT Deferment allows importers to defer the 21% VAT payment at the border. Instead, VAT is recorded as a reverse charge in the periodic return, eliminating upfront cash flow burden.",
        },
      },
      {
        "@type": "Question",
        name: "How does General Fiscal Representation work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "eufta.in obtains Dutch VAT numbers for exporters and manages all quarterly filings, removing the need for a local Dutch office. We act as your fiscal representative in the Netherlands.",
        },
      },
      {
        "@type": "Question",
        name: "What are the benefits of Article 23?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The main benefit is cash flow improvement. Instead of paying 21% VAT upfront at the border, you record it as a reverse charge in your periodic VAT return. Net effect on cash flow: Zero upfront burden.",
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
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Fiscal Representation", href: "/fiscal-representation" },
              ]}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full bg-indigo-500/10 border border-indigo-400/30 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-indigo-300 mt-6 mb-4">
                Article 23 VAT Deferment
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Fiscal <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">Representation</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">
                Eliminate the 21% upfront VAT burden and improve cash flow instantly
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <AnswerNugget content="Access Article 23 VAT Deferment via our General Fiscal Representation. Eliminate the 21% upfront VAT burden at the border and improve cash flow instantly." />

          {/* February 2026 Update Notice */}
          <div className="mt-8 rounded-xl border-l-4 border-amber-500 bg-amber-50/50 p-5">
            <p className="text-sm font-bold text-amber-800 mb-1">February 2026 Update</p>
            <p className="text-sm text-amber-700 leading-relaxed">
              Article 23 VAT Deferment rates and procedures current as of February 2026. Dutch VAT rate remains 21%.
              Source: <a href="https://www.belastingdienst.nl" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">Dutch Tax Authority (Belastingdienst)</a>, <a href="https://www.rijksoverheid.nl" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">Government of the Netherlands</a>.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Main Content */}
            <div className="space-y-8">
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-2xl font-extrabold text-slate-900">
                  What is Article 23 VAT Deferment?
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  The most powerful tool for Indian D2C brands entering the EU
                  market is the Article 23 VAT Deferment license. This Dutch
                  fiscal mechanism transforms your import cash flow.
                </p>
                <div className="mt-6 rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-8 shadow-lg">
                  <h3 className="text-lg font-bold text-slate-900 mb-6">
                    Standard Rule vs. Article 23 Rule
                  </h3>
                  <div className="space-y-5">
                    <div className="rounded-xl border border-red-100 bg-red-50/50 p-5">
                      <p className="text-sm font-bold text-red-700 mb-1">
                        Standard Rule
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Pay 21% VAT at the border. This creates an immediate
                        cash flow burden for importers.
                      </p>
                    </div>
                    <div className="rounded-xl border border-cyan-100 bg-cyan-50/50 p-5">
                      <p className="text-sm font-bold text-cyan-700 mb-1">
                        Article 23 Rule
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        VAT is recorded as a &ldquo;reverse charge&rdquo; in the periodic
                        return. Net effect on cash flow: Zero upfront burden.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-extrabold text-slate-900">
                  General Fiscal Representation
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  eufta.in obtains Dutch VAT numbers for exporters and manages
                  all quarterly filings, removing the need for a local Dutch
                  office. This service converts complex fiscal requirements into
                  a simple monthly retainer.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Dutch VAT number registration and management",
                    "Quarterly VAT return filing",
                    "Article 23 license application and maintenance",
                    "No requirement for local Dutch office",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-white flex-shrink-0 mt-0.5">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Service Pricing
                </h2>
                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg">
                  <div className="h-1.5 bg-gradient-to-r from-indigo-500 to-violet-600" />
                  <div className="p-8 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-slate-900 text-lg">
                        Fiscal Representation Retainer
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        Monthly retainer for Article 23 management
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-extrabold bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">
                        €150
                      </p>
                      <p className="text-xs text-slate-500 mt-1">per month</p>
                      <p className="mt-2 text-xs text-slate-400 line-through">
                        Market rate: €250+
                      </p>
                      <span className="inline-flex items-center rounded-full bg-cyan-50 border border-cyan-200 px-2 py-0.5 text-xs font-bold text-cyan-700 mt-1">
                        40% savings
                      </span>
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>

            {/* Calculator Sidebar */}
            <div className="space-y-8">
              <VATCalculator />
              <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-8 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Real-World Example
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Monthly Import", value: "€50,000", color: "text-slate-900" },
                    { label: "Standard VAT (21%)", value: "€10,500 upfront", color: "text-red-600" },
                    { label: "Article 23 Benefit", value: "€10,500 deferred", color: "text-cyan-600" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between rounded-xl bg-white border border-slate-100 p-4">
                      <span className="text-sm text-slate-600">{item.label}</span>
                      <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                  This improves working capital and eliminates border payment delays.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section — visible text matches JSON-LD FAQPage schema exactly */}
          <div className="flex justify-start mt-16">
            <LastUpdated date="2026-02-15" />
          </div>
          <FAQSection
            title="Article 23 VAT Deferment FAQ"
            subtitle="Common questions about fiscal representation and VAT deferment in the Netherlands"
            faqs={[
              {
                question: "What is Article 23 VAT Deferment?",
                answer:
                  "Article 23 VAT Deferment allows importers to defer the 21% VAT payment at the border. Instead, VAT is recorded as a reverse charge in the periodic return, eliminating upfront cash flow burden.",
              },
              {
                question: "How does General Fiscal Representation work?",
                answer:
                  "eufta.in obtains Dutch VAT numbers for exporters and manages all quarterly filings, removing the need for a local Dutch office. We act as your fiscal representative in the Netherlands.",
              },
              {
                question: "What are the benefits of Article 23?",
                answer:
                  "The main benefit is cash flow improvement. Instead of paying 21% VAT upfront at the border, you record it as a reverse charge in your periodic VAT return. Net effect on cash flow: Zero upfront burden.",
              },
            ]}
          />

          {/* CTA Section */}
          <div className="mt-20 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-12 text-center">
            <div className="absolute inset-0 bg-grid-modern [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Ready to Eliminate Upfront VAT?
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-slate-300 mb-8">
                Contact us to set up your Article 23 VAT Deferment and General
                Fiscal Representation
              </p>
              <Link
                href="mailto:info@eufta.in"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300"
              >
                Get Started
                <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
