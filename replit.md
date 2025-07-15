# YumIA - Consultoria em IA

## Visão Geral do Projeto
Site profissional para a YumIA, empresa especializada em consultoria de IA que oferece a metodologia exclusiva "Eco emIA" para otimização de processos empresariais. O site foca em geração de leads qualificados através de conteúdo educacional sobre os benefícios da IA para PMEs.

## Objetivos Principais
- Gerar leads qualificados para consultoria em IA
- Educar o mercado sobre benefícios da IA para processos empresariais
- Demonstrar expertise através da metodologia "Eco emIA"
- Estabelecer credibilidade com testemunhos e recursos educacionais

## Arquitetura do Projeto
- **Frontend**: React com TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express.js com TypeScript
- **Banco de Dados**: PostgreSQL (em produção) / MemStorage (desenvolvimento)
- **Roteamento**: Wouter
- **Formulários**: react-hook-form com validação Zod
- **Queries**: TanStack Query v5
- **Chatbot**: Integração com OpenAI GPT-4o

## Metodologia "Eco emIA"
Sistema proprietário em 3 módulos:
1. **Diagnóstico Estratégico**: Análise BPMN, identificação de oportunidades, cálculo de ROI
2. **Implementação Personalizada**: Desenvolvimento com n8n, Make.com, APIs de LLMs
3. **Acompanhamento Contínuo**: Monitoramento e otimizações contínuas

## Estrutura de Páginas
- **Home**: Página única com seções:
  - Hero com proposta de valor
  - Problema/Solução
  - Metodologia Eco emIA
  - Visão geral dos serviços
  - Sobre a empresa
  - Testemunhos
  - Recursos educacionais
  - Formulário de contato

## Funcionalidades Implementadas
✓ Design responsivo harmonizado com logo YumIA (azul/teal)
✓ Formulário de contato com validação
✓ Download de e-book educacional
✓ Chatbot com IA integrado (OpenAI GPT-4o)
✓ Navegação suave entre seções
✓ SEO otimizado

## Mudanças Recentes
- **2025-01-15**: Atualizações de conteúdo e contato
  - Atualização dos recursos educacionais com artigos de 2025
  - Artigos sobre IA Agêntica, Hiperautomação e IA Multimodal
  - Alteração do LinkedIn para Instagram (@yumia.ai)
  - Atualização das informações de contato
  - Nova ilustração SVG personalizada com metodologia Eco emIA
- **2025-01-14**: Implementação completa do chatbot com OpenAI
  - Criado componente Chatbot funcional
  - Integração backend com GPT-4o
  - Sistema de mensagens em tempo real
  - Perguntas frequentes pré-configuradas
  - Especialização no domínio YumIA/IA

## Preferências do Usuário
- Idioma: Português brasileiro
- Foco: Geração de leads e educação do mercado
- Público-alvo: PMEs interessadas em otimização de processos
- Prioridade: Credibilidade e demonstração de expertise

## Próximos Passos
→ Teste do chatbot funcional
→ Preparação para publicação com domínio personalizado
→ Verificação final de funcionalidades

## Configuração de Ambiente
- Node.js com npm
- Variáveis de ambiente necessárias:
  - OPENAI_API_KEY: Para funcionamento do chatbot
  - DATABASE_URL: Para produção (PostgreSQL)

## Comandos Principais
- `npm run dev`: Inicia servidor de desenvolvimento
- Workflow: "Start application" configurado no Replit