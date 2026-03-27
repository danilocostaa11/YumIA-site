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
          {[['#problema','O Problema'],['#solucoes','Soluções'],['#metodo','Método'],['#calculadora','ROI'],['#contato','Contato']].map(([href, label]) => (
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
            <SectionTag>Para negócios que querem crescer com inteligência</SectionTag>

            <h1 className="hero-h1" style={{ color: C.white }}>
              Sua operação tem<br />dinheiro escondido.
            </h1>
            <h2 className="hero-h2" style={{ color: C.gold }}>
              A gente encontra — e constrói a estrutura<br />que transforma em receita.
            </h2>
            <p className="hero-body" style={{ color: C.muted }}>
              Infraestrutura digital com IA: do site que atrai ao sistema que converte,
              passando pelo atendimento que nunca dorme. Sem anúncios adicionais, sem aumentar o time.
            </p>

            <div className="hero-ctas">
              <a href="#contato" className="btn-primary btn-pulse">
                Quero ver quanto estou perdendo →
              </a>
              <a href="#metodo" className="btn-ghost" style={{ color: C.muted }}>
                Como funciona o diagnóstico?
              </a>
            </div>
          </div>

          {/* Hero stats */}
          <div className="hero-stats-grid">
            {[
              { num: '73%',     label: 'Dos contatos não recebem resposta na 1ª hora',   sub: 'Benchmark de mercado' },
              { num: 'R$ 0',    label: 'É o que sua base inativa gera hoje',              sub: 'Receita desperdiçada' },
              { num: '40%',     label: 'Do tempo da equipe gasto em tarefa que IA resolve', sub: 'Média operacional' },
              { num: '< 60s',   label: 'Tempo de resposta com infraestrutura YumIA',      sub: 'Atendimento 24/7' },
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
            <SectionTag>O que está custando caro e você ainda não viu</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              Enquanto você lê isso, seu negócio<br />está perdendo dinheiro de 4 formas.
            </h2>
            <p className="section-lead" style={{ color: C.muted }}>
              Não é falta de esforço. É falta de infraestrutura digital para captar, converter e reter.
            </p>
          </div>

          <div className="grid-2">
            {[
              { icon: '🔍', title: 'Invisível onde o cliente procura',     body: 'Seu concorrente aparece no Google. Você não. Sem site otimizado, sem perfil no Google, sem presença — você não existe para quem está pronto para comprar.' },
              { icon: '⏱️', title: 'Contatos que chegam e somem',          body: 'Leads entram por WhatsApp, formulário, telefone — e ninguém responde a tempo. Cada hora sem resposta é dinheiro que foi para o concorrente do lado.' },
              { icon: '💤', title: 'Uma base inteira de clientes esquecidos', body: 'Pessoas que já confiaram em você, compraram, indicaram — e nunca mais foram contactadas. Essa base vale dinheiro. Muito dinheiro.' },
              { icon: '📊', title: 'Decisões no achismo, não em dados',     body: 'Sem dashboard, sem funil visível, sem métricas. Você não sabe de onde vem o resultado — e não sabe onde está o gargalo. Quem não mede, não cresce.' },
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
      <section id="solucoes" className="section-padded" style={{ background: C.bg }}>
        <div className="container">
          <div className="section-header">
            <SectionTag>O que a YumIA instala na sua operação</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              Não vendemos ferramenta.<br />Construímos a infraestrutura que gera receita.
            </h2>
            <p className="section-lead" style={{ color: C.muted }}>
              Cada negócio tem um gargalo diferente. Por isso, entregamos soluções sob medida —
              do site ao sistema, do atendimento ao painel de controle.
            </p>
          </div>

          <div className="grid-3">
            {[
              {
                nome: 'Sites e Presença Digital',
                resultado: 'Visível no Google em 10 dias',
                body: 'Sites profissionais, landing pages de alta conversão e Google Meu Negócio otimizado. Seu negócio aparece onde o cliente procura — e convence antes do primeiro contato.',
                tags: ['Site otimizado', 'Google Meu Negócio', 'SEO local'],
              },
              {
                nome: 'Atendimento Inteligente 24/7',
                resultado: 'Zero contatos perdidos por horário',
                body: 'IA no WhatsApp que responde em menos de 60 segundos, qualifica leads, agenda reuniões e encaminha para sua equipe só o que importa. Funciona enquanto você dorme.',
                tags: ['Resposta < 60 seg', 'Qualificação automática', 'Integração CRM'],
              },
              {
                nome: 'Software Sob Medida',
                resultado: 'Seu processo, seu sistema',
                body: 'Aplicações, portais, sistemas internos e automações construídos para o seu processo — não adaptados de uma ferramenta genérica. Tecnologia que se encaixa no seu negócio, não o contrário.',
                tags: ['Apps personalizados', 'Portais e sistemas', 'Automações de processo'],
              },
              {
                nome: 'Dashboards e Inteligência',
                resultado: 'Decisões em tempo real',
                body: 'Painéis de controle em tempo real com os KPIs que importam: funil, conversão, ticket médio, reativação. Você para de adivinhar e começa a decidir com dados.',
                tags: ['KPIs em tempo real', 'Funil visível', 'Relatórios automáticos'],
              },
              {
                nome: 'Reativação Inteligente de Base',
                resultado: 'Receita sem custo de aquisição',
                body: 'Campanhas automatizadas que reengajam clientes inativos com mensagens personalizadas no momento certo. Receita que já estava na sua base — só precisava ser ativada.',
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
            <SectionTag>Como fazemos</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              Método <span style={{ color: C.gold }}>MAPA</span> — resultado antes de compromisso
            </h2>
            <p className="section-lead" style={{ color: C.muted }}>
              Você vê o potencial em reais antes de investir um centavo. Se não fizer sentido, cada um segue seu caminho.
            </p>
          </div>

          <div className="grid-4">
            {[
              { l: 'M', nome: 'Mapeamento',   time: 'Semana 1',   body: 'Diagnóstico completo da operação. Levantamos números, identificamos gargalos e calculamos ao vivo quanto dinheiro está sendo deixado na mesa. Você vê o ROI antes de qualquer decisão.' },
              { l: 'A', nome: 'Arquitetura',  time: 'Semana 2',   body: 'Desenho personalizado da solução: quais sistemas, automações, sites e integrações. Nada genérico — cada peça é projetada para o seu processo. Você aprova antes de avançar.' },
              { l: 'P', nome: 'Prototipagem', time: 'Semanas 3–5', body: 'Implementação progressiva. Sites, sistemas, IA, dashboards — tudo vai ao ar por etapas. Sua equipe já usa e já vê resultado antes do projeto acabar.' },
              { l: 'A', nome: 'Aceleração',   time: 'Contínuo',   body: 'Monitoramento de ROI, ajustes baseados em dados reais e expansão da infraestrutura. O que funciona, escala. O que pode melhorar, melhora.' },
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
                Não somos agência. Não somos software house.<br />Somos o parceiro que instala crescimento.
              </h2>
              <p className="section-lead" style={{ color: C.muted, marginBottom: '2rem' }}>
                O mercado está cheio de quem vende chatbot, template de site e ferramentas isoladas.
                A YumIA faz algo diferente.
              </p>

              {[
                { titulo: 'Medimos em reais, não em funcionalidades',  desc: 'Cada entrega tem um ROI projetado. Se não gera receita, reduz custo ou libera tempo da equipe — a gente não propõe.' },
                { titulo: 'Do site ao dashboard, de uma equipe só',    desc: 'Site, sistema, IA, automação e painel de controle — tudo desenhado junto, integrado do dia 1. Sem frankenstein de 5 fornecedores que não conversam entre si.' },
                { titulo: 'Construído por quem entende de operação',   desc: '+20 anos de experiência em vendas consultivas (farmacêutico, imobiliário, bancário). A gente não entrega tecnologia e vai embora — entrega resultado e fica junto.' },
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
                    ['⚛️', 'React / Node.js',  'Sites e aplicações'],
                    ['🐍', 'Python',           'Automações e dados'],
                    ['📊', 'Dashboards BI',    'KPIs em tempo real'],
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
            ⚠ Atendemos no máximo 5 novos clientes por mês para garantir qualidade de entrega
          </div>

          <div className="cta-header">
            <h2 className="cta-h2" style={{ color: C.white }}>
              Pronto para descobrir quanto<br />
              <span style={{ color: C.gold }}>dinheiro está parado na sua operação?</span>
            </h2>
            <p className="cta-lead" style={{ color: C.muted }}>
              No Diagnóstico Estratégico Gratuito (60 min), mapeamos sua operação e calculamos
              ao vivo o potencial de receita — sem custo e sem compromisso.
            </p>
          </div>

          <div className="what-you-get" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
            <p className="section-tag" style={{ marginBottom: '1.25rem' }}>O que você recebe na sessão</p>
            <GreenCheck>Diagnóstico estratégico de 60 minutos com seus números reais</GreenCheck>
            <GreenCheck>Cálculo ao vivo do ROI potencial da sua operação</GreenCheck>
            <GreenCheck>Mapa de gargalos e oportunidades de crescimento</GreenCheck>
            <GreenCheck>Proposta personalizada — sem obrigação, sem pegadinha</GreenCheck>
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
              <label className="form-label" style={{ color: C.muted }}>Qual o maior desafio da sua operação hoje?</label>
              <select className="form-input" style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.muted }}>
                <option value="">Selecione...</option>
                <option>Não apareço no Google / preciso de site</option>
                <option>Perco contatos por falta de atendimento rápido</option>
                <option>Tenho base de clientes mas não reativo</option>
                <option>Preciso de um sistema / software sob medida</option>
                <option>Não tenho visibilidade dos meus números</option>
                <option>Quero automatizar processos manuais</option>
                <option>Outro</option>
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
            <a href="#solucoes">Soluções</a>
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
