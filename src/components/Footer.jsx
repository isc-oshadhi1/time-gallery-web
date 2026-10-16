import { Link } from 'react-router-dom';
import './Footer.css';

// Constants at the top of the component
const FOOTER_DATA = {
  copyrightTitle: 'Copyright © 2022 by Thetimegallery W.L.L',
  copyrightSubtitle: 'All rights reserved.',
  locationHeading: 'Shop location : The Time Gallery',
  branches: [
    {
      id: 'branch-1',
      name: 'Branch 1:',
      address: 'Royal plaza, ground floor, Al sadd, Doha Qatar',
    },
    {
      id: 'branch-2',
      name: 'Branch 2:',
      address: 'Shop no G5, Al Markiya street, Tawar Mall, Doha Qatar',
    },
  ],
  contactHeading: 'Contact:',
  phones: [
    { label: '+974 55278455', href: 'tel:+97455278455' },
    { label: '+974 50027255', href: 'tel:+97450027255' },
    { label: '+974 44427255', href: 'tel:+97444427255' },
  ],
  emails: [
    { label: 'ceo@thetimegallery.qa', href: 'mailto:ceo@thetimegallery.qa' },
    { label: 'repairs@thetimegallery.qa', href: 'mailto:repairs@thetimegallery.qa' },
  ],
  navigationHeading: 'Navigation:',
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about' },
    { label: 'Watch repair & Servicing', href: '/watch-repairs-servicing' },
    { label: 'Career', href: '/career' },
    { label: 'Contact us', href: '/contact' },
  ],
  attribution: {
    prefix: 'Designed & Developed by ',
    company: 'iTeq Solution Center',
    href: 'https://iteq.qa',
  },
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Copyright & Shop Location */}
          <div className="footer-col col-info">
            <div className="copyright-block">
              <p className="footer-line copyright-text">{FOOTER_DATA.copyrightTitle}</p>
              <p className="footer-line copyright-text">{FOOTER_DATA.copyrightSubtitle}</p>
            </div>

            <div className="location-block">
              <h4 className="footer-subheading">
                <span className="location-heading-main">Shop location :</span>{' '}
                <span className="location-heading-sub">The Time Gallery</span>
              </h4>
              <ul className="footer-list">
                {FOOTER_DATA.branches.map((branch) => (
                  <li key={branch.id} className="footer-list-item branch-item">
                    <span className="branch-name">{branch.name}</span>
                    <span className="branch-address">{branch.address}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="footer-col col-contact">
            <h3 className="footer-heading">{FOOTER_DATA.contactHeading}</h3>
            <div className="footer-header-line" aria-hidden="true" />

            <div className="contact-section">
              <p className="contact-group-title">Phone :</p>
              <ul className="footer-nested-list">
                {FOOTER_DATA.phones.map((phone) => (
                  <li key={phone.label}>
                    <a href={phone.href} className="footer-link">
                      {phone.label}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="contact-group-title email-title">Email :</p>
              <ul className="footer-nested-list">
                {FOOTER_DATA.emails.map((email) => (
                  <li key={email.label}>
                    <a href={email.href} className="footer-link">
                      {email.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div className="footer-col col-nav">
            <h3 className="footer-heading">{FOOTER_DATA.navigationHeading}</h3>
            <div className="footer-header-line" aria-hidden="true" />

            <ul className="footer-list nav-bullets">
              {FOOTER_DATA.navLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Attribution */}
        {/* TODO: confirm with lead whether to keep this attribution line */}
        <div className="footer-bottom-attribution">
          <p className="attribution-text">
            {FOOTER_DATA.attribution.prefix}
            <a
              href={FOOTER_DATA.attribution.href}
              target="_blank"
              rel="noopener noreferrer"
              className="attribution-link"
            >
              {FOOTER_DATA.attribution.company}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
