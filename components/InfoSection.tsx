"use client";

import { productFacts } from "@/config/site";
import { useLocale } from "@/components/LocaleProvider";

export function InfoSection() {
  const { locale } = useLocale();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10">
      <div className="thin-rule pt-8">
        <h2 className="text-2xl text-ink">{locale === "ru" ? "Что вы получаете (Base)" : "What you get (Base)"}</h2>
        <ul className="mt-5 grid gap-3 text-[15px] leading-relaxed text-muted md:grid-cols-2">
          {productFacts.map((fact) => (
            <li key={fact.ru} className="rounded-sm border border-line px-4 py-3">
              <p>{locale === "ru" ? fact.ru : fact.en}</p>
              <p className="mt-1 text-xs text-muted/80">{locale === "ru" ? `(${fact.en})` : `(${fact.ru})`}</p>
            </li>
          ))}
        </ul>
        <ul className="mt-3 grid gap-3 text-[15px] leading-relaxed text-muted md:grid-cols-2">
          <li className="rounded-sm border border-line px-4 py-3">
            <p>{locale === "ru" ? "2 авторские контактные печати 10×15 в архивном конверте" : "Two author contact prints 10×15 in an archival envelope"}</p>
            <p className="mt-1 text-xs text-muted/80">
              {locale === "ru"
                ? "(Two author contact prints 10×15 in an archival envelope)"
                : "(2 авторские контактные печати 10×15 в архивном конверте)"}
            </p>
          </li>
          <li className="rounded-sm border border-line px-4 py-3">
            <p>{locale === "ru" ? "Предварительные сканы для выбора 2 кадров" : "Preview scans to select your 2 print frames"}</p>
            <p className="mt-1 text-xs text-muted/80">
              {locale === "ru" ? "(Preview scans to select your 2 print frames)" : "(Предварительные сканы для выбора 2 кадров)"}
            </p>
          </li>
          <li className="rounded-sm border border-line px-4 py-3">
            <p>{locale === "ru" ? "Цифровые сканы для личного использования" : "Digital scans for personal use"}</p>
            <p className="mt-1 text-xs text-muted/80">
              {locale === "ru" ? "(Digital scans for personal use)" : "(Цифровые сканы для личного использования)"}
            </p>
          </li>
          <li className="rounded-sm border border-line px-4 py-3">
            <p>{locale === "ru" ? "Аналоговая и ручная работа на всех этапах" : "Analog and handmade work throughout the process"}</p>
            <p className="mt-1 text-xs text-muted/80">
              {locale === "ru" ? "(Analog and handmade work throughout the process)" : "(Аналоговая и ручная работа на всех этапах)"}
            </p>
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted">
          {locale === "ru"
            ? "Фотографии на сайте — примеры прошлых сессий. Дополнения доступны в пакетах Signature и Collector."
            : "Photos on the site are examples from past sessions. Extra deliverables are included in Signature and Collector."}
        </p>
      </div>
    </section>
  );
}
