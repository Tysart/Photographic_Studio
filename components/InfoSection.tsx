import { productFacts } from "@/config/site";

export function InfoSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10">
      <div className="thin-rule pt-8">
        <h2 className="text-2xl text-ink">Что вы получаете</h2>
        <ul className="mt-5 grid gap-3 text-[15px] text-muted md:grid-cols-2">
          {productFacts.map((fact) => (
            <li key={fact} className="rounded-sm border border-line px-4 py-3">
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
