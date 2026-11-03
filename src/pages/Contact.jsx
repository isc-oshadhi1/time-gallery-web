import { useEffect, useState } from 'react';
import './Contact.css';

const INTRO =
  'We pride ourselves on providing a service based on quality and value for money. We repair both mechanical and battery operated watches to the highest of standards.';
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export default function Contact() {
  const [submission, setSubmission] = useState({ state: 'idle', message: '' });

  useEffect(() => {
    document.title = 'Contact | Thetimegallery';
    return () => {
      document.title = 'Home | Thetimegallery';
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!FORMSPREE_ENDPOINT) {
      setSubmission({
        state: 'error',
        message: 'The contact form is not connected yet. Please contact us by phone or email.',
      });
      return;
    }

    setSubmission({ state: 'sending', message: '' });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        const message = result?.errors?.map((error) => error.message).join(' ');
        throw new Error(message || 'We could not send your message. Please try again.');
      }

      form.reset();
      setSubmission({ state: 'success', message: 'Thank you. Your message has been sent.' });
    } catch (error) {
      setSubmission({
        state: 'error',
        message: error.message || 'We could not send your message. Please try again.',
      });
    }
  };

  return (
    <main className="contact-page-main">
      <section className="contact-hero" aria-label="Contact The Time Gallery">
        <video
          className="contact-hero__video"
          src="/videos/contact-banner.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="contact-hero__copy">
          <h1>Contact Us</h1>
          <p>{INTRO}</p>
        </div>
      </section>

      <section className="contact-content" aria-labelledby="contact-page-heading">
        <h2 id="contact-page-heading" className="contact-content__heading">
          Contact us
        </h2>

        <div className="contact-content__columns">
          <iframe
            className="contact-map"
            title="The Time Gallery location in Al Sadd, Doha"
            src="https://maps.google.com/maps?q=The%20Time%20Gallery%20W.L.L%20Al%20Sadd%2C%20Doha%2C%20Qatar&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="contact-form__title">Get in touch</h3>
            <p
              className={`contact-form__status contact-form__status--${submission.state}`}
              aria-live="polite"
              role={submission.state === 'error' ? 'alert' : 'status'}
            >
              {submission.message}
            </p>

            <input type="hidden" name="_subject" value="New contact inquiry from The Time Gallery website" />

            <div className="contact-form__field contact-form__field--first">
              <label htmlFor="contact-first-name">First Name</label>
              <input id="contact-first-name" name="firstName" placeholder="Enter First Name" />
            </div>

            <div className="contact-form__field contact-form__field--last">
              <label htmlFor="contact-last-name">Last Name</label>
              <input id="contact-last-name" name="lastName" placeholder="Enter Last Name" />
            </div>

            <div className="contact-form__field contact-form__field--email">
              <label htmlFor="contact-email">Email&nbsp; *</label>
              <input id="contact-email" name="email" type="email" placeholder="Enter Email" required />
            </div>

            <div className="contact-form__field contact-form__field--phone">
              <label htmlFor="contact-phone">Phone Number</label>
              <input id="contact-phone" name="phone" type="tel" placeholder="Enter Phone No" />
            </div>

            <div className="contact-form__field contact-form__field--message">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" placeholder="Write your Query here..." />
            </div>

            <button className="contact-form__submit" type="submit" disabled={submission.state === 'sending'}>
              {submission.state === 'sending' ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
