export const siteConfig = {
  name: 'Hamza Fida',
  role: 'Full-Stack Developer',
  tagline: 'I build production-ready web and mobile apps — AI-assisted, shipped fast.',
  description:
    'Hamza Fida — full-stack developer building production SaaS platforms, web apps, mobile apps and landing pages with Next.js, TypeScript, Tailwind CSS and Supabase.',
  url: 'https://hamza.vercel.app',
  photo: '/images/hamza.jpeg',
  photoAlt: 'Portrait of Hamza Fida, full-stack developer',
  locale: 'en_US',
  keywords: [
    'Hamza Fida',
    'full-stack developer',
    'Next.js developer',
    'TypeScript developer',
    'React developer',
    'Tailwind CSS',
    'Supabase',
    'Prisma',
    'Stripe integration',
    'SaaS developer',
    'web app developer',
    'mobile app developer',
    'landing page developer',
    'AI-assisted development',
    'Claude Code',
    'portfolio',
  ],
  links: {
    github: 'https://github.com/hamzafidapm',
    instagram: 'https://www.instagram.com/vibewith.hamzah',
    whatsapp: 'https://wa.me/923360161273',
  },
} as const;

export type NavItem = { id: string; label: string };

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

/** Public demo credentials surfaced on a card so visitors can log in and explore. */
export type DemoAccess = {
  email: string;
  password: string;
  note: string;
};

/** A captured app screen shown in a card's screenshot strip. */
export type Screenshot = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  tech: string[];
  /** Omit while a project has no public deployment — the card hides its Live Demo button. */
  live?: string;
  repo: string;
  demo?: DemoAccess;
  /** Optional gallery — mainly for projects with no live URL to link out to. */
  screenshots?: Screenshot[];
  accentFrom: string;
  accentTo: string;
};

export const projects: Project[] = [
  {
    slug: 'coachflow',
    name: 'CoachFlow',
    summary:
      'SaaS platform for coaches with authentication, Stripe subscriptions and session booking.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind', 'Prisma', 'Supabase', 'Stripe'],
    live: 'https://coursesflow.vercel.app',
    repo: 'https://github.com/hamzafidapm/coachflow',
    accentFrom: 'from-gold-400/25',
    accentTo: 'to-amber-600/10',
  },
  {
    slug: 'marina-heights',
    name: 'Marina Heights',
    summary:
      'UAE real estate platform for browsing listings and booking virtual property tours.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Railway'],
    live: 'https://marinaheights.vercel.app',
    repo: 'https://github.com/hamzafidapm/Marinaheights',
    accentFrom: 'from-sky-400/20',
    accentTo: 'to-gold-500/10',
  },
  {
    slug: 'sablefire',
    name: 'Sablefire',
    summary:
      'Animated restaurant website with scroll-driven motion and a reservation flow.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind', 'Railway'],
    live: 'https://sablefire.vercel.app',
    repo: 'https://github.com/hamzafidapm/sablefire',
    accentFrom: 'from-rose-400/20',
    accentTo: 'to-gold-500/10',
  },
  {
    slug: 'ironhaus',
    name: 'Ironhaus',
    summary:
      'Gym booking app with real-time class scheduling and live availability updates.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    live: 'https://hzgym.vercel.app',
    repo: 'https://github.com/hamzafidapm/Gym',
    accentFrom: 'from-emerald-400/20',
    accentTo: 'to-gold-500/10',
  },
  {
    slug: 'gulfnova-portal',
    name: 'GulfNova Portal',
    summary:
      'Full-stack enterprise HR & operations platform with 7-tier role-based access control, 100+ seeded employees, and complete workflows for attendance, leave, payroll, and recruitment.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'Neon Postgres'],
    live: 'https://portaluae.vercel.app',
    repo: 'https://github.com/hamzafidapm/portal',
    demo: {
      email: 'admin@gulfnova.demo',
      password: 'GulfNova#2026',
      note: 'Click any role on the login page’s quick-fill panel to try different permission levels.',
    },
    accentFrom: 'from-violet-400/20',
    accentTo: 'to-gold-500/10',
  },
  {
    slug: 'noir-brew',
    name: 'NOIR BREW',
    summary:
      'Cinematic dark-and-gold coffee brand site with a horizontal-scroll product showcase, full Menu, Story and Locations pages, and database-backed newsletter signup and table reservations. Profiling and fixing render-blocking animations took Lighthouse from 37 to 89.',
    tech: [
      'Next.js 15',
      'TypeScript',
      'Tailwind',
      'Framer Motion',
      'GSAP',
      'Lenis',
      'Prisma',
      'Neon Postgres',
      'Vercel',
    ],
    live: 'https://coffeeweb-xi.vercel.app',
    repo: 'https://github.com/hamzafidapm/coffeeweb',
    accentFrom: 'from-stone-400/20',
    accentTo: 'to-gold-500/10',
  },
  {
    slug: 'civipass',
    name: 'CiviPass',
    summary:
      'Native iOS civics test prep app for the U.S. citizenship test — Study mode with categorized questions, Quiz mode with instant feedback, progress tracking with streaks, and a StoreKit 2 premium tier. My first native iOS app, built entirely on Windows via VS Code and Claude Code, using GitHub Actions macOS runners as the only Xcode access point — including a CI screenshot pipeline for visual QA without ever opening Xcode.',
    tech: ['SwiftUI', 'SwiftData', 'StoreKit 2', 'GitHub Actions CI/CD'],
    repo: 'https://github.com/hamzafidapm/CiviPass',
    screenshots: [
      { src: '/images/civipass/01-today.webp', alt: 'CiviPass Today tab' },
      { src: '/images/civipass/02-study.webp', alt: 'CiviPass Study mode listing categorized civics questions' },
      { src: '/images/civipass/03-quiz-question.webp', alt: 'CiviPass mock quiz asking a civics question with four answers' },
      { src: '/images/civipass/04-quiz-answered.webp', alt: 'CiviPass quiz showing a correct answer with an explanation' },
      { src: '/images/civipass/05-progress.webp', alt: 'CiviPass progress tracking screen' },
      { src: '/images/civipass/06-paywall.webp', alt: 'CiviPass premium upgrade screen' },
    ],
    accentFrom: 'from-indigo-400/20',
    accentTo: 'to-gold-500/10',
  },
];

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 7, suffix: '+', label: 'Projects Shipped' },
  { value: 12, suffix: '+', label: 'Technologies' },
  { value: 100, suffix: '%', label: 'AI-Assisted Workflow' },
];

export const techStack = [
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'React',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Prisma',
  'Supabase',
  'Stripe',
  'Vercel',
  'Railway',
] as const;
