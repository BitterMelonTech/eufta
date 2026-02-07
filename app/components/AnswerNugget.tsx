interface AnswerNuggetProps {
  content: string;
}

export default function AnswerNugget({ content }: AnswerNuggetProps) {
  return (
    <div className="group my-6 relative overflow-hidden rounded-xl border border-cyan-200/60 bg-gradient-to-r from-cyan-50/80 via-white to-cyan-50/80 p-5 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-cyan-400 rounded-l-xl" />
      <div className="flex items-start gap-3 pl-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 text-white flex-shrink-0 mt-0.5 shadow-sm">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold text-cyan-700 uppercase tracking-wider mb-1">Quick Answer</p>
          <p className="text-sm font-medium leading-relaxed text-slate-700">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
