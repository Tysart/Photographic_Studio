"use client";

import { useLocale } from "@/components/LocaleProvider";

export function AtelierAbout() {
  const { locale } = useLocale();

  return (
    <section className="paper-section paper-section--about">
      <div className="paper-section__inner paper-section__inner--narrow">
        <h2>{locale === "ru" ? "Кто стоит за TESSART ATELIER" : "Who stands behind TESSART ATELIER"}</h2>
        <p className="paper-section__lead paper-section__lead--center">
          {locale === "ru"
            ? "TESSART ATELIER — авторский фотографический проект в Петербурге. Я снимаю на среднеформатную плёнку, вручную проявляю материал и готовлю отпечатки так, чтобы у человека оставалась не только память о прогулке, но и красивая вещь, которую можно хранить."
            : "TESSART ATELIER is an author-led portrait project in Saint Petersburg, built around medium-format film, hand development and physical prints."}
        </p>
      </div>
    </section>
  );
}
