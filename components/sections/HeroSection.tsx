"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

const LEAD_URL = "https://app.friendsmove.com/web/public/vue-app/lead";
const GOOGLE_REVIEWS_URL = "https://share.google/Eh9LHySv1Rh9X6SLw";
const GOOGLE_WRITE_REVIEW_URL = "https://g.page/r/CbPVHV7GWk9pEAE/review";

export default function HeroSection() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgTransform = useMemo(() => {
    const y = Math.min(scrollY * 0.22, 120);
    return `translateY(${y}px) scale(1.06)`;
  }, [scrollY]);

  const glowTransform = useMemo(() => {
    const y = Math.min(scrollY * 0.12, 70);
    return `translateY(${y}px)`;
  }, [scrollY]);

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#03110d]"
      aria-labelledby="hero-heading"
    >
      {/* Background image layer */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: bgTransform }}
        aria-hidden="true"
      >
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,8,0.88)_0%,rgba(5,16,12,0.68)_34%,rgba(6,18,14,0.55)_58%,rgba(3,10,8,0.86)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_30%,rgba(0,255,136,0.16),transparent_26%),radial-gradient(circle_at_66%_30%,rgba(0,255,136,0.12),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(0,120,255,0.10),transparent_32%)]" />
      <div className="absolute inset-0 backdrop-[blur(1.4px)]" />

      {/* Cinematic moving glows */}
      <div
        className="pointer-events-none absolute left-[10%] top-[18%] h-[360px] w-[360px] rounded-full bg-[#00FF88]/12 blur-[120px] will-change-transform"
        style={{ transform: glowTransform }}
      />
      <div
        className="pointer-events-none absolute right-[10%] top-[14%] h-[320px] w-[320px] rounded-full bg-[#00FF88]/10 blur-[120px] will-change-transform"
        style={{ transform: `translateY(${Math.min(scrollY * 0.08, 50)}px)` }}
      />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[14%] top-[22%] h-2.5 w-2.5 rounded-full bg-[#00FF88]/45 blur-[1px] animate-pulse" />
        <span className="absolute left-[36%] top-[33%] h-2 w-2 rounded-full bg-white/35 blur-[1px] animate-pulse" />
        <span className="absolute right-[18%] top-[24%] h-2 w-2 rounded-full bg-[#00FF88]/35 blur-[1px] animate-pulse" />
        <span className="absolute left-[28%] bottom-[18%] h-2 w-2 rounded-full bg-white/30 blur-[1px] animate-pulse" />
      </div>

      {/* Hero container — pt reduced since topbar is no longer above navbar */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-[96px] sm:px-6 sm:pt-[100px] md:pt-[110px] lg:px-8 lg:pb-20">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 xl:gap-14">

          {/* Left content */}
          <div
            className={`transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
              <span className="h-2 w-2 rounded-full bg-[#00FF88] shadow-[0_0_12px_rgba(0,255,136,0.55)]" />
              Lambsheim · Frankenthal · Rhein-Neckar
            </div>

            <h1
              id="hero-heading"
              className={`mt-5 text-4xl font-black leading-[0.94] tracking-tight text-white transition-all duration-[1200ms] sm:text-5xl md:mt-6 lg:text-6xl xl:text-[5rem] ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Umzugsunternehmen in{" "}
              <span className="relative inline-block text-[#00FF88]">
                Lambsheim & Rhein-Neckar
                <span className="absolute -bottom-2 left-0 h-[10px] w-full bg-[#00FF88]/10 blur-md" />
              </span>
            </h1>

            <p
              className={`mt-5 max-w-2xl text-base leading-7 text-white/88 transition-all duration-[1400ms] sm:text-lg sm:leading-8 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              FriendsMove bietet professionelle Umzüge für Privatpersonen und
              Unternehmen in Lambsheim, Frankenthal, Mannheim, Heidelberg und
              der gesamten Rhein-Neckar-Region – transparent geplant,
              zuverlässig durchgeführt und auf Wunsch zum{" "}
              <span className="font-bold text-white">Festpreis</span>.
            </p>

            {/* Trust chips */}
            <div
              className={`mt-6 flex flex-wrap gap-2 transition-all duration-[1500ms] sm:gap-3 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {t.chips.map((chip, index) => (
                <div
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-[#0a1c15]/78 px-3 py-2 text-xs font-medium text-white shadow-[0_12px_24px_rgba(0,0,0,0.16)] backdrop-blur-md sm:px-4 sm:py-2.5 sm:text-sm"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <span className="h-2 w-2 rounded-full bg-[#00FF88]" />
                  {chip}
                </div>
              ))}
            </div>

            {/* CTA buttons — stacked on mobile, row on sm+ */}
            <div
              className={`mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center transition-all duration-[1600ms] ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <a
                href={LEAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#00FF88] px-7 text-sm font-extrabold text-[#062014] shadow-[0_18px_45px_rgba(0,255,136,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_58px_rgba(0,255,136,0.38)] sm:min-h-[60px] sm:px-8 sm:text-base"
              >
                <span className="mr-2">{t.cta1}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>

              <a
                href="tel:+4915203237063"
                className="inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-full border border-white/18 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/14 hover:-translate-y-0.5 sm:min-h-[60px] sm:gap-3 sm:px-7 sm:text-base"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#00FF88] sm:h-10 sm:w-10">
                  📞
                </span>
                {t.cta2}
              </a>

              <a
                href="tel:+491742083291"
                className="inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-full border border-[#00FF88]/18 bg-[#00FF88]/8 px-6 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-[#00FF88]/14 hover:-translate-y-0.5 sm:min-h-[60px] sm:gap-3 sm:px-7 sm:text-base"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00FF88]/12 text-[#00FF88] sm:h-10 sm:w-10">
                  ☎
                </span>
                {t.cta3}
              </a>
            </div>

            {/* Reviews row */}
            <div
              className={`mt-6 flex flex-wrap items-center gap-3 transition-all duration-[1750ms] sm:gap-4 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="flex -space-x-2">
                {["O", "S", "I", "U"].map((letter) => (
                  <div
                    key={letter}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#04120d] bg-[#0f241c] text-xs font-bold text-white sm:h-10 sm:w-10 sm:text-sm"
                  >
                    {letter}
                  </div>
                ))}
              </div>

              <p className="text-sm text-white/82">
                {t.reviewText}{" "}
                <span className="font-bold text-[#FFD54A]">★ 4,9/5</span>
              </p>

              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#00FF88] transition hover:text-white"
              >
                {t.reviewLink}
              </a>

              <a
                href={GOOGLE_WRITE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white/80 transition hover:text-white"
              >
                {t.reviewWrite}
              </a>
            </div>
          </div>

          {/* Right quote / lead card */}
          <div
            className={`w-full lg:ml-auto transition-all duration-[1200ms] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-[34px] bg-[#00FF88]/16 blur-2xl" />

              <div className="group relative overflow-hidden rounded-[28px] border border-white/18 bg-[linear-gradient(180deg,rgba(6,18,36,0.96)_0%,rgba(7,20,38,0.97)_100%)] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:rounded-[34px] sm:p-8">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00FF88]/80 to-transparent" />

                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="absolute inset-y-0 left-[-18%] w-[24%] rotate-[14deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)] opacity-60 animate-[ctaSweep_7.5s_linear_infinite]" />
                </div>

                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#00FF88]/12 blur-3xl" />

                <div className="relative">
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#00FF88]">
                    {t.formBadge}
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:mt-3 sm:text-3xl sm:text-[2.15rem]">
                    {t.formTitle}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-white/70 sm:mt-3 sm:leading-7">
                    {t.formSubtitle}
                  </p>

                  <div className="mt-4 flex gap-2 sm:mt-5">
                    <span className="h-1.5 w-12 rounded-full bg-[#00FF88]" />
                    <span className="h-1.5 w-4 rounded-full bg-white/30" />
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/90">
                        {t.formFrom}
                      </label>
                      <input
                        type="text"
                        placeholder={t.formFromPh}
                        className="h-12 w-full rounded-2xl border border-white/15 bg-white px-4 text-[#062014] placeholder:text-gray-400 outline-none transition focus:border-[#00FF88]/60 focus:bg-white sm:h-14"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/90">
                        {t.formTo}
                      </label>
                      <input
                        type="text"
                        placeholder={t.formToPh}
                        className="h-12 w-full rounded-2xl border border-white/15 bg-white px-4 text-[#062014] placeholder:text-gray-400 outline-none transition focus:border-[#00FF88]/60 focus:bg-white sm:h-14"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/90">
                        {t.formDate}
                      </label>
                      <input
                        type="date"
                        className="h-12 w-full rounded-2xl border border-white/15 bg-white px-4 text-[#062014] outline-none transition focus:border-[#00FF88]/60 focus:bg-white sm:h-14"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/90">
                        {t.formSize}
                      </label>
                      <select
                        defaultValue=""
                        className="h-12 w-full rounded-2xl border border-white/15 bg-white px-4 text-[#062014] outline-none transition focus:border-[#00FF88]/60 focus:bg-white sm:h-14"
                      >
                        <option value="" className="text-black">
                          {t.formSizePh}
                        </option>
                        <option className="text-black">1 Zimmer</option>
                        <option className="text-black">2 Zimmer</option>
                        <option className="text-black">3 Zimmer</option>
                        <option className="text-black">4 Zimmer</option>
                        <option className="text-black">Haus / Büro</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <a
                        href={LEAD_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#00FF88] px-6 text-base font-extrabold text-[#062014] shadow-[0_16px_40px_rgba(0,255,136,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_52px_rgba(0,255,136,0.38)] sm:h-16 sm:text-lg"
                      >
                        {t.formSubmit}
                      </a>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 text-center text-xs text-white/68 sm:mt-5 sm:text-sm">
                    <p>{t.formFooter1}</p>
                    <p>{t.formFooter2}</p>
                    <p className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                      <a
                        href="mailto:info@friendsmove.de"
                        className="transition hover:text-white"
                      >
                        info@friendsmove.de
                      </a>
                      <span>·</span>
                      <a
                        href="tel:+491742083291"
                        className="transition hover:text-white"
                      >
                        Hotline: +49 174 2083291
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
