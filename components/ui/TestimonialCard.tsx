import type { Testimonial } from "@/types";

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="bg-white rounded-3xl p-7 shadow-[0_4px_24px_rgba(6,32,20,0.08)] border border-[#D4E5DC]/50 hover:shadow-[0_8px_40px_rgba(6,32,20,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Star rating */}
      <div
        className="flex items-center gap-0.5 mb-3"
        aria-label={`Bewertung: ${t.rating} von 5 Sternen`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < t.rating ? "text-amber-400 fill-current" : "text-gray-200 fill-current"}`}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Decorative quote mark */}
      <span
        className="text-6xl font-display leading-none text-[#00FF88]/30 mb-2 select-none"
        aria-hidden="true"
      >
        "
      </span>

      {/* Quote text */}
      <blockquote className="text-[#062014]/80 text-sm leading-relaxed flex-1 italic">
        {t.text}
      </blockquote>

      {/* Footer */}
      <footer className="border-t border-[#D4E5DC]/60 pt-4 mt-5 flex items-center justify-between">
        <div>
          <p className="font-semibold text-sm text-[#062014]">{t.name}</p>
          <p className="text-xs text-[#5A7A6E]">
            {t.service} · {t.city}
          </p>
        </div>
        <time dateTime={t.date} className="text-xs text-[#5A7A6E] flex-shrink-0">
          {t.date}
        </time>
      </footer>
    </article>
  );
}
