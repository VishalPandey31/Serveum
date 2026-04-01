import './Hero.css';
import HeroCanvas from './HeroCanvas';

const AVATARS = [
  { size: 'lg', initials: 'AK', bg: '#e8e0fd' },
  { size: 'md', initials: 'SR', bg: '#fce4ec' },
  { size: 'md', initials: 'JM', bg: '#e3f2fd' },
  { size: 'sm', initials: 'LP', bg: '#e8f5e9' },
  { size: 'sm', initials: 'TO', bg: '#fff3e0' },
  { size: 'xs', initials: 'BW', bg: '#f3e5f5' },
  { size: 'xs', initials: 'NC', bg: '#fbe9e7' },
];

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <HeroCanvas />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__tag">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 11C2 11 3.5 5 11 3C11 3 9.5 9 2 11Z" fill="#6C4FF6"/>
            </svg>
            Changing the Status Quo
          </span>

          <h1 className="hero__heading" id="hero-heading">
            The thinkers and doers were{' '}
            <mark>changing</mark>{' '}
            the status Quo with us
          </h1>

          <p className="hero__desc">
            We partner with forward-thinking teams to craft digital
            experiences that inspire, engage, and drive measurable growth.
            Join thousands of businesses unlocking their potential.
          </p>

          <div className="hero__actions">
            <a href="#services" className="btn-primary">
              Explore Services
            </a>
            <a href="#about" className="btn-secondary">
              <span className="arrow">→</span>
              See how it works
            </a>
          </div>

          <div className="hero__stats">
            <div>
              <div className="hero__stat-num">1.2K+</div>
              <div className="hero__stat-label">Happy Clients</div>
            </div>
            <div>
              <div className="hero__stat-num">98%</div>
              <div className="hero__stat-label">Success Rate</div>
            </div>
            <div>
              <div className="hero__stat-num">12+</div>
              <div className="hero__stat-label">Years Experience</div>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          {/* decorative blob */}
          <div className="hero__blob" />

          {/* Decorative shapes */}
          <svg className="hero__shape hero__shape--leaf" width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <path d="M8 56C8 56 12 24 56 8C56 8 52 40 8 56Z" fill="#6C4FF6" opacity="0.15"/>
            <path d="M8 56C8 56 28 36 32 8" stroke="#6C4FF6" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
          </svg>

          <svg className="hero__shape hero__shape--triangle" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <polygon points="24,4 44,40 4,40" fill="#FF6B6B" opacity="0.2"/>
          </svg>

          {/* Avatar cluster */}
          <div className="hero__avatars" aria-label="Team members">
            {AVATARS.map((av, i) => (
              <div
                key={i}
                className={`avatar avatar--${av.size}`}
                style={{ background: av.bg }}
                title={`Team member ${av.initials}`}
              >
                {av.initials}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
