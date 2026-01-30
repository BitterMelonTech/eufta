import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FTA Industries | eufta.in - Specialized Logistics for Indian Export Sectors",
  description: "Specialized logistics for Textiles (CBAM), Pharma (QP), Marine (BCP), and Engineering (CE). Deep-dives into tariff schedules for 15+ sectors.",
};

export default function FTAIndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
