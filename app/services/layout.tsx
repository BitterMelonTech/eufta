import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "EU Market Entry Services for Indian Exporters | 3PL, VAT Deferment & Compliance",
  description:
    "Complete EU market entry services for Indian exporters: Rotterdam 3PL fulfillment (from €2.75/order), Article 23 VAT deferment (€150/month), EFSA/EMA/REACH compliance, and Amazon EU5 marketplace enablement.",
  keywords:
    "EU market entry services India, Rotterdam 3PL fulfillment, Article 23 VAT deferment service, Indian exporter EU compliance, EFSA REACH compliance service, marketplace enablement Europe",
  alternates: { canonical: "https://eufta.in/services" },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
