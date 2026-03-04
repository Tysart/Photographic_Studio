import { AboutAtelier } from "@/components/AboutAtelier";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { InfoSection } from "@/components/InfoSection";
import { LocationsSection } from "@/components/LocationsSection";
import { PriceCard } from "@/components/PriceCard";
import { SeoFooter } from "@/components/SeoFooter";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InfoSection />
        <HowItWorks />
        <PriceCard />
        <LocationsSection />
        <FAQAccordion />
        <AboutAtelier />
      </main>
      <SeoFooter />
    </>
  );
}
