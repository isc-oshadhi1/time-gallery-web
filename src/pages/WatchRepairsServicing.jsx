import { useEffect } from 'react';
import services from '../data/services';
import ServiceBlock from '../components/ServiceBlock';
import './WatchRepairsServicing.css';

const LEFT_SERVICE_IDS = [
  'watch-repairs',
  'refurbishment',
  'glass-replacement',
  'strap-bracelet-replacement',
];

const RIGHT_SERVICE_IDS = [
  'watch-service',
  'battery-reseal',
  'crown-replacement',
];

// Order for stacked mobile layout
const MOBILE_ORDER_MAP = {
  'watch-repairs': 1,
  'watch-service': 2,
  'refurbishment': 3,
  'battery-reseal': 4,
  'glass-replacement': 5,
  'crown-replacement': 6,
  'strap-bracelet-replacement': 7,
};

export default function WatchRepairsServicing() {
  useEffect(() => {
    document.title = 'Watch Repairs & Servicing | Thetimegallery';
    return () => {
      document.title = 'Home | Thetimegallery';
    };
  }, []);

  const leftColumnServices = LEFT_SERVICE_IDS.map((id) =>
    services.find((s) => s.id === id)
  ).filter(Boolean);

  const rightColumnServices = RIGHT_SERVICE_IDS.map((id) =>
    services.find((s) => s.id === id)
  ).filter(Boolean);

  return (
    <main className="repairs-page-main">
      {/* Thin dark-grey 2px line directly under header at y≈164 */}
      <div className="repairs-top-divider" aria-hidden="true" />

      {/* Page heading */}
      <header className="repairs-header">
        <h1 className="repairs-page-title">Watch Repairs &amp; Services</h1>
        <p className="repairs-page-intro">
          Whether your watch needs a full watch service and refurbishment or simply a new leather strap,<br />
          our expert Watchmakers are here to help with your watch service.
        </p>
      </header>

      {/* 2-column layout matching exact x342-x749 and x811-x1205 layout */}
      <section className="repairs-grid-container" aria-label="Watch Repair and Servicing Offerings">
        <div className="repairs-grid">
          <div className="repairs-column repairs-column--left">
            {leftColumnServices.map((service) => (
              <div
                key={service.id}
                className="repairs-card-item"
                style={{ '--order': MOBILE_ORDER_MAP[service.id] || 0 }}
              >
                <ServiceBlock service={service} />
              </div>
            ))}
          </div>

          <div className="repairs-column repairs-column--right">
            {rightColumnServices.map((service) => (
              <div
                key={service.id}
                className="repairs-card-item"
                style={{ '--order': MOBILE_ORDER_MAP[service.id] || 0 }}
              >
                <ServiceBlock service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
