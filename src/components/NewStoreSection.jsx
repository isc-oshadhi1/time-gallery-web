import MediaPlaceholder from './MediaPlaceholder';
import './NewStoreSection.css';

// Constants
const STORE_SECTION_DATA = {
  line1: 'CHECKOUT',
  line2: 'OUR',
  line3: 'NEW STORE',
  textFillMediaLabel: 'Checkout Text Fill Media (Watch Movement Texture)',
  videoMediaLabel: 'New Store Video (Showroom & Luxury Watches)',
};

export default function NewStoreSection() {
  return (
    <section className="new-store-section" aria-label="Checkout Our New Store">
      <div className="container">
        <div className="new-store-grid">
          {/* Left Column: Masked Text with background-clip: text */}
          <div className="store-text-col">
            <h2 className="store-clipped-heading" aria-label="Checkout Our New Store">
              <span className="clipped-line">{STORE_SECTION_DATA.line1}</span>
              <span className="clipped-line">{STORE_SECTION_DATA.line2}</span>
              <span className="clipped-line">{STORE_SECTION_DATA.line3}</span>
            </h2>
            {/* Hidden accessibility label for screen readers */}
            <span className="sr-only">
              {STORE_SECTION_DATA.line1} {STORE_SECTION_DATA.line2} {STORE_SECTION_DATA.line3}
            </span>
          </div>

          {/* Right Column: Video with 160px bottom-right radius */}
          <div className="store-video-col">
            <div className="store-video-wrapper">
              <MediaPlaceholder
                type="video"
                src="/videos/new-store.mp4"
                label={STORE_SECTION_DATA.videoMediaLabel}
                className="store-video-placeholder"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
