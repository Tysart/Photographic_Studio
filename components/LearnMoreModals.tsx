"use client";

import { useState } from "react";
import { modalContent } from "@/config/site";
import { Modal } from "@/components/Modal";

type Key = keyof typeof modalContent;

const labels: Record<Key, string> = {
  howItWorks: "Как это работает",
  whyEight: "Почему до 8 кадров",
  locations: "Локации"
};

export function LearnMoreModals() {
  const [openKey, setOpenKey] = useState<Key | null>(null);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-6 md:px-10">
      <div className="flex flex-wrap gap-3">
        {(Object.keys(modalContent) as Key[]).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setOpenKey(key)}
            className="text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
          >
            {labels[key]} ?
          </button>
        ))}
      </div>

      {(Object.keys(modalContent) as Key[]).map((key) => (
        <Modal
          key={key}
          open={openKey === key}
          onClose={() => setOpenKey(null)}
          title={modalContent[key].title}
        >
          <p className="text-[15px] leading-relaxed text-muted">{modalContent[key].body}</p>
        </Modal>
      ))}
    </section>
  );
}
