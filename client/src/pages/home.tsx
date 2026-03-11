import RoiCalculator from '../components/RoiCalculator'

// ── Shared style tokens ───────────────────────────────────────
const C = {
  gold:    '#C9A96E',
  goldL:   '#E8CB94',
  goldD:   '#7A6030',
  bg:      '#07070E',
  panel:   '#0D0D1C',
  border:  '#1C1C32',
  text:    '#D8D4CC',
  muted:   '#6A6660',
  green:   '#4ECF88',
  white:   '#F0ECE4',
}

// ── Helper components ─────────────────────────────────────────
function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-tag">
      {children}
    </p>
  )
}

function GreenCheck({ children }: { children: React.ReactNode }) {
  return (
    <div className="green-check">
      <span style={{ color: C.green, flexShrink: 0 }}>✓</span>
      <span className="text-sm" style={{ color: C.text }}>{children}</span>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
export default function Home() {
  return (
    <main style={{ background: C.bg, color: C.text, fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── NAV ───────────────────────────────────────────── */}
      <nav className="site-nav">
        <a href="/" className="nav-logo">
          <img src="/YumIA_logo.svg" alt="YumIA" width={40} height={40} />
          <span className="nav-wordmark" style={{ color: C.gold }}>YumIA</span>
        </a>
        <div className="nav-links">
          {[['#problema', 'O Problema'], ['#metodo', 'Método'], ['#calculadora', 'ROI'], ['#contato', 'Contato']].map(([href, label]) => (
            <a key={href} href={href} className="nav-link" style={{ color: C.muted }}>
              {label}
            </a>
          ))}
        </div>
        <a href="#contato" className="btn-primary">
          Diagnóstico Gratuito
        </a>
      </nav>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="hero-section" style={{ background: C.bg }}>
        <div className="dot-grid-overlay" />
        <div className="hero-glow" />

        <div className="hero-inner">
          <div>
            <SectionTag>Para imobiliárias que querem crescer sem contratar mais</SectionTag>

            <h1 className="hero-h1" style={{ color: C.white }}>
              Você não precisa<br />de mais leads.
            </h1>
            <h2 className="hero-h2" style={{ color: C.gold }}>
              Você precisa extrair o dinheiro<br />que já está na sua base.
            </h2>
            <p className="hero-body" style={{ color: C.muted }}>
              A YumIA instala uma infraestrutura de IA que transforma leads adormecidos,
              follow-ups perdidos e oportunidades esquecidas em faturamento real —
              sem anúncios adicionais, sem aumentar o time.
            </p>

            <div className="hero-ctas">
              <a href="#contato" className="btn-primary btn-pulse">
                Quero ver o potencial da minha base →
              </a>
              <a href="#metodo" className="btn-ghost" style={{ color: C.muted }}>
                Ver como funciona
              </a>
            </div>
          </div>

          {/* Hero stats */}
          <div className="hero-stats-grid">
            {[
              { num: '+47%',    label: 'Crescimento VGV em SP', sub: 'Jan–Mai 2025' },
              { num: '8×',      label: 'Mais conversão com resposta em 5 min', sub: 'Benchmark mercado' },
              { num: '2,5%',    label: 'Taxa mínima de reativação de base', sub: 'Conservador' },
              { num: '60–90d',  label: 'Payback médio da infraestrutura', sub: 'Estimativa' },
            ].map((s, i) => (
              <div key={i} className="stat-card" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
                <p className="stat-number" style={{ color: C.gold }}>{s.num}</p>
                <p className="stat-label" style={{ color: C.white }}>{s.label}</p>
                <p className="stat-sub" style={{ color: C.muted }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMA ──────────────────────────────────────── */}
      <section id="problema" className="section-padded" style={{ background: '#09091a' }}>
        <div className="container">
          <div className="section-header">
            <SectionTag>A realidade da maioria das imobiliárias</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              Sua operação tem<br />dinheiro escondido.
            </h2>
            <p className="section-lead" style={{ color: C.muted }}>
              Não é falta de lead. É falta de infraestrutura para aproveitar o que já chegou até você.
            </p>
          </div>

          <div className="grid-2">
            {[
              { icon: '⚰️', title: 'O Cemitério de Leads', body: 'Sua base tem centenas — talvez milhares — de contatos que ficaram sem resposta após 24 horas. Cada um custou dinheiro para chegar. A maioria nunca foi reabordada.' },
              { icon: '⏱️', title: 'O Corretor Ocupado com Tarefas Erradas', body: '80% do tempo da equipe vai para triagem, follow-up manual e preenchimento de sistemas. Sobra 20% para o que gera receita: relacionamento e fechamento.' },
              { icon: '🌙', title: 'O Lead que Foi para o Concorrente', body: 'Leads que chegam fora do horário comercial não recebem resposta imediata. Responder em 5 minutos aumenta 8× a conversão. Responder no dia seguinte: quase zero.' },
              { icon: '📊', title: 'A Gestão no Escuro', body: 'Sem visibilidade real do funil, a gestão toma decisões por intuição. Quais leads estão quentes agora? Onde os negócios morrem? Ninguém sabe ao certo.' },
            ].map((item, i) => (
              <div key={i} className="pain-card" style={{ background: C.panel, border: `1px solid ${C.border}`, borderLeft: '3px solid #E0555520' }}>
                <span className="pain-icon">{item.icon}</span>
                <div>
                  <h3 className="card-title" style={{ color: C.white }}>{item.title}</h3>
                  <p className="card-body" style={{ color: C.muted }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFERTA ────────────────────────────────────────── */}
      <section className="section-padded" style={{ background: C.bg }}>
        <div className="container">
          <div className="section-header">
            <SectionTag>Não vendemos ferramenta. Não vendemos chatbot.</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              Instalamos uma máquina de<br />faturamento na sua imobiliária.
            </h2>
            <p className="section-lead" style={{ color: C.muted }}>
              Nossa entrega é medida em reais, não em horas ou funcionalidades.
            </p>
          </div>

          <div className="grid-3">
            {[
              {
                nome: 'Atendimento Inteligente 24/7',
                resultado: 'Zero leads perdidos por horário',
                body: 'Assistente de IA responde instantaneamente, qualifica por perfil e intenção, agenda visitas e entrega o lead ao corretor somente quando está pronto para comprar.',
                tags: ['Resposta < 60 seg', 'Qualificação automática', 'Integração CRM'],
              },
              {
                nome: 'Automação do Funil de Vendas',
                resultado: '80% menos trabalho operacional',
                body: 'Follow-ups, propostas e lembretes automáticos. O corretor recebe um alerta apenas no momento certo — e foca em fechar, não em administrar.',
                tags: ['-70% tarefas manuais', 'Propostas automáticas', 'Alertas inteligentes'],
              },
              {
                nome: 'Inteligência Operacional',
                resultado: 'Decisões baseadas em dados reais',
                body: 'Dashboard unificado: quais leads estão quentes agora, onde os negócios travam, performance por corretor e previsão de receita. Visibilidade total em tempo real.',
                tags: ['Funil em tempo real', 'Performance individual', 'Previsão de receita'],
              },
            ].map((s, i) => (
              <div key={i} className="service-card" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
                <div className="service-card-header">
                  <h3 className="service-name" style={{ color: C.gold }}>{s.nome}</h3>
                  <div className="result-badge" style={{ background: '#0a1a10', color: C.green, border: `1px solid ${C.green}30` }}>
                    → {s.resultado}
                  </div>
                </div>
                <p className="card-body" style={{ color: C.muted }}>{s.body}</p>
                <div className="service-tags">
                  {s.tags.map((tag, j) => (
                    <div key={j} className="service-tag" style={{ color: C.green }}>
                      <span>✓</span> {tag}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉTODO MAPA ───────────────────────────────────── */}
      <section id="metodo" className="section-padded" style={{ background: '#09091a' }}>
        <div className="container">
          <div style={{ marginBottom: '4rem' }}>
            <SectionTag>Nossa metodologia exclusiva</SectionTag>
            <h2 className="mapa-title" style={{ color: C.gold }}>Método MAPA</h2>
            <p className="mapa-sub" style={{ color: C.muted }}>
              Mapeamento · Arquitetura · Prototipagem · Aceleração
            </p>
            <p className="section-lead" style={{ color: C.muted, maxWidth: 480 }}>
              Implementação progressiva — com sua equipe usando desde a primeira semana.
            </p>
          </div>

          <div className="grid-4">
            {[
              { letter: 'M', nome: 'Mapeamento', tempo: 'Semana 1', body: 'Diagnóstico da operação: onde estão os leads adormecidos, quanto vale esse ativo parado e qual o potencial de receita a recuperar. Você recebe um relatório com ROI projetado antes de qualquer implementação.' },
              { letter: 'A', nome: 'Arquitetura', tempo: 'Semana 2', body: 'Desenho personalizado: quais automações, integrações com seu CRM e fluxos serão construídos. Você aprova o plano antes de avançar.' },
              { letter: 'P', nome: 'Prototipagem', tempo: 'Semanas 3–5', body: 'Implementação progressiva com validação em tempo real. A equipe já usa e já vê resultados enquanto a infraestrutura é finalizada.' },
              { letter: 'A', nome: 'Aceleração', tempo: 'Contínuo', body: 'Monitoramento do ROI, refinamento dos modelos e expansão das automações. A IA melhora com o tempo — e nosso sucesso é atrelado ao seu crescimento.' },
            ].map((step, i) => (
              <div key={i} className="mapa-card" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
                <span className="mapa-letter-bg" style={{ color: C.gold }}>{step.letter}</span>
                <div className="mapa-letter-badge" style={{ background: '#1e1800', color: C.gold, border: `1px solid ${C.gold}40` }}>
                  {step.letter}
                </div>
                <h3 className="card-title" style={{ color: C.white }}>{step.nome}</h3>
                <span className="mapa-time" style={{ background: '#12122a', color: C.gold, border: `1px solid ${C.border}` }}>
                  {step.tempo}
                </span>
                <p className="card-body" style={{ color: C.muted }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROI CALCULATOR ────────────────────────────────── */}
      <RoiCalculator />

      {/* ── POR QUE YUMIA ─────────────────────────────────── */}
      <section className="section-padded" style={{ background: '#09091a' }}>
        <div className="container why-grid">
          <div>
            <SectionTag>Por que imobiliárias escolhem a YumIA</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              Não somos mais uma<br />"agência de automação".
            </h2>
            <p className="section-lead" style={{ color: C.muted }}>
              O mercado está cheio de quem vende chatbot, prompt e ferramentas isoladas.
              A YumIA faz algo diferente.
            </p>

            {[
              { titulo: 'Vendemos faturamento, não ferramenta', desc: 'Nossa entrega é medida em receita gerada e negócios fechados — não em horas de consultoria ou automações instaladas.' },
              { titulo: 'Especialistas no mercado imobiliário', desc: 'Conhecemos o ciclo de vendas imobiliário, os sistemas usados no setor (CRMs, portais) e as dores reais de corretores e gestores de SP.' },
              { titulo: 'Resultado antes do contrato', desc: 'No Mapeamento, você recebe um diagnóstico com o ROI potencial antes de qualquer compromisso maior. Você decide com dados, não com promessa.' },
            ].map((d, i) => (
              <div key={i} className="diff-card" style={{ background: C.panel, borderLeft: `3px solid ${C.gold}` }}>
                <h3 className="card-title" style={{ color: C.white }}>{d.titulo}</h3>
                <p className="card-body" style={{ color: C.muted }}>{d.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <div className="mission-box" style={{ background: '#09091a', border: `1px solid ${C.border}` }}>
              <p className="section-tag" style={{ marginBottom: '1rem' }}>Nossa Missão</p>
              <p className="mission-text" style={{ color: C.muted }}>
                "A YumIA existe para que imobiliárias de alto desempenho operem com a eficiência
                que seus resultados exigem. Acreditamos que IA não é para substituir corretores —
                é para dar a eles tempo de fazer o que fazem de melhor: construir confiança e fechar negócios."
              </p>
            </div>

            <div className="tech-box" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
              <p className="section-tag" style={{ marginBottom: '1.5rem' }}>Stack tecnológico</p>
              <div className="tech-grid">
                {[
                  ['🐍', 'Python', 'Automações customizadas'],
                  ['🤖', 'n8n / Make', 'Fluxos e integrações'],
                  ['💬', 'WhatsApp API', 'Atendimento 24/7'],
                  ['🧠', 'OpenAI / Claude', 'IA conversacional'],
                  ['📋', 'Kenlo / CV CRM', 'Integração imobiliária'],
                  ['📅', 'Google Calendar', 'Agendamento automático'],
                ].map(([icon, name, desc], j) => (
                  <div key={j} className="tech-item" style={{ background: C.bg, border: `1px solid ${C.border}` }}>
                    <span className="tech-icon">{icon}</span>
                    <div>
                      <p className="tech-name" style={{ color: C.white }}>{name}</p>
                      <p className="tech-desc" style={{ color: C.muted }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <section id="contato" className="section-padded" style={{ background: C.bg }}>
        <div className="container cta-container">
          <div className="cta-badge" style={{ background: '#1a1a00', color: '#c9c050', border: '1px solid #3a3a00' }}>
            ⚠ Atendemos um número limitado de imobiliárias por trimestre
          </div>

          <div className="cta-header">
            <h2 className="cta-h2" style={{ color: C.white }}>
              Descubra quanto dinheiro está<br />
              <span style={{ color: C.gold }}>adormecido na sua base.</span>
            </h2>
            <p className="cta-lead" style={{ color: C.muted }}>
              No Diagnóstico Estratégico Gratuito (60 min), mapeamos sua operação e apresentamos
              o potencial de receita a recuperar com IA — sem custo e sem compromisso.
            </p>
          </div>

          <div className="what-you-get" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
            <p className="section-tag" style={{ marginBottom: '1.25rem' }}>O que você recebe na sessão</p>
            <GreenCheck>Análise do potencial da sua base de leads</GreenCheck>
            <GreenCheck>Identificação dos 3 principais gargalos de receita</GreenCheck>
            <GreenCheck>Estimativa de ROI personalizada para sua operação</GreenCheck>
            <GreenCheck>Plano de ação com primeiras etapas claras</GreenCheck>
          </div>

          <form className="contact-form" style={{ background: C.panel, border: `1px solid ${C.border}` }} onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              {[
                { name: 'nome', label: 'Nome completo', placeholder: 'Seu nome' },
                { name: 'empresa', label: 'Imobiliária / Empresa', placeholder: 'Nome da empresa' },
              ].map(f => (
                <div key={f.name} className="form-field">
                  <label className="form-label" style={{ color: C.muted }}>{f.label}</label>
                  <input name={f.name} placeholder={f.placeholder} className="form-input" style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.text }} />
                </div>
              ))}
            </div>
            <div className="form-row">
              {[
                { name: 'whatsapp', label: 'WhatsApp', placeholder: '+55 (11) 9 9999-9999' },
                { name: 'email', label: 'E-mail corporativo', placeholder: 'voce@empresa.com.br' },
              ].map(f => (
                <div key={f.name} className="form-field">
                  <label className="form-label" style={{ color: C.muted }}>{f.label}</label>
                  <input name={f.name} placeholder={f.placeholder} className="form-input" style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.text }} />
                </div>
              ))}
            </div>
            <div className="form-field" style={{ marginBottom: '1.5rem' }}>
              <label className="form-label" style={{ color: C.muted }}>Tamanho da base de leads</label>
              <select className="form-input" style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.muted }}>
                <option value="">Selecione...</option>
                <option>Menos de 500 leads</option>
                <option>500 – 2.000 leads</option>
                <option>2.000 – 10.000 leads</option>
                <option>Mais de 10.000 leads</option>
              </select>
            </div>
            <button type="submit" className="btn-primary btn-full">
              Quero meu Diagnóstico Estratégico Gratuito →
            </button>
            <p className="form-fine" style={{ color: '#3A3A4A' }}>
              60 min · Sem compromisso · Seus dados estão seguros
            </p>
          </form>

          <div className="contact-info">
            {[
              { icon: '📞', label: 'Telefone', value: '+55 (11) 99999-9999' },
              { icon: '✉️', label: 'E-mail', value: 'contato@yumia.com.br' },
              { icon: '📍', label: 'Local', value: 'São Paulo, SP' },
            ].map((c, i) => (
              <div key={i} className="contact-item">
                <p className="contact-icon">{c.icon}</p>
                <p className="contact-label" style={{ color: C.muted }}>{c.label}</p>
                <p className="contact-value" style={{ color: C.text }}>{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer className="site-footer" style={{ background: '#04040A', borderTop: `1px solid ${C.border}` }}>
        <div className="footer-inner">
          <a href="/" className="footer-logo">
            <img src="/YumIA_logo.svg" alt="YumIA" width={32} height={32} />
            <div>
              <p className="footer-name" style={{ color: C.gold }}>YumIA</p>
              <p className="footer-tag" style={{ color: C.muted }}>Infraestrutura de Crescimento com IA</p>
            </div>
          </a>
          <div className="footer-links">
            <a href="#problema">O Problema</a>
            <a href="#metodo">Método MAPA</a>
            <a href="#calculadora">Calculadora ROI</a>
            <a href="#contato">Contato</a>
          </div>
          <p className="footer-copy" style={{ color: '#2A2A3A' }}>
            © {new Date().getFullYear()} YumIA · Todos os direitos reservados
          </p>
        </div>
      </footer>

    </main>
  )
}
