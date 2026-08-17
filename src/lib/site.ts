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

export type Project = {
  slug: string;
  name: string;
  summary: string;
  tech: string[];
  /** Omit while a project has no public deployment — the card hides its Live Demo button. */
  live?: string;
  repo: string;
  demo?: DemoAccess;
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
    // TODO: confirm summary and tech — the portal repo has no code yet to infer from.
    summary:
      'Role-based business portal with authentication and permission-tiered dashboards.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
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
];

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 4, suffix: '+', label: 'Projects Shipped' },
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
