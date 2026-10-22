import MediaPlaceholder from './MediaPlaceholder';
import { getBrandImage } from '../utils/brandImages';
import './BrandCard.css';

/**
 * BrandCard – renders an individual brand service offering card.
 * @param {Object} props
 * @param {Object} props.card - Card data object
 * @param {string} [props.brandSlug] - Brand slug for resolving dynamic images
 */
export default function BrandCard({ card, brandSlug }) {
  const {
    id,
    title,
    image,
    baseName,
    alt,
    minHeight = 236,
    gapBottom = 24,
    photoTop = 37,
    titleLineHeight,
    description,
  } = card;

  const resolvedImage =
    image || (brandSlug && baseName ? getBrandImage(brandSlug, baseName) : null);

  return (
    <article
      className="brand-card"
      id={id}
      style={{
        '--card-min-height': `${minHeight}px`,
        '--card-gap-bottom': `${gapBottom}px`,
        '--photo-top': `${photoTop}px`,
        ...(titleLineHeight ? { '--card-title-line-height': `${titleLineHeight}px` } : {}),
      }}
    >
      {/* Photo frame: near-white 174x163 frame with 144x144 photo */}
      <div className="brand-card__photo-frame">
        {resolvedImage ? (
          <img
            src={resolvedImage}
            alt={alt || title}
            className="brand-card__photo"
            width="144"
            height="144"
            loading="lazy"
          />
        ) : (
          <MediaPlaceholder
            type="image"
            label={title}
            alt={alt || title}
            className="brand-card__photo-placeholder"
            style={{ width: '144px', height: '144px' }}
          />
        )}
      </div>

      {/* Text column: left 202px, width 242px */}
      <div className="brand-card__text-column">
        <h2 className="brand-card__title">{title}</h2>
        <p className="brand-card__description">{description}</p>
      </div>
    </article>
  );
}
