import './FreeEstimateSection.css';

// Constants
const ESTIMATE_DATA = {
  heading: 'NO OBLIGATION FREE ESTIMATE',
  paragraph1Line1:
    'Contact us to get your free watch repair estimate or click to complete and submit an on-line watch repair request for an estimate.',
  paragraph1Prefix:
    ' We provide watch repairs and services on all the top brands including Rolex, Hublot, ',
  omegaLinkText: 'Omega',
  omegaHref: '/brands/omega',
  interText: ', ',
  tagHeuerLinkText: 'TAG Heuer',
  tagHeuerHref: '/brands/tag-heuer',
  paragraph1Suffix:
    ', Tissot, Raymond Weil, Rotary, Breitling, and more. No chargeable work will be undertaken without your consent. We always agree on a price before completing any watch repairs. You can rest assured that there will be no hidden charges. We are honest and transparent with our pricing and are proud of the prices we offer. We are certain you will be happy with the service that we offer.',
  paragraph2:
    'If you do not wish to proceed, watches will be returned free of charge.',
  buttonText: 'Free quote->',
  buttonHref: '/quote',
};

export default function FreeEstimateSection() {
  return (
    <section className="free-estimate-section" aria-label="Free Estimate">
      <div className="container">
        <div className="estimate-card">
          <h2 className="estimate-heading">{ESTIMATE_DATA.heading}</h2>

          <div className="estimate-content">
            <p className="estimate-paragraph estimate-paragraph-main">
              {ESTIMATE_DATA.paragraph1Line1}
              <br className="estimate-desktop-break" />
              {ESTIMATE_DATA.paragraph1Prefix}
              <a href={ESTIMATE_DATA.omegaHref} className="estimate-brand-link">
                {ESTIMATE_DATA.omegaLinkText}
              </a>
              {ESTIMATE_DATA.interText}
              <a href={ESTIMATE_DATA.tagHeuerHref} className="estimate-brand-link" style={{ whiteSpace: 'nowrap' }}>
                {ESTIMATE_DATA.tagHeuerLinkText}
              </a>
              {ESTIMATE_DATA.paragraph1Suffix}
            </p>

            <p className="estimate-paragraph paragraph-note">
              {ESTIMATE_DATA.paragraph2}
            </p>

            <div className="estimate-button-wrapper">
              <a href={ESTIMATE_DATA.buttonHref} className="estimate-btn">
                {ESTIMATE_DATA.buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
