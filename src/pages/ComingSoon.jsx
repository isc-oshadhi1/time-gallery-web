import { Link } from 'react-router-dom';
import './ComingSoon.css';

export default function ComingSoon() {
  return (
    <main className="coming-soon-main">
      <div className="container coming-soon-container">
        <h1 className="coming-soon-title">Page Coming Soon</h1>
        <p className="coming-soon-text">
          We are currently preparing this section. Please check back soon.
        </p>
        <Link to="/" className="coming-soon-link">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
