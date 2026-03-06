"use client";

import { useLocale } from "@/components/LocaleProvider";

export function AboutAtelier() {
  const { locale } = useLocale();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
      <div className="thin-rule pt-8">
        <h2 className="text-2xl text-ink">{locale === "ru" ? "Об ателье" : "About the atelier"}</h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">
          {locale === "ru"
            ? "TESSART — тихое портретное ателье одного человека. Я снимаю на чёрно-белую плёнку 6×9 и люблю свет Петербурга: вокзалы, лестницы, улицы центра. Это не постановка с костюмами: современная одежда, классическая атмосфера и ритм прогулки."
            : "TESSART is a quiet one-person portrait atelier. I work with black-and-white 6×9 film and love Saint Petersburg light: stations, staircases and central streets. No costumes, no staged glamour. Modern people, classic atmosphere."}
        </p>
        <p className="mt-2 text-sm text-muted">
          {locale === "ru" ? "Solo portrait atelier. Modern people, classic atmosphere." : "Тихое портретное ателье одного человека."}
        </p>
      </div>
    </section>
  );
}
