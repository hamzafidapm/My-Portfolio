'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { ArrowUpRightIcon, ChevronDownIcon, WhatsAppIcon } from '@/components/Icons';
import { easeOut, staggerContainer, wordReveal } from '@/lib/motion';
import { siteConfig } from '@/lib/site';

const headline = siteConfig.name.split(' ');

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20"
    >
      <AnimatedBackdrop />

      <div className="section-shell relative z-10">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* Copy */}
          <motion.div
            variants={staggerContainer(0.12, 0.15)}
            initial="hidden"
            animate="show"
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <motion.p
              variants={wordReveal}
              className="eyebrow inline-flex items-center gap-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              Available for work
            </motion.p>

            <h1
              id="hero-heading"
              className="mt-4 text-[2.3rem] font-semibold leading-[1.05] tracking-tight text-white sm:mt-5 sm:text-6xl lg:text-7xl"
            >
              <span className="sr-only">
                {siteConfig.name} — {siteConfig.role}
              </span>
              <span aria-hidden="true" className="block overflow-hidden">
                {headline.map((word, index) => (
                  <span key={word} className="inline-block overflow-hidden pb-1">
                    <motion.span
                      variants={wordReveal}
                      className={`inline-block ${
                        index === headline.length - 1 ? 'text-gradient-gold' : ''
                      }`}
                    >
                      {word}
                      {index < headline.length - 1 ? ' ' : ''}
                    </motion.span>
                  </span>
                ))}
              </span>
            </h1>

            <motion.p
              variants={wordReveal}
              aria-hidden="true"
              className="mt-4 font-mono text-sm text-gold-300/90 sm:text-base"
            >
              {siteConfig.role}
              <span className="ml-0.5 inline-block animate-blink text-gold-400">_</span>
            </motion.p>

            <motion.p
              variants={wordReveal}
              className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-zinc-400 sm:mt-5 sm:text-lg lg:mx-0"
            >
              I ship AI-assisted web apps, mobile apps and landing pages — from auth
              and payments to real-time booking — with Next.js, TypeScript and
              Supabase.
            </motion.p>

            <motion.div
              variants={wordReveal}
              className="mt-7 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gold-400 px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-glow-lg active:translate-y-0"
              >
                View Projects
                <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-400/45 hover:bg-gold-400/10 hover:text-gold-200 active:translate-y-0"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Contact Me on WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: easeOut, delay: 0.1 }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative">
              {/* Rotating conic ring */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2.25rem] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(245,180,41,0.65)_70deg,transparent_150deg,transparent_210deg,rgba(245,180,41,0.35)_290deg,transparent_360deg)] animate-ring-spin blur-[2px]"
              />
              <div
                aria-hidden="true"
                className="absolute -inset-10 -z-10 rounded-full bg-gold-500/20 blur-3xl"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900">
                <Image
                  src={siteConfig.photo}
                  alt={siteConfig.photoAlt}
                  width={600}
                  height={800}
                  priority
                  sizes="(max-width: 640px) 55vw, (max-width: 1024px) 45vw, 420px"
                  className="h-auto w-[12.5rem] object-cover sm:w-[19rem] lg:w-[23rem]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent"
                />
              </div>

              {/* Wrapper handles centring; Framer only animates the inner node,
                  since its inline transform would clobber a Tailwind translate. */}
              <div className="pointer-events-none absolute inset-x-0 -bottom-4 flex justify-center">
                <motion.span
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.5, ease: easeOut }}
                  className="whitespace-nowrap rounded-full border border-gold-400/25 bg-ink-900/90 px-3.5 py-2 font-mono text-[0.62rem] tracking-wide text-gold-200 backdrop-blur sm:px-4 sm:text-[0.7rem]"
                >
                  BS Computer Science · Full-Stack
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to the about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-zinc-500 transition-colors duration-200 hover:text-gold-300 sm:flex"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDownIcon className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}

/**
 * Animated gradient background — three CSS-transformed blurred blobs.
 * No canvas or particle library, so it stays cheap on mobile.
 */
function AnimatedBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
      <div className="absolute inset-0 bg-grid opacity-[0.55]" />
      <div className="absolute -left-24 top-[-10%] h-[26rem] w-[26rem] rounded-full bg-gold-500/20 blur-[110px] animate-gradient-drift" />
      <div className="absolute right-[-12%] top-[12%] h-[30rem] w-[30rem] rounded-full bg-amber-600/15 blur-[120px] animate-gradient-drift [animation-delay:-6s]" />
      <div className="absolute bottom-[-18%] left-1/3 h-[24rem] w-[24rem] rounded-full bg-gold-300/10 blur-[110px] animate-gradient-drift [animation-delay:-12s]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-transparent to-ink-950" />
    </div>
  );
}
