export const siteConfig = {
  brand: "TESSART",
  subtitle: "Portrait Atelier / Saint Petersburg",
  title: "TESSART — Портрет на плёнку в Санкт-Петербурге",
  description:
    "Фотоателье TESSART: ч/б портрет 6x9 в исторических пространствах Санкт-Петербурга. Запись по Telegram и WhatsApp.",
  heroTitle: "Портрет на чёрно-белую плёнку 6×9 в Петербурге.",
  heroLead: "Тихая прогулка и фотография, которую приятно держать в руках.",
  heroLeadEn: "A quiet 6×9 film portrait walk in Saint Petersburg.",
  mobileBookCta: "Записаться",
  priceRub: 10000,
  contacts: {
    telegram: "https://t.me/tessartspb",
    whatsapp: "https://wa.me/79612099502"
  },
  seoKeywords: "портрет на плёнку, ч/б фото, фотосессия Санкт-Петербург, medium format 6x9"
} as const;

export const productFacts = [
  {
    ru: "Ч/б плёнка, средний формат 6×9",
    en: "B&W medium format 6×9"
  },
  {
    ru: "До 8 кадров за встречу (1 катушка)",
    en: "Up to 8 frames per session"
  },
  {
    ru: "Съёмка 60–90 минут (до 2 часов)",
    en: "60–90 minutes, up to 2 hours"
  },
  {
    ru: "Все сканы через 2–3 дня",
    en: "All scans in 2–3 days"
  }
] as const;

export const howItWorks = [
  {
    ru: "Встречаемся в центре в выбранной точке.",
    en: "Meet in the city center."
  },
  {
    ru: "60–90 минут прогулки и портретов.",
    en: "A calm portrait walk."
  },
  {
    ru: "Получаете предварительный скан, выбираете 2 кадра — и в течение 3 дней забираете готовый комплект.",
    en: "You get preview scans, choose 2 frames, and receive the final set within 3 days."
  }
] as const;

export const locations = [
  {
    ru: "Витебский вокзал",
    en: "Vitebsky Railway Station"
  },
  {
    ru: "Парадные и лестницы (по договорённости)",
    en: "Historic entrances and staircases (by arrangement)"
  },
  {
    ru: "Улицы и дворы центра",
    en: "Streets and courtyards of the city center"
  },
  {
    ru: "Набережные в спокойное время",
    en: "Riverside spots at calmer hours"
  }
] as const;

export const faqItems = [
  {
    qRu: "Что надеть?",
    qEn: "What should I wear?",
    aRu: "Лучше простую одежду без крупных логотипов и активных узоров. Хорошо работают однотонные вещи и фактуры.",
    aEn: "Simple clothing works best: no large logos, no busy patterns. Solid colors and textures look great on film."
  },
  {
    qRu: "Если дождь?",
    qEn: "What if it rains?",
    aRu: "Выберем крытую локацию или перенесем встречу на удобное время.",
    aEn: "We can move to a covered location or reschedule to a better time."
  },
  {
    qRu: "Можно вдвоём?",
    qEn: "Can we do a couple session?",
    aRu: "Да, можно провести съёмку для пары в том же формате встречи.",
    aEn: "Yes, a couple session is possible in the same format."
  },
  {
    qRu: "Сколько кадров?",
    qEn: "How many frames?",
    aRu: "До 8 кадров за сессию. Обычно снимаем в нескольких точках по пути.",
    aEn: "Up to 8 frames per session, usually across a few nearby spots."
  },
  {
    qRu: "Когда будет готово?",
    qEn: "When will it be ready?",
    aRu: "Сканы обычно готовы через 2–3 дня после встречи.",
    aEn: "Scans are usually ready in 2–3 days."
  },
  {
    qRu: "Как записаться?",
    qEn: "How to book?",
    aRu: "Через Telegram или WhatsApp. Обычно отвечаю в течение дня.",
    aEn: "Via Telegram or WhatsApp. I usually reply within a day."
  }
] as const;

export const galleryItems = Array.from({ length: 22 }, (_, i) => {
  const id = i + 1;
  const file = String(id).padStart(2, "0");

  return {
    id,
    src: `/images/gallery/${file}.jpg?v=2`,
    alt: `Портрет на плёнку 6×9, кадр ${id}`,
    caption: "6×9 film portrait"
  };
});
