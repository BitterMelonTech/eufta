import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "EU Regulatory Compliance for Indian Exporters | EFSA, REACH, CBAM, CE Marking",
  description:
    "Navigate EU regulations with expert guidance: EFSA Novel Food registrations, EMA QP batch release, REACH Only Representative, CBAM carbon reporting, and CE certification for Indian exporters entering the European market.",
  keywords:
    "EFSA Novel Food India, REACH Only Representative service, CBAM reporting India, CE marking Indian exports, EU compliance Indian exporters, EMA QP batch release, EU regulatory compliance service",
  alternates: { canonical: "https://eufta.in/compliance-bridge" },
};

export default function ComplianceBridgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
