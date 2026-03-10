"use client";

import { useLocale } from "@/components/LocaleProvider";

export function PriceCard() {
  const { locale } = useLocale();
  const packages = [
    {
      nameRu: "Базовый",
      nameEn: "Base",
      price: "10 000 ₽",
      leadRu: "Короткая прогулка и первое знакомство",
      leadEn: "A first introduction to the format",
      image: "/images/gallery/04.jpg",
      imageAltRu: "Временное изображение для базового формата",
      imageAltEn: "Temporary image for the base format",
      featuresRu: ["До 4 итоговых кадров в скане", "2 контактных отпечатка в конверте", "Подходит для первого знакомства с плёнкой"],
      featuresEn: ["Up to 4 final scans", "Two contact prints in an envelope", "A first introduction to the format"]
    },
    {
      nameRu: "Авторский",
      nameEn: "Signature",
      price: "15 000 ₽",
      leadRu: "Основной формат для прогулки по городу",
      leadEn: "The core format",
      image: "/images/gallery/12.jpg",
      imageAltRu: "Временное изображение для авторского формата",
      imageAltEn: "Temporary image for the signature format",
      featuresRu: ["До 6 итоговых кадров в скане", "1 отпечаток в конверте", "1 отпечаток в рамке", "Самый цельный вариант по результату и подаче"],
      featuresEn: ["Up to 6 final scans", "One print in an envelope", "One framed print", "The core package balancing result and presentation"]
    },
    {
      nameRu: "Коллекционный",
      nameEn: "Collector",
      price: "25 000 ₽",
      leadRu: "Старший формат с полной подачей",
      leadEn: "A larger format with rarer presentation",
      image: "/images/gallery/18.jpg",
      imageAltRu: "Временное изображение для коллекционного формата",
      imageAltEn: "Temporary image for the collector format",
      featuresRu: ["До 8 итоговых кадров в скане", "2 отпечатка в конверте и 2 в рамке", "Коробочка и более собранная выдача", "Приоритет по срокам"],
      featuresEn: ["Up to 8 final scans", "Two prints in envelopes and two framed prints", "A rarer author presentation", "Priority timing"]
    }
  ] as const;

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
      <div className="thin-rule pt-8">
        <h2 className="text-2xl text-ink">{locale === "ru" ? "Стоимость" : "Pricing"}</h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">
          {locale === "ru"
            ? "Ниже основные форматы съёмки. Если вы впервые пробуете такой портрет, чаще всего удобно начать с базового или авторского варианта."
            : "Below are the main formats. If this is your first film session, the basic or core package is usually enough."}
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {packages.map((item) => (
            <article key={item.nameRu} className="overflow-hidden rounded-sm border border-line bg-[#fcfaf5] shadow-card">
              <div className="aspect-[4/3] border-b border-line bg-[#e7dfd0]">
                <img
                  src={item.image}
                  alt={locale === "ru" ? item.imageAltRu : item.imageAltEn}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-sm uppercase tracking-[0.14em] text-accent">{locale === "ru" ? item.nameRu : item.nameEn}</p>
                <p className="mt-2 text-2xl text-ink">{item.price}</p>
                <p className="mt-2 text-sm text-muted">{locale === "ru" ? item.leadRu : item.leadEn}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-muted marker:text-accent">
                  {(locale === "ru" ? item.featuresRu : item.featuresEn).map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-sm border border-line bg-[#f8f2e6] p-5">
          <h3 className="text-lg text-ink">{locale === "ru" ? "Малые форматы" : "Smaller formats"}</h3>
          <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-muted">
            {locale === "ru"
              ? "Есть и более короткие форматы: Первый опыт, Контактная печать и Отпечаток в рамке. Их удобно обсудить отдельно, если вам хочется совсем небольшую съёмку или один выразительный кадр."
              : "If you prefer a shorter introduction to the format, there are also smaller options: First Experience, Contact Print and Framed Print. These are quieter formats that can be discussed in the conversation."}
          </p>
        </div>

        <p className="mt-4 text-sm text-muted">
          {locale === "ru"
            ? "Студия, входные билеты и специальные локации оплачиваются отдельно, если они нужны."
            : "Studio rent, tickets and special locations are paid separately if needed."}
        </p>
        <p className="mt-1 text-sm text-muted">
          {locale === "ru"
            ? "В каждом формате заранее определено количество итоговых кадров. Если у вас особый маршрут, подарок или съёмка в студии, это можно обсудить отдельно."
            : "Each format includes a predefined number of final frames. If you need a more specific version for your idea, it can be discussed separately."}
        </p>
        <p className="mt-1 text-xs text-muted/80">
          {locale === "ru"
            ? "Сейчас в карточках стоят временные изображения из галереи. Позже их лучше заменить на реальные фотографии конверта, рамки и коробочки."
            : "The cards currently use temporary gallery images. Later they are best replaced with real photos of the envelope, frame and box."}
        </p>
      </div>
    </section>
  );
}
