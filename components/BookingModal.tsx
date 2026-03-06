"use client";

import { siteConfig } from "@/config/site";
import { Modal } from "@/components/Modal";
import { useLocale } from "@/components/LocaleProvider";

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

export function BookingModal({ open, onClose }: BookingModalProps) {
  const { locale } = useLocale();

  return (
    <Modal open={open} onClose={onClose} title={locale === "ru" ? "Запись на съёмку" : "Book a session"}>
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
          {locale === "ru" ? "Позвонить" : "Call"}
        </a>
      </div>
      <p className="mt-5 text-sm text-muted">
        {locale === "ru"
          ? "По записи. Обычно отвечаю в течение дня."
          : "By appointment only. Reply time: usually within a day."}
      </p>
    </Modal>
  );
}
