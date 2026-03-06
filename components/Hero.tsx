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
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-12 pt-8 md:grid-cols-[1.05fr_1fr] md:px-10 md:pt-12">
      <div className="order-2 md:order-1">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
          <span className="ornament" aria-hidden="true" />
          Фотоателье TESSART
        </p>
        <h1 className="max-w-xl text-4xl leading-tight text-ink md:text-5xl">
          {locale === "ru" ? siteConfig.heroTitle : "Black-and-white 6×9 film portrait in Saint Petersburg."}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          {locale === "ru" ? siteConfig.heroLead : "A quiet walk and a portrait you can truly hold."}
        </p>
        <p className="mt-2 text-sm text-muted">
          {locale === "ru" ? `(${siteConfig.heroLeadEn})` : "(Тихая прогулка и фотография, которую приятно держать в руках.)"}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button onClick={() => setOpenBooking(true)}>{locale === "ru" ? "Записаться" : "Book a session"}</Button>
          <Button href="/gallery" variant="ghost">
            {locale === "ru" ? "Смотреть портреты" : "View portraits"}
          </Button>
        </div>
        <p className="mt-3 text-sm text-muted">
          {locale === "ru" ? "Отвечаю в течение дня." : "I usually reply within the day."}
        </p>
      </div>

      <div className="order-1 md:order-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line bg-[#e7dfd0] shadow-card">
          <img
            src="/images/hero-placeholder.jpg"
            alt="Портрет в историческом пространстве Санкт-Петербурга"
            className="h-full w-full object-contain"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>

      <BookingModal open={openBooking} onClose={() => setOpenBooking(false)} />
    </section>
  );
}
