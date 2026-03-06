"use client";

import { howItWorks } from "@/config/site";
import { useLocale } from "@/components/LocaleProvider";

export function HowItWorks() {
  const { locale } = useLocale();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
      <div className="thin-rule pt-8">
        <h2 className="text-2xl text-ink">{locale === "ru" ? "Как проходит" : "How it works"}</h2>
        <ol className="mt-5 grid gap-3 md:grid-cols-3">
          {howItWorks.map((step, index) => (
            <li key={step.ru} className="rounded-sm border border-line px-4 py-4 text-[15px] leading-relaxed text-muted">
              <p className="mb-2 text-xs uppercase tracking-[0.16em] text-accent">
                {locale === "ru" ? `Шаг ${index + 1}` : `Step ${index + 1}`}
              </p>
              <p>{locale === "ru" ? step.ru : step.en}</p>
              <p className="mt-1 text-xs text-muted/80">{locale === "ru" ? `(${step.en})` : `(${step.ru})`}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
