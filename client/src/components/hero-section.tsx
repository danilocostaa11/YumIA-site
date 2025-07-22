import { Button } from "@/components/ui/button";
import { Calendar, Play } from "lucide-react";
import ConsultationFormModal from "./consultation-form-modal";
import heroIllustration from "@/assets/hero-illustration.svg";

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
              <span className="text-yum-turquoise">Negócio</span> com IA Estratégica
            </h1>
            <p className="text-xl text-yum-white/90 mb-8 leading-relaxed">
              Transformamos processos complexos em soluções inteligentes que geram resultados reais. 
              Nossa metodologia exclusiva "Eco emIA" garante ROI mensurável e vantagem competitiva duradoura.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ConsultationFormModal>
                <Button 
                  size="lg"
                  className="bg-yum-turquoise text-yum-white px-8 py-4 text-lg font-semibold hover:bg-yum-turquoise/90 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Agende Consultoria Gratuita
                </Button>
              </ConsultationFormModal>
              <Button 
                onClick={scrollToMethodology}
                variant="outline"
                size="lg"
                className="border-2 border-yum-turquoise text-yum-turquoise px-8 py-4 text-lg font-semibold hover:bg-yum-turquoise hover:text-yum-white transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Saiba Mais
              </Button>
            </div>
            
            <div className="mt-12 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yum-turquoise">+300%</div>
                <div className="text-sm text-yum-white/80">ROI Médio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yum-turquoise">-50%</div>
                <div className="text-sm text-yum-white/80">Tempo de Processos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yum-turquoise">98%</div>
                <div className="text-sm text-yum-white/80">Satisfação</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 p-6">
              <img 
                src={heroIllustration}
                alt="Dashboard inteligente com IA para otimização de processos empresariais" 
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-yum-dark p-4 rounded-xl shadow-lg border border-yum-accent/20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-lg text-yum-primary">50+</div>
                  <div className="text-sm text-yum-gray">Projetos Ativos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
