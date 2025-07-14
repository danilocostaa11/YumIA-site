import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSolution from "@/components/problem-solution";
import EcoEmiaMethodology from "@/components/eco-emia-methodology";
import ServicesOverview from "@/components/services-overview";
import AboutSection from "@/components/about-section";
import TestimonialsSection from "@/components/testimonials-section";
import ResourcesSection from "@/components/resources-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ProblemSolution />
      <EcoEmiaMethodology />
      <ServicesOverview />
      <AboutSection />
      <TestimonialsSection />
      <ResourcesSection />
      <ContactSection />
      <Footer />
      <Chatbot />
      <WhatsAppButton />
      
      {/* Floating CTA Button for mobile */}
      <div className="fixed bottom-6 left-6 z-50 md:hidden">
        <button 
          onClick={() => {
            const element = document.getElementById('contact');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-gradient-primary text-white w-16 h-16 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
