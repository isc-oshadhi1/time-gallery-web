import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import About from './pages/About';
import WatchRepairsServicing from './pages/WatchRepairsServicing';
import BrandRepairPage from './pages/BrandRepairPage';
import rolexData from './data/brands/rolex';
import cartierData from './data/brands/cartier';
import iwcData from './data/brands/iwc';
import ComingSoon from './pages/ComingSoon';
import './styles/global.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-root">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/watch-repairs-servicing" element={<WatchRepairsServicing />} />
          <Route path="/rolex-watch-repair" element={<BrandRepairPage brand={rolexData} />} />
          <Route path="/cartier-watch-repair" element={<BrandRepairPage brand={cartierData} />} />
          <Route path="/iwc-schaffhausen-watch-repair" element={<BrandRepairPage brand={iwcData} />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>

        <Footer />
        <FloatingButtons />
      </div>
    </BrowserRouter>
  );
}
