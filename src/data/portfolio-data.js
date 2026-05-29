window.portfolioData = {
  focusCards: [
    {
      title: "Análise de Sistemas",
      meta: "Diagnóstico • Regras • Produto",
      description: "Entendimento de problemas, organização de evidências e apoio à evolução de sistemas.",
      icon: "search-check",
      tags: ["sistemas", "produto", "diagnóstico"]
    },
    {
      title: "Dados e Automação",
      meta: "SQL • Python • Integrações",
      description: "Uso de banco de dados, scripts e automações para reduzir esforço manual e melhorar processos.",
      icon: "database-zap",
      tags: ["SQL", "Python", "APIs"]
    },
    {
      title: "IA Aplicada",
      meta: "RAG • Agentes • Prompt Engineering",
      description: "Construção de soluções com agentes inteligentes, recuperação contextual e desenvolvimento assistido por IA.",
      icon: "brain-circuit",
      tags: ["RAG", "agentes", "contexto"]
    },
    {
      title: "Engenharia de Prompt Avançada",
      meta: "Contexto • Instrução • Validação",
      description: "Estruturação de prompts, critérios de resposta e fluxos de revisão para usar IA com mais clareza, controle e aplicação prática.",
      icon: "message-square-code",
      tags: ["prompts", "contexto", "validação"]
    }
  ],
  competencies: [
    {
      title: "Banco de dados",
      description: "SQL Server/T-SQL, consultas, joins, validação de dados, scripts de diagnóstico e PostgreSQL/Supabase.",
      icon: "database",
      tags: ["SQL Server", "T-SQL", "PostgreSQL"]
    },
    {
      title: "Python e backend",
      description: "Python, FastAPI, APIs REST, automação de rotinas, integração de serviços e organização de scripts.",
      icon: "braces",
      tags: ["Python", "FastAPI", "APIs REST"]
    },
    {
      title: "IA aplicada",
      description: "RAG, agentes inteligentes, LangChain, LangGraph, prompt engineering, embeddings e engenharia de contexto.",
      icon: "bot",
      tags: ["RAG", "LangChain", "LangGraph"]
    },
    {
      title: "Web e produto",
      description: "JavaScript, TypeScript, Next.js, React, Tailwind CSS, UX aplicada e organização de interfaces.",
      icon: "layout-dashboard",
      tags: ["TypeScript", "Next.js", "UX"]
    },
    {
      title: "Automação e integrações",
      description: "n8n, APIs, conectores, fluxos automatizados, validação de payloads e integração entre sistemas.",
      icon: "workflow",
      tags: ["n8n", "payloads", "integrações"]
    },
    {
      title: "Ferramentas",
      description: "Git/GitHub, Docker, VS Code/Codex, Supabase, documentação técnica e desenvolvimento assistido por IA.",
      icon: "wrench",
      tags: ["GitHub", "Docker", "Codex"]
    }
  ],
  projects: [
    {
      title: "J.A.R.V.I.S — Ecossistema de Agentes e Skills",
      category: "IA Aplicada • Agentes • Automação",
      description: "Estrutura pessoal de agentes, skills e governança operacional criada para apoiar arquitetura, documentação, automação, análise técnica e desenvolvimento assistido por IA. O projeto está evoluindo para um runtime web com Python, LangGraph, LangChain, FastAPI e Next.js.",
      demonstrates: [
        "arquitetura de agentes",
        "organização de skills",
        "governança de contexto",
        "automação de fluxos técnicos",
        "visão de AI Engineering aplicada"
      ],
      stack: ["Python", "LangGraph", "LangChain", "FastAPI", "Next.js", "TypeScript", "GitHub"],
      status: "Em evolução",
      link: "https://github.com/ddosantos3/J.A.R.V.I.S",
      cta: "Ver repositório",
      featured: true
    },
    {
      title: "Validador Fiscal integrado à Tecnospeed",
      category: "Automação • Integração • Validação",
      description: "Automação conectada ao fluxo da Tecnospeed para apoiar análise de emissões fiscais, validando rejeições de NF-e/NFS-e, identificando códigos de erro e retornando orientações objetivas sobre o que deve ser corrigido.",
      demonstrates: [
        "automação aplicada a problema real",
        "leitura e tratamento de rejeições",
        "integração com serviço externo",
        "padronização de diagnóstico",
        "redução de análise manual"
      ],
      stack: ["Python", "APIs", "Tecnospeed", "JSON/XML", "regras de validação"],
      status: "Projeto técnico / em evolução",
      cta: "Repositório em organização"
    },
    {
      title: "Agente RAG para Suporte Corporativo",
      category: "RAG • IA Aplicada • Conhecimento",
      description: "Protótipo de agente com recuperação contextual para responder dúvidas com base em documentação técnica e conhecimento de sistemas empresariais. A proposta é reduzir retrabalho, padronizar respostas e acelerar o diagnóstico de dúvidas recorrentes.",
      demonstrates: [
        "ingestão de conhecimento",
        "recuperação contextual",
        "uso de embeddings",
        "estruturação de base técnica",
        "aplicação prática de IA em ambiente corporativo"
      ],
      stack: ["Python", "RAG", "embeddings", "Supabase/pgvector", "Chroma", "LLMs"],
      status: "Protótipo em desenvolvimento",
      cta: "Em organização"
    },
    {
      title: "MacroFlow",
      category: "Python • Dados • Automação",
      description: "Projeto em Python para coleta, organização e análise de dados macro/mercado, utilizando APIs, tratamento de dados e geração de contexto analítico.",
      demonstrates: [
        "coleta de dados via API",
        "processamento com Python",
        "organização de indicadores",
        "automação analítica",
        "uso de dados para tomada de decisão"
      ],
      stack: ["Python", "Pandas", "APIs financeiras", "Excel", "automação"],
      status: "Em evolução",
      link: "https://github.com/ddosantos3/MacroFlow",
      cta: "Ver repositório"
    },
    {
      title: "Automação Discord + Supabase",
      category: "Agentes • Banco de Dados • Automação",
      description: "Fluxo de agente virtual conectado a canal de comunicação e base de dados, com objetivo de centralizar dúvidas e respostas operacionais.",
      demonstrates: [
        "integração com Discord",
        "uso de Supabase",
        "automação de respostas",
        "persistência de dados",
        "aplicação de agente em fluxo real"
      ],
      stack: ["n8n", "Discord", "Supabase", "embeddings", "automação"],
      status: "Aplicado / em evolução",
      cta: "Em organização"
    }
  ],
  experience: [
    {
      company: "eFinance Consultoria e Sistemas",
      role: "Suporte Técnico / Sustentação Aplicacional",
      period: "05/2019 – Atual",
      location: "Marília/SP",
      description: "Atuação em sustentação de sistemas corporativos, análise de incidentes, investigação de dados, parametrizações, validação de regras de negócio e apoio à evolução do produto.",
      bullets: [
        "Análise de problemas com SQL Server/T-SQL, consultas, validações e scripts de diagnóstico.",
        "Organização de cenários reproduzíveis, evidências e impactos para apoio ao desenvolvimento.",
        "Atuação em fluxos operacionais, integrações, parametrizações e validação de regras de negócio.",
        "Criação de automações e iniciativas com IA aplicada para reduzir retrabalho e melhorar diagnósticos.",
        "Interface com times multidisciplinares, conectando operação, produto e tecnologia."
      ]
    },
    {
      company: "Paschoalotto",
      role: "Analista de Qualidade Nível II",
      period: "05/2014 – 04/2019",
      location: "Marília/SP",
      description: "Atuação em qualidade operacional, análise de atendimento, documentação de inconformidades, acompanhamento de indicadores e melhoria contínua de processos.",
      bullets: [
        "Monitoramento de qualidade e identificação de oportunidades de melhoria.",
        "Documentação de padrões, processos e inconformidades.",
        "Participação em validações funcionais e levantamento de requisitos operacionais.",
        "Comunicação com times multidisciplinares em ambiente de alta demanda."
      ]
    }
  ],
  certifications: [
    {
      title: "Foundation: Building Reliable Agents",
      issuer: "LangChain Academy",
      description: "Agentes confiáveis, avaliação e estruturação de sistemas agentic.",
      icon: "shield-check"
    },
    {
      title: "Machine Learning Operations (MLOps) for Generative AI",
      issuer: "Google Cloud Skills",
      description: "Operação, ciclo de vida e práticas de MLOps aplicadas à IA generativa.",
      icon: "cloud-cog"
    },
    {
      title: "Google Cloud: Prompt Engineering Guide",
      issuer: "Google Cloud Skills",
      description: "Prompt engineering, instrução de modelos e produtividade com IA.",
      icon: "message-square-code"
    },
    {
      title: "SQL Server, Python, JavaScript, HTML e CSS",
      issuer: "Udemy",
      description: "Base técnica em banco de dados, programação e web.",
      icon: "graduation-cap"
    }
  ],
  stackGroups: [
    {
      title: "Dados",
      items: ["SQL Server / T-SQL", "PostgreSQL / Supabase", "RAG / Embeddings"]
    },
    {
      title: "Backend e automação",
      items: ["Python", "FastAPI", "n8n", "Docker"]
    },
    {
      title: "IA aplicada",
      items: ["LangChain / LangGraph", "Agentes inteligentes", "Prompt engineering", "Engenharia de contexto"]
    },
    {
      title: "Web e ferramentas",
      items: ["JavaScript / TypeScript / Next.js", "GitHub", "VS Code / Codex", "Documentação técnica"]
    }
  ],
  workstyle: [
    {
      title: "Diagnóstico antes da solução",
      description: "Entendo o contexto, organizo evidências e evito soluções apressadas.",
      icon: "scan-search"
    },
    {
      title: "Automação com propósito",
      description: "Busco reduzir esforço manual e tornar processos mais claros e repetíveis.",
      icon: "repeat-2"
    },
    {
      title: "IA como acelerador",
      description: "Uso agentes e modelos generativos para ganhar velocidade sem abrir mão da validação técnica.",
      icon: "sparkles"
    }
  ]
};
