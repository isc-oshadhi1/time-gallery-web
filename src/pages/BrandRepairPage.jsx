import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BrandCard from '../components/BrandCard';
import rolexData from '../data/brands/rolex';
import './BrandRepairPage.css';

/**
 * BrandRepairPage – Reusable template for brand-specific repair pages.
 * @param {Object} props
 * @param {Object} [props.brand=rolexData] - Brand content data object
 */
export default function BrandRepairPage({ brand = rolexData }) {
  const { pageTitle, banner, cards, blockA, blockB } = brand;

  useEffect(() => {
    document.title = pageTitle || 'Rolex Watch Repair | Thetimegallery';
    return () => {
      document.title = 'Home | Thetimegallery';
    };
  }, [pageTitle]);

  return (
    <main className="brand-page-main">
      {/* =========================================================
          BANNER: 1100x242, top 168px from page top (12px below nav)
          Left: 458x242 black video
          Right: 642x242 image with red <h1> overlay
          ========================================================= */}
      <section className="brand-banner-section" aria-label={`${brand.brandName || 'Brand'} repair banner`}>
        <div className="brand-banner-container">
          {/* Left video: 458x242, black background */}
          <div className="brand-banner-video-wrapper">
            <video
              src={banner.videoSrc}
              className="brand-banner-video"
              autoPlay
              muted
              loop
              playsInline
              controls
              controlsList="nodownload"
              preload="metadata"
              aria-label="Brand repair video"
            />
          </div>

          {/* Right image: 642x242 with <h1> overlay */}
          <div className="brand-banner-image-wrapper">
            <img
              src={banner.imageSrc}
              alt={banner.heading}
              className="brand-banner-image"
              width="642"
              height="242"
            />
            <h1 className="brand-banner-title">{banner.heading}</h1>
          </div>
        </div>
      </section>

      {/* =========================================================
          BODY: Two columns starting 54px below banner
          Left: x=55 from banner left, width 458 (8 cards stack)
          Right: x=526 from banner left, width 520 (Block A & Block B)
          ========================================================= */}
      <div className="brand-body-container">
        {/* Left column: 8 BrandCards */}
        <section className="brand-left-column" aria-label="Brand Services and Offerings">
          {cards.map((card) => (
            <BrandCard key={card.id} card={card} />
          ))}
        </section>

        {/* Right column: Block A & Block B */}
        <aside className="brand-right-column" aria-label="Brand Repair Information and Inquiries">
          {/* BLOCK A */}
          <div className="brand-block-a">
            {/* Heading: 3 lines, wraps at ...Services.  All / ...rest assured / ...Beaten */}
            <h2 className="brand-block-a__heading">
              The Time Gallery Experts in Rolex Repairs and Services.&nbsp; All
              <br />
              Our Work Includes a 1 Year Guarantee So you can rest assured
              <br />
              your watch is in safe hands. Our Services Cannot Be Beaten.
            </h2>

            {/* Paragraph: 3 lines */}
            <p className="brand-block-a__paragraph">
              Whether your watch needs a complete repair, refurbishment or simply a replacement
              <br />
              glass or crown. The Time Gallery has the experience and expertise needed to bring your
              <br />
              watch back to its best.
            </p>

            {/* Why heading + bullet list */}
            <h3 className="brand-block-a__why-heading">{blockA.whyHeading}</h3>
            <ul className="brand-block-a__why-bullets">
              {blockA.whyBullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>

            {/* Models heading: 2 lines, ends ...the following / models:- */}
            <h3 className="brand-block-a__models-heading">
              We service and repair all Rolex models including the following
              <br />
              models:-
            </h3>

            {/* Models plain-text lines with literal '• ' */}
            {/* TODO: these are Breitling models, ask my lead whether to keep. */}
            <div className="brand-block-a__models-list">
              {blockA.modelsList.map((model, idx) => (
                <div key={idx} className="brand-block-a__model-item">
                  • {model}
                </div>
              ))}
            </div>

            {/* Frequent repairs heading + bullet list */}
            <h3 className="brand-block-a__repairs-heading">{blockA.repairsHeading}</h3>
            <ul className="brand-block-a__repairs-bullets">
              {blockA.repairsBullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>

          {/* BLOCK B */}
          <div className="brand-block-b">
            {/* Heading: 2 lines, line 1 ends "...you may have regarding" */}
            <h3 className="brand-block-b__heading">
              Please contact us regarding any repair query you may have regarding
              <br />
              your Rolex watch repair.
            </h3>

            {/* Paragraph: 2 lines, line 1 ends "...We endeavor" */}
            <p className="brand-block-b__paragraph">
              Please fill out the form below and be pleasantly surprised by our fair costs. We endeavor
              <br />
              to reply within 24 hours.
            </p>

            {/* Action button */}
            <div className="brand-block-b__button-wrapper">
              <Link to={blockB.buttonLink} className="brand-block-b__button">
                {blockB.buttonText}
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
