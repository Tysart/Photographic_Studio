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
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <div>
            <Link href="/" className="text-2xl tracking-[0.12em] text-ink no-underline">
              {siteConfig.brand}
            </Link>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">{siteConfig.subtitle}</p>
          </div>
          <div className="flex items-center gap-4">
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
      </header>
      <BookingModal open={openBooking} onClose={() => setOpenBooking(false)} />
    </>
  );
}
