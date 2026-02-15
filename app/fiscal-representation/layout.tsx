import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Article 23 VAT Deferment & Fiscal Representation Netherlands | €150/month",
  description:
    "Eliminate the 21% upfront VAT burden at the Dutch border with Article 23 VAT Deferment. General Fiscal Representation from €150/month — Dutch VAT number registration, quarterly filings, and no local office required.",
  keywords:
    "Article 23 VAT deferment Netherlands, fiscal representation Netherlands, Dutch VAT deferment Indian importers, General Fiscal Representation, VAT reverse charge Netherlands, eliminate import VAT Netherlands",
  alternates: { canonical: "https://eufta.in/fiscal-representation" },
};

export default function FiscalRepresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
