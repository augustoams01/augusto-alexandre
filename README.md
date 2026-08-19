# Portfólio — Augusto Alexandre

Landing page profissional construída com React, TypeScript, Tailwind CSS, Vite e Lucide React.

## Executar localmente

```bash
pnpm install
pnpm dev
```

Para gerar a versão de produção:

```bash
pnpm build
```

## Personalização

O conteúdo repetido e os links ficam centralizados em `src/data/portfolio.ts`:

- `siteConfig.contact`: WhatsApp, e-mail, LinkedIn, GitHub e Instagram;
- `metrics` e `heroMetrics`: números e indicadores;
- `projects`: projetos, tecnologias e URLs;
- `experiences`: histórico profissional verificado (mantido vazio enquanto não houver dados publicados);
- `testimonials`: depoimentos reais.

## Identidade visual

O Hero e a seção Sobre utilizam uma composição tecnológica própria, construída em CSS e React. Nenhuma fotografia ou arquivo externo é necessário para publicar o portfólio.

### Antes de publicar

- adicione URLs reais aos projetos quando disponíveis;
- configure a URL canonical definitiva em `index.html`;
- substitua ou exporte o Open Graph em um formato raster, se necessário para a plataforma de hospedagem.
