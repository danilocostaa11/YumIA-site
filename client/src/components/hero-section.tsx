import { Button } from "@/components/ui/button";
import { Calendar, Play } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMethodology = () => {
    const element = document.getElementById('methodology');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-gradient-dark text-white py-20 circuit-pattern">
      <div className="absolute inset-0 bg-yum-dark bg-opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-yum-primary/90 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Desbloqueie o Potencial Máximo do seu{" "}
              <span className="text-amber-400">Negócio</span> com IA Estratégica
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Transformamos processos complexos em soluções inteligentes que geram resultados reais. 
              Nossa metodologia exclusiva "Eco emIA" garante ROI mensurável e vantagem competitiva duradoura.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-amber-500 text-white px-8 py-4 text-lg font-semibold hover:bg-amber-600 transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agende Consultoria Gratuita
              </Button>
              <Button 
                onClick={scrollToMethodology}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Saiba Mais
              </Button>
            </div>
            
            <div className="mt-12 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">+300%</div>
                <div className="text-sm text-blue-200">ROI Médio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">-50%</div>
                <div className="text-sm text-blue-200">Tempo de Processos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">98%</div>
                <div className="text-sm text-blue-200">Satisfação</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Equipe profissional trabalhando com tecnologia AI" 
              className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500" 
            />
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-lg">50+</div>
                  <div className="text-sm text-gray-600">Projetos Ativos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
