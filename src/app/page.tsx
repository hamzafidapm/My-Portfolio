import dynamic from 'next/dynamic';

import Hero from '@/components/Hero';

/**
 * Below-the-fold sections are code-split so the hero ships the smallest
 * possible first payload. Each keeps a min-height placeholder to avoid layout
 * shift while its chunk loads.
 */
const placeholder = (height: string) => (
  <div aria-hidden="true" className={height} />
);

const About = dynamic(() => import('@/components/About'), {
  loading: () => placeholder('min-h-[38rem]'),
});
const TechStack = dynamic(() => import('@/components/TechStack'), {
  loading: () => placeholder('min-h-[40rem]'),
});
const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => placeholder('min-h-[52rem]'),
});
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => placeholder('min-h-[36rem]'),
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </>
  );
}
