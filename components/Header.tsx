import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
      <div>
        <Link href="/" className="text-2xl tracking-[0.12em] text-ink no-underline">
          {siteConfig.brand}
        </Link>
        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">{siteConfig.subtitle}</p>
      </div>
      <Link href="/gallery" className="text-sm text-muted transition-colors hover:text-ink">
        Gallery
      </Link>
    </header>
  );
}
