import { useRef } from 'react';
import './About.css';
import { useTilt } from '../hooks/useTilt';

export default function About() {
  const containerRef = useRef(null);
  useTilt(containerRef, '.tilt-card', 12);

  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="container about__inner" ref={containerRef}>
        <div className="about__image-wrap">
          <div className="about__image-card tilt-card">

            <div className="about__image-placeholder" aria-hidden="true">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="45" r="22" fill="rgba(108,79,246,0.15)" stroke="#6C4FF6" strokeWidth="2"/>
                <circle cx="60" cy="45" r="10" fill="rgba(108,79,246,0.3)"/>
                <rect x="24" y="75" width="72" height="36" rx="18" fill="rgba(108,79,246,0.12)" stroke="#6C4FF6" strokeWidth="1.5"/>
                <text x="60" y="97" textAnchor="middle" fill="#6C4FF6" fontSize="11" fontFamily="sans-serif">Our Team</text>
              </svg>
            </div>
            <div className="about__badge">
              <span className="about__badge-icon">📈</span>
              <div>
                <div className="about__badge-num">10x</div>
                <div className="about__badge-label">Growth average</div>
              </div>
            </div>
          </div>
          <div className="about__deco-dot about__deco-dot--1" aria-hidden="true" />
          <div className="about__deco-dot about__deco-dot--2" aria-hidden="true" />
          <svg className="about__deco-leaf" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <path d="M8 72C8 72 14 32 72 8C72 8 66 48 8 72Z" fill="#6C4FF6" opacity="0.12"/>
          </svg>
        </div>

        <div className="about__content">
          <span className="section-tag">About Us</span>
          <h2 className="section-heading" id="about-heading">
            Tomorrow should be<br />
            <em>better than today</em>
          </h2>
          <p className="about__lead">
            We believe every organization has the potential to achieve extraordinary
            things. Our mission is to be the catalyst that turns ambition into reality.
          </p>
          <p className="about__body">
            Founded by strategists, designers, and technologists, Serveum brings
            together multidisciplinary expertise to tackle your most complex business
            challenges. We don't just deliver projects — we build lasting partnerships
            grounded in transparency, results, and shared success.
          </p>
          <a href="#services" className="btn-primary about__cta">
            Our Approach →
          </a>
        </div>
      </div>
    </section>
  );
}
