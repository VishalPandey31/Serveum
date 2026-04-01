import { useRef } from 'react';
import './Services.css';
import { useTilt } from '../hooks/useTilt';

const SERVICES = [
  {
    id: 'col',
    icon: '🤝',
    title: 'Collaborative & Partnership',
    description:
      'We embed ourselves in your team, working as true partners. No handoffs, no silos — just seamless collaboration from strategy to execution.',
  },
  {
    id: 'tal',
    icon: '💬',
    title: 'We Talk About Our Weight',
    description:
      'Honest conversations about challenges, budgets, and trade-offs. We never overpromise — we set realistic expectations and consistently exceed them.',
  },
  {
    id: 'dig',
    icon: '🚀',
    title: 'Piloting Digital Confidence',
    description:
      'We help organizations navigate digital transformation with confidence — implementing the right technologies at the right pace for lasting impact.',
  },
];

export default function Services() {
  const containerRef = useRef(null);
  useTilt(containerRef, '.tilt-card', 15);

  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="container" ref={containerRef}>
        <div className="services__header">
          <span className="section-tag">Our Services</span>
          <h2 className="section-heading" id="services-heading">
            What we can offer <em>you!</em>
          </h2>
          <p className="services__subtitle">
            Three core pillars that define how we work and deliver value
            to every client we partner with.
          </p>
        </div>

        <div className="services__list">
          {SERVICES.map((svc, i) => (
            <article className="service-card tilt-card" key={svc.id} id={`service-${svc.id}`}>
              <div className="service-card__inner">
                <div className="service-card__number" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="service-card__icon" aria-hidden="true">{svc.icon}</div>
                <div className="service-card__body">
                  <h3 className="service-card__title">{svc.title}</h3>
                  <p className="service-card__desc">{svc.description}</p>
                </div>
                <div className="service-card__arrow" aria-hidden="true">→</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

