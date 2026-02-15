import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NotificationBar from "./components/NotificationBar";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "India-EU FTA 2026: Official Duty Rates, Tariff Schedules & EU Market Entry | eufta.in",
    template: "%s | eufta.in",
  },
  description:
    "Access the final duty elimination schedules from the 2026 India-EU Free Trade Agreement. 0% duty on textiles, 10% car tariffs, Article 23 VAT deferment, and Rotterdam-based 3PL fulfillment for Indian exporters.",
  keywords:
    "India-EU FTA 2026, EU-India FTA updates 2026, Duty Free Export to EU, EFTA member trade regulations, India EU trade agreement tariff schedule, Article 23 VAT deferment Netherlands, Rotterdam 3PL fulfillment India, Budget 2026 Customs Relief, Union Budget 2026, EU compliance for Indian exporters",
  metadataBase: new URL("https://eufta.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eufta.in",
    siteName: "eufta.in",
    title: "India-EU FTA 2026: Official Duty Rates & EU Market Entry | eufta.in",
    description:
      "The definitive Rotterdam bridge for Indian brands entering the EU market under the 2026 India-EU FTA. Duty-free access, Article 23 VAT deferment, and pan-European marketplace enablement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "India-EU FTA 2026: Official Duty Rates & EU Market Entry | eufta.in",
    description:
      "Access duty elimination schedules, Article 23 VAT deferment, and Rotterdam-based 3PL fulfillment for Indian exporters entering the EU.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* Site-wide WebSite schema for sitelinks search box */
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "eufta.in",
    alternateName: "EUFTA",
    url: "https://eufta.in",
    description:
      "eufta.in (EUFTA) is a Rotterdam-based EU market entry platform operated by Sanjan Venture. It provides 3PL fulfillment, Article 23 VAT deferment, regulatory compliance, and marketplace enablement for Indian exporters under the 2026 India-EU Free Trade Agreement.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://eufta.in/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NotificationBar />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
