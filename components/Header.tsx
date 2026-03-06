"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { BookingModal } from "@/components/BookingModal";
import { useLocale } from "@/components/LocaleProvider";

export function Header() {
  const [openBooking, setOpenBooking] = useState(false);
  const { locale, setLocale } = useLocale();

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-transparent bg-[#faf7f0]/95 backdrop-blur">
        <div className="mx-auto w-full max-w-6xl px-6 py-3 md:px-10 md:py-5">
          <div className="border-line md:grid md:max-w-5xl md:grid-cols-[auto_1fr] md:items-center md:gap-6 md:border-y md:py-2">
            <div className="self-center md:self-auto">
              <Link href="/" className="inline-block no-underline">
                <img src="/brand/tessart-wordmark.svg" alt={siteConfig.brand} className="h-20 w-auto md:h-[90px]" />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between gap-3 pt-1 md:justify-end md:gap-3 md:pt-0">
              <div className="inline-flex overflow-hidden rounded-sm border border-line text-xs">
                <button
                  type="button"
                  onClick={() => setLocale("ru")}
                  className={`px-2 py-1 ${locale === "ru" ? "bg-ink text-paper" : "bg-transparent text-muted"}`}
                >
                  RU
                </button>
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  className={`px-2 py-1 ${locale === "en" ? "bg-ink text-paper" : "bg-transparent text-muted"}`}
                >
                  ENG
                </button>
              </div>
              <Link href="/gallery" className="text-sm text-muted transition-colors hover:text-ink">
                {locale === "ru" ? "Галерея" : "Gallery"}
              </Link>
              <button
                type="button"
                onClick={() => setOpenBooking(true)}
                className="rounded-sm border border-ink bg-ink px-3 py-2 text-xs uppercase tracking-[0.12em] text-paper md:hidden"
              >
                {locale === "ru" ? siteConfig.mobileBookCta : "Book"}
              </button>
            </div>
          </div>
        </div>
      </header>
      <BookingModal open={openBooking} onClose={() => setOpenBooking(false)} />
    </>
  );
}
