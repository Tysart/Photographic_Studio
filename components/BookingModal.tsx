"use client";

import { siteConfig } from "@/config/site";
import { Modal } from "@/components/Modal";

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

export function BookingModal({ open, onClose }: BookingModalProps) {
  return (
    <Modal open={open} onClose={onClose} title="Запись на съёмку">
      <div className="space-y-3">
        <a
          href={siteConfig.contacts.telegram}
          target="_blank"
          rel="noreferrer"
          className="block rounded-sm border border-line px-4 py-3 text-sm hover:border-accent"
        >
          Telegram
        </a>
        <a
          href={siteConfig.contacts.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="block rounded-sm border border-line px-4 py-3 text-sm hover:border-accent"
        >
          WhatsApp
        </a>
        <a href={siteConfig.contacts.phone} className="block rounded-sm border border-line px-4 py-3 text-sm hover:border-accent">
          Позвонить
        </a>
      </div>
      <p className="mt-5 text-sm text-muted">По записи. Обычно отвечаю в течение дня.</p>
    </Modal>
  );
}
