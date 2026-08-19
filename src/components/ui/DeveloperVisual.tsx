import { Braces, Code2, Database, Layers3 } from "lucide-react";

interface DeveloperVisualProps {
  variant?: "hero" | "about";
}

export function DeveloperVisual({ variant = "hero" }: DeveloperVisualProps) {
  return (
    <div
      className={`developer-visual developer-visual--${variant}`}
      role="img"
      aria-label="Identidade visual de Augusto Alexandre, desenvolvedor Fullstack"
    >
      <div className="developer-grid" aria-hidden="true" />
      <div className="developer-orbit developer-orbit--outer" aria-hidden="true" />
      <div className="developer-orbit developer-orbit--inner" aria-hidden="true" />

      <div className="developer-core" aria-hidden="true">
        <span className="developer-core__label">
          <Code2 size={14} /> Fullstack
        </span>
        <strong>AA.</strong>
        <p>Produto <i /> Código <i /> Escala</p>
      </div>

      <div className="developer-stack" aria-hidden="true">
        <span><Braces size={16} /></span>
        <span><Database size={16} /></span>
        <span><Layers3 size={16} /></span>
      </div>

      <div className="developer-console" aria-hidden="true">
        <div className="developer-console__bar">
          <span /><span /><span />
          <small>system.ready</small>
        </div>
        <code>augusto.<b>build</b>(<em>"ideas"</em>)</code>
        <div className="developer-console__progress"><span /></div>
      </div>

      <span className="developer-code developer-code--one" aria-hidden="true">&lt;ship /&gt;</span>
      <span className="developer-code developer-code--two" aria-hidden="true">01001010</span>
    </div>
  );
}
