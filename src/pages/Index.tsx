import { HeroSection } from "@/components/landing/HeroSection";
import { SocialProofBar } from "@/components/landing/SocialProofBar";
import { AboutHernan } from "@/components/landing/AboutHernan";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";
import { PricingWizard } from "@/components/landing/PricingWizard";
import { PricingCards } from "@/components/landing/PricingCards";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SocialProofBar />
      <AboutHernan />
      <HowItWorks />
      <Testimonials />
      <PricingWizard />
      <PricingCards />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
