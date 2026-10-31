import { useEffect } from 'react';
import MediaPlaceholder from '../components/MediaPlaceholder';
import CareerForm from '../components/CareerForm';
import bannerImg from '../assets/images/career/banner.jpg';
import './Career.css';

// Text constants at the top
const HEADING_1 = 'Career with us';
const HEADING_2_TITLE = 'A career with us!';
// TODO: Original copy says "wok" instead of "work" – keeping typo verbatim.
const PARA_TEXT =
  'The ultimate place to enjoy your wok, where we provide you a friendly work environment and the best infrastructure.';
const SUBHEADING_LINE_1 = 'Kindly fill the below form.';
const SUBHEADING_LINE_2 =
  "If you are the right fit for the job, We'll get back to you, meanwhile keep visiting our website.";
const WORK_WITH_US_HEADING = 'Work with Us';

export default function Career() {
  useEffect(() => {
    document.title = 'Career | Thetimegallery';
    return () => {
      document.title = 'Home | Thetimegallery';
    };
  }, []);

  return (
    <main className="career-page-main">
      {/* 1. Top left Heading: Career with us */}
      <h1 className="career-top-heading">{HEADING_1}</h1>

      {/* 2. Banner: 600 x 228, centered, top at 217px */}
      <div className="career-banner-container">
        {bannerImg ? (
          <img
            src={bannerImg}
            alt="Join Our Team"
            className="career-banner-image"
            width={600}
            height={228}
          />
        ) : (
          <MediaPlaceholder
            type="image"
            label="Join Our Team"
            className="career-banner-image"
            width="600"
            height="228"
          />
        )}
      </div>

      {/* Content Section below banner */}
      <section className="career-content-section" aria-label="Career Information">
        {/* 3. A career with us! (Oswald 700, red, centered) */}
        <h2 className="career-hero-heading">{HEADING_2_TITLE}</h2>

        {/* 4. Paragraph (Arial bold 15px, centered) */}
        <p className="career-hero-paragraph">{PARA_TEXT}</p>

        {/* 5. Two lines inside one h2 */}
        <h2 className="career-subheading-block">
          <span className="career-subheading-line1">{SUBHEADING_LINE_1}</span>
          <span className="career-subheading-line2">{SUBHEADING_LINE_2}</span>
        </h2>

        {/* 6 & 7. Form section starting with 'Work with Us' */}
        <div className="career-form-section">
          <h3 className="career-work-heading">{WORK_WITH_US_HEADING}</h3>
          <CareerForm />
        </div>
      </section>
    </main>
  );
}

