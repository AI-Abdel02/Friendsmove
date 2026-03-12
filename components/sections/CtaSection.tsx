"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

const LEAD_URL = "https://app.friendsmove.com/web/public/vue-app/lead";

export default function CtaSection() {
  const { lang } = useLanguage();
  const t = translations[lang].cta;

  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.22 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#eef1f4] py-24 sm:py-28"
    >
      {/* ambient cinematic background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[15%] h-72 w-72 rounded-full bg-[#00FF88]/10 blur-3xl" />
        <div className="absolute right-[-6%] top-[8%] h-80 w-80 rounded-full bg-[#00FF88]/8 blur-3xl" />
        <div className="absolute bottom-[-18%] left-[35%] h-72 w-72 rounded-full bg-[#0E2A1F]/8 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <a
          href={LEAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative block overflow-hidden rounded-[36px] border border-[#00FF88]/25 bg-[linear-gradient(135deg,rgba(9,27,22,0.98)_0%,rgba(22,53,48,0.96)_32%,rgba(56,90,86,0.92)_68%,rgba(99,137,130,0.92)_100%)] p-[1px] shadow-[0_30px_100px_rgba(0,0,0,0.28)] transition-all duration-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* glass inner */}
          <div className="relative overflow-hidden rounded-[35px] bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.04)_100%)] px-6 py-8 backdrop-blur-sm sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            {/* cinematic sweep */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[35px]">
              <div className="absolute inset-y-0 left-[-22%] w-[30%] rotate-[12deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-60 animate-[ctaSweep_8s_linear_infinite]" />
            </div>

            {/* glow accents */}
            <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#00FF88]/16 blur-3xl transition-all duration-700 group-hover:bg-[#00FF88]/22" />
            <div className="pointer-events-none absolute right-[-40px] top-[-30px] h-56 w-56 rounded-full bg-white/8 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-70px] left-[34%] h-44 w-44 rounded-full bg-[#00FF88]/10 blur-3xl" />

            {/* floating micro particles */}
            <div className="pointer-events-none absolute inset-0">
              <span className="absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-[#00FF88]/55 blur-[1px] animate-pulse" />
              <span className="absolute left-[42%] top-[24%] h-2 w-2 rounded-full bg-white/45 blur-[1px] animate-pulse" />
              <span className="absolute right-[10%] top-[20%] h-2 w-2 rounded-full bg-[#00FF88]/45 blur-[1px] animate-pulse" />
              <span className="absolute left-[28%] bottom-[16%] h-2 w-2 rounded-full bg-white/35 blur-[1px] animate-pulse" />
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.9fr] lg:gap-12">
              {/* left side */}
              <div
                className={`max-w-3xl transition-all duration-1000 delay-150 ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-[#00FF88]/25 bg-[#00FF88]/8 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.08)]">
                  <span className="h-2 w-2 rounded-full bg-[#00FF88] shadow-[0_0_12px_rgba(0,255,136,0.55)]" />
                  {t.badge}
                </div>

                <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
                  {t.heading}
                  <span className="block text-[#00FF88]">
                    {t.headingSpan}
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                  {t.body}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {t.chips.map((item, index) => (
                    <span
                      key={item}
                      className={`inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm transition-all duration-700 ${
                        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                      }`}
                      style={{ transitionDelay: `${250 + index * 90}ms` }}
                    >
                      <span className="h-2 w-2 rounded-full bg-[#00FF88]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* right side */}
              <div
                className={`relative transition-all duration-1000 delay-300 ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="absolute inset-0 rounded-[30px] bg-[#00FF88]/16 blur-2xl transition-all duration-500 group-hover:bg-[#00FF88]/24" />

                <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(6,18,36,0.96)_0%,rgba(10,24,43,0.95)_100%)] p-5 shadow-[0_20px_55px_rgba(0,0,0,0.30)] backdrop-blur-xl sm:p-6">
                  {/* mini moving light */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-y-0 left-[-18%] w-[24%] rotate-[16deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)] animate-[ctaSweep_4.4s_linear_infinite]" />
                  </div>

                  <div className="relative space-y-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#00FF88]/20 bg-[#00FF88]/8 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00FF88]">
                      <span className="animate-pulse">⚡</span>
                      {t.fastBadge}
                    </span>

                    <div className="space-y-3">
                      <span className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#00FF88] px-6 text-center text-base font-extrabold text-[#062014] shadow-[0_16px_40px_rgba(0,255,136,0.24)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_22px_50px_rgba(0,255,136,0.34)]">
                        {t.primaryBtn}
                      </span>

                      <span className="inline-flex h-14 w-full items-center justify-center rounded-full border border-white/14 bg-white/5 px-6 text-center text-base font-bold text-white/92 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/8">
                        {t.secondaryBtn}
                      </span>
                    </div>

                    <p className="text-sm leading-7 text-white/60">
                      {t.footer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
