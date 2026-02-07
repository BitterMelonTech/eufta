import { Metadata } from "next";
import Link from "next/link";
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
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 py-28">
          <div className="absolute inset-0 bg-grid-modern [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-md px-4 py-2 text-sm font-semibold text-cyan-300 mb-6">
                Budget 2026 Customs Relief
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                The 2026 EU-India FTA Impact
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">
                Following nearly two decades of negotiations, this historic agreement unites two economic powerhouses representing 25% of global GDP and a combined market of nearly 2 billion people.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
              {[
                { label: "Combined GDP", value: "$24T", sub: "United States Dollars" },
                { label: "Bilateral Goods Trade", value: "$136.5B", sub: "FY 2025 Estimate" },
                { label: "Duty-Free Exports", value: "$33B", sub: "Immediate Access" },
                { label: "EU Tariff Elimination", value: "99.5%", sub: "By Trade Value" },
                { label: "India Tariff Lines", value: "92.1%", sub: "Eliminated" },
                { label: "Annual EU Savings", value: "€4B", sub: "Per Year" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">{stat.label}</p>
                    <p className="mt-1 text-xs text-slate-400">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-cyan-50/30 to-white py-28">
          <div className="absolute inset-0 bg-grid-modern [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-cyan-700 mb-6 shadow-sm">
                Cash Flow Tool
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Calculate Your VAT Savings
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                See how much cash flow you can unlock with Article 23 VAT Deferment
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <VATCalculator />
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-500" />
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Why Article 23 Matters
                </h3>
                <ul className="space-y-5 text-sm text-slate-600">
                  {[
                    { title: "Zero Upfront VAT", desc: "Eliminate 21% upfront VAT payment at the border" },
                    { title: "Reverse Charge", desc: "VAT recorded as reverse charge in periodic return" },
                    { title: "Improved Cash Flow", desc: "Net effect on cash flow: Zero upfront burden" },
                    { title: "No Local Office", desc: "Fiscal Representation removes need for Dutch office" },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 text-white flex-shrink-0 shadow-sm">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{item.title}</p>
                        <p className="text-slate-600 mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Rotterdam Advantage */}
        <section className="relative overflow-hidden bg-white py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div>
                <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50/80 px-4 py-2 text-sm font-medium text-cyan-700 mb-6 shadow-sm">
                  Strategic Location
                </span>
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
                  Rotterdam: Maritime
                  <span className="bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent"> Heart of Europe</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Reach <strong className="text-cyan-600">170 million consumers</strong> within 24 hours of docking at Europe&apos;s largest port. Our strategic location provides unmatched access to Western European markets.
                </p>
                <div className="rounded-xl bg-gradient-to-r from-cyan-50 to-cyan-100/50 p-6 border border-cyan-200/60 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-sm">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-cyan-900">
                      Green & Digital Shipping Corridor
                    </p>
                  </div>
                  <p className="text-sm text-cyan-800 leading-relaxed">
                    Prioritized flow via the India-Netherlands Green and Digital Shipping Corridor, supporting hydrogen and ammonia-fueled logistics for sustainable trade.
                  </p>
                </div>
              </div>
              
              {/* Right: Visual Stats */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-3xl blur-2xl" />
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-center shadow-xl">
                    <div className="text-3xl font-extrabold text-cyan-400 mb-1">170M</div>
                    <p className="text-xs text-slate-400 font-medium">Consumers within 24hrs</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-center shadow-xl">
                    <div className="text-3xl font-extrabold text-cyan-400 mb-1">15M+</div>
                    <p className="text-xs text-slate-400 font-medium">TEUs Handled Yearly</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-center shadow-xl">
                    <div className="text-3xl font-extrabold text-cyan-400 mb-1">24hr</div>
                    <p className="text-xs text-slate-400 font-medium">Delivery Western EU</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-500 p-6 text-center shadow-xl shadow-cyan-500/30">
                    <div className="text-3xl font-extrabold text-white mb-1">0%</div>
                    <p className="text-xs text-cyan-100 font-medium">VAT Cash Outflow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bidirectional Flow - European Exports to India */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-indigo-700 mb-6 shadow-sm">
                Two-Way Trade
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                EU Exports to India
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
                Warehousing and consolidation for European brands exporting to India&apos;s 1.45 billion consumers
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { category: "Automotive", description: "High-end vehicles (>$15k CIF)", oldDuty: "110%", newDuty: "10%", timeline: "Over 5 years", color: "from-red-500 to-orange-500" },
                { category: "Wines & Spirits", description: "Premium and mid-range", oldDuty: "150%", newDuty: "20-30%", timeline: "Immediate halving", color: "from-purple-500 to-pink-500" },
                { category: "Processed Foods", description: "Pasta, biscuits, chocolates", oldDuty: "33-55%", newDuty: "0%", timeline: "Immediate", color: "from-amber-500 to-yellow-500" },
                { category: "Agri-Food", description: "Olive oil, fruit juices", oldDuty: "45-55%", newDuty: "0%", timeline: "5-year staging", color: "from-green-500 to-teal-500" },
              ].map((item) => (
                <div
                  key={item.category}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`} />
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {item.category}
                  </h3>
                  <p className="text-sm text-slate-500 mb-5">
                    {item.description}
                  </p>
                  <div className="space-y-3 border-t border-slate-100 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Previous</span>
                      <span className="rounded-full bg-red-50 border border-red-200/50 px-3 py-1 text-sm font-bold text-red-600">
                        {item.oldDuty}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">New Duty</span>
                      <span className="rounded-full bg-cyan-50 border border-cyan-200/50 px-3 py-1 text-sm font-bold text-cyan-600">
                        {item.newDuty}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 text-center pt-2 font-medium">
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
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-28">
          <div className="absolute inset-0 bg-grid-modern [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <LocalizedContent />
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-cyan-50/20 to-white py-28">
          <div className="absolute inset-0 bg-grid-modern [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-cyan-700 mb-6 shadow-sm">
                Trade Intelligence
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Latest Export Guides
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
                Expert insights, compliance strategies, and regional deep-dives for Indian companies entering the European market
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { title: "How to Export from India to EU in 2026", category: "Export Guide", link: "/blog/how-to-export-india-to-eu-2026", gradient: "from-cyan-500 to-cyan-600" },
                { title: "Article 23 VAT Deferment Guide", category: "Fiscal Strategy", link: "/blog/article-23-vat-deferment-guide", gradient: "from-indigo-500 to-indigo-600" },
                { title: "Gujarat Pharma Export to EU", category: "Regional Focus", link: "/blog/gujarat-pharma-export-eu", gradient: "from-violet-500 to-violet-600" },
              ].map((post, index) => (
                <Link
                  key={index}
                  href={post.link}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${post.gradient}`} />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full blur-2xl group-hover:from-cyan-500/10 transition-all duration-300" />
                  <span className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <span className="text-sm text-cyan-600 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Read Article
                    <IconArrow />
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
              >
                View All 70 Blog Posts
                <IconArrow />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-28">
          <div className="absolute inset-0 bg-grid-modern [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative z-10">
            <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-md px-4 py-2 text-sm font-semibold text-cyan-300 mb-8">
              Start Your EU Journey
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Ready to Enter the
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent"> European Market?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-300 leading-relaxed mb-10">
              Join Indian brands leveraging the 2026 EU-India FTA through our Rotterdam logistics gateway. Zero upfront VAT, duty-free access, full compliance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@eufta.in"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/50 transition-all duration-300"
              >
                Get Started Today
                <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-cyan-400/30 bg-white/5 backdrop-blur-md px-8 py-4 text-base font-semibold text-white hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
    </div>
    </>
  );
}
