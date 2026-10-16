import whatsappImg from '../assets/images/whatsapp.png';
import './FloatingButtons.css';

const FLOATING_BUTTONS_DATA = {
  chatButtonLabel: "Let's Chat!",
  whatsappLink: 'https://api.whatsapp.com/send?phone=97450027255',
  whatsappAriaLabel: 'Chat on WhatsApp',
};

export default function FloatingButtons() {
  return (
    <div className="floating-elements-container" aria-label="Quick contact shortcuts">
      <div className="floating-chat-wrapper">
        <button
          type="button"
          className="floating-chat-btn"
          aria-label={FLOATING_BUTTONS_DATA.chatButtonLabel}
          onClick={() => {}}
        >
          <svg
            className="chat-bubble-icon"
            viewBox="0 0 32 32"
            width="28"
            height="28"
            aria-hidden="true"
          >
            <path
              d="M16 4C22.63 4 28 8.92 28 15c0 2.82-1.15 5.4-3.09 7.37.28 1.9.88 3.8 1.74 5.12.17.26-.04.61-.35.53-2.47-.62-4.67-1.72-6.16-2.63-1.31.39-2.7.61-4.14.61-6.63 0-12-4.92-12-11S9.37 4 16 4z"
              fill="#ffffff"
            />
            <circle cx="11" cy="15" r="1.6" fill="#7d30a6" />
            <circle cx="16" cy="15" r="1.6" fill="#7d30a6" />
            <circle cx="21" cy="15" r="1.6" fill="#7d30a6" />
          </svg>
          <span className="chat-btn-text">{FLOATING_BUTTONS_DATA.chatButtonLabel}</span>
        </button>
      </div>

      <div className="floating-whatsapp-wrapper">
        <a
          href={FLOATING_BUTTONS_DATA.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-btn"
          aria-label={FLOATING_BUTTONS_DATA.whatsappAriaLabel}
        >
          <img
            src={whatsappImg}
            alt="Chat on WhatsApp"
            width="52"
            height="52"
            className="whatsapp-img"
          />
        </a>
      </div>
    </div>
  );
}
