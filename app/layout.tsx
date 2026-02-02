import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "India-EU FTA 2026: Official Duty Rates & Union Budget 2026 Impact | eufta.in",
  description: "Access the final duty elimination schedules from the Jan 2026 India-EU FTA. 0% duty on textiles, 10% car tariffs, and Budget 2026 customs updates.",
  keywords: "India-EU FTA 2026, Duty Free Export to EU, Budget 2026 Customs Relief, Union Budget 2026, EU-India trade agreement, Rotterdam logistics, Article 23 VAT, 3PL fulfillment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
