"use client";

import { siteConfig } from "@/config/site";
import { useLocale } from "@/components/LocaleProvider";

export function SeoFooter() {
  const { locale } = useLocale();

  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-12 text-xs text-muted md:px-10">
      <div className="thin-rule pt-5 space-y-2">
        <p>
          {locale === "ru" ? "Небольшое количество сессий каждую неделю." : "Limited sessions each week."}
        </p>
        <p>{siteConfig.seoKeywords}</p>
      </div>
    </footer>
  );
}
