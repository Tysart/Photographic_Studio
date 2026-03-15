"use client";

import { useLocale } from "@/components/LocaleProvider";

export function SeoFooter() {
  const { locale } = useLocale();

  return (
    <footer className="atelier-footer">
      <div className="atelier-footer__corner atelier-footer__corner--bl" aria-hidden="true" />
      <div className="atelier-footer__corner atelier-footer__corner--br" aria-hidden="true" />
      <p>{locale === "ru" ? "TESSART ATELIER 2026" : "TESSART ATELIER 2026"}</p>
    </footer>
  );
}
