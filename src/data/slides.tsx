import type * as React from 'react';
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
  Lock, RefreshCw, Cpu, HardDrive, Wallet, Settings
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

// --- HELPER WRAPPER (Restores card look for simple visuals) ---
const StandardVisualCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative p-12 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-100 shadow-xl w-full max-w-md aspect-square flex items-center justify-center ${className}`}>
     <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] rounded-3xl" />
     <div className="relative z-10 transform transition-transform duration-500 hover:scale-105">
       {children}
     </div>
  </div>
);

// --- PREMIUM ICON COMPONENTS (Slide 10) ---
const SetupIcon = () => (
  <div className="relative w-16 h-16 flex-shrink-0">
    <div className="absolute inset-0 bg-blue-100 rounded-2xl rotate-6 transform transition-transform group-hover:rotate-12"></div>
    <div className="absolute inset-0 bg-white border border-blue-200 rounded-2xl flex items-center justify-center shadow-sm z-10">
       <Server className="w-8 h-8 text-blue-600" />
    </div>
    <div className="absolute -top-2 -right-2 bg-emerald-500 text-white p-1 rounded-full border-2 border-white z-20 shadow-sm">
       <CheckCircle2 className="w-4 h-4" />
    </div>
  </div>
);

const CoursesIcon = () => (
  <div className="relative w-16 h-16 flex-shrink-0">
    <div className="absolute inset-0 bg-purple-100 rounded-2xl -rotate-6 transform transition-transform group-hover:-rotate-12"></div>
    <div className="absolute inset-0 bg-white border border-purple-200 rounded-2xl flex items-center justify-center shadow-sm z-10">
       <GraduationCap className="w-8 h-8 text-purple-600" />
    </div>
    <div className="absolute -bottom-2 -left-2 bg-amber-400 text-white p-1 rounded-full border-2 border-white z-20 shadow-sm">
       <BookOpen className="w-4 h-4" />
    </div>
  </div>
);

const CompleteIcon = () => (
  <div className="relative w-16 h-16 flex-shrink-0">
    <div className="absolute inset-0 bg-amber-100 rounded-2xl rotate-3 transform transition-transform group-hover:rotate-6"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-2xl flex items-center justify-center shadow-sm z-10">
       <Crown className="w-8 h-8 text-amber-500" />
    </div>
    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-2 py-0.5 rounded-full text-[10px] font-bold border-2 border-white z-20 shadow-sm uppercase tracking-wide">
       All-in
    </div>
  </div>
);

const AddonsIcon = () => (
  <div className="relative w-16 h-16 flex-shrink-0">
    <div className="absolute inset-0 bg-emerald-100 rounded-2xl rotate-0 transform transition-transform group-hover:scale-110"></div>
    <div className="absolute inset-0 bg-white border border-emerald-200 rounded-2xl flex items-center justify-center shadow-sm z-10">
       <Puzzle className="w-8 h-8 text-emerald-600" />
    </div>
    <div className="absolute top-0 right-0 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
  </div>
);

// --- NEW VISUAL COMPONENTS ---

const ArchitectureVisual = () => (
  <div className="relative w-full h-[400px] bg-slate-50 rounded-3xl border border-slate-200 p-8 flex items-center justify-center">
    {/* Center: Moodle */}
    <div className="absolute z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center gap-2 w-48">
       <div className="p-3 bg-orange-100 rounded-xl">
         <Database className="w-8 h-8 text-orange-600" />
       </div>
       <span className="font-bold text-slate-800">Moodle LMS</span>
       <span className="text-xs text-slate-500">Core System</span>
    </div>

    {/* Top: Client */}
    <div className="absolute top-8 z-10 bg-white p-4 rounded-xl shadow-md border border-slate-100 flex flex-col items-center gap-1 w-32">
       <Users className="w-6 h-6 text-blue-600" />
       <span className="font-bold text-xs text-slate-700">Formandos</span>
    </div>

    {/* Left: Synapse */}
    <div className="absolute left-8 z-10 bg-white p-4 rounded-xl shadow-md border border-slate-100 flex flex-col items-center gap-1 w-32">
       <Factory className="w-6 h-6 text-purple-600" />
       <span className="font-bold text-xs text-slate-700">Synapse</span>
       <span className="text-[10px] text-slate-400">Content Studio</span>
    </div>

    {/* Right: AI Layer */}
    <div className="absolute right-8 z-10 bg-white p-4 rounded-xl shadow-md border border-slate-100 flex flex-col items-center gap-1 w-32">
       <BrainCircuit className="w-6 h-6 text-emerald-600" />
       <span className="font-bold text-xs text-slate-700">AI Layer</span>
       <span className="text-[10px] text-slate-400">Tutor & Report</span>
    </div>

    {/* Connectors (CSS Borders) */}
    {/* Synapse to Moodle */}
    <div className="absolute left-[25%] top-1/2 w-[15%] h-0.5 bg-slate-300 -z-0"></div>
    {/* Moodle to AI */}
    <div className="absolute right-[25%] top-1/2 w-[15%] h-0.5 bg-slate-300 -z-0"></div>
    {/* Moodle to Users */}
    <div className="absolute top-[25%] left-1/2 h-[15%] w-0.5 bg-slate-300 -z-0"></div>
  </div>
);

const MoodleCoreVisual = () => (
  <StandardVisualCard>
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Orbit Circles */}
      <div className="absolute w-[100%] h-[100%] border border-slate-200 rounded-full opacity-50"></div>
      <div className="absolute w-[70%] h-[70%] border border-slate-200 rounded-full opacity-80"></div>

      {/* Center */}
      <div className="absolute z-20 bg-white p-4 rounded-full shadow-lg border-2 border-orange-50 flex items-center justify-center">
          <span className="font-bold text-xl text-slate-800 tracking-tighter">moodle</span>
      </div>

      {/* Satellites */}
      <div className="absolute top-[10%] left-[10%] bg-blue-50 p-2 rounded-xl border border-blue-100"><MonitorPlay className="w-4 h-4 text-blue-600"/></div>
      <div className="absolute top-[10%] right-[10%] bg-emerald-50 p-2 rounded-xl border border-emerald-100"><UserCog className="w-4 h-4 text-emerald-600"/></div>
      <div className="absolute bottom-[10%] left-[10%] bg-purple-50 p-2 rounded-xl border border-purple-100"><BarChart3 className="w-4 h-4 text-purple-600"/></div>
      <div className="absolute bottom-[10%] right-[10%] bg-amber-50 p-2 rounded-xl border border-amber-100"><FileBadge className="w-4 h-4 text-amber-600"/></div>
    </div>
  </StandardVisualCard>
);

const InfraStackVisual = () => (
  <StandardVisualCard className="aspect-auto h-auto min-h-[400px]">
    <div className="w-full h-full flex flex-col justify-center items-center gap-6">
      {/* Top Layer: Disaster Recovery */}
      <div className="w-full bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 p-4 rounded-xl shadow-sm flex items-center gap-3 relative z-30 transform hover:-translate-y-1 transition-transform duration-300">
          <div className="p-2 bg-white rounded-lg shadow-sm text-emerald-600"><RefreshCw className="w-5 h-5" /></div>
          <div><h4 className="font-bold text-emerald-900 text-sm">Resiliência & DR</h4></div>
      </div>
      {/* Middle Layer: Security */}
      <div className="w-full bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-4 rounded-xl shadow-sm flex items-center gap-3 relative z-20 transform hover:-translate-y-1 transition-transform duration-300">
          <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600"><Lock className="w-5 h-5" /></div>
          <div><h4 className="font-bold text-blue-900 text-sm">Segurança</h4></div>
      </div>
      {/* Bottom Layer: Hardware/Perf */}
      <div className="w-full bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 p-4 rounded-xl shadow-sm flex items-center gap-3 relative z-10 transform hover:-translate-y-1 transition-transform duration-300">
          <div className="p-2 bg-white rounded-lg shadow-sm text-slate-600"><Cpu className="w-5 h-5" /></div>
          <div><h4 className="font-bold text-slate-900 text-sm">Performance</h4></div>
      </div>
    </div>
  </StandardVisualCard>
);

const SetupDetailedVisual = () => (
  <div className="bg-white rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden flex flex-col w-full max-w-lg mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
         <div className="relative z-10 flex flex-col items-center text-center">
             <div className="mb-2 bg-emerald-500/20 border border-emerald-500/50 px-3 py-1 rounded-full text-emerald-300 text-xs font-bold uppercase tracking-widest">
                Investimento
             </div>
             <div className="flex items-baseline gap-1 mb-2">
                <span className="text-6xl font-extrabold tracking-tight text-white">8.400</span>
                <span className="text-3xl font-medium text-emerald-400">€</span>
             </div>
             <h3 className="text-lg font-light text-slate-300">Setup Completo & Capacitação</h3>
         </div>
      </div>

      {/* List */}
      <div className="p-8 flex-grow bg-slate-50/30">
         <div className="space-y-4">
            {[
               'Instalação e Hardening (Segurança)',
               'Setup Plus: Templates A1-C2',
               'Modelo de Avaliação por Competências',
               'Governança de IA (Limites e Roles)',
               'Dashboards Operacionais',
               'Formação da Equipa (Admin + Formadores)'
            ].map((item, i) => (
               <div key={i} className="flex items-start gap-4 group">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors">
                     <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-relaxed">{item}</span>
               </div>
            ))}
         </div>
      </div>

      {/* Footer / Options */}
      <div className="bg-white p-6 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-4">
             <div className="p-1.5 bg-blue-50 rounded-lg">
                <Wallet className="w-4 h-4 text-blue-600" />
             </div>
             <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Custos Variáveis Externos
             </h4>
          </div>
          <div className="grid grid-cols-2 gap-3">
             <div className="bg-slate-50 hover:bg-slate-100 transition-colors p-3 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 mb-1">
                    <Server className="w-3.5 h-3.5 text-blue-500" />
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Infra</p>
                </div>
                <p className="text-sm font-bold text-slate-800">VPS Gerida</p>
             </div>
             <div className="bg-slate-50 hover:bg-slate-100 transition-colors p-3 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 mb-1">
                    <BrainCircuit className="w-3.5 h-3.5 text-purple-500" />
                    <p className="text-[10px] text-slate-500 font-bold uppercase">AI API</p>
                </div>
                <p className="text-sm font-bold text-slate-800">OpenAI</p>
             </div>
          </div>
      </div>
  </div>
);

// -----------------------

export const SLIDES: SlideData[] = [
  // 1. Capa
  {
    id: '1',
    type: 'cover',
    title: 'Proposta Técnica e Comercial',
    subtitle: 'Solução de E‑learning Moodle LMS com IA Integrada + Synapse',
    content: [
      'Infraestrutura, Instalação, Operação e Evolução Estratégica com Estúdio IA'
    ],
    data: {
      proponent: 'Victor Duarte — Victa AI Solutions',
      contacts: 'v.duarte@victaaisolutions.com | +351 960 263 588'
    }
  },
  // 2. Contexto
  {
    id: '2',
    type: 'content-split',
    title: 'Contexto e Visão Geral',
    subtitle: 'Uma abordagem moderna à gestão da formação',
    content: [
      'Solução completa de gestão e entrega de formação baseada em Moodle LMS.',
      'Foco em infraestrutura robusta, gestão real de turmas, certificação e dashboards dedicados por empresa‑cliente.',
      'Integração nativa de IA para apoio 24/7 ao formando e geração de relatórios, com total governança.',
      'Synapse: Um estúdio de IA estratégico para modernização e criação acelerada de conteúdos.'
    ],
    visual: <StandardVisualCard><div className="scale-150"><MoodleLogo /></div></StandardVisualCard>
  },
  // 3. Necessidades Geral
  {
    id: '3',
    type: 'grid-cards',
    title: 'Necessidades Identificadas',
    subtitle: 'Os três pilares desta solução',
    data: [
      {
        title: 'Gestão Real',
        description: 'Uma plataforma desenhada para operações complexas, multi-turma e multi-empresa.',
        icon: <Users className="w-8 h-8" />,
        accent: 'blue'
      },
      {
        title: 'Escalabilidade',
        description: 'Infraestrutura preparada para crescimento, picos de acesso e previsibilidade de custos.',
        icon: <Server className="w-8 h-8" />,
        accent: 'emerald'
      },
      {
        title: 'IA Controlada',
        description: 'Inteligência Artificial como aceleradora de aprendizagem e gestão, com governança total.',
        icon: <BrainCircuit className="w-8 h-8" />,
        accent: 'purple'
      }
    ]
  },
  // 4. Necessidade 2.1
  {
    id: '4',
    type: 'diagram-flow',
    title: '2.1 Plataforma que Gira Formação Real',
    subtitle: 'Estrutura hierárquica e operacional',
    content: [
      'Turmas segregadas por empresa e edição.',
      'Suporte a aulas ao vivo e gestão de formação presencial.',
      'Certificação automática e relatórios isolados por cliente.',
      'Histórico consolidado vitalício.'
    ],
    data: {
      steps: ['Empresa Cliente', 'Turmas / Edições', 'Alunos', 'Relatórios & Certificados']
    }
  },
  // 5. Necessidade 2.2
  {
    id: '5',
    type: 'grid-cards',
    title: '2.2 Escalabilidade e Previsibilidade',
    subtitle: 'Segurança operacional para o crescimento',
    data: [
      {
        title: 'Até 500+ Utilizadores',
        description: 'Arquitetura preparada para picos de utilização simultânea.',
        icon: <Network className="w-6 h-6" />,
        accent: 'blue'
      },
      {
        title: 'Operação Segura',
        description: 'Backups diários, hardening de segurança e monitorização 24/7.',
        icon: <ShieldCheck className="w-6 h-6" />,
        accent: 'emerald'
      },
      {
        title: 'Custos Claros',
        description: 'Transparência total em hosting, manutenção e consumo de IA.',
        icon: <Euro className="w-6 h-6" />,
        accent: 'amber'
      }
    ]
  },
  // 6. Necessidade 2.3
  {
    id: '6',
    type: 'content-split',
    title: '2.3 IA como Aceleradora',
    subtitle: 'Co-pilot, não substituição',
    content: [
      'IA atua como tutor inteligente para apoio imediato.',
      'Geração de narrativas para relatórios de gestão.',
      'Custos variáveis estritamente controlados por limites e regras.',
      'Validação humana integrada nos fluxos críticos.'
    ],
    visual: <StandardVisualCard><BrainCircuit className="w-32 h-32 text-indigo-600" /></StandardVisualCard>
  },
  
  // NEW SLIDE: E-learning vs Moodle
  {
    id: '6b',
    type: 'comparison',
    title: 'E‑learning vs Moodle LMS',
    subtitle: 'O que é baseline vs o que é diferencial',
    data: {
      left: {
        title: 'E-learning (Baseline)',
        tag: 'Conteúdo Digital',
        items: [
          'Conteúdo online acessível 24/7 (Vídeo/PDF).',
          'Percurso assíncrono básico de autoestudo.',
          'Experiência de aprendizagem individual e prática.',
          'Escala de distribuição de conteúdos estáticos.',
          'Evidência básica de conclusão (Sim/Não).'
        ],
        accent: 'slate'
      },
      right: {
        title: 'Moodle LMS (Diferencial)',
        tag: 'Operação, Governança e Escala',
        items: [
          'Operação multi-empresa com gestão real de turmas.',
          'Certificação, reporting granular e dashboards B2B.',
          'Modelo híbrido: Presencial + Síncrono (Teams) + Online.',
          'Infraestrutura robusta preparada para picos (500 users).',
          'IA Integrada: Tutor, RAG corporativo e Reporting.'
        ],
        accent: 'blue'
      },
      footer: [
        'Menos fricção e abandono: Operação consistente e acompanhamento.',
        'Mais controlo e compliance: Governança total e auditoria.',
        'Escala com previsibilidade: Automação sem perder qualidade.'
      ]
    }
  },

  // 7. Solução Geral (IMPROVED with Visual)
  {
    id: '7',
    type: 'content-split',
    title: '3. Arquitetura da Solução',
    subtitle: 'Ecossistema Integrado e Fluido',
    content: [
      'Synapse Engine: Produção acelerada de conteúdos a partir de documentos brutos.',
      'Moodle LMS: O núcleo central que gere utilizadores, empresas e certificação.',
      'AI Layer: Camada transversal que oferece tutoria (formando) e insights (gestor).',
      'Cliente B2B: Acesso segregado e seguro para cada empresa e seus colaboradores.'
    ],
    visual: <ArchitectureVisual />
  },

  // 8. Moodle Central (IMPROVED with Visual)
  {
    id: '8',
    type: 'content-split',
    title: '3.1 Moodle como LMS Central',
    subtitle: 'O "Sistema Operativo" da formação',
    content: [
      'Entrega versátil de conteúdos: SCORM, H5P, Vídeos Interativos e Quizzes.',
      'Gestão granular de utilizadores, formadores e gestores de cliente.',
      'Emissão automática de certificados baseada em regras de conclusão.',
      'Dashboards exclusivos para gestores acompanharem as suas equipas em tempo real.'
    ],
    visual: <MoodleCoreVisual />
  },

  // 9. Infraestrutura (UPDATED with Layer Visual)
  {
    id: '9',
    type: 'content-split',
    title: '3.2 Infraestrutura e Operação',
    subtitle: 'Stack tecnológico focado em estabilidade',
    content: [
      'Alta disponibilidade e performance otimizada (Cache/Redis).',
      'Política rigorosa de backups e Disaster Recovery (DR).',
      'Hardening de segurança (WAF, SSL, Proteção DDoS).',
      'Escalabilidade vertical e horizontal para absorver picos de carga.'
    ],
    visual: <InfraStackVisual />
  },
  // 10. Pacotes Geral (UPDATED ICONS)
  {
    id: '10',
    type: 'grid-cards',
    title: '4. Visão Geral dos Pacotes Comerciais',
    subtitle: 'Estrutura modular para flexibilidade',
    data: [
      { 
        title: 'Pacote Setup', 
        description: 'Infraestrutura, Instalação Moodle e IA.', 
        icon: <SetupIcon />,
        accent: 'blue'
      },
      { 
        title: 'Pacote Cursos', 
        description: 'Produção de Conteúdos (A1-C2).', 
        icon: <CoursesIcon />,
        accent: 'purple'
      },
      { 
        title: 'Pacote Completo', 
        description: 'Solução Chave-na-mão com desconto.', 
        icon: <CompleteIcon />,
        accent: 'amber'
      },
      { 
        title: 'Add-ons', 
        description: 'Funcionalidades extra (ex: Speaking IA).', 
        icon: <AddonsIcon />,
        accent: 'emerald'
      },
    ]
  },
  
  // 11. Pacote Setup Moodle (UPDATED VISUAL & TEXT)
  {
    id: '11',
    type: 'content-split',
    title: '5. Pacote Setup Moodle',
    subtitle: 'A fundação tecnológica para operação imediata',
    logo: <MoodleLogo />,
    content: [
      'Autonomia Total: A plataforma é sua. Sem dependência de fornecedor para gestão diária.',
      'Infraestrutura Enterprise: Preparada para segurança, auditoria e escala desde o dia 1.',
      'IA Pronta a Usar: Tutores e relatórios configurados com limites de orçamento seguros.',
      'Metodologia Victa: Templates pedagógicos A1-C2 já instalados para arrancar rapidamente.'
    ],
    visual: <SetupDetailedVisual />
  },

  // 13. Pacote Criação Cursos
  {
    id: '13',
    type: 'table',
    title: 'Pacote Criação de Cursos',
    subtitle: 'Produção de Cursos de Idiomas (A1–C2)',
    content: [
      'Inclui até 3 rondas de revisão por módulo.',
      'Entrega pronta a usar no Moodle com QA efetuado.'
    ],
    data: {
      headers: ['Nível', 'Módulos', 'Carga (Formando)', 'Idiomas'],
      rows: [
        ['A1', '2 Módulos', '60h', 'EN / FR / DE'],
        ['A2', '2 Módulos', '60h', 'EN / FR / DE'],
        ['B1', '3 Módulos', '90h', 'EN / FR / DE'],
        ['B2', '4 Módulos', '120h', 'EN / FR / DE'],
        ['C1/C2', '4 Módulos', '120h', 'EN / FR / DE'],
        ['TOTAL', '9 Módulos Base', '~270h', 'Trilingue']
      ]
    }
  },
  // 14. Pacote Único (Premium) (UPDATED to Module Pricing)
  {
    id: '14',
    type: 'pricing-cards',
    title: 'Investimento: Produção de Conteúdos',
    subtitle: 'Modelo de valor por unidade pedagógica de 30 horas',
    data: [
      {
        title: 'Desenvolvimento por Módulo',
        price: '4.000 €',
        period: '/ módulo (30h)',
        features: [
          'Carga: 30h Conteúdo 100% Self-learning',
          'Multimédia Rica (Vídeo/Áudio)',
          'Interatividade H5P (Flashcards, etc)',
          'Avaliação e Feedback Automático',
          'Inclui QA e Versões em 3 Idiomas'
        ],
        highlight: false
      }
    ],
    footerNote: "Nota: Valor estimado considerando percursos 100% self-learning. Caso o desenho do curso inclua sessões síncronas (reduzindo a necessidade de produção multimédia), este valor será recalculado."
  },
  // 16. Integrações
  {
    id: '16',
    type: 'content-split',
    title: 'Integrações Síncronas e Híbridas',
    subtitle: 'Zoom, Teams e Presencial',
    logo: <ZoomTeamsLogo />,
    content: [
      'Sessões criadas dentro do curso sem partilha de credenciais.',
      'Links centralizados e registo automático de participação.',
      'Calendário híbrido: Sessões presenciais e online no mesmo fluxo.',
      'Consolidação num único certificado final.'
    ],
  },
  // 17. IA Geral
  {
    id: '17',
    type: 'grid-cards',
    title: '6. IA no Moodle: Visão Geral',
    subtitle: 'Parte estruturante da operação com governança',
    data: [
      { title: 'Tutor IA', description: 'Apoio Q&A 24/7 ao formando.', icon: <MessageSquare />, accent: 'blue' },
      { title: 'Reporting', description: 'Análise narrativa de dados.', icon: <FileText />, accent: 'purple' },
      { title: 'RAG', description: 'Consulta a manuais internos.', icon: <Search />, accent: 'amber' },
      { title: 'Suporte', description: 'Redução de tickets operacionais.', icon: <Zap />, accent: 'emerald' },
    ]
  },
  // 27. Roadmap
  {
    id: '27',
    type: 'timeline',
    title: 'Roadmap de Implementação',
    data: [
      { title: 'Fase 1', desc: 'Diagnóstico e desenho: blueprint e plano de rollout.' },
      { title: 'Fase 2', desc: 'Infraestrutura e instalação Moodle: servidor, SSL, backups.' },
      { title: 'Fase 3', desc: 'Customização Moodle: tema/identidade, roles e plugins.' },
      { title: 'Fase 4', desc: 'Integrações síncronas + modelo presencial.' },
      { title: 'Fase 5', desc: 'Operação multi‑empresa e reporting.' },
      { title: 'Fase 6', desc: 'Integração IA: tutor, documentos internos, governance.' },
      { title: 'Fase 7', desc: 'Formação da equipa: admins, gestores e formadores.' },
      { title: 'Fase 8', desc: 'Piloto + estabilização e go‑live.' },
    ]
  },
  // 28. Hosting Costs
  {
    id: '28',
    type: 'table',
    title: 'Planos de Referência',
    subtitle: 'Infraestrutura Gerida (Managed Cloud VPS)',
    logo: <ScalaLogo />,
    data: {
      headers: ['Plano', 'Preço Inicial', 'Renovação (após 1º termo)', 'Perfil'],
      rows: [
        ['Build #1', '$22.46 / mês', '$49.95 / mês', 'Entrada'],
        ['Build #2', '$33.71 / mês', '$91.95 / mês', 'Standard'],
        ['Build #3', '$52.46 / mês', '$165.95 / mês', 'Recomendado'],
        ['Build #4', '$71.21 / mês', '$239.95 / mês', 'Performance'],
      ],
      highlightRow: 2
    },
    content: [
      'Recomendação: Iniciar em Build #3 ou Build #4 (dependendo do peso de SCORM/quizzes).',
      'https://www.scalahosting.com/managed-cloud-hosting.html'
    ]
  },
  // 30. AI Costs
  {
    id: '30',
    type: 'chart-bar',
    title: 'Custos Variáveis de IA',
    subtitle: 'Modelo GPT-4.1 mini - Cenário de Pico',
    logo: <OpenAILogo />,
    content: [
      'Estimativa baseada em 500 utilizadores ativos.',
      'Custo extremamente controlado face ao valor entregue.',
      'https://platform.openai.com/docs/models/gpt-4.1-mini',
      'https://openai.com/api/pricing/'
    ],
    data: [
      { name: 'Cenário Mínimo', valor: 15 },
      { name: 'Cenário Médio', valor: 60 },
      { name: 'Cenário Máximo', valor: 120 },
    ],
    footerNote: 'Valores mensais estimados em Euros (€) para 5.000 interações.'
  },
  // 35. Synapse Intro
  {
    id: '35',
    type: 'diagram-flow',
    title: 'Synapse: Estúdio IA de E-learning',
    subtitle: 'A Evolução Estratégica',
    content: [
      'Transforma PDFs e documentos brutos em cursos digitais.',
      'Garante consistência pedagógica e velocidade de produção.',
      'O humano valida, a IA constrói.'
    ],
    data: {
      steps: ['Materiais Brutos', 'Synapse Engine', 'Revisão Humana', 'Curso Moodle']
    }
  },
  // 36. Synapse Ganhos
  {
    id: '36',
    type: 'grid-cards',
    title: 'Ganhos com Synapse',
    subtitle: 'Impacto direto na operação e negócio',
    data: [
      { 
        title: 'Velocidade', 
        description: 'Redução drástica do time-to-market. Ciclo de produção passa de semanas para dias.', 
        icon: <Zap className="w-8 h-8" />,
        accent: 'amber'
      },
      { 
        title: 'Escalabilidade', 
        description: 'Produção massiva de cursos mantendo o padrão, mesmo com equipas reduzidas.', 
        icon: <TrendingUp className="w-8 h-8" />,
        accent: 'blue'
      },
      { 
        title: 'Qualidade', 
        description: 'Garantia de consistência terminológica, visual e pedagógica em todo o catálogo.', 
        icon: <Award className="w-8 h-8" />,
        accent: 'purple'
      },
    ]
  },
  // 45. ROI
  {
    id: '45',
    type: 'roi-split',
    title: 'Benefícios Consolidados & ROI Estimado',
    subtitle: 'Impacto operacional, pedagógico e financeiro — com governança',
    footerNote: 'Assunções: operação até 500 utilizadores, limites de IA ativos e validação humana nos fluxos críticos. ROI final depende da intensidade de uso.',
    data: {
      benefits: [
        {
          title: 'Suporte & Tickets',
          icon: <Headphones className="w-5 h-5" />,
          items: ['Atendimento 1ª linha 24/7', 'Encaminhamento inteligente', 'Menor fricção operacional'],
          accent: 'blue'
        },
        {
          title: 'Apoio ao Formador',
          icon: <Presentation className="w-5 h-5" />,
          items: ['Planos de sessão assistidos', 'Feedback padrão por rubricas', 'Consistência entre turmas'],
          accent: 'purple'
        },
        {
          title: 'Qualidade & Governança',
          icon: <FileCheck className="w-5 h-5" />,
          items: ['Revisão de linguagem/termos', 'Deteção de lacunas', 'Padronização A1-C2'],
          accent: 'emerald'
        },
        {
          title: 'Personalização B2B',
          icon: <Building2 className="w-5 h-5" />,
          items: ['Casos adaptados ao setor', 'Comunicações automáticas', 'Menor churn/abandono'],
          accent: 'indigo'
        },
        {
          title: 'Insights de Gestão',
          icon: <TrendingUp className="w-5 h-5" />,
          items: ['Deteção de risco de abandono', 'Sumários executivos', 'Decisão baseada em dados'],
          accent: 'amber'
        }
      ],
      roi: {
        indicators: [
          { label: 'Tickets Suporte', trend: 'down', icon: <ArrowDown className="w-4 h-4" /> },
          { label: 'Tempo Gestão', trend: 'down', icon: <ArrowDown className="w-4 h-4" /> },
          { label: 'Taxa Conclusão', trend: 'up', icon: <ArrowUp className="w-4 h-4" /> },
        ],
        scenarios: [
          { name: 'Conservador', payback: '6-9 meses', roi: '1.5x - 2.5x', color: 'bg-slate-700' },
          { name: 'Base', payback: '3-6 meses', roi: '2.5x - 5.0x', color: 'bg-blue-700' },
          { name: 'Agressivo', payback: '1-3 meses', roi: '5.0x - 10x', color: 'bg-emerald-600' },
        ]
      }
    }
  },
  // 46. Resumo Preços
  {
    id: '46',
    type: 'table',
    title: 'Resumo de Investimento',
    subtitle: 'Proposta de Valor Integrada',
    data: {
      headers: ['Pacote', 'Inclui', 'Investimento'],
      rows: [
        ['Setup Moodle', 'Plataforma + Infra + IA + Formação', '8.400 €'],
        ['Produção de Conteúdos', 'Módulos de 30h (3 Idiomas)', '4.000 € / módulo'],
      ],
      highlightRow: 0
    }
  },
  // 48. Encerramento
  {
    id: '48',
    type: 'contact',
    title: 'Vamos transformar a formação na sua empresa?',
    subtitle: 'Próximos passos: Reunião de alinhamento e Piloto.',
    data: {
      name: 'Victor Duarte',
      role: 'Victa AI Solutions',
      email: 'v.duarte@victaaisolutions.com',
      email2: 'victorhfduarte@gmail.com',
      phone: '+351 960 263 588'
    }
  }
];

// Helper components for icons used in the constant file
function SettingsIcon() { return <Workflow className="w-8 h-8" />; }
function BookIcon() { return <GraduationCap className="w-8 h-8" />; }
function StarIcon() { return <Target className="w-8 h-8" />; }
function PlusIcon() { return <Puzzle className="w-8 h-8" />; }
function VideoIcon() { return <Globe className="w-32 h-32 text-blue-500" />; }
