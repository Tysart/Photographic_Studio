"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useLocale } from "@/components/LocaleProvider";

export function GalleryHeader() {
  const { locale } = useLocale();

  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-muted">{siteConfig.subtitle}</p>
        <h1 className="mt-1 text-3xl text-ink">{locale === "ru" ? "Галерея портретов" : "Portrait gallery"}</h1>
      </div>
      <Link href="/" className="text-sm text-muted hover:text-ink">
        {locale === "ru" ? "← На главную" : "← Back home"}
      </Link>
    </header>
  );
}
