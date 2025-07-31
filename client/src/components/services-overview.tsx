import { Button } from "@/components/ui/button";
import { TrendingUp, ServerCog, BarChart3, Check } from "lucide-react";

export default function ServicesOverview() {
  const services = [
    {
      icon: TrendingUp,
      title: "Diagnóstico Estratégico",
      description: "Mapeamento completo dos processos atuais com análise BPMN, identificação de GAPs e oportunidades de otimização.",
      features: [
        "Blueprint Visual dos Processos",
        "Plano de Execução Detalhado",
        "Cálculo de ROI Projetado"
      ],
      color: "from-blue-600 to-blue-600"
    },
    {
      icon: ServerCog,
      title: "Implementação de IA",
      description: "Desenvolvimento de soluções personalizadas usando ferramentas modernas e integração com sistemas existentes.",
      features: [
        "Automações Inteligentes",
        "Chatbots e Assistentes",
        "Integração com CRM/ERP"
      ],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: BarChart3,
      title: "Monitoramento Contínuo",
      description: "Acompanhamento de performance com relatórios detalhados e otimizações constantes para maximizar resultados.",
      features: [
        "Relatórios de Performance",
        "Ajustes e Melhorias",
        "Suporte Técnico"
      ],
      color: "from-amber-500 to-orange-500"
    }
  ];

  const technologies = [
    { name: "Python", icon: "🐍" },
    { name: "n8n", icon: "🤖" },
    { name: "Make.com", icon: "🧠" },
    { name: "APIs LLMs", icon: "💾" },
    { name: "ClickUp", icon: "📋" },
    { name: "Notion", icon: "📝" }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nossos Serviços Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos mais que tecnologia: oferecemos parceria estratégica e transformação de negócios.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white text-2xl" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="text-emerald-500 w-4 h-4" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full bg-gradient-to-r ${service.color} text-white hover:opacity-90 transition-opacity duration-300`}
                >
                  Saiba Mais
                </Button>
              </div>
            );
          })}
        </div>
        
        {/* Technology Stack */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Tecnologias que Utilizamos</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                <p className="text-sm text-gray-600">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
