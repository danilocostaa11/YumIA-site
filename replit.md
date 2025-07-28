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
- **2025-01-24**: Ajustes visuais na primeira seção
  - Removida imagem da executiva da hero section
  - Layout limpo focando apenas no dashboard de IA
  - Primeira seção otimizada para melhor experiência visual
- **2025-01-22**: Correções de deploy e preparação para publicação
  - Resolvido problema de build para deployment estático/servidor
  - Script `deploy-build.sh` organiza arquivos para ambos os tipos de deploy
  - Arquivos copiados para `dist/` (estático) e `server/public/` (servidor)
  - Nova seção "Principais Nichos que Usam IA" com métricas impactantes
  - Corrigida grafia oficial "YumIA" em todos os textos
  - Sistema de cores totalmente harmonizado com logotipo
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
✓ Teste do chatbot funcional 
✓ Correção da grafia "YumIA" (marca registrada)
✓ Publicação realizada em https://yum-ai-cuisine-yumiacontato.replit.app
✓ Otimizações de performance (imagens comprimidas, lazy loading, preconnect DNS)
⚠️ Domínio personalizado www.yumia.com.br com problema de certificado SSL
→ Necessário reconfigurar domínio personalizado no painel do Replit

## Configuração de Ambiente
- Node.js com npm
- Variáveis de ambiente necessárias:
  - OPENAI_API_KEY: Para funcionamento do chatbot
  - DATABASE_URL: Para produção (PostgreSQL)

## Comandos Principais
- `npm run dev`: Inicia servidor de desenvolvimento
- `npm run build`: Constrói aplicação para produção
- `./deploy-build.sh`: Build otimizado para deploy (corrige estrutura de arquivos)
- Workflow: "Start application" configurado no Replit

## Deploy e Produção
### Problema Resolvido: Estrutura de Build
- **Issue**: Build criava arquivos em `dist/public/` mas deploy esperava em `dist/`
- **Issue**: Servidor de produção procurava arquivos em `server/public/`
- **Solução**: Script `deploy-build.sh` organiza arquivos para ambos os cenários
- **Processo**: 
  1. Executa `npm run build`
  2. Copia arquivos de `dist/public/*` para `dist/` (deploy estático)
  3. Copia arquivos de `dist/public/*` para `server/public/` (servidor Node.js)
  4. Remove diretório `dist/public/` original
  5. Aplicação funciona tanto como estática quanto como serviço Node.js

### Tipos de Deployment Suportados
- **Estático**: Arquivos em `dist/` - para sites sem backend
- **Serviço Node.js**: Servidor completo com chatbot - recomendado para funcionalidade completa