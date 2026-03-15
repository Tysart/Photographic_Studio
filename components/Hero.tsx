"use client";

import { useState } from "react";
import { BookingModal } from "@/components/BookingModal";
import { Button } from "@/components/Button";
import { siteConfig } from "@/config/site";
import { useLocale } from "@/components/LocaleProvider";

export function Hero() {
  const [openBooking, setOpenBooking] = useState(false);
  const { locale } = useLocale();

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-12 pt-4 md:grid-cols-[1.05fr_1fr] md:px-10 md:pt-8">
      <div className="order-2 md:order-1">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
          <span className="ornament" aria-hidden="true" />
          Фотоателье TESSART
          <img src="/brand/tessart-seal.svg" alt="" className="ml-1 h-6 w-6 opacity-55" aria-hidden="true" />
        </p>
        <h1 className="max-w-xl text-4xl leading-tight text-ink md:text-5xl">
          {locale === "ru" ? siteConfig.heroTitle : "Atmospheric medium-format film photography in Saint Petersburg."}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          {locale === "ru" ? siteConfig.heroLead : "A slower, deliberate film session with selected final frames and physical results."}
        </p>
        <p className="mt-2 text-sm text-muted">
          {locale === "ru"
            ? "Ниже я коротко показываю, чем такой портрет отличается от обычной пленочной фотосессии и что вы получите в итоге."
            : "(If you have never done a film session before, the sections below explain the format.)"}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button onClick={() => setOpenBooking(true)}>{locale === "ru" ? "Записаться" : "Book a session"}</Button>
          <Button href="/gallery" variant="ghost">
            {locale === "ru" ? "Смотреть галерею" : "View gallery"}
          </Button>
        </div>
        <p className="mt-3 text-sm text-muted">
          {locale === "ru" ? "По записи. Обычно отвечаю в течение дня." : "By appointment. I usually reply within the day."}
        </p>
      </div>

      <div className="order-1 md:order-2">
        <div className="emerald-panel ornament-corners relative overflow-hidden rounded-sm p-6 shadow-card md:p-7">
          <span className="ornament-corner tl" aria-hidden="true" />
          <span className="ornament-corner tr" aria-hidden="true" />
          <span className="ornament-corner bl" aria-hidden="true" />
          <span className="ornament-corner br" aria-hidden="true" />
          <div className="hero-seal-mark" aria-hidden="true" />
          <div className="mb-5 text-center text-[11px] uppercase tracking-[0.28em] text-[#d8c7a2]">
            {locale === "ru" ? "Portrait Atelier · Saint Petersburg" : "Portrait Atelier · Saint Petersburg"}
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-[#ccb992]/30 bg-[#dfd3bc] shadow-[inset_0_0_0_1px_rgba(199,178,138,0.14)]">
            <img
              src="/images/hero-placeholder.jpg"
              alt="Аналоговая фотосъёмка в Санкт-Петербурге"
              className="h-full w-full object-contain"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <BookingModal open={openBooking} onClose={() => setOpenBooking(false)} />
    </section>
  );
}
