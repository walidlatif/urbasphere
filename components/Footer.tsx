import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
  { label: "Accueil", href: "/" },
  { label: "Domaines", href: "/services" },
  { label: "Pourquoi nous", href: "/a-propos" },
  { label: "Contact", href: "/contact" }
];

export default function Footer() {
  return (
    <footer className="footer-industrial text-white">
      <div className="container-shell">
        <div className="grid gap-10 py-10 md:grid-cols-[1.4fr_0.8fr_1fr] md:gap-14 md:py-16">
          <div className="max-w-md">
            <Link className="inline-flex" href="/" aria-label="URBASPHERE CONTRACTORS - Accueil">
              <Image
                src="/images/logo-white.png"
                alt="URBASPHERE CONTRACTORS"
                width={204}
                height={56}
                className="h-12 w-auto md:h-14"
              />
            </Link>
            <p className="body-copy mt-5 max-w-sm text-white/62">
              Entreprise marocaine spécialisée dans les travaux industriels, publics et du bâtiment.
            </p>
          </div>

          <nav aria-label="Navigation du pied de page">
            <h2 className="footer-label">Navigation</h2>
            <ul className="mt-5 space-y-3 font-hanken text-[15px] leading-6">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link className="footer-link" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="footer-label">Contact</h2>
            <address className="mt-5 space-y-3 font-hanken text-[15px] leading-6 not-italic text-white/70">
              <a className="footer-contact-link" href="mailto:contact@urbasphere.ma">
                contact@urbasphere.ma
              </a>
              <a className="footer-contact-link" href="tel:+212664603264">
                0664603264
              </a>
              <p>Casablanca, Maroc</p>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-5 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Urbasphere Contractors. Tous droits réservés.</p>
          <p>
            Designed &amp; developed by{" "}
            <a className="footer-credit-link" href="https://triverseagency.com/" target="_blank" rel="noreferrer">
              Triverse Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
