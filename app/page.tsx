import { AboutAtelier } from "@/components/AboutAtelier";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomeActions } from "@/components/HomeActions";
import { InfoSection } from "@/components/InfoSection";
import { LearnMoreModals } from "@/components/LearnMoreModals";
import { PriceCard } from "@/components/PriceCard";
import { SeoFooter } from "@/components/SeoFooter";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HomeActions />
        <InfoSection />
        <PriceCard />
        <LearnMoreModals />
        <AboutAtelier />
      </main>
      <SeoFooter />
    </>
  );
}
