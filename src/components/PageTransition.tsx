'use client';

import { motion } from 'framer-motion';

import { easeOut } from '@/lib/motion';

/**
 * Brief page-load entrance — a single fade/lift on first paint.
 * Deliberately short (0.5s) so it never reads as a splash screen.
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
