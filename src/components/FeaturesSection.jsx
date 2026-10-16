import wrenchIcon from '../assets/icons/wrench.svg';
import rosetteIcon from '../assets/icons/rosette.svg';
import clockIcon from '../assets/icons/clock.svg';
import './FeaturesSection.css';

// Constants
const FEATURES_DATA = [
  {
    id: 'expert-repairs',
    heading: 'Expert Watch Repairs',
    iconSrc: wrenchIcon,
    renderContent: () => (
      <p className="feature-text">
        The time gallery is not only experts in{' '}
        <a href="/watch-repairs-servicing" className="feature-inline-link">
          watch repairs
        </a>
        , but we also specialize in all watch services. We are a family run
        business with a Qatar reputation for excellence and value. Our
        Watchmakers know that the only thing better than owning a great watch
        is having your watch serviced by master technicians.
      </p>
    ),
  },
  {
    id: 'outstanding-service',
    heading: 'Outstanding Service',
    iconSrc: rosetteIcon,
    renderContent: () => (
      <p className="feature-text">
        You can rest assured your watch is in safe hands Here at The time
        gallery we are proud of the service we provide. Please see our
        testimonials page and our independent reviews for your peace of mind.
        Our customers rate us at 5/5 and we have 100% positive feedback.
      </p>
    ),
  },
  {
    id: 'guarantee',
    heading: '1-Year Guarantee',
    noLetterSpacing: true,
    iconSrc: clockIcon,
    renderContent: () => (
      <p className="feature-text">
        We are so confident in the services that we are proud to offer a
        1-year guarantee on all watch repairs and services from the completion
        date. Please see our terms and conditions page for more information. We
        pride ourselves on good service, from replacement watch straps to full
        watch repairs, it's what makes our work enjoyable.
      </p>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-section" aria-label="Why Choose The Time Gallery">
      <div className="container">
        <div className="features-grid">
          {FEATURES_DATA.map((col) => (
            <div key={col.id} className="feature-column">
              <div className="feature-icon-wrapper">
                <img
                  src={col.iconSrc}
                  alt=""
                  width="120"
                  height="120"
                  className="feature-icon-img"
                />
              </div>
              <h3 className={`feature-heading ${col.noLetterSpacing ? 'no-letter-spacing' : ''}`}>
                {col.heading}
              </h3>
              <div className="feature-divider" aria-hidden="true" />
              {col.renderContent()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
