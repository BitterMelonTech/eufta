import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sell on Amazon EU, Zalando, Allegro & Bol.com from India | Marketplace Enablement",
  description:
    "Launch on Europe's largest marketplaces from a single Rotterdam hub. Amazon EU5 MCF integration, Zalando onboarding, Allegro, Otto, and Bol.com fulfillment. Per-order costs under €3.00 with next-day delivery to 170M consumers.",
  keywords:
    "sell on Amazon EU from India, Zalando Indian brands, Allegro marketplace India, Bol.com fulfillment, European marketplace enablement, India to EU e-commerce, Rotterdam 3PL marketplace",
  alternates: { canonical: "https://eufta.in/marketplace-enablement" },
};

export default function MarketplaceEnablementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
