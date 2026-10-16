import HeroSection from '../components/HeroSection';
import ServiceCardsSection from '../components/ServiceCardsSection';
import FeaturesSection from '../components/FeaturesSection';
import FreeEstimateSection from '../components/FreeEstimateSection';
import NewStoreSection from '../components/NewStoreSection';

export default function Home() {
  return (
    <main className="home-page-main">
      <HeroSection />
      <ServiceCardsSection />
      <FeaturesSection />
      <FreeEstimateSection />
      <NewStoreSection />
    </main>
  );
}
