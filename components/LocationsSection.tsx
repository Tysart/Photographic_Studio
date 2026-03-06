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
            ? "Локацию подбираем под погоду, свет и плотность людей."
            : "We choose location based on light, weather and crowd level."}
        </p>
      </div>
    </section>
  );
}
