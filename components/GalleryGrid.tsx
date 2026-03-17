"use client";

import { useState } from "react";
import { galleryItems } from "@/config/site";
import { Lightbox } from "@/components/Lightbox";

export function GalleryGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className="gallery-grid-shell">
        <div className="gallery-grid-shell__grid">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="gallery-grid-shell__item group"
              aria-label={`Открыть портрет ${item.id}`}
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
      </section>
      <Lightbox openIndex={openIndex} onClose={() => setOpenIndex(null)} onMove={setOpenIndex} />
    </>
  );
}
