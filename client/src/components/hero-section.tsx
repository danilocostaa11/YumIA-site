import { Button } from "@/components/ui/button";
import { Calendar, Play, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950 pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>O Futuro da Inteligência de Negócio</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Desbloqueie o Máximo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-300">
                Potencial
              </span>{" "}
              do seu Negócio
            </h1>
            
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
              Transformamos processos complexos em fluxos de trabalho inteligentes. 
              Nossa metodologia <span className="text-blue-400 font-semibold italic">Eco emIA</span> garante ROI mensurável e vantagem competitiva para PMEs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-blue-600 text-white px-8 py-6 text-lg font-bold hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] rounded-xl group"
              >
                <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Agendar Consultoria
              </Button>
              <Button 
                onClick={scrollToMethodology}
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/5 border border-white/10 px-8 py-6 text-lg font-bold rounded-xl"
              >
                Ver Metodologia
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-16 flex items-center space-x-12">
              {[
                { label: "ROI Médio", value: "+300%", color: "text-blue-400" },
                { label: "Eficiência", value: "+50%", color: "text-amber-400" },
                { label: "Satisfação", value: "98%", color: "text-emerald-400" }
              ].map((stat, i) => (
                <div key={i} className="group cursor-default">
                  <div className={`text-3xl font-black ${stat.color} mb-1 transition-transform group-hover:scale-110`}>{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                alt="AI Technology Visualization" 
                className="w-full h-auto grayscale-[0.3] hover:grayscale-0 transition-all duration-700 hover:scale-105" 
              />
            </div>
            
            {/* Geometric accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-blue-500/30 rounded-tr-[40px] pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-amber-500/30 rounded-bl-[40px] pointer-events-none" />
            
            {/* Floating glass card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:right-0 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl z-20"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">Status</div>
                  <div className="text-white font-bold text-lg">IA Ativa e Pronta</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
