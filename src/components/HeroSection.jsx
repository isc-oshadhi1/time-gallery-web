import MediaPlaceholder from './MediaPlaceholder';
import './HeroSection.css';

// Constants
const HERO_CONTENT = {
  heading: 'Watch Repairs',
  paragraphLines: [
    'We pride ourselves on providing a service based on',
    'quality and value for money. We repair both mechanical',
    'and battery operated watches to the highest of',
    'standards.',
  ],
  linkPrefix: 'click',
  linkSuffix: ' here for best offers',
  linkHref: '/offers',
};

export default function HeroSection() {
  return (
    <section className="hero-section" aria-label="Hero - Watch Repairs">
      {/* Background Video */}
      <div className="hero-background-wrapper">
        <MediaPlaceholder
          type="video"
          src="/videos/hero.mp4"
          label="Hero Background Video"
          className="hero-media"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle dark overlay reduced to ~8-10% so the bright video shows */}
        <div className="hero-overlay" aria-hidden="true" />
      </div>

      {/* Centered Content */}
      <div className="container hero-content-container">
        <div className="hero-content">
          <h1 className="hero-heading">{HERO_CONTENT.heading}</h1>
          <p className="hero-paragraph">
            {HERO_CONTENT.paragraphLines.map((line, idx) => (
              <span key={idx} className="hero-paragraph-line">
                {line}
                {idx < HERO_CONTENT.paragraphLines.length - 1 && (
                  <br className="hero-desktop-break" />
                )}
              </span>
            ))}
          </p>
          <div className="hero-link-wrapper">
            <a href={HERO_CONTENT.linkHref} className="hero-action-link">
              <span className="hero-link-click">{HERO_CONTENT.linkPrefix}</span>
              <span className="hero-link-rest">{HERO_CONTENT.linkSuffix}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
