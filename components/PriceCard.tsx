export function PriceCard() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
      <div className="thin-rule pt-8">
        <h2 className="text-2xl text-ink">Стоимость</h2>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <article className="rounded-sm border border-line bg-[#fcfaf5] p-5 shadow-card">
            <p className="text-sm uppercase tracking-[0.14em] text-accent">Base</p>
            <p className="mt-2 text-2xl text-ink">10 000 ₽</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-muted marker:text-accent">
              <li>Съёмка до 2 часов</li>
              <li>Плёнка 6×9, проявка, все сканы</li>
              <li>2 авторские контактные печати 10×15 в архивном конверте</li>
            </ul>
          </article>

          <article className="rounded-sm border border-line bg-[#fcfaf5] p-5 shadow-card">
            <p className="text-sm uppercase tracking-[0.14em] text-accent">Signature</p>
            <p className="mt-2 text-2xl text-ink">15 000 ₽</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-muted marker:text-accent">
              <li>Всё из Base</li>
              <li>1 авторская печать в рамке</li>
              <li>Фирменная авторская упаковка</li>
              <li>Визитка ателье</li>
            </ul>
          </article>

          <article className="rounded-sm border border-line bg-[#fcfaf5] p-5 shadow-card">
            <p className="text-sm uppercase tracking-[0.14em] text-accent">Collector</p>
            <p className="mt-2 text-2xl text-ink">22 000 ₽</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-muted marker:text-accent">
              <li>Всё из Signature</li>
              <li>Расширенная работа по образу и локации</li>
              <li>Приоритет по времени</li>
              <li>Дополнительная авторская печать</li>
            </ul>
          </article>
        </div>

        <p className="mt-4 text-sm text-muted">Отдельно оплачивается аренда студии и прокат одежды (если нужно).</p>
        <p className="mt-1 text-sm text-muted">Срок готовности комплекта — до 3 дней.</p>
      </div>
    </section>
  );
}
