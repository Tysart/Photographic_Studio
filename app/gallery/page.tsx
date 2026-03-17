import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { GalleryHeader } from "@/components/GalleryHeader";
import { SeoFooter } from "@/components/SeoFooter";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Галерея — ${siteConfig.title}`,
  description: "Галерея портретов на черно-белую пленку 6x9. Фотоателье TESSART, Санкт-Петербург."
};

export default function GalleryPage() {
  return (
    <div className="site-shell site-shell--framed gallery-shell">
      <div className="site-shell__frame" aria-hidden="true">
        <div className="site-shell__line site-shell__line--top" />
        <div className="site-shell__line site-shell__line--right" />
        <div className="site-shell__line site-shell__line--bottom" />
        <div className="site-shell__line site-shell__line--left" />

        <div className="site-shell__corner site-shell__corner--tl" />
        <div className="site-shell__corner site-shell__corner--tr" />
        <div className="site-shell__corner site-shell__corner--br" />
        <div className="site-shell__corner site-shell__corner--bl" />
      </div>

      <div className="site-shell__content gallery-shell__content">
        <GalleryHeader />
        <main>
          <GalleryGrid />
        </main>
        <SeoFooter />
      </div>
    </div>
  );
}
