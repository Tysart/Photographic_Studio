"use client";

import { useLocale } from "@/components/LocaleProvider";

export function PriceCard() {
  const { locale } = useLocale();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
      <div className="thin-rule pt-8">
        <h2 className="text-2xl text-ink">{locale === "ru" ? "Стоимость" : "Pricing"}</h2>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <article className="rounded-sm border border-line bg-[#fcfaf5] p-5 shadow-card">
            <p className="text-sm uppercase tracking-[0.14em] text-accent">Base</p>
            <p className="mt-2 text-2xl text-ink">10 000 ₽</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-muted marker:text-accent">
              <li>{locale === "ru" ? "Съёмка до 2 часов" : "Session up to 2 hours"}</li>
              <li>{locale === "ru" ? "Плёнка 6×9, проявка, все сканы" : "6×9 film, development, all scans"}</li>
              <li>
                {locale === "ru"
                  ? "2 авторские контактные печати 10×15 в архивном конверте"
                  : "Two author contact prints 10×15 in an archival envelope"}
              </li>
            </ul>
          </article>

          <article className="rounded-sm border border-line bg-[#fcfaf5] p-5 shadow-card">
            <p className="text-sm uppercase tracking-[0.14em] text-accent">Signature</p>
            <p className="mt-2 text-2xl text-ink">15 000 ₽</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-muted marker:text-accent">
              <li>{locale === "ru" ? "Всё из Base" : "Everything from Base"}</li>
              <li>{locale === "ru" ? "1 авторская печать в рамке" : "One framed author print"}</li>
              <li>{locale === "ru" ? "Фирменная авторская упаковка" : "Signature author packaging"}</li>
              <li>{locale === "ru" ? "Визитка ателье" : "Atelier card"}</li>
            </ul>
          </article>

          <article className="rounded-sm border border-line bg-[#fcfaf5] p-5 shadow-card">
            <p className="text-sm uppercase tracking-[0.14em] text-accent">Collector</p>
            <p className="mt-2 text-2xl text-ink">22 000 ₽</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-muted marker:text-accent">
              <li>{locale === "ru" ? "Всё из Signature" : "Everything from Signature"}</li>
              <li>{locale === "ru" ? "Расширенная работа по образу и локации" : "Extended styling and location support"}</li>
              <li>{locale === "ru" ? "Приоритет по времени" : "Priority scheduling"}</li>
              <li>{locale === "ru" ? "Дополнительная авторская печать" : "Additional author print"}</li>
            </ul>
          </article>
        </div>

        <p className="mt-4 text-sm text-muted">
          {locale === "ru"
            ? "Отдельно оплачивается аренда студии и прокат одежды (если нужно)."
            : "Studio rent and dress rental are paid separately (if needed)."}
        </p>
        <p className="mt-1 text-sm text-muted">
          {locale === "ru" ? "Срок готовности комплекта — до 3 дней." : "Final package is ready within 3 days."}
        </p>
      </div>
    </section>
  );
}
