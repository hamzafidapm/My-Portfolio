'use client';

import { motion } from 'framer-motion';

import {
  ArrowUpRightIcon,
  GitHubIcon,
  InstagramIcon,
  WhatsAppIcon,
} from '@/components/Icons';
import SectionHeading from '@/components/SectionHeading';
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '@/lib/motion';
import { siteConfig } from '@/lib/site';

const socials = [
  {
    label: 'GitHub',
    handle: '@hamzafidapm',
    href: siteConfig.links.github,
    Icon: GitHubIcon,
  },
  {
    label: 'Instagram',
    handle: '@vibewith.hamzah',
    href: siteConfig.links.instagram,
    Icon: InstagramIcon,
  },
  {
    label: 'WhatsApp',
    handle: '+92 336 0161273',
    href: siteConfig.links.whatsapp,
    Icon: WhatsAppIcon,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.05] py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-30%] left-1/2 h-[28rem] w-[36rem] -translate-x-1/2 rounded-full bg-gold-500/12 blur-[130px]"
      />

      <div className="section-shell relative">
        <SectionHeading
          id="contact-heading"
          align="center"
          eyebrow="04 — Contact"
          title="Got a project in mind?"
          description="Tell me what you're building. I usually reply within a few hours."
        />

        <motion.div
          variants={staggerContainer(0.1, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 flex flex-col items-center"
        >
          <motion.a
            variants={scaleIn}
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-2xl bg-gold-400 px-7 py-4 text-base font-semibold text-ink-950 shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-glow-lg active:translate-y-0"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Message me on WhatsApp
            <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          <motion.p variants={fadeUp} className="mt-4 font-mono text-xs text-zinc-500">
            Usually online · Karachi, Pakistan (PKT)
          </motion.p>

          <motion.ul
            variants={staggerContainer(0.09, 0.2)}
            className="mt-12 grid w-full max-w-3xl gap-3 sm:grid-cols-3"
          >
            {socials.map(({ label, handle, href, Icon }) => (
              <motion.li key={label} variants={fadeUp}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-card group flex h-full flex-col items-center gap-2 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/35 hover:bg-gold-400/[0.04]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-ink-850 text-zinc-300 transition-colors duration-300 group-hover:border-gold-400/40 group-hover:bg-gold-400/10 group-hover:text-gold-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="mt-1 text-sm font-medium text-white">{label}</span>
                  <span className="font-mono text-xs text-zinc-500">{handle}</span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
