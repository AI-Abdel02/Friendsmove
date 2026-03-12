import Link from "next/link";
import { CITIES } from "@/lib/seo";

type CityMarqueeProps = {
  speed?: "slow" | "normal" | "fast";
  dark?: boolean;
};

export default function CityMarquee({
  speed = "normal",
  dark = false,
}: CityMarqueeProps) {
  const speedClass =
    speed === "fast"
      ? "animate-[marquee_18s_linear_infinite]"
      : speed === "slow"
      ? "animate-[marquee_40s_linear_infinite]"
      : "animate-[marquee_28s_linear_infinite]";

  const bgClass = dark ? "bg-[#0E2A1F]" : "bg-brand-bg";
  const textClass = dark ? "text-white/90" : "text-brand-dark";
  const chipClass = dark
    ? "border-white/15 bg-white/5 hover:bg-white/10"
    : "border-brand-border bg-white hover:bg-brand-bg";

  const items = [...CITIES, ...CITIES];

  return (
    <div className={`overflow-hidden ${bgClass}`}>
      <div className={`flex min-w-max gap-3 ${speedClass}`}>
        {items.map((city, index) => (
          <Link
            key={`${city.slug}-${index}`}
            href={`/regionen/${city.slug}`}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${chipClass} ${textClass}`}
          >
            {city.emoji} {city.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

