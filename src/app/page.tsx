'use client';
import { useEffect } from 'react';
import Header from '@/components/Header';
import LandingHero from '@/components/LandingHero';
import IntroSection from '@/components/IntroSection';
import ServicesSection from '@/components/ServicesSection';
import InspirationSection from '@/components/InspirationSection';
import FounderSection from '@/components/FounderSection';
import AshramSection from '@/components/AshramSection';
import CentresSection from '@/components/CentresSection';
import LoveAndCareSection from '../components/LoveAndCareSection';

const Home = () => {
  useEffect(() => {
    const autoScroll = setTimeout(() => {
      const servicesSection = document.getElementById('services-section');
      if (servicesSection) {
        window.scrollTo({
          top: window.innerHeight * 2, // Scroll to services (third section)
          behavior: 'smooth'
        });
      }
    }, 4000); // 4 seconds

    const handleScroll = () => {
      clearTimeout(autoScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(autoScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-auto">
      <div className="h-screen snap-start">
        <LandingHero />
      </div>
      <div className="h-screen snap-start">
        <Header />
        <IntroSection />
      </div>
      <div className="h-screen snap-start" id="services-section">
        <ServicesSection />
      </div>
      <div className="h-screen snap-start">
        <InspirationSection />
      </div>
      <div className="h-screen snap-start">
        <FounderSection />
      </div>
      <div className="h-screen snap-start">
        <AshramSection />
      </div>
      <div className="min-h-screen snap-start">
        <CentresSection />
      </div>
      <div className="min-h-screen snap-start">
        <LoveAndCareSection />
      </div>
    </main>
  );
};

export default Home;
