import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BrandCard from '../components/BrandCard';
import MediaPlaceholder from '../components/MediaPlaceholder';
import rolexData from '../data/brands/rolex';
import './BrandRepairPage.css';

/**
 * BrandRepairPage – Reusable template for brand-specific repair pages.
 * Fully data-driven layout with fallback defaults matching Rolex specifications.
 *
 * @param {Object} props
 * @param {Object} [props.brand=rolexData] - Brand content and layout data object
 */
export default function BrandRepairPage({ brand = rolexData }) {
  const {
    slug = 'rolex',
    pageTitle,
    banner = {},
    cards = [],
    blockA = {},
    blockB = {},
    layout = {},
  } = brand;

  useEffect(() => {
    document.title = pageTitle || `${brand.brandName || 'Brand'} Watch Repair | Thetimegallery`;
    return () => {
      document.title = 'Home | Thetimegallery';
    };
  }, [pageTitle, brand.brandName]);

  // Layout configuration with exact Rolex defaults
  const layoutConfig = {
    bannerWidth: layout.bannerWidth ?? 1100,
    bannerHeight: layout.bannerHeight ?? 242,
    bannerVideoWidth: layout.bannerVideoWidth ?? 458,
    bannerOffsetCenter: layout.bannerOffsetCenter ?? 4,
    bannerTitle: layout.bannerTitle !== undefined ? layout.bannerTitle : banner.heading,
    bannerTitleFontFamily: layout.bannerTitleFontFamily ?? 'Arial, Helvetica, sans-serif',
    bannerTitleColor: layout.bannerTitleColor ?? '#e0101a',
    bannerTitleLineHeight: layout.bannerTitleLineHeight ?? 20,
    bannerTitleLeft: layout.bannerTitleLeft ?? 24,
    bannerTitleBottom: layout.bannerTitleBottom ?? 21,
    bannerTitleFontSize: layout.bannerTitleFontSize ?? 19.35,
    bannerTitleFontWeight: layout.bannerTitleFontWeight ?? 700,
    bannerTitleLetterSpacing: layout.bannerTitleLetterSpacing ?? '-0.04em',
    bannerTitleShadow: layout.bannerTitleShadow ?? '2px 2px 3px rgba(0, 0, 0, 0.35)',
    bannerPaddingTop: layout.bannerPaddingTop ?? 5,
    gapBannerToCard1: layout.gapBannerToCard1 ?? 54,
    bodyContainerWidth: layout.bodyContainerWidth ?? 1100,
    bodyPaddingLeft: layout.bodyPaddingLeft ?? 55,
    bodyPaddingRight: layout.bodyPaddingRight ?? 54,
    bodyOffsetCenter: layout.bodyOffsetCenter ?? 4,
    gapLastCardToFooter: layout.gapLastCardToFooter ?? 20,
    blockAHeadingTopOffset: layout.blockAHeadingTopOffset ?? 10,
    blockAHeadingPaddingTop: layout.blockAHeadingPaddingTop ?? 3.5,
    gapParaToWhyMarginTop: layout.gapParaToWhyMarginTop ?? 46.2,
    gapWhyToModelsMarginTop: layout.gapWhyToModelsMarginTop ?? 49.2,
    modelsLine1Width: layout.modelsLine1Width ?? 443,
    modelsLineHeight: layout.modelsLineHeight ?? 26,
    modelsListMarginTop: layout.modelsListMarginTop ?? 1.25,
    gapEmergencyToRepairsMarginTop: layout.gapEmergencyToRepairsMarginTop ?? 53.25,
    repairsHeadingWidth: layout.repairsHeadingWidth ?? 332,
    blockBMarginTop: layout.blockBMarginTop ?? 123.2,
    blockBOffsetLeft: layout.blockBOffsetLeft ?? 0,
    buttonWrapperMarginTop: layout.buttonWrapperMarginTop ?? 11.2,
    buttonOffsetLeft: layout.buttonOffsetLeft ?? 0,
  };

  const bannerImageWidth = layoutConfig.bannerWidth - layoutConfig.bannerVideoWidth;

  return (
    <main className="brand-page-main">
      {/* =========================================================
          BANNER: Parameterized per brand, top 168px from page top
          Left: video, object-fit contain, black background
          Right: brand image, object-fit cover, optional h1 title overlay
          ========================================================= */}
      <section
        className="brand-banner-section"
        style={{
          '--banner-padding-top': `${layoutConfig.bannerPaddingTop}px`,
          '--banner-offset-x': `${layoutConfig.bannerOffsetCenter}px`,
        }}
        aria-label={`${brand.brandName || 'Brand'} repair banner`}
      >
        <div
          className="brand-banner-container"
          style={{
            '--banner-width': `${layoutConfig.bannerWidth}px`,
            '--banner-height': `${layoutConfig.bannerHeight}px`,
            '--banner-video-width': `${layoutConfig.bannerVideoWidth}px`,
          }}
        >
          {/* Left video */}
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
              aria-label={`${brand.brandName || 'Brand'} repair video`}
            />
          </div>

          {/* Right image with title overlay or visually hidden h1 */}
          <div className="brand-banner-image-wrapper">
            {banner.imageSrc ? (
              <img
                src={banner.imageSrc}
                alt={banner.heading || pageTitle}
                className="brand-banner-image"
                width={bannerImageWidth}
                height={layoutConfig.bannerHeight}
              />
            ) : (
              <MediaPlaceholder
                type="image"
                label={banner.heading || 'Brand banner'}
                className="brand-banner-image"
              />
            )}

            {layoutConfig.bannerTitle ? (
              <h1
                className="brand-banner-title"
                style={{
                  '--banner-title-left': `${layoutConfig.bannerTitleLeft}px`,
                  '--banner-title-bottom': `${layoutConfig.bannerTitleBottom}px`,
                  '--banner-title-font-family': layoutConfig.bannerTitleFontFamily,
                  '--banner-title-font-size': `${layoutConfig.bannerTitleFontSize}px`,
                  '--banner-title-font-weight': layoutConfig.bannerTitleFontWeight,
                  '--banner-title-color': layoutConfig.bannerTitleColor,
                  '--banner-title-line-height': `${layoutConfig.bannerTitleLineHeight}px`,
                  '--banner-title-letter-spacing': layoutConfig.bannerTitleLetterSpacing,
                  '--banner-title-shadow': layoutConfig.bannerTitleShadow,
                }}
              >
                {layoutConfig.bannerTitle}
              </h1>
            ) : (
              <h1 className="sr-only brand-banner-title--sr-only">
                {banner.heading || pageTitle}
              </h1>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          BODY: Two columns starting below banner
          Left: cards stack
          Right: Block A & Block B
          ========================================================= */}
      <div
        className="brand-body-container"
        style={{
          '--body-width': `${layoutConfig.bodyContainerWidth}px`,
          '--body-gap-top': `${layoutConfig.gapBannerToCard1}px`,
          '--body-padding-left': `${layoutConfig.bodyPaddingLeft}px`,
          '--body-padding-right': `${layoutConfig.bodyPaddingRight}px`,
          '--body-offset-x': `${layoutConfig.bodyOffsetCenter}px`,
          '--gap-last-card-to-footer': `${layoutConfig.gapLastCardToFooter}px`,
        }}
      >
        {/* Left column: 8 BrandCards */}
        <section className="brand-left-column" aria-label="Brand Services and Offerings">
          {cards.map((card) => (
            <BrandCard key={card.id} card={card} brandSlug={slug} />
          ))}
        </section>

        {/* Right column: Block A & Block B */}
        <aside
          className="brand-right-column"
          aria-label="Brand Repair Information and Inquiries"
          style={{
            '--heading-padding-top': `${layoutConfig.blockAHeadingPaddingTop}px`,
            '--gap-why-margin-top': `${layoutConfig.gapParaToWhyMarginTop}px`,
            '--gap-models-margin-top': `${layoutConfig.gapWhyToModelsMarginTop}px`,
            '--models-line1-width': `${layoutConfig.modelsLine1Width}px`,
            '--models-line-height': `${layoutConfig.modelsLineHeight}px`,
            '--models-list-margin-top': `${layoutConfig.modelsListMarginTop}px`,
            '--gap-repairs-margin-top': `${layoutConfig.gapEmergencyToRepairsMarginTop}px`,
            '--repairs-heading-width': `${layoutConfig.repairsHeadingWidth}px`,
            '--block-b-margin-top': `${layoutConfig.blockBMarginTop}px`,
            '--block-b-offset-x': `${layoutConfig.blockBOffsetLeft}px`,
            '--button-wrapper-margin-top': `${layoutConfig.buttonWrapperMarginTop}px`,
            '--button-offset-x': `${layoutConfig.buttonOffsetLeft}px`,
          }}
        >
          {/* BLOCK A */}
          <div className="brand-block-a">
            {/* Heading: 3 lines */}
            <h2 className="brand-block-a__heading">
              {slug === 'audemars-piguet' ? (
                <>
                  The Time Gallery Experts In Audemars Piguet Repairs and
                  <br />
                  Services.&nbsp; All Our Work Includes a 1 Year Guarantee So you can
                  <br />
                  rest assured your watch is in safe hands. Our Services Cannot
                  <br />
                  Be Beaten.
                </>
              ) : slug === 'hublot' ? (
                <>
                  The Time Gallery Experts in Hublot Repairs and Services.&nbsp; All
                  <br />
                  Our Work Includes a 1 Year Guarantee So you can rest assured
                  <br />
                  your watch is in safe hands. Our Services Cannot Be Beaten.
                </>
              ) : slug === 'chopard' ? (
                <>
                  The Time Gallery Experts In Chopard Repairs and Services.&nbsp; All
                  <br />
                  Our Work Includes a 1 Year Guarantee So you can rest assured
                  <br />
                  your watch is in safe hands. Our Services Cannot Be Beaten.
                </>
              ) : slug === 'iwc' ? (
                <>
                  The Time Gallery Experts in IWC Repairs and Services.&nbsp; All Our
                  <br />
                  Work Includes a 1 Year Guarantee So you can rest assured your
                  <br />
                  watch is in safe hands. Our Services Cannot Be Beaten.
                </>
              ) : slug === 'cartier' ? (
                <>
                  The Time Gallery Experts in Cartier Repairs and Services.&nbsp; All
                  <br />
                  Our Work Includes a 1 Year Guarantee So you can rest assured
                  <br />
                  your watch is in safe hands. Our Services Cannot Be Beaten.
                </>
              ) : (
                <>
                  The Time Gallery Experts in Rolex Repairs and Services.&nbsp; All
                  <br />
                  Our Work Includes a 1 Year Guarantee So you can rest assured
                  <br />
                  your watch is in safe hands. Our Services Cannot Be Beaten.
                </>
              )}
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
              {blockA.whyBullets?.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>

            {/* Models heading: 1 line on IWC, 2 lines on others */}
            <h3 className="brand-block-a__models-heading">
              {slug === 'audemars-piguet' ? (
                <>
                  We service and repair all Audemars Piguet models including the
                  <br />
                  following models:-
                </>
              ) : slug === 'hublot' ? (
                <>
                  We service and repair all Hublot models including the following
                  <br />
                  models:-
                </>
              ) : slug === 'chopard' ? (
                <>
                  We service and repair all Chopard models including the following
                  <br />
                  models:-
                </>
              ) : slug === 'iwc' ? (
                'We service and repair all IWC models including the following models:-'
              ) : slug === 'cartier' ? (
                <>
                  We service and repair all Cartier models including the following
                  <br />
                  models:-
                </>
              ) : (
                <>
                  We service and repair all Rolex models including the following
                  <br />
                  models:-
                </>
              )}
            </h3>

            {/* Models plain-text lines with literal '• ' */}
            {/* TODO: these are Breitling models, ask my lead. */}
            <div className="brand-block-a__models-list">
              {blockA.modelsList?.map((model, idx) => (
                <div key={idx} className="brand-block-a__model-item">
                  • {model}
                </div>
              ))}
            </div>

            {/* Frequent repairs heading + bullet list */}
            <h3 className="brand-block-a__repairs-heading">{blockA.repairsHeading}</h3>
            <ul className="brand-block-a__repairs-bullets">
              {blockA.repairsBullets?.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>

          {/* BLOCK B */}
          <div className="brand-block-b">
            {/* Heading: 2 lines */}
            <h3 className="brand-block-b__heading">
              {slug === 'audemars-piguet' ? (
                <>
                  Please contact us regarding any repair query you may have regarding
                  <br />
                  your Audemars Piguet watch repair.
                </>
              ) : slug === 'hublot' ? (
                <>
                  Please contact us regarding any repair query you may have regarding
                  <br />
                  your Hublot watch repair.
                </>
              ) : slug === 'chopard' ? (
                <>
                  {/* TODO: original site says "Audemars Piguet" instead of "Chopard" – copy error, preserving verbatim */}
                  Please contact us regarding any repair query you may have regarding
                  <br />
                  your Audemars Piguet watch repair.
                </>
              ) : slug === 'iwc' ? (
                <>
                  Please contact us regarding any repair query you may have regarding
                  <br />
                  your IWC watch repair.
                </>
              ) : slug === 'cartier' ? (
                <>
                  Please contact us regarding any repair query you may have regarding
                  <br />
                  your Cartier watch repair.
                </>
              ) : (
                <>
                  Please contact us regarding any repair query you may have regarding
                  <br />
                  your Rolex watch repair.
                </>
              )}
            </h3>

            {/* Paragraph: 2 lines */}
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
