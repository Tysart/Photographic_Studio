"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { faqItems, formatGlossary, locations, processCards, processFrames } from "@/config/site";
import { useLocale } from "@/components/LocaleProvider";
import { Modal } from "@/components/Modal";

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
  const [activeProcessIndex, setActiveProcessIndex] = useState<number | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [openGlossaryItems, setOpenGlossaryItems] = useState<number[]>([]);

  const activeProcess = activeProcessIndex !== null ? processCards[activeProcessIndex] : null;
  const activeGalleryItem = activeProcess ? activeProcess.gallery[activeGalleryIndex] : null;

  const openProcess = (index: number) => {
    setActiveProcessIndex(index);
    setActiveGalleryIndex(0);
  };

  const closeProcess = () => {
    setActiveProcessIndex(null);
    setActiveGalleryIndex(0);
  };

  const goToPreviousImage = () => {
    if (!activeProcess) return;
    setActiveGalleryIndex((current) => (current === 0 ? activeProcess.gallery.length - 1 : current - 1));
  };

  const goToNextImage = () => {
    if (!activeProcess) return;
    setActiveGalleryIndex((current) => (current === activeProcess.gallery.length - 1 ? 0 : current + 1));
  };

  const toggleGlossaryItem = (index: number) => {
    setOpenGlossaryItems((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index]
    );
  };

  return (
    <>
      <section className="paper-section paper-section--details">
        <div className="paper-section__inner paper-section__inner--details">
          <div className="process-grid">
            {processCards.map((card, index) => (
              <button
                key={card.titleRu}
                type="button"
                className="process-grid__item"
                onClick={() => openProcess(index)}
                aria-label={locale === "ru" ? `Открыть: ${card.titleRu}` : `Open: ${card.titleEn}`}
              >
                <span className="process-grid__frame">
                  <img
                    className="process-grid__image"
                    src={card.thumbnail}
                    alt={locale === "ru" ? card.titleRu : card.titleEn}
                  />
                </span>
                <p>{locale === "ru" ? card.titleRu : card.titleEn}</p>
              </button>
            ))}
          </div>

          <div className="details-copy">
            <h2>{locale === "ru" ? "О формате съёмки" : "About the session"}</h2>
            <div className="details-copy__stack">
              <p className="paper-section__lead paper-section__lead--details">
                {locale === "ru"
                  ? (
                      <>
                        Съёмка проходит в городе,
                        <br />
                        с короткими остановками в тех местах, где складывается кадр.
                      </>
                    )
                  : "The session takes place in the city, with short stops in the places where the frame comes together."}
              </p>
              <p>
                {locale === "ru"
                  ? (
                      <>
                        Мы не делаем много дублей.
                        <br />
                        Каждый кадр собирается отдельно.
                      </>
                    )
                    : "We do not rush and we do not make many duplicates. Each frame is built separately."}
              </p>
              <p>
                {locale === "ru"
                  ? (
                      <>
                        Сначала находится положение,
                        <br />
                        затем выстраивается свет и внимание.
                      </>
                    )
                  : "First the position is found, then the light and attention are arranged."}
              </p>
              <p>
                {locale === "ru"
                  ? (
                      <>
                        Поэтому сама съёмка проходит тише и собраннее,
                        <br />
                        а серия получается более цельной.
                      </>
                    )
                  : "The session becomes calmer and more coherent, and the series gains unity."}
              </p>
              <p>
                {locale === "ru"
                  ? (
                      <>
                        После съёмки остаются сканы и отпечатки —
                        <br />
                        как результат и как фотография, которая остаётся не только в памяти.
                      </>
                    )
                  : "After the session, scans and prints remain as the result, and as a photograph that stays not only in memory."}
              </p>
            </div>
          </div>

          <div className="format-glossary format-glossary--details">
            {formatGlossary.map((item, index) => {
              const open = openGlossaryItems.includes(index);

              return (
                <div key={item.titleRu} className={`format-glossary__item ${open ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className="format-glossary__button"
                    onClick={() => toggleGlossaryItem(index)}
                    aria-expanded={open}
                  >
                    <span>{locale === "ru" ? item.titleRu : item.titleEn}</span>
                    <span className="format-glossary__mark" aria-hidden="true">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open ? (
                    <div className="format-glossary__content">
                      <p>{locale === "ru" ? item.bodyRu : item.bodyEn}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

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

          <AccordionItem title={locale === "ru" ? "Этапы съёмки" : "How it works"}>
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
        <a
          href="#pricing"
          className="action-tag action-tag--hero-graphic action-tag--callout-graphic"
          aria-label={locale === "ru" ? "Записаться на съёмку" : "Book a session"}
        >
          <img src="/images/new/hero-card-book.svg" alt="" aria-hidden="true" />
        </a>
        <img className="hero-section-divider section-callout__divider" src="/images/new/section-divider.svg" alt="" aria-hidden="true" />
      </div>

      <Modal
        open={activeProcess !== null}
        onClose={closeProcess}
        title={activeProcess ? (locale === "ru" ? activeProcess.titleRu : activeProcess.titleEn) : ""}
        panelClassName="atelier-process-modal"
      >
        {activeProcess && activeGalleryItem ? (
          <div className="process-modal">
            <div className="process-modal__viewer">
              <button
                type="button"
                className="process-modal__nav process-modal__nav--prev"
                onClick={goToPreviousImage}
                aria-label={locale === "ru" ? "Предыдущее фото" : "Previous image"}
              >
                ‹
              </button>
              <img
                className="process-modal__image"
                src={activeGalleryItem.src}
                alt={locale === "ru" ? activeGalleryItem.altRu : activeGalleryItem.altEn}
              />
              <button
                type="button"
                className="process-modal__nav process-modal__nav--next"
                onClick={goToNextImage}
                aria-label={locale === "ru" ? "Следующее фото" : "Next image"}
              >
                ›
              </button>
            </div>

            <p className="process-modal__copy">
              {locale === "ru" ? activeProcess.bodyRu : activeProcess.bodyEn}
            </p>

            <div className="process-modal__thumbs" aria-label={locale === "ru" ? "Галерея этапа" : "Step gallery"}>
              {activeProcess.gallery.map((image, index) => (
                <button
                  key={`${activeProcess.titleRu}-${image.src}`}
                  type="button"
                  className={`process-modal__thumb ${index === activeGalleryIndex ? "is-active" : ""}`}
                  onClick={() => setActiveGalleryIndex(index)}
                  aria-label={locale === "ru" ? `Фото ${index + 1}` : `Image ${index + 1}`}
                >
                  <img src={image.src} alt={locale === "ru" ? image.altRu : image.altEn} />
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </Modal>
    </>
  );
}
