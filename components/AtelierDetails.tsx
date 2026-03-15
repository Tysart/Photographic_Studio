"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { faqItems, locations, productFacts, processFrames } from "@/config/site";
import { useLocale } from "@/components/LocaleProvider";

type AccordionItemProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`atelier-accordion ${open ? "is-open" : ""}`}>
      <button type="button" className="atelier-accordion__button" onClick={() => setOpen((value) => !value)}>
        <span>{title}</span>
        <span className="atelier-accordion__mark" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      {open ? <div className="atelier-accordion__content">{children}</div> : null}
    </div>
  );
}

export function AtelierDetails() {
  const { locale } = useLocale();

  return (
    <>
      <section className="paper-section">
        <div className="paper-section__inner">
          <div className="process-grid">
            {processFrames.map((frame) => (
              <div key={frame.titleRu} className="process-grid__item">
                <div className="process-grid__frame" aria-hidden="true" />
                <p>{locale === "ru" ? frame.titleRu.replace(/^\d+\.\s*/, "") : frame.titleEn}</p>
              </div>
            ))}
            <div className="process-grid__item">
              <div className="process-grid__frame" aria-hidden="true" />
              <p>{locale === "ru" ? "Фотография с обратной стороны" : "Photograph reverse side"}</p>
            </div>
            <div className="process-grid__item">
              <div className="process-grid__frame" aria-hidden="true" />
              <p>{locale === "ru" ? "Упаковка" : "Packaging"}</p>
            </div>
          </div>

          <h2>{locale === "ru" ? "О формате фотосъемки и этапы" : "About the format and process"}</h2>
          <p className="paper-section__lead">
            {locale === "ru"
              ? "Если вы раньше не снимались на плёнку, проще всего представить это как небольшую портретную прогулку по Петербургу, после которой у вас остаются сканы и отпечатки."
              : "If you have never done a film portrait before, think of it as a calm walk through Saint Petersburg that ends with scans and prints."}
          </p>
          <ul className="paper-section__list">
            {productFacts.map((fact) => (
              <li key={fact.ru}>{locale === "ru" ? fact.ru : fact.en}</li>
            ))}
          </ul>

          <AccordionItem title={locale === "ru" ? "Локации и детали" : "Locations and details"} defaultOpen>
            <p>
              {locale === "ru"
                ? "Съёмки проходят в местах, где особенно хорошо ложится петербургский свет:"
                : "Sessions take place where Saint Petersburg light works especially well:"}
            </p>
            <ul className="paper-section__list paper-section__list--compact">
              {locations.map((location) => (
                <li key={location.ru}>{locale === "ru" ? location.ru : location.en}</li>
              ))}
            </ul>
          </AccordionItem>

          <AccordionItem title={locale === "ru" ? "Этапы работы" : "How it works"}>
            <div className="paper-section__text-stack">
              {processFrames.map((frame) => (
                <p key={frame.bodyRu}>{locale === "ru" ? frame.bodyRu : frame.bodyEn}</p>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem title={locale === "ru" ? "Частые вопросы" : "Frequently asked questions"}>
            <div className="faq-stack">
              {faqItems.map((item) => (
                <div key={item.qRu} className="faq-stack__item">
                  <h3>{locale === "ru" ? item.qRu : item.qEn}</h3>
                  <p>{locale === "ru" ? item.aRu : item.aEn}</p>
                </div>
              ))}
            </div>
          </AccordionItem>
        </div>
      </section>

      <div className="section-callout">
        <a href="#pricing" className="action-tag action-tag--light action-tag--solo">
          {locale === "ru" ? "Записаться" : "Book a portrait"}
        </a>
        <img className="section-callout__divider" src="/images/new/section-divider.svg" alt="" aria-hidden="true" />
      </div>
    </>
  );
}
