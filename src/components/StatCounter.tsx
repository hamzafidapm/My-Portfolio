'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

import { fadeUp } from '@/lib/motion';

type Props = {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
};

/** Counts up from 0 to `value` the first time it scrolls into view. */
export default function StatCounter({
  value,
  suffix = '',
  label,
  duration = 1400,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    let start: number | null = null;

    const tick = (now: number) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out cubic so the number decelerates into its final value.
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, reduceMotion]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="surface-card group relative overflow-hidden p-6 text-center transition-colors duration-300 hover:border-gold-400/30 sm:text-left"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        <span className="tabular-nums">{display}</span>
        <span className="text-gradient-gold">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-zinc-400">{label}</p>
    </motion.div>
  );
}
