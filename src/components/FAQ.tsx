import { Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "../data/portfolio";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section className="section-shell faq-section" aria-labelledby="faq-title">
      <div className="site-container faq-container">
        <SectionHeading
          eyebrow="FAQ"
          id="faq-title"
          title="Perguntas Frequentes"
          description="Respostas objetivas para as dúvidas mais comuns sobre projetos e formas de trabalho."
        />

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = faq.id === openId;
            const answerId = `${faq.id}-answer`;
            return (
              <Reveal key={faq.id} delay={Math.min(index * 45, 180)}>
                <article className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-item__icon"><Plus size={18} aria-hidden="true" /></span>
                    </button>
                  </h3>
                  <div id={answerId} className="faq-answer" data-open={isOpen} aria-hidden={!isOpen}>
                    <div><p>{faq.answer}</p></div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
