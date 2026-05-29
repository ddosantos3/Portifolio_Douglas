# Portfólio Douglas Santos

Portfólio profissional estático de Douglas Santos, com posicionamento em sistemas corporativos, SQL, automação, dados e IA aplicada. A interface foi organizada para comunicar experiência real, projetos próprios e evolução técnica de forma moderna, objetiva e recrutável.

## Estrutura

```text
Portifolio_Douglas/
├── assets/
│   ├── images/
│   │   └── Douglas.png
│   ├── docs/
│   │   └── Curriculo_Douglas_Santos.pdf
│   └── icons/
│
├── src/
│   ├── styles/
│   │   └── style.css
│   ├── scripts/
│   │   └── main.js
│   └── data/
│       └── portfolio-data.js
│
├── index.html
├── README.md
├── AGENTS.md
└── .jarvis/
```

## Como rodar localmente

O site é estático e pode ser aberto diretamente pelo `index.html`.

Para servir via HTTP local:

```bash
python3 -m http.server 4173
```

Depois acesse:

```text
http://localhost:4173
```

## Onde editar

- Conteúdo de projetos, competências, certificações, experiência, stack e cards: `src/data/portfolio-data.js`
- Estilos e responsividade: `src/styles/style.css`
- Animações, renderização dos dados, menu, smooth scroll e interações: `src/scripts/main.js`
- Metadados SEO, estrutura semântica e seções principais: `index.html`
- Foto principal: `assets/images/Douglas.png`
- Currículo em PDF: `assets/docs/Curriculo_Douglas_Santos.pdf`

## Formulário de contato

O formulário flutuante usa Netlify Forms. Após o deploy, confira no painel do Netlify se o formulário `portfolio-contact` foi detectado.

Para receber os contatos por e-mail:

1. Acesse o projeto no Netlify.
2. Confira se a detecção de formulários está ativa em `Forms`.
3. Vá em `Project configuration > Notifications > Emails and webhooks > Form submission notifications`.
4. Crie uma notificação de formulário para `ddosantosmkt@gmail.com`.

As submissões também ficam disponíveis no painel do Netlify em `Forms`.

## Tecnologias usadas

- HTML5 semântico
- CSS3 com darkmorphism, glassmorphism, grid técnico e motion sutil
- JavaScript modular em arquivo separado
- Netlify Forms para captura de contatos
- GSAP + ScrollTrigger via CDN, com fallback por IntersectionObserver
- Lenis via CDN para smooth scroll, com fallback nativo
- Lucide Icons via CDN
- Google Fonts: Sora, Inter e JetBrains Mono

## Conteúdo principal

- Hero premium com foto, status e cards técnicos flutuantes.
- Sobre com foco em sistemas, dados, automação e IA aplicada.
- Competências principais em cards modernos.
- Projetos em destaque:
  - J.A.R.V.I.S — Ecossistema de Agentes e Skills
  - Validador Fiscal integrado à Tecnospeed
  - Agente RAG para Suporte Corporativo
  - MacroFlow
  - Automação Discord + Supabase
- Experiência profissional em timeline.
- Certificações e formação complementar.
- Stack e ferramentas por domínio.
- Como trabalho.
- Contato com e-mail, telefone, LinkedIn, GitHub e currículo.

## Links

- Portfólio: https://douglassantosportifolio.netlify.app/
- GitHub: https://github.com/ddosantos3
- LinkedIn: https://www.linkedin.com/in/douglas-santos-8399263ab
- E-mail: mailto:ddosantosmkt@gmail.com

## Próximos passos

- Publicar a nova estrutura no GitHub/Netlify.
- Vincular repositórios públicos quando os projetos Validador Fiscal Tecnospeed, Agente RAG e Automação Discord + Supabase estiverem organizados.
- Revisar visualmente no navegador após deploy para conferir renderização de fontes, CDN e imagem social.
