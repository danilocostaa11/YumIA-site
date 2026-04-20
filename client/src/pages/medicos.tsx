import RoiCalculator from '../components/RoiCalculator'

const C = {
  gold: '#C9A96E', goldL: '#E8CB94', goldD: '#7A6030',
  bg: '#07070E', panel: '#0D0D1C', border: '#1C1C32',
  text: '#D8D4CC', muted: '#6A6660', green: '#4ECF88',
  red: '#E05555', white: '#F0ECE4',
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return <p className="section-tag">{children}</p>
}
function GreenCheck({ children }: { children: React.ReactNode }) {
  return (<div className="green-check"><span style={{ color: C.green, flexShrink: 0 }}>✓</span><span className="text-sm" style={{ color: C.text }}>{children}</span></div>)
}

export default function Medicos() {
  return (
    <main style={{ background: C.bg, color: C.text, fontFamily: "'DM Sans', sans-serif" }}>

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

      <section className="hero-section" style={{ background: C.bg }}>
        <div className="dot-grid-overlay" />
        <div className="hero-glow" />
        <div className="hero-inner">
          <div>
            <SectionTag>Para clínicas e consultórios</SectionTag>
            <h1 className="hero-h1" style={{ color: C.white }}>
              Sua clínica deixa<br />pacientes na mesa.
            </h1>
            <h2 className="hero-h2" style={{ color: C.gold }}>
              A YumIA transforma faltas e inativos<br />em receita real.
            </h2>
            <p className="hero-body" style={{ color: C.muted }}>
              No-show que gera buraco na agenda. Pacientes que vieram uma vez e nunca mais voltaram.
              Recepção sobrecarregada com confirmações. Tudo isso é receita que já está na sua base — basta recuperar.
            </p>
            <div className="hero-ctas">
              <a href="#contato" className="btn-primary btn-pulse">Quero recuperar receita perdida →</a>
              <a href="#metodo" className="btn-ghost" style={{ color: C.muted }}>Ver como funciona</a>
            </div>
          </div>

          <div className="hero-stats-grid">
            {[
              { num: '15%+', label: 'Taxa média de no-show em clínicas', sub: 'Receita que simplesmente some' },
              { num: '2,5%', label: 'Taxa de reativação da base inativa', sub: 'Que vira paciente de novo' },
              { num: '40%', label: 'Do tempo da recepção em tarefas manuais', sub: 'Agendas, confirmações, lembretes' },
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

      <section id="problema" className="section-padded" style={{ background: '#09091a' }}>
        <div className="container">
          <div className="section-header">
            <SectionTag>O que trava clínicas e consultórios</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              Cada faltoso é dinheiro<br />que some da agenda.
            </h2>
          </div>
          <div className="grid-2">
            {[
              { icon: '📉', title: 'Alta taxa de no-show', body: 'Acima de 15% é urgente. Cada paciente que falta é horário vago que poderia gerar receita. E quem faltou raramente remarca sozinho.' },
              { icon: '⏱️', title: 'Recepção sobrecarregada', body: 'Confirmações manuais, remarcações, respostas a dúvidas simples. A recepção faz trabalho que a IA resolve em segundos.' },
              { icon: '💤', title: 'Pacientes inativos sem ação', body: 'Quem veio uma vez e não retornou. Sem sistema de lembrete, sem campanha de reativação. A base cresce, mas a agenda não.' },
              { icon: '📉', title: 'Operação sem visibilidade', body: 'Sem dashboard, a gestão é na intuição. Quais médicos têm mais no-show? Qual procedimento tem mais cancelamento? Ninguém sabe.' },
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

      <section className="section-padded" style={{ background: C.bg }}>
        <div className="container">
          <div className="section-header">
            <SectionTag>O que a YumIA instala na clínica</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              A IA cuida do operacional.<br />Sua equipe foca no paciente.
            </h2>
          </div>
          <div className="grid-3">
            {[
              {
                nome: 'Agendamento Inteligente 24/7',
                resultado: 'Zero consultas perdidas por horário',
                body: 'IA responde no WhatsApp, qualifica o paciente por tipo de procedimento, verifica disponibilidade e agenda automaticamente. Sem buraco na agenda.',
                tags: ['Resposta < 60 seg', 'Confirmação automática', 'Integração com agenda'],
              },
              {
                nome: 'Reativação de Pacientes',
                resultado: 'Receita adormecida convertida em consultas',
                body: 'Mensagens personalizadas para pacientes inativos, lembretes de retorno e check-up. A base que já confiou na clínica é a mais barata de reativar.',
                tags: ['Campanhas automáticas', 'Lembretes de retorno', 'Redução de no-show'],
              },
              {
                nome: 'Inteligência Operacional',
                resultado: 'Gestão baseada em dados reais',
                body: 'Dashboard por médico: taxa de no-show, ocupação da agenda, receita por especialidade. Decisões com dados, não com achismo.',
                tags: ['Ocupação por médico', 'Taxa de no-show', 'Receita por especialidade'],
              },
            ].map((s, i) => (
              <div key={i} className="service-card" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
                <div className="service-card-header">
                  <h3 className="service-name" style={{ color: C.gold }}>{s.nome}</h3>
                  <span className="result-badge" style={{ background: '#0A1A10', border: `1px solid ${C.green}30`, color: C.green }}>→ {s.resultado}</span>
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

      <section id="metodo" className="section-padded" style={{ background: '#09091a' }}>
        <div className="container">
          <div className="section-header">
            <SectionTag>Metodologia exclusiva</SectionTag>
            <h2 className="section-h2" style={{ color: C.white }}>
              Método <span style={{ color: C.gold }}>MAPA</span>
            </h2>
            <p className="section-lead" style={{ color: C.muted }}>
              Antes de qualquer investimento, mostramos o ROI potencial da sua operação específica. Você decide com dados, não com promessa.
            </p>
          </div>
          <div className="grid-4">
            {[
              { l: 'M', nome: 'Mapeamento', time: 'Semana 1', body: 'Diagnóstico da clínica: volume de contatos, taxa de no-show, base inativa, gargalos de agendamento.' },
              { l: 'A', nome: 'Arquitetura', time: 'Semana 2', body: 'Desenho personalizado de automações e integrações com seu sistema de gestão e agenda.' },
              { l: 'P', nome: 'Prototipagem', time: 'Semanas 3–5', body: 'Implementação progressiva. A recepção já sente a diferença — sem esperar um projeto pronto.' },
              { l: 'A', nome: 'Aceleração', time: 'Contínuo', body: 'Monitoramento de ROI, ajuste de mensagens e expansão. A IA melhora com o tempo.' },
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

      <RoiCalculator />

      <section id="contato" className="section-padded" style={{ background: C.bg }}>
        <div className="container cta-container">
          <div className="cta-badge" style={{ background: '#1a1a00', color: '#c9c050', border: '1px solid #3a3a00' }}>
            ⚠ Trabalhamos com agenda limitada para manter profundidade na implementação
          </div>
          <div className="cta-header">
            <h2 className="cta-h2" style={{ color: C.white }}>
              Descubra quanto dinheiro está<br />
              <span style={{ color: C.gold }}>adormecido na sua clínica.</span>
            </h2>
            <p className="cta-lead" style={{ color: C.muted }}>
              Diagnóstico Estratégico Gratuito — 60 minutos. Sem compromisso.
            </p>
          </div>
          <div className="what-you-get" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
            <p className="section-tag" style={{ marginBottom: '1.25rem' }}>O que você recebe na sessão</p>
            <GreenCheck>Análise do volume de contatos e taxa de no-show</GreenCheck>
            <GreenCheck>3 gargalos de receita identificados com valores</GreenCheck>
            <GreenCheck>Estimativa de ROI personalizada para sua clínica</GreenCheck>
            <GreenCheck>Plano de ação com primeiras etapas</GreenCheck>
          </div>
          <form className="contact-form" style={{ background: C.panel, border: `1px solid ${C.border}` }} onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              {[
                { name: 'nome', label: 'Nome completo', placeholder: 'Dr(a). Seu nome' },
                { name: 'empresa', label: 'Clínica / Consultório', placeholder: 'Nome da clínica' },
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
                { name: 'email', label: 'E-mail', placeholder: 'voce@clinica.com.br' },
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
                <option>Alta taxa de no-show</option>
                <option>Recepção sobrecarregada</option>
                <option>Pacientes inativos sem ação</option>
                <option>Agendamento lento</option>
                <option>Operação sem visibilidade</option>
              </select>
            </div>
            <button type="submit" className="btn-primary btn-full">Quero meu diagnóstico gratuito →</button>
            <p className="form-fine" style={{ color: '#3A3A4A' }}>60 min · Sem compromisso · ROI personalizado para sua clínica</p>
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
          <p className="footer-copy" style={{ color: '#2A2A3A' }}>© {new Date().getFullYear()} YumIA · Todos os direitos reservados</p>
        </div>
      </footer>

      <a href="https://wa.me/5511964180674?text=Ol%C3%A1!%20Sou%20de%20uma%20cl%C3%ADnica%20e%20quero%20entender%20onde%20estou%20perdendo%20receita."
        target="_blank" rel="noopener noreferrer"
        style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: '60px', height: '60px', background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', zIndex: 1000, transition: 'transform 0.3s ease' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.253-.041.397.303.145.348.492 1.201.535 1.288.044.087.073.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" /></svg>
      </a>
    </main>
  )
}