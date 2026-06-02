import Image from "next/image";
import CTAButton from "@/components/CTAButton";

const values = [
  ["MISSION", "Fournir des solutions de construction intégrées qui allient sécurité, innovation technique et respect rigoureux des échéanciers pour nos partenaires institutionnels et privés."],
  ["VISION", "Devenir la référence continentale en matière de construction durable et d'infrastructures lourdes, en repoussant les limites de l'ingénierie marocaine."],
  ["VALEURS", "Intégrité, Rigueur technique, Durabilité et Excellence opérationnelle sont les piliers de chaque pierre que nous posons."]
];

const reasons = ["EXPERTISE TERRAIN", "ORGANISATION", "SUIVI RIGOUREUX", "ENGAGEMENT"];

export default function AProposPage() {
  return (
    <main className="architectural-grid">
      <section data-reveal className="reveal-on-scroll relative flex min-h-[70vh] flex-col justify-end overflow-hidden border-b border-black px-margin-mobile py-24 md:px-margin-desktop">
        <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDON_oWl0QlNv-4iFyzxLsYokm6lWKBdNY0OiGa4Dk9tEfpBHVMFkK6nT8TvNmSE5_j7_L5Ja6YGzkidibKKH3qaINTTU5eZftXNt2o66PSIzkJJHcCy_e0U6tYuutH_yr8p8knar4C_pvOZF__d1PJwn7QIPJieWzhhHdwk8AMgNsyq7ngRcZ6vS7lV9q9QFR6gLIV1pOSVcOPu5k--jHMuJrhzjldGOv5TwlmaiLEGzqcXB09BQl2TrD4X_rJBr5Qdr8PyQEmtws" alt="Structure brutaliste en béton." fill className="-z-10 object-cover opacity-20" />
        <div className="max-w-4xl py-16 md:py-24">
          <div className="mb-8 h-1 w-16 bg-on-tertiary-container" />
          <h1 className="headline-hero mb-4">A PROPOS D’URBASPHERE</h1>
          <p className="font-hanken text-headline-sm uppercase text-secondary">CONSTRUISONS L'EXCELLENCE SUR DES FONDATIONS SOLIDES.</p>
        </div>
      </section>

      <section data-reveal className="reveal-on-scroll border-b border-outline-variant/30 py-24 md:py-32">
        <div className="container-shell grid grid-cols-1 gap-gutter md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="label-caps mb-4 block text-on-tertiary-container">NOTRE HISTOIRE</span>
            <h2 className="font-anton text-headline-lg-mobile uppercase md:text-headline-md">UNE VISION MAROCAINE POUR LE BATIMENT</h2>
          </div>
          <div className="md:col-span-7 md:border-l md:border-outline-variant/30 md:pl-gutter">
            <p className="body-copy mb-6 text-secondary">URBASPHERE CONTRACTORS est une entreprise marocaine de premier plan, dédiée à l'excellence dans les secteurs des travaux industriels, publics et du bâtiment. Notre approche repose sur la fusion entre l'ingénierie moderne et la rigueur structurelle.</p>
            <p className="body-copy text-secondary">Chaque projet est traité comme une œuvre d'architecture durable. Nous ne nous contentons pas de construire ; nous érigeons des infrastructures qui définissent le paysage urbain et industriel de demain.</p>
          </div>
        </div>
      </section>

      <section data-reveal className="reveal-on-scroll bg-surface-container py-24 md:py-32">
        <div className="container-shell grid grid-cols-1 border border-outline/30 md:grid-cols-3">
          {values.map(([title, text]) => (
            <article key={title} className="motion-surface group border border-outline/30 bg-white p-8 hover:border-b-4 hover:border-b-on-tertiary-container md:p-12">
              <div className="mb-8 text-4xl text-on-tertiary-container transition-colors group-hover:text-primary">▧</div>
              <h3 className="mb-6 font-anton text-headline-md uppercase">{title}</h3>
              <p className="font-hanken text-body-md text-secondary">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-on-scroll py-24 md:py-32">
        <div className="container-shell">
          <div className="mb-20">
            <h2 className="headline-section leading-none">POURQUOI CHOISIR<br />URBASPHERE?</h2>
            <div className="mt-8 h-2 w-24 bg-primary" />
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <article key={reason} className="motion-surface flex min-h-[260px] flex-col border border-black bg-white p-8 hover:bg-black hover:text-white">
                <div className="label-caps mb-4 opacity-50">{String(index + 1).padStart(2, "0")}</div>
                <h4 className="mb-4 font-hanken text-headline-sm uppercase">{reason}</h4>
                <p className="font-hanken text-body-md opacity-70">Une approche terrain exigeante, organisée et transparente pour livrer des projets solides.</p>
                <div className="mt-auto pt-8 text-on-tertiary-container">▣</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="reveal-on-scroll bg-primary py-24 text-center text-on-primary md:py-32">
        <h2 className="headline-section mb-12">PRET A CONSTRUIRE VOTRE PROJET ?</h2>
        <CTAButton href="/contact" variant="orange" className="px-12 py-5">NOUS CONTACTER</CTAButton>
      </section>
    </main>
  );
}
