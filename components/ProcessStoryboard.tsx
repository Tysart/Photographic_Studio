"use client";

import { processFrames } from "@/config/site";
import { useLocale } from "@/components/LocaleProvider";

export function ProcessStoryboard() {
  const { locale } = useLocale();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
      <div className="thin-rule pt-8">
        <h2 className="text-2xl text-ink">{locale === "ru" ? "Как это ощущается" : "How it feels"}</h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">
          {locale === "ru"
            ? "Ниже короткая схема процесса, чтобы было легче представить не только саму съёмку, но и весь путь до готового результата."
            : "A short visual sequence of the process so you can imagine not just the session itself, but the full path to the finished result."}
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {processFrames.map((frame) => (
            <article key={frame.titleRu} className="rounded-sm border border-line bg-[#f8f2e6] p-5 shadow-card">
              <div className="mb-3 h-32 rounded-sm border border-line bg-[linear-gradient(180deg,#efe4d1_0%,#e4d3b8_100%)]" />
              <h3 className="text-lg text-ink">{locale === "ru" ? frame.titleRu : frame.titleEn}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {locale === "ru" ? frame.bodyRu : frame.bodyEn}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
