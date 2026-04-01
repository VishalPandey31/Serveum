import './Navbar.css';

const NAV_LINKS = ['Home', 'About', 'Services', 'Testimonials', 'Contact'];

export default function Navbar() {
  return (
    <header className="navbar" id="home">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-leaf" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M6 22C6 22 8 10 22 6C22 6 20 18 6 22Z" fill="#6C4FF6"/>
              <path d="M6 22C6 22 12 16 14 6" stroke="#6C4FF6" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="navbar__logo-text">Serveum</span>
        </a>

        {/* Nav Links */}
        <nav className="navbar__links" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="navbar__link"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className="navbar__cta" id="navbar-cta">
          Get Started
        </a>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          aria-label="Toggle mobile menu"
          onClick={() => {
            const nav = document.querySelector('.navbar__links');
            nav.classList.toggle('navbar__links--open');
          }}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
