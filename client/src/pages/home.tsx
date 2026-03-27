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
          {[["#problema","Vazamentos"],["#metodo","Método"],["#segmentos","Segmentos"],["#calculadora","ROI"],["#contato","Contato"]].map(([href, label]) => (
            <a key={href} href={href} className="nav-link" style={{ color: C.muted }}>{label}</a>
          ))}
        </div>
        <a href="#contato" className="btn-primary">Mapear Minha Operação</a>
      </nav>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="hero-section" style={{ background: C.bg }}>
        <div className="dot-grid-overlay" />
        <div className="hero-glow" />

        <div className="hero-inner">
          <div>
            <SectionTag>Para empresas que querem crescer sem continuar perdendo oportunidade no caminho</SectionTag>

            <h1 className="hero-h1" style={{ color: C.white }}>
              O problema da sua empresa<br />talvez não seja falta de demanda.
            </h1>
            <h2 className="hero-h2" style={{ color: C.gold }}>
              É dinheiro escapando todos os dias<br />sem ninguém perceber.
            </h2>
            <p className="hero-body" style={{ color: C.muted }}>
              A YumIA instala sites, automações, atendimento com IA, sistemas e dashboards
              para eliminar vazamentos comerciais, acelerar resposta, recuperar oportunidades
              e transformar operação desorganizada em crescimento com controle.
            </p>

            <div className="hero-ctas">
              <a href="#contato" className="btn-primary btn-pulse">
                Quero descobrir onde estou perdendo dinheiro →
              </a>
              <a href="#metodo" className="btn-ghost" style={{ color: C.muted }}>
                Ver como funciona
              </a>
            </div>
          </div>

          {/* Hero stats */}
          <div className="hero-stats-grid">
            {[
              { num: 'Resposta', label: 'Quando o lead esfria, a venda morre rápido', sub: 'Velocidade importa' },
              { num: 'Base antiga', label: 'Receita esquecida que quase ninguém trabalha', sub: 'Cliente antigo ainda vale ouro' },
              { num: 'Processo manual', label: 'Tempo caro sendo queimado em tarefa repetitiva', sub: 'Equipe ocupada não é equipe produtiva' },
              { num: 'Dados claros', label: 'O que separa crescimento de improviso', sub: 'Quem enxerga decide melhor' },
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
            <SectionTag>O que mais trava crescimento hoje</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              Sua operação pode estar<br />vazando receita em silêncio.
            </h2>
            <p className="section-lead" style={{ color: C.muted }}>
              O dinheiro raramente some por um motivo só. Normalmente ele escapa em vários pontos pequenos:
              atendimento lento, presença fraca, base esquecida e gestão sem visibilidade.
            </p>
          </div>

          <div className="grid-2">
            {[
              {
                icon: '🔍',
                title: 'Você não convence com força onde o cliente procura',
                body: 'Site fraco, presença digital mal posicionada e comunicação genérica fazem sua empresa perder autoridade antes mesmo da conversa começar.'
              },
              {
                icon: '⏱️',
                title: 'O interesse chega quente e esfria rápido',
                body: 'Lead não espera boa vontade. Quando a resposta demora, a chance cai, o concorrente entra e a oportunidade some.'
              },
              {
                icon: '💤',
                title: 'Sua base antiga virou dinheiro parado',
                body: 'Clientes que já confiaram em você custam menos para reativar, voltam mais rápido e ainda podem indicar. Mesmo assim, quase sempre ficam abandonados.'
              },
              {
                icon: '📉',
                title: 'A empresa cresce no escuro',
                body: 'Sem dashboard, sem funil claro e sem métricas vivas, decisão vira sensação. E sensação custa caro.'
              },
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
            <SectionTag>O que a YumIA instala na operação</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              Não vendemos ferramenta.<br />Construímos estrutura para crescer.
            </h2>
            <p className="section-lead" style={{ color: C.muted }}>
              Em vez de soluções soltas, conectamos presença, conversão e gestão para sua empresa vender melhor,
              operar com menos atrito e escalar com mais clareza.
            </p>
          </div>

          <div className="grid-3">
            {[
              {
                nome: 'Atrair melhor',
                resultado: 'Mais autoridade, mais confiança, mais entrada qualificada',
                body: 'Sites estratégicos, landing pages e presença digital para posicionar melhor sua empresa e fazer o cliente chegar mais preparado para comprar.',
                tags: ['Site estratégico', 'Landing page', 'Google otimizado'],
              },
              {
                nome: 'Responder mais rápido',
                resultado: 'Menos lead perdido, mais oportunidade aproveitada',
                body: 'IA no WhatsApp, automação comercial, triagem e agendamento para responder com velocidade e deixar sua equipe focada em fechar.',
                tags: ['WhatsApp com IA', 'Qualificação automática', 'Agendamento inteligente'],
              },
              {
                nome: 'Escalar com controle',
                resultado: 'Mais visibilidade operacional, menos improviso',
                body: 'Dashboards, reativação de base, sistemas e automações sob medida para reduzir retrabalho, aumentar previsibilidade e organizar crescimento.',
                tags: ['Dashboard em tempo real', 'Reativação de base', 'Sistema sob medida'],
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
            <SectionTag>Método proprietário</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              Método <span style={{ color: C.gold }}>MAPA</span>
            </h2>
            <p className="section-lead" style={{ color: C.muted }}>
              Antes de falar em ferramenta, mostramos onde a operação está travando, o que faz sentido atacar primeiro
              e como construir uma estrutura que gere impacto real.
            </p>
          </div>

          <div className="grid-4">
            {[
              { l: 'M', nome: 'Mapeamento', time: 'Semana 1', body: 'Analisamos demanda, atendimento, base, processo comercial e operação para identificar os vazamentos que mais custam hoje.' },
              { l: 'A', nome: 'Arquitetura', time: 'Semana 2', body: 'Desenhamos a estrutura ideal para o momento da empresa: o que entra primeiro, o que gera impacto mais rápido e o que sustenta escala.' },
              { l: 'P', nome: 'Prototipagem', time: 'Semanas 3–5', body: 'Implementamos as primeiras entregas com velocidade para você começar a sentir ganho prático enquanto a estrutura é construída.' },
              { l: 'A', nome: 'Aceleração', time: 'Contínuo', body: 'Ajustamos com base em dados reais, ampliamos o que funciona e transformamos melhoria pontual em rotina de crescimento.' },
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
            <SectionTag>Estrutura aplicada ao seu mercado</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              A mesma lógica de crescimento.<br />Adaptada ao seu nicho.
            </h2>
            <p className="section-lead" style={{ color: C.muted }}>
              A YumIA não entra com pacote genérico. Ajustamos a operação, a linguagem e a automação
              para a realidade comercial de cada segmento.
            </p>
          </div>

          <div className="grid-3">
            {[
              {
                icon: '🏢',
                nome: 'Imobiliárias',
                dores: ['Lead sem follow-up', 'Captação desorganizada', 'Corretores sem processo claro', 'Funil pouco visível'],
                stat: 'Captação',
                statSub: 'mais organizada e previsível',
                link: 'https://imoveis.yumia.com.br',
                cta: 'Ver solução para imobiliárias',
              },
              {
                icon: '⚖️',
                nome: 'Escritórios de Advocacia',
                dores: ['Consulta perdida fora do horário', 'Triagem manual e cara', 'Base antiga esquecida', 'Equipe técnica consumida por operação'],
                stat: 'Atendimento',
                statSub: 'mais rápido e qualificado',
                link: 'https://advogados.yumia.com.br',
                cta: 'Ver solução para advocacia',
              },
              {
                icon: '🏥',
                nome: 'Clínicas e Consultórios',
                dores: ['Recepção sobrecarregada', 'Pacientes inativos sem ação', 'Agendamento lento', 'Operação sem painel claro'],
                stat: 'Rotina',
                statSub: 'mais fluida e controlada',
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
                <a
                  href={seg.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: 'auto',
                    display: 'block',
                    textAlign: 'center',
                    padding: '0.6rem 1rem',
                    border: `1px solid ${C.gold}40`,
                    borderRadius: '0.5rem',
                    color: C.gold,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    transition: 'all 150ms'
                  }}
                >
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
                Ferramenta solta não resolve.<br />Estrutura com lógica comercial resolve.
              </h2>
              <p className="section-lead" style={{ color: C.muted, marginBottom: '2rem' }}>
                O mercado já está cheio de promessa bonita, automação sem direção e tecnologia que não conversa com a operação.
                A YumIA conecta tudo com um objetivo: fazer a empresa crescer melhor.
              </p>

              {[
                {
                  titulo: 'Pensamos em resultado, não em enfeite',
                  desc: 'Cada entrega precisa cumprir uma função clara: atrair, converter, organizar ou escalar. Se não mexe no ponteiro, não entra.'
                },
                {
                  titulo: 'Tudo nasce integrado',
                  desc: 'Site, automação, IA, dashboard, sistema e rotina comercial são pensados juntos. Sem remendo. Sem gambiarra digital.'
                },
                {
                  titulo: 'Visão comercial + execução tecnológica',
                  desc: 'A YumIA une experiência de operação e vendas com implementação prática. Não é tecnologia pela tecnologia. É estrutura aplicada ao crescimento.'
                },
              ].map((d, i) => (
                <div key={i} className="diff-card" style={{ background: C.panel, borderLeft: `3px solid ${C.gold}` }}>
                  <h3 className="card-title" style={{ color: C.white }}>{d.titulo}</h3>
                  <p className="card-body" style={{ color: C.muted }}>{d.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <div className="mission-box" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
                <p className="section-tag" style={{ marginBottom: '1rem' }}>Nossa visão</p>
                <p className="mission-text" style={{ color: C.muted }}>
                  "A YumIA existe para ajudar empresas a operarem com a eficiência que o crescimento exige.
                  IA não é para substituir pessoas. É para devolver velocidade, clareza e capacidade de execução."
                </p>
              </div>

              <div className="tech-box" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
                <p className="section-tag" style={{ marginBottom: '1.5rem' }}>Ecossistema tecnológico</p>
                <div className="tech-grid">
                  {[
                    ['⚙️', 'n8n / Make', 'Fluxos e integrações'],
                    ['💬', 'WhatsApp API', 'Atendimento e automação'],
                    ['🧠', 'OpenAI / Claude', 'IA conversacional'],
                    ['📋', 'CRM Integrado', 'Continuidade operacional'],
                    ['🐍', 'Python', 'Automações customizadas'],
                    ['📅', 'Google Calendar', 'Agendamento inteligente'],
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
            ⚠ Trabalhamos com agenda limitada para manter profundidade na implementação
          </div>

          <div className="cta-header">
            <h2 className="cta-h2" style={{ color: C.white }}>
              Descubra onde sua empresa está<br />
              <span style={{ color: C.gold }}>deixando dinheiro na mesa.</span>
            </h2>
            <p className="cta-lead" style={{ color: C.muted }}>
              Em uma sessão estratégica, a YumIA analisa sua operação, identifica os gargalos mais caros
              e mostra por onde faz sentido começar para ganhar velocidade, clareza e resultado.
            </p>
          </div>

          <div className="what-you-get" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
            <p className="section-tag" style={{ marginBottom: '1.25rem' }}>O que você recebe na sessão</p>
            <GreenCheck>Leitura dos principais vazamentos da operação</GreenCheck>
            <GreenCheck>Diagnóstico dos gargalos mais caros hoje</GreenCheck>
            <GreenCheck>Direções práticas com IA, automação e dados</GreenCheck>
            <GreenCheck>Próximos passos claros, com ou sem projeto</GreenCheck>
          </div>

          <form className="contact-form" style={{ background: C.panel, border: `1px solid ${C.border}` }} onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              {[
                { name: 'nome', label: 'Nome completo', placeholder: 'Seu nome' },
                { name: 'empresa', label: 'Empresa / Segmento', placeholder: 'Empresa e seu setor' },
              ].map(f => (
                <div key={f.name} className="form-field">
                  <label className="form-label" style={{ color: C.muted }}>{f.label}</label>
                  <input
                    name={f.name}
                    placeholder={f.placeholder}
                    className="form-input"
                    style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.text }}
                  />
                </div>
              ))}
            </div>

            <div className="form-row">
              {[
                { name: 'whatsapp', label: 'WhatsApp', placeholder: '+55 (11) 96418-0674' },
                { name: 'email', label: 'E-mail', placeholder: 'voce@empresa.com.br' },
              ].map(f => (
                <div key={f.name} className="form-field">
                  <label className="form-label" style={{ color: C.muted }}>{f.label}</label>
                  <input
                    name={f.name}
                    placeholder={f.placeholder}
                    className="form-input"
                    style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.text }}
                  />
                </div>
              ))}
            </div>

            <div className="form-field" style={{ marginBottom: '1.5rem' }}>
              <label className="form-label" style={{ color: C.muted }}>Qual o principal desafio hoje?</label>
              <select className="form-input" style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.muted }}>
                <option value="">Selecione...</option>
                <option>Gerar mais demanda qualificada</option>
                <option>Responder mais rápido os leads</option>
                <option>Reativar clientes antigos</option>
                <option>Organizar operação e funil</option>
                <option>Criar sistema / automação sob medida</option>
              </select>
            </div>

            <button type="submit" className="btn-primary btn-full">
              Quero meu diagnóstico estratégico →
            </button>

            <p className="form-fine" style={{ color: '#3A3A4A' }}>
              Sessão inicial sem compromisso · Clareza antes de investir
            </p>
          </form>

          <div className="contact-info">
            {[
              { icon: '📞', label: 'Telefone', value: '+55 (11) 96418-0674' },
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
            <a href="#problema">Vazamentos</a>
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

      {/* ── WHATSAPP FLOATING BUTTON ──────────────────────── */}
      <a
        href="https://wa.me/5511964180674?text=Ol%C3%A1!%20Quero%20entender%20onde%20minha%20opera%C3%A7%C3%A3o%20est%C3%A1%20perdendo%20dinheiro."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          background: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          zIndex: 1000,
          transition: 'transform 0.3s ease',
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
