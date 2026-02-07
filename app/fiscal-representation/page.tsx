import { Metadata } from "next";
import AnswerNugget from "../components/AnswerNugget";
import VATCalculator from "../components/VATCalculator";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Fiscal Representation | Article 23 VAT Deferment | eufta.in",
  description: "Access Article 23 VAT Deferment via our General Fiscal Representation. Eliminate the 21% upfront VAT burden at the border and improve cash flow instantly.",
};

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
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              {
                label: "Fiscal Representation",
                href: "/fiscal-representation",
              },
            ]}
          />
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Fiscal Representation & Article 23 VAT Deferment
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Eliminate the 21% upfront VAT burden and improve cash flow
              instantly
            </p>
          </div>

          <AnswerNugget content="Access Article 23 VAT Deferment via our General Fiscal Representation. Eliminate the 21% upfront VAT burden at the border and improve cash flow instantly." />

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Main Content */}
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  What is Article 23 VAT Deferment?
                </h2>
                <p className="mt-4 text-slate-600">
                  The most powerful tool for Indian D2C brands entering the EU
                  market is the Article 23 VAT Deferment license. This Dutch
                  fiscal mechanism transforms your import cash flow.
                </p>
                <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Standard Rule vs. Article 23 Rule
                  </h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="text-sm font-medium text-slate-700">
                        Standard Rule:
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        Pay 21% VAT at the border. This creates an immediate
                        cash flow burden for importers.
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-cyan-700">
                        Article 23 Rule:
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        VAT is recorded as a "reverse charge" in the periodic
                        return. Net effect on cash flow: Zero upfront burden.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  General Fiscal Representation
                </h2>
                <p className="mt-4 text-slate-600">
                  eufta.in obtains Dutch VAT numbers for exporters and manages
                  all quarterly filings, removing the need for a local Dutch
                  office. This service converts complex fiscal requirements into
                  a simple monthly retainer.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 text-cyan-600">✓</span>
                    <span className="text-slate-600">
                      Dutch VAT number registration and management
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-cyan-600">✓</span>
                    <span className="text-slate-600">
                      Quarterly VAT return filing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-cyan-600">✓</span>
                    <span className="text-slate-600">
                      Article 23 license application and maintenance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-cyan-600">✓</span>
                    <span className="text-slate-600">
                      No requirement for local Dutch office
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900">
                  Service Pricing
                </h2>
                <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">
                        Fiscal Representation Retainer
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        Monthly retainer for Article 23 management
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-cyan-600">
                        €150
                      </p>
                      <p className="text-xs text-slate-500">per month</p>
                      <p className="mt-2 text-xs text-slate-500 line-through">
                        Market rate: €250+
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Calculator Sidebar */}
            <div>
              <VATCalculator />
              <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  Real-World Example
                </h3>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <p>
                    <strong className="text-slate-900">Monthly Import:</strong>{" "}
                    €50,000
                  </p>
                  <p>
                    <strong className="text-slate-900">
                      Standard VAT (21%):
                    </strong>{" "}
                    €10,500 upfront payment
                  </p>
                  <p>
                    <strong className="text-cyan-600">
                      Article 23 Benefit:
                    </strong>{" "}
                    €10,500 deferred to periodic return
                  </p>
                  <p className="mt-4 text-xs text-slate-500">
                    This improves working capital and eliminates border payment
                    delays.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-lg bg-slate-900 px-8 py-12 text-center">
            <h2 className="text-2xl font-bold text-white">
              Ready to Eliminate Upfront VAT?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Contact us to set up your Article 23 VAT Deferment and General
              Fiscal Representation
            </p>
            <div className="mt-8">
              <a
                href="mailto:info@eufta.in"
                className="rounded-md bg-cyan-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-cyan-500"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
