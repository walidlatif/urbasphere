"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Realisations", href: "/realisations" },
  { label: "Contact", href: "/contact" }
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-primary/10 bg-white">
      <div className="container-shell flex items-center justify-between py-4">
        <Link className="flex shrink-0 items-center" href="/" aria-label="URBASPHERE CONTRACTORS - Accueil">
          <Image src="/images/logo-black.png" alt="URBASPHERE CONTRACTORS" width={184} height={48} className="h-10 w-auto md:h-12" priority />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                aria-current={active ? "page" : undefined}
                className={`nav-link ${active ? "nav-link-active" : ""}`}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          className="label-caps motion-surface group hidden items-center gap-2 bg-primary px-6 py-3 uppercase tracking-wider text-white hover:opacity-80 lg:inline-flex"
          href="/contact"
        >
          Demander un devis
          <span className="motion-arrow" aria-hidden="true">
            →
          </span>
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}
