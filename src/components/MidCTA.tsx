import { ArrowRight, Lightbulb } from "lucide-react";
import { Reveal } from "./ui/Reveal";

export function MidCTA() {
  return (
    <section className="mid-cta-section" aria-label="Convite para contato">
      <div className="site-container">
        <Reveal>
          <div className="mid-cta">
            <div className="mid-cta__icon"><Lightbulb size={24} aria-hidden="true" /></div>
            <div>
              <p>Tem uma ideia ou projeto em mente?</p>
              <strong>Posso ajudar a transformar isso em software.</strong>
            </div>
            <a href="#contato">Falar sobre meu projeto <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
