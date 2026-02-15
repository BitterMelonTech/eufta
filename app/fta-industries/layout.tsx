import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "India-EU FTA 2026 Industry Tariff Rates: Textiles, Pharma, Engineering & More",
  description:
    "Complete duty elimination schedules for 8 Indian export sectors under the 2026 India-EU FTA. Textiles 12%→0%, Pharma 11%→0%, Engineering 22%→0%, Marine 26%→0%. Includes CBAM, REACH, CE, and QP compliance requirements per sector.",
  keywords:
    "India EU FTA tariff rates 2026, Indian textile export duty EU, pharma export India to EU, engineering goods EU tariff, India EU FTA industry impact, CBAM textiles India, REACH chemicals India EU",
  alternates: { canonical: "https://eufta.in/fta-industries" },
};

export default function FTAIndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
