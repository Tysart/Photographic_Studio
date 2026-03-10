"use client";

import { useState } from "react";
import { faqItems } from "@/config/site";
import { useLocale } from "@/components/LocaleProvider";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { locale } = useLocale();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
      <div className="thin-rule pt-8">
        <h2 className="text-2xl text-ink">{locale === "ru" ? "Частые вопросы" : "FAQ"}</h2>
        <div className="mt-4 space-y-2">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.qRu} className="rounded-sm border border-line bg-[#fcfaf5]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] text-ink">{locale === "ru" ? item.qRu : item.qEn}</span>
                  <span className="text-muted" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <p className="px-4 pb-4 text-[15px] leading-relaxed text-muted">
                    {locale === "ru" ? item.aRu : item.aEn}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
