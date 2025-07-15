import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Download, Lock } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function ResourcesSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const downloadMutation = useMutation({
    mutationFn: (email: string) => apiRequest("POST", "/api/ebook-downloads", { email }),
    onSuccess: () => {
      toast({
        title: "Sucesso!",
        description: "E-book enviado para seu e-mail. Verifique sua caixa de entrada.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Erro",
        description: error.message || "Erro ao processar solicitação",
        variant: "destructive",
      });
    },
  });

  const handleDownload = () => {
    if (!email) {
      toast({
        title: "Email necessário",
        description: "Por favor, insira seu e-mail para baixar o e-book",
        variant: "destructive",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um e-mail válido",
        variant: "destructive",
      });
      return;
    }

    downloadMutation.mutate(email);
  };

  const blogPosts = [
    {
      category: "IA Agêntica",
      date: "10 de Janeiro, 2025",
      title: "Agentes de IA Autônomos: O Futuro da Automação Empresarial",
      description: "Descubra como os agentes de IA que executam tarefas complexas sem supervisão estão transformando a gestão empresarial em 2025.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      categoryColor: "bg-blue-600"
    },
    {
      category: "Hiperautomação",
      date: "7 de Janeiro, 2025",
      title: "80% das Empresas Adotarão Automação Inteligente até 2025",
      description: "Análise das tendências que levam à adoção massiva da hiperautomação e como sua empresa pode se preparar.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      categoryColor: "bg-emerald-500"
    },
    {
      category: "IA Multimodal",
      date: "5 de Janeiro, 2025",
      title: "IA Multimodal: Redução de 50% no Tempo de Lançamento",
      description: "Como a integração de texto, imagem e áudio está revolucionando o desenvolvimento de produtos e reduzindo custos em 30%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      categoryColor: "bg-amber-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Recursos e Conteúdo Educacional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantenha-se atualizado com as últimas tendências em IA e aprenda como otimizar seus processos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className={`${post.categoryColor} text-white text-xs px-3 py-1 rounded-full font-medium`}>
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-600">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.description}
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300 flex items-center">
                  Ler mais <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        {/* Lead Magnet */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Baixe nosso E-book Gratuito
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            "Manual Prático de IA para PMEs: Como Implementar Inteligência Artificial e Aumentar sua Lucratividade em 90 Dias"
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button 
              onClick={handleDownload}
              disabled={downloadMutation.isPending}
              className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-300 whitespace-nowrap"
            >
              <Download className="mr-2 w-4 h-4" />
              {downloadMutation.isPending ? "Processando..." : "Baixar Grátis"}
            </Button>
          </div>
          
          <p className="text-sm text-blue-200 mt-4 flex items-center justify-center">
            <Lock className="mr-1 w-4 h-4" />
            Seus dados estão seguros. Não enviamos spam.
          </p>
        </div>
      </div>
    </section>
  );
}
