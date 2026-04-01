import { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  }

  return (
    <section className="newsletter" id="contact" aria-labelledby="nl-heading">
      <div className="nl__deco nl__deco--1" aria-hidden="true" />
      <div className="nl__deco nl__deco--2" aria-hidden="true" />

      <div className="container nl__inner">
        <div className="nl__icon" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M4 40C4 40 10 16 44 4C44 4 38 28 4 40Z" fill="rgba(255,255,255,0.5)"/>
            <path d="M4 40C4 40 22 24 28 4" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        <h2 className="nl__heading" id="nl-heading">
          Subscribe to our newsletter
        </h2>
        <p className="nl__sub">
          Get the latest insights on digital strategy, partnerships, and
          progress directly in your inbox. No spam — ever.
        </p>

        {submitted ? (
          <div className="nl__success" role="alert">
            🎉 Thank you for subscribing! We'll be in touch soon.
          </div>
        ) : (
          <form className="nl__form" onSubmit={handleSubmit} noValidate>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              className="nl__input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
            />
            <button type="submit" className="nl__btn" id="newsletter-submit">
              Subscribe Now
            </button>
          </form>
        )}

        <p className="nl__note">
          Join 12,000+ subscribers · Unsubscribe anytime
        </p>
      </div>
    </section>
  );
}
