"use client";

import { useLocale } from "@/components/LocaleProvider";

const packages = [
  {
    titleRu: "Базовый",
    titleEn: "Base",
    price: "10 000 ₽",
    leadRu: "Короткая прогулка и первое знакомство",
    leadEn: "A first introduction to the format",
    bodyRu: [
      "До 4 итоговых кадров в скане",
      "2 контактных отпечатка в конверте",
      "Подходит для первого знакомства с плёнкой"
    ],
    bodyEn: ["Up to 4 final scans", "Two contact prints in an envelope", "A first introduction to the format"]
  },
  {
    titleRu: "Авторский",
    titleEn: "Author",
    price: "15 000 ₽",
    leadRu: "Основной формат для прогулки по городу",
    leadEn: "The core format",
    bodyRu: [
      "До 6 итоговых кадров в скане",
      "1 отпечаток в конверте",
      "1 отпечаток в рамке",
      "Самый цельный вариант по результату и подаче"
    ],
    bodyEn: ["Up to 6 final scans", "One print in an envelope", "One framed print", "The core package balancing result and presentation"]
  },
  {
    titleRu: "Коллекционный",
    titleEn: "Collectible",
    price: "25 000 ₽",
    leadRu: "Старший формат с полной подачей",
    leadEn: "A larger format with rarer presentation",
    bodyRu: [
      "До 8 итоговых кадров в скане",
      "2 отпечатка в конверте и 2 в рамке",
      "Коробочка и более собранная выдача",
      "Приоритет по срокам"
    ],
    bodyEn: ["Up to 8 final scans", "Two prints in envelopes and two framed prints", "A rarer author presentation", "Priority timing"]
  }
];

export function AtelierPricing() {
  const { locale } = useLocale();

  return (
    <section id="pricing" className="paper-section paper-section--pricing">
      <div className="paper-section__inner">
        <h2>{locale === "ru" ? "Цены" : "Pricing"}</h2>
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
          <h3>{locale === "ru" ? "Малые форматы" : "Smaller formats"}</h3>
          <p>
            {locale === "ru"
              ? "Есть и более короткие форматы: Первый опыт, Контактная печать и Отпечаток в рамке. Их удобно обсудить отдельно, если вам хочется совсем небольшую съёмку или один выразительный кадр."
              : "There are also shorter formats: First Experience, Contact Print and Framed Print. These can be discussed separately if you want a quieter version of the session."}
          </p>
          <p>
            {locale === "ru"
              ? "Студия, входные билеты и специальные локации оплачиваются отдельно, если они нужны."
              : "Studio rent, tickets and special locations are paid separately if needed."}
          </p>
        </div>
      </div>
    </section>
  );
}
