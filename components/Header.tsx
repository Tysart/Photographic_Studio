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
      <header className="relative z-20">
        <div className="mx-auto w-full max-w-6xl px-6 pb-1 pt-4 md:px-10 md:pt-6">
          <div className="md:mx-auto md:grid md:w-full md:max-w-5xl md:grid-cols-[auto_1fr] md:items-center md:gap-6">
            <div className="self-center md:self-auto">
              <Link href="/" className="inline-block no-underline">
                <img src="/brand/tessart-wordmark.svg" alt={siteConfig.brand} className="h-14 w-auto opacity-90 md:h-[62px]" />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between gap-3 pt-2 md:justify-end md:gap-4 md:pt-0">
              <div className="inline-flex overflow-hidden rounded-sm border border-line/80 bg-[#faf6ee]/80 text-xs backdrop-blur-sm">
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
