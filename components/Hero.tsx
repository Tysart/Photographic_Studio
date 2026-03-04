import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-12 pt-4 md:grid-cols-[1.1fr_1fr] md:px-10 md:pt-10">
      <div className="order-2 md:order-1">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
          <span className="ornament" aria-hidden="true" />
          Фотоателье TESSART
        </p>
        <h1 className="text-4xl leading-tight text-ink md:text-5xl">{siteConfig.premiseRu}</h1>
        <p className="mt-3 text-sm text-muted">({siteConfig.premiseEn})</p>
      </div>
      <div className="order-1 md:order-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line bg-[#ede8dd] shadow-card">
          <Image
            src="/images/hero-placeholder.jpg"
            alt="Портрет в историческом пространстве Санкт-Петербурга"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
