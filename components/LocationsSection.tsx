import { locations } from "@/config/site";

export function LocationsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
      <div className="thin-rule pt-8">
        <h2 className="text-2xl text-ink">Локации</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted marker:text-accent">
          {locations.map((location) => (
            <li key={location}>{location}</li>
          ))}
        </ul>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          Локацию подбираем под погоду, свет и плотность людей.
        </p>
      </div>
    </section>
  );
}
