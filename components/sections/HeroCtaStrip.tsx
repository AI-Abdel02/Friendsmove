import { PHONE, PHONE_DISPLAY } from "@/lib/seo";

const LEAD_URL = "https://app.friendsmove.com/web/public/vue-app/lead";

export default function HeroCtaStrip() {
  return (
    <section className="mx-auto mt-4 max-w-6xl px-4 pb-10 lg:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-[#16ff6a]/25 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-emerald-900/50 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.9)]">
        {/* Green glow */}
        <div className="pointer-events-none absolute -inset-32 opacity-50 blur-3xl" aria-hidden="true">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(22,255,106,0.35),_transparent_60%)]" />
        </div>

        <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Left: text */}
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#16ff6a]">
              JETZT UNVERBINDLICH ANFRAGEN
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight text-slate-50 sm:text-3xl lg:text-[32px]">
              In 60 Minuten ein persönliches Umzugsangebot
              <span className="block text-[#16ff6a]">
                für Ihren Umzug im Rhein-Neckar-Gebiet.
              </span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              Teilen Sie uns Ihre Umzugsdetails mit – wir prüfen Verfügbarkeit,
              kalkulieren den Festpreis und melden uns schnellstmöglich bei Ihnen.
            </p>
          </div>

          {/* Right: CTA block */}
          <div className="flex w-full max-w-sm flex-col gap-3 rounded-2xl bg-slate-950/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-[#16ff6a] py-3 text-center text-sm font-semibold text-black shadow-[0_0_40px_rgba(22,255,106,0.6)] transition hover:bg-[#12e15c]"
            >
              Kostenloses Angebot jetzt anfordern
            </a>
            <a
              href={`tel:${PHONE}`}
              className="w-full rounded-full border border-slate-600/80 bg-transparent py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-slate-300 hover:bg-slate-900/60"
            >
              Direkt telefonisch beraten lassen
            </a>
            <p className="mt-1 text-[11px] text-slate-400">
              Kostenlos &amp; unverbindlich · Antwort in 60 Minuten ·
              Festpreis auf Wunsch möglich
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
