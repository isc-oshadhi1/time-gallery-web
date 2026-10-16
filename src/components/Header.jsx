import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MediaPlaceholder from './MediaPlaceholder';
import logoImg from '../assets/images/logo.webp';
import './Header.css';

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40" aria-hidden="true">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#ffffff" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="40" height="40" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

const DROPDOWN_ITEMS = [
  { label: 'Rolex Watch Repair', href: '/rolex-watch-repair' },
  { label: 'Cartier Watch Repair', href: '/cartier-watch-repair' },
  { label: 'IWC Schaffhausen Watch Repair', href: '/iwc-schaffhausen-watch-repair' },
  { label: 'Hublot Watch Repair', href: '/hublot-watch-repair' },
  { label: 'Audemars Piguet Watch Repair', href: '/audemars-piguet-watch-repair' },
  { label: 'Chopard Watch Repair', href: '/chopard-watch-repair' },
  { label: 'Dior Watch Repair', href: '/dior-watch-repair' },
  { label: 'TAG Heuer Repair', href: '/tag-heuer-repair' },
  { label: 'Omega Watch Repair', href: '/omega-watch-repair' },
  { label: 'Longines Watch Repair', href: '/longines-watch-repair' },
  { label: 'Rado Watch Repair', href: '/rado-watch-repair' },
  { label: 'Tissot Watch Repair', href: '/tissot-watch-repair' },
];

const NAV_ITEMS = [
  { label: 'Home', href: '/', end: true },
  { label: 'About', href: '/about' },
  { label: 'Watch Repairs & Servicing', href: '/watch-repairs-servicing' },
  {
    label: 'Search By Brand',
    href: '#brand-search',
    hasDropdown: true,
    subItems: DROPDOWN_ITEMS,
  },
  { label: 'Career', href: '/career' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Logo Section */}
        <div className="header-logo-area">
          <Link to="/" aria-label="The Time Gallery Home">
            <MediaPlaceholder
              type="image"
              src={logoImg}
              alt="The Time Gallery W.L.L"
              label="THE TIME GALLERY W.L.L"
              className="logo-placeholder"
              width="290"
              height="94"
              style={{ width: '290px', height: '94px' }}
            />
          </Link>
        </div>

        {/* Right Section: Socials + Navigation */}
        <div className="header-right-area">
          {/* Social Icons Top Bar */}
          <div className="header-social-bar">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Navigation Bar with folded ribbon effect */}
          <nav className="header-nav-wrapper" aria-label="Main Navigation">
            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>

            {/* Desktop & Collapsible Navigation */}
            <div className={`nav-ribbon ${mobileMenuOpen ? 'is-open' : ''}`}>
              {/* Folded ribbon triangles */}
              <div className="ribbon-fold fold-left" aria-hidden="true" />
              <div className="ribbon-fold fold-right" aria-hidden="true" />

              <ul className="nav-list">
                {NAV_ITEMS.map((item) => {
                  if (item.hasDropdown) {
                    return (
                      <li
                        key={item.label}
                        className={`nav-item has-dropdown ${dropdownOpen ? 'dropdown-active' : ''}`}
                        ref={dropdownRef}
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                        onFocus={() => setDropdownOpen(true)}
                        onBlur={(e) => {
                          if (!dropdownRef.current?.contains(e.relatedTarget)) {
                            setDropdownOpen(false);
                          }
                        }}
                      >
                        <button
                          type="button"
                          className="nav-link dropdown-toggle"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          aria-expanded={dropdownOpen}
                          aria-haspopup="true"
                        >
                          <span className="nav-text">{item.label}</span>
                        </button>
                        <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} role="menu">
                          {item.subItems.map((sub) => (
                            <li key={sub.label} role="none">
                              <Link
                                to={sub.href}
                                className="dropdown-link"
                                role="menuitem"
                                onClick={() => {
                                  setDropdownOpen(false);
                                  setMobileMenuOpen(false);
                                }}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }

                  return (
                    <li key={item.label} className="nav-item">
                      <NavLink
                        to={item.href}
                        end={item.end || false}
                        className={({ isActive }) =>
                          `nav-link ${isActive ? 'active' : ''}`
                        }
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="nav-text">{item.label}</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
