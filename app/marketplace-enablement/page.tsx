import { Metadata } from "next";
import AnswerNugget from "../components/AnswerNugget";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Marketplace Enablement | Amazon EU5, Zalando, Bol.com Integration | eufta.in",
  description: "Next-day delivery across Western Europe from our Rotterdam hub. Automated pick-and-pack integrated with Shopify and Amazon. Per-order costs under €3.00.",
};

const marketplaces = [
  {
    name: "Amazon (EU5)",
    description: "Full MCF integration across UK, Germany, France, Italy, and Spain",
    visitors: "500M+",
    integration: "Multi-Channel Fulfillment (MCF)",
    features: ["Pan-European inventory", "Prime eligibility", "Automated returns"],
  },
  {
    name: "Zalando",
    description: "Specialized onboarding for fashion and lifestyle products",
    visitors: "121M",
    integration: "Direct API integration",
    features: ["Fashion-focused", "Invite-only access", "Premium positioning"],
  },
  {
    name: "Allegro",
    description: "Critical for volume in Eastern European markets",
    visitors: "289M",
    integration: "Fulfillment by Allegro",
    features: ["Poland market leader", "High volume potential", "Local trust"],
  },
  {
    name: "Bol.com",
    description: "Local trust for Benelux markets (Netherlands, Belgium)",
    visitors: "13.8M",
    integration: "Bol.com Fulfillment",
    features: ["Benelux leader", "Fast delivery", "Local customer service"],
  },
  {
    name: "Otto",
    description: "Germany's largest online retailer for fashion and home",
    visitors: "50M+",
    integration: "Otto Marketplace",
    features: ["German market", "Signup fee: €10k", "Premium positioning"],
  },
  {
    name: "Wehkamp",
    description: "Invite-only Dutch fashion marketplace",
    visitors: "5M+",
    integration: "Direct integration",
    features: ["Exclusive access", "Fashion focus", "Netherlands market"],
  },
];

export default function MarketplaceEnablement() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketplace Enablement",
    description: "Next-day delivery across Western Europe from our Rotterdam hub. Automated pick-and-pack integrated with Shopify and Amazon.",
    serviceType: "3PL Fulfillment",
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
              {
                label: "Marketplace Enablement",
                href: "/marketplace-enablement",
              },
            ]}
          />
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Marketplace Enablement
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Direct fulfillment into Europe's largest e-commerce platforms from
              a single Rotterdam hub
            </p>
          </div>

          <AnswerNugget content="Next-day delivery across Western Europe from our Rotterdam hub. Automated pick-and-pack integrated with Shopify and Amazon. Per-order costs under €3.00." />

          {/* Service Overview */}
          <div className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              3PL Service Architecture
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Pick & Pack
                </h3>
                <p className="mt-2 text-3xl font-bold text-cyan-600">
                  €2.75
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Market rate: €3.20+
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Basic pick + packing
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Extra Items
                </h3>
                <p className="mt-2 text-3xl font-bold text-cyan-600">
                  €0.40
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Market rate: €0.60+
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Per SKU in same box
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Storage
                </h3>
                <p className="mt-2 text-3xl font-bold text-cyan-600">
                  €15.00
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Market rate: €25.00+
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Per month per standard pallet
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Inbound
                </h3>
                <p className="mt-2 text-3xl font-bold text-cyan-600">
                  €6.00
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Market rate: €9.00+
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Unloading and inspection per pallet
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Returns
                </h3>
                <p className="mt-2 text-3xl font-bold text-cyan-600">
                  €4.50
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Market rate: €5.50+
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Inspection and restocking per order
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Fiscal Rep
                </h3>
                <p className="mt-2 text-3xl font-bold text-cyan-600">
                  €150
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Market rate: €250+
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Monthly retainer for Article 23 management
                </p>
              </div>
            </div>
          </div>

          {/* Marketplace Grid */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900">
              Integrated Marketplaces
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {marketplaces.map((marketplace) => (
                <div
                  key={marketplace.name}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {marketplace.name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        {marketplace.description}
                      </p>
                    </div>
                    <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-800">
                      {marketplace.visitors}
                    </span>
                  </div>
                  <div className="mt-4 border-t border-slate-200 pt-4">
                    <p className="text-xs font-medium text-slate-700">
                      Integration:
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      {marketplace.integration}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {marketplace.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start text-sm text-slate-600"
                      >
                        <span className="mr-2 text-cyan-600">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Integration Steps */}
          <div className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Integration Process
            </h2>
            <div className="mt-8 space-y-6">
              {[
                {
                  step: "1",
                  title: "Account Setup",
                  description:
                    "We assist with marketplace account creation and verification. For platforms like Otto, we handle the €10k signup fee coordination.",
                },
                {
                  step: "2",
                  title: "API Integration",
                  description:
                    "Connect your Shopify, WooCommerce, or custom store to our WMS. Real-time inventory sync across all marketplaces.",
                },
                {
                  step: "3",
                  title: "Product Onboarding",
                  description:
                    "Bulk upload product catalogs with localized descriptions. We handle translation and compliance labeling.",
                },
                {
                  step: "4",
                  title: "Fulfillment Activation",
                  description:
                    "Go live with automated pick-and-pack. Orders flow directly from marketplaces to our Rotterdam warehouse.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-6 rounded-lg bg-white p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* B2B Sales Support */}
          <div className="mt-12 rounded-lg border border-cyan-200 bg-cyan-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              B2B Sales & Regional Language Support
            </h2>
            <p className="mt-4 text-slate-600">
              Outsourced SDR teams fluent in German, French, and Dutch manage
              professional outreach to wholesalers who value direct communication
              and punctuality. This model converts fixed labor costs into
              variable, performance-linked service fees.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-4">
                <p className="font-semibold text-slate-900">German Market</p>
                <p className="mt-2 text-sm text-slate-600">
                  Native German SDRs for DACH region wholesale outreach
                </p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <p className="font-semibold text-slate-900">French Market</p>
                <p className="mt-2 text-sm text-slate-600">
                  French-speaking team for Benelux and France B2B sales
                </p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <p className="font-semibold text-slate-900">Dutch Market</p>
                <p className="mt-2 text-sm text-slate-600">
                  Local Dutch support for Rotterdam-based wholesale clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
