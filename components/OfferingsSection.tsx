"use client";

import { useLocale } from "@/components/LocaleProvider";

export function OfferingsSection() {
  const { locale } = useLocale();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
      <div className="thin-rule pt-8">
        <h2 className="text-2xl text-ink">{locale === "ru" ? "Что я предлагаю" : "What I offer"}</h2>
        <p className="mt-4 max-w-4xl text-[17px] leading-relaxed text-muted">
          {locale === "ru"
            ? "Это возможность ненадолго войти в ритм старой фотографии и получить портрет, который по ощущению и подаче стоит дальше от обычной пленочной съёмки нашего времени."
            : "A Saint Petersburg portrait on medium-format film: a walk through the city, a small number of carefully made frames, hand development and finished prints to take with you."}
        </p>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">
          {locale === "ru"
            ? "В основе здесь не только плёнка, а сам опыт: прогулка, точные кадры, ручная проявка, отпечатки, рамки и ощущение редкой собранной вещи."
            : "Suitable for one person, a couple, or a trip to Saint Petersburg you want to remember beautifully."}
        </p>
      </div>
    </section>
  );
}
