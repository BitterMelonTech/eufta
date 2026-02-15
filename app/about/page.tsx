import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import AnswerNugget from "../components/AnswerNugget";

export default function AboutPage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "eufta.in",
    alternateName: "EUFTA",
    legalName: "Sanjan Venture",
    url: "https://eufta.in",
    foundingDate: "2024",
    taxID: "NL863929771B01",
    description:
      "eufta.in (EUFTA) is a Rotterdam-based EU market entry platform operated by Sanjan Venture. We specialise in 3PL fulfillment, Article 23 VAT deferment, regulatory compliance (EFSA, EMA, REACH, CBAM), and marketplace enablement for Indian exporters under the 2026 India-EU Free Trade Agreement.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rotterdam",
      addressRegion: "South Holland",
      addressCountry: "NL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@eufta.in",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi", "Dutch"],
    },
    knowsAbout: [
      "India-EU Free Trade Agreement 2026",
      "Article 23 VAT Deferment",
      "EU customs regulations",
      "EFSA Novel Food registrations",
      "EMA Annex 21 QP batch release",
      "REACH Only Representative",
      "CBAM carbon border reporting",
      "European marketplace integration",
      "Rotterdam port logistics",
      "EU-India bilateral trade",
    ],
    sameAs: ["https://www.linkedin.com/company/eufta"],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who operates eufta.in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "eufta.in is operated by Sanjan Venture, a company registered in Rotterdam, Netherlands (KVK: 86318179, BTW: NL863929771B01). The team comprises trade analysts, customs brokers, and regulatory specialists with expertise in India-EU bilateral trade.",
        },
      },
      {
        "@type": "Question",
        name: "What does EUFTA stand for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EUFTA is the brand name for eufta.in, a Rotterdam-based EU market entry platform. It is not an abbreviation of 'EU Free Trade Agreement.' The platform helps Indian exporters leverage the 2026 India-EU Free Trade Agreement through logistics, fiscal representation, and regulatory compliance services.",
        },
      },
      {
        "@type": "Question",
        name: "Why is eufta.in based in Rotterdam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rotterdam is Europe's largest port, handling over 15 million TEUs annually. It provides access to 170 million consumers within 24 hours, benefits from the India-Netherlands Green and Digital Shipping Corridor, and is the optimal location for Article 23 VAT deferment under Dutch fiscal law.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 py-20">
          <div className="absolute inset-0 bg-grid-modern [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "About EUFTA", href: "/about" },
              ]}
            />
            <div className="mt-6">
              <span className="inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-cyan-300 mb-4">
                Trade Analysts & Logistics Experts
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                About{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                  EUFTA
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">
                The team, expertise, and mission behind eufta.in — Rotterdam&apos;s
                gateway for Indian exporters entering the European market
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <AnswerNugget content="eufta.in (EUFTA) is operated by Sanjan Venture (KVK: 86318179), a Rotterdam-based company. Our team of trade analysts, customs brokers, and regulatory specialists helps Indian exporters enter the EU market under the 2026 India-EU FTA through 3PL fulfillment, Article 23 VAT deferment, compliance, and marketplace enablement." />

          {/* Mission Section */}
          <section className="mt-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  The 2026 India-EU Free Trade Agreement is the most significant
                  bilateral trade deal in a generation, covering $24 trillion in
                  combined GDP and 2 billion people. Yet, many Indian exporters
                  face barriers: complex EU regulations, 21% upfront VAT, and
                  fragmented logistics across 27 member states.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  eufta.in exists to bridge that gap. From a single Rotterdam
                  hub, we provide end-to-end services — warehousing, fiscal
                  representation, regulatory compliance, and marketplace
                  integration — so Indian brands can focus on product quality
                  while we handle EU market entry.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    stat: "$136.5B",
                    label: "India-EU Bilateral Trade (FY 2025)",
                    desc: "We operate at the center of one of the world's fastest-growing trade corridors.",
                  },
                  {
                    stat: "99.5%",
                    label: "EU Tariff Lines Eliminated",
                    desc: "By trade value, enabling $33B in immediate duty-free access for Indian exporters.",
                  },
                  {
                    stat: "2024",
                    label: "Founded in Rotterdam",
                    desc: "Europe's largest port, with access to 170M consumers within 24 hours.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm"
                  >
                    <p className="text-3xl font-extrabold bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">
                      {item.stat}
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-900">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Expertise & E-E-A-T Section */}
          <section className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Our Expertise
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                Every recommendation on eufta.in is backed by hands-on
                experience in EU trade regulations, customs brokerage, and
                cross-border logistics
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Trade Policy Analysis",
                  description:
                    "Deep understanding of the India-EU FTA tariff schedules, Rules of Origin, and duty elimination timelines. We track every development from the Ministry of Commerce and DG Trade.",
                  icon: "T",
                  gradient: "from-cyan-500 to-blue-600",
                },
                {
                  title: "EU Customs & Fiscal Law",
                  description:
                    "Expertise in Dutch fiscal representation, Article 23 VAT deferment, EU customs declarations, and EORI number registration. Practical experience with Dutch Tax Authority (Belastingdienst) procedures.",
                  icon: "F",
                  gradient: "from-indigo-500 to-violet-600",
                },
                {
                  title: "Regulatory Compliance",
                  description:
                    "Specialist knowledge of EFSA Novel Food regulations, EMA Annex 21 QP batch release, REACH chemical registration, and CBAM carbon border mechanisms.",
                  icon: "R",
                  gradient: "from-violet-500 to-purple-600",
                },
                {
                  title: "Supply Chain & 3PL",
                  description:
                    "Rotterdam-based warehousing operations with integration into Amazon EU5 MCF, Zalando, Allegro, Bol.com, and Otto. Real-time WMS and multi-channel order management.",
                  icon: "L",
                  gradient: "from-blue-500 to-indigo-600",
                },
                {
                  title: "Regional Market Knowledge",
                  description:
                    "On-ground understanding of Indian export hubs: Tiruppur (textiles), Gujarat (pharma & chemicals), Chennai (engineering), and Paradip (marine). Tailored logistics from origin to destination.",
                  icon: "M",
                  gradient: "from-teal-500 to-cyan-600",
                },
                {
                  title: "Digital Commerce",
                  description:
                    "Shopify, WooCommerce, and custom store integrations. Localized product catalogs, multi-language support (German, French, Dutch), and B2B SDR outreach for wholesale channels.",
                  icon: "D",
                  gradient: "from-rose-500 to-pink-600",
                },
              ].map((area) => (
                <div
                  key={area.title}
                  className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`h-1 bg-gradient-to-r ${area.gradient} absolute top-0 left-0 right-0`}
                  />
                  <div className="flex items-start gap-4 mt-2">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${area.gradient} text-white font-bold shadow-sm flex-shrink-0`}
                    >
                      {area.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {area.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Company Details */}
          <section className="mt-20">
            <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-8 shadow-lg">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-8">
                Company Details
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    label: "Legal Name",
                    value: "Sanjan Venture",
                  },
                  {
                    label: "KVK (Chamber of Commerce)",
                    value: "86318179",
                  },
                  {
                    label: "BTW (VAT Number)",
                    value: "NL863929771B01",
                  },
                  {
                    label: "Location",
                    value: "Rotterdam, South Holland, NL",
                  },
                ].map((detail) => (
                  <div
                    key={detail.label}
                    className="rounded-xl bg-white border border-slate-100 p-5 shadow-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                      {detail.label}
                    </p>
                    <p className="text-base font-bold text-slate-900">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Trusted Authorities */}
          <section className="mt-16">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
              Regulatory Bodies We Work With
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {[
                {
                  name: "Ministry of Commerce, India",
                  href: "https://www.commerce.gov.in",
                },
                {
                  name: "EFSA (European Food Safety Authority)",
                  href: "https://www.efsa.europa.eu",
                },
                {
                  name: "Port of Rotterdam",
                  href: "https://www.portofrotterdam.com",
                },
                {
                  name: "ECHA (Chemicals Agency)",
                  href: "https://echa.europa.eu",
                },
                {
                  name: "DG Trade (European Commission)",
                  href: "https://policy.trade.ec.europa.eu",
                },
                {
                  name: "Dutch Tax Authority",
                  href: "https://www.belastingdienst.nl",
                },
              ].map((authority) => (
                <a
                  key={authority.name}
                  href={authority.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-xl border border-slate-200/80 bg-white p-4 text-center text-xs font-medium text-slate-600 hover:text-cyan-600 hover:border-cyan-300 hover:shadow-md transition-all duration-300 min-h-[80px]"
                >
                  {authority.name}
                </a>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-20 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-12 text-center">
            <div className="absolute inset-0 bg-grid-modern [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Ready to Enter the European Market?
              </h2>
              <p className="mx-auto max-w-2xl text-slate-300 mb-8">
                Contact our trade specialists to discuss your EU market entry
                strategy under the 2026 India-EU FTA
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:info@eufta.in"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  Contact Us
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
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
          </div>
        </div>
      </div>
    </>
  );
}
