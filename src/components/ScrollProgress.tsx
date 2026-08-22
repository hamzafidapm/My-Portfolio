'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin gold bar at the very top that tracks reading progress. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500"
    />
  );
}
