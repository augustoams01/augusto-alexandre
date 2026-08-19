import { services } from "../data/portfolio";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Services() {
  return (
    <section id="servicos" className="section-shell section-shell--compact" aria-labelledby="services-title">
      <div className="site-container">
        <SectionHeading
          eyebrow="Da estratégia à entrega"
          id="services-title"
          title="O que eu posso desenvolver"
          description="Soluções digitais de ponta a ponta, desde a arquitetura até a experiência final do usuário."
        />

        <div className="services-grid">
          {services.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 60}>
              <article className="service-card">
                <div className="service-card__visual" aria-hidden="true">
                  <div className="service-card__grid" />
                  <span className="service-card__icon-ring">
                    <Icon size={46} strokeWidth={1.25} />
                  </span>
                  <span className="service-card__pulse" />
                </div>
                <div className="service-card__copy">
                  <span className="service-card__number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
