import { differentials } from "../data/portfolio";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Differentials() {
  return (
    <section className="section-shell section-shell--compact differentials-section" aria-labelledby="differentials-title">
      <div className="site-container">
        <SectionHeading
          eyebrow="Qualidade em cada camada"
          id="differentials-title"
          title="Detalhes que fazem diferença"
          description="Boas decisões técnicas e de produto para entregar hoje sem comprometer o amanhã."
        />

        <div className="differentials-grid">
          {differentials.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={(index % 3) * 55}>
              <article className="differential-card">
                <span className="differential-card__icon"><Icon size={21} aria-hidden="true" /></span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <span className="differential-card__index" aria-hidden="true">0{index + 1}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
