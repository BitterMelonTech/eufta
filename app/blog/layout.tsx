import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "India-EU FTA 2026 Blog: Export Guides, Tariff Updates & Compliance Intelligence",
  description:
    "70+ expert guides for Indian exporters: EU-India FTA updates 2026, Article 23 VAT deferment strategies, EFTA member trade regulations, regional deep-dives (Gujarat, Tiruppur, Chennai), EFSA/REACH compliance, and Amazon EU5 marketplace integration. Updated bi-weekly by trade analysts.",
  keywords:
    "EU-India FTA updates 2026, India EU export guide, EFTA member trade regulations, export to Europe from India, Rotterdam logistics blog, Article 23 VAT guide, Indian exporters EU compliance, FTA 2026 tariff schedule",
  alternates: { canonical: "https://eufta.in/blog" },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
