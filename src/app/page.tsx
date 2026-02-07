import HeroCarousel from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import ServicesSection from "@/components/Sevices";
import TestimonialsSection from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <HeroCarousel />
    <WelcomeSection />
    <ServicesSection />
    <TestimonialsSection />
    </div>
  );
}
