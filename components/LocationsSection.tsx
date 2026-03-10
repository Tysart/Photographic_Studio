"use client";

import { locations } from "@/config/site";
import { useLocale } from "@/components/LocaleProvider";

export function LocationsSection() {
  const { locale } = useLocale();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
      <div className="thin-rule pt-8">
        <h2 className="text-2xl text-ink">{locale === "ru" ? "Локации" : "Locations"}</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted marker:text-accent">
          {locations.map((location) => (
            <li key={location.ru}>
              {locale === "ru" ? location.ru : location.en}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          {locale === "ru"
            ? "Подбираю место под свет, атмосферу и ритм съёмки. Если вам нужна конкретная студия или особая локация, это можно согласовать отдельно."
            : "The location is chosen around light, atmosphere and the pace of the session. If you need a specific studio or venue, it can be arranged separately."}
        </p>
      </div>
    </section>
  );
}
