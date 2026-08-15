'use client';

import { useEffect, useState } from 'react';

/**
 * Tracks which section id is currently in view.
 *
 * Uses scroll position rather than IntersectionObserver ratios so that short
 * sections and the final section (which can never fill the viewport) still
 * win the highlight.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    if (ids.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.scrollY + window.innerHeight * 0.35;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= line) current = id;
      }

      // Pin the last section once the page is scrolled to the bottom.
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      if (atBottom) current = ids[ids.length - 1];

      setActive((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids]);

  return active;
}
