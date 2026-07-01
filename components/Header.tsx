"use client";

import Link from "next/link";
import { Logo } from "./Atoms";
import config from "@/config/general";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-sand/60 bg-eggshell/85 backdrop-blur-md">
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {config.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-inkSoft transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a href="#waitlist" className="btn-primary px-6 py-3 text-[0.95rem]">
          Join the waitlist
        </a>
      </div>
    </header>
  );
};

export default Header;
