import { siteConfig } from "@/config/site";

export function PriceCard() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
      <div className="rounded-sm border border-line bg-[#fcfaf5] p-6 shadow-card">
        <h2 className="text-2xl text-ink">Стоимость</h2>
        <p className="mt-2 text-3xl text-ink">{siteConfig.priceRub.toLocaleString("ru-RU")} ₽</p>
        <p className="mt-2 text-sm text-muted">Включено: плёнка, проявка, сканирование всех кадров.</p>
        <p className="mt-1 text-sm text-muted">Ручная печать в тёмной комнате - позже, по запросу.</p>
      </div>
    </section>
  );
}
