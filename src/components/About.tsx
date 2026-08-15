'use client';

import { motion } from 'framer-motion';

import SectionHeading from '@/components/SectionHeading';
import StatCounter from '@/components/StatCounter';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';
import { stats } from '@/lib/site';

const highlights = [
  'Auth, billing and dashboards wired end-to-end',
  'Type-safe APIs with Prisma, Supabase and Postgres',
  'Motion-rich, accessible interfaces that stay fast on mobile',
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 border-t border-white/[0.05] py-24 sm:py-28"
    >
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHeading
              id="about-heading"
              eyebrow="01 — About"
              title="I turn ideas into shipped products."
              description="I'm a BS Computer Science student and full-stack developer. I build and launch production applications end-to-end — design, frontend, API, database and deploy — using an AI-assisted workflow built around Claude Code."
            />

            <motion.ul
              variants={staggerContainer(0.1, 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-8 space-y-3"
            >
              {highlights.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-sm text-zinc-400 sm:text-base"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                  />
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="surface-card mt-8 border-l-2 border-l-gold-400/60 p-5 font-mono text-sm leading-relaxed text-zinc-400"
            >
              <span className="text-gold-400">{'//'}</span> Every project below was
              built with AI-assisted development — faster iteration, same
              engineering rigour.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-4 self-center sm:grid-cols-3 lg:grid-cols-1"
          >
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
