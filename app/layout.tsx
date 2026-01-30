import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eufta.in | Rotterdam-Indo Logistics Gateway | EU-India FTA 2026",
  description: "The definitive Rotterdam bridge for Indian D2C and B2B brands to exploit the 2026 EU-India FTA. We provide physical warehousing, Article 23 VAT deferment, and pan-European marketplace enablement.",
  keywords: "EU-India FTA, Rotterdam logistics, Article 23 VAT, 3PL fulfillment, EU compliance, Indian exports, European marketplace",
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
      </body>
    </html>
  );
}
