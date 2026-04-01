import { useRef } from 'react';
import './Testimonials.css';
import { useTilt } from '../hooks/useTilt';

const TESTIMONIALS = [
  {
    id: 'test-1',
    quote:
      '"Serveum transformed the way we think about digital strategy. Their team didn\'t just deliver a product — they delivered a new way of operating that has multiplied our revenue threefold."',
    name: 'Richard A.',
    role: 'CEO, NovaBridge Inc.',
    initials: 'RA',
    flag: '🇬🇧',
  },
  {
    id: 'test-2',
    quote:
      '"The collaborative approach was unlike anything we\'d experienced before. Total transparency, zero surprises. I finally have confidence in our digital direction."',
    name: 'Amara O.',
    role: 'Head of Growth, Linqr Africa',
    initials: 'AO',
    flag: '🇳🇬',
  },
  {
    id: 'test-3',
    quote:
      '"In six months, Serveum helped us go from MVP to market leader. Their pragmatic style cut through the noise and got us shipping faster than ever."',
    name: 'Mihail T.',
    role: 'CTO, Strata Systems',
    initials: 'MT',
    flag: '🇷🇴',
  },
];


export default function Testimonials() {
  const containerRef = useRef(null);
  useTilt(containerRef, '.tilt-card', 10);

  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testi-heading">
      <div className="container" ref={containerRef}>
        <div className="testimonials__header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-heading" id="testi-heading">
            What our customers say<br />
            <em>About Us</em>
          </h2>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <blockquote className="testi-card tilt-card" key={t.id} id={t.id}>
              <div className="testi-card__inner">
                <div className="testi-card__stars" aria-label="5 stars">★★★★★</div>
                <p className="testi-card__quote">{t.quote}</p>
                <footer className="testi-card__footer">
                  <div className="testi-card__avatar" aria-hidden="true">{t.initials}</div>
                  <div>
                    <cite className="testi-card__name">{t.name}</cite>
                    <span className="testi-card__role">{t.role}</span>
                  </div>
                  <span className="testi-card__flag" aria-label="Country">{t.flag}</span>
                </footer>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

