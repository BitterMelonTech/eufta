import { Metadata } from "next";
import AnswerNugget from "./components/AnswerNugget";
import VATCalculator from "./components/VATCalculator";
import HeroSection from "./components/HeroSection";
import ValuePropositions from "./components/ValuePropositions";
import LocalizedContent from "./components/LocalizedContent";
import SectorImpact2026 from "./components/SectorImpact2026";
import ProfessionalMobility from "./components/ProfessionalMobility";
import RegionalImpact from "./components/RegionalImpact";
import ConversionTriggers from "./components/ConversionTriggers";
import { IconArrow } from "./components/Icons";

export const metadata: Metadata = {
  title: "India-EU FTA 2026: Official Duty Rates & Union Budget 2026 Impact",
  description: "Access the final duty elimination schedules from the Jan 2026 India-EU FTA. 0% duty on textiles, 10% car tariffs, and Budget 2026 customs updates.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "eufta.in",
    description: "Rotterdam-Indo Logistics Gateway for EU-India FTA 2026",
    url: "https://eufta.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rotterdam",
      addressCountry: "NL",
    },
    service: [
      {
        "@type": "Service",
        serviceType: "3PL Fulfillment",
        description: "Next-day delivery across Western Europe from our Rotterdam hub",
      },
      {
        "@type": "Service",
        serviceType: "Fiscal Representation",
        description: "Article 23 VAT Deferment via General Fiscal Representation",
      },
      {
        "@type": "Service",
        serviceType: "Compliance Bridge",
        description: "Expert management of EFSA Novel Food registrations and EMA medicinal QP release",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white">
        <HeroSection />

        {/* Answer Nugget */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <AnswerNugget content="The definitive Rotterdam bridge for Indian D2C and B2B brands to exploit the 2026 EU-India FTA. We provide physical warehousing, Article 23 VAT deferment, and pan-European marketplace enablement." />
        </section>

        <ValuePropositions />

        {/* FTA Impact Stats */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Budget 2026 Customs Relief: The 2026 EU-India FTA Impact
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
                Following nearly two decades of negotiations, this agreement represents more than just a tariff reduction; it is a geostrategic move to reduce over-reliance on traditional supply chains and integrate India into the European value-chain network. For the EU, it offers access to the world's most populous nation; for India, it provides a stable alternative to US-dominated trade corridors.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: "Combined GDP", value: "USD 24 Trillion" },
                { label: "Total Goods Trade", value: "USD 136.54 Billion" },
                {
                  label: "Indian Exports (Duty-Free)",
                  value: "$33 Billion",
                },
                { label: "EU Tariff Elimination", value: "99.5%" },
                { label: "India Tariff Elimination", value: "92.1%" },
                { label: "Annual Duty Savings (EU)", value: "EUR 4 Billion" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg bg-slate-50 p-6 text-center"
                >
                  <p className="text-2xl font-bold text-cyan-600">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Calculate Your Savings
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <VATCalculator />
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-slate-900">
                  Why Article 23 Matters
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 flex-shrink-0 mt-0.5">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>
                      Eliminate 21% upfront VAT payment at the border
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 flex-shrink-0 mt-0.5">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>
                      VAT recorded as reverse charge in periodic return
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 flex-shrink-0 mt-0.5">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Net effect on cash flow: Zero upfront burden</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 flex-shrink-0 mt-0.5">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>
                      General Fiscal Representation removes need for local Dutch
                      office
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Rotterdam Advantage */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Rotterdam: The Maritime Heart of Europe
              </h2>
            </div>
            <div className="mt-12">
              <div className="mx-auto max-w-3xl rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  Multimodal Connectivity
                </h3>
                <p className="mt-4 text-slate-600">
                  Reach <strong className="text-cyan-600">170 million consumers</strong> within 24 hours of docking at Rotterdam port. Our strategic location provides the fastest access to Western European markets.
                </p>
                <div className="mt-6 rounded-lg bg-cyan-50 p-4">
                  <p className="text-sm font-semibold text-cyan-900">
                    Green & Digital Shipping Corridor
                  </p>
                  <p className="mt-2 text-sm text-cyan-800">
                    Prioritized flow via the newly established India-Netherlands Green and Digital Shipping Corridor, supporting hydrogen and ammonia-fueled logistics for sustainable trade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bidirectional Flow - European Exports to India */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Bidirectional Flow: European Exports to India
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                eufta.in provides warehousing and consolidation for European brands exporting to India's 1.45 billion consumers
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  category: "Automotive",
                  description: "High-end vehicles (>$15k CIF)",
                  oldDuty: "110%",
                  newDuty: "10%",
                  timeline: "Over 5 years",
                  quota: "250k/year",
                },
                {
                  category: "Wines & Spirits",
                  description: "Premium and mid-range",
                  oldDuty: "150%",
                  newDuty: "20-30%",
                  timeline: "Immediate (halved to 75%)",
                  quota: "Eventually 20% premium, 30% mid-range",
                },
                {
                  category: "Processed Foods",
                  description: "Pasta, biscuits, chocolates, pet food",
                  oldDuty: "33-55%",
                  newDuty: "0%",
                  timeline: "Immediate",
                  quota: "Duty-free",
                },
                {
                  category: "Agri-Food",
                  description: "Olive oil, fruit juices",
                  oldDuty: "45-55%",
                  newDuty: "0%",
                  timeline: "5-year staging",
                  quota: "Gradual elimination",
                },
              ].map((item) => (
                <div
                  key={item.category}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.category}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {item.description}
                  </p>
                  <div className="mt-4 space-y-2 border-t border-slate-200 pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Previous:</span>
                      <span className="font-semibold text-red-600">
                        {item.oldDuty}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">New Duty:</span>
                      <span className="font-semibold text-cyan-600">
                        {item.newDuty}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-500">
                      {item.timeline}
          </p>
        </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sector Impact 2026 */}
        <SectorImpact2026 />

        {/* Professional Mobility */}
        <ProfessionalMobility />

        {/* Regional Impact */}
        <RegionalImpact />

        {/* Conversion Triggers */}
        <ConversionTriggers />

        {/* Localized Content */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <LocalizedContent />
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="bg-gradient-to-br from-slate-50 to-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                FTA Hub: Trade Intelligence & Export Guides
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                Expert insights, compliance guides, and regional strategies for Indian companies entering the European market
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "How to Export from India to EU in 2026",
                  category: "Export Guide",
                  link: "/blog/how-to-export-india-to-eu-2026",
                },
                {
                  title: "Article 23 VAT Deferment Guide",
                  category: "Fiscal Strategy",
                  link: "/blog/article-23-vat-deferment-guide",
                },
                {
                  title: "Gujarat Pharma Export to EU",
                  category: "Regional Focus",
                  link: "/blog/gujarat-pharma-export-eu",
                },
              ].map((post, index) => (
                <Link
                  key={index}
                  href={post.link}
                  className="group rounded-xl border border-cyan-200/50 bg-white p-6 shadow-sm hover:shadow-lg transition-all"
                >
                  <span className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-sm text-cyan-600 font-medium group-hover:gap-2 inline-flex items-center gap-1">
                    Read Article
                    <IconArrow />
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View All Blog Posts
                <IconArrow />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Enter the European Market?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Join Indian brands leveraging the 2026 EU-India FTA through our
              Rotterdam logistics gateway.
            </p>
            <div className="mt-8">
              <a
                href="mailto:info@eufta.in"
                className="rounded-md bg-cyan-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-cyan-500"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
    </div>
    </>
  );
}
