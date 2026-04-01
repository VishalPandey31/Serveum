import './Footer.css';

const FOOTER_COLS = [
  {
    heading: 'Company',
    links: ['About Us', 'Our Team', 'Careers', 'Blog', 'Press'],
  },
  {
    heading: 'Follow Us',
    links: ['Twitter / X', 'LinkedIn', 'Instagram', 'YouTube', 'GitHub'],
  },
  {
    heading: 'Product',
    links: ['Features', 'Pricing', 'Case Studies', 'Changelog', 'Roadmap'],
  },
  {
    heading: 'Other Info',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Support', 'Contact'],
  },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <path d="M6 22C6 22 8 10 22 6C22 6 20 18 6 22Z" fill="#6C4FF6"/>
                <path d="M6 22C6 22 12 16 14 6" stroke="#6C4FF6" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="footer__logo-text">Serveum</span>
            </a>
            <p className="footer__tagline">
              Changing the status quo —<br />
              one partnership at a time.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div className="footer__col" key={col.heading}>
              <h3 className="footer__col-heading">{col.heading}</h3>
              <ul className="footer__col-links">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__col-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Serveum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
