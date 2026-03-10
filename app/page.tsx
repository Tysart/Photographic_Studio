import { AboutAtelier } from "@/components/AboutAtelier";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { InfoSection } from "@/components/InfoSection";
import { OfferingsSection } from "@/components/OfferingsSection";
import { PriceCard } from "@/components/PriceCard";
import { ProcessGallerySection } from "@/components/ProcessGallerySection";
import { SeoFooter } from "@/components/SeoFooter";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OfferingsSection />
        <ProcessGallerySection />
        <InfoSection />
        <HowItWorks />
        <PriceCard />
        <FAQAccordion />
        <AboutAtelier />
      </main>
      <SeoFooter />
    </>
  );
}
