import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertContact } from "@shared/schema";

export default function ContactSection() {
  const [formData, setFormData] = useState<Partial<InsertContact>>({
    name: "",
    email: "",
    company: "",
    phone: "",
    companySize: "",
    message: "",
    consent: false,
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (data: InsertContact) => apiRequest("POST", "/api/contacts", data),
    onSuccess: () => {
      toast({
        title: "Sucesso!",
        description: "Sua mensagem foi enviada. Entraremos em contato em breve.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        companySize: "",
        message: "",
        consent: false,
      });
    },
    onError: (error: any) => {
      toast({
        title: "Erro",
        description: error.message || "Erro ao enviar mensagem",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios",
        variant: "destructive",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um e-mail válido",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData as InsertContact);
  };

  const updateFormData = (field: keyof InsertContact, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      value: "yumia.contato@gmail.com",
      color: "bg-blue-600"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(11) 9 3394-1497",
      color: "bg-emerald-500"
    }
  ];

  const faqs = [
    {
      question: "Quanto tempo leva uma implementação?",
      answer: "O prazo varia de 30 a 90 dias, dependendo da complexidade do projeto e do escopo de automação."
    },
    {
      question: "Qual o investimento mínimo?",
      answer: "Nossos projetos começam a partir de R$ 15.000, sempre com ROI projetado superior a 300%."
    },
    {
      question: "Oferecem suporte contínuo?",
      answer: "Sim! Nosso módulo de acompanhamento garante otimização contínua e suporte técnico especializado."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Agende uma consultoria gratuita e descubra como a IA pode revolucionar seus processos e aumentar sua lucratividade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Fale com um Especialista</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Nome *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                    Empresa
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => updateFormData('company', e.target.value)}
                    placeholder="Nome da sua empresa"
                    className="w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="companySize" className="block text-sm font-medium text-gray-900 mb-2">
                  Tamanho da Empresa
                </Label>
                <Select value={formData.companySize} onValueChange={(value) => updateFormData('companySize', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 funcionários</SelectItem>
                    <SelectItem value="11-50">11-50 funcionários</SelectItem>
                    <SelectItem value="51-200">51-200 funcionários</SelectItem>
                    <SelectItem value="201-500">201-500 funcionários</SelectItem>
                    <SelectItem value="500+">500+ funcionários</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Como podemos ajudar? *
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => updateFormData('message', e.target.value)}
                  placeholder="Conte-nos sobre seus desafios e objetivos com IA..."
                  className="w-full"
                />
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => updateFormData('consent', checked)}
                />
                <Label htmlFor="consent" className="text-sm text-gray-600">
                  Concordo em receber comunicações da YumIA sobre soluções de IA e conteúdo educacional. 
                  Posso cancelar a qualquer momento.
                </Label>
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-blue-600 text-white py-4 text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                <Send className="mr-2 w-5 h-5" />
                {contactMutation.isPending ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Outras Formas de Contato</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="text-white text-xl" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                    <p className="text-gray-600">/company/yumia-ai</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h4>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h5 className="font-semibold text-gray-900 mb-2">{faq.question}</h5>
                    <p className="text-sm text-gray-600">{faq.answer}</p>
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
