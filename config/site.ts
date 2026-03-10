export const siteConfig = {
  brand: "TESSART",
  subtitle: "Portrait Atelier / Saint Petersburg",
  title: "TESSART — Портрет на плёнку в Санкт-Петербурге",
  description:
    "Фотоателье TESSART: петербургский портрет с отсылкой к фотографической культуре XIX века, ручная проявка, сканы и авторские отпечатки.",
  heroTitle: "Портрет в Петербурге, вдохновленный фотографической культурой XIX века.",
  heroLead: "Это не просто съёмка на плёнку, а редкий портретный опыт: прогулка по Петербургу, точные кадры, ручной процесс и результат с другой плотностью, подачей и ощущением в руках.",
  heroLeadEn: "An atmospheric medium-format film session with final selected frames and physical prints.",
  mobileBookCta: "Записаться",
  priceRub: 10000,
  contacts: {
    telegram: "https://t.me/tessartspb",
    whatsapp: "https://wa.me/79612099502"
  },
  seoKeywords: "портрет на плёнку, аналоговая фотосъемка, medium format 6x9, фотосессия Санкт-Петербург, ручная печать"
} as const;

export const productFacts = [
  {
    ru: "Здесь важен не сам носитель, а характер результата: глубина кадра, плотность изображения и ощущение готовой вещи, а не набора файлов.",
    en: "I work with 6×9 medium-format film. It is the frame size on film, not the size of the final print."
  },
  {
    ru: "Съёмка проходит через несколько точных композиций, поэтому каждый кадр собирается внимательнее, чем в обычной городской фотосессии.",
    en: "This differs from a typical digital session: fewer duplicates, more attention to light, pose and composition."
  },
  {
    ru: "В каждом формате заранее определено количество итоговых кадров, поэтому серия получается собранной и цельной.",
    en: "Each format includes a predefined number of final frames. I do not deliver a random stream of shots, but a finished result."
  },
  {
    ru: "В зависимости от выбранного формата вы получаете сканы, отпечатки, рамку и оформленную выдачу.",
    en: "Scans, prints, framing and presentation depend on the selected package."
  }
] as const;

export const offerings = [
  {
    titleRu: "Аналоговая фотография",
    titleEn: "Analog photography",
    bodyRu:
      "Петербургский портрет на среднеформатную плёнку: прогулка, несколько точных кадров, ручная проявка и красивые отпечатки на память.",
    bodyEn:
      "The core TESSART format. A deliberate medium-format film session with final scans, prints and handmade presentation.",
    noteRu: "Подходит для одного человека, пары, прогулки по центру и поездки в Петербург, которую хочется запомнить красиво.",
    noteEn: "Suitable for portraits, couples, atmospheric walks and personal stories."
  }
] as const;

export const processFrames = [
  {
    titleRu: "1. Переписка и настрой",
    titleEn: "1. Message and mood",
    bodyRu: "Вы пишете мне, и мы выбираем подходящий формат, место в городе и тот ритм прогулки, который вам ближе.",
    bodyEn: "You write to me, and we quickly decide which format suits you, where to shoot and what mood we want to build."
  },
  {
    titleRu: "2. Съёмка в городе",
    titleEn: "2. A calm session",
    bodyRu: "Во время съёмки я веду вас по композициям, подсказываю по позе и слежу за светом, чтобы каждый кадр был на своём месте.",
    bodyEn: "There is no stream of random duplicates. We work through chosen compositions, light, gesture and mood."
  },
  {
    titleRu: "3. Плёнка, проявка, отбор",
    titleEn: "3. Film, development, selection",
    bodyRu: "После встречи я вручную проявляю плёнку, подготавливаю сканы и печатаю те фотографии, которые войдут в ваш формат.",
    bodyEn: "After the session I hand-develop the material, prepare the final scans and assemble the physical result."
  },
  {
    titleRu: "4. Вы получаете вещь",
    titleEn: "4. You receive an object",
    bodyRu: "В финале вы получаете готовую вещь: отпечатки, рамку, конверт или более собранную подачу в зависимости от выбранного формата.",
    bodyEn: "The result is not just files, but prints, framing, an envelope or a presented object depending on the format."
  }
] as const;

export const processGallery = [
  {
    titleRu: "Встреча и выбор точки",
    titleEn: "Meeting and choosing the spot",
    bodyRu: "Первые минуты, когда мы выбираем ритм прогулки, свет и место для первых композиций.",
    bodyEn: "The first moments when we choose the rhythm, the light and the spot for the first compositions.",
    image: "/images/hero-placeholder.jpg"
  },
  {
    titleRu: "Съёмка со стороны",
    titleEn: "The session from the side",
    bodyRu: "То, как выглядит сама работа: камера, жест, пауза, постановка и внимание к человеку.",
    bodyEn: "What the session looks like from the side: the camera, gesture, pause, direction and attention to the person.",
    image: "/images/gallery-placeholder.jpg"
  },
  {
    titleRu: "Проявка и ручной этап",
    titleEn: "Development and manual work",
    bodyRu: "Кадры из лабораторного процесса: плёнка, химия, сканы, контактная печать и сборка результата.",
    bodyEn: "Frames from the laboratory process: film, chemistry, scans, contact printing and assembling the result.",
    image: "/images/hero-placeholder.jpg"
  },
  {
    titleRu: "Готовая выдача",
    titleEn: "The final handover",
    bodyRu: "Момент, когда цифровой файл превращается в отпечаток, рамку, конверт или собранную подачу.",
    bodyEn: "The moment when a file becomes a print, a frame, an envelope or a complete presentation.",
    image: "/images/gallery-placeholder.jpg"
  }
] as const;

export const howItWorks = [
  {
    ru: "Сначала выбираем формат, локацию и настроение съёмки. Если вы никогда не снимались на плёнку, я спокойно объясню, как всё будет устроено.",
    en: "First we choose the format, location and mood. If you have never done a film session before, I explain the process calmly."
  },
  {
    ru: "Во время съёмки мы идём от композиции к композиции, внимательно работая со светом, позой и самим настроением кадра.",
    en: "During the session we work in a deliberate limited format: building specific compositions instead of endless duplicates."
  },
  {
    ru: "После съёмки я вручную проявляю плёнку и подготавливаю итоговые сканы и отпечатки. Если на месте случается техническая ошибка, кадр переснимается сразу.",
    en: "After the session I hand-develop the film and prepare the final scans and prints. If there is a technical fault on location, the frame is reshot immediately."
  }
] as const;

export const locations = [
  {
    ru: "Витебский вокзал",
    en: "Vitebsky Railway Station"
  },
  {
    ru: "Улицы и дворы центра",
    en: "Central streets and courtyards"
  },
  {
    ru: "Невский и спокойные центральные маршруты",
    en: "Nevsky area and calmer central routes"
  },
  {
    ru: "Арендованная студия или выбранная вами локация",
    en: "A rented studio or a location chosen by you"
  }
] as const;

export const faqItems = [
  {
    qRu: "Что я получу в итоге?",
    qEn: "What do I receive in the end?",
    aRu: "В каждом формате заранее определено количество итоговых кадров. В зависимости от пакета это могут быть сканы, контактные отпечатки, рамка и авторская подача.",
    aEn: "Each format includes a predefined number of final frames. Depending on the package, this may include scans, contact prints, a frame and author presentation."
  },
  {
    qRu: "Почему не все кадры?",
    qEn: "Why not all frames?",
    aRu: "В каждом формате заранее определено количество итоговых кадров. Такой способ работы помогает сохранить цельность серии и качество итогового результата.",
    aEn: "I work in a deliberate analog format. Only the final selected frames included in your package are delivered."
  },
  {
    qRu: "Можно в студии?",
    qEn: "Can we shoot in a studio?",
    aRu: "Да. Я могу снимать в студии или на выбранной вами локации, если аренда, билеты и дополнительные расходы оплачиваются отдельно.",
    aEn: "Yes. I can work in a rented studio or a location you choose, as long as studio rent, tickets and extra location costs are paid separately."
  },
  {
    qRu: "Если дождь?",
    qEn: "What if it rains?",
    aRu: "Мы либо переносим встречу, либо выбираем место, где можно продолжить съёмку и сохранить нужное настроение.",
    aEn: "We either reschedule or switch to a location where we can continue calmly without losing the atmosphere."
  },
  {
    qRu: "Когда будет готово?",
    qEn: "When will it be ready?",
    aRu: "Срок зависит от формата, но обычно итоговые материалы готовятся в течение нескольких дней после съёмки.",
    aEn: "Timing depends on the package, but final materials are usually prepared within a few days after the session."
  },
  {
    qRu: "Можно ли заказать ещё скан или отпечаток?",
    qEn: "Can I order an extra scan or print?",
    aRu: "Да, дополнительные сканы, отпечатки и оформление можно обсудить отдельно в рамках уже отснятого материала.",
    aEn: "Yes, extra scans, prints and presentation can be discussed separately within the material already shot."
  }
] as const;

export const galleryItems = Array.from({ length: 22 }, (_, i) => {
  const id = 22 - i;
  const file = String(id).padStart(2, "0");

  return {
    id,
    src: `/images/gallery/${file}.jpg?v=2`,
    alt: `Портрет на плёнку 6×9, кадр ${id}`,
    caption: "6×9 film portrait"
  };
});
