import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import ComingSoon from './pages/ComingSoon';
import './styles/global.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        {/* Reusable Header on every page */}
        <Header />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Unknown routes show simple "Page coming soon" placeholder */}
          <Route path="*" element={<ComingSoon />} />
        </Routes>

        {/* Reusable Footer on every page */}
        <Footer />

        {/* Floating action buttons (Let's Chat & WhatsApp) */}
        <FloatingButtons />
      </div>
    </BrowserRouter>
  );
}
