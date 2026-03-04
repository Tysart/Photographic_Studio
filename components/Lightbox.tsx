"use client";

import { useEffect } from "react";
import { galleryItems } from "@/config/site";
import { Modal } from "@/components/Modal";

type LightboxProps = {
  openIndex: number | null;
  onClose: () => void;
  onMove: (nextIndex: number) => void;
};

export function Lightbox({ openIndex, onClose, onMove }: LightboxProps) {
  const isOpen = openIndex !== null;

  useEffect(() => {
    if (!isOpen || openIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        onMove((openIndex + 1) % galleryItems.length);
      }
      if (event.key === "ArrowLeft") {
        onMove((openIndex - 1 + galleryItems.length) % galleryItems.length);
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onMove, openIndex]);

  if (openIndex === null) return null;

  const item = galleryItems[openIndex];

  return (
    <Modal open={isOpen} onClose={onClose} title={item.caption}>
      <div className="space-y-4">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line bg-[#ede8dd]">
          <img src={item.src} alt={item.alt} className="h-full w-full object-contain" />
        </div>
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onMove((openIndex - 1 + galleryItems.length) % galleryItems.length)}
            className="rounded-sm border border-line px-3 py-2 text-sm text-muted hover:text-ink"
          >
            ← Prev
          </button>
          <p className="text-xs uppercase tracking-[0.14em] text-muted">
            {openIndex + 1} / {galleryItems.length}
          </p>
          <button
            type="button"
            onClick={() => onMove((openIndex + 1) % galleryItems.length)}
            className="rounded-sm border border-line px-3 py-2 text-sm text-muted hover:text-ink"
          >
            Next →
          </button>
        </div>
      </div>
    </Modal>
  );
}
