interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle,
}: FAQSectionProps) {
  return (
    <section className="mt-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-slate-900">{title}</h2>
        {subtitle && (
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-all duration-300 open:shadow-lg"
          >
            <summary className="flex cursor-pointer items-start gap-4 p-6 text-left [&::-webkit-details-marker]:hidden list-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 text-white text-sm font-bold flex-shrink-0 mt-0.5 shadow-sm">
                Q
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-slate-900 leading-snug pr-8">
                  {faq.question}
                </h3>
              </div>
              <svg
                className="h-5 w-5 text-slate-400 flex-shrink-0 mt-1 transition-transform duration-200 group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="px-6 pb-6 pt-0 pl-[4.5rem]">
              <p className="text-sm text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
