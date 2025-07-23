import { ArrowRight } from "lucide-react";

export default function EcoEmiaMethodology() {
  const modules = [
    {
      number: "1",
      title: "Diagnóstico Estratégico",
      description: "Análise profunda dos processos atuais, mapeamento BPMN e identificação de oportunidades de otimização com cálculo de ROI.",
      color: "from-yum-dark to-yum-dark"
    },
    {
      number: "2",
      title: "Implementação Personalizada",
      description: "Desenvolvimento de soluções de IA usando ferramentas como n8n, Make.com, APIs de LLMs e integração com seus sistemas existentes.",
      color: "from-yum-turquoise to-yum-turquoise"
    },
    {
      number: "3",
      title: "Acompanhamento Contínuo",
      description: "Monitoramento de performance, ajustes contínuos e novas otimizações para garantir máximo retorno do investimento.",
      color: "from-yum-turquoise to-yum-dark"
    }
  ];

  const processSteps = [
    { icon: "🤝", label: "Reunião Inicial" },
    { icon: "🔍", label: "Diagnóstico" },
    { icon: "🚀", label: "Implementação" }
  ];

  return (
    <section id="methodology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yum-dark mb-6">
            Nossa Metodologia Exclusiva: <span className="text-yum-turquoise">Eco emIA</span>
          </h2>
          <p className="text-xl text-yum-gray max-w-3xl mx-auto">
            Uma abordagem holística que garante implementação bem-sucedida de IA com resultados mensuráveis e duradouros.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {modules.map((module, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className={`w-20 h-20 bg-gradient-to-br ${module.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow duration-300`}>
                <span className="text-2xl font-bold text-white">{module.number}</span>
              </div>
              <h3 className="text-xl font-bold text-yum-dark mb-4">{module.title}</h3>
              <p className="text-yum-gray">{module.description}</p>
            </div>
          ))}
        </div>
        
        {/* Process Flow Visualization */}
        <div className="bg-yum-dark rounded-2xl p-8 text-yum-white">
          <h3 className="text-2xl font-bold text-center mb-8">Fluxo do Processo Eco emIA</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {processSteps.flatMap((step, index) => [
              <div key={step.label} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <p className="font-medium">{step.label}</p>
              </div>,
              ...(index < processSteps.length - 1 ? [
                <div key={`arrow-${index}`} className="text-center">
                  <ArrowRight className="text-2xl text-white/70 hidden md:block mx-auto" />
                </div>
              ] : [])
            ])}
          </div>
        </div>
      </div>
    </section>
  );
}
