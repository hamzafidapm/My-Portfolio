'use client';

import { motion } from 'framer-motion';

import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  id?: string;
};

/** Shared eyebrow + h2 + blurb block used by every section below the hero. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  id,
}: Props) {
  const centered = align === 'center';

  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}
    >
      <motion.p variants={fadeUp} className="eyebrow">
        {eyebrow}
      </motion.p>
      <motion.h2 variants={fadeUp} id={id} className="heading-2 mt-3">
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
