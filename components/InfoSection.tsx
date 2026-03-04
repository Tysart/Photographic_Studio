import { productFacts } from "@/config/site";

export function InfoSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10">
      <div className="thin-rule pt-8">
        <h2 className="text-2xl text-ink">Что вы получаете</h2>
        <ul className="mt-5 grid gap-3 text-[15px] leading-relaxed text-muted md:grid-cols-2">
          {productFacts.map((fact) => (
            <li key={fact} className="rounded-sm border border-line px-4 py-3">
              {fact}
            </li>
          ))}
        </ul>
        <ul className="mt-3 grid gap-3 text-[15px] leading-relaxed text-muted md:grid-cols-2">
          <li className="rounded-sm border border-line px-4 py-3">2 авторские контактные печати 10×15</li>
          <li className="rounded-sm border border-line px-4 py-3">1 портрет в рамке</li>
          <li className="rounded-sm border border-line px-4 py-3">1 печать в архивном конверте</li>
          <li className="rounded-sm border border-line px-4 py-3">Цифровые сканы для личного использования</li>
        </ul>
        <p className="mt-3 text-sm text-muted">Фотографии на сайте — примеры прошлых сессий.</p>
      </div>
    </section>
  );
}
