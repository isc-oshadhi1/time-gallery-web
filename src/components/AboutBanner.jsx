import MediaPlaceholder from './MediaPlaceholder';
import './AboutBanner.css';

const BANNER_SRC = '/videos/about-banner.mp4';
const BANNER_LABEL = 'Watch gears animation';

export default function AboutBanner() {
  return (
    <section className="about-banner" aria-label="About page banner">
      <div className="about-banner-inner">
        <MediaPlaceholder
          type="video"
          src={BANNER_SRC}
          label={BANNER_LABEL}
          aria-label="Watch gears animation"
          autoPlay
          muted
          loop
          playsInline
          controls
          controlsList="nodownload"
          preload="metadata"
          className="about-banner-media"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
    </section>
  );
}
