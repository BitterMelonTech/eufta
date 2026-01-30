import { Metadata } from "next";
import AnswerNugget from "../components/AnswerNugget";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Compliance Bridge | EFSA Novel Foods, EMA QP Release, REACH | eufta.in",
  description: "Expert management of EFSA Novel Food registrations and EMA medicinal QP release. We decipher REACH and CBAM regulations to prevent customs seizures.",
};

const complianceAreas = [
  {
    category: "Food, Ayush, and Wellness",
    regulation: "Regulation (EU) 2015/2283 (Novel Foods)",
    problem:
      "Traditional Indian ingredients (e.g., Ashwagandha) often lack a 'safe history of consumption' in the EU pre-May 1997.",
    solution:
      "We manage the Article 4 Consultation to prove safe use or guide brands through the 9–24 month EFSA dossier approval process.",
    steps: [
      "Initial ingredient assessment and EU pre-1997 consumption history research",
      "Article 4 Consultation submission to EFSA",
      "Dossier preparation (9-24 months) if novel food status confirmed",
      "Health claims audit per Regulation EC 1924/2006",
      "Packaging compliance verification",
    ],
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
  },
];

export default function ComplianceBridge() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Compliance Bridge",
    description:
      "Expert management of EFSA Novel Food registrations and EMA medicinal QP release. We decipher REACH and CBAM regulations.",
    serviceType: "Regulatory Compliance",
    areaServed: "European Union",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Compliance Bridge", href: "/compliance-bridge" },
            ]}
          />
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Compliance Bridge
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Deciphering complex EU regulations to prevent customs seizures
              and ensure smooth market entry
            </p>
          </div>

          <AnswerNugget content="Expert management of EFSA Novel Food registrations and EMA medicinal QP release. We decipher REACH and CBAM regulations to prevent customs seizures." />

          {/* Problem Statement */}
          <div className="mt-12 rounded-lg border border-red-200 bg-red-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              The Compliance Challenge
            </h2>
            <p className="mt-4 text-slate-700">
              Unmanaged exporters face 23% higher supply chain costs due to
              regulatory hurdles. Customs seizures, border delays, and
              non-compliance penalties can derail market entry. eufta.in acts as
              your regulatory bridge, translating complex EU requirements into
              actionable compliance pathways.
            </p>
          </div>

          {/* Compliance Areas */}
          <div className="mt-12 space-y-12">
            {complianceAreas.map((area, index) => (
              <div
                key={area.category}
                className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {area.category}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-emerald-600">
                    {area.regulation}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold text-red-700">
                      The Problem
                    </h3>
                    <p className="mt-2 text-slate-600">{area.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-700">
                      eufta.in Solution
                    </h3>
                    <p className="mt-2 text-slate-600">{area.solution}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Step-by-Step Process
                  </h3>
                  <ol className="mt-4 space-y-4">
                    {area.steps.map((step, stepIndex) => (
                      <li
                        key={stepIndex}
                        className="flex gap-4 rounded-lg bg-slate-50 p-4"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white">
                          {stepIndex + 1}
                        </span>
                        <span className="text-slate-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Regulations */}
          <div className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Additional Regulatory Support
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  CE Certification
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Technical safety file audit and CE marking for engineering
                  goods, electronics, and machinery.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Toy Safety Directive
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  EN 71 standards verification for toys and sports goods
                  entering the EU market.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Border Control Posts (BCP)
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Veterinary inspection and clearance for marine products and
                  food imports.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Origin Certification
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Rules of Origin documentation and "Change in Tariff Heading"
                  verification for FTA benefits.
                </p>
              </div>
            </div>
          </div>

          {/* Cost Impact */}
          <div className="mt-12 rounded-lg border border-emerald-200 bg-emerald-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              The Cost of Non-Compliance
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6">
                <p className="text-sm font-medium text-slate-600">
                  Customs Seizures
                </p>
                <p className="mt-2 text-2xl font-bold text-red-600">
                  23% Higher
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Supply chain costs for unmanaged exporters
                </p>
              </div>
              <div className="rounded-lg bg-white p-6">
                <p className="text-sm font-medium text-slate-600">
                  Border Delays
                </p>
                <p className="mt-2 text-2xl font-bold text-red-600">
                  5-15 Days
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Average delay for non-compliant shipments
                </p>
              </div>
              <div className="rounded-lg bg-white p-6">
                <p className="text-sm font-medium text-slate-600">
                  Penalty Risk
                </p>
                <p className="mt-2 text-2xl font-bold text-red-600">
                  Up to 10%
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Of shipment value for regulatory violations
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-lg bg-slate-900 px-8 py-12 text-center">
            <h2 className="text-2xl font-bold text-white">
              Navigate EU Regulations with Confidence
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Let eufta.in be your compliance bridge. We handle the regulatory
              complexity so you can focus on growing your European market share.
            </p>
            <div className="mt-8">
              <a
                href="mailto:info@eufta.in"
                className="rounded-md bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-500"
              >
                Schedule Compliance Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
