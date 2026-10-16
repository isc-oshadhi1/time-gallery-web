import './MediaPlaceholder.css';

/**
 * MediaPlaceholder Component
 * @param {Object} props
 * @param {'image' | 'video'} [props.type='image'] - The type of media
 * @param {string} props.label - Descriptive label shown when src is absent
 * @param {string} [props.aspectRatio] - CSS aspect-ratio value (e.g. "16 / 9", "4 / 3")
 * @param {string} [props.src] - Media source URL if available
 * @param {string} [props.alt] - Alt text for images
 * @param {string} [props.className] - Additional CSS class names
 * @param {Object} [props.style] - Additional inline styles
 */
export default function MediaPlaceholder({
  type = 'image',
  label = 'Media Placeholder',
  aspectRatio,
  src,
  alt = '',
  className = '',
  style = {},
  ...rest
}) {
  const combinedStyle = {
    ...(aspectRatio ? { aspectRatio } : {}),
    ...style,
  };

  if (src) {
    if (type === 'video') {
      return (
        <video
          src={src}
          className={`media-placeholder-element ${className}`}
          style={combinedStyle}
          muted
          loop
          playsInline
          autoPlay
          aria-label={label || alt}
          {...rest}
        />
      );
    }
    return (
      <img
        src={src}
        alt={alt || label}
        className={`media-placeholder-element ${className}`}
        style={combinedStyle}
        {...rest}
      />
    );
  }

  return (
    <div
      className={`media-placeholder-box ${type === 'video' ? 'is-video' : 'is-image'} ${className}`}
      style={combinedStyle}
      role="img"
      aria-label={label}
      {...rest}
    >
      <div className="media-placeholder-content">
        {type === 'video' ? (
          <svg
            className="media-placeholder-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
        ) : (
          <svg
            className="media-placeholder-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        )}
        <span className="media-placeholder-label">{label}</span>
      </div>
    </div>
  );
}
