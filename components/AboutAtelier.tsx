"use client";

import { useLocale } from "@/components/LocaleProvider";

export function AboutAtelier() {
  const { locale } = useLocale();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
      <div className="thin-rule pt-8">
        <h2 className="text-2xl text-ink">{locale === "ru" ? "Кто стоит за TESSART" : "Who stands behind TESSART"}</h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">
          {locale === "ru"
            ? "TESSART — авторский фотографический проект в Петербурге. Я снимаю на среднеформатную плёнку, вручную проявляю материал и готовлю отпечатки так, чтобы у человека оставалась не только память о прогулке, но и красивая вещь, которую можно хранить."
            : "TESSART is a one-person analog photography project. I work with medium-format film in Saint Petersburg, develop the material by hand and shape the result so it feels like an object, not just a file. The project currently works without its own studio and is moving toward a full atelier."}
        </p>
        <p className="mt-2 text-sm text-muted">
          {locale === "ru" ? "Петербургский портрет. Плёнка. Ручная проявка. Готовый отпечаток." : "Author analog photography. Saint Petersburg atmosphere. A physical result."}
        </p>
      </div>
    </section>
  );
}
