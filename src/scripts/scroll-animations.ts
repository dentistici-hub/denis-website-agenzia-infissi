import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap-init';

if (!prefersReducedMotion) {
  document.querySelectorAll('[data-animate]').forEach((el) => {
    const htmlEl = el as HTMLElement;
    htmlEl.style.visibility = 'visible';
    gsap.from(htmlEl, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: htmlEl,
        start: 'top 85%',
        once: true,
      },
    });
  });
  ScrollTrigger.refresh();
} else {
  document.querySelectorAll('[data-animate]').forEach((el) => {
    (el as HTMLElement).style.visibility = 'visible';
  });
}
