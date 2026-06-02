import Image from "next/image";
import CTAButton from "@/components/CTAButton";

const services = [
  {
    id: "industriels",
    eyebrow: "01. INFRASTRUCTURES CRITIQUES",
    title: "Travaux industriels",
    bullets: ["Charpentes métalliques de haute portée", "Unités de production et complexes logistiques", "Maintenance et réhabilitation technique de sites"],
    image: "/images-update/services/Travaux industriels.webp"
  },
  {
    id: "publics",
    eyebrow: "02. CONNECTIVITE URBAINE",
    title: "Travaux publics",
    bullets: ["Voiries et réseaux divers (VRD)", "Ouvrages d'art et aménagements de zones", "Terrassement de grande masse"],
    image: "/images-update/services/Travaux publics.webp"
  },
  {
    id: "batiment",
    eyebrow: "03. ARCHITECTURE DURABLE",
    title: "Bâtiment",
    bullets: ["Bâtiments tertiaires et administratifs", "Résidences de prestige et complexes hôteliers", "Gros œuvre et finitions architecturales"],
    image: "/images-update/services/Bâtiment.webp"
  }
];

export default function ServicesPage() {
  return (
    <main className="blueprint-grid">
      <section data-reveal className="reveal-on-scroll border-b border-black px-margin-mobile py-24 pt-32 md:px-margin-desktop md:py-32 md:pt-40">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter md:grid-cols-12">
          <div className="md:col-span-8">
            <span className="label-caps mb-4 block text-on-tertiary-container">EXPERTISE &amp; RIGUEUR</span>
            <h1 className="headline-hero">Nos Services</h1>
            <div className="mt-8 h-1 w-24 bg-on-tertiary-container" />
          </div>
          <div className="flex items-end md:col-span-4">
            <p className="body-copy text-secondary">De la conception structurelle complexe aux infrastructures urbaines, nous bâtissons l'avenir avec une précision architecturale et une intégrité technique absolue.</p>
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section data-reveal id={service.id} key={service.id} className="reveal-on-scroll group border-b border-black">
          <div className="mx-auto grid max-w-container-max grid-cols-1 md:grid-cols-12">
            <div className={`flex flex-col justify-center p-margin-mobile md:col-span-6 md:p-margin-desktop ${index === 1 ? "md:order-2" : "md:border-r md:border-black"}`}>
              <span className="label-caps mb-4 text-secondary">{service.eyebrow}</span>
              <h2 className="headline-section mb-8">{service.title}</h2>
              <ul className="mb-12 space-y-4">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-4">
                    <span className="h-2 w-2 shrink-0 bg-on-tertiary-container" />
                    <p className="font-hanken text-body-md">{bullet}</p>
                  </li>
                ))}
              </ul>
              <CTAButton href="/contact" className="w-fit">Demander un devis</CTAButton>
            </div>
            <div className={`relative h-[320px] overflow-hidden md:col-span-6 md:h-auto ${index === 1 ? "md:order-1 md:border-r md:border-black" : ""}`}>
              <Image src={service.image} alt={service.title} fill className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
            </div>
          </div>
        </section>
      ))}

      <section data-reveal className="reveal-on-scroll bg-primary py-24 text-center text-on-primary">
        <div className="container-shell">
          <h3 className="headline-section mb-8">Vous avez un projet ?</h3>
          <p className="body-copy mx-auto mb-12 max-w-2xl text-white/70">Notre bureau d'études et nos équipes opérationnelles sont prêts à transformer vos ambitions architecturales en réalités structurelles durables.</p>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <CTAButton href="/contact" variant="orange" className="px-12 py-5">Demander un devis</CTAButton>
            <CTAButton href="/contact" variant="light" className="border border-black bg-transparent px-12 py-5 text-black hover:bg-black hover:text-white">Nous contacter</CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
