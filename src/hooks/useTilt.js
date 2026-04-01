import { useEffect } from 'react';

// Custom hook for 3D tilt effect on mouse hover
export function useTilt(containerRef, selector = '.tilt-card', strength = 12) {
  useEffect(() => {
    const container = containerRef?.current ?? document;
    const cards = Array.from(container.querySelectorAll(selector));

    const handlers = cards.map((card) => {
      function onMove(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width  / 2;
        const cy = rect.height / 2;
        const rotX = ((y - cy) / cy) * -strength;
        const rotY = ((x - cx) / cx) *  strength;
        card.style.transition = 'none';
        card.style.transform  = `
          perspective(800px)
          rotateX(${rotX}deg)
          rotateY(${rotY}deg)
          scale3d(1.04, 1.04, 1.04)
        `;
      }

      function onLeave() {
        card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
        card.style.transform  = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
      }

      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      return { card, onMove, onLeave };
    });

    return () => {
      handlers.forEach(({ card, onMove, onLeave }) => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [containerRef, selector, strength]);
}
