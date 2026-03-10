"use client";

import { processGallery } from "@/config/site";
import { useLocale } from "@/components/LocaleProvider";

export function ProcessGallerySection() {
  const { locale } = useLocale();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
      <div className="thin-rule pt-8">
        <h2 className="text-2xl text-ink">{locale === "ru" ? "Как это выглядит" : "How it looks"}</h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">
          {locale === "ru"
            ? "Для многих важнее всего увидеть сам процесс. Эти кадры помогают представить прогулку, работу с камерой, проявку и тот момент, когда фотография становится готовой вещью."
            : "This block is not just for beauty. It helps show what my work looks like from the side and what happens between the meeting and the finished result."}
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {processGallery.map((item) => (
            <article key={item.titleRu} className="overflow-hidden rounded-sm border border-line bg-[#fcfaf5] shadow-card">
              <div className="aspect-[4/3] border-b border-line bg-[#e7dfd0]">
                <img src={item.image} alt={locale === "ru" ? item.titleRu : item.titleEn} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg text-ink">{locale === "ru" ? item.titleRu : item.titleEn}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {locale === "ru" ? item.bodyRu : item.bodyEn}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-3 text-sm text-muted">
          {locale === "ru"
            ? "Позже этот блок лучше заполнить реальными кадрами процесса: съёмка со стороны, зарядка камеры, проявка, отпечатки и выдача."
            : "Temporary images are used here for now. Later this block is best replaced with real process photographs: shooting from the side, loading the camera, development, prints and handover."}
        </p>
      </div>
    </section>
  );
}
