import { Metadata } from "next";
import AnswerNugget from "../components/AnswerNugget";
import Breadcrumbs from "../components/Breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "India-EU FTA 2026: Final Agreement Text & Complete Tariff Schedules",
  description: "Access the complete final text of the India-EU Free Trade Agreement signed on January 27, 2026. Includes all tariff elimination schedules, service sector openings, and compliance requirements.",
};

export default function FinalText() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "India-EU FTA 2026: Final Agreement Text",
    description:
      "Complete final text of the India-EU Free Trade Agreement signed on January 27, 2026",
    datePublished: "2026-01-27",
    author: {
      "@type": "Organization",
      name: "eufta.in",
    },
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
              { label: "Final Agreement Text", href: "/final-text" },
            ]}
          />
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              India-EU FTA 2026: Final Agreement Text
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Complete official documentation of the Free Trade Agreement signed
              on January 27, 2026
            </p>
          </div>

          <AnswerNugget content="The final text of the India-EU FTA 2026 includes complete tariff elimination schedules, 144 open service sectors, professional mobility provisions, and all compliance requirements. Officially signed on January 27, 2026." />

          <div className="mt-12 space-y-8">
            {/* Agreement Overview */}
            <section className="rounded-lg border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Agreement Overview
              </h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  The India-European Union Free Trade Agreement was officially
                  signed on <strong>January 27, 2026</strong>, following nearly
                  two decades of negotiations. This comprehensive agreement
                  represents the largest trade deal for both parties.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="rounded-lg bg-white p-4">
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Key Statistics
                    </h3>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• EU Tariff Elimination: 99.5%</li>
                      <li>• India Tariff Elimination: 92.1%</li>
                      <li>• Service Sectors Opened: 144</li>
                      <li>• Combined GDP: USD 24 Trillion</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Agreement Chapters
                    </h3>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Trade in Goods</li>
                      <li>• Trade in Services</li>
                      <li>• Investment</li>
                      <li>• Intellectual Property</li>
                      <li>• Sustainable Development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Content */}
            <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Related Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/fta-industries"
                  className="rounded-lg bg-white p-4 border border-emerald-200 hover:border-emerald-400 transition-colors"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Sector Impact 2026
                  </h3>
                  <p className="text-sm text-slate-600">
                    Detailed duty rates and compliance requirements by industry
                  </p>
                </Link>
                <Link
                  href="/"
                  className="rounded-lg bg-white p-4 border border-emerald-200 hover:border-emerald-400 transition-colors"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Budget 2026 Impact
                  </h3>
                  <p className="text-sm text-slate-600">
                    Analysis of Union Budget 2026-27 impact on FTA tariff lines
                  </p>
                </Link>
                <Link
                  href="/compliance-bridge"
                  className="rounded-lg bg-white p-4 border border-emerald-200 hover:border-emerald-400 transition-colors"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Compliance Requirements
                  </h3>
                  <p className="text-sm text-slate-600">
                    EFSA, EMA, REACH, and CBAM compliance guides
                  </p>
                </Link>
                <Link
                  href="/fiscal-representation"
                  className="rounded-lg bg-white p-4 border border-emerald-200 hover:border-emerald-400 transition-colors"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Fiscal Representation
                  </h3>
                  <p className="text-sm text-slate-600">
                    Article 23 VAT Deferment and tax compliance
                  </p>
                </Link>
              </div>
            </section>

            {/* Download Section */}
            <section className="rounded-lg border-2 border-slate-200 bg-white p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Download Complete Documentation
              </h2>
              <p className="text-slate-600 mb-6">
                Get the full 2026 Tariff Schedule PDF with all sector details,
                staging periods, and compliance requirements.
              </p>
              <Link
                href="/"
                className="inline-flex items-center rounded-md bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors"
              >
                Download 2026 Tariff Schedule PDF
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
