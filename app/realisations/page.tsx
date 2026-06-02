"use client";

import Image from "next/image";
import { useState } from "react";
import CTAButton from "@/components/CTAButton";

const projects = [
  ["Travaux Industriels", "Projet Industriel", "/images-update/Réalisations/Projet Industriel.webp"],
  ["Travaux Publics", "Infrastructure Publique", "/images-update/Réalisations/Infrastructure Publique.webp"],
  ["Batiment", "Construction Batiment", "/images-update/Réalisations/Construction Bâtiment.webp"],
  ["Genie Civil", "Structure Beton", "/images-update/Réalisations/Structure Béton.webp"],
  ["Amenagement", "Amenagement Exterieur", "/images-update/Réalisations/Aménagement Extérieur.webp"],
  ["Technique", "Chantier Technique", "/images-update/Réalisations/Chantier Technique.webp"]
];

const filters = ["Tous", "Travaux industriels", "Travaux publics", "Batiment"];

export default function RealisationsPage() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const filteredProjects =
    activeFilter === "Tous"
      ? projects
      : projects.filter(([category]) => category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <main className="architectural-grid">
      <section data-reveal className="reveal-on-scroll container-shell pb-16 pt-32 md:pt-40">
        <div className="flex flex-col items-start gap-12 border-b border-black pb-12 md:flex-row md:items-end">
          <div className="w-full md:w-2/3">
            <span className="label-caps mb-4 block text-on-tertiary-container">PORTFOLIO</span>
            <h1 className="headline-hero">Nos realisations</h1>
          </div>
          <div className="w-full md:w-1/3">
            <p className="body-copy text-secondary">L'excellence structurelle mise en œuvre à travers des projets d'envergure. Découvrez notre expertise en génie civil et construction industrielle.</p>
          </div>
        </div>
      </section>

      <section data-reveal className="reveal-on-scroll container-shell overflow-x-auto py-8">
        <div className="flex gap-8 whitespace-nowrap md:gap-12">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`label-caps pb-2 ${
                activeFilter === filter ? "border-b-2 border-black text-primary" : "text-secondary hover:text-primary"
              }`}
              type="button"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-on-scroll container-shell py-16">
        <div className="grid grid-cols-1 gap-x-gutter gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map(([category, title, image], index) => (
            <article key={title} className={`group ${index === 1 || index === 5 ? "md:mt-12" : ""} ${index === 3 ? "lg:-mt-12" : ""}`}>
              <div className="relative mb-6 aspect-[4/5] overflow-hidden border border-black">
                <Image src={image} alt={title} fill className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
              </div>
              <span className="font-hanken text-[12px] font-extrabold uppercase tracking-[0.1em] text-on-tertiary-container">{category}</span>
              <h3 className="mt-2 font-anton text-headline-md uppercase">{title}</h3>
              <div className="label-caps mt-4 flex items-center gap-2">Voir le projet <span className="motion-arrow" aria-hidden="true">→</span></div>
              <div className="mt-4 h-1 w-0 bg-on-tertiary-container transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-on-scroll overflow-hidden bg-primary py-24 text-white">
        <div className="container-shell flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="headline-section mb-8">Pret a batir <br />votre vision ?</h2>
            <p className="body-copy max-w-md text-outline-variant">De la conception à la réalisation, nous sommes vos partenaires pour vos projets les plus complexes.</p>
          </div>
          <div className="md:w-1/2 md:text-right">
            <CTAButton href="/contact" variant="light" className="border-2 border-black bg-transparent px-12 py-6 text-black hover:bg-black hover:text-white">Demarrer un projet</CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
