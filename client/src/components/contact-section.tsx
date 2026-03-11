import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
            >
              Pronto para o próximo <span className="text-blue-500 italic">nível?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-400 text-lg mb-12 max-w-md"
            >
              Agende uma consultoria estratégica gratuita e descubra como a IA pode revolucionar seus processos em menos de 30 dias.
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: <Phone className="w-6 h-6" />, label: "Telefone", value: "+55 (11) 96418-0674" },
                { icon: <Mail className="w-6 h-6" />, label: "E-mail", value: "contato@yumia.com.br" },
                { icon: <MapPin className="w-6 h-6" />, label: "Escritório", value: "São Paulo, SP - Brasil" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.label}</div>
                    <div className="text-white font-bold">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 flex space-x-4"
            >
              <a href="#" className="w-12 h-12 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Nome Completo</label>
                  <Input 
                    placeholder="Seu nome" 
                    className="bg-slate-950/50 border-white/10 h-14 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">E-mail Corporativo</label>
                  <Input 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="bg-slate-950/50 border-white/10 h-14 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Assunto</label>
                <Input 
                  placeholder="Como podemos ajudar?" 
                  className="bg-slate-950/50 border-white/10 h-14 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Mensagem</label>
                <Textarea 
                  placeholder="Conte-nos um pouco sobre seu desafio..." 
                  className="bg-slate-950/50 border-white/10 min-h-[150px] rounded-xl focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-8 rounded-2xl text-lg shadow-xl shadow-blue-600/20 group">
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Enviar Mensagem
                <ArrowUpRight className="ml-1 w-4 h-4 opacity-50" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
