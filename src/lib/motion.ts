import type { Transition, Variants } from 'framer-motion';

/** Shared easing — a soft, confident ease-out used site-wide. */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const baseTransition: Transition = { duration: 0.6, ease: easeOut };

/** Viewport config reused by every scroll-triggered section. */
export const viewportOnce = { once: true, amount: 0.2 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: baseTransition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: baseTransition },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: baseTransition },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: baseTransition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: easeOut } },
};

/** Parent container that staggers its children's entrance. */
export const staggerContainer = (stagger = 0.09, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Word-by-word reveal used for the hero headline. */
export const wordReveal: Variants = {
  hidden: { opacity: 0, y: '0.55em' },
  show: { opacity: 1, y: '0em', transition: { duration: 0.65, ease: easeOut } },
};
