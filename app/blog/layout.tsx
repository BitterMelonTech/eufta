import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FTA Hub: Trade Intelligence & Export Guides for Indian Companies | eufta.in Blog",
  description: "Expert guides for Indian exporters: EU market entry, Article 23 VAT deferment, regional strategies (Gujarat, Tiruppur, Chennai), EFSA/REACH compliance, and marketplace integration. Updated bi-weekly.",
  keywords: "India EU export guide, export to Europe, Rotterdam logistics, Article 23 VAT, Indian exporters, EU compliance, FTA 2026",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
