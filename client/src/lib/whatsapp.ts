import { InsertContact } from '@shared/schema';

const WHATSAPP_NUMBER = '5511933941497'; // Número do WhatsApp sem símbolos

export function generateWhatsAppMessage(contact: InsertContact): string {
  const companyText = contact.company ? ` da ${contact.company}` : '';
  const phoneText = contact.phone ? `\n📞 Telefone: ${contact.phone}` : '';
  const companySizeText = contact.companySize ? `\n🏢 Porte: ${getCompanySizeLabel(contact.companySize)}` : '';
  const industryText = contact.industry ? `\n🏭 Setor: ${getIndustryLabel(contact.industry)}` : '';
  const revenueText = contact.annualRevenue ? `\n💰 Faturamento: ${getRevenueLabel(contact.annualRevenue)}` : '';
  
  const challengesText = contact.currentChallenges ? `\n\n🎯 *Principais Desafios:*\n${contact.currentChallenges}` : '';
  const painPointText = contact.biggestPainPoint ? `\n\n🔴 *Maior Problema:*\n${contact.biggestPainPoint}` : '';
  const manualTasksText = contact.timeSpentOnManualTasks ? `\n⏰ Tempo em tarefas manuais: ${getManualTasksLabel(contact.timeSpentOnManualTasks)}` : '';
  const advantageText = contact.competitiveAdvantage ? `\n\n🏆 *Diferencial Competitivo:*\n${contact.competitiveAdvantage}` : '';
  
  const experienceText = contact.aiExperience ? `\n🤖 Experiência com IA: ${getExperienceLabel(contact.aiExperience)}` : '';
  const budgetText = contact.budget ? `\n💵 Orçamento: ${getBudgetLabel(contact.budget)}` : '';
  const timelineText = contact.timeline ? `\n⏱️ Prazo: ${getTimelineLabel(contact.timeline)}` : '';
  const decisionText = contact.decisionMaker ? `\n👔 Poder de decisão: ${getDecisionMakerLabel(contact.decisionMaker)}` : '';
  const messageText = contact.message ? `\n\n💬 *Mensagem:*\n${contact.message}` : '';

  return `🚀 *Nova Solicitação de Consultoria YumIA*

👤 *Cliente:* ${contact.name}${companyText}
📧 Email: ${contact.email}${phoneText}${companySizeText}${industryText}${revenueText}${decisionText}${challengesText}${painPointText}${manualTasksText}${advantageText}${experienceText}${budgetText}${timelineText}${messageText}

---
📋 *Próximos passos:*
• Agendar consultoria gratuita
• Avaliar necessidades específicas
• Apresentar metodologia Eco emIA
• Propor soluções personalizadas`;
}

function getCompanySizeLabel(size: string): string {
  const labels: Record<string, string> = {
    'micro': 'Micro (1-9 funcionários)',
    'pequena': 'Pequena (10-49 funcionários)',
    'media': 'Média (50-249 funcionários)',
    'grande': 'Grande (250+ funcionários)'
  };
  return labels[size] || size;
}

function getIndustryLabel(industry: string): string {
  const labels: Record<string, string> = {
    'servicos': 'Serviços',
    'comercio': 'Comércio',
    'industria': 'Indústria',
    'tecnologia': 'Tecnologia',
    'saude': 'Saúde',
    'educacao': 'Educação',
    'financeiro': 'Financeiro',
    'logistica': 'Logística',
    'outro': 'Outro'
  };
  return labels[industry] || industry;
}

function getExperienceLabel(experience: string): string {
  const labels: Record<string, string> = {
    'nenhuma': 'Nenhuma experiência',
    'basica': 'Conhecimento básico',
    'intermediaria': 'Experiência intermediária',
    'avancada': 'Experiência avançada',
    'ja-implementou': 'Já implementou soluções de IA'
  };
  return labels[experience] || experience;
}

function getBudgetLabel(budget: string): string {
  const labels: Record<string, string> = {
    'ate-10k': 'Até R$ 10.000',
    '10k-25k': 'R$ 10.000 - R$ 25.000',
    '25k-50k': 'R$ 25.000 - R$ 50.000',
    '50k-100k': 'R$ 50.000 - R$ 100.000',
    'acima-100k': 'Acima de R$ 100.000',
    'a-definir': 'A definir'
  };
  return labels[budget] || budget;
}

function getTimelineLabel(timeline: string): string {
  const labels: Record<string, string> = {
    'imediato': 'Imediato (30 dias)',
    'curto': 'Curto prazo (1-3 meses)',
    'medio': 'Médio prazo (3-6 meses)',
    'longo': 'Longo prazo (6+ meses)',
    'avaliar': 'Ainda avaliando'
  };
  return labels[timeline] || timeline;
}

function getRevenueLabel(revenue: string): string {
  const labels: Record<string, string> = {
    'ate-100k': 'Até R$ 100.000',
    '100k-500k': 'R$ 100.000 - R$ 500.000',
    '500k-1M': 'R$ 500.000 - R$ 1.000.000',
    '1M-5M': 'R$ 1.000.000 - R$ 5.000.000',
    '5M-10M': 'R$ 5.000.000 - R$ 10.000.000',
    '10M-50M': 'R$ 10.000.000 - R$ 50.000.000',
    'acima-50M': 'Acima de R$ 50.000.000',
    'prefiro-nao-informar': 'Prefere não informar'
  };
  return labels[revenue] || revenue;
}

function getManualTasksLabel(tasks: string): string {
  const labels: Record<string, string> = {
    'menos-1h': 'Menos de 1 hora',
    '1-3h': '1-3 horas',
    '3-6h': '3-6 horas',
    '6-8h': '6-8 horas',
    'mais-8h': 'Mais de 8 horas',
    'nao-sei': 'Não sabe informar'
  };
  return labels[tasks] || tasks;
}

function getDecisionMakerLabel(decision: string): string {
  const labels: Record<string, string> = {
    'sim-decisor': 'Decisor final',
    'sim-influenciador': 'Forte influência na decisão',
    'parcialmente': 'Participa do processo decisório',
    'nao-mas-recomendo': 'Pode recomendar',
    'nao': 'Não tem poder de decisão'
  };
  return labels[decision] || decision;
}

export function sendToWhatsApp(contact: InsertContact): void {
  const message = generateWhatsAppMessage(contact);
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  // Abrir em nova aba
  window.open(whatsappUrl, '_blank');
}

export function getWhatsAppUrl(contact: InsertContact): string {
  const message = generateWhatsAppMessage(contact);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}