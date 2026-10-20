import MediaPlaceholder from './MediaPlaceholder';
import clockDialImg from '../assets/icons/services/download.png';
import './ServiceBlock.css';

/**
 * Icon mapping – maps the icon key from services data to the expected
 * SVG filename in src/assets/icons/services/.
 *
 * Specific matches:
 * - repairs: screwdriver (58x98)
 * - refurbishment: gear (70x77)
 * - glass: glass circles (73x79)
 * - service: pliers (35x92)
 * - battery: battery (52x90)
 * - crown: small angled screwdriver (30x44)
 * - strap: watch (52x110)
 */
const iconModules = import.meta.glob(
  '../assets/icons/services/*.svg',
  { eager: true, query: '?url', import: 'default' }
);

const ICON_FILE_MAP = {
  repairs: ['vector3.svg', 'wrench.svg'],
  refurbishment: ['vector2.svg', 'gear.svg'],
  glass: ['vector.svg', 'watch.svg'],
  service: ['vector8.svg', 'pliers.svg'],
  battery: ['vector6.svg', 'battery.svg'],
  crown: ['vector5.svg', 'crown-tool.svg'],
  strap: ['vector7.svg', 'strap.svg'],
};

function resolveIcon(key) {
  const candidates = ICON_FILE_MAP[key] || [];
  for (const filename of candidates) {
    for (const [globKey, resolvedUrl] of Object.entries(iconModules)) {
      if (globKey.endsWith(`/${filename}`)) {
        return resolvedUrl;
      }
    }
  }
  return null;
}

/**
 * ServiceBlock – renders a single service card matching target specs.
 * @param {Object} props
 * @param {Object} props.service - A service object from services.js
 */
export default function ServiceBlock({ service }) {
  const {
    id,
    title,
    titleLink,
    icon,
    caption,
    paragraphs,
    includedLine,
    bullets,
  } = service;

  const iconSrc = resolveIcon(icon);

  const titleContent = titleLink ? (
    <a
      href={titleLink}
      target="_blank"
      rel="noopener noreferrer"
      className="service-block__title-link"
    >
      {title}
    </a>
  ) : (
    title
  );

  return (
    <article className="service-block" id={id}>
      <h2 className="service-block__title">{titleContent}</h2>

      <div className="service-block__icon-area">
        <div className="service-block__icon-group">
          <div className="service-block__clock-wrapper">
            <img
              src={clockDialImg}
              alt=""
              className="service-block__clock-dial"
              width="86"
              height="86"
            />
          </div>
          {iconSrc ? (
            <img
              src={iconSrc}
              alt=""
              className="service-block__tool-icon"
            />
          ) : (
            <MediaPlaceholder
              type="image"
              label={title}
              className="service-block__icon-placeholder"
            />
          )}
        </div>
      </div>

      <div className="service-block__content">
        {caption && (
          <p className="service-block__caption">{caption}</p>
        )}

        {paragraphs.map((text, i) => (
          <p key={i} className="service-block__text" style={{ whiteSpace: 'pre-wrap' }}>
            {text}
          </p>
        ))}

        {includedLine && (
          <p className="service-block__included-line">{includedLine}</p>
        )}

        {bullets && bullets.length > 0 && (
          <ul className="service-block__bullets">
            {bullets.map((b, i) => {
              const isPurpleBullet = b === 'All Brands Can Be Repaired';
              return (
                <li
                  key={i}
                  className={isPurpleBullet ? 'service-block__bullet--purple' : ''}
                >
                  {b}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </article>
  );
}
