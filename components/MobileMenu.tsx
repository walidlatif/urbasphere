"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Realisations", href: "/realisations" },
  { label: "Contact", href: "/contact" }
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="motion-surface flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-black hover:bg-black/5"
        type="button"
        onClick={() => setOpen((value) => !value)}
      >
        <span className={`h-0.5 w-6 bg-black transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
        <span className={`h-0.5 w-6 bg-black transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`h-0.5 w-6 bg-black transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
      </button>
      <nav
        id="mobile-menu"
        aria-label="Navigation mobile"
        className={`fixed left-0 right-0 top-[73px] z-40 grid border-b border-black bg-white transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col px-margin-mobile py-4">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`label-caps motion-surface py-4 uppercase hover:text-on-tertiary-container ${
                    active
                      ? "border-b-2 border-on-tertiary-container text-primary"
                      : "border-b border-black/10 text-secondary"
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              className="label-caps motion-surface group mt-5 inline-flex w-full items-center justify-center gap-3 bg-primary px-6 py-4 uppercase text-white hover:bg-on-tertiary-container"
              href="/contact"
            >
              Demander un devis
              <span className="motion-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
