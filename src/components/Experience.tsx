import { ArrowUpRight, CalendarDays } from "lucide-react";
import { experiences } from "../data/portfolio";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Experience() {
  if (experiences.length === 0) return null;

  return (
    <section id="experiencia" className="section-shell experience-section" aria-labelledby="experience-title">
      <div className="site-container">
        <div className="experience-heading-row">
          <SectionHeading
            eyebrow="Trajetória"
            id="experience-title"
            title="Experiência profissional"
            description="Responsabilidades, contexto e impacto em produtos desenvolvidos ao longo da minha trajetória."
            align="left"
          />
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <Reveal key={`${experience.company}-${index}`}>
              <article className="experience-item">
                <div className="experience-item__marker"><span /></div>
                <div className="experience-item__main">
                  <span className="experience-item__company">{experience.company}</span>
                  <h3>{experience.role}</h3>
                  <p>{experience.description}</p>
                  <div className="tag-list">
                    {experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                </div>
                <div className="experience-item__period">
                  <CalendarDays size={16} aria-hidden="true" />
                  <span>{experience.period}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <a className="experience-contact-link" href="#contato">
          Conversar sobre uma oportunidade <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
