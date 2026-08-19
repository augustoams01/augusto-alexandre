import { Asterisk } from "lucide-react";
import { technologies } from "../data/portfolio";

function TechnologyTrack({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="technology-track" aria-hidden={hidden || undefined}>
      {technologies.map((technology) => (
        <div className="technology-item" key={`${hidden ? "duplicate-" : ""}${technology}`}>
          <Asterisk size={15} aria-hidden="true" />
          <span>{technology}</span>
        </div>
      ))}
    </div>
  );
}

export function Technologies() {
  return (
    <section className="technologies-section" aria-labelledby="technologies-title">
      <div className="site-container">
        <p id="technologies-title" className="technologies-label">
          Tecnologias que fazem parte do meu dia a dia
        </p>
        <div className="technology-marquee">
          <div className="technology-marquee__inner">
            <TechnologyTrack />
            <TechnologyTrack hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
