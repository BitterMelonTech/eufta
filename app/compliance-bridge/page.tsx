"use client";

import { motion } from "framer-motion";
import AnswerNugget from "../components/AnswerNugget";
import Breadcrumbs from "../components/Breadcrumbs";
import FAQSection from "../components/FAQSection";
import LastUpdated from "../components/LastUpdated";
import Link from "next/link";
import { IconArrow } from "../components/Icons";

const complianceAreas = [
  {
    category: "Food, Ayush, and Wellness",
    regulation: "Regulation (EU) 2015/2283 (Novel Foods)",
    problem:
      "Traditional Indian ingredients (e.g., Ashwagandha) often lack a 'safe history of consumption' in the EU pre-May 1997.",
    solution:
      "We manage the Article 4 Consultation to prove safe use or guide brands through the 9-24 month EFSA dossier approval process.",
    steps: [
      "Initial ingredient assessment and EU pre-1997 consumption history research",
      "Article 4 Consultation submission to EFSA",
      "Dossier preparation (9-24 months) if novel food status confirmed",
      "Health claims audit per Regulation EC 1924/2006",
      "Packaging compliance verification",
    ],
    gradient: "from-cyan-500 to-blue-600",
    icon: "F",
  },
  {
    category: "Medicinal and Herbal Products",
    regulation: "Annex 21 (Importation of Medicinal Products)",
    problem:
      "Each batch of medicinal products requires EU-based Qualified Person (QP) certification before market release.",
    solution:
      "QP-certified batch release in Rotterdam after lab testing. We assist manufacturers in maintaining EU-GMP standards through pre-inspection audits.",
    steps: [
      "GMP site audit preparation and gap analysis",
      "Batch documentation review and quality control",
      "Lab testing coordination in Rotterdam",
      "QP batch release certification",
      "Market release authorization",
    ],
    gradient: "from-indigo-500 to-violet-600",
    icon: "M",
  },
  {
    category: "Chemicals and Plastics",
    regulation: "Regulation (EC) 1907/2006 (REACH)",
    problem:
      "Non-EU manufacturers cannot register chemicals directly with ECHA. The 19.5% registration fee increase (late 2025) adds complexity.",
    solution:
      "eufta.in acts as your Only Representative (OR), handling all ECHA registrations and managing fee structures.",
    steps: [
      "Only Representative (OR) appointment and registration",
      "ECHA dossier preparation and submission",
      "Fee management (including 19.5% increase for large companies)",
      "Ongoing compliance monitoring and updates",
      "Downstream user communication",
    ],
    gradient: "from-violet-500 to-purple-600",
    icon: "C",
  },
  {
    category: "Textiles and Apparel",
    regulation: "CBAM (Carbon Border Adjustment Mechanism)",
    problem:
      "Mandatory carbon footprint reporting for textile imports. Non-compliance results in customs delays and penalties.",
    solution:
      "We manage CBAM reporting requirements, calculate carbon footprints, and ensure timely submission to prevent border issues.",
    steps: [
      "Carbon footprint calculation per product category",
      "CBAM reporting documentation preparation",
      "Quarterly submission to EU authorities",
      "Compliance verification and audit support",
    ],
    gradient: "from-teal-500 to-cyan-600",
    icon: "T",
  },
];

export default function ComplianceBridge() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Compliance Bridge",
    description:
      "Expert management of EFSA Novel Food registrations and EMA medicinal QP release. We decipher REACH and CBAM regulations.",
    provider: {
      "@type": "Organization",
      name: "eufta.in",
      url: "https://eufta.in",
    },
    serviceType: "Regulatory Compliance",
    areaServed: "European Union",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What EU regulations do Indian exporters need to comply with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Indian exporters to the EU must comply with several regulations depending on their product: EFSA Novel Food (Regulation EU 2015/2283) for food and Ayush wellness products, EMA Annex 21 for medicinal products requiring QP batch release, REACH (Regulation EC 1907/2006) for chemicals requiring an Only Representative (OR), CBAM for mandatory carbon footprint reporting on textiles, CE certification for engineering goods, and EN 71 Toy Safety Directive for toys and sports goods.",
        },
      },
      {
        "@type": "Question",
        name: "What is a REACH Only Representative (OR) and why do Indian companies need one?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non-EU manufacturers cannot register chemicals directly with ECHA (European Chemicals Agency). A REACH Only Representative (OR) is an EU-based entity that handles all ECHA registrations on behalf of the non-EU manufacturer. eufta.in acts as OR for Indian chemical and plastics exporters, managing dossier preparation, fee structures (including the 19.5% registration fee increase from late 2025), and ongoing compliance monitoring.",
        },
      },
      {
        "@type": "Question",
        name: "How long does EFSA Novel Food registration take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EFSA Novel Food registration typically takes 9-24 months. The process begins with an Article 4 Consultation to determine if the ingredient has a safe history of consumption in the EU pre-May 1997. If classified as novel, a full EFSA dossier is required. eufta.in manages the entire process including initial ingredient assessment, Article 4 submission, dossier preparation, and health claims audit per Regulation EC 1924/2006.",
        },
      },
      {
        "@type": "Question",
        name: "What is CBAM and how does it affect Indian textile exports to the EU?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CBAM (Carbon Border Adjustment Mechanism) requires mandatory carbon footprint reporting for certain imports into the EU, including textiles. Indian textile exporters must calculate the carbon footprint per product category, prepare CBAM reporting documentation, and submit quarterly reports to EU authorities. Non-compliance results in customs delays and penalties of up to 10% of shipment value.",
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
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Compliance Bridge", href: "/compliance-bridge" },
              ]}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full bg-violet-500/10 border border-violet-400/30 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-violet-300 mt-6 mb-4">
                EFSA / EMA / REACH / CBAM
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Compliance <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">Bridge</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">
                Deciphering complex EU regulations to prevent customs seizures and ensure smooth market entry
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <AnswerNugget content="Expert management of EFSA Novel Food registrations and EMA medicinal QP release. We decipher REACH and CBAM regulations to prevent customs seizures." />

          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-12 relative overflow-hidden rounded-2xl border border-red-200/80 bg-gradient-to-br from-red-50/80 to-white p-8 shadow-lg"
          >
            <div className="h-1 bg-gradient-to-r from-red-500 to-orange-500 absolute top-0 left-0 right-0" />
            <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
              The Compliance Challenge
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Unmanaged exporters face 23% higher supply chain costs due to
              regulatory hurdles. Customs seizures, border delays, and
              non-compliance penalties can derail market entry. eufta.in acts as
              your regulatory bridge, translating complex EU requirements into
              actionable compliance pathways.
            </p>
          </motion.div>

          {/* Compliance Areas */}
          <div className="mt-16 space-y-8">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={area.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`h-1.5 bg-gradient-to-r ${area.gradient}`} />
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${area.gradient} text-white font-bold text-lg shadow-lg flex-shrink-0`}>
                      {area.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-extrabold text-slate-900">
                        {area.category}
                      </h2>
                      <p className="mt-1 text-sm font-semibold bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">
                        {area.regulation}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
                    <div className="rounded-xl border border-red-100 bg-red-50/50 p-6">
                      <h3 className="text-sm font-bold text-red-700 mb-2 uppercase tracking-wider">
                        The Problem
                      </h3>
                      <p className="text-slate-700 leading-relaxed">{area.problem}</p>
                    </div>
                    <div className="rounded-xl border border-cyan-100 bg-cyan-50/50 p-6">
                      <h3 className="text-sm font-bold text-cyan-700 mb-2 uppercase tracking-wider">
                        eufta.in Solution
                      </h3>
                      <p className="text-slate-700 leading-relaxed">{area.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">
                      Step-by-Step Process
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {area.steps.map((step, stepIndex) => (
                        <div
                          key={stepIndex}
                          className="flex gap-3 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 p-4"
                        >
                          <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${area.gradient} text-xs font-bold text-white shadow-sm`}>
                            {stepIndex + 1}
                          </span>
                          <span className="text-sm text-slate-700 leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Regulations */}
          <section className="mt-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Additional Regulatory Support
              </h2>
              <p className="mt-3 text-slate-600">Comprehensive coverage across all compliance requirements</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { title: "CE Certification", desc: "Technical safety file audit and CE marking for engineering goods, electronics, and machinery.", gradient: "from-cyan-500 to-blue-600" },
                { title: "Toy Safety Directive", desc: "EN 71 standards verification for toys and sports goods entering the EU market.", gradient: "from-indigo-500 to-violet-600" },
                { title: "Border Control Posts (BCP)", desc: "Veterinary inspection and clearance for marine products and food imports.", gradient: "from-violet-500 to-purple-600" },
                { title: "Origin Certification", desc: "Rules of Origin documentation and 'Change in Tariff Heading' verification for FTA benefits.", gradient: "from-blue-500 to-indigo-600" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`h-1 bg-gradient-to-r ${item.gradient} absolute top-0 left-0 right-0`} />
                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Cost Impact */}
          <section className="mt-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900">
                The Cost of Non-Compliance
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { label: "Customs Seizures", value: "23% Higher", sub: "Supply chain costs for unmanaged exporters", color: "from-red-500 to-orange-500" },
                { label: "Border Delays", value: "5-15 Days", sub: "Average delay for non-compliant shipments", color: "from-orange-500 to-amber-500" },
                { label: "Penalty Risk", value: "Up to 10%", sub: "Of shipment value for regulatory violations", color: "from-red-600 to-red-500" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-lg text-center"
                >
                  <div className={`h-1 bg-gradient-to-r ${item.color} absolute top-0 left-0 right-0`} />
                  <p className="text-sm font-semibold text-slate-500 mt-2 mb-3">
                    {item.label}
                  </p>
                  <p className="text-3xl font-extrabold text-red-600 mb-2">
                    {item.value}
                  </p>
                  <p className="text-xs text-slate-500">
                    {item.sub}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* FAQ Section — visible text matches JSON-LD FAQPage schema exactly */}
          <div className="flex justify-start mt-16">
            <LastUpdated date="2026-02-15" />
          </div>
          <FAQSection
            title="EU Compliance FAQ for Indian Exporters"
            subtitle="Direct answers about EFSA, REACH, CBAM, and other EU regulatory requirements"
            faqs={[
              {
                question: "What EU regulations do Indian exporters need to comply with?",
                answer:
                  "Indian exporters to the EU must comply with several regulations depending on their product: EFSA Novel Food (Regulation EU 2015/2283) for food and Ayush wellness products, EMA Annex 21 for medicinal products requiring QP batch release, REACH (Regulation EC 1907/2006) for chemicals requiring an Only Representative (OR), CBAM for mandatory carbon footprint reporting on textiles, CE certification for engineering goods, and EN 71 Toy Safety Directive for toys and sports goods.",
              },
              {
                question: "What is a REACH Only Representative (OR) and why do Indian companies need one?",
                answer:
                  "Non-EU manufacturers cannot register chemicals directly with ECHA (European Chemicals Agency). A REACH Only Representative (OR) is an EU-based entity that handles all ECHA registrations on behalf of the non-EU manufacturer. eufta.in acts as OR for Indian chemical and plastics exporters, managing dossier preparation, fee structures (including the 19.5% registration fee increase from late 2025), and ongoing compliance monitoring.",
              },
              {
                question: "How long does EFSA Novel Food registration take?",
                answer:
                  "EFSA Novel Food registration typically takes 9-24 months. The process begins with an Article 4 Consultation to determine if the ingredient has a safe history of consumption in the EU pre-May 1997. If classified as novel, a full EFSA dossier is required. eufta.in manages the entire process including initial ingredient assessment, Article 4 submission, dossier preparation, and health claims audit per Regulation EC 1924/2006.",
              },
              {
                question: "What is CBAM and how does it affect Indian textile exports to the EU?",
                answer:
                  "CBAM (Carbon Border Adjustment Mechanism) requires mandatory carbon footprint reporting for certain imports into the EU, including textiles. Indian textile exporters must calculate the carbon footprint per product category, prepare CBAM reporting documentation, and submit quarterly reports to EU authorities. Non-compliance results in customs delays and penalties of up to 10% of shipment value.",
              },
            ]}
          />

          {/* CTA */}
          <div className="mt-20 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-12 text-center">
            <div className="absolute inset-0 bg-grid-modern [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Navigate EU Regulations with Confidence
              </h2>
              <p className="mx-auto max-w-2xl text-slate-300 mb-8">
                Let eufta.in be your compliance bridge. We handle the regulatory
                complexity so you can focus on growing your European market share.
              </p>
              <Link
                href="mailto:info@eufta.in"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300"
              >
                Schedule Compliance Consultation
                <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
