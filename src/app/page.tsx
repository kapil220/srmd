'use client';

import LandingHero from '@/components/LandingHero';
import ServicesSection from '@/components/ServicesSection';
import InspirationSection from '@/components/InspirationSection';
import FounderSection from '@/components/FounderSection';
import AshramSection from '@/components/AshramSection';
import CentresSection from '@/components/CentresSection';
import LoveAndCareSection from '../components/LoveAndCareSection';
import YouthActivitiesSection from '@/components/YouthActivitiesSection';
import ChildrenActivities from '@/components/ChildrenActivities';
import NewsEvents from '@/components/NewsEvents';
import SchedulesPage from '@/components/SchedulesPage';
import VideosAndArticlesSection from '@/components/VideosAndArticlesSection';
import HeroSection from '@/components/HeroSection';

const Home = () => {
  return (
    <div className="overflow-y-auto">
      <LandingHero />
      <ServicesSection />
      <InspirationSection />
      <FounderSection />
      <AshramSection />
      <CentresSection />
      <LoveAndCareSection />
      <YouthActivitiesSection />
      <ChildrenActivities />
      <NewsEvents />
      <SchedulesPage />
      <VideosAndArticlesSection />
      <HeroSection />
    </div>
  );
};

export default Home;