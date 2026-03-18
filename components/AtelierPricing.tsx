"use client";

import { useLocale } from "@/components/LocaleProvider";

const packages = [
  {
    titleRu: "Базовый",
    titleEn: "Basic portrait",
    price: "10 000 ₽",
    leadRu: "Короткая съёмка, собранный результат.",
    leadEn: "A shorter session with a clear, finished result.",
    bodyRu: [
      "4 итоговых кадра в сканах",
      "2 отпечатка",
      "Конверт"
    ],
    bodyEn: ["4 final scanned frames", "2 prints", "Envelope"]
  },
  {
    titleRu: "Расширенный",
    titleEn: "Extended portrait",
    price: "12 000 ₽",
    leadRu: "Более цельный набор, с оформлением.",
    leadEn: "A fuller set with a more assembled presentation.",
    bodyRu: [
      "6 итоговых кадров в сканах",
      "4 отпечатка",
      "Папка",
      "2 портрета в паспарту"
    ],
    bodyEn: ["6 final scanned frames", "4 prints", "Folder", "2 matted portraits"]
  },
  {
    titleRu: "Максимальный",
    titleEn: "Maximum portrait",
    price: "15 000 ₽",
    leadRu: "Завершённая серия, которую можно хранить.",
    leadEn: "A complete series meant to stay with you.",
    bodyRu: [
      "8 итоговых кадров в сканах",
      "6 отпечатков",
      "2 портрета в рамке",
      "Оформление"
    ],
    bodyEn: ["8 final scanned frames", "6 prints", "2 framed portraits", "Presentation"]
  }
];

const pricingNote = {
  titleRu: "Отдельно",
  titleEn: "Additional",
  addOnsLeadRu: "Если после съёмки хочется добавить ещё один кадр или сделать дополнительные отпечатки, это можно обсудить отдельно.",
  addOnsLeadEn: "If you would like to add one more frame or prepare extra prints after the session, this can be arranged separately.",
  addOnsRu: ["Дополнительные кадры", "Дополнительные отпечатки"],
  addOnsEn: ["Additional frames", "Additional prints"],
  streetTitleRu: "Городской портрет",
  streetTitleEn: "Street portrait",
  streetBodyRu:
    "Иногда я выхожу в город с камерой. В такие дни можно сделать один портрет, без большой серии и без полного оформления.",
  streetBodyEn:
    "Sometimes I go into the city with the camera. On such days it is possible to make a single portrait without a larger series or full presentation.",
  closingRu: "Такие вещи лучше согласовать напрямую, в зависимости от задачи.",
  closingEn: "It is better to agree on these details directly, depending on the request."
} as const;

export function AtelierPricing() {
  const { locale } = useLocale();

  return (
    <section id="pricing" className="paper-section paper-section--pricing">
      <div className="paper-section__inner">
        <h2>{locale === "ru" ? "Форматы портрета" : "Portrait formats"}</h2>
        <div className="pricing-grid">
          {packages.map((pkg) => (
            <article key={pkg.titleRu} className="pricing-card">
              <h3>{locale === "ru" ? pkg.titleRu : pkg.titleEn}</h3>
              <p className="pricing-card__price">{pkg.price}</p>
              <p className="pricing-card__lead">{locale === "ru" ? pkg.leadRu : pkg.leadEn}</p>
              <ul className="pricing-card__list">
                {(locale === "ru" ? pkg.bodyRu : pkg.bodyEn).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="pricing-note">
          <h3>{locale === "ru" ? pricingNote.titleRu : pricingNote.titleEn}</h3>
          <p>{locale === "ru" ? pricingNote.addOnsLeadRu : pricingNote.addOnsLeadEn}</p>
          <ul className="pricing-note__list">
            {(locale === "ru" ? pricingNote.addOnsRu : pricingNote.addOnsEn).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="pricing-note__section">
            <p className="pricing-note__section-title">{locale === "ru" ? pricingNote.streetTitleRu : pricingNote.streetTitleEn}</p>
            <p>{locale === "ru" ? pricingNote.streetBodyRu : pricingNote.streetBodyEn}</p>
            <p className="pricing-note__price-line">{locale === "ru" ? pricingNote.closingRu : pricingNote.closingEn}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
