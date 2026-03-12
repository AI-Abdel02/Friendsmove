"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

const LEAD_URL = "https://app.friendsmove.com/web/public/vue-app/lead";
const WHATSAPP_URL = "https://wa.me/491742083291";

export default function Navigation() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  const [scrolled, setScrolled] = useState(false);
  const [downbarVisible, setDownbarVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Downbar slides in from bottom after scrolling 300px
      setDownbarVisible(y > 300);
      lastScrollY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: "/dienstleistungen", label: t.nav.services },
    { href: "/regionen",         label: t.nav.regions },
    { href: "/preise",           label: t.nav.prices },
    { href: "/faq",              label: t.nav.faq },
    { href: "/ueber-uns",        label: t.nav.about },
    { href: "/kontakt",          label: t.nav.contact },
  ];

  const isLight = scrolled;

  return (
    <>
      {/* ─── Fixed header — navbar only ───────────────────────────────────── */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`transition-all duration-300 ${
            isLight
              ? "border-b border-black/5 bg-[#F5F3EC]/92 shadow-[0_14px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl"
              : "bg-[#06150f]/78 backdrop-blur-xl"
          }`}
        >
          <div className="mx-auto flex h-[86px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center gap-3 pr-4 lg:pr-6"
              aria-label="FriendsMove – Startseite"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#062014] text-lg font-black text-[#00FF88] shadow-[0_10px_24px_rgba(0,0,0,0.16)]">
                F
              </div>
              <span
                className={`whitespace-nowrap text-[1.7rem] font-black leading-none tracking-tight sm:text-[2rem] ${
                  isLight ? "text-[#062014]" : "text-white"
                }`}
              >
                Friends<span className="text-[#00FF88]">Move</span>
              </span>
            </Link>

            {/* Desktop nav links */}
            <nav
              className={`hidden xl:flex flex-1 items-center justify-center gap-8 text-[15px] font-semibold ${
                isLight ? "text-[#062014]" : "text-white"
              }`}
              aria-label="Hauptnavigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap transition hover:text-[#00FF88]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex shrink-0 items-center gap-3 pl-4 lg:pl-6">
              {/* Language switcher */}
              <div
                className={`hidden xl:flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold ${
                  isLight
                    ? "border-black/10 bg-[#ECE9E0] text-[#062014]"
                    : "border-white/15 bg-white/10 text-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setLang("de")}
                  aria-pressed={lang === "de"}
                  className={`flex items-center gap-1.5 whitespace-nowrap transition ${
                    lang === "de" ? "opacity-100" : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <span>🇩🇪</span>
                  <span>DE</span>
                </button>
                <span className="opacity-30">|</span>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  aria-pressed={lang === "en"}
                  className={`flex items-center gap-1.5 whitespace-nowrap transition ${
                    lang === "en" ? "opacity-100" : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <span>🇬🇧</span>
                  <span>EN</span>
                </button>
              </div>

              {/* Phone (2xl+) */}
              <a
                href="tel:+4915203237063"
                className={`hidden 2xl:inline-flex min-h-[52px] items-center justify-center rounded-full px-5 text-sm font-bold whitespace-nowrap transition ${
                  isLight
                    ? "border border-black/10 bg-[#ECE9E0] text-[#062014]"
                    : "border border-white/15 bg-white/10 text-white backdrop-blur-md"
                }`}
              >
                +49 1520 3237063
              </a>

              {/* Primary CTA */}
              <a
                href={LEAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#00FF88] px-6 text-sm font-extrabold whitespace-nowrap text-[#062014] shadow-[0_14px_35px_rgba(0,255,136,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,255,136,0.35)]"
              >
                {t.nav.quote}
              </a>

              {/* Mobile burger */}
              <button
                type="button"
                aria-label="Menü öffnen"
                onClick={() => setMobileOpen(true)}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition xl:hidden ${
                  isLight
                    ? "border-black/10 bg-[#ECE9E0] text-[#062014]"
                    : "border-white/15 bg-white/10 text-white backdrop-blur-md"
                }`}
              >
                <span className="text-xl leading-none">☰</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Downbar — slides up from bottom when scrolled ────────────────── */}
      <div
        aria-hidden={!downbarVisible}
        className={`fixed inset-x-0 bottom-0 z-[60] transition-transform duration-300 ease-in-out ${
          downbarVisible && !mobileOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="relative overflow-hidden border-t border-[#0b3d2a] bg-[linear-gradient(90deg,#7dffd0_0%,#3ef7ae_18%,#00ff88_50%,#34f3a6_82%,#7dffd0_100%)]">
          {/* Shimmer overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_50%,rgba(255,255,255,0.28),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.10),transparent_30%),radial-gradient(circle_at_88%_45%,rgba(255,255,255,0.18),transparent_22%)]" />
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.55)_45%,transparent_65%)] animate-[topbarSweep_9s_linear_infinite]" />
          <div className="absolute inset-x-0 top-0 h-px bg-white/20" />

          <div className="relative mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">

            {/* Left — location badge */}
            <div className="flex min-w-0 items-center gap-2 text-[14px] font-semibold text-[#052519] sm:text-[15px]">
              <span className="text-[13px]">📍</span>
              <span className="truncate">{t.topbar.location}</span>
            </div>

            {/* Center — offer pill (desktop) */}
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hidden lg:flex items-center gap-4 overflow-hidden rounded-full border border-[#0d5b3b]/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.10)_100%)] px-6 py-2.5 text-[13px] font-extrabold text-[#052519] shadow-[0_12px_28px_rgba(5,37,25,0.14),inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_16px_34px_rgba(5,37,25,0.18),inset_0_1px_0_rgba(255,255,255,0.4)]"
            >
              <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.32)_48%,transparent_72%)] animate-[topbarSweep_4.5s_linear_infinite]" />
              <span className="absolute inset-0 rounded-full ring-1 ring-white/20" />
              <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#062014] text-[12px] font-black text-[#00FF88] shadow-[0_6px_14px_rgba(6,32,20,0.25)]">
                ⚡
              </span>
              <span className="relative whitespace-nowrap">{t.topbar.offer}</span>
              <span className="relative h-4 w-px bg-[#052519]/15" />
              <span className="relative whitespace-nowrap text-[#052519]/75">{t.topbar.limited}</span>
            </a>

            {/* Right — WhatsApp + mobile offer */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
              {/* WhatsApp button */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp kontaktieren"
                className="inline-flex h-9 items-center gap-2 rounded-full border border-[#0d5b3b]/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.15)_100%)] px-3 text-[12px] font-extrabold text-[#052519] shadow-[0_8px_18px_rgba(5,37,25,0.10)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_12px_22px_rgba(5,37,25,0.14)] sm:px-4"
              >
                <svg
                  className="h-4 w-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="hidden sm:inline">{t.topbar.whatsapp}</span>
              </a>

              {/* Phone — xl+ only */}
              <a
                href="tel:+4915203237063"
                className="hidden xl:inline-flex items-center justify-center rounded-full border border-[#0d5b3b]/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.14)_100%)] px-5 py-2.5 text-[14px] font-extrabold text-[#052519] shadow-[0_8px_20px_rgba(5,37,25,0.10),inset_0_1px_0_rgba(255,255,255,0.28)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px]"
              >
                +49 1520 3237063
              </a>

              {/* Mobile offer shortcut */}
              <a
                href={LEAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center justify-center rounded-full border border-[#0d5b3b]/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.15)_100%)] px-3 text-[12px] font-extrabold text-[#052519] shadow-[0_8px_18px_rgba(5,37,25,0.10)] backdrop-blur-sm lg:hidden"
              >
                {t.topbar.mobileOffer}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Mobile drawer ──────────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[70] xl:hidden transition-all duration-300 ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Menü schließen"
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 bg-[#02110c]/60 backdrop-blur-sm"
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-hidden border-l border-white/10 bg-[linear-gradient(180deg,rgba(4,18,13,0.98)_0%,rgba(8,25,19,0.98)_100%)] shadow-[0_30px_80px_rgba(0,0,0,0.38)] transition-transform duration-500 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(0,255,136,0.14),transparent_26%),radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.06),transparent_24%)]" />

          <div className="relative flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#062014] text-base font-black text-[#00FF88]">
                  F
                </div>
                <span className="text-xl font-black text-white">
                  Friends<span className="text-[#00FF88]">Move</span>
                </span>
              </div>

              <button
                type="button"
                aria-label="Schließen"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white"
              >
                ✕
              </button>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {/* Offer card */}
              <div className="mb-6 rounded-3xl border border-[#00FF88]/20 bg-[linear-gradient(135deg,rgba(0,255,136,0.14),rgba(255,255,255,0.04))] p-4 shadow-[0_12px_28px_rgba(0,255,136,0.08)] backdrop-blur-md">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#00FF88]">
                  {t.mobile.exclusiveOffer}
                </p>
                <p className="mt-2 text-sm font-bold leading-6 text-white">
                  {t.mobile.earlyBird}
                </p>
                <a
                  href={LEAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#00FF88] px-5 text-sm font-extrabold text-[#062014]"
                >
                  {t.mobile.openOffer}
                </a>
              </div>

              {/* Nav links */}
              <nav className="space-y-2" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-base font-semibold text-white transition hover:bg-white/[0.06]"
                  >
                    <span>{link.label}</span>
                    <span className="text-white/40">→</span>
                  </Link>
                ))}
              </nav>

              {/* Contact + utility */}
              <div className="mt-6 space-y-3">
                {/* WhatsApp — prominent in mobile drawer */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#25D366] px-5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(37,211,102,0.20)] transition hover:opacity-90"
                >
                  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>

                <a
                  href="tel:+4915203237063"
                  className="flex min-h-[52px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 text-sm font-bold text-white"
                >
                  +49 1520 3237063
                </a>

                <a
                  href="mailto:info@friendsmove.de"
                  className="flex min-h-[52px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 text-sm font-bold text-white"
                >
                  info@friendsmove.de
                </a>

                {/* Language switcher */}
                <div className="flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white">
                  <button
                    type="button"
                    onClick={() => setLang("de")}
                    aria-pressed={lang === "de"}
                    className={`flex items-center gap-2 transition ${
                      lang === "de" ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    <span>🇩🇪</span>
                    <span>DE</span>
                  </button>
                  <span className="opacity-30">|</span>
                  <button
                    type="button"
                    onClick={() => setLang("en")}
                    aria-pressed={lang === "en"}
                    className={`flex items-center gap-2 transition ${
                      lang === "en" ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    <span>🇬🇧</span>
                    <span>EN</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Sticky bottom CTA */}
            <div className="border-t border-white/10 p-6">
              <a
                href={LEAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#00FF88] px-6 text-base font-extrabold text-[#062014] shadow-[0_16px_40px_rgba(0,255,136,0.24)]"
              >
                {t.mobile.freeQuote}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
