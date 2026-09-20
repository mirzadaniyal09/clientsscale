import Hero from '../components/Hero';
import AboutTeaser from '../components/AboutTeaser';
import ServicesSection from '../components/ServicesSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import IndustriesSection from '../components/IndustriesSection';
import StatsSection from '../components/StatsSection';
import SustainableSection from '../components/SustainableSection';
import TechStackSection from '../components/TechStackSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <ServicesSection />
      <CaseStudiesSection />
      <IndustriesSection />
      <StatsSection />
      <SustainableSection />
      <TechStackSection />
      <TestimonialsSection />
    </>
  );
}
