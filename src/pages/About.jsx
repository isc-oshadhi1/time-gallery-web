import { useEffect } from 'react';
import AboutBanner from '../components/AboutBanner';
import AboutText from '../components/AboutText';
import GallerySection from '../components/GallerySection';

export default function About() {
  useEffect(() => {
    document.title = 'About | Thetimegallery';
    return () => {
      document.title = 'Home | Thetimegallery';
    };
  }, []);

  return (
    <main className="about-page-main">
      <AboutBanner />
      <AboutText />
      <GallerySection />
    </main>
  );
}
