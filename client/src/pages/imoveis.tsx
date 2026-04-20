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
export default function Imoveis() {
  return (
    <main style={{ background: C.bg, color: C.text, fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── NAV ───────────────────────────────────────────── */}
      <nav className="site-nav">
        <a href="/" className="nav-logo">
          <img src="/YumIA_logo.svg" alt="YumIA" width={40} height={40} />
          <span className="nav-wordmark" style={{ color: C.gold }}>YumIA</span>
        </a>
        <div className="nav-links">
          {[["#problema","Problema"],["#metodo","Método"],["#calculadora","ROI"],["#contato","Contato"]].map(([href, label]) => (
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
            <SectionTag>Para imobiliárias e corretores em São Paulo</SectionTag>
            <h1 className="hero-h1" style={{ color: C.white }}>
              Sua imobiliária<br />deixa dinheiro na mesa.
            </h1>
            <h2 className="hero-h2" style={{ color: C.gold }}>
              A YumIA recupera esse dinheiro<br />com Inteligência Artificial.
            </h2>
            <p className="hero-body" style={{ color: C.muted }}>
              Leads que esfriam, base adormecida, corretores sobrecarregados com operacional e gestões sem visibilidade.
              Instalamos a infraestrutura que transforma vazamento em faturamento — sem anúncio adicional.
            </p>
            <div className="hero-ctas">
              <a href="#contato" className="btn-primary btn-pulse">
                Quero recuperar receita perdida →
              </a>
              <a href="#metodo" className="btn-ghost" style={{ color: C.muted }}>
                Ver como funciona
              </a>
            </div>
          </div>

          {/* Hero stats */}
          <div className="hero-stats-grid">
            {[
              { num: '8×', label: 'Mais conversão respondendo em 5 minutos', sub: 'Velocidade é tudo' },
              { num: '2.000+', label: 'Leads adormecidos na base média', sub: 'Dinheiro parado' },
              { num: '40%', label: 'Do tempo do corretor gasto em operacional', sub: 'Tempo que não vende' },
              { num: '60-90 dias', label: 'Payback médio da infraestrutura', sub: 'ROI rápido' },
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

      {/* ── PROBLEMA ────────────────────────────────────────── */}
      <section id="problema" className="section-padded" style={{ background: '#09091a' }}>
        <div className="container">
          <div className="section-header">
            <SectionTag>O que trava imobiliárias em SP</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              O mercado cresce.<br />A sua operação, nem tanto.
            </h2>
            <p className="section-lead" style={{ color: C.muted }}>
              São Paulo vive o maior boom imobiliário da última década. Mas a maioria das imobiliárias ainda opera como em 2010.
            </p>
          </div>

          <div className="grid-2">
            {[
              { icon: '⏱️', title: 'Resposta lenta = lead perdido', body: 'Responder em 5 min aumenta 8× a conversão. Depois de 2h, a taxa é próxima de zero. Cada lead que chega fora do horário vai para o concorrente.' },
              { icon: '💤', title: 'Cemitério de leads', body: 'Centenas de contatos que chegaram, custaram para ser captados, e nunca foram reabordados. Estão dormindo na sua planilha agora.' },
              { icon: '📊', title: '40% do tempo em operacional', body: 'Corretores gastam quase metade do dia em tarefas que não vendem: propostas, follow-ups manuais, preenchimento de sistemas.' },
              { icon: '📉', title: 'Gestão no escuro', body: 'Sem visibilidade do funil, decisões são tomadas na intuição. Quais leads estão quentes? Onde os negócios travam? Ninguém sabe.' },
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

      {/* ── O QUE ENTREGAMOS ──────────────────────────────── */}
      <section className="section-padded" style={{ background: C.bg }}>
        <div className="container">
          <div className="section-header">
            <SectionTag>O que a YumIA instala na operação</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              Não instalamos ferramentas.<br />Instalamos faturamento.
            </h2>
          </div>

          <div className="grid-3">
            {[
              {
                nome: 'Atendimento Inteligente 24/7',
                resultado: 'Zero leads perdidos por horário',
                body: 'IA responde instantaneamente no WhatsApp, qualifica por perfil e intenção, agenda visitas e entrega o lead ao corretor somente quando está pronto para comprar.',
                tags: ['Resposta < 60 seg', 'Qualificação automática', 'Integração CRM'],
              },
              {
                nome: 'Automação do Funil',
                resultado: '80% menos trabalho operacional',
                body: 'Follow-ups, propostas, lembretes e acompanhamentos automáticos. O corretor recebe um alerta apenas no momento certo — e foca em fechar, não em administrar.',
                tags: ['-70% tarefas manuais', 'Propostas automáticas', 'Alertas inteligentes'],
              },
              {
                nome: 'Inteligência Operacional',
                resultado: 'Decisões baseadas em dados reais',
                body: 'Dashboard unificado: quais leads estão quentes agora, onde os negócios travam, performance por corretor, previsão de receita. Visibilidade total em tempo real.',
                tags: ['Funil em tempo real', 'Performance por corretor', 'Previsão de receita'],
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
                      <span style={{ color: C.green, fontSize: '0.6rem' }}>✓</span>
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
            <SectionTag>Nossa metodologia</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              Método <span style={{ color: C.gold }}>MAPA</span>
            </h2>
            <p className="section-lead" style={{ color: C.muted }}>
              Diagnóstico profundo, arquitetura personalizada, implementação progressiva e aceleração contínua.
              Você vê resultado antes de qualquer investimento pesado.
            </p>
          </div>

          <div className="grid-4">
            {[
              { l: 'M', nome: 'Mapeamento', time: 'Semana 1', body: 'Diagnóstico completo: tamanho da base, gargalos do funil, onde a receita está vazando. Você recebe um relatório com ROI projetado antes de qualquer investimento.' },
              { l: 'A', nome: 'Arquitetura', time: 'Semana 2', body: 'Desenho personalizado: quais automações, integrações com seu CRM e fluxos serão construídos. Você aprova o plano antes de avançar.' },
              { l: 'P', nome: 'Prototipagem', time: 'Semanas 3–5', body: 'Implementação progressiva com validação em tempo real. A equipe já usa e já vê resultados — sem esperar um projeto pronto que nunca chega.' },
              { l: 'A', nome: 'Aceleração', time: 'Contínuo', body: 'Monitoramento do ROI, refinamento dos modelos e expansão das automações. A IA melhora com o tempo — e nosso sucesso é atrelado ao seu.' },
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

      {/* ── COMO FUNCIONA ─────────────────────────────────── */}
      <section className="section-padded" style={{ background: C.bg }}>
        <div className="container">
          <div className="section-header">
            <SectionTag>Como funciona na prática</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              Integrado com o que você já usa.<br />Zero troca de sistema.
            </h2>
          </div>
          <div className="grid-4">
            {[
              { icon: '📥', title: 'Lead chega', body: 'WhatsApp, portal, site' },
              { icon: '🤖', title: 'IA qualifica', body: 'Em < 60 segundos' },
              { icon: '📊', title: 'Lead scoring', body: 'Automático' },
              { icon: '🎯', title: 'Corretor recebe', body: 'Lead quente' },
            ].map((step, i) => (
              <div key={i} className="mapa-card" style={{ background: C.panel, border: `1px solid ${C.border}`, textAlign: 'center' }}>
                <span style={{ fontSize: '2rem' }}>{step.icon}</span>
                <h3 className="card-title" style={{ color: C.white, marginTop: '0.75rem' }}>{step.title}</h3>
                <p className="card-body" style={{ color: C.muted }}>{step.body}</p>
              </div>
            ))}
          </div>

          <div className="tech-grid" style={{ marginTop: '2rem' }}>
            {[
              ['⚙️', 'n8n / Make', 'Automações e fluxos'],
              ['💬', 'WhatsApp API', 'Atendimento e follow-up'],
              ['🧠', 'OpenAI / Claude', 'IA conversacional'],
              ['📅', 'Google Calendar', 'Agendamento automático'],
              ['📋', 'Kenlo / CV CRM', 'Integração imobiliária'],
              ['🐍', 'Python', 'Automações customizadas'],
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
      </section>

      {/* ── CALCULADORA ROI ───────────────────────────────── */}
      <RoiCalculator />

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <section id="contato" className="section-padded" style={{ background: C.bg }}>
        <div className="container cta-container">
          <div className="cta-badge" style={{ background: '#1a1a00', color: '#c9c050', border: '1px solid #3a3a00' }}>
            ⚠ Trabalhamos com agenda limitada para manter profundidade na implementação
          </div>

          <div className="cta-header">
            <h2 className="cta-h2" style={{ color: C.white }}>
              Descubra quanto dinheiro está<br />
              <span style={{ color: C.gold }}>adormecido na sua operação.</span>
            </h2>
            <p className="cta-lead" style={{ color: C.muted }}>
              Diagnóstico Estratégico Gratuito — 60 minutos. Análise da sua base, 3 gargalos identificados e estimativa de ROI personalizada.
            </p>
          </div>

          <div className="what-you-get" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
            <p className="section-tag" style={{ marginBottom: '1.25rem' }}>O que você recebe na sessão</p>
            <GreenCheck>Análise do potencial da sua base de leads</GreenCheck>
            <GreenCheck>3 gargalos de receita identificados</GreenCheck>
            <GreenCheck>Estimativa de ROI personalizada</GreenCheck>
            <GreenCheck>Plano de ação com primeiras etapas</GreenCheck>
          </div>

          <form className="contact-form" style={{ background: C.panel, border: `1px solid ${C.border}` }} onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              {[
                { name: 'nome', label: 'Nome completo', placeholder: 'Seu nome' },
                { name: 'empresa', label: 'Imobiliária', placeholder: 'Nome da imobiliária' },
              ].map(f => (
                <div key={f.name} className="form-field">
                  <label className="form-label" style={{ color: C.muted }}>{f.label}</label>
                  <input name={f.name} placeholder={f.placeholder} className="form-input" style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.text }} />
                </div>
              ))}
            </div>
            <div className="form-row">
              {[
                { name: 'whatsapp', label: 'WhatsApp', placeholder: '+55 (11) 9XXXX-XXXX' },
                { name: 'email', label: 'E-mail', placeholder: 'voce@imobiliaria.com.br' },
              ].map(f => (
                <div key={f.name} className="form-field">
                  <label className="form-label" style={{ color: C.muted }}>{f.label}</label>
                  <input name={f.name} placeholder={f.placeholder} className="form-input" style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.text }} />
                </div>
              ))}
            </div>
            <div className="form-field" style={{ marginBottom: '1.5rem' }}>
              <label className="form-label" style={{ color: C.muted }}>Qual o principal desafio hoje?</label>
              <select className="form-input" style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.muted }}>
                <option value="">Selecione...</option>
                <option>Leads sem follow-up</option>
                <option>Captação desorganizada</option>
                <option>Corretores sem processo claro</option>
                <option>Funil pouco visível</option>
                <option>Base antiga parada</option>
              </select>
            </div>
            <button type="submit" className="btn-primary btn-full">Quero meu diagnóstico gratuito →</button>
            <p className="form-fine" style={{ color: '#3A3A4A' }}>60 min · Sem compromisso · ROI personalizado para sua operação</p>
          </form>

          <div className="contact-info">
            {[
              { icon: '📞', label: 'WhatsApp', value: '+55 (11) 96418-0674' },
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
            <a href="#problema">Problema</a>
            <a href="#metodo">Método MAPA</a>
            <a href="#calculadora">Calculadora ROI</a>
            <a href="#contato">Contato</a>
          </div>
          <p className="footer-copy" style={{ color: '#2A2A3A' }}>
            © {new Date().getFullYear()} YumIA · Todos os direitos reservados
          </p>
        </div>
      </footer>

      {/* ── WHATSAPP FLOAT ──────────────────────────────── */}
      <a
        href="https://wa.me/5511964180674?text=Ol%C3%A1!%20Sou%20de%20uma%20imobili%C3%A1ria%20e%20quero%20entender%20onde%20estou%20perdendo%20dinheiro."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed', bottom: '2rem', right: '2rem', width: '60px', height: '60px',
          background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)', zIndex: 1000, transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.253-.041.397.303.145.348.492 1.201.535 1.288.044.087.073.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
        </svg>
      </a>
    </main>
  )
}