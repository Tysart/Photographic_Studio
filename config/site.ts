export const siteConfig = {
  brand: "TESSART",
  subtitle: "Portrait Atelier / Saint Petersburg",
  premiseRu: "Портрет на чёрно-белую плёнку. Живой сувенир из Петербурга.",
  premiseEn: "Portrait on black-and-white film. A living souvenir of Saint Petersburg.",
  title: "TESSART — Портрет на плёнку в Санкт-Петербурге",
  description:
    "Фотоателье TESSART: портрет на черно-белую пленку 6x9 в исторических пространствах Санкт-Петербурга. По записи, готовность сканов 2-3 дня.",
  location: "Санкт-Петербург, исторический центр",
  priceRub: 9000,
  contacts: {
    telegram: "https://t.me/tessart",
    whatsapp: "https://wa.me/79990000000",
    phone: "tel:+79990000000"
  },
  seoKeywords: "портрет на плёнку, Санкт-Петербург, фотосессия, средний формат"
} as const;

export const productFacts = [
  "Чёрно-белая плёнка, средний формат 6x9",
  "Сессия до 2 часов (обычно 60-90 минут)",
  "До 8 кадров за встречу (одна катушка)",
  "Все сканы в готовности через 2-3 дня"
] as const;

export const modalContent = {
  howItWorks: {
    title: "Как проходит съёмка",
    body: "Встречаемся в выбранной точке центра. Работаем спокойно, без спешки: свет, ритм, паузы. После съёмки — проявка, сканирование, передача всех кадров."
  },
  whyEight: {
    title: "Почему до 8 кадров",
    body: "Одна катушка 120 даёт до восьми кадров в формате 6x9. Такое ограничение делает процесс собранным: обычно из серии получается 3-5 самых сильных портретов."
  },
  locations: {
    title: "Локации",
    body: "Снимаю в исторических пространствах Петербурга: вокзалы, лестницы, улицы центра. Без костюмов: современная одежда, классическая атмосфера."
  }
} as const;

export const galleryItems = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  src: "/images/gallery-placeholder.jpg",
  alt: `Портрет на пленку 6x9, кадр ${i + 1}`,
  caption: "6x9 film portrait"
}));
