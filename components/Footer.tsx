import Link from "next/link";
import { Logo } from "./Atoms";
import config from "@/config/general";

const Footer = () => {
  return (
    <footer className="border-t border-sand/70 bg-cream/60">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-base leading-relaxed text-inkSoft">
              A warm, simple place to find senior care and senior living, organize
              the everyday, and stay close to the people you love.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-inkMuted">
              Explore
            </span>
            <ul className="mt-4 space-y-2.5 text-base text-inkSoft">
              {config.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-forest">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="#waitlist" className="transition-colors hover:text-forest">
                  Join the waitlist
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-inkMuted">
              Get in touch
            </span>
            <ul className="mt-4 space-y-2.5 text-base text-inkSoft">
              <li>
                <a href={`mailto:${config.socials.email}`} className="transition-colors hover:text-forest">
                  {config.socials.email}
                </a>
              </li>
              <li>
                <Link
                  href={config.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-forest"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-sand/70 pt-6 text-sm text-inkMuted sm:flex-row sm:items-center">
          <p>© 2026 Growing Older. Made with care.</p>
          <div className="flex gap-6">
            <span className="cursor-default">Privacy</span>
            <span className="cursor-default">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
