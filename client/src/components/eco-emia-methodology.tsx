import { motion } from "framer-motion";
import { Search, Lightbulb, Settings, TrendingUp, ShieldCheck, Zap } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8 text-blue-400" />,
    title: "Eco-Diagnóstico",
    description: "Mapeamento profundo do ecossistema do negócio para identificar gargalos e oportunidades latentes.",
    color: "from-blue-500/20 to-transparent"
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-amber-400" />,
    title: "emIA-Estratégia",
    description: "Desenho da arquitetura de IA personalizada, alinhada aos objetivos estratégicos e KPIs.",
    color: "from-amber-500/20 to-transparent"
  },
  {
    icon: <Settings className="w-8 h-8 text-emerald-400" />,
    title: "Implementação Ágil",
    description: "Desenvolvimento e integração de soluções de IA com foco em experiência do usuário e eficiência.",
    color: "from-emerald-500/20 to-transparent"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-indigo-400" />,
    title: "Governança & Ética",
    description: "Estabelecimento de protocolos de segurança, privacidade de dados e uso ético da inteligência artificial.",
    color: "from-indigo-500/20 to-transparent"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-rose-400" />,
    title: "Monitoramento Eco",
    description: "Acompanhamento contínuo do ROI e refinamento constante dos modelos para performance máxima.",
    color: "from-rose-500/20 to-transparent"
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-400" />,
    title: "Escalabilidade IA",
    description: "Expansão horizontal das soluções para outras áreas, criando um negócio genuinamente inteligente.",
    color: "from-purple-500/20 to-transparent"
  }
];

export default function EcoEmiaMethodology() {
  return (
    <section id="methodology" className="py-24 bg-slate-950 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest"
          >
            Metodologia Exclusiva
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            O Método <span className="text-blue-500 italic">Eco emIA</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg max-w-3xl mx-auto"
          >
            Uma abordagem holística que integra a sustentabilidade do ecossistema empresarial 
            com o poder transformador da Inteligência Artificial.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all hover:bg-slate-900/60 overflow-hidden"
            >
              {/* Gradient background decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.color} blur-2xl group-hover:opacity-100 opacity-0 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 group-hover:border-blue-500/50 transition-all shadow-xl">
                  {step.icon}
                </div>
                <div className="text-blue-500/40 font-black text-4xl mb-4 group-hover:text-blue-500 transition-colors">0{index + 1}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
