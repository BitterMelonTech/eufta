"use client";

import { useState } from "react";
import AnswerNugget from "../components/AnswerNugget";
import Breadcrumbs from "../components/Breadcrumbs";
import Link from "next/link";
import { IconArrow, IconDocument } from "../components/Icons";

export default function FinalText() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("/api/pdf-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setEmail("");
        }, 8000);
      } else {
        console.error("API Error:", data);
        alert(`Error: ${data.error || "Unknown error. Please check the console or contact info@eufta.in"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Network error: ${error instanceof Error ? error.message : "Please check your connection and try again"}`);
    } finally {
      setLoading(false);
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "India-EU FTA 2026: Final Agreement Text",
    description:
      "Complete final text of the India-EU Free Trade Agreement signed on January 27, 2026",
    datePublished: "2026-01-27",
    author: {
      "@type": "Organization",
      name: "eufta.in",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Final Agreement Text", href: "/final-text" },
            ]}
          />
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              India-EU FTA 2026: Final Agreement Text
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Complete official documentation of the Free Trade Agreement signed
              on January 27, 2026
            </p>
          </div>

          <AnswerNugget content="The final text of the India-EU FTA 2026 includes complete tariff elimination schedules, 144 open service sectors, professional mobility provisions, and all compliance requirements. Officially signed on January 27, 2026." />

          <div className="mt-12 space-y-8">
            {/* Agreement Overview */}
            <section className="rounded-lg border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Agreement Overview
              </h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  The India-European Union Free Trade Agreement was officially
                  signed on <strong>January 27, 2026</strong>, following nearly
                  two decades of negotiations. This comprehensive agreement
                  represents the largest trade deal for both parties.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="rounded-lg bg-white p-4">
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Key Statistics
                    </h3>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• EU Tariff Elimination: 99.5%</li>
                      <li>• India Tariff Elimination: 92.1%</li>
                      <li>• Service Sectors Opened: 144</li>
                      <li>• Combined GDP: USD 24 Trillion</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Agreement Chapters
                    </h3>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Trade in Goods</li>
                      <li>• Trade in Services</li>
                      <li>• Investment</li>
                      <li>• Intellectual Property</li>
                      <li>• Sustainable Development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Content */}
            <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Related Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/fta-industries"
                  className="rounded-lg bg-white p-4 border border-emerald-200 hover:border-emerald-400 transition-colors"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Sector Impact 2026
                  </h3>
                  <p className="text-sm text-slate-600">
                    Detailed duty rates and compliance requirements by industry
                  </p>
                </Link>
                <Link
                  href="/"
                  className="rounded-lg bg-white p-4 border border-emerald-200 hover:border-emerald-400 transition-colors"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Budget 2026 Impact
                  </h3>
                  <p className="text-sm text-slate-600">
                    Analysis of Union Budget 2026-27 impact on FTA tariff lines
                  </p>
                </Link>
                <Link
                  href="/compliance-bridge"
                  className="rounded-lg bg-white p-4 border border-emerald-200 hover:border-emerald-400 transition-colors"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Compliance Requirements
                  </h3>
                  <p className="text-sm text-slate-600">
                    EFSA, EMA, REACH, and CBAM compliance guides
                  </p>
                </Link>
                <Link
                  href="/fiscal-representation"
                  className="rounded-lg bg-white p-4 border border-emerald-200 hover:border-emerald-400 transition-colors"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Fiscal Representation
                  </h3>
                  <p className="text-sm text-slate-600">
                    Article 23 VAT Deferment and tax compliance
                  </p>
                </Link>
              </div>
            </section>

            {/* Download Section */}
            <section className="rounded-2xl border-2 border-emerald-200/50 bg-gradient-to-br from-white to-emerald-50/30 p-12 text-center shadow-xl">
              <div className="flex justify-center mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg">
                  <IconDocument />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Download Complete Documentation
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Get the full 2026 Tariff Schedule PDF with all sector details,
                staging periods, and compliance requirements. Comprehensive 43-page analysis covering all 8 export sectors.
              </p>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                  <div>
                    <label
                      htmlFor="email-download"
                      className="block text-sm font-semibold text-slate-700 mb-2 text-left"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email-download"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="your.email@example.com"
                      disabled={loading}
                      className="w-full rounded-xl border-2 border-slate-200 bg-white px-5 py-4 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all disabled:opacity-50"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating PDF...
                      </>
                    ) : (
                      <>
                        Download 2026 Tariff Schedule PDF
                        <IconArrow />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-500 font-medium">
                    We respect your privacy. PDF will be sent to your email.
                  </p>
                </form>
              ) : (
                <div className="max-w-md mx-auto rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 p-8 text-center border-2 border-emerald-200">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-emerald-900 mb-2">
                    Success!
                  </p>
                  <p className="text-sm text-emerald-700 leading-relaxed">
                    The comprehensive 2026 Tariff Schedule PDF (43 pages) has been sent to <strong>{email}</strong>. Please check your inbox (and spam folder).
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
