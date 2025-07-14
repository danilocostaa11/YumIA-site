import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactSchema, type InsertContact } from '@shared/schema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { sendToWhatsApp } from '@/lib/whatsapp';
import { CalendarDays, Clock, DollarSign, Building, Users, Lightbulb, MessageCircle } from 'lucide-react';

interface ConsultationFormModalProps {
  children: React.ReactNode;
}

export default function ConsultationFormModal({ children }: ConsultationFormModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      companySize: '',
      industry: '',
      annualRevenue: '',
      currentChallenges: '',
      aiExperience: '',
      biggestPainPoint: '',
      timeSpentOnManualTasks: '',
      competitiveAdvantage: '',
      budget: '',
      timeline: '',
      decisionMaker: '',
      message: '',
      consent: false,
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: InsertContact) => apiRequest("POST", "/api/contacts", data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
      
      // Enviar dados para WhatsApp
      sendToWhatsApp(variables);
      
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Você será direcionado para o WhatsApp para finalizar o agendamento.",
      });
      form.reset();
      setIsOpen(false);
    },
    onError: (error) => {
      toast({
        title: "Erro ao enviar solicitação",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-yum-primary">
            Agende sua Consultoria Gratuita
          </DialogTitle>
          <p className="text-gray-600">
            Preencha o formulário abaixo para que possamos entender melhor suas necessidades e oferecer a melhor solução em IA.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-green-600" />
              <p className="text-sm text-green-700">
                <strong>Próximo passo:</strong> Após enviar o formulário, você será direcionado para nosso WhatsApp onde faremos o agendamento da consultoria gratuita.
              </p>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Informações Básicas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                {...form.register('name')}
                placeholder="Seu nome completo"
                className="mt-1"
              />
              {form.formState.errors.name && (
                <p className="text-sm text-red-500 mt-1">{form.formState.errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                type="email"
                {...form.register('email')}
                placeholder="seu@email.com"
                className="mt-1"
              />
              {form.formState.errors.email && (
                <p className="text-sm text-red-500 mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                {...form.register('company')}
                placeholder="Nome da empresa"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                {...form.register('phone')}
                placeholder="(11) 99999-9999"
                className="mt-1"
              />
            </div>
          </div>

          {/* Informações da Empresa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="companySize">Tamanho da Empresa</Label>
              <Controller
                name="companySize"
                control={form.control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione o porte" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="micro">Micro (1-9 funcionários)</SelectItem>
                      <SelectItem value="pequena">Pequena (10-49 funcionários)</SelectItem>
                      <SelectItem value="media">Média (50-249 funcionários)</SelectItem>
                      <SelectItem value="grande">Grande (250+ funcionários)</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div>
              <Label htmlFor="industry">Setor de Atuação</Label>
              <Controller
                name="industry"
                control={form.control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione o setor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="servicos">Serviços</SelectItem>
                      <SelectItem value="comercio">Comércio</SelectItem>
                      <SelectItem value="industria">Indústria</SelectItem>
                      <SelectItem value="tecnologia">Tecnologia</SelectItem>
                      <SelectItem value="saude">Saúde</SelectItem>
                      <SelectItem value="educacao">Educação</SelectItem>
                      <SelectItem value="financeiro">Financeiro</SelectItem>
                      <SelectItem value="logistica">Logística</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>

          {/* Informações Estratégicas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yum-primary">Informações Estratégicas</h3>
            
            <div>
              <Label htmlFor="annualRevenue">Faturamento Anual da Empresa</Label>
              <Controller
                name="annualRevenue"
                control={form.control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione a faixa de faturamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ate-100k">Até R$ 100.000</SelectItem>
                      <SelectItem value="100k-500k">R$ 100.000 - R$ 500.000</SelectItem>
                      <SelectItem value="500k-1M">R$ 500.000 - R$ 1.000.000</SelectItem>
                      <SelectItem value="1M-5M">R$ 1.000.000 - R$ 5.000.000</SelectItem>
                      <SelectItem value="5M-10M">R$ 5.000.000 - R$ 10.000.000</SelectItem>
                      <SelectItem value="10M-50M">R$ 10.000.000 - R$ 50.000.000</SelectItem>
                      <SelectItem value="acima-50M">Acima de R$ 50.000.000</SelectItem>
                      <SelectItem value="prefiro-nao-informar">Prefiro não informar</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div>
              <Label htmlFor="biggestPainPoint">Qual é o maior problema que sua empresa enfrenta hoje?</Label>
              <Textarea
                id="biggestPainPoint"
                {...form.register('biggestPainPoint')}
                placeholder="Ex: Processos manuais consomem muito tempo, dificuldade para escalar operações, falta de insights dos dados..."
                className="mt-1 min-h-[80px]"
              />
            </div>

            <div>
              <Label htmlFor="timeSpentOnManualTasks">Quanto tempo sua equipe gasta em tarefas manuais repetitivas por dia?</Label>
              <Controller
                name="timeSpentOnManualTasks"
                control={form.control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione o tempo médio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="menos-1h">Menos de 1 hora</SelectItem>
                      <SelectItem value="1-3h">1-3 horas</SelectItem>
                      <SelectItem value="3-6h">3-6 horas</SelectItem>
                      <SelectItem value="6-8h">6-8 horas</SelectItem>
                      <SelectItem value="mais-8h">Mais de 8 horas</SelectItem>
                      <SelectItem value="nao-sei">Não sei informar</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div>
              <Label htmlFor="competitiveAdvantage">O que diferencia sua empresa da concorrência?</Label>
              <Textarea
                id="competitiveAdvantage"
                {...form.register('competitiveAdvantage')}
                placeholder="Ex: Atendimento personalizado, expertise técnica, inovação, qualidade do produto..."
                className="mt-1 min-h-[80px]"
              />
            </div>

            <div>
              <Label htmlFor="decisionMaker">Você é o responsável pela decisão de investimento em tecnologia?</Label>
              <Controller
                name="decisionMaker"
                control={form.control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione sua posição" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sim-decisor">Sim, sou o decisor final</SelectItem>
                      <SelectItem value="sim-influenciador">Sim, tenho forte influência na decisão</SelectItem>
                      <SelectItem value="parcialmente">Participo do processo decisório</SelectItem>
                      <SelectItem value="nao-mas-recomendo">Não, mas posso recomendar</SelectItem>
                      <SelectItem value="nao">Não tenho poder de decisão</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>

          {/* Desafios e Experiência */}
          <div>
            <Label htmlFor="currentChallenges">Principais Desafios Atuais</Label>
            <Textarea
              id="currentChallenges"
              {...form.register('currentChallenges')}
              placeholder="Descreva os principais desafios que sua empresa enfrenta atualmente..."
              className="mt-1 min-h-[80px]"
            />
          </div>

          <div>
            <Label htmlFor="aiExperience">Experiência com IA</Label>
            <Controller
              name="aiExperience"
              control={form.control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Qual sua experiência com IA?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nenhuma">Nenhuma experiência</SelectItem>
                    <SelectItem value="basica">Conhecimento básico</SelectItem>
                    <SelectItem value="intermediaria">Experiência intermediária</SelectItem>
                    <SelectItem value="avancada">Experiência avançada</SelectItem>
                    <SelectItem value="ja-implementou">Já implementou soluções de IA</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* Orçamento e Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="budget">Orçamento Estimado</Label>
              <Controller
                name="budget"
                control={form.control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Faixa de investimento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ate-10k">Até R$ 10.000</SelectItem>
                      <SelectItem value="10k-25k">R$ 10.000 - R$ 25.000</SelectItem>
                      <SelectItem value="25k-50k">R$ 25.000 - R$ 50.000</SelectItem>
                      <SelectItem value="50k-100k">R$ 50.000 - R$ 100.000</SelectItem>
                      <SelectItem value="acima-100k">Acima de R$ 100.000</SelectItem>
                      <SelectItem value="a-definir">A definir</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div>
              <Label htmlFor="timeline">Prazo Desejado</Label>
              <Controller
                name="timeline"
                control={form.control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Quando deseja implementar?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="imediato">Imediato (30 dias)</SelectItem>
                      <SelectItem value="curto">Curto prazo (1-3 meses)</SelectItem>
                      <SelectItem value="medio">Médio prazo (3-6 meses)</SelectItem>
                      <SelectItem value="longo">Longo prazo (6+ meses)</SelectItem>
                      <SelectItem value="avaliar">Ainda avaliando</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>

          {/* Mensagem */}
          <div>
            <Label htmlFor="message">Mensagem Adicional *</Label>
            <Textarea
              id="message"
              {...form.register('message')}
              placeholder="Descreva como podemos ajudar ou tire suas dúvidas..."
              className="mt-1 min-h-[100px]"
            />
            {form.formState.errors.message && (
              <p className="text-sm text-red-500 mt-1">{form.formState.errors.message.message}</p>
            )}
          </div>

          {/* Consent */}
          <div className="flex items-start space-x-2">
            <Controller
              name="consent"
              control={form.control}
              render={({ field }) => (
                <Checkbox
                  id="consent"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
            <Label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
              Aceito receber contato da YumIA para agendamento da consultoria e informações sobre soluções de IA. *
            </Label>
          </div>
          {form.formState.errors.consent && (
            <p className="text-sm text-red-500">{form.formState.errors.consent.message}</p>
          )}

          <Button
            type="submit"
            className="w-full bg-yum-primary hover:bg-yum-primary/90 text-white py-3"
            disabled={contactMutation.isPending}
          >
            {contactMutation.isPending ? 'Enviando...' : 'Solicitar Consultoria Gratuita'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}