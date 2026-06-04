import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="relative pt-24">
      <section data-reveal className="reveal-on-scroll container-shell relative overflow-hidden pb-12 pt-16 md:pb-24 md:pt-32">
        <div className="absolute right-0 top-0 hidden h-full w-1/2 opacity-20 lg:block">
          <svg fill="none" height="100%" viewBox="0 0 400 400" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 400L400 0M400 400V0H0" stroke="black" strokeWidth="0.5" />
            <line stroke="black" strokeWidth="0.5" x1="100" x2="100" y1="0" y2="400" />
            <line stroke="black" strokeWidth="0.5" x1="0" x2="400" y1="100" y2="100" />
          </svg>
        </div>
        <div className="relative z-10">
          <div className="mb-8 h-1 w-16 bg-on-tertiary-container" />
          <h1 className="headline-section mb-4">Contactez URBASPHERE</h1>
          <p className="body-copy max-w-2xl text-secondary">Entreprise marocaine spécialisée dans les travaux industriels, publics et du bâtiment. Construisons ensemble vos projets de demain avec l'exigence du détail.</p>
        </div>
      </section>

      <section data-reveal className="reveal-on-scroll container-shell grid grid-cols-1 gap-12 pb-24 lg:grid-cols-12 lg:pb-32">
        <div className="space-y-12 lg:col-span-5 lg:space-y-16">
          <div className="space-y-12 border-l-4 border-primary pl-8">
            <Info label="Siège Social" title="Casablanca, Maroc" text="24 Boulevard d'Anfa, Quartier Gauthier, 20250" />
            <Info label="Communication Digitale" title="contact@urbasphere.ma" href="mailto:contact@urbasphere.ma" />
            <Info label="Ligne Directe" title="0664603264" href="tel:+212664603264" />
          </div>
          <a className="motion-surface group relative block overflow-hidden border border-black bg-white p-8 hover:bg-black hover:text-white" href="https://wa.me/212664603264">
            <div className="relative z-10 flex items-center justify-between gap-6">
              <div>
                <p className="label-caps mb-2 text-on-tertiary-container">Réponse Rapide</p>
                <h3 className="font-anton text-headline-md uppercase">WhatsApp Business</h3>
              </div>
              <span className="motion-arrow text-4xl" aria-hidden="true">→</span>
            </div>
          </a>
          <div className="group relative aspect-square w-full overflow-hidden border border-black bg-surface-container">
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaeoKNbHYEEBieH-Q7-YEmPOb5N1oUbey9hu2v32ceZjTgxJcgCOGJ3CrT63_k6Mz9552H-qCuTAFXptIbQzcaKZCWSKNcZbWi9erMGXO2nVGZ2Qtb2hFBTgt8pb1Ey6xjCzdOWbgo5O0v49XR7J7v4HiNukKBQ4E4hpWp96grL_f1aCTv_t5xUW2E-ZNq25B65PlBNIdhupdrMe2FKcoMA-DtOQOk6Gnt-RPfkdBUOchh_olXYaafUmyWIFbRWjPwx4TW8jECMtQ" alt="Carte de Casablanca" fill className="object-cover grayscale brightness-90 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 bg-primary px-6 py-4 text-on-primary label-caps">VOIR SUR GOOGLE MAPS</div>
          </div>
        </div>

        <div className="relative border border-black bg-white p-8 md:p-16 lg:col-span-7">
          <h2 className="mb-12 flex items-center gap-4 font-anton text-headline-md uppercase">
            Nouveau Projet
            <span className="h-0.5 w-12 bg-black" />
          </h2>
          <form className="space-y-10">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <Field label="Nom Complet" placeholder="JEAN DUPONT" />
              <Field label="Email Professionnel" placeholder="CONTACT@ENTREPRISE.MA" type="email" />
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <Field label="Téléphone" placeholder="0664603264" type="tel" />
              <div className="space-y-2">
                <label className="label-caps block text-secondary">Type de Projet</label>
                <select className="w-full border-0 border-b border-black bg-transparent py-4 font-hanken text-body-md outline-none focus:border-on-tertiary-container focus:ring-0">
                  <option>TRAVAUX INDUSTRIELS</option>
                  <option>TRAVAUX PUBLICS</option>
                  <option>BATIMENT RESIDENTIEL</option>
                  <option>GENIE CIVIL</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="label-caps block text-secondary">Détails de votre message</label>
              <textarea className="w-full resize-none border-0 border-b border-black bg-transparent py-4 font-hanken text-body-md uppercase outline-none placeholder:text-outline-variant focus:border-on-tertiary-container focus:ring-0" placeholder="DECRIVEZ VOTRE BESOIN..." rows={4} />
            </div>
            <button className="label-caps motion-surface group flex w-full items-center justify-center gap-4 bg-black px-12 py-5 text-white hover:bg-on-tertiary-container md:w-auto" type="submit">
              ENVOYER LA DEMANDE <span className="motion-arrow" aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function Info({ label, title, text, href }: { label: string; title: string; text?: string; href?: string }) {
  const content = <p className="font-hanken text-headline-sm font-extrabold uppercase tracking-[0.1em] transition-colors hover:text-on-tertiary-container">{title}</p>;
  return (
    <div className="space-y-4">
      <span className="label-caps block text-secondary">{label}</span>
      {href ? <a href={href}>{content}</a> : content}
      {text ? <p className="font-hanken text-body-md text-secondary">{text}</p> : null}
    </div>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div className="space-y-2">
      <label className="label-caps block text-secondary">{label}</label>
      <input className="w-full border-0 border-b border-black bg-transparent py-4 font-hanken text-body-md uppercase outline-none placeholder:text-outline-variant focus:border-on-tertiary-container focus:ring-0" placeholder={placeholder} type={type} />
    </div>
  );
}
