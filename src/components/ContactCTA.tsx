import { ArrowDownLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { ButtonLink } from "./ui/ButtonLink";
import { Reveal } from "./ui/Reveal";
import { SocialLinks } from "./ui/SocialLinks";

export function ContactCTA() {
  return (
    <section id="contato" className="contact-section" aria-labelledby="contact-title">
      <div className="site-container">
        <Reveal>
          <div className="contact-banner">
            <div className="contact-banner__grid" aria-hidden="true" />
            <div className="contact-banner__orb contact-banner__orb--one" aria-hidden="true" />
            <div className="contact-banner__orb contact-banner__orb--two" aria-hidden="true" />
            <div className="contact-banner__beam" aria-hidden="true" />

            <div className="contact-banner__content">
              <span className="contact-banner__kicker"><MessageCircle size={15} aria-hidden="true" /> Vamos construir algo relevante</span>
              <h2 id="contact-title">Sua ideia. Minha experiência. <span>Um produto pronto para crescer.</span></h2>
              <p>Estou disponível para projetos, oportunidades profissionais e desenvolvimento de soluções digitais.</p>
              <div className="contact-banner__actions">
                <ButtonLink href="#contato" icon={ArrowDownLeft}>Vamos conversar</ButtonLink>
                <ButtonLink href="#projetos" variant="secondary" icon={ArrowUpRight}>Ver projetos</ButtonLink>
              </div>
            </div>

            <div id="contact-channels" className="contact-channels">
              <p>Escolha seu canal preferido</p>
              <SocialLinks showLabels />
              <small>Fale comigo pelo canal que for mais conveniente para você.</small>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
