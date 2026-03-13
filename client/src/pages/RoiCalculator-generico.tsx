import { useState, useEffect, useRef } from 'react'

// ── Animated number ────────────────────────────────────────────
function AnimatedNumber({ value, prefix = 'R$ ', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const [display, setDisplay] = useState(0)
  const prevRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const start = prevRef.current
    const end = value
    const startTime = performance.now()
    prevRef.current = value
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / 800, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(start + (end - start) * eased)
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [value])

  return <span>{prefix}{Math.round(display).toLocaleString('pt-BR')}{suffix}</span>
}

// ── Slider ─────────────────────────────────────────────────────
function Slider({ label, sub, value, min, max, step, onChange, format, accent = '#C9A96E' }: {
  label: string; sub?: string; value: number; min: number; max: number
  step: number; onChange: (v: number) => void; format: (v: number) => string; accent?: string
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div style={{ marginBottom: '1.75rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
        <div>
          <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#D8D4CC', margin: 0 }}>{label}</p>
          {sub && <p style={{ fontSize: '0.75rem', color: '#6A6660', margin: '2px 0 0' }}>{sub}</p>}
        </div>
        <span style={{ fontSize: '1.125rem', fontWeight: 700, fontFamily: 'Georgia, serif', color: accent }}>
          {format(value)}
        </span>
      </div>
      <div style={{ position: 'relative', height: 6, borderRadius: 3, background: '#1C1C32' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', borderRadius: 3, width: `${pct}%`, background: `linear-gradient(90deg, #3a3010, ${accent})`, transition: 'width 100ms' }} />
        <input type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }} />
        <div style={{
          position: 'absolute', top: '50%', width: 16, height: 16, borderRadius: '50%',
          background: accent, border: '2px solid #07070E', boxShadow: `0 0 8px ${accent}66`,
          transform: 'translateX(-50%) translateY(-50%)', left: `${pct}%`, pointerEvents: 'none', transition: 'left 100ms'
        }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
        <span style={{ fontSize: '0.7rem', color: '#3A3A4A' }}>{format(min)}</span>
        <span style={{ fontSize: '0.7rem', color: '#3A3A4A' }}>{format(max)}</span>
      </div>
    </div>
  )
}

// ── Option pills ───────────────────────────────────────────────
function OptionPills({ label, sub, options, value, onChange }: {
  label: string; sub?: string; options: { value: string; label: string }[]
  value: string; onChange: (v: string) => void
}) {
  return (
    <div style={{ marginBottom: '1.75rem' }}>
      <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#D8D4CC', margin: '0 0 4px' }}>{label}</p>
      {sub && <p style={{ fontSize: '0.75rem', color: '#6A6660', margin: '0 0 12px' }}>{sub}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {options.map(opt => (
          <button key={opt.value} onClick={() => onChange(opt.value)} style={{
            padding: '6px 12px', borderRadius: 6, fontSize: '0.75rem', fontWeight: 500, cursor: 'pointer',
            transition: 'all 150ms', border: `1px solid ${value === opt.value ? '#C9A96E' : '#1C1C32'}`,
            background: value === opt.value ? '#1e1800' : 'transparent',
            color: value === opt.value ? '#C9A96E' : '#6A6660',
          }}>
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────
export default function RoiCalculator() {
  const [baseLeads, setBaseLeads]   = useState(1500)
  const [leadsNovos, setLeadsNovos] = useState(120)
  const [ticket, setTicket]         = useState(8000)
  const [corretores, setCorretores] = useState(5)
  const [resposta, setResposta]     = useState('lento')
  const [perfil, setPerfil]         = useState('imobiliaria')

  const RESP_PERDA: Record<string, number> = { instantaneo: 0.05, rapido: 0.20, lento: 0.52, muitoLento: 0.71 }
  const INVEST: Record<string, number>     = { corretor: 3600, imobiliaria: 18000, grande: 55000 }

  const perdaPct      = RESP_PERDA[resposta]
  const leadsPerdidos = Math.round(leadsNovos * perdaPct)
  const receitaResp   = leadsPerdidos * ticket * 0.08
  const leadsReat     = Math.round(baseLeads * 0.025)
  const receitaReat   = leadsReat * ticket
  const horasAdmin    = corretores * 176 * 0.40
  const valorHoras    = horasAdmin * 0.65 * 120
  const total         = (receitaResp * 12) + receitaReat + (valorHoras * 12)
  const investim      = INVEST[perfil]
  const roi           = total > 0 ? Math.round(((total - investim) / investim) * 100) : 0
  const payback       = Math.max(1, Math.round(investim / ((receitaResp + valorHoras) + receitaReat / 12)))
  const isHighLoss    = perdaPct > 0.4

  const panel  = '#0D0D1C'
  const border = '#1C1C32'
  const gold   = '#C9A96E'
  const goldL  = '#E8CB94'
  const green  = '#4ECF88'
  const muted  = '#6A6660'
  const white  = '#F0ECE4'
  const bg     = '#07070E'

  return (
    <section id="calculadora" style={{ padding: '6rem 1rem', background: bg }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#7A6030', marginBottom: '1rem' }}>
            Ferramenta Estratégica
          </p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 'clamp(28px,4vw,44px)', color: white, letterSpacing: '-1.5px', marginBottom: '1rem' }}>
            Quanto dinheiro está<br />
            <span style={{ color: gold }}>adormecido na sua operação?</span>
          </h2>
          <p style={{ fontSize: '1rem', color: muted, maxWidth: 480, margin: '0 auto', lineHeight: 1.8 }}>
            Preencha os dados. Os números atualizam em tempo real com benchmarks do mercado de São Paulo.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>

          {/* ── Inputs ── */}
          <div style={{ borderRadius: 16, padding: '2rem', background: panel, border: `1px solid ${border}` }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: muted, marginBottom: '2rem' }}>① Configure sua operação</p>

            <OptionPills label="Perfil da operação" sub="Ajusta os benchmarks de investimento"
              options={[{ value: 'corretor', label: 'Profissional Liberal' }, { value: 'imobiliaria', label: 'Empresa Média' }, { value: 'grande', label: 'Grande Empresa' }]}
              value={perfil} onChange={setPerfil} />

            <div style={{ borderTop: `1px solid ${border}`, margin: '1.5rem 0' }} />

            <Slider label="Contatos adormecidos na base" sub="Nunca responderam ou não avançaram"
              value={baseLeads} min={200} max={15000} step={100} onChange={setBaseLeads}
              format={v => v >= 1000 ? `${(v / 1000).toFixed(1)}k` : `${v}`} />
            <Slider label="Novos contatos por mês"
              value={leadsNovos} min={20} max={800} step={10} onChange={setLeadsNovos}
              format={v => `${v} leads`} />

            <div style={{ borderTop: `1px solid ${border}`, margin: '1.5rem 0' }} />

            <OptionPills label="Tempo médio de resposta ao lead" sub="Responder em < 5 min = 8× mais conversão"
              options={[{ value: 'instantaneo', label: '< 5 min' }, { value: 'rapido', label: '5–30 min' }, { value: 'lento', label: '30 min – 2h' }, { value: 'muitoLento', label: 'No dia seguinte' }]}
              value={resposta} onChange={setResposta} />

            <Slider label="Número de pessoas na equipe comercial"
              value={corretores} min={1} max={40} step={1} onChange={setCorretores}
              format={v => `${v} pessoa${v > 1 ? 's' : ''}`} accent="#6ab4ff" />

            <div style={{ borderTop: `1px solid ${border}`, margin: '1.5rem 0' }} />

            <Slider label="Ticket médio por venda ou contrato" sub="Valor que entra por negócio concluído"
              value={ticket} min={1500} max={50000} step={500} onChange={setTicket}
              format={v => `R$ ${(v / 1000).toFixed(0)}k`} accent={green} />
          </div>

          {/* ── Results ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Response alert */}
            <div style={{ borderRadius: 12, padding: '1.25rem', background: isHighLoss ? '#1a0808' : '#0f0f00', border: `1px solid ${isHighLoss ? '#E0555540' : '#3a3a0040'}`, transition: 'all 300ms' }}>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: muted, marginBottom: '0.75rem' }}>⚡ Impacto do tempo de resposta</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '0.875rem', color: '#D8D4CC', margin: 0 }}>
                    Você perde <strong style={{ color: isHighLoss ? '#E05555' : gold }}>{Math.round(perdaPct * 100)}%</strong> dos contatos por lentidão
                  </p>
                  <p style={{ fontSize: '0.75rem', color: muted, margin: '4px 0 0' }}>≈ {leadsPerdidos} contatos/mês indo para o concorrente</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '1.5rem', color: isHighLoss ? '#E05555' : gold, margin: 0 }}>
                    <AnimatedNumber value={receitaResp} />
                  </p>
                  <p style={{ fontSize: '0.75rem', color: muted, margin: '4px 0 0' }}>perdidos/mês</p>
                </div>
              </div>
            </div>

            {/* 2-col cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { label: 'Receita na base adormecida', icon: '💤', value: receitaReat, sub: `${leadsReat} contatos reativáveis (2,5%)`, accent: gold },
                { label: 'Valor do tempo liberado/mês', icon: '⏱️', value: valorHoras, sub: `${Math.round(horasAdmin * 0.65)}h/mês liberadas`, accent: '#6ab4ff' },
              ].map((c, i) => (
                <div key={i} style={{ borderRadius: 12, padding: '1.25rem', background: panel, border: `1px solid ${border}` }}>
                  <p style={{ fontSize: '0.75rem', color: muted, margin: '0 0 0.75rem' }}>{c.icon} {c.label}</p>
                  <p style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '1.25rem', color: c.accent, margin: '0 0 4px' }}>
                    <AnimatedNumber value={c.value} />
                  </p>
                  <p style={{ fontSize: '0.75rem', color: '#4A4A5A', margin: 0 }}>{c.sub}</p>
                </div>
              ))}
            </div>

            {/* Main opportunity */}
            <div style={{ borderRadius: 16, padding: '1.75rem', background: 'linear-gradient(135deg,#0f0e00,#1a1500,#0f0e00)', border: `1px solid ${gold}40`, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 160, height: 160, borderRadius: '50%', background: gold, filter: 'blur(40px)', opacity: 0.08, pointerEvents: 'none' }} />
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7A6030', marginBottom: '0.75rem' }}>✦ Oportunidade total — 12 meses</p>
              <p style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 'clamp(32px,5vw,48px)', color: gold, letterSpacing: '-2px', lineHeight: 1, margin: '0 0 0.75rem' }}>
                <AnimatedNumber value={total} />
              </p>
              <p style={{ fontSize: '0.875rem', color: muted, lineHeight: 1.7, margin: 0 }}>
                Potencial de receita a recuperar com IA — sem investimento adicional em anúncios
              </p>
            </div>

            {/* ROI + payback */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ borderRadius: 12, padding: '1.25rem', background: '#0a1a10', border: `1px solid ${green}30` }}>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: muted, margin: '0 0 0.75rem' }}>📈 ROI ano 1</p>
                <p style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '2.25rem', color: green, letterSpacing: '-1px', margin: '0 0 4px' }}>
                  <AnimatedNumber value={roi} prefix="" suffix="%" />
                </p>
                <p style={{ fontSize: '0.75rem', color: '#4A4A5A', margin: 0 }}>sobre o investimento</p>
              </div>
              <div style={{ borderRadius: 12, padding: '1.25rem', background: panel, border: `1px solid ${border}` }}>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: muted, margin: '0 0 0.75rem' }}>⏳ Payback</p>
                <p style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '2.25rem', color: goldL, letterSpacing: '-1px', margin: '0 0 4px' }}>
                  <AnimatedNumber value={payback} prefix="" suffix={payback > 1 ? ' meses' : ' mês'} />
                </p>
                <p style={{ fontSize: '0.75rem', color: '#4A4A5A', margin: 0 }}>
                  investimento: R$ {investim.toLocaleString('pt-BR')}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div style={{ borderRadius: 16, padding: '1.5rem', background: panel, border: `1px solid ${border}` }}>
              <p style={{ fontSize: '0.875rem', color: '#D8D4CC', lineHeight: 1.7, margin: '0 0 1.25rem' }}>
                <span style={{ color: gold }}>Esses são números conservadores.</span>{' '}
                No Diagnóstico Estratégico Gratuito, calculamos o potencial real da <em>sua</em> base específica.
              </p>
              <a href="#contato" style={{
                display: 'block', width: '100%', padding: '1rem', borderRadius: 12, textAlign: 'center',
                fontWeight: 700, fontSize: '1rem', background: gold, color: bg, textDecoration: 'none', transition: 'opacity 150ms'
              }}>
                Quero meu Diagnóstico Gratuito →
              </a>
              <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#4A4A5A', margin: '0.75rem 0 0' }}>
                60 min · Sem compromisso · ROI personalizado para sua operação
              </p>
            </div>

            <p style={{ fontSize: '0.7rem', textAlign: 'center', color: '#2A2A3A', lineHeight: 1.6, margin: 0 }}>
              Benchmarks: Febraban 2025 · Benchmarks de mercado SP. Projeções conservadoras.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
