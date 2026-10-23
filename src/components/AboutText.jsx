import './AboutText.css';

// Text content constants 
const HEADING = 'About us';

const PARA_1 =
  'The Time Gallery is a professional watch repair business who pride themselves on providing an excellent service.  You can be sure that your watch is in safe hands. As well as being watch repair experts we also provide the highest quality work with the utmost care. Whether your watch is in for a Rolex service or just a replacement strap for your Rolex, The Time Gallery are here to help.';

const PARA_2 = 'Please see our independent reviews for your peace of mind.';


const PARA_3 =
  'We repair all brands of quality watches, including Rolex, Hublot, Audemars Piguet, Chopard, Dior, Tag Heuer, Omega, Rotary, Seiko, Citizen, Gucci repair, and Panerai repair to name a few.';

const PARA_4 = 'Our Current Turnaround:';

const TURNAROUND_LINES = [
  '-Return full services and watch repairs back to the customer within 10 working days.',
  '-Return minor work including battery replacements and replacement glasses etc within 2 working days.',
  'To use our global watch repair postal service simply complete our online watch repair inquiry form and we will respond with a quotation for the repair and instructions for sending us your watch.',
];

export default function AboutText() {
  return (
    <section className="about-text" aria-label="About The Time Gallery">
      <div className="about-text-container">
        <h1 className="about-heading">{HEADING}</h1>

        <p className="about-body">{PARA_1}</p>

        <p className="about-body about-body--large">{PARA_2}</p>

        {/* TODO: Ask lead whether to correct "We are repair" → "We repair" */}
        <p className="about-body">{PARA_3}</p>

        <p className="about-body about-body--large">{PARA_4}</p>

        <div className="about-turnaround">
          {TURNAROUND_LINES.map((line, i) => (
            <p key={i} className="about-body about-turnaround-line">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
