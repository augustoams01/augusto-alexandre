import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  Blocks,
  Braces,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Globe2,
  Layers3,
  LayoutTemplate,
  LockKeyhole,
  MonitorSmartphone,
  PackageCheck,
  PanelsTopLeft,
  PlugZap,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TerminalSquare,
  Workflow,
} from "lucide-react";

export type ContactKey = "whatsapp" | "email" | "linkedin" | "github" | "instagram";

export type ContactConfig = Record<ContactKey, string>;

export type ProjectPreview = "commerce" | "inventory" | "queue" | "mentoring";

export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  technologies: readonly string[];
  preview: ProjectPreview;
  liveUrl?: string;
  repositoryUrl?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Metric {
  value: string;
  label: string;
}

export interface ProcessStep {
  number: `0${1 | 2 | 3 | 4}`;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TechGroup {
  category: string;
  description: string;
  icon: LucideIcon;
  items: readonly string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: readonly string[];
}

export interface Differential {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const siteConfig = {
  name: "Augusto Alexandre",
  initials: "AA.",
  role: "Desenvolvedor Fullstack",
  location: "Brasil",
  availability: "Disponibilidade sob consulta",
  contact: {
    whatsapp: "+55 84 98758-4544",
    email: "augustoams01@gmail.com",
    linkedin: "https://www.linkedin.com/in/augusto-alexandre-41005b252/",
    github: "https://github.com/augustoams01",
    instagram: "https://www.instagram.com/greenbox.io/",
  } satisfies ContactConfig,
} as const;

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;

export const technologies = [
  "React",
  "Laravel",
  "Java",
  "Python",
  "Next.js",
  "Angular",
  "Vue.js",
  "Docker",
  "MySQL",
  "PostgreSQL",
] as const;

// Atualize estes números com as métricas reais do portfólio.
export const metrics: readonly Metric[] = [
  { value: "6+", label: "Anos desenvolvendo" },
  { value: "20+", label: "Projetos desenvolvidos" },
  { value: "10+", label: "Tecnologias" },
  { value: "100%", label: "Foco em qualidade" },
];

export const heroMetrics: readonly Metric[] = [
  { value: "6+ anos", label: "Experiência com desenvolvimento" },
  { value: "20+", label: "Projetos desenvolvidos" },
  { value: "10+", label: "Tecnologias dominadas" },
  { value: "Fullstack", label: "Frontend + Backend" },
];

export const projects: readonly Project[] = [
  {
    id: "gestao-comercial",
    category: "Sistema empresarial",
    title: "Sistema de Gestão Comercial",
    description:
      "Aplicação completa para gerenciar clientes, produtos, vendas, orçamentos e operações comerciais.",
    technologies: ["Laravel", "React", "MySQL", "Tailwind"],
    preview: "commerce",
  },
  {
    id: "almoxarifado",
    category: "Operações e estoque",
    title: "Sistema de Almoxarifado",
    description:
      "Controle de materiais, estoque, movimentações e rotinas internas em uma experiência centralizada.",
    technologies: ["Laravel", "React", "MySQL"],
    preview: "inventory",
  },
  {
    id: "fila-atendimento",
    category: "Fluxo de atendimento",
    title: "Sistema de Fila de Atendimento",
    description:
      "Solução para organizar senhas, prioridades e o fluxo operacional de equipes de atendimento.",
    technologies: ["Java", "Web", "Banco de Dados"],
    preview: "queue",
  },
  {
    id: "plataforma-mentoria",
    category: "Educação digital",
    title: "Plataforma de Mentoria",
    description:
      "Ambiente completo para gerenciamento de alunos, aulas, módulos, progresso e conteúdos digitais.",
    technologies: ["Laravel", "React", "Tailwind"],
    preview: "mentoring",
  },
];

export const services: readonly Service[] = [
  {
    title: "Desenvolvimento Web",
    description: "Sistemas web completos, modernos, seguros e preparados para escalar.",
    icon: Code2,
  },
  {
    title: "Sistemas Empresariais",
    description: "Softwares personalizados para automatizar processos e simplificar operações.",
    icon: PanelsTopLeft,
  },
  {
    title: "Landing Pages",
    description: "Experiências profissionais com foco em performance, clareza e conversão.",
    icon: LayoutTemplate,
  },
  {
    title: "APIs e Integrações",
    description: "APIs REST e integrações consistentes entre serviços, dados e plataformas.",
    icon: PlugZap,
  },
];

export const processSteps: readonly ProcessStep[] = [
  {
    number: "01",
    title: "Descoberta",
    description: "Entendimento do negócio, requisitos, usuários e objetivos do projeto.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Arquitetura",
    description: "Definição da solução, tecnologias, dados e estrutura da aplicação.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Implementação do frontend, backend, integrações e funcionalidades.",
    icon: Braces,
  },
  {
    number: "04",
    title: "Entrega e evolução",
    description: "Testes, deploy, monitoramento, suporte e ciclos contínuos de melhoria.",
    icon: Rocket,
  },
];

export const techGroups: readonly TechGroup[] = [
  {
    category: "Frontend",
    description: "Interfaces rápidas e consistentes",
    icon: MonitorSmartphone,
    items: ["React", "Next.js", "Angular", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    description: "Regras de negócio e serviços robustos",
    icon: ServerCog,
    items: ["Laravel", "PHP", "Java", "Python", "Django", "APIs REST"],
  },
  {
    category: "Banco de Dados",
    description: "Dados organizados para crescer",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "SQL"],
  },
  {
    category: "DevOps / Ferramentas",
    description: "Fluxo moderno de desenvolvimento",
    icon: TerminalSquare,
    items: ["Docker", "Git", "GitHub", "Linux", "Vite"],
  },
];

// Inclua aqui somente experiências profissionais verificadas.
export const experiences: readonly Experience[] = [];

export const differentials: readonly Differential[] = [
  {
    title: "Arquitetura",
    description: "Código organizado e preparado para evoluir sem perder consistência.",
    icon: Layers3,
  },
  {
    title: "Performance",
    description: "Aplicações rápidas, eficientes e orientadas aos Core Web Vitals.",
    icon: Gauge,
  },
  {
    title: "Segurança",
    description: "Boas práticas para proteger a aplicação, seus acessos e seus dados.",
    icon: LockKeyhole,
  },
  {
    title: "Experiência do usuário",
    description: "Interfaces claras, intuitivas e pensadas para tarefas do mundo real.",
    icon: Accessibility,
  },
  {
    title: "Responsividade",
    description: "Uma experiência consistente em desktop, tablet e celular.",
    icon: Smartphone,
  },
  {
    title: "Manutenibilidade",
    description: "Componentes reutilizáveis, padrões claros e menor custo de evolução.",
    icon: GitBranch,
  },
];

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "Augusto reúne responsabilidade técnica e clareza para conduzir o desenvolvimento. Ele entende a necessidade antes de propor a solução, organiza bem o trabalho e mantém uma comunicação que transmite segurança.",
    name: "André",
    role: "Diretor do Departamento de TI · Coren",
    initials: "AN",
  },
  {
    quote:
      "O diferencial do Augusto está na escuta e na atenção à experiência de quem vai usar o sistema. Ele transforma demandas complexas em soluções claras, funcionais e fáceis de acompanhar.",
    name: "Anna",
    role: "Diretora de Rede de TI · Coren",
    initials: "AA",
  },
  {
    quote:
      "Augusto fala a linguagem do negócio sem perder a qualidade técnica. É objetivo, comprometido e cuidadoso em cada etapa, o que torna a parceria simples e confiável.",
    name: "Rafael",
    role: "Proprietário · Editora Primeiro Lugar",
    initials: "RA",
  },
];

export const faqs: readonly FAQItem[] = [
  {
    id: "tipos-de-projeto",
    question: "Que tipo de projeto você desenvolve?",
    answer:
      "Desenvolvo landing pages, sites institucionais, sistemas web, plataformas empresariais, dashboards, APIs e soluções personalizadas.",
  },
  {
    id: "projetos-do-zero",
    question: "Você trabalha com projetos do zero?",
    answer:
      "Sim. Posso participar desde o levantamento inicial e definição da arquitetura até o desenvolvimento, deploy e manutenção.",
  },
  {
    id: "apenas-frontend",
    question: "Você trabalha apenas com frontend?",
    answer:
      "Não. Trabalho como Desenvolvedor Fullstack, podendo atuar tanto no frontend quanto no backend.",
  },
  {
    id: "prazo",
    question: "Quanto tempo leva para desenvolver um projeto?",
    answer:
      "O prazo depende da complexidade, quantidade de funcionalidades e integrações necessárias. Após entender o escopo consigo apresentar uma estimativa mais precisa.",
  },
  {
    id: "suporte",
    question: "Você oferece suporte após a entrega?",
    answer:
      "Sim. Dependendo do projeto, é possível contratar suporte, manutenção e evolução contínua da aplicação.",
  },
  {
    id: "comecar",
    question: "Como podemos começar?",
    answer:
      "Entre em contato e descreva brevemente sua ideia ou necessidade. A partir disso podemos avaliar o projeto, requisitos, prazo e melhor solução técnica.",
  },
];

export const deliveryPillars = [
  { label: "Produto", icon: PackageCheck },
  { label: "Código", icon: Blocks },
  { label: "Web", icon: Globe2 },
  { label: "Segurança", icon: ShieldCheck },
] as const;
