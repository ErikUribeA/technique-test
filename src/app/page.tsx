import AboutSection from "@/components/about-section/AboutSection";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero-section/HeroSection";
import ProcessSection from "@/components/process-section/ProcessSection";
import RegisterSection from "@/components/register-section/RegisterSection";
import ServicesSection from "@/components/services-section/ServicesSection";
import TechSection from "@/components/tech-section/TechSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechSection /> 
      <ProcessSection />
      <RegisterSection />
      <Footer />
    </div>
  );
}
