"use client";

import { useLocale } from "@/components/LocaleProvider";
import { siteConfig } from "@/config/site";

export function AtelierHero() {
  const { locale } = useLocale();

  return (
    <section className="atelier-hero">
      <div className="atelier-hero__wrap">
        <div className="atelier-hero__corner atelier-hero__corner--tl" aria-hidden="true" />
        <div className="atelier-hero__corner atelier-hero__corner--tr" aria-hidden="true" />

        <a href="/gallery" className="action-tag action-tag--light atelier-hero__top-tag atelier-hero__top-tag--left">
          {locale === "ru" ? "Галерея" : "Gallery"}
        </a>
        <a href="#pricing" className="action-tag action-tag--light atelier-hero__top-tag atelier-hero__top-tag--right">
          {locale === "ru" ? "Записаться" : "Book"}
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
                {locale === "ru"
                  ? siteConfig.heroTitle
                  : "A portrait in Saint Petersburg inspired by the culture of nineteenth-century photography."}
              </h1>
              <p>
                {locale === "ru"
                  ? "Я предлагаю ненадолго войти в ритм старой фотографии и получить портрет, который по ощущению и подаче стоит дальше от обычной пленочной съёмки нашего времени."
                  : "A slower, deliberate portrait session with a physical result and a strong sense of atmosphere."}
              </p>
              <p>
                {locale === "ru"
                  ? "Это редкий портретный опыт: прогулка по Петербургу, точные кадры, ручной процесс и результат с другой плотностью, подачей и ощущением в руках."
                  : "The session combines a walk through Saint Petersburg, careful compositions and a result that feels like an object rather than a stream of files."}
              </p>
            </div>

            <figure className="portrait-card">
              <div className="portrait-card__image-frame">
                <img src="/images/hero-placeholder.jpg" alt="Портрет TESSART Atelier" />
              </div>
              <figcaption className="portrait-card__caption">
                <img src="/images/new/logo%20small.svg" alt="" aria-hidden="true" />
                <span>
                  {locale === "ru"
                    ? "пример скана негатива 6 на 9 сантиметров, локация: Витебский вокзал"
                    : "sample 6x9 negative scan, location: Vitebsky Railway Station"}
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="paper-panel__actions">
            <a href="/gallery" className="action-tag action-tag--primary">
              {locale === "ru" ? "Галерея" : "Gallery"}
            </a>
            <a href="#pricing" className="action-tag action-tag--primary">
              {locale === "ru" ? "Записаться" : "Book a portrait"}
            </a>
          </div>
        </div>

        <img className="atelier-hero__divider atelier-hero__divider--bottom" src="/images/new/section-divider.svg" alt="" aria-hidden="true" />
      </div>
    </section>
  );
}
