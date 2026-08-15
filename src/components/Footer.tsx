import { GitHubIcon, InstagramIcon, WhatsAppIcon } from '@/components/Icons';
import { siteConfig } from '@/lib/site';

const links = [
  { label: 'GitHub', href: siteConfig.links.github, Icon: GitHubIcon },
  { label: 'Instagram', href: siteConfig.links.instagram, Icon: InstagramIcon },
  { label: 'WhatsApp', href: siteConfig.links.whatsapp, Icon: WhatsAppIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-center text-sm text-zinc-500 sm:text-left">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js,
          Tailwind CSS &amp; Framer Motion.
        </p>

        <ul className="flex items-center gap-2">
          {links.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} — opens in a new tab`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-400/40 hover:text-gold-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
