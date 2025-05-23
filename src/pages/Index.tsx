
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DemoSlides from "@/components/DemoSlides";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <DemoSlides />
      <HowItWorks />
      <TrustSection />
      <CTASection />
    </div>
  );
};

export default Index;
