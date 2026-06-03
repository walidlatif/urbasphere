import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/urbasphere",
    path: "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.4A4.6 4.6 0 1 1 12 16.6 4.6 4.6 0 0 1 12 7.4Zm0 2A2.6 2.6 0 1 0 12 14.6 2.6 2.6 0 0 0 12 9.4Zm5.1-2.7a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    path: "M5.3 8.9H2.7V21h2.6V8.9ZM4 3A2 2 0 1 0 4 7a2 2 0 0 0 0-4Zm6.2 5.9H7.7V21h2.6v-6.4c0-1.7.8-3.3 2.7-3.3s2.1 1.8 2.1 3.4V21h2.6v-7.1c0-3.5-1.9-5.2-4.4-5.2a4 4 0 0 0-3.1 1.7V8.9Z"
  },
  {
    label: "X",
    href: "https://x.com/",
    path: "M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.4 21H2.3l7.3-8.4L2 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.5 4.7H5.7l11 14.5Z"
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    path: "M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.8 12 4.8 12 4.8s-5.8 0-7.6.4a2.8 2.8 0 0 0-2 2A29.7 29.7 0 0 0 2 12a29.7 29.7 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.8.4 7.6.4 7.6.4s5.8 0 7.6-.4a2.8 2.8 0 0 0 2-2A29.7 29.7 0 0 0 22 12a29.7 29.7 0 0 0-.4-4.8ZM10 15.2V8.8l5.5 3.2L10 15.2Z"
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/212664603264",
    path: "M12 2A9.8 9.8 0 0 0 3.5 16.7L2 22l5.4-1.4A9.8 9.8 0 1 0 12 2Zm0 2a7.8 7.8 0 0 1 6.7 11.8 7.8 7.8 0 0 1-9.9 2.9l-.4-.2-3.2.8.9-3.1-.2-.5A7.8 7.8 0 0 1 12 4Zm-3.4 4.1c-.2 0-.5 0-.8.4s-1 1-1 2.4 1 2.8 1.2 3 .2.4 2 2.1c1.7 1.6 3.4 2.1 4.7 2.3.5.1 1.5 0 1.8-.2.5-.2 1.4-.7 1.6-1.3.2-.6.2-1.1.1-1.3-.1-.1-.2-.2-.5-.4l-1.7-.8c-.2-.1-.5-.1-.7.2l-.8 1c-.2.2-.4.2-.7.1a6.4 6.4 0 0 1-3.2-2.8c-.2-.3 0-.5.1-.7l.5-.6c.1-.2.2-.4.3-.6.1-.2 0-.4 0-.6L10.7 8.7c-.2-.5-.4-.6-.7-.6H8.6Z"
  }
];

export default function Footer() {
  return (
    <footer className="bg-inverse-surface py-16 text-white">
      <div className="container-shell grid grid-cols-1 gap-gutter md:grid-cols-4">
        <div className="space-y-6">
          <Link href="/" aria-label="URBASPHERE CONTRACTORS - Accueil">
            <Image src="/images/logo-white.png" alt="URBASPHERE CONTRACTORS" width={204} height={56} className="h-14 w-auto" />
          </Link>
          <p className="font-hanken text-body-md text-outline-variant">
            Leader dans la construction industrielle et publique au Maroc. Excellence, Durabilité, Maîtrise.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                className="motion-surface flex h-10 w-10 items-center justify-center border border-outline/30 text-outline-variant hover:border-on-tertiary-container hover:text-on-tertiary-container"
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
              >
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.path} />
                </svg>
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-column">
          <h5 className="label-caps mb-8 text-on-tertiary-container">Expertises</h5>
          <ul className="space-y-4 font-hanken text-body-md">
            <li><Link className="motion-surface inline-block text-outline-variant hover:translate-x-1 hover:text-white" href="/services#industriels">Travaux industriels</Link></li>
            <li><Link className="motion-surface inline-block text-outline-variant hover:translate-x-1 hover:text-white" href="/services#publics">Travaux publics</Link></li>
            <li><Link className="motion-surface inline-block text-outline-variant hover:translate-x-1 hover:text-white" href="/services#batiment">Bâtiment</Link></li>
            <li><Link className="motion-surface inline-block text-outline-variant hover:translate-x-1 hover:text-white" href="/services">Génie Civil</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5 className="label-caps mb-8 text-on-tertiary-container">Société</h5>
          <ul className="space-y-4 font-hanken text-body-md">
            <li><Link className="motion-surface inline-block text-outline-variant hover:translate-x-1 hover:text-white" href="/a-propos">À propos</Link></li>
            <li><Link className="motion-surface inline-block text-outline-variant hover:translate-x-1 hover:text-white" href="/realisations">Nos réalisations</Link></li>
            <li><Link className="motion-surface inline-block text-outline-variant hover:translate-x-1 hover:text-white" href="/services">Nos engagements</Link></li>
            <li><Link className="motion-surface inline-block text-outline-variant hover:translate-x-1 hover:text-white" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5 className="label-caps mb-8 text-on-tertiary-container">Contact</h5>
          <p className="mb-6 font-hanken text-body-md text-outline-variant">Inscrivez-vous pour recevoir nos actualités projets.</p>
          <form className="flex border-b border-outline/30 pb-2" action="/contact">
            <label className="sr-only" htmlFor="footer-email">Votre email</label>
            <input id="footer-email" className="label-caps w-full border-none bg-transparent text-white outline-none placeholder:text-outline/40 focus:ring-0" placeholder="VOTRE EMAIL" type="email" />
            <button className="text-on-tertiary-container" type="submit" aria-label="Envoyer">›</button>
          </form>
        </div>
      </div>
      <div className="container-shell mt-20 flex flex-col items-center justify-between gap-4 border-t border-outline/10 pt-8 text-center md:flex-row md:text-left">
        <div className="space-y-2">
          <p className="label-caps text-outline-variant">© 2024 URBASPHERE CONTRACTORS. TOUS DROITS RESERVES.</p>
          <p className="label-caps text-outline-variant">
            Designed &amp; developed by{" "}
            <a className="text-on-tertiary-container hover:text-white" href="https://triverseagency.com/" target="_blank" rel="noreferrer">
              Triverseagency
            </a>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link className="label-caps text-outline-variant hover:text-white" href="/contact">Mentions légales</Link>
          <Link className="label-caps text-outline-variant hover:text-white" href="/contact">Confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}
