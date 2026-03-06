import { productFacts } from "@/config/site";

export function InfoSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10">
      <div className="thin-rule pt-8">
        <h2 className="text-2xl text-ink">Что вы получаете</h2>
        <ul className="mt-5 grid gap-3 text-[15px] leading-relaxed text-muted md:grid-cols-2">
          {productFacts.map((fact) => (
            <li key={fact.ru} className="rounded-sm border border-line px-4 py-3">
              <p>{fact.ru}</p>
              <p className="mt-1 text-xs text-muted/80">({fact.en})</p>
            </li>
          ))}
        </ul>
        <ul className="mt-3 grid gap-3 text-[15px] leading-relaxed text-muted md:grid-cols-2">
          <li className="rounded-sm border border-line px-4 py-3">
            <p>2 авторские контактные печати 10×15</p>
            <p className="mt-1 text-xs text-muted/80">(Two author contact prints 10×15)</p>
          </li>
          <li className="rounded-sm border border-line px-4 py-3">
            <p>1 авторский портрет в рамке</p>
            <p className="mt-1 text-xs text-muted/80">(One framed author portrait)</p>
          </li>
          <li className="rounded-sm border border-line px-4 py-3">
            <p>1 авторская печать в архивном конверте</p>
            <p className="mt-1 text-xs text-muted/80">(One author print in archival envelope)</p>
          </li>
          <li className="rounded-sm border border-line px-4 py-3">
            <p>Аналоговая и ручная работа на всех этапах</p>
            <p className="mt-1 text-xs text-muted/80">(Analog and handmade process throughout)</p>
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted">Фотографии на сайте — примеры прошлых сессий.</p>
      </div>
    </section>
  );
}
