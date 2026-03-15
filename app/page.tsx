import { AtelierAbout } from "@/components/AtelierAbout";
import { AtelierDetails } from "@/components/AtelierDetails";
import { AtelierHero } from "@/components/AtelierHero";
import { AtelierPricing } from "@/components/AtelierPricing";
import { IntroGate } from "@/components/IntroGate";
import { SeoFooter } from "@/components/SeoFooter";

export default function HomePage() {
  return (
    <IntroGate>
      <div id="atelier-site" className="site-shell site-shell--framed">
        <div className="site-shell__frame" aria-hidden="true">
          <div className="site-shell__line site-shell__line--top" />
          <div className="site-shell__line site-shell__line--right" />
          <div className="site-shell__line site-shell__line--bottom" />
          <div className="site-shell__line site-shell__line--left" />

          <div className="site-shell__corner site-shell__corner--tl" />
          <div className="site-shell__corner site-shell__corner--tr" />
          <div className="site-shell__corner site-shell__corner--br" />
          <div className="site-shell__corner site-shell__corner--bl" />
        </div>

        <main className="site-shell__content">
          <AtelierHero />
          <AtelierDetails />
          <AtelierPricing />
          <AtelierAbout />
        </main>
        <SeoFooter />
      </div>
    </IntroGate>
  );
}
