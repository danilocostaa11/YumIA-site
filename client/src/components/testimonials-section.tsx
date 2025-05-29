import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      title: "CEO, TechStart Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "A YumIA transformou completamente nossos processos. Reduzimos 70% do tempo em tarefas administrativas e aumentamos nossa produtividade significativamente."
    },
    {
      name: "Ana Costa",
      title: "Diretora de Operações, LogiFlow",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "O diagnóstico da YumIA foi revelador. Identificaram oportunidades que nem sabíamos que existiam. O ROI superou todas as expectativas."
    },
    {
      name: "Roberto Mendes",
      title: "CTO, InnovateCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "Parceria excepcional! A equipe da YumIA nos acompanha de perto e está sempre propondo melhorias. Nossos processos evoluem constantemente."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Empresas que confiaram na YumIA estão vendo resultados transformadores em seus negócios.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} - ${testimonial.title}`}
                  className="w-16 h-16 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-blue-200 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
