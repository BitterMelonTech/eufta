interface AnswerNuggetProps {
  content: string;
}

export default function AnswerNugget({ content }: AnswerNuggetProps) {
  return (
    <div className="my-6 rounded-lg border-2 border-emerald-500/30 bg-emerald-50/50 p-4 shadow-sm">
      <p className="text-sm font-medium leading-relaxed text-slate-800">
        {content}
      </p>
    </div>
  );
}
