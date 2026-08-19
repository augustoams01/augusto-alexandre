import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { processSteps } from "../data/portfolio";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Process() {
  return (
    <section className="section-shell process-section" aria-labelledby="process-title">
      <div className="site-container">
        <SectionHeading
          eyebrow="Processo"
          id="process-title"
          title="Como transformo uma ideia em produto"
          description="Um processo estruturado para transformar necessidades em produtos digitais funcionais e escaláveis."
        />

        <div className="process-grid">
          {processSteps.map(({ number, title, description, icon: Icon }, index) => (
            <Reveal key={number} delay={index * 60}>
              <article className="process-card">
                <span className="process-card__number" aria-hidden="true">{number}</span>
                <span className="process-card__icon"><Icon size={20} aria-hidden="true" /></span>
                <div className="process-card__copy">
                  <span>Etapa {number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="process-footer">
            <p><CheckCircle2 size={18} aria-hidden="true" /> Produtos confiáveis, centrados no usuário e preparados para evoluir.</p>
            <a href="#contato">Iniciar um projeto <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
