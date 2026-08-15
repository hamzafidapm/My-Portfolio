'use client';

import { motion } from 'framer-motion';

import SectionHeading from '@/components/SectionHeading';
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '@/lib/motion';
import { techStack } from '@/lib/site';

/** Short monogram used as each tech's mark — keeps the grid consistent and light. */
const monograms: Record<string, string> = {
  'Next.js': 'N',
  TypeScript: 'TS',
  'Tailwind CSS': 'TW',
  React: 'R',
  'Node.js': 'JS',
  Express: 'EX',
  PostgreSQL: 'PG',
  Prisma: 'PR',
  Supabase: 'SB',
  Stripe: 'S',
  Vercel: 'V',
  Railway: 'RW',
};

export default function TechStack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.05] py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]"
      />

      <div className="section-shell relative">
        <SectionHeading
          id="stack-heading"
          align="center"
          eyebrow="02 — Tech Stack"
          title="Tools I build with daily"
          description="A focused stack chosen for shipping speed, type safety and clean deploys."
        />

        <motion.ul
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        >
          {techStack.map((tech) => (
            <motion.li key={tech} variants={scaleIn}>
              <div className="surface-card group flex h-full items-center gap-3.5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/35 hover:bg-gold-400/[0.04] hover:shadow-glow">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-ink-850 font-mono text-xs font-semibold text-gold-300 transition-colors duration-300 group-hover:border-gold-400/40 group-hover:bg-gold-400/10"
                >
                  {monograms[tech] ?? tech.slice(0, 2)}
                </span>
                <span className="text-sm font-medium text-zinc-200 transition-colors duration-300 group-hover:text-white">
                  {tech}
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Auto-scrolling marquee — decorative echo of the grid above. */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          aria-hidden="true"
          className="mask-fade-x relative mt-12 overflow-hidden"
        >
          <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 gap-3">
                {techStack.map((tech) => (
                  <span
                    key={`${copy}-${tech}`}
                    className="whitespace-nowrap rounded-full border border-white/[0.07] bg-white/[0.02] px-4 py-2 font-mono text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
