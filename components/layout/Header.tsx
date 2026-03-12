"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-[#06150f]/90 backdrop-blur-md"
      }`}
    >
      {/* Top bar */}
      <div
        className={`hidden md:flex items-center justify-between border-b px-6 py-2 text-sm ${
          scrolled
            ? "border-black/5 text-[#062014]/80"
            : "border-white/10 text-white/80"
        }`}
      >
        <div className="flex items-center gap-2">
          <span>📍</span>
          <span>Ihr Umzugspartner in Lambsheim</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="tel:+4915203237063" className="transition hover:opacity-100">
            +49 1520 3237063
          </a>
          <a
            href="mailto:info@friendsmove.de"
            className="transition hover:opacity-100"
          >
            info@friendsmove.de
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#062014] text-[#00FF88] font-black shadow-md">
            F
          </div>
          <span
            className={`text-3xl font-black tracking-tight ${
              scrolled ? "text-[#062014]" : "text-white"
            }`}
          >
            Friends<span className="text-[#00FF88]">Move</span>
          </span>
        </Link>

        <nav
          className={`hidden lg:flex items-center gap-8 font-medium ${
            scrolled ? "text-[#062014]" : "text-white"
          }`}
          aria-label="Hauptnavigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#00FF88]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language switch */}
          <div
            className={`hidden md:flex items-center gap-2 rounded-full border px-3 py-2 ${
              scrolled
                ? "border-black/10 bg-white text-[#062014]"
                : "border-white/15 bg-white/10 text-white"
            }`}
          >
            <button className="flex items-center gap-1 font-semibold">
              <span>🇩🇪</span>
              <span>DE</span>
            </button>
            <span className="opacity-40">|</span>
            <button className="flex items-center gap-1 font-semibold opacity-80">
              <span>🇬🇧</span>
              <span>EN</span>
            </button>
          </div>

          {/* Phone pill */}
          <a
            href="tel:+4915203237063"
            className={`hidden md:inline-flex min-h-[52px] items-center justify-center rounded-full px-5 font-bold transition ${
              scrolled
                ? "bg-[#f3f7f5] text-[#062014] border border-black/5"
                : "bg-white/10 text-white border border-white/15 backdrop-blur-md"
            }`}
          >
            +49 1520 3237063
          </a>

          {/* CTA */}
          <a
            href="https://app.friendsmove.com/web/public/vue-app/lead"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#00FF88] px-6 font-bold text-[#062014] shadow-[0_10px_30px_rgba(0,255,136,0.25)] transition hover:-translate-y-0.5"
          >
            Angebot anfragen
          </a>
        </div>
      </div>
    </header>
  );
}
