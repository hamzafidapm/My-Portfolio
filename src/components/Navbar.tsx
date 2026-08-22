'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { CloseIcon, MenuIcon, WhatsAppIcon } from '@/components/Icons';
import { easeOut } from '@/lib/motion';
import { navItems, siteConfig } from '@/lib/site';
import { useActiveSection } from '@/lib/useActiveSection';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ids = useMemo(() => navItems.map((item) => item.id), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll and allow Escape to close while the mobile menu is open.
  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="section-shell flex h-[4.5rem] items-center justify-between gap-4"
      >
        <a
          href="#home"
          className="group flex items-center gap-2.5 rounded-lg text-base font-semibold tracking-tight text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-gold-400/40 bg-gold-400/10 font-mono text-sm text-gold-300 transition-colors duration-300 group-hover:bg-gold-400/20">
            HF
          </span>
          <span className="hidden sm:inline">
            {siteConfig.name}
            <span className="text-gold-400">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative block rounded-lg px-3.5 py-2 text-sm transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-lg border border-gold-400/25 bg-gold-400/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-gold-400 px-4 py-2 text-sm font-semibold text-ink-950 transition-transform duration-200 hover:scale-[1.03] hover:bg-gold-300 active:scale-95 sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Let&apos;s talk
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition-colors duration-200 hover:border-gold-400/40 hover:text-gold-300 md:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-[4.5rem] z-40 bg-ink-950/70 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />
            <motion.div
              key="panel"
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: easeOut }}
              className="fixed right-0 top-[4.5rem] z-50 h-[calc(100dvh-4.5rem)] w-[78%] max-w-xs border-l border-white/[0.07] bg-ink-900 px-6 py-8 md:hidden"
            >
              <ul className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + index * 0.06, duration: 0.35, ease: easeOut }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={active === item.id ? 'true' : undefined}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base transition-colors duration-200 ${
                        active === item.id
                          ? 'bg-gold-400/10 text-gold-300'
                          : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.label}
                      <span className="font-mono text-xs text-zinc-600">
                        0{index + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.35, ease: easeOut }}
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-gold-400 px-4 py-3 text-sm font-semibold text-ink-950"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Message on WhatsApp
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
