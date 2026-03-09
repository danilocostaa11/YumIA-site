import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function ProblemSolution() {
  const problems = [
    "Processos manuais lentos e propensos a erros",
    "Falta de insights baseados em dados reais",
    "Dificuldade em escalar operações sem custos astronômicos",
    "Equipes sobrecarregadas com tarefas repetitivas"
  ];

  const solutions = [
    "Automação inteligente de fluxos de trabalho",
    "Dashboards preditivos e análise avançada",
    "Escalabilidade digital com baixo custo operacional",
    "IA como copiloto para aumentar a produtividade"
  ];

  return (
    <section id="problem" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-6"
          >
            O Cenário Atual vs. <span className="text-blue-500 italic">O Futuro</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Muitas empresas ainda operam no passado. A YumIA traz as ferramentas do amanhã para resolver os gargalos de hoje.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Problems Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-sm border border-red-500/10 p-8 md:p-12 rounded-[2rem] shadow-2xl relative group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <XCircle className="w-24 h-24 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center mr-3">
                <XCircle className="w-5 h-5 text-red-500" />
              </span>
              Gargalos Atuais
            </h3>
            <ul className="space-y-6">
              {problems.map((text, i) => (
                <li key={i} className="flex items-start text-slate-400">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span className="text-lg">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-600 p-8 md:p-12 rounded-[2rem] shadow-[0_0_50px_rgba(37,99,235,0.3)] relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
              <CheckCircle2 className="w-24 h-24 text-white" />
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center mr-3">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </span>
                Solução YumIA
              </h3>
              <ul className="space-y-6 mb-10">
                {solutions.map((text, i) => (
                  <li key={i} className="flex items-start text-blue-50">
                    <CheckCircle2 className="w-6 h-6 text-amber-400 mr-3 mt-0.5 shrink-0" />
                    <span className="text-lg font-medium">{text}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center text-white font-black text-lg group/btn"
              >
                Começar Transformação 
                <ArrowRight className="ml-2 w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
