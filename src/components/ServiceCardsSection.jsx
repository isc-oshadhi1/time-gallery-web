import repairsGif from '../assets/images/service-repairs.gif';
import ourServicesGif from '../assets/images/service-our-services.gif';
import polishingGif from '../assets/images/service-polishing.gif';
import batteryGif from '../assets/images/service-battery.gif';
import MediaPlaceholder from './MediaPlaceholder';
import './ServiceCardsSection.css';

const SERVICE_CARDS = [
  {
    id: 'repairs-servicing',
    title: 'Watch Repairs & Servicing »',
    href: '/watch-repairs-servicing',
    src: repairsGif,
  },
  {
    id: 'our-services',
    title: 'Our Services »',
    href: '/our-services',
    src: ourServicesGif,
  },
  {
    id: 'watch-polishing',
    title: 'Watch Polishing »',
    href: '/watch-polishing',
    src: polishingGif,
  },
  {
    id: 'battery-replacement',
    title: 'Watch Battery Replacement »',
    href: '/battery-replacement',
    src: batteryGif,
  },
];

export default function ServiceCardsSection() {
  return (
    <section className="service-cards-section" aria-label="Our Watch Services">
      <div className="container-wide">
        <div className="service-cards-grid">
          {SERVICE_CARDS.map((card) => (
            <article key={card.id} className="service-card">
              <a href={card.href} className="service-card-link">
                <header className="service-card-header">
                  <h2 className="service-card-title">{card.title}</h2>
                </header>
                <div className="service-card-media-wrapper">
                  <MediaPlaceholder
                    type="image"
                    src={card.src}
                    alt={card.title}
                    label={card.title}
                    className="service-card-img"
                    width="270"
                    height="140"
                    loading="lazy"
                  />
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
