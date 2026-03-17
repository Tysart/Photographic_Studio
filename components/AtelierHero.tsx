"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";

export function AtelierHero() {
  const { locale } = useLocale();

  return (
    <section className="atelier-hero">
      <div className="atelier-hero__wrap">
        <div className="atelier-hero__corner atelier-hero__corner--tl" aria-hidden="true" />
        <div className="atelier-hero__corner atelier-hero__corner--tr" aria-hidden="true" />

        <Link
          href="/gallery"
          className="atelier-hero__top-tag atelier-hero__top-tag--left"
          aria-label={locale === "ru" ? "Смотреть работы" : "View works"}
        >
          <img src="/images/new/top-cta-left.svg" alt="" aria-hidden="true" />
        </Link>
        <a
          href="#pricing"
          className="atelier-hero__top-tag atelier-hero__top-tag--right"
          aria-label={locale === "ru" ? "Записаться на съёмку" : "Book a session"}
        >
          <img src="/images/new/top-cta-right.svg" alt="" aria-hidden="true" />
        </a>

        <img className="atelier-hero__logo" src="/images/new/logo-main.svg" alt="Tessart Atelier" />

        <img className="atelier-hero__divider atelier-hero__divider--top" src="/images/new/section-divider%20верхний.svg" alt="" aria-hidden="true" />

        <p className="atelier-hero__eyebrow">
          {locale === "ru" ? "Авторская ручная работа" : "Handmade portrait atelier"}
        </p>

        <div className="paper-panel paper-panel--hero">
          <div className="paper-panel__content">
            <div className="paper-panel__text">
              <h1>
                {locale === "ru" ? (
                  <>
                    <span className="paper-panel__title-line">Портрет в Петербурге,</span>
                    <span className="paper-panel__title-line">в духе</span>
                    <span className="paper-panel__title-line">классического</span>
                    <span className="paper-panel__title-line">фотоателье</span>
                  </>
                ) : (
                  "A portrait in Saint Petersburg inspired by the culture of nineteenth-century photography."
                )}
              </h1>
              <div className="paper-panel__body">
                <p>
                  {locale === "ru"
                    ? (
                        <>
                          Сначала это может восприниматься как обычная съёмка.
                          <br />
                          Потом постепенно меняется ритм.
                        </>
                      )
                    : "A slower, deliberate portrait session with a physical result and a strong sense of atmosphere."}
                </p>
                <p>
                  {locale === "ru"
                    ? (
                        <>
                          Движения становятся спокойнее,
                          <br />
                          внимание собирается,
                          <br />
                          и человек просто входит в кадр.
                        </>
                      )
                    : "The session combines a walk through Saint Petersburg, careful compositions and a result that feels like an object rather than a stream of files."}
                </p>
                <p>
                  {locale === "ru"
                    ? (
                        <>
                          Я работаю с камерой, которая не предполагает спешки.
                          <br />
                          Кадр не делается сразу, он выстраивается.
                        </>
                      )
                    : "The camera does not reward haste. The frame is built rather than snapped."}
                </p>
                <p>
                  {locale === "ru"
                    ? (
                        <>
                          После встречи остаётся не только фотография,
                          <br />
                          но и ощущение того состояния, в котором она была сделана.
                        </>
                      )
                    : "What remains is not only the photograph, but the state in which it was made."}
                </p>
              </div>
            </div>

            <figure className="portrait-card">
              <div className="portrait-card__image-frame">
                <img src="/images/hero-placeholder.jpg" alt="Портрет TESSART Atelier" />
              </div>
            </figure>
          </div>

          <div className="paper-panel__footer">
            <div className="portrait-card__caption">
              <img src="/images/new/logo%20small.svg" alt="" aria-hidden="true" />
              <p className="portrait-card__caption-copy">
                {locale === "ru"
                  ? (
                      <>
                        <span>пример скана негатива</span>
                        <span>6 на 9 сантиметров,</span>
                        <span>локация: Витебский вокзал</span>
                      </>
                    )
                  : (
                      <>
                        <span>sample negative scan</span>
                        <span>6 by 9 centimeters,</span>
                        <span>location: Vitebsky Railway Station</span>
                      </>
                    )}
              </p>
            </div>

            <div className="paper-panel__actions">
              <Link
                href="/gallery"
                className="action-tag action-tag--hero-graphic"
                aria-label={locale === "ru" ? "Смотреть работы" : "View works"}
              >
                <img src="/images/new/hero-card-gallery.svg" alt="" aria-hidden="true" />
              </Link>
              <a
                href="#pricing"
                className="action-tag action-tag--hero-graphic"
                aria-label={locale === "ru" ? "Записаться на съёмку" : "Book a session"}
              >
                <img src="/images/new/hero-card-book.svg" alt="" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <img className="hero-section-divider" src="/images/new/section-divider.svg" alt="" aria-hidden="true" />
      </div>
    </section>
  );
}
