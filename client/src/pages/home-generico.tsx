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
  red:     '#E05555',
  white:   '#F0ECE4',
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return <p className="section-tag">{children}</p>
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
          {[['#problema','O Problema'],['#metodo','Método'],['#segmentos','Segmentos'],['#calculadora','ROI'],['#contato','Contato']].map(([href, label]) => (
            <a key={href} href={href} className="nav-link" style={{ color: C.muted }}>{label}</a>
          ))}
        </div>
        <a href="#contato" className="btn-primary">Diagnóstico Gratuito</a>
      </nav>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="hero-section" style={{ background: C.bg }}>
        <div className="dot-grid-overlay" />
        <div className="hero-glow" />

        <div className="hero-inner">
          <div>
            <SectionTag>Para negócios que querem crescer sem contratar mais</SectionTag>

            <h1 className="hero-h1" style={{ color: C.white }}>
              Você não precisa<br />de mais leads.
            </h1>
            <h2 className="hero-h2" style={{ color: C.gold }}>
              Você precisa extrair o dinheiro<br />que já está na sua base.
            </h2>
            <p className="hero-body" style={{ color: C.muted }}>
              A YumIA instala uma infraestrutura de IA que transforma contatos adormecidos,
              follow-ups perdidos e oportunidades esquecidas em faturamento real —
              sem anúncios adicionais, sem aumentar o time.
            </p>

            <div className="hero-ctas">
              <a href="#contato" className="btn-primary btn-pulse">
                Quero ver o potencial da minha operação →
              </a>
              <a href="#metodo" className="btn-ghost" style={{ color: C.muted }}>
                Ver como funciona
              </a>
            </div>
          </div>

          {/* Hero stats */}
          <div className="hero-stats-grid">
            {[
              { num: '8×',      label: 'Mais conversão com resposta em menos de 5 min', sub: 'Benchmark de mercado' },
              { num: '2,5%',    label: 'Taxa mínima de reativação de base inativa',      sub: 'Conservador' },
              { num: '+40%',    label: 'Aumento médio de receita nos primeiros 90 dias', sub: 'Clientes YumIA' },
              { num: '60–90d',  label: 'Payback médio da infraestrutura',                sub: 'Estimativa' },
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
            <SectionTag>A realidade da maioria das operações comerciais</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              Sua operação tem<br />dinheiro escondido.
            </h2>
            <p className="section-lead" style={{ color: C.muted }}>
              Não é falta de lead. É falta de infraestrutura para aproveitar o que já chegou até você.
            </p>
          </div>

          <div className="grid-2">
            {[
              { icon: '⚰️', title: 'O Cemitério de Contatos',         body: 'Sua base tem centenas — talvez milhares — de contatos que ficaram sem resposta após 24 horas. Cada um custou tempo e dinheiro para chegar. A maioria nunca foi reabordada.' },
              { icon: '⏱️', title: 'A Equipe no Lugar Errado',         body: 'Mais de 60% do tempo da equipe vai para tarefas operacionais: triagem, follow-up manual, agendamento, respostas repetitivas. O que sobra para gerar receita é pouco.' },
              { icon: '🌙', title: 'O Lead que Foi para o Concorrente', body: 'Contatos que chegam fora do horário comercial ficam sem resposta. Responder em menos de 5 minutos aumenta 8× a conversão. Responder no dia seguinte: quase zero.' },
              { icon: '📊', title: 'A Gestão no Escuro',               body: 'Sem visibilidade real do funil, decisões são tomadas por intuição. Quais oportunidades estão quentes? Onde os negócios morrem? Ninguém sabe ao certo.' },
            ].map((item, i) => (
              <div key={i} className="pain-card" style={{ background: C.panel, border: `1px solid ${C.border}`, borderLeft: '3px solid #E0555530' }}>
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
              Instalamos uma máquina de<br />faturamento na sua operação.
            </h2>
            <p className="section-lead" style={{ color: C.muted }}>
              Nossa entrega é medida em reais, não em horas ou funcionalidades.
            </p>
          </div>

          <div className="grid-3">
            {[
              {
                nome: 'Atendimento Inteligente 24/7',
                resultado: 'Zero contatos perdidos por horário',
                body: 'IA responde instantaneamente, qualifica por perfil e intenção, agenda reuniões e entrega o contato à equipe somente quando está pronto para avançar.',
                tags: ['Resposta < 60 seg', 'Qualificação automática', 'Integração CRM'],
              },
              {
                nome: 'Automação de Funil Completo',
                resultado: '80% menos trabalho operacional',
                body: 'Follow-ups automáticos no timing certo, propostas geradas em 1 clique e alertas inteligentes para a equipe focar onde importa: fechar negócio.',
                tags: ['Follow-ups automáticos', 'Alertas de oportunidade', 'Relatório em tempo real'],
              },
              {
                nome: 'Reativação de Base Inativa',
                resultado: 'Receita que já estava na sua base',
                body: 'Campanha inteligente para contatos que chegaram e nunca converteram. Com personalização por IA, a taxa de resposta é 3× a 5× maior que campanhas genéricas.',
                tags: ['Segmentação por IA', 'Mensagens personalizadas', 'Funil de reengajamento'],
              },
            ].map((s, i) => (
              <div key={i} className="service-card" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
                <div className="service-card-header">
                  <h3 className="service-name" style={{ color: C.gold }}>{s.nome}</h3>
                  <span className="result-badge" style={{ background: '#0A1A10', border: `1px solid ${C.green}30`, color: C.green }}>
                    → {s.resultado}
                  </span>
                </div>
                <p className="card-body" style={{ color: C.muted, marginBottom: '1rem', flex: 1 }}>{s.body}</p>
                <div className="service-tags">
                  {s.tags.map((t, j) => (
                    <div key={j} className="service-tag">
                      <span style={{ color: C.goldD, fontSize: '0.6rem' }}>✦</span>
                      <span style={{ color: C.muted, fontSize: '0.75rem' }}>{t}</span>
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
          <div className="section-header">
            <SectionTag>Metodologia exclusiva</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              Método <span style={{ color: C.gold }}>MAPA</span>
            </h2>
            <p className="section-lead" style={{ color: C.muted }}>
              Do diagnóstico ao resultado em 5 semanas. Cada etapa é validada com você antes de avançar.
            </p>
          </div>

          <div className="grid-4">
            {[
              { l: 'M', nome: 'Mapeamento',   time: 'Semana 1',   body: 'Diagnóstico da operação, mapeamento dos gargalos e cálculo do ROI potencial. Você vê o número antes de qualquer compromisso.' },
              { l: 'A', nome: 'Arquitetura',  time: 'Semana 2',   body: 'Desenho personalizado: quais automações, integrações e fluxos. Você aprova o plano antes de avançar.' },
              { l: 'P', nome: 'Prototipagem', time: 'Semanas 3–5', body: 'Implementação progressiva. A equipe já usa e já vê resultados enquanto a infraestrutura é finalizada.' },
              { l: 'A', nome: 'Aceleração',   time: 'Contínuo',   body: 'Monitoramento de ROI, refinamento e expansão. Nosso sucesso é medido pelo seu crescimento.' },
            ].map((m, i) => (
              <div key={i} className="mapa-card" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
                <span className="mapa-letter-bg" style={{ color: C.gold }}>{m.l}</span>
                <div className="mapa-letter-badge" style={{ background: C.goldD, color: C.gold }}>{m.l}</div>
                <span className="mapa-time" style={{ background: '#12122a', color: C.gold, fontSize: '0.7rem' }}>{m.time}</span>
                <h3 className="card-title" style={{ color: C.white, marginBottom: '0.5rem' }}>{m.nome}</h3>
                <p className="card-body" style={{ color: C.muted }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEGMENTOS ─────────────────────────────────────── */}
      <section id="segmentos" className="section-padded" style={{ background: C.bg }}>
        <div className="container">
          <div className="section-header">
            <SectionTag>Expertise por segmento</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              Especialistas nos segmentos<br />que mais crescem em SP.
            </h2>
            <p className="section-lead" style={{ color: C.muted }}>
              Não somos consultoria genérica. Conhecemos as dores reais, os sistemas e os benchmarks
              de cada mercado que atendemos.
            </p>
          </div>

          <div className="grid-3">
            {[
              {
                icon: '🏢',
                nome: 'Imobiliárias',
                dores: ['Leads adormecidos na base', 'Follow-up manual de corretores', 'Perda por tempo de resposta', 'Sem visibilidade do funil'],
                stat: '+47% VGV',
                statSub: 'crescimento com IA',
                link: 'https://imoveis.yumia.com.br',
                cta: 'Ver solução para imobiliárias',
              },
              {
                icon: '⚖️',
                nome: 'Escritórios de Advocacia',
                dores: ['Consultas perdidas fora do horário', 'Triagem manual e cara', 'Clientes inativos sem reativação', 'Advogado fazendo trabalho admin'],
                stat: '3× conversão',
                statSub: 'com resposta < 15 min',
                link: 'https://advogados.yumia.com.br',
                cta: 'Ver solução para advocacia',
              },
              {
                icon: '🏥',
                nome: 'Médicos e Clínicas',
                dores: ['No-show sem gestão ativa', 'Pacientes inativos não reativados', 'Agendamento fora do horário', 'Recepção sobrecarregada'],
                stat: '−65% no-show',
                statSub: 'com confirmação automática',
                link: 'https://medicos.yumia.com.br',
                cta: 'Ver solução para clínicas',
              },
            ].map((seg, i) => (
              <div key={i} className="service-card" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
                <div className="service-card-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.75rem' }}>{seg.icon}</span>
                    <h3 className="service-name" style={{ color: C.gold, margin: 0 }}>{seg.nome}</h3>
                  </div>
                  <span className="result-badge" style={{ background: '#12122a', border: `1px solid ${C.goldD}`, color: C.goldL }}>
                    {seg.stat} · {seg.statSub}
                  </span>
                </div>
                <div className="service-tags" style={{ marginBottom: '1.25rem' }}>
                  {seg.dores.map((d, j) => (
                    <div key={j} className="service-tag">
                      <span style={{ color: C.red, fontSize: '0.6rem' }}>✕</span>
                      <span style={{ color: C.muted, fontSize: '0.75rem' }}>{d}</span>
                    </div>
                  ))}
                </div>
                <a href={seg.link} target="_blank" rel="noopener noreferrer"
                  style={{ marginTop: 'auto', display: 'block', textAlign: 'center', padding: '0.6rem 1rem',
                    border: `1px solid ${C.gold}40`, borderRadius: '0.5rem', color: C.gold,
                    fontSize: '0.8rem', fontWeight: 600, transition: 'all 150ms' }}>
                  {seg.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALCULADORA ROI ───────────────────────────────── */}
      <RoiCalculator />

      {/* ── POR QUE A YUMIA ───────────────────────────────── */}
      <section className="section-padded" style={{ background: '#09091a' }}>
        <div className="container">
          <div className="why-grid">
            <div>
              <SectionTag>Por que a YumIA</SectionTag>
              <h2 className="section-h2" style={{ color: C.white, marginBottom: '2rem' }}>
                O mercado está cheio de<br />ferramentas. Nós entregamos resultado.
              </h2>
              <p className="section-lead" style={{ color: C.muted, marginBottom: '2rem' }}>
                O mercado está cheio de quem vende chatbot, prompt e ferramentas isoladas.
                A YumIA faz algo diferente.
              </p>

              {[
                { titulo: 'Vendemos faturamento, não ferramenta',  desc: 'Nossa entrega é medida em receita gerada e negócios fechados — não em horas de consultoria ou automações instaladas.' },
                { titulo: 'Especialistas no seu segmento',         desc: 'Conhecemos as dores reais de cada mercado que atendemos. Não aplicamos template — aplicamos solução.' },
                { titulo: 'Resultado antes do contrato',           desc: 'No Mapeamento, você recebe um diagnóstico com o ROI potencial antes de qualquer compromisso maior. Você decide com dados.' },
              ].map((d, i) => (
                <div key={i} className="diff-card" style={{ background: C.panel, borderLeft: `3px solid ${C.gold}` }}>
                  <h3 className="card-title" style={{ color: C.white }}>{d.titulo}</h3>
                  <p className="card-body" style={{ color: C.muted }}>{d.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <div className="mission-box" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
                <p className="section-tag" style={{ marginBottom: '1rem' }}>Nossa Missão</p>
                <p className="mission-text" style={{ color: C.muted }}>
                  "A YumIA existe para que negócios de alto desempenho operem com a eficiência
                  que seus resultados exigem. Acreditamos que IA não é para substituir pessoas —
                  é para dar a elas tempo de fazer o que fazem de melhor."
                </p>
              </div>

              <div className="tech-box" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
                <p className="section-tag" style={{ marginBottom: '1.5rem' }}>Stack tecnológico</p>
                <div className="tech-grid">
                  {[
                    ['🤖', 'n8n / Make',      'Fluxos e integrações'],
                    ['💬', 'WhatsApp API',     'Atendimento 24/7'],
                    ['🧠', 'OpenAI / Claude',  'IA conversacional'],
                    ['📋', 'CRM Integrado',    'Seu sistema atual'],
                    ['🐍', 'Python',           'Automações customizadas'],
                    ['📅', 'Google Calendar',  'Agendamento automático'],
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
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <section id="contato" className="section-padded" style={{ background: C.bg }}>
        <div className="container cta-container">
          <div className="cta-badge" style={{ background: '#1a1a00', color: '#c9c050', border: '1px solid #3a3a00' }}>
            ⚠ Atendemos um número limitado de empresas por trimestre
          </div>

          <div className="cta-header">
            <h2 className="cta-h2" style={{ color: C.white }}>
              Descubra quanto dinheiro está<br />
              <span style={{ color: C.gold }}>adormecido na sua operação.</span>
            </h2>
            <p className="cta-lead" style={{ color: C.muted }}>
              No Diagnóstico Estratégico Gratuito (60 min), mapeamos sua operação e apresentamos
              o potencial de receita a recuperar com IA — sem custo e sem compromisso.
            </p>
          </div>

          <div className="what-you-get" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
            <p className="section-tag" style={{ marginBottom: '1.25rem' }}>O que você recebe na sessão</p>
            <GreenCheck>Análise do potencial da sua base de contatos</GreenCheck>
            <GreenCheck>Identificação dos 3 principais gargalos de receita</GreenCheck>
            <GreenCheck>Estimativa de ROI personalizada para sua operação</GreenCheck>
            <GreenCheck>Plano de ação com primeiras etapas claras</GreenCheck>
          </div>

          <form className="contact-form" style={{ background: C.panel, border: `1px solid ${C.border}` }} onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              {[
                { name: 'nome',    label: 'Nome completo',       placeholder: 'Seu nome' },
                { name: 'empresa', label: 'Empresa / Segmento',  placeholder: 'Empresa e seu setor' },
              ].map(f => (
                <div key={f.name} className="form-field">
                  <label className="form-label" style={{ color: C.muted }}>{f.label}</label>
                  <input name={f.name} placeholder={f.placeholder} className="form-input"
                    style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.text }} />
                </div>
              ))}
            </div>
            <div className="form-row">
              {[
                { name: 'whatsapp', label: 'WhatsApp',        placeholder: '+55 (11) 9 9999-9999' },
                { name: 'email',    label: 'E-mail',           placeholder: 'voce@empresa.com.br' },
              ].map(f => (
                <div key={f.name} className="form-field">
                  <label className="form-label" style={{ color: C.muted }}>{f.label}</label>
                  <input name={f.name} placeholder={f.placeholder} className="form-input"
                    style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.text }} />
                </div>
              ))}
            </div>
            <div className="form-field" style={{ marginBottom: '1.5rem' }}>
              <label className="form-label" style={{ color: C.muted }}>Tamanho da base de contatos</label>
              <select className="form-input" style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.muted }}>
                <option value="">Selecione...</option>
                <option>Menos de 500 contatos</option>
                <option>500 – 2.000 contatos</option>
                <option>2.000 – 10.000 contatos</option>
                <option>Mais de 10.000 contatos</option>
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
              { icon: '✉️', label: 'E-mail',   value: 'contato@yumia.com.br' },
              { icon: '📍', label: 'Local',     value: 'São Paulo, SP' },
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
            <a href="#segmentos">Segmentos</a>
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
