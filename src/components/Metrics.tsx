import { metrics } from "../data/portfolio";
import { Reveal } from "./ui/Reveal";

export function Metrics() {
  return (
    <section className="metrics-section" aria-label="Métricas profissionais">
      <div className="site-container">
        <Reveal>
          <div className="metrics-panel">
            {metrics.map((metric) => (
              <div className="metric-item" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
