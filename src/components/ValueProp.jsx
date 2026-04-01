import { useRef } from 'react';
import './ValueProp.css';
import { useTilt } from '../hooks/useTilt';

export default function ValueProp() {
  const containerRef = useRef(null);
  useTilt(containerRef, '.tilt-card', 12);

  return (
    <section className="valueprop" id="valueprop" aria-labelledby="vp-heading">
      <div className="container valueprop__inner" ref={containerRef}>
        <div className="vp__image-wrap">
          <div className="vp__image-card tilt-card">

            <svg width="140" height="140" viewBox="0 0 140 140" fill="none" aria-hidden="true">
              <rect x="20" y="100" width="100" height="20" rx="10" fill="rgba(108,79,246,0.12)"/>
              <rect x="30" y="70"  width="80"  height="20" rx="10" fill="rgba(108,79,246,0.20)"/>
              <rect x="45" y="40"  width="50"  height="20" rx="10" fill="rgba(108,79,246,0.30)"/>
              <circle cx="70" cy="30" r="14" fill="#6C4FF6" opacity="0.8"/>
              <text x="70" y="35" textAnchor="middle" fill="#fff" fontSize="13" fontFamily="sans-serif" fontWeight="700">↑</text>
            </svg>
            <div className="vp__progress-badge">
              <div className="vp__progress-label">Progress</div>
              <div className="vp__progress-bar-wrap">
                <div className="vp__progress-bar" />
              </div>
              <div className="vp__progress-pct">87%</div>
            </div>
          </div>
          <div className="vp__circle-deco" aria-hidden="true" />
        </div>

        {/* RIGHT text */}
        <div className="vp__content">
          <span className="section-tag">What We Do</span>
          <h2 className="section-heading" id="vp-heading">
            See how we can help<br />
            you <em>progress</em>
          </h2>
          <p className="vp__body">
            Our structured approach turns strategy into execution. Whether you're
            starting from scratch or scaling an existing product, we guide you
            every step of the way with clarity and conviction.
          </p>
          <ul className="vp__checklist">
            {[
              'Data-driven strategy aligned to your goals',
              'Agile delivery with transparent milestones',
              'Continuous improvement after launch',
            ].map((item) => (
              <li key={item} className="vp__check-item">
                <span className="vp__check-icon" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a href="#services" className="btn-primary vp__cta">Learn More →</a>
        </div>
      </div>
    </section>
  );
}
