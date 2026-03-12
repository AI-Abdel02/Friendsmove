"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

const SIZES_DE = ["1 Zimmer", "2 Zimmer", "3 Zimmer", "4 Zimmer", "5+ Zimmer", "Büro / Betrieb"];
const SIZES_EN = ["1 room", "2 rooms", "3 rooms", "4 rooms", "5+ rooms", "Office / Business"];

type Step = 1 | 2;

type FormState = {
  von: string;
  nach: string;
  datum: string;
  groesse: string;
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function QuoteForm({
  compact = false,
  embedded = false,
  dark = false,
}: {
  compact?: boolean;
  embedded?: boolean;
  dark?: boolean;
}) {
  const { lang } = useLanguage();
  const t = translations[lang].form;
  const sizes = lang === "en" ? SIZES_EN : SIZES_DE;

  const [form, setForm] = useState<FormState>({
    von: "",
    nach: "",
    datum: "",
    groesse: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [error, setError] = useState("");

  const update = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const stepOneValid = useMemo(() => {
    return (
      form.von.trim() &&
      form.nach.trim() &&
      form.datum.trim() &&
      form.groesse.trim()
    );
  }, [form.von, form.nach, form.datum, form.groesse]);

  const stepTwoValid = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      form.phone.trim().length >= 6 &&
      form.email.trim().includes("@")
    );
  }, [form.name, form.phone, form.email]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (step === 1) {
      if (!stepOneValid) {
        setError(t.errorStep1);
        return;
      }
      setStep(2);
      return;
    }

    if (!stepTwoValid) {
      setError(t.errorStep2);
      return;
    }

    setSubmitted(true);
  };

  const goBack = () => {
    setError("");
    setStep(1);
  };

  if (submitted) {
    return (
      <div className={`${dark ? "text-slate-50" : "text-brand-dark"} py-8 text-center`}>
        <div className="mb-3 text-4xl">✅</div>
        <h3 className="font-display mb-2 text-xl font-bold">{t.successTitle}</h3>
        <p className={`mx-auto max-w-md text-sm ${dark ? "text-slate-400" : "text-brand-muted"}`}>
          {t.successBody}
        </p>
      </div>
    );
  }

  const inputCls = dark
    ? "w-full rounded-xl border border-slate-700/80 bg-slate-900/60 px-3 py-3 text-[13px] text-slate-100 placeholder-slate-500 shadow-inner shadow-black/40 outline-none transition focus:border-[#16ff6a]/60 focus:ring-1 focus:ring-[#16ff6a]/40"
    : "w-full rounded-xl border border-brand-border bg-white px-3 py-3 text-[13px] text-brand-dark placeholder:text-brand-muted/70 outline-none transition focus:border-[#00FF88] focus:ring-2 focus:ring-[#00FF88]/15";

  const labelCls = dark
    ? "text-[11px] font-medium uppercase tracking-[0.12em] text-slate-300"
    : "text-[11px] font-medium uppercase tracking-[0.12em] text-brand-muted";

  const mutedCls = dark ? "text-slate-400" : "text-brand-muted";

  const shellCls = embedded
    ? ""
    : dark
    ? `rounded-[28px] border border-slate-800/80 bg-slate-900/80 backdrop-blur ${compact ? "p-5" : "p-6"}`
    : `rounded-[28px] border border-white/70 bg-white/95 shadow-[0_18px_44px_rgba(6,32,20,0.10)] backdrop-blur-sm ${compact ? "p-5" : "p-7 md:p-8"}`;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label={t.heading1}
      className={shellCls}
    >
      {/* top trust row */}
      <div className="mb-4 flex flex-wrap gap-2">
        {[t.badgeKostenlos, t.badgeUnverbindlich, t.badgeAntwort].map((item) => (
          <span
            key={item}
            className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
              dark
                ? "border border-slate-700 bg-slate-800/70 text-slate-300"
                : "border border-[#00FF88]/15 bg-[#F7FBF8] text-[#00A85B]"
            }`}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mb-4">
        {!embedded && !dark && (
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-accent">
            {t.badgeLabel}
          </p>
        )}

        <h3
          className={`font-display font-semibold ${
            dark ? "text-lg text-slate-50" : "text-xl text-brand-dark md:text-2xl"
          }`}
        >
          {step === 1 ? t.heading1 : t.heading2}
        </h3>

        <p className={`mt-1 text-sm ${mutedCls}`}>
          {step === 1 ? t.sub1 : t.sub2}
        </p>

        {/* progress */}
        <div className="mt-3">
          <div
            className={`h-2 w-full overflow-hidden rounded-full ${
              dark ? "bg-slate-800" : "bg-brand-border/70"
            }`}
          >
            <div
              className="h-full rounded-full bg-[#16ff6a] transition-all duration-300"
              style={{ width: step === 1 ? "50%" : "100%" }}
            />
          </div>

          <div className={`mt-2 flex justify-between text-[11px] ${mutedCls}`}>
            <span className={step === 1 ? "font-semibold text-[#00A85B]" : ""}>{t.step1}</span>
            <span className={step === 2 ? "font-semibold text-[#00A85B]" : ""}>{t.step2}</span>
          </div>
        </div>
      </div>

      {error && (
        <div
          className={`mb-4 rounded-xl px-4 py-3 text-sm ${
            dark
              ? "border border-red-500/20 bg-red-500/10 text-red-300"
              : "border border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {error}
        </div>
      )}

      {step === 1 && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <FormField label={t.from} id="von" labelCls={labelCls}>
            <input
              id="von"
              type="text"
              required
              placeholder={t.fromPlaceholder}
              value={form.von}
              onChange={(e) => update("von", e.target.value)}
              className={inputCls}
              aria-required="true"
            />
          </FormField>

          <FormField label={t.to} id="nach" labelCls={labelCls}>
            <input
              id="nach"
              type="text"
              required
              placeholder={t.toPlaceholder}
              value={form.nach}
              onChange={(e) => update("nach", e.target.value)}
              className={inputCls}
              aria-required="true"
            />
          </FormField>

          <FormField label={t.date} id="datum" labelCls={labelCls}>
            <input
              id="datum"
              type="date"
              required
              value={form.datum}
              onChange={(e) => update("datum", e.target.value)}
              className={inputCls}
              aria-required="true"
            />
          </FormField>

          <FormField label={t.size} id="groesse" labelCls={labelCls}>
            <select
              id="groesse"
              required
              value={form.groesse}
              onChange={(e) => update("groesse", e.target.value)}
              className={inputCls}
              aria-required="true"
            >
              <option value="">{t.sizePlaceholder}</option>
              {sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </FormField>
        </div>
      )}

      {step === 2 && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <FormField label={t.name} id="name" labelCls={labelCls}>
            <input
              id="name"
              type="text"
              required
              placeholder={t.namePlaceholder}
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputCls}
              aria-required="true"
            />
          </FormField>

          <FormField label={t.phone} id="phone" labelCls={labelCls}>
            <input
              id="phone"
              type="tel"
              required
              placeholder={t.phonePlaceholder}
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={inputCls}
              aria-required="true"
            />
          </FormField>

          <div className="sm:col-span-2">
            <FormField label={t.email} id="email" labelCls={labelCls}>
              <input
                id="email"
                type="email"
                required
                placeholder={t.emailPlaceholder}
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputCls}
                aria-required="true"
              />
            </FormField>
          </div>

          <div className="sm:col-span-2">
            <FormField label={t.message} id="message" labelCls={labelCls}>
              <textarea
                id="message"
                rows={4}
                placeholder={t.messagePlaceholder}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className={`${inputCls} resize-none`}
              />
            </FormField>
          </div>

          <div className="sm:col-span-2">
            <p className={`text-[11px] leading-relaxed ${mutedCls}`}>
              {t.privacy}
            </p>
          </div>
        </div>
      )}

      <div className={`mt-5 flex ${step === 2 ? "gap-3" : ""}`}>
        {step === 2 && (
          <button
            type="button"
            onClick={goBack}
            className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
              dark
                ? "border border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800"
                : "border border-brand-border bg-white text-brand-dark hover:bg-brand-card"
            }`}
          >
            {t.back}
          </button>
        )}

        <button
          type="submit"
          className={`${
            step === 2 ? "flex-1" : "w-full"
          } rounded-full py-3 text-sm font-semibold text-black transition ${
            dark
              ? "bg-[#16ff6a] shadow-[0_0_30px_rgba(22,255,106,0.4)] hover:bg-[#12e15c]"
              : "bg-[#00FF88] shadow-[0_10px_30px_rgba(0,255,136,0.22)] hover:bg-[#10f58a] hover:scale-[1.01]"
          }`}
        >
          {step === 1 ? t.next : t.submit}
        </button>
      </div>

      <p className={`mt-3 text-center text-[11px] ${mutedCls}`}>
        {t.footer}
      </p>
    </form>
  );
}

function FormField({
  label,
  id,
  labelCls,
  children,
}: {
  label: string;
  id: string;
  labelCls: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={labelCls}>
        {label}
      </label>
      {children}
    </div>
  );
}
