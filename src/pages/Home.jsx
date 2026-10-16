import HeroSection from '../components/HeroSection';
import ServiceCardsSection from '../components/ServiceCardsSection';
import FeaturesSection from '../components/FeaturesSection';
import FreeEstimateSection from '../components/FreeEstimateSection';
import NewStoreSection from '../components/NewStoreSection';

export default function Home() {
  return (
    <main className="home-page-main">
      {/* 3. Hero section */}
      <HeroSection />

      {/* 4. Four service cards */}
      <ServiceCardsSection />

      {/* 5. Three-column feature section */}
      <FeaturesSection />

      {/* 6. Free estimate card */}
      <FreeEstimateSection />

      {/* 7. Checkout our new store section */}
      <NewStoreSection />
    </main>
  );
}
