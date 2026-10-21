import MediaPlaceholder from './MediaPlaceholder';
import './BrandCard.css';

/**
 * BrandCard – renders an individual brand service offering card.
 * @param {Object} props
 * @param {Object} props.card - Card data object
 * @param {string} props.card.id
 * @param {string} props.card.title
 * @param {string} [props.card.image]
 * @param {string} props.card.alt
 * @param {number} [props.card.minHeight]
 * @param {number} [props.card.gapBottom]
 * @param {number} [props.card.photoTop]
 * @param {string} props.card.description
 */
export default function BrandCard({ card }) {
  const {
    id,
    title,
    image,
    alt,
    minHeight = 236,
    gapBottom = 24,
    photoTop = 37,
    description,
  } = card;

  return (
    <article
      className="brand-card"
      id={id}
      style={{
        '--card-min-height': `${minHeight}px`,
        '--card-gap-bottom': `${gapBottom}px`,
        '--photo-top': `${photoTop}px`,
      }}
    >
      {/* Photo frame: near-white 174x163 frame with 144x144 photo */}
      <div className="brand-card__photo-frame">
        {image ? (
          <img
            src={image}
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
