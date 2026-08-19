import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../data/portfolio";
import { isExternalHref } from "../lib/contact";
import { ProjectPreview } from "./ProjectPreview";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Projects() {
  return (
    <section id="projetos" className="section-shell" aria-labelledby="projects-title">
      <div className="site-container">
        <SectionHeading
          eyebrow="Trabalho selecionado"
          id="projects-title"
          title="Projetos em Destaque"
          description="Produtos e sistemas que combinam engenharia, experiência do usuário e soluções para problemas reais."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 70}>
              <article className="project-card">
                <ProjectPreview variant={project.preview} title={project.title} />

                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span>{project.category}</span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tag-list" aria-label={`Tecnologias de ${project.title}`}>
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  {project.liveUrl || project.repositoryUrl ? (
                    <div className="project-card__actions">
                      {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        {...(isExternalHref(project.liveUrl)
                          ? { target: "_blank", rel: "noreferrer noopener" }
                          : {})}
                      >
                        Visualizar projeto
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                      ) : null}

                      {project.repositoryUrl ? (
                        <a
                          className="project-code-link"
                          href={project.repositoryUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`Ver código de ${project.title}`}
                        >
                          <Github size={16} aria-hidden="true" />
                          Código
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
