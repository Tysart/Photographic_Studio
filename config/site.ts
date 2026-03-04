export const siteConfig = {
  brand: "TESSART",
  subtitle: "Portrait Atelier / Saint Petersburg",
  title: "TESSART — Портрет на плёнку в Санкт-Петербурге",
  description:
    "Фотоателье TESSART: ч/б портрет 6x9 в исторических пространствах Санкт-Петербурга. Запись по Telegram, WhatsApp или звонку.",
  heroTitle: "Портрет на чёрно-белую плёнку 6×9 в Петербурге.",
  heroLead: "Тихая прогулка и фотография, которую приятно держать в руках.",
  heroLeadEn: "A quiet 6×9 film portrait walk in Saint Petersburg.",
  mobileBookCta: "Записаться",
  priceRub: 10000,
  contacts: {
    telegram: "https://t.me/tessart",
    whatsapp: "https://wa.me/79990000000",
    phone: "tel:+79990000000"
  },
  seoKeywords: "портрет на плёнку, ч/б фото, фотосессия Санкт-Петербург, medium format 6x9"
} as const;

export const productFacts = [
  "Ч/б плёнка, средний формат 6×9",
  "До 8 кадров за встречу (1 катушка)",
  "Съёмка 60–90 минут (до 2 часов)",
  "Все сканы через 2–3 дня"
] as const;

export const howItWorks = [
  "Встречаемся в центре в выбранной точке.",
  "60–90 минут прогулки и портретов.",
  "Проявка и сканирование — и через 2–3 дня вы получаете все кадры."
] as const;

export const locations = [
  "Витебский вокзал",
  "Парадные и лестницы (по договорённости)",
  "Улицы и дворы центра",
  "Набережные в спокойное время"
] as const;

export const faqItems = [
  {
    q: "Что надеть?",
    a: "Лучше простую одежду без крупных логотипов и активных узоров. Хорошо работают однотонные вещи и фактуры."
  },
  {
    q: "Если дождь?",
    a: "Выберем крытую локацию или перенесем встречу на удобное время."
  },
  {
    q: "Можно вдвоём?",
    a: "Да, можно провести съёмку для пары в том же формате встречи."
  },
  {
    q: "Сколько кадров?",
    a: "До 8 кадров за сессию. Обычно снимаем в нескольких точках по пути."
  },
  {
    q: "Когда будет готово?",
    a: "Сканы обычно готовы через 2–3 дня после встречи."
  },
  {
    q: "Как записаться?",
    a: "Через Telegram, WhatsApp или звонок. Обычно отвечаю в течение дня."
  }
] as const;

export const galleryItems = Array.from({ length: 22 }, (_, i) => {
  const id = i + 1;
  const file = String(id).padStart(2, "0");

  return {
    id,
    src: `/images/gallery/${file}.svg`,
    alt: `Портрет на плёнку 6×9, кадр ${id}`,
    caption: "6×9 film portrait"
  };
});
