import Link from "next/link";

interface AuthorBioProps {
  date: string;
  updatedDate?: string;
}

export default function AuthorBio({ date, updatedDate }: AuthorBioProps) {
  const publishedFormatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const updatedFormatted = updatedDate
    ? new Date(updatedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="mt-12 rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white font-bold shadow-sm flex-shrink-0">
          E
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-sm font-bold text-slate-900">
              eufta.in Trade Intelligence Team
            </p>
            <a
              href="https://www.linkedin.com/company/eufta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-blue-50 border border-blue-200/60 px-2 py-0.5 text-xs font-semibold text-blue-700 hover:bg-blue-100 transition-colors"
            >
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mb-2">
            Trade analysts, customs brokers, and regulatory specialists at{" "}
            <Link href="/about" className="text-cyan-600 hover:underline">
              Sanjan Venture (Rotterdam, NL)
            </Link>
            . Expertise in India-EU FTA tariff schedules, Article 23 VAT
            deferment, EFSA/EMA/REACH compliance, and EU marketplace logistics.
          </p>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span>Published: {publishedFormatted}</span>
            {updatedFormatted && updatedFormatted !== publishedFormatted && (
              <>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-cyan-600 font-medium">
                  Updated: {updatedFormatted}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
