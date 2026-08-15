'use client';

import { motion } from 'framer-motion';

import { ArrowUpRightIcon, CodeIcon } from '@/components/Icons';
import { fadeUp } from '@/lib/motion';
import type { Project } from '@/lib/site';

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const headingId = `project-${project.slug}`;

  return (
    <motion.article
      variants={fadeUp}
      aria-labelledby={headingId}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.015] hover:border-gold-400/35 hover:shadow-glow-lg sm:p-7"
    >
      {/* Accent wash that warms up on hover */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accentFrom} ${project.accentTo} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-xs text-zinc-600">
            0{index + 1}
          </span>
          <span className="rounded-full border border-gold-400/25 bg-gold-400/10 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-gold-300">
            Built with Claude Code
          </span>
        </div>

        <h3
          id={headingId}
          className="mt-4 text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-gold-100"
        >
          {project.name}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
          {project.summary}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} tech stack`}>
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-white/[0.07] bg-ink-850/80 px-2.5 py-1 font-mono text-[0.7rem] text-zinc-400 transition-colors duration-300 group-hover:border-white/15 group-hover:text-zinc-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-gold-400 px-4 py-2.5 text-sm font-semibold text-ink-950 transition-all duration-200 hover:bg-gold-300 hover:shadow-glow"
          >
            Live Demo
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
            <span className="sr-only">— opens {project.name} in a new tab</span>
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/12 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition-all duration-200 hover:border-gold-400/40 hover:bg-white/[0.04] hover:text-white"
          >
            <CodeIcon className="h-3.5 w-3.5" />
            View Code
            <span className="sr-only">
              — {project.name} source on GitHub, opens in a new tab
            </span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
