"use client";

import { useEffect } from "react";
import { Modal } from "@/components/Modal";
import { useLocale } from "@/components/LocaleProvider";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  caption: string;
};

type LightboxProps = {
  items: GalleryItem[];
  openIndex: number | null;
  onClose: () => void;
  onMove: (nextIndex: number) => void;
};

export function Lightbox({ items, openIndex, onClose, onMove }: LightboxProps) {
  const isOpen = openIndex !== null;
  const { locale } = useLocale();

  useEffect(() => {
    if (!isOpen || openIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        onMove((openIndex + 1) % items.length);
      }
      if (event.key === "ArrowLeft") {
        onMove((openIndex - 1 + items.length) % items.length);
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, items.length, onMove, openIndex]);

  if (openIndex === null) return null;

  const item = items[openIndex];

  return (
    <Modal open={isOpen} onClose={onClose} title={item.caption}>
      <div className="space-y-4">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line bg-[#ede8dd]">
          <img src={item.src} alt={item.alt} className="h-full w-full object-contain" />
        </div>
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onMove((openIndex - 1 + items.length) % items.length)}
            className="rounded-sm border border-line px-3 py-2 text-sm text-muted hover:text-ink"
          >
            {locale === "ru" ? "← Назад" : "← Prev"}
          </button>
          <p className="text-xs uppercase tracking-[0.14em] text-muted">
            {openIndex + 1} / {items.length}
          </p>
          <button
            type="button"
            onClick={() => onMove((openIndex + 1) % items.length)}
            className="rounded-sm border border-line px-3 py-2 text-sm text-muted hover:text-ink"
          >
            {locale === "ru" ? "Далее →" : "Next →"}
          </button>
        </div>
      </div>
    </Modal>
  );
}
