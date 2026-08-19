import { BriefcaseBusiness, MapPin, Radio } from "lucide-react";
import { deliveryPillars, siteConfig } from "../data/portfolio";
import { DeveloperVisual } from "./ui/DeveloperVisual";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { SocialLinks } from "./ui/SocialLinks";

export function About() {
  return (
    <section id="sobre" className="section-shell about-section" aria-labelledby="about-title">
      <div className="site-container">
        <SectionHeading
          eyebrow="Quem está por trás do código"
          id="about-title"
          title="Sobre mim"
          description="Engenharia, produto e experiência trabalhando juntos para criar software que faz sentido."
        />

        <div className="about-layout">
          <Reveal className="about-profile-column">
            <article className="about-profile-card">
              <div className="about-visual-wrap">
                <DeveloperVisual variant="about" />
              </div>
              <div className="about-profile-card__body">
                <span className="availability-badge"><Radio size={13} aria-hidden="true" /> {siteConfig.availability}</span>
                <h3>{siteConfig.name}</h3>
                <p>{siteConfig.role}</p>
                <div className="about-profile-facts">
                  <span><MapPin size={15} aria-hidden="true" /> {siteConfig.location}</span>
                  <span><BriefcaseBusiness size={15} aria-hidden="true" /> Projetos e oportunidades</span>
                </div>
                <SocialLinks includeWhatsapp={false} />
              </div>
            </article>
          </Reveal>

          <div className="about-content-column">
            <Reveal>
              <article className="about-copy-card">
                <span className="eyebrow">Apresentação</span>
                <h3>Olá, sou Augusto.</h3>
                <p>
                  Sou Desenvolvedor Fullstack focado na criação de aplicações web, plataformas e sistemas personalizados.
                  Trabalho tanto no frontend quanto no backend, buscando equilibrar arquitetura, performance, segurança e
                  experiência do usuário.
                </p>
                <p>
                  Ao longo da minha trajetória participei do desenvolvimento de sistemas empresariais, plataformas de
                  gestão, aplicações institucionais e produtos digitais utilizados em cenários reais.
                </p>
              </article>
            </Reveal>

            <div className="about-pillars">
              {deliveryPillars.map(({ label, icon: Icon }, index) => (
                <Reveal key={label} delay={index * 50}>
                  <div className="about-pillar"><Icon size={18} aria-hidden="true" /><span>{label}</span></div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <blockquote className="about-quote">
                <span aria-hidden="true">“</span>
                <p>Meu trabalho conecta decisões técnicas sólidas a uma experiência que as pessoas realmente querem usar.</p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
