import { siteConfig } from "@/config/site";

export function SeoFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-12 text-xs text-muted md:px-10">
      <div className="thin-rule pt-5 space-y-2">
        <p>Небольшое количество сессий каждую неделю. (Limited sessions each week)</p>
        <p>{siteConfig.seoKeywords}</p>
      </div>
    </footer>
  );
}
