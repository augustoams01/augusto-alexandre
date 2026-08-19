import { Quote, Sparkle } from "lucide-react";
import { testimonials } from "../data/portfolio";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-shell testimonials-section" aria-labelledby="testimonials-title">
      <div className="site-container">
        <SectionHeading
          eyebrow="Confiança construída na prática"
          id="testimonials-title"
          title="O que dizem sobre meu trabalho"
          description="Feedbacks de profissionais que acompanharam meu trabalho de perto."
        />

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 70}>
              <article className={`testimonial-card ${index === 1 ? "testimonial-card--featured" : ""}`}>
                <div className="testimonial-card__top">
                  <Quote size={27} aria-hidden="true" />
                  <div className="testimonial-rating" aria-hidden="true">
                    {[0, 1, 2].map((star) => <Sparkle key={star} size={12} />)}
                  </div>
                </div>
                <blockquote>{testimonial.quote}</blockquote>
                <div className="testimonial-card__author">
                  <span className="testimonial-avatar" aria-hidden="true">{testimonial.initials}</span>
                  <div><strong>{testimonial.name}</strong><small>{testimonial.role}</small></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="testimonials-note">Textos redigidos com apoio de IA e publicados com autorização das pessoas identificadas.</p>
      </div>
    </section>
  );
}
