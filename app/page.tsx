import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";

const heroImage = "https://lh3.googleusercontent.com/aida/AP1WRLvatzpXOKFOogZIxXRUKNxw3vLZyonOyhzMYcxlQxsbp6ch9hH_9S02yZGereNb6wzLpZ-28Xy-seydPYW6nQtWEzzSDvr9NYApSreo9jpoLtcSU6bME_nzn_DTMejPV3E_VEESONJqOaDoH4wed3ADBpfaKwMObvVIDUpFa9YDH-LUNFwpSP7kpNCK_lh6ulrGUSBbhn8scHcS3I6ijs2f0aVRLucb482W7-9tUWWPBq-vr1rBydt63jQ";

const domains = [
  {
    title: "Travaux Industriels",
    href: "/services#industriels",
    text: "Solutions globales pour les infrastructures de production, hangars et sites techniques complexes.",
    image: "/images-update/travaux-Industriels.webp"
  },
  {
    title: "Travaux Publics",
    href: "/services#publics",
    text: "Aménagement urbain, routes et ouvrages d'art au service du développement des territoires.",
    image: "/images-update/travaux-publics.webp"
  },
  {
    title: "Bâtiment",
    href: "/services#batiment",
    text: "Construction résidentielle et tertiaire alliant modernité architecturale et durabilité structurelle.",
    image: "/images-update/batiment.webp"
  }
];

const stats = [
  ["150+", "Projets terminés"],
  ["12", "Années d'expertise"],
  ["85", "Équipes dédiées"],
  ["100%", "Satisfaction client"]
];

export default function HomePage() {
  return (
    <main>
      <section data-reveal className="reveal-on-scroll blueprint-grid relative flex min-h-screen items-center overflow-hidden border-b border-outline/20 pt-24">
        <Image src={heroImage} alt="Structure architecturale en béton et acier." fill priority className="object-cover grayscale opacity-20" />
        <div className="structural-line-v absolute bottom-0 left-margin-desktop top-0 hidden md:block" />
        <div className="structural-line-v absolute bottom-0 right-margin-desktop top-0 hidden md:block" />
        <div className="container-shell relative z-10 flex flex-col items-center gap-16 py-28 md:flex-row md:py-32">
          <div className="md:w-3/5">
            <div className="mb-6 h-1 w-16 bg-on-tertiary-container" />
            <h1 className="headline-hero mb-8 text-primary">
              CONSTRUISONS DES PROJETS <span className="text-on-tertiary-container">SOLIDES</span>, DURABLES ET MAITRISES.
            </h1>
            <p className="body-copy mb-10 max-w-xl text-secondary">
              Entreprise marocaine spécialisée dans les travaux industriels, publics et du bâtiment. Nous transformons les visions architecturales en infrastructures pérennes.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <CTAButton href="/services" className="px-10 py-5">Découvrir nos services</CTAButton>
              <CTAButton href="/contact" variant="secondary" className="px-10 py-5">Nous contacter</CTAButton>
            </div>
          </div>
          <div className="relative md:w-2/5">
            <div className="border border-primary p-2">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUpqQrTBESUoiMN-0hyZmQnPf9Ub1lJRU3G5_Cvjg80_7VRSwMjL2wgJjPgN8gj96sgaHTAJtvfxaVPmXkQw1rX_RA4mtjk50mB9ZSFFa8DwdJjp7rDIDA5YMr38e_ivwIZleQQGT_CmeJFIDWBM-JR0Zbd0_Y0hiu2zX-sp-olc9sjvD2EEj_Bpcc3IjgyHKU7d_iB0btD9_gKQJqq3R6eXcwyq8oC8SuPZCt7L50H8gPKyvQ5GXDULhJ9ac5sgYdy1qtrHxYKKk" alt="Façade moderne en verre et béton." width={620} height={740} className="h-auto w-full object-cover grayscale" />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden bg-primary p-8 text-white lg:block">
              <p className="font-anton text-headline-md leading-none">15+</p>
              <p className="label-caps mt-2">Années d'expertise</p>
            </div>
          </div>
        </div>
      </section>

      <section data-reveal className="reveal-on-scroll border-b border-outline/10 bg-surface-container-low py-20 md:py-24">
        <div className="container-shell grid grid-cols-2 gap-x-gutter gap-y-12 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="flex flex-col items-center text-center">
              <span className="mb-2 font-anton text-headline-md text-primary">{value}</span>
              <div className="mb-4 h-0.5 w-8 bg-on-tertiary-container" />
              <span className="label-caps text-secondary">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-on-scroll bg-white py-24 md:py-32">
        <div className="container-shell">
          <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="label-caps mb-4 block text-on-tertiary-container">Expertise métier</span>
              <h2 className="headline-section text-primary">NOS DOMAINES D'INTERVENTION</h2>
            </div>
            <div className="structural-line-h hidden w-1/3 md:block" />
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {domains.map((domain) => (
              <article key={domain.title} className="group">
                <div className="relative mb-6 aspect-[4/5] overflow-hidden">
                  <Image src={domain.image} alt={domain.title} fill className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                </div>
                <h3 className="mb-4 font-hanken text-headline-sm uppercase">{domain.title}</h3>
                <p className="mb-6 font-hanken text-body-md text-secondary">{domain.text}</p>
                <Link className="label-caps group/link flex items-center gap-2 text-primary transition-colors group-hover:text-on-tertiary-container" href={domain.href}>
                  VOIR PLUS <span className="motion-arrow" aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="reveal-on-scroll bg-surface-container py-24 md:py-32">
        <div className="container-shell">
          <div className="mb-20 text-center">
            <span className="label-caps mb-4 block text-on-tertiary-container">Nos engagements</span>
            <h2 className="headline-section text-primary">POURQUOI NOUS CHOISIR ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {["Expertise Technique", "Équipement de pointe", "Respect des délais", "Engagement Sécurité"].map((item) => (
              <div key={item} className="motion-surface border-b border-outline/20 p-8 hover:bg-white md:border-r lg:border-r-0">
                <div className="mb-6 text-4xl text-on-tertiary-container">▣</div>
                <h4 className="mb-4 font-hanken text-headline-sm uppercase">{item}</h4>
                <p className="font-hanken text-body-md text-secondary">Une exigence opérationnelle constante pour garantir qualité, sécurité et maîtrise sur chaque chantier.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="reveal-on-scroll relative overflow-hidden bg-primary py-24 text-center text-white md:py-32">
        <div className="container-shell relative z-10">
          <h2 className="headline-section mb-12">PRET A BATIR VOTRE PROCHAIN PROJET ?</h2>
          <p className="body-copy mx-auto mb-16 max-w-2xl text-white/70">Discutons de vos ambitions et transformons vos idées en structures durables.</p>
          <CTAButton href="/contact" variant="light" className="px-12 py-6">CONTACTEZ-NOUS</CTAButton>
        </div>
      </section>
    </main>
  );
}
