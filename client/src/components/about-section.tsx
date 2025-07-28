import { Target, Users, Handshake, CheckCircle } from "lucide-react";

export default function AboutSection() {
  const differentials = [
    {
      icon: Target,
      title: "Foco em ROI Mensurável",
      description: "Cada implementação é planejada com métricas claras e objetivos específicos de retorno sobre investimento."
    },
    {
      icon: Users,
      title: "Abordagem Holística",
      description: "Não apenas implementamos tecnologia, mas transformamos processos e capacitamos equipes."
    },
    {
      icon: Handshake,
      title: "Parceria de Longo Prazo",
      description: "Oferecemos suporte contínuo e otimizações constantes para garantir sucesso duradouro."
    }
  ];

  const values = [
    "Transparência",
    "Inovação",
    "Resultados"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Por que Escolher a YumIA?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Somos especialistas em transformar a complexidade da Inteligência Artificial em soluções práticas 
              que geram resultados reais para seu negócio.
            </p>
            
            <div className="space-y-6 mb-8">
              {differentials.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-white text-xl" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-4">Nossa Missão</h4>
              <p className="text-gray-600">
                Democratizar o acesso à Inteligência Artificial, tornando-a acessível e lucrativa para empresas 
                de todos os tamanhos, com foco especial em PMEs que buscam inovação e crescimento sustentável.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=450&q=80" 
              alt="Ambiente de escritório moderno com colaboração em equipe" 
              className="rounded-2xl shadow-lg w-full" 
              loading="lazy"
            />
            
            {/* Values Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg border">
              <h4 className="font-bold text-gray-900 mb-2">Nossos Valores</h4>
              <div className="space-y-2">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="text-emerald-500 w-4 h-4" />
                    <span className="text-sm text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
