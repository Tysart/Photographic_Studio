"use client";

import { useState } from "react";
import { otherGalleryItems, portraitGalleryItems } from "@/config/site";
import { Lightbox } from "@/components/Lightbox";
import { useLocale } from "@/components/LocaleProvider";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  caption: string;
};

export function GalleryGrid() {
  const { locale } = useLocale();
  const [activeAlbum, setActiveAlbum] = useState<GalleryItem[] | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const openAlbumItem = (items: GalleryItem[], index: number) => {
    setActiveAlbum(items);
    setOpenIndex(index);
  };

  const closeLightbox = () => {
    setOpenIndex(null);
    setActiveAlbum(null);
  };

  return (
    <>
      <section className="gallery-grid-shell">
        <div className="gallery-grid-shell__section">
          <h2 className="gallery-grid-shell__title">{locale === "ru" ? "Портреты" : "Portraits"}</h2>
          <div className="gallery-grid-shell__grid">
            {portraitGalleryItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openAlbumItem(portraitGalleryItems, index)}
                className="gallery-grid-shell__item group"
                aria-label={locale === "ru" ? `Открыть портрет ${item.id}` : `Open portrait ${item.id}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="gallery-grid-shell__image"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-grid-shell__section">
          <h2 className="gallery-grid-shell__title">{locale === "ru" ? "Остальное" : "Other works"}</h2>
          <div className="gallery-grid-shell__grid">
            {otherGalleryItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openAlbumItem(otherGalleryItems, index)}
                className="gallery-grid-shell__item group"
                aria-label={locale === "ru" ? `Открыть фотографию ${item.id}` : `Open photograph ${item.id}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="gallery-grid-shell__image"
                />
              </button>
            ))}
          </div>
        </div>
      </section>
      <Lightbox items={activeAlbum ?? []} openIndex={openIndex} onClose={closeLightbox} onMove={setOpenIndex} />
    </>
  );
}
