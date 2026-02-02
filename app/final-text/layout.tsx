import { Metadata } from "next";

export const metadata: Metadata = {
  title: "India-EU FTA 2026: Final Agreement Text & Complete Tariff Schedules",
  description: "Access the complete final text of the India-EU Free Trade Agreement signed on January 27, 2026. Includes all tariff elimination schedules, service sector openings, and compliance requirements.",
};

export default function FinalTextLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
