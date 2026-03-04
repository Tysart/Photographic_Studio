import { siteConfig } from "@/config/site";

export function PriceCard() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
      <div className="rounded-sm border border-line bg-[#fcfaf5] p-6 shadow-card">
        <h2 className="text-2xl text-ink">Стоимость</h2>
        <p className="mt-2 text-3xl text-ink">{siteConfig.priceRub.toLocaleString("ru-RU")} ₽</p>

        <p className="mt-4 text-sm uppercase tracking-[0.14em] text-accent">В сессию входит</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-muted marker:text-accent">
          <li>Съёмка на чёрно-белую плёнку среднего формата 6×9</li>
          <li>До 8 кадров за встречу</li>
          <li>Проявка и сканирование всех кадров</li>
        </ul>

        <p className="mt-4 text-sm uppercase tracking-[0.14em] text-accent">Вы получаете</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-muted marker:text-accent">
          <li>2 авторские печати 10×15</li>
          <li>1 портрет в рамке</li>
          <li>1 печать в архивном конверте</li>
          <li>Цифровые сканы для личного использования</li>
        </ul>

        <p className="mt-4 text-sm text-muted">Обычно из серии получается 3–5 самых сильных портретов.</p>
        <p className="mt-1 text-sm text-muted">Ручная печать (контакт 6×9) — по запросу / скоро.</p>
      </div>
    </section>
  );
}
