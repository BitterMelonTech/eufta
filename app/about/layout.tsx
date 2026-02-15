import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About EUFTA | Trade Analysts & Logistics Experts Behind eufta.in",
  description:
    "Meet the team behind eufta.in (EUFTA). Operated by Sanjan Venture (Rotterdam, NL), we are trade analysts, logistics experts, and regulatory specialists helping Indian exporters enter the EU market under the 2026 India-EU FTA.",
  alternates: { canonical: "https://eufta.in/about" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
