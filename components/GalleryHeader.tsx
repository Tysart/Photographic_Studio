"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useLocale } from "@/components/LocaleProvider";

export function GalleryHeader() {
  const { locale } = useLocale();

  return (
    <header className="gallery-header">
      <div className="gallery-header__inner">
        <div className="gallery-header__topline">
          <p className="gallery-header__subtitle">{siteConfig.subtitle}</p>
          <Link href="/" className="gallery-header__backlink">
            {locale === "ru" ? "← На главную" : "← Back home"}
          </Link>
        </div>

        <h1 className="gallery-header__title">{locale === "ru" ? "Галерея портретов" : "Portrait gallery"}</h1>
      </div>
      <img className="hero-section-divider gallery-header__divider" src="/images/new/section-divider.svg" alt="" aria-hidden="true" />
    </header>
  );
}
