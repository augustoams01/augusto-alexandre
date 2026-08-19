import { techGroups } from "../data/portfolio";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function TechStack() {
  return (
    <section className="section-shell section-shell--compact stack-section" aria-labelledby="stack-title">
      <div className="site-container">
        <SectionHeading
          eyebrow="Ferramentas e tecnologias"
          id="stack-title"
          title="Minha Stack"
          description="Tecnologias escolhidas de acordo com o contexto, o produto e a escala de cada desafio."
        />

        <div className="stack-grid">
          {techGroups.map(({ category, description, icon: Icon, items }, index) => (
            <Reveal key={category} delay={index * 60}>
              <article className="stack-card">
                <div className="stack-card__heading">
                  <span><Icon size={23} aria-hidden="true" /></span>
                  <div><h3>{category}</h3><p>{description}</p></div>
                </div>
                <div className="stack-card__items">
                  {items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
