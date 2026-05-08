import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Global defaults — restrained for professional services
gsap.defaults({
  ease: 'power2.out',
  duration: 0.6,
});

// Respect reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  gsap.globalTimeline.timeScale(100);
}

export { gsap, ScrollTrigger };
export { prefersReducedMotion };
