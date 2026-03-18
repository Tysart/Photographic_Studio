export const siteConfig = {
  brand: "TESSART",
  subtitle: "Portrait Atelier / Saint Petersburg",
  title: "TESSART — Портрет на плёнку в Санкт-Петербурге",
  description:
    "Фотоателье TESSART: петербургский портрет с отсылкой к фотографической культуре XIX века, ручная проявка, сканы и авторские отпечатки.",
  heroTitle: "Портрет в Петербурге, вдохновленный фотографической культурой XIX века.",
  heroLead: "Это не просто съёмка на плёнку, а редкий портретный опыт: прогулка по Петербургу, точные кадры, ручной процесс и результат с другой плотностью, подачей и ощущением в руках.",
  heroLeadEn: "An atmospheric medium-format film session with final selected frames and physical prints.",
  mobileBookCta: "Записаться на съёмку",
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
    titleRu: "1. Согласование и место",
    titleEn: "1. Planning and location",
    bodyRu: "Сначала мы договариваемся о съёмке и выбираем место в городе. Я предлагаю проверенные локации, но можно выбрать и другие.",
    bodyEn: "First we agree on the session and choose the location in the city. I suggest tested places, but other options are also possible."
  },
  {
    titleRu: "2. Съёмка в городе",
    titleEn: "2. Session in the city",
    bodyRu: "Во время съёмки я помогаю с позой, слежу за светом и направляю вас, чтобы кадр складывался точно. Если по ходу появляются более интересные точки или ракурсы, мы можем немного менять маршрут и двигаться дальше.",
    bodyEn: "During the session I help with pose, watch the light and guide you so the frame comes together precisely. If stronger viewpoints appear on the way, we can slightly change the route."
  },
  {
    titleRu: "3. Проявка и передача",
    titleEn: "3. Development and delivery",
    bodyRu: "После встречи я проявляю плёнку, подготавливаю сканы, печатаю фотографии и затем передаю готовый результат.",
    bodyEn: "After the meeting I develop the film, prepare the scans, print the photographs and then hand over the finished result."
  }
] as const;

export const processCards = [
  {
    titleRu: "Процесс съемки",
    titleEn: "Shooting process",
    bodyRu: "Здесь можно показать, как выглядит сама прогулка и работа с кадром: жест, пауза, композиция и положение камеры.",
    bodyEn: "A look at the walk itself: gesture, pauses, composition and the way the camera is used on location.",
    thumbnail: "/images/process/process-shooting.svg",
    gallery: [
      { src: "/images/process/process-shooting.svg", altRu: "Процесс съемки", altEn: "Shooting process" },
      { src: "/images/gallery/05.jpg", altRu: "Процесс съемки, кадр со стороны", altEn: "Shooting process from the side" },
      { src: "/images/gallery/06.jpg", altRu: "Процесс съемки, работа с позой", altEn: "Working on pose during the session" }
    ]
  },
  {
    titleRu: "Процесс проявки",
    titleEn: "Development process",
    bodyRu: "Этот блок хорошо подойдёт для будущих фотографий проявки, бачков, плёнки и ручного лабораторного этапа.",
    bodyEn: "A place for future photos of development tanks, film strips and the manual lab stage.",
    thumbnail: "/images/process/process-development.svg",
    gallery: [
      { src: "/images/process/process-development.svg", altRu: "Проявка плёнки", altEn: "Film development" },
      { src: "/images/gallery/07.jpg", altRu: "Проявка плёнки, этап", altEn: "Development step" },
      { src: "/images/gallery/08.jpg", altRu: "Проявка плёнки, лаборатория", altEn: "Film lab process" }
    ]
  },
  {
    titleRu: "Сканирование пленки",
    titleEn: "Film scanning",
    bodyRu: "Здесь удобно показать сканер, сам негатив и момент, когда кадр превращается в аккуратный цифровой файл.",
    bodyEn: "A good place to show the scanner, the negative itself and the moment the frame becomes a clean digital file.",
    thumbnail: "/images/process/process-scanning.svg",
    gallery: [
      { src: "/images/process/process-scanning.svg", altRu: "Сканирование пленки", altEn: "Film scanning" },
      { src: "/images/gallery/09.jpg", altRu: "Сканирование, негатив", altEn: "Scanning the negative" },
      { src: "/images/gallery/10.jpg", altRu: "Сканирование, результат", altEn: "Scanning result" }
    ]
  },
  {
    titleRu: "Печать фотографий",
    titleEn: "Printing photographs",
    bodyRu: "Отдельное окно для печати, бумаги, проб и того, как цифровой файл переходит в физический отпечаток.",
    bodyEn: "A dedicated view for prints, paper, test sheets and how the file becomes a physical photograph.",
    thumbnail: "/images/process/process-printing.svg",
    gallery: [
      { src: "/images/process/process-printing.svg", altRu: "Печать фотографий", altEn: "Printing photographs" },
      { src: "/images/gallery/12.jpg", altRu: "Печать, бумага и отпечаток", altEn: "Printing, paper and print" },
      { src: "/images/gallery/13.jpg", altRu: "Печать, готовый результат", altEn: "Finished print" }
    ]
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

export const formatGlossary = [
  {
    titleRu: 'Что такое "отпечатки"?',
    titleEn: "What are prints?",
    bodyRu:
      "Отпечатки — это готовые фотографии на бумаге. Их можно держать в руках, положить в конверт, оформить в рамку и сохранить как итог съёмки в физическом виде.",
    bodyEn:
      "Prints are physical photographs on paper. They can be held, framed, kept in an envelope and experienced as objects, not only as files on a screen."
  },
  {
    titleRu: 'Что такое "сканы"?',
    titleEn: "What are scans?",
    bodyRu:
      "Сканы — это цифровые версии кадров, полученные после проявки плёнки. Их удобно хранить, отправлять близким и использовать онлайн, при этом сам негатив сохраняется.",
    bodyEn:
      "Scans are digital versions of the frames made after the film is developed. They are useful for sharing, publishing and storing online, while the original source still remains the film frame."
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
