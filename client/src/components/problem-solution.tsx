import { X, Check } from "lucide-react";

export default function ProblemSolution() {
  const problems = [
    {
      title: "Processos Manuais Ineficientes",
      description: "Equipes gastam horas em tarefas repetitivas que poderiam ser automatizadas"
    },
    {
      title: "Falta de Visibilidade de Dados",
      description: "Decisões baseadas em intuição ao invés de dados precisos e insights acionáveis"
    },
    {
      title: "Medo da Complexidade da IA",
      description: "Empresas querem inovar mas não sabem por onde começar ou temem investimentos sem retorno"
    },
    {
      title: "Concorrência Mais Ágil",
      description: "Competidores ganham vantagem usando tecnologia enquanto você fica para trás"
    }
  ];

  const solutions = [
    {
      title: "Diagnóstico Preciso",
      description: "Identificamos exatamente onde sua empresa pode ganhar eficiência e reduzir custos"
    },
    {
      title: "Implementação Personalizada",
      description: "Soluções de IA sob medida para suas necessidades específicas com ROI garantido"
    },
    {
      title: "Acompanhamento Contínuo",
      description: "Monitoramento e otimização constante para maximizar resultados ao longo do tempo"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yum-dark mb-6">
            Por que sua empresa precisa da YumIA?
          </h2>
          <p className="text-xl text-yum-gray max-w-3xl mx-auto">
            Empresas que não adotam IA ficam para trás. Nós simplificamos a complexidade e entregamos resultados mensuráveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Problems */}
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-8">Desafios Comuns das Empresas</h3>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{problem.title}</h4>
                    <p className="text-gray-600">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="text-2xl font-bold text-yum-turquoise mb-8">Nossa Solução Estratégica</h3>
            
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Otimização de processos de negócio com IA" 
              className="rounded-xl shadow-lg mb-8 w-full h-48 object-cover" 
            />
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{solution.title}</h4>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
