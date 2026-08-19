import { ArrowDownRight, MessageCircle, Sparkles } from "lucide-react";
import { heroMetrics } from "../data/portfolio";
import { ButtonLink } from "./ui/ButtonLink";
import { DeveloperVisual } from "./ui/DeveloperVisual";
import { SocialLinks } from "./ui/SocialLinks";

const metricPositions = [
  "hero-metric--one",
  "hero-metric--two",
  "hero-metric--three",
  "hero-metric--four",
] as const;

export function Hero() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-light hero-light--primary" aria-hidden="true" />
      <div className="hero-light hero-light--secondary" aria-hidden="true" />

      <div className="site-container hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="hero-kicker__icon">
              <Sparkles size={14} aria-hidden="true" />
            </span>
            <span>Olá, eu sou Augusto Alexandre</span>
            <span aria-hidden="true">👋</span>
          </div>

          <h1 id="hero-title" className="hero-title">
            Transformo ideias em <span className="gradient-text">software.</span>
          </h1>

          <p className="hero-description">
            Desenvolvo aplicações web e sistemas sob medida, do frontend ao backend, com arquitetura sólida,
            performance e experiências simples de usar.
          </p>

          <div className="hero-actions">
            <ButtonLink href="#projetos" icon={ArrowDownRight}>
              Conheça meus projetos
            </ButtonLink>
            <ButtonLink href="#contato" variant="secondary" icon={MessageCircle}>
              Entrar em contato
            </ButtonLink>
          </div>

          <div className="hero-social-row">
            <span>Encontre-me</span>
            <span className="hero-social-row__line" aria-hidden="true" />
            <SocialLinks includeWhatsapp={false} />
          </div>
        </div>

        <div className="hero-visual" aria-label="Apresentação visual e métricas profissionais">
          <div className="hero-disc" aria-hidden="true" />
          <DeveloperVisual />

          <div className="hero-metrics">
            {heroMetrics.map((metric, index) => (
              <div key={metric.label} className={`hero-metric ${metricPositions[index]}`}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">
        <span />
        Scroll para explorar
      </div>
    </section>
  );
}
