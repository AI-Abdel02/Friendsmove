"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: "★",
    value: "4,9 / 5",
    label: "Google-Bewertung",
    sublabel: "87 verifizierte Bewertungen",
  },
  {
    icon: "🏠",
    value: "120+",
    label: "Umzüge",
    sublabel: "im Rhein-Neckar-Gebiet",
  },
  {
    icon: "⚡",
    value: "60 Min.",
    label: "Antwortzeit",
    sublabel: "Garantierte Rückmeldung",
  },
  {
    icon: "🛡",
    value: "100%",
    label: "Vollversichert",
    sublabel: "Jeder Transport geschützt",
  },
  {
    icon: "📅",
    value: "Seit 2015",
    label: "Erfahrung",
    sublabel: "Regionaler Experte",
  },
];

export default function TrustStrip() {
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
      { threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#03261a_0%,#042c1d_100%)] py-14 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#00FF88]/10 blur-3xl" />
        <div className="absolute right-[-6%] top-[15%] h-56 w-56 rounded-full bg-[#00FF88]/8 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_0%,transparent_18%,transparent_82%,rgba(255,255,255,0.03)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-8 border-y border-white/8 py-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative flex flex-col items-center px-5 text-center transition-all duration-1000 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              } ${
                index !== stats.length - 1
                  ? "lg:border-r lg:border-white/8"
                  : ""
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[#00FF88]/0 blur-2xl transition-all duration-500 group-hover:bg-[#00FF88]/8" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-xl text-[#FFD54A] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm">
                {stat.icon}
              </div>

              <div className="relative mt-4 text-4xl font-black leading-none tracking-tight text-white sm:text-5xl">
                {stat.value}
              </div>

              <div className="relative mt-2 text-xs font-extrabold uppercase tracking-[0.14em] text-white/72 sm:text-sm">
                {stat.label}
              </div>

              <div className="relative mt-2 text-sm text-[#00FF88]/90">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}