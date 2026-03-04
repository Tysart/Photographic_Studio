"use client";

import { useState } from "react";
import { galleryItems } from "@/config/site";
import { Lightbox } from "@/components/Lightbox";

export function GalleryGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-4 md:px-10">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm border border-line bg-[#ece7db] text-left"
              aria-label={`Открыть портрет ${item.id}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </button>
          ))}
        </div>
      </section>
      <Lightbox openIndex={openIndex} onClose={() => setOpenIndex(null)} onMove={setOpenIndex} />
    </>
  );
}
