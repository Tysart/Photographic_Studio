import { howItWorks } from "@/config/site";

export function HowItWorks() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
      <div className="thin-rule pt-8">
        <h2 className="text-2xl text-ink">Как проходит</h2>
        <ol className="mt-5 grid gap-3 md:grid-cols-3">
          {howItWorks.map((step, index) => (
            <li key={step} className="rounded-sm border border-line px-4 py-4 text-[15px] leading-relaxed text-muted">
              <p className="mb-2 text-xs uppercase tracking-[0.16em] text-accent">Шаг {index + 1}</p>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
