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
    <>
      <GalleryHeader />
      <main>
        <GalleryGrid />
      </main>
      <SeoFooter />
    </>
  );
}
