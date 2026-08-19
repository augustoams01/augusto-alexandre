import type { ProjectPreview as ProjectPreviewVariant } from "../data/portfolio";

interface ProjectPreviewProps {
  variant: ProjectPreviewVariant;
  title: string;
}

function WindowChrome({ label }: { label: string }) {
  return (
    <div className="preview-window__bar">
      <div className="preview-window__dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <span className="preview-window__label">{label}</span>
      <span className="preview-window__status">online</span>
    </div>
  );
}

function CommercePreview() {
  return (
    <>
      <div className="preview-sidebar">
        <span className="preview-logo">AA</span>
        {[0, 1, 2, 3, 4].map((item) => (
          <span className={item === 1 ? "is-active" : ""} key={item} />
        ))}
      </div>
      <div className="preview-main">
        <div className="preview-heading">
          <div>
            <small>Visão geral</small>
            <strong>Gestão comercial</strong>
          </div>
          <button type="button" tabIndex={-1}>Nova venda</button>
        </div>
        <div className="preview-stats">
          <div><small>Receita</small><strong>R$ 84,2k</strong><span>+12,5%</span></div>
          <div><small>Pedidos</small><strong>1.284</strong><span>+8,2%</span></div>
          <div><small>Clientes</small><strong>632</strong><span>+6,4%</span></div>
        </div>
        <div className="preview-chart">
          <div className="preview-chart__copy"><small>Desempenho</small><strong>Últimos 7 meses</strong></div>
          <div className="preview-bars">
            {[34, 52, 45, 68, 59, 82, 74, 92].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function InventoryPreview() {
  return (
    <div className="inventory-layout">
      <div className="preview-heading">
        <div><small>Almoxarifado</small><strong>Controle de estoque</strong></div>
        <span className="inventory-badge">Atualizado agora</span>
      </div>
      <div className="inventory-summary">
        <div className="inventory-ring"><span>82%</span></div>
        <div><small>Capacidade utilizada</small><strong>2.480 itens</strong><span>156 movimentações hoje</span></div>
      </div>
      <div className="inventory-table">
        {[
          ["Material elétrico", "842", "Normal"],
          ["Equipamentos", "394", "Atenção"],
          ["Suprimentos", "1.244", "Normal"],
        ].map(([name, amount, status]) => (
          <div key={name}><span>{name}</span><strong>{amount}</strong><small className={status === "Atenção" ? "is-warning" : ""}>{status}</small></div>
        ))}
      </div>
    </div>
  );
}

function QueuePreview() {
  return (
    <div className="queue-layout">
      <div className="queue-now">
        <small>Senha em atendimento</small>
        <strong>A-024</strong>
        <span>Guichê 04</span>
        <button type="button" tabIndex={-1}>Chamar próxima</button>
      </div>
      <div className="queue-list">
        <div className="queue-list__head"><strong>Próximas senhas</strong><span>12 aguardando</span></div>
        {["P-008", "A-025", "A-026", "P-009"].map((ticket, index) => (
          <div key={ticket}><span>{ticket}</span><small>{index % 2 === 0 ? "Prioridade" : "Convencional"}</small><i>{3 + index * 2} min</i></div>
        ))}
      </div>
    </div>
  );
}

function MentoringPreview() {
  return (
    <div className="mentoring-layout">
      <div className="mentoring-welcome">
        <div><small>Boa tarde, Augusto</small><strong>Continue aprendendo.</strong></div>
        <div className="mentoring-avatar">AA</div>
      </div>
      <div className="mentoring-feature">
        <span className="mentoring-play">▶</span>
        <div><small>Módulo em andamento</small><strong>Arquitetura de aplicações</strong><span>68% concluído</span></div>
        <div className="mentoring-progress"><span /></div>
      </div>
      <div className="mentoring-courses">
        {["Fundamentos", "Projeto prático", "Deploy"].map((course, index) => (
          <div key={course}><span>0{index + 1}</span><strong>{course}</strong><small>{index + 2} aulas</small></div>
        ))}
      </div>
    </div>
  );
}

export function ProjectPreview({ variant, title }: ProjectPreviewProps) {
  return (
    <div className={`project-preview project-preview--${variant}`} role="img" aria-label={`Prévia visual conceitual do projeto ${title}`}>
      <div className="preview-window" aria-hidden="true">
        <WindowChrome label={title} />
        <div className="preview-window__content">
          {variant === "commerce" ? <CommercePreview /> : null}
          {variant === "inventory" ? <InventoryPreview /> : null}
          {variant === "queue" ? <QueuePreview /> : null}
          {variant === "mentoring" ? <MentoringPreview /> : null}
        </div>
      </div>
    </div>
  );
}
