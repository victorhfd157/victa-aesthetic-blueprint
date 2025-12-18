import React from 'react';
import { SlideData } from './types';
import { 
  Network, Server, BrainCircuit, Users, ShieldCheck, 
  BarChart3, LayoutTemplate, Layers, GraduationCap, 
  Zap, FileText, CheckCircle2, Globe, Clock, 
  Euro, Search, Puzzle, Workflow, Target, MessageSquare,
  Gem, Blocks, TrendingUp, Award, Headphones, Presentation, 
  FileCheck, Building2, ArrowDown, ArrowUp,
  Video, Database, Layout, BookOpen, Crown,
  CalendarCheck, Factory, UserCog, MonitorPlay, FileBadge,
  Lock, RefreshCw, Cpu, HardDrive, Wallet, Settings,
  BarChart, Sparkles, Languages, ClipboardCheck, MousePointer2
} from 'lucide-react';

// --- LOGO COMPONENTS ---
const ScalaLogo = () => (
  <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg shadow-sm">
    <div className="w-8 h-8 bg-[#1a4f8b] rounded text-white flex items-center justify-center font-bold text-xl">S</div>
    <div className="flex flex-col leading-none">
      <span className="text-[#1a4f8b] font-bold text-lg tracking-tight">Scala</span>
      <span className="text-[#d92c27] font-bold text-lg tracking-tight">Hosting</span>
    </div>
  </div>
);

const MoodleLogo = () => (
  <div className="px-5 py-3 bg-white border border-slate-100 rounded-xl shadow-sm">
    <span className="font-bold text-4xl text-[#f98012] tracking-tight">moodle</span>
  </div>
);

const OpenAILogo = () => (
  <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg shadow-sm text-white">
     <BrainCircuit className="w-6 h-6" />
     <span className="font-semibold text-lg tracking-wide">OpenAI</span>
  </div>
);

const ZoomTeamsLogo = () => (
  <div className="flex items-center gap-4 px-6 py-4 bg-white border border-slate-200 rounded-xl shadow-sm">
      <span className="font-bold text-2xl text-[#2D8CFF]">Zoom</span>
      <span className="text-slate-300 text-2xl">|</span>
      <span className="font-bold text-2xl text-[#6264A7]">Teams</span>
  </div>
);

const StandardVisualCard = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <div className={`relative p-12 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-100 shadow-xl w-full max-w-md aspect-square flex items-center justify-center ${className}`}>
     <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] rounded-3xl" />
     <div className="relative z-10 transform transition-transform duration-500 hover:scale-105">{children}</div>
  </div>
);

const ArchitectureVisual = () => (
  <div className="relative w-full h-[400px] bg-slate-50 rounded-3xl border border-slate-200 p-8 flex items-center justify-center">
    <div className="absolute z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center gap-2 w-48">
       <div className="p-3 bg-orange-100 rounded-xl"><Database className="w-8 h-8 text-orange-600" /></div>
       <span className="font-bold text-slate-800">Moodle LMS</span>
       <span className="text-xs text-slate-500">Campus Digital</span>
    </div>
    <div className="absolute top-8 z-10 bg-white p-4 rounded-xl shadow-md border border-slate-100 flex flex-col items-center gap-1 w-32">
       <Users className="w-6 h-6 text-blue-600" /><span className="font-bold text-xs text-slate-700">Formandos</span>
    </div>
    <div className="absolute left-8 z-10 bg-white p-4 rounded-xl shadow-md border border-slate-100 flex flex-col items-center gap-1 w-32">
       <Factory className="w-6 h-6 text-purple-600" /><span className="font-bold text-xs text-slate-700">Synapse</span><span className="text-[10px] text-slate-400">Content Studio</span>
    </div>
    <div className="absolute right-8 z-10 bg-white p-4 rounded-xl shadow-md border border-slate-100 flex flex-col items-center gap-1 w-32">
       <BrainCircuit className="w-6 h-6 text-emerald-600" /><span className="font-bold text-xs text-slate-700">AI Layer</span><span className="text-[10px] text-slate-400">Tutor & Analytics</span>
    </div>
    <div className="absolute left-[25%] top-1/2 w-[15%] h-0.5 bg-slate-300 -z-0"></div>
    <div className="absolute right-[25%] top-1/2 w-[15%] h-0.5 bg-slate-300 -z-0"></div>
    <div className="absolute top-[25%] left-1/2 h-[15%] w-0.5 bg-slate-300 -z-0"></div>
  </div>
);

const SetupDetailedVisual = () => (
  <div className="bg-white rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden flex flex-col w-full max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-500">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white relative overflow-hidden">
         <div className="relative z-10 flex flex-col items-center text-center">
             <div className="mb-2 bg-emerald-500/20 border border-emerald-500/50 px-3 py-1 rounded-full text-emerald-300 text-xs font-bold uppercase tracking-widest">Investimento</div>
             <div className="flex items-baseline gap-1 mb-2"><span className="text-6xl font-extrabold tracking-tight text-white">8.400</span><span className="text-3xl font-medium text-emerald-400">€</span></div>
             <h3 className="text-lg font-light text-slate-300 tracking-wide">Setup Moodle + Governança IA</h3>
         </div>
      </div>
      <div className="p-8 flex-grow bg-slate-50/30">
         <div className="space-y-4">
            {['Infraestrutura Gerida (managed cloud)','Templates A1-C2 (Pedagogia Pronta)','Gestão Multi-empresa e Certificados','Tutor IA 24/7 (OpenAI GPT-4o mini)','Dashboards Narrativos para Gestão','Formação da Equipa e Rollout'].map((item, i) => (
               <div key={i} className="flex items-start gap-4 group">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /></div>
                  <span className="text-slate-700 font-medium text-sm leading-relaxed">{item}</span>
               </div>
            ))}
         </div>
      </div>
      <div className="bg-white p-6 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-4"><div className="p-1.5 bg-blue-50 rounded-lg"><Wallet className="w-4 h-4 text-blue-600" /></div><h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Custos Variáveis Externos</h4></div>
          <div className="grid grid-cols-2 gap-3">
             <div className="bg-slate-50 p-3 rounded-xl border border-slate-200"><p className="text-[10px] text-slate-500 font-bold uppercase">Infra (Scala)</p><p className="text-sm font-bold text-slate-800">Managed VPS</p></div>
             <div className="bg-slate-50 p-3 rounded-xl border border-slate-200"><p className="text-[10px] text-slate-500 font-bold uppercase">AI API (OpenAI)</p><p className="text-sm font-bold text-slate-800">Consumo Variável</p></div>
          </div>
      </div>
  </div>
);

const SynapseAccessVisual = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
    <div className="bg-white border-2 border-slate-100 rounded-3xl p-8 shadow-xl hover:border-blue-200 transition-all group">
       <div className="flex items-center justify-between mb-6"><div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform"><UserCog className="w-10 h-10" /></div><span className="text-[10px] font-bold uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full text-slate-500">Autonomia Total</span></div>
       <h3 className="text-2xl font-bold text-slate-900 mb-4">Acesso Direto Equipa</h3>
       <p className="text-slate-500 text-sm mb-6 leading-relaxed">Ideal para equipas que desejam ter autonomia total na criação e atualização de conteúdos internos utilizando o Synapse.</p>
       <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100"><p className="text-xs font-bold text-blue-700 uppercase mb-2">Modelo de Custo</p><p className="text-sm text-blue-900 font-medium">Calculado por utilizador e consumo de IA. Total controlo com tetos transparentes.</p></div>
    </div>
    <div className="bg-slate-900 border-2 border-slate-800 rounded-3xl p-8 shadow-xl hover:border-emerald-500/30 transition-all group relative overflow-hidden">
       <div className="absolute top-0 right-0 p-4"><Sparkles className="w-24 h-24 text-emerald-500/10 -rotate-12" /></div>
       <div className="relative z-10">
          <div className="flex items-center justify-between mb-6"><div className="p-3 bg-emerald-500/20 rounded-2xl text-emerald-400 group-hover:scale-110 transition-transform"><Blocks className="w-10 h-10" /></div><span className="text-[10px] font-bold uppercase tracking-widest bg-emerald-500 text-white px-3 py-1 rounded-full">Recomendado</span></div>
          <h3 className="text-2xl font-bold text-white mb-4">Serviço Gerido Victa</h3>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">Delegação total da produção aos nossos especialistas. Foco total da Mais Idiomas na estratégia pedagógica.</p>
          <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-md"><p className="text-xs font-bold text-emerald-400 uppercase mb-2">Modelo de Custo</p><p className="text-sm text-slate-200 font-medium">Integrado nos "Building Blocks" de criação de curso. Eficiência e design instrucional incluídos.</p></div>
       </div>
    </div>
  </div>
);

export const SLIDES: SlideData[] = [
  { id: '1', type: 'cover', title: 'Proposta Técnica e Comercial', subtitle: 'Solução de E‑learning — Moodle LMS com IA Integrada + Synapse', content: ['Infraestrutura, Instalação e Operação Estratégica para Mais Idiomas'], data: { proponent: 'Victor Duarte — Victa AI Solutions', contacts: 'v.duarte@victaaisolutions.com | victorhfduarte@gmail.com | +351 960 263 588' } },
  { id: '2', type: 'content-split', title: 'Moodle: O Campus Digital', subtitle: 'O palco e bastidor da formação, não apenas tecnologia', content: ['Moodle = O Campus Digital onde os cursos vivem, são entregues e certificados.','Design Instrucional = A fábrica criativa onde o curso é pensado e desenhado.','Acompanhamento em tempo real de progresso, notas e conclusão.','Sistema robusto que dá estrutura e fiabilidade à operação diária B2B.'], visual: <StandardVisualCard><div className="scale-150"><MoodleLogo /></div></StandardVisualCard> },
  { id: '3', type: 'grid-cards', title: 'Por que Moodle + IA Integrada?', subtitle: 'Acelerador estratégico para a Mais Idiomas', data: [{ title: 'ROI Mensurável', description: 'Eficiência operacional, melhor taxa de conclusão e menos churn.', icon: <TrendingUp className="w-8 h-8" />, accent: 'blue' },{ title: 'Autonomia Total', description: 'Plataforma própria sem dependência de fornecedores externos.', icon: <ShieldCheck className="w-8 h-8" />, accent: 'emerald' },{ title: 'Experiência Premium', description: 'IA como tutor 24/7 elevando o engagement do formando.', icon: <Sparkles className="w-8 h-8" />, accent: 'purple' },{ title: 'Escalabilidade', description: 'Cresça o catálogo sem aumentar proporcionalmente a equipa.', icon: <Layers className="w-8 h-8" />, accent: 'amber' }] },
  { id: '4', type: 'diagram-flow', title: 'Necessidades: Formação Real', subtitle: 'Estrutura preparada para operação B2B complexa', data: { steps: ['Empresa Cliente', 'Turmas Isoladas', 'Formandos', 'Certificação'] }, content: ['Turmas segregadas por empresa e edição.','Suporte a aulas síncronas (Zoom/Teams) e presenciais.','Histórico consolidado vitalício por aluno e empresa.','Certificação automática baseada em regras pedagógicas.'] },
  { id: '5', type: 'grid-cards', title: 'Escala e IA Controlada', subtitle: 'Segurança operacional e inovação com governança', data: [{ title: 'Até 500 Utilizadores', description: 'Arquitetura preparada para picos de utilização e crescimento gradual.', icon: <Users className="w-6 h-6" />, accent: 'blue' },{ title: 'Operação Segura', description: 'Backups diários, SSL, Hardening de segurança e monitorização.', icon: <Server className="w-6 h-6" />, accent: 'emerald' },{ title: 'IA Assistida', description: 'Tutor Q&A e relatórios narrativos com validação humana.', icon: <BrainCircuit className="w-6 h-6" />, accent: 'purple' },{ title: 'Custos Previsíveis', description: 'Tetos mensais e regras de logging para a API de IA.', icon: <Euro className="w-6 h-6" />, accent: 'amber' }] },
  { id: '6', type: 'content-split', title: 'Arquitetura do Ecossistema', subtitle: 'Moodle LMS no centro da operação', content: ['Moodle LMS: Entrega (SCORM/H5P/Vídeos) e Gestão.','Integrações: Zoom, Teams e Calendário Presencial.','Dashboards B2B: Visibilidade imediata para gestores de cliente.','Infraestrutura: managed cloud com alta disponibilidade.'], visual: <ArchitectureVisual /> },
  { id: '11', type: 'content-split', title: 'Pacote Setup Moodle', subtitle: 'A fundação tecnológica completa', content: ['Instalação, Hardening e Backups incluídos.','Configuração Multi-empresa e Certificação.','Integração de IA (Tutor + Narrativas).','Templates pedagógicos prontos para Idiomas (A1-C2).','Formação da equipa e estabilização (Go-live).'], visual: <SetupDetailedVisual /> },
  { id: '13', type: 'content-list', title: 'Criação de Cursos', subtitle: 'Experiências de aprendizagem envolventes e comerciais', content: ['Design Instrucional focado em retenção e clareza.','Interatividade rica: H5P, cenários, simulações e roleplays.','Multimédia: Vídeos curtos interativos, áudios e animações.','Avaliação robusta: bancos de questões e rubricas estruturadas.','Conteúdo pensado de raiz para a lógica de turmas no Moodle.'], logo: <Sparkles className="w-12 h-12 text-blue-600" /> },
  { id: '14', type: 'grid-cards', title: 'Blocos de Investimento: Conteúdos', subtitle: 'Referências modulares de produção', data: [{ title: 'Apres. Premium', description: 'Até 20 slides, storytelling claro + copy orientado à ação.', price: '350 €', icon: <Presentation className="w-8 h-8 text-blue-500" />, accent: 'blue' },{ title: 'Vídeo Interativo', description: '3-5 minutos. Roteiro, edição, legendagem e pontos de interação.', price: '400-600 €', icon: <Video className="w-8 h-8 text-purple-500" />, accent: 'purple' },{ title: 'Atividades H5P', description: 'Pacote de flashcards, matching e atividades rápidas (até 50 itens).', price: '250 €', icon: <Puzzle className="w-8 h-8 text-amber-500" />, accent: 'amber' },{ title: 'Banco Questões', description: 'Até 60 questões alinhadas com níveis A1-C2 e testes no Moodle.', price: '300-500 €', icon: <ClipboardCheck className="w-8 h-8 text-emerald-500" />, accent: 'emerald' },{ title: 'Módulo 30h/40h', description: 'Design instrucional completo, multimédia e implementação total.', price: '3.5k-5.5k €', icon: <Package className="w-8 h-8 text-indigo-500" />, accent: 'indigo' }], footerNote: "Os valores citados acima são estimativas, os preços podem e serão recalculados de acordo com número de pedidos e pacotes fechados, chegando no valor justo para ambas as partes." },
  { id: '17', type: 'grid-cards', title: 'O Poder da IA no Moodle', subtitle: 'Ganhos reais em suporte, qualidade e gestão', data: [{ title: 'Suporte ao Formando', description: 'Tutor 24/7 (Q&A) e encaminhamento inteligente para humanos.', icon: <Headphones className="w-6 h-6" />, accent: 'blue' },{ title: 'Apoio ao Formador', description: 'Sugestão de planos de sessão, feedback padrão e quizzes rápidos.', icon: <Presentation className="w-6 h-6" />, accent: 'purple' },{ title: 'Qualidade & Consistência', description: 'Deteção de lacunas no conteúdo e revisão terminológica (A1-C2).', icon: <FileCheck className="w-6 h-6" />, accent: 'emerald' },{ title: 'Gestão B2B', description: 'Sumários executivos narrativos para empresas e análise de risco.', icon: <Building2 className="w-6 h-6" />, accent: 'indigo' }] },
  { id: '27', type: 'timeline', title: 'Roadmap de Implementação', subtitle: 'Clique em cada fase para ver o detalhe operacional', data: [{ title: 'Fase 1', desc: 'Diagnóstico e desenho.', details: ['Mapeamento de processos', 'Identificação de stakeholders', 'Plano de rollout'] },{ title: 'Fase 2', desc: 'Infraestrutura.', details: ['Servidor Cloud Managed', 'SSL e Hardening', 'Setup de backups'] },{ title: 'Fase 3', desc: 'Customização.', details: ['Identidade Visual', 'Configuração de Roles', 'Plugins Essenciais'] },{ title: 'Fase 4', desc: 'Integrações.', details: ['Zoom/Teams API', 'Calendário Híbrido', 'Registo Assiduidade'] },{ title: 'Fase 5', desc: 'Operação B2B.', details: ['Dashboards por empresa', 'Fluxos de Certificação', 'Reporting Multi-empresa'] },{ title: 'Fase 6', desc: 'Integração IA.', details: ['Setup de Tutor Q&A', 'Narrativas nos relatórios', 'RAG de docs internos'] },{ title: 'Fase 7', desc: 'Formação Equipa.', details: ['Treino Admin/Gestores', 'Workshop para Formadores', 'Guias de Utilizador'] },{ title: 'Fase 8', desc: 'Go-live.', details: ['Execução de Piloto', 'Estabilização final', 'Lançamento oficial'] }] },
  { id: '28', type: 'table', title: 'Infraestrutura Gerida', subtitle: 'Referência ScalaHosting (Cloud VPS)', logo: <ScalaLogo />, data: { headers: ['Plano', 'Preço Inicial', 'Renovação', 'Perfil'], rows: [['Build #1', '$22.46 / mês', '$49.95 / mês', 'Início'],['Build #2', '$33.71 / mês', '$91.95 / mês', 'Standard'],['Build #3', '$52.46 / mês', '$165.95 / mês', 'Recomendado'],['Build #4', '$71.21 / mês', '$239.95 / mês', 'Performance']], highlightRow: 2 }, content: ['Referência futura: Build #3 ou #4 para suporte estável a 500 utilizadores.'] },
  { id: '30', type: 'chart-bar', title: 'Custos Variáveis de IA', subtitle: 'Referência GPT-4o mini (Consumo OpenAI)', logo: <OpenAILogo />, data: [{ name: 'Baixo (500 inter.)', valor: 5 },{ name: 'Médio (2.500 inter.)', valor: 45 },{ name: 'Pico (5.000 inter.)', valor: 120 }], footerNote: 'Valores em Euros (€) com base na utilização estimada por utilizador ativo.' },
  { id: '35', type: 'diagram-flow', title: 'Synapse: Estúdio IA de E-learning', subtitle: 'A Evolução Estratégica na Produção', data: { steps: ['Materiais Brutos', 'Synapse Engine', 'Validação Humana', 'Moodle LMS'] }, content: ['Ingestão Inteligente: extração de tópicos de PDFs/PPTs.','Estrutura Pedagógica Assistida: sugestão de módulos e storyboard.','Geração de atividades: rascunhos de quizzes e flashcards.','Consistência: uniformização terminológica por nível (A1-C2).'] },
  { id: '36', type: 'content-split', title: 'Modelos de Acesso ao Synapse', subtitle: 'Flexibilidade total para a Mais Idiomas', visual: <SynapseAccessVisual />, content: ['Escolha entre autonomia da sua equipa ou serviço gerido Victa.','Garantia de vanguarda tecnológica em ambos os cenários.','Custos controlados e alinhados à estratégia de catálogo.'] },
  { id: '45', type: 'roi-split', title: 'ROI & Benefícios Consolidados', subtitle: 'Impacto real na operação e negócio', footerNote: 'Assunções: operação até 500 utilizadores e governança de IA ativa.', data: { benefits: [{ title: 'Retenção', icon: <Target className="w-5 h-5" />, items: ['Menos abandono', 'Feedback imediato', 'Apoio 24/7'], accent: 'blue' },{ title: 'Eficiência', icon: <Zap className="w-5 h-5" />, items: ['Automação de relatórios', 'Menos suporte manual', 'Escala rápida'], accent: 'purple' },{ title: 'Valor B2B', icon: <Award className="w-5 h-5" />, items: ['Dashboards exclusivos', 'Certificação fiável', 'Análise preditiva'], accent: 'emerald' }], roi: { indicators: [{ label: 'Abandono', trend: 'down', icon: <ArrowDown className="w-4 h-4" /> },{ label: 'Time-to-market', trend: 'down', icon: <ArrowDown className="w-4 h-4" /> },{ label: 'Satisfação', trend: 'up', icon: <ArrowUp className="w-4 h-4" /> }], scenarios: [{ name: 'Base', payback: '4-6 meses', roi: '3.0x', color: 'bg-blue-700' },{ name: 'Agressivo', payback: '2-3 meses', roi: '6.0x', color: 'bg-emerald-600' }] } } },
  { id: '46', type: 'table', title: 'Resumo de Investimento', subtitle: 'Proposta de Valor Integrada', data: { headers: ['Componente', 'Inclui', 'Investimento'], rows: [['Setup Moodle', 'Plataforma + Infra + IA + Formação', '8.400 €'],['Produção de Conteúdos', 'Ex: Módulos de 30h-40h', '4.000 € / módulo']], highlightRow: 0 } },
  { id: '47', type: 'grid-cards', title: 'Condições de Pagamento', subtitle: 'Modelo para Investimento de Setup (8.400 €)', data: [{ title: '40% - Adjudicação', description: 'Kick-off do projeto e provisionamento de infraestrutura.', icon: <MousePointer2 className="w-8 h-8 text-blue-500" />, accent: 'blue' },{ title: '40% - Conclusão Fase 3', description: 'Customização e fluxos operacionais validados.', icon: <Settings className="w-8 h-8 text-purple-500" />, accent: 'purple' },{ title: '20% - Go-Live', description: 'Após piloto e estabilização final da plataforma.', icon: <Rocket className="w-8 h-8 text-emerald-500" />, accent: 'emerald' }], footerNote: "Nota: Outros pacotes sob consulta. Valores acrescem IVA à taxa legal." },
  { id: '48', type: 'contact', title: 'Prontos para avançar?', subtitle: 'Próximos passos: Alinhamento, Piloto e Kick-off.', data: { name: 'Victor Duarte', role: 'Victa AI Solutions', email: 'v.duarte@victaaisolutions.com', email2: 'victorhfduarte@gmail.com', phone: '+351 960 263 588' } }
];

function Rocket({ className }: { className?: string }) { return <Zap className={className} />; }
function Package({ className }: { className?: string }) { return <Layers className={className} />; }
