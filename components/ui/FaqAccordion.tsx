"use client";

import { useState } from "react";
import type { FaqItem } from "@/types";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3" role="list">
      {items.map((item, i) => (
        <div
          key={i}
          role="listitem"
          className={`rounded-2xl overflow-hidden border transition-all duration-200 ${
            open === i
              ? "border-[#00FF88]/50 bg-white shadow-[0_4px_20px_rgba(0,255,136,0.08)]"
              : "border-[#D4E5DC]/60 bg-[#FAF8F3]"
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className={`w-full flex items-center justify-between gap-4 px-6 py-4 text-left transition-colors duration-150 ${
              open !== i ? "hover:bg-[#F6F0E8]" : ""
            }`}
            aria-expanded={open === i}
            aria-controls={`faq-answer-${i}`}
          >
            <span
              className={`font-semibold text-base ${
                open === i ? "text-[#062014]" : "text-[#062014]"
              }`}
            >
              {item.question}
            </span>
            <span
              className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${
                open === i
                  ? "bg-[#00FF88] text-[#062014] rotate-45"
                  : "bg-[#D4E5DC]/60 text-[#5A7A6E]"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          <div
            id={`faq-answer-${i}`}
            role="region"
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="px-6 pb-5 text-[#5A7A6E] leading-relaxed text-sm">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
