'use client';

import { motion } from 'framer-motion';

import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import { staggerContainer, viewportOnce } from '@/lib/motion';
import { projects } from '@/lib/site';

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative scroll-mt-24 border-t border-white/[0.05] py-24 sm:py-28"
    >
      <div className="section-shell">
        <SectionHeading
          id="projects-heading"
          eyebrow="03 — Featured Work"
          title="Projects I've shipped"
          description="Six production applications — each live, each built end-to-end from database to deploy."
        />

        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-5 sm:gap-6 lg:grid-cols-2"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
