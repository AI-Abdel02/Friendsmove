"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

const STORAGE_KEY = "fm_cookie_consent";

export default function CookieBanner() {
  const { lang } = useLanguage();
  const t = translations[lang].cookie;

  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setVisible(true);
        // Slight delay so the slide-up feels intentional, not jarring
        const id = setTimeout(() => setAnimateIn(true), 120);
        return () => clearTimeout(id);
      }
    } catch {
      // localStorage unavailable — don't show banner
    }
  }, []);

  const dismiss = (type: "all" | "necessary") => {
    try {
      localStorage.setItem(STORAGE_KEY, type);
    } catch {
      // ignore
    }
    setAnimateIn(false);
    // Remove from DOM after animation finishes
    setTimeout(() => setVisible(false), 350);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={t.title}
      className={`fixed bottom-0 inset-x-0 z-[90] px-4 pb-4 sm:px-6 lg:px-8 transition-transform duration-350 ease-out will-change-transform ${
        animateIn ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Card */}
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(4,18,13,0.97)_0%,rgba(8,26,19,0.97)_100%)] shadow-[0_-8px_60px_rgba(0,0,0,0.38)] backdrop-blur-xl">
        {/* top green accent line */}
        <div className="h-[3px] w-full bg-[linear-gradient(90deg,transparent_0%,#00FF88_30%,#00FF88_70%,transparent_100%)]" />

        <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
          {/* Icon + text */}
          <div className="flex items-start gap-4 sm:flex-1">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#00FF88]/10 text-xl">
              🍪
            </div>

            <div className="min-w-0">
              <p className="text-sm font-bold text-white">{t.title}</p>
              <p className="mt-1 text-[13px] leading-relaxed text-white/60">
                {t.body}{" "}
                <Link
                  href="/datenschutz"
                  className="text-[#00FF88] underline underline-offset-2 hover:text-[#00FF88]/80 transition-colors"
                  onClick={() => dismiss("necessary")}
                >
                  {t.learnMore}
                </Link>
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => dismiss("necessary")}
              className="inline-flex h-10 items-center justify-center rounded-full border border-white/14 bg-white/6 px-5 text-sm font-semibold text-white/80 transition hover:bg-white/12 hover:text-white"
            >
              {t.necessary}
            </button>

            <button
              type="button"
              onClick={() => dismiss("all")}
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#00FF88] px-6 text-sm font-extrabold text-[#062014] shadow-[0_8px_24px_rgba(0,255,136,0.22)] transition hover:opacity-90"
            >
              {t.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
