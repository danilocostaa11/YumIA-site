import { Activity, Building2, Scale, ShoppingBag, UtensilsCrossed, Users } from "lucide-react";

export default function AINichesSection() {
  const niches = [
    {
      icon: Activity,
      title: "Saúde & Estética",
      subtitle: "Clínicas, Consultórios e Estética",
      metrics: [
        { value: "70%", label: "Redução tempo administrativo" },
        { value: "40%", label: "Menos erros diagnósticos" },
        { value: "45%", label: "Maior satisfação pacientes" }
      ],
      benefits: [
        "Otimização de agendas e prontuários",
        "Suporte à decisão clínica avançada",
        "Comunicação automatizada personalizada"
      ]
    },
    {
      icon: Building2,
      title: "Imobiliárias & Construtoras",
      subtitle: "Mercado Imobiliário",
      metrics: [
        { value: "60%", label: "Mais leads qualificados" },
        { value: "35%", label: "Redução tempo vendas" },
        { value: "50%", label: "Melhor conversão" }
      ],
      benefits: [
        "Análise preditiva de mercado",
        "Automação de follow-up com clientes",
        "Gestão inteligente de portfólio"
      ]
    },
    {
      icon: Scale,
      title: "Advocacia & Jurídico",
      subtitle: "Escritórios e Departamentos Legais",
      metrics: [
        { value: "80%", label: "Menos tempo em pesquisas" },
        { value: "90%", label: "Agilidade em contratos" },
        { value: "65%", label: "Redução custos operacionais" }
      ],
      benefits: [
        "Análise automatizada de documentos",
        "Pesquisa jurisprudencial inteligente",
        "Gestão de prazos e deadlines"
      ]
    },
    {
      icon: ShoppingBag,
      title: "Varejo & E-commerce",
      subtitle: "Lojas Físicas e Online",
      metrics: [
        { value: "55%", label: "Aumento nas vendas" },
        { value: "40%", label: "Redução abandono carrinho" },
        { value: "75%", label: "Melhoria atendimento" }
      ],
      benefits: [
        "Recomendações personalizadas",
        "Chatbots de atendimento 24/7",
        "Gestão inteligente de estoque"
      ]
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurantes & Food",
      subtitle: "Alimentação e Delivery",
      metrics: [
        { value: "30%", label: "Redução desperdício" },
        { value: "45%", label: "Otimização cardápio" },
        { value: "25%", label: "Aumento ticket médio" }
      ],
      benefits: [
        "Previsão de demanda inteligente",
        "Otimização de preços dinâmica",
        "Automação de pedidos e delivery"
      ]
    },
    {
      icon: Users,
      title: "Consultorias & Serviços",
      subtitle: "Empresas de Consultoria",
      metrics: [
        { value: "85%", label: "Automação relatórios" },
        { value: "60%", label: "Mais produtividade" },
        { value: "40%", label: "Redução retrabalho" }
      ],
      benefits: [
        "Análise de dados automatizada",
        "Geração de insights preditivos",
        "Otimização de processos consultivos"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yum-dark to-yum-dark/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yum-white mb-6">
            Principais Nichos que <span className="text-yum-turquoise">Transformamos com IA</span>
          </h2>
          <p className="text-xl text-yum-white/90 max-w-3xl mx-auto">
            Descubra como empresas de diferentes setores estão revolucionando seus resultados com nossa metodologia Eco emIA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {niches.map((niche, index) => {
            const IconComponent = niche.icon;
            return (
              <div 
                key={index} 
                className="bg-yum-white rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-yum-turquoise rounded-full flex items-center justify-center mr-4 group-hover:bg-yum-dark transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-yum-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yum-dark">{niche.title}</h3>
                    <p className="text-sm text-yum-gray">{niche.subtitle}</p>
                  </div>
                </div>

                {/* Métricas de Impacto */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  {niche.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-2xl font-bold text-yum-turquoise">{metric.value}</div>
                      <div className="text-xs text-yum-gray leading-tight">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Benefícios */}
                <div className="space-y-2">
                  {niche.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-yum-turquoise rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-sm text-yum-gray">{benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button 
                    onClick={() => {
                      const element = document.getElementById('contact');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full text-yum-turquoise font-semibold text-sm hover:text-yum-dark transition-colors duration-300"
                  >
                    Ver Casos de Sucesso →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-yum-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-yum-white mb-4">
              Seu Setor Não Está Aqui?
            </h3>
            <p className="text-yum-white/90 mb-6">
              A IA pode transformar qualquer processo empresarial. Nossa metodologia Eco emIA é adaptável para qualquer nicho de mercado.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-yum-turquoise text-yum-white px-8 py-3 rounded-lg font-semibold hover:bg-yum-turquoise/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Descobrir Oportunidades para Seu Negócio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}