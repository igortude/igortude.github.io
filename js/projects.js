const projects = [
  {
    terminalCmd: "ls projetos/token_analyst_—_antigravity/",
    terminalOut: "Token Analyst — Antigravity — Concluído | Impacto: Reduz custo de chamadas LLM",
    imgBg: "linear-gradient(135deg,rgba(139,92,246,0.25),rgba(6,182,212,0.15))",
    statusStyle: "background:rgba(16,185,129,0.2);color:#34d399;border-color:rgba(16,185,129,0.3);",
    statusIcon: "check-circle-2",
    statusIconColor: "#34d399",
    statusLabel: "Concluído",
    icon: "cpu",
    iconColor: "#a78bfa",
    impactIcon: "trending-up",
    impact: "Reduz custo de chamadas LLM",
    title: "Token Analyst — Antigravity",
    desc: "Analisador de tokens para projetos com LLMs. Contagem precisa, estimativa de custo por modelo e suporte a múltiplos tokenizers.",
    tech: ["Python", "Tiktoken", "LLM", "NLP"],
    linkType: "github",
    linkHref: "https://github.com/igortude/antigravity-token_analyst",
    linkLabel: "Ver no GitHub"
  },
  {
    terminalCmd: "ls projetos/site_institucional_—_ct_no_limits/",
    terminalOut: "Site Institucional — CT No Limits — Concluído | Impacto: Site em produção — cliente real",
    imgBg: "linear-gradient(135deg,rgba(6,182,212,0.25),rgba(16,185,129,0.15))",
    statusStyle: "background:rgba(16,185,129,0.2);color:#34d399;border-color:rgba(16,185,129,0.3);",
    statusIcon: "check-circle-2",
    statusIconColor: "#34d399",
    statusLabel: "Concluído",
    icon: "globe",
    iconColor: "var(--cyan)",
    impactIcon: "globe",
    impact: "Site em produção — cliente real",
    title: "Site Institucional — CT No Limits",
    desc: "Desenvolvimento completo. Responsivo, com páginas de cursos, landing page e formulário de contato.",
    tech: ["HTML/CSS", "JavaScript", "Responsivo"],
    linkType: "external",
    linkHref: "https://www.ctnolimits.com.br",
    linkLabel: "Ver site ao vivo"
  },
  {
    terminalCmd: "ls projetos/sistema_de_gestão_—_ct_no_limits/",
    terminalOut: "Sistema de Gestão — CT No Limits — Comercializado | Impacto: Código vendido ao cliente",
    imgBg: "linear-gradient(135deg,rgba(139,92,246,0.25),rgba(245,158,11,0.1))",
    statusStyle: "background:rgba(245,158,11,0.2);color:#fbbf24;border-color:rgba(245,158,11,0.4);",
    statusIcon: "shopping-cart",
    statusIconColor: "#fbbf24",
    statusLabel: "Comercializado",
    icon: "layout-dashboard",
    iconColor: "#a78bfa",
    impactIcon: "dollar-sign",
    impact: "Código vendido ao cliente",
    title: "Sistema de Gestão — CT No Limits",
    desc: "Sistema desktop completo em Python: controle de alunos, agendamentos, cursos e check-in. Windows e macOS.",
    tech: ["Python", "Windows", "macOS", "SQLite"],
    linkType: "disabled",
    linkLabel: "Código Proprietário"
  },
  {
    terminalCmd: "ls projetos/dashboard_bi_+_rag_—_ct_no_limits/",
    terminalOut: "Dashboard BI + RAG — Concluído | Impacto: IA local + dados reais de negócio",
    imgBg: "linear-gradient(135deg,rgba(6,182,212,0.2),rgba(139,92,246,0.2))",
    statusStyle: "background:rgba(16,185,129,0.2);color:#34d399;border-color:rgba(16,185,129,0.3);",
    statusIcon: "check-circle-2",
    statusIconColor: "#34d399",
    statusLabel: "Concluído",
    icon: "brain",
    iconColor: "var(--cyan)",
    impactIcon: "brain",
    impact: "IA local + dados reais de negócio",
    title: "Dashboard BI + RAG — CT No Limits",
    desc: "Dashboard analítico com dados reais. Visualizações interativas e agente de IA que responde perguntas sobre o negócio em linguagem natural — Llama rodando local via Langchain.",
    tech: ["Streamlit", "Plotly", "Langchain", "Llama", "SQLite"],
    linkType: "github",
    linkHref: "https://github.com/igortude/nolimits_bi",
    linkLabel: "Ver no GitHub"
  },
  {
    terminalCmd: "ls projetos/sistema_crud_python/",
    terminalOut: "Sistema CRUD Python — Concluído | Impacto: 100% do zero no 1º semestre",
    imgBg: "linear-gradient(135deg,rgba(16,185,129,0.2),rgba(6,182,212,0.15))",
    statusStyle: "background:rgba(16,185,129,0.2);color:#34d399;border-color:rgba(16,185,129,0.3);",
    statusIcon: "check-circle-2",
    statusIconColor: "#34d399",
    statusLabel: "Concluído",
    icon: "code-2",
    iconColor: "#34d399",
    impactIcon: "hammer",
    impact: "100% do zero no 1º semestre",
    title: "Sistema CRUD Python",
    desc: "CRUD completo com SQLite, feito do zero. Cadastro com validações, edição, exclusão por ID, relatórios com Pandas e gráficos.",
    tech: ["Python", "SQLite", "Pandas", "CLI"],
    linkType: "github",
    linkHref: "https://github.com/igortude/sistema-cadastro",
    linkLabel: "Ver no GitHub"
  },
  {
    terminalCmd: "ls projetos/astrostudy/",
    terminalOut: "AstroStudy — Concluído | Impacto: Análise de asteroides com dados reais da NASA",
    imgBg: "linear-gradient(135deg,rgba(6,182,212,0.2),rgba(139,92,246,0.2))",
    statusStyle: "background:rgba(16,185,129,0.2);color:#34d399;border-color:rgba(16,185,129,0.3);",
    statusIcon: "check-circle-2",
    statusIconColor: "#34d399",
    statusLabel: "Concluído",
    icon: "telescope",
    iconColor: "var(--cyan)",
    impactIcon: "star",
    impact: "Dados reais da NASA",
    title: "AstroStudy",
    desc: "Análise de asteroides com dados reais da NASA. Modelos de ML para classificação e visualização de objetos próximos à Terra.",
    tech: ["Python", "ML", "NASA API", "Pandas"],
    linkType: "github",
    linkHref: "https://github.com/igortude/astrostudy",
    linkLabel: "Ver no GitHub"
  }
];

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  function renderLink(p) {
    if (p.linkType === "github") {
      return `<a href="${p.linkHref}" target="_blank" rel="noopener noreferrer" class="project-link" style="color:var(--cyan);"><i data-lucide="github" style="stroke:var(--cyan)"></i>${p.linkLabel}</a>`;
    }
    if (p.linkType === "external") {
      return `<a href="${p.linkHref}" target="_blank" rel="noopener noreferrer" class="project-link" style="color:var(--cyan);"><i data-lucide="external-link" style="stroke:var(--cyan)"></i>${p.linkLabel}</a>`;
    }
    return `<span class="project-link disabled"><i data-lucide="lock" style="width:16px;height:16px;stroke:currentColor"></i>${p.linkLabel}</span>`;
  }

  container.innerHTML = projects.map(p => `
    <div class="project-card" data-terminal-cmd="${p.terminalCmd}" data-terminal-out="${p.terminalOut}">
      <div class="project-img" style="background:${p.imgBg};">
        <span class="project-status-badge" style="${p.statusStyle}">
          <i data-lucide="${p.statusIcon}" style="width:12px;height:12px;stroke:${p.statusIconColor}"></i>${p.statusLabel}
        </span>
        <i data-lucide="${p.icon}" style="stroke:${p.iconColor};width:48px;height:48px;"></i>
      </div>
      <div class="project-body">
        <span class="impact-badge"><i data-lucide="${p.impactIcon}" style="stroke:#10b981"></i>${p.impact}</span>
        <div class="project-title">${p.title}</div>
        <p class="project-desc">${p.desc}</p>
        <div class="tech-tags">${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}</div>
        ${renderLink(p)}
      </div>
    </div>
  `).join("");

  // Reinicializa os ícones Lucide nos cards recém-injetados
  if (typeof lucide !== "undefined") lucide.createIcons();
}

document.addEventListener("DOMContentLoaded", renderProjects);
