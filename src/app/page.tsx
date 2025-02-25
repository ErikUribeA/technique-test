'use client'
import AboutSection from "@/components/about-section/AboutSection";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero-section/HeroSection";
import ProcessSection from "@/components/process-section/ProcessSection";
import RegisterSection from "@/components/register-section/RegisterSection";
import ServicesSection from "@/components/services-section/ServicesSection";
import TechSection from "@/components/tech-section/TechSection";
import { useEffect, useState } from "react";

interface IResponse {
  text: string
  id: string
}

export default function Home() {
  const [data, setData] = useState<IResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://67449f2eb4e2e04abea2fc65.mockapi.io/api/v1/Posts');
        if (!response.ok) {
          console.log('Error in the response');
          return;
        }
        const result: IResponse[] = await response.json();
        if (result.length > 0) {
          setData(result[2]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(data)
  return (
    <div className="flex flex-col gap-14">
      <Header />
      <HeroSection text={data?.text} />
      <AboutSection text={data?.text} />
      <ServicesSection text={data?.text} />
      <TechSection />
      <ProcessSection text={data?.text} />
      <RegisterSection />
      <Footer />
    </div>
  );
}
