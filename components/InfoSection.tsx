"use client";

import { locations, productFacts } from "@/config/site";
import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";

export function InfoSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { locale } = useLocale();
  const items =
    locale === "ru"
      ? [
          {
            title: "О формате",
            body: (
              <>
                <p>Если вы раньше не снимались на плёнку, проще всего представить это как небольшую портретную прогулку по Петербургу, после которой у вас остаются сканы и отпечатки.</p>
                <ul className="mt-3 space-y-2">
                  {productFacts.map((fact) => (
                    <li key={fact.ru}>{fact.ru}</li>
                  ))}
                </ul>
              </>
            )
          },
          {
            title: "Что вы получаете",
            body: "В зависимости от выбранного формата вы получаете итоговые сканы, отпечатки, рамку и оформленную выдачу."
          },
          {
            title: "Локации и дополнительные детали",
            body: (
              <>
                <p>Обычно съёмки проходят в местах, где особенно хорошо ложится петербургский свет:</p>
                <ul className="mt-3 space-y-2">
                  {locations.map((location) => (
                    <li key={location.ru}>{location.ru}</li>
                  ))}
                </ul>
                <p className="mt-3">Студии, музеи и специальные локации возможны, если их аренда, билеты и условия площадки согласованы заранее. Если после съёмки нужен дополнительный скан, отпечаток или оформление, это можно обсудить отдельно.</p>
              </>
            )
          },
          {
            title: "Как проходит выдача",
            body: "Оформленные заказы я по возможности передаю в более спокойной и красивой обстановке."
          }
        ]
      : [
          {
            title: "About the format",
            body: (
              <>
                <p>If you are new to film, it is easiest to think of this as a small portrait walk through Saint Petersburg that ends with scans and prints.</p>
                <ul className="mt-3 space-y-2">
                  {productFacts.map((fact) => (
                    <li key={fact.en}>{fact.en}</li>
                  ))}
                </ul>
              </>
            )
          },
          {
            title: "What you receive",
            body: "Depending on the format, you receive final scans, prints, framing and a presented handover."
          },
          {
            title: "Locations and add-ons",
            body: (
              <>
                <p>Sessions usually take place in locations where Saint Petersburg light works especially well:</p>
                <ul className="mt-3 space-y-2">
                  {locations.map((location) => (
                    <li key={location.en}>{location.en}</li>
                  ))}
                </ul>
                <p className="mt-3">Studios, museums and special locations are possible if rent, tickets and venue conditions are agreed in advance. Extra scans, prints or presentation can be discussed separately.</p>
              </>
            )
          },
          {
            title: "Handover",
            body: "Presented orders are preferably handed over in a calmer and more beautiful setting."
          }
        ];

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10">
      <div className="thin-rule pt-8">
        <h2 className="text-2xl text-ink">{locale === "ru" ? "Что это за съёмка" : "What kind of session is this?"}</h2>
        <div className="mt-5 space-y-2">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.title} className="rounded-sm border border-line bg-[#fcfaf5]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] text-ink">{item.title}</span>
                  <span className="text-muted" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <div className="px-4 pb-4 text-[15px] leading-relaxed text-muted">
                    {typeof item.body === "string" ? <p>{item.body}</p> : item.body}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
