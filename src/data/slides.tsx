import React from 'react';
import { SlideData } from '@/types/slides';
import { Server, Cloud, Brain, Users, BookOpen, Video, Award, Settings, Layers, Database, Shield, Zap, CheckCircle2, ArrowRight, Cpu, Globe, Lock, BarChart3, TrendingUp, Clock, DollarSign, Headphones, FileText, MessageSquare, Cog } from 'lucide-react';

// --- VISUAL COMPONENTS (Kept inside this file for simplicity) ---

const ScalaLogo = () => (
    <div className="flex items-center justify-center w-full h-full">
        <div className="text-4xl font-bold text-red-600 tracking-tighter">SCALA</div>
    </div>
);

const MoodleLogo = () => (
    <div className="flex items-center justify-center w-full h-full">
        <svg viewBox="0 0 100 30" className="w-32 h-auto">
            <text x="0" y="24" className="text-2xl font-bold fill-orange-500">moodle</text>
        </svg>
    </div>
);

const OpenAILogo = () => (
    <div className="flex items-center justify-center w-full h-full">
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-slate-700">
            <path d="M22.418 9.822a5.903 5.903 0 0 0-.516-4.91 6.1 6.1 0 0 0-4.136-2.785A6.05 6.05 0 0 0 13.26.123a6.1 6.1 0 0 0-5.787 4.18 5.903 5.903 0 0 0-3.965 2.863 6.1 6.1 0 0 0 .753 7.127 5.903 5.903 0 0 0 .516 4.91 6.1 6.1 0 0 0 4.136 2.785 6.05 6.05 0 0 0 4.506 2.004 6.1 6.1 0 0 0 5.787-4.18 5.903 5.903 0 0 0 3.965-2.863 6.1 6.1 0 0 0-.753-7.127zM13.26 23.006a4.575 4.575 0 0 1-2.94-1.065c.037-.02.102-.057.144-.081l4.88-2.818a.79.79 0 0 0 .399-.688v-6.88l2.063 1.191a.07.07 0 0 1 .038.054v5.703a4.59 4.59 0 0 1-4.584 4.584zm-9.854-4.21a4.575 4.575 0 0 1-.548-3.074c.036.021.099.06.144.085l4.88 2.817a.79.79 0 0 0 .79 0l5.96-3.44v2.383a.07.07 0 0 1-.029.06l-4.935 2.85a4.59 4.59 0 0 1-6.262-1.681zm-1.282-10.66a4.575 4.575 0 0 1 2.39-2.013c0 .042-.002.114-.002.164v5.635a.79.79 0 0 0 .398.687l5.96 3.44-2.063 1.19a.07.07 0 0 1-.067.007l-4.935-2.85a4.59 4.59 0 0 1-1.681-6.26zm16.918 3.94-5.96-3.44 2.063-1.19a.07.07 0 0 1 .067-.008l4.935 2.85a4.59 4.59 0 0 1-1.105 8.216v-5.8a.79.79 0 0 0-.399-.687v.06zm2.053-3.098c-.036-.021-.099-.06-.144-.085l-4.88-2.817a.79.79 0 0 0-.79 0l-5.96 3.44V7.935a.07.07 0 0 1 .029-.06l4.935-2.85a4.59 4.59 0 0 1 6.81 4.754zM9.078 12.91l-2.063-1.19a.07.07 0 0 1-.038-.055V5.962a4.59 4.59 0 0 1 7.524-3.52c-.037.02-.102.056-.144.08l-4.88 2.819a.79.79 0 0 0-.399.687v6.88zm1.12-2.415 2.654-1.533 2.654 1.532v3.066l-2.654 1.533-2.654-1.533V10.495z"/>
        </svg>
    </div>
);

const ZoomTeamsLogo = () => (
    <div className="flex items-center justify-center gap-4 w-full h-full">
        <div className="text-xl font-bold text-blue-600">Zoom</div>
        <div className="text-xl font-bold text-indigo-700">Teams</div>
    </div>
);

// Architecture Visual
const ArchitectureVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 space-y-3">
        <div className="flex items-center justify-center gap-2 p-3 bg-blue-100 rounded-lg w-full">
            <Users className="w-5 h-5 text-blue-600"/>
            <span className="text-sm font-semibold text-blue-800">Usuários (Colaboradores)</span>
        </div>
        <ArrowRight className="w-5 h-5 text-slate-400 rotate-90"/>
        <div className="flex items-center justify-center gap-2 p-3 bg-orange-100 rounded-lg w-full">
            <BookOpen className="w-5 h-5 text-orange-600"/>
            <span className="text-sm font-semibold text-orange-800">Moodle LMS</span>
        </div>
        <ArrowRight className="w-5 h-5 text-slate-400 rotate-90"/>
        <div className="grid grid-cols-2 gap-2 w-full">
            <div className="flex items-center justify-center gap-1 p-2 bg-green-100 rounded-lg">
                <Brain className="w-4 h-4 text-green-600"/>
                <span className="text-xs font-medium text-green-800">IA</span>
            </div>
            <div className="flex items-center justify-center gap-1 p-2 bg-purple-100 rounded-lg">
                <Video className="w-4 h-4 text-purple-600"/>
                <span className="text-xs font-medium text-purple-800">Vídeo</span>
            </div>
        </div>
         <ArrowRight className="w-5 h-5 text-slate-400 rotate-90"/>
        <div className="flex items-center justify-center gap-2 p-3 bg-slate-200 rounded-lg w-full">
            <Server className="w-5 h-5 text-slate-600"/>
            <span className="text-sm font-semibold text-slate-800">Infra VICTA (AWS)</span>
        </div>
    </div>
);

const MoodleCoreVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 space-y-2">
        <div className="text-center mb-2">
            <BookOpen className="w-10 h-10 text-orange-500 mx-auto"/>
            <p className="font-bold text-orange-600 mt-1">Moodle Core</p>
        </div>
        <div className="grid grid-cols-2 gap-2 w-full text-xs">
            {['Cursos', 'Usuários', 'Relatórios', 'Gamificação', 'Certificados', 'Mobile'].map(item => (
                <div key={item} className="p-2 bg-orange-50 rounded text-center font-medium text-orange-700 border border-orange-200">{item}</div>
            ))}
        </div>
    </div>
);

const InfraStackVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 space-y-2">
         <div className="flex items-center gap-2 p-2 bg-sky-100 rounded-lg w-full justify-center"><Cloud className="w-5 h-5 text-sky-600"/><span className="font-semibold text-sky-800 text-sm">AWS Cloud</span></div>
         <div className="grid grid-cols-3 gap-1 w-full text-xs">
            <div className="p-1.5 bg-slate-100 rounded text-center">EC2</div>
            <div className="p-1.5 bg-slate-100 rounded text-center">RDS</div>
            <div className="p-1.5 bg-slate-100 rounded text-center">S3</div>
         </div>
         <div className="flex items-center gap-2 p-2 bg-green-100 rounded-lg w-full justify-center"><Shield className="w-5 h-5 text-green-600"/><span className="font-semibold text-green-800 text-sm">Segurança</span></div>
         <div className="grid grid-cols-2 gap-1 w-full text-xs">
            <div className="p-1.5 bg-slate-100 rounded text-center">SSL/TLS</div>
            <div className="p-1.5 bg-slate-100 rounded text-center">Backups</div>
         </div>
    </div>
);

// Icons for Setup Timeline
const SetupIcon = () => <Settings className="w-5 h-5"/>;
const CoursesIcon = () => <BookOpen className="w-5 h-5"/>;
const CompleteIcon = () => <CheckCircle2 className="w-5 h-5"/>;
const AddonsIcon = () => <Layers className="w-5 h-5"/>;

// Detailed Setup Visual for 'Implantação' slide
const SetupDetailedVisual = () => (
    <div className="w-full h-full flex flex-col justify-center items-center p-4">
        <div className="flex items-center justify-between w-full max-w-md relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
            {/* Steps */}
            {[
                { icon: <Cog/>, label: 'Setup' },
                { icon: <Database/>, label: 'Migração' },
                { icon: <Users/>, label: 'Testes' },
                { icon: <Zap/>, label: 'Go-Live' },
            ].map((step, i) => (
                <div key={i} className="flex flex-col items-center z-10">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
                        {step.icon}
                    </div>
                    <span className="text-xs font-medium mt-2 text-slate-600">{step.label}</span>
                </div>
            ))}
        </div>
    </div>
);


// --- SLIDES DATA ---
export const SLIDES: SlideData[] = [
    // Slide 1: Cover
    {
        id: 'cover',
        type: 'cover',
        title: 'Proposta Técnica e Comercial',
        subtitle: 'Solução E-learning Corporativo com Inteligência Artificial',
        footerNote: 'Documento Confidencial | Válido por 30 dias',
    },
    // Slide 2: Intro
    {
        id: 'intro',
        type: 'content-split',
        title: 'Sobre a VICTA',
        content: [
            'Especialistas em soluções de e-learning corporativo desde 2015.',
            'Foco em tecnologia, inovação e resultados mensuráveis.',
            'Mais de 50 projetos entregues para grandes empresas.',
            'Equipe multidisciplinar: engenheiros, designers e pedagogos.',
        ],
        visual: <ArchitectureVisual />,
    },
    // Slide 3: O Desafio
    {
        id: 'challenge',
        type: 'grid-cards',
        title: 'O Desafio do Treinamento Corporativo',
        data: {
            cards: [
                { icon: <Clock className="w-8 h-8"/>, title: 'Tempo Escasso', description: 'Colaboradores com pouco tempo para treinamentos longos.' },
                { icon: <TrendingUp className="w-8 h-8"/>, title: 'Baixo Engajamento', description: 'Conteúdos genéricos que não prendem a atenção.' },
                { icon: <DollarSign className="w-8 h-8"/>, title: 'Alto Custo', description: 'Treinamentos presenciais são caros e difíceis de escalar.' },
                { icon: <BarChart3 className="w-8 h-8"/>, title: 'Falta de Métricas', description: 'Dificuldade em medir o ROI dos treinamentos.' },
            ]
        }
    },
    // Slide 4: Nossa Solução
    {
        id: 'solution',
        type: 'content-split',
        title: 'Nossa Solução',
        content: [
            'Plataforma Moodle LMS customizada e otimizada.',
            'Integração nativa com Inteligência Artificial (ChatGPT).',
            'Conteúdos interativos e gamificados.',
            'Infraestrutura robusta e escalável na AWS.',
            'Suporte técnico e pedagógico especializado.',
        ],
        visual: <MoodleCoreVisual />,
    },
    // Slide 5: Plataforma Moodle
    {
        id: 'moodle-platform',
        type: 'comparison',
        title: 'Por que Moodle?',
        data: {
            left: {
                title: 'Moodle Padrão',
                items: ['Interface básica', 'Funcionalidades limitadas', 'Sem suporte dedicado', 'Integrações complexas'],
                highlight: false
            },
            right: {
                title: 'Moodle VICTA',
                items: ['Interface moderna e responsiva', 'Plugins premium inclusos', 'Suporte 24/7', 'Integrações nativas (IA, Vídeo, SSO)'],
                highlight: true
            }
        }
    },
    // Slide 6: Funcionalidades Core
    {
        id: 'core-features',
        type: 'grid-cards',
        title: 'Funcionalidades da Plataforma',
        data: {
            cards: [
                { icon: <BookOpen className="w-8 h-8"/>, title: 'Gestão de Cursos', description: 'Crie, organize e publique cursos com facilidade.' },
                { icon: <Users className="w-8 h-8"/>, title: 'Gestão de Usuários', description: 'Controle de acesso, perfis e hierarquias.' },
                { icon: <Award className="w-8 h-8"/>, title: 'Certificados', description: 'Emissão automática de certificados customizáveis.' },
                { icon: <BarChart3 className="w-8 h-8"/>, title: 'Relatórios', description: 'Dashboards e relatórios detalhados de progresso.' },
            ]
        }
    },
    // Slide 7: Inteligência Artificial
    {
        id: 'ai-features',
        type: 'content-split',
        title: 'Inteligência Artificial Integrada',
        content: [
            'Assistente virtual para alunos (FAQ automatizado).',
            'Geração de resumos e quizzes a partir de conteúdos.',
            'Recomendação personalizada de trilhas de aprendizado.',
            'Análise preditiva de desempenho e evasão.',
            'Tradução automática de conteúdos.',
        ],
        visual: <OpenAILogo />,
    },
    // Slide 8: Integrações
    {
        id: 'integrations',
        type: 'grid-cards',
        title: 'Integrações Nativas',
        data: {
            cards: [
                { icon: <Video className="w-8 h-8"/>, title: 'Zoom / Teams', description: 'Aulas síncronas integradas ao calendário.' },
                { icon: <Lock className="w-8 h-8"/>, title: 'SSO (SAML/OAuth)', description: 'Login único com Active Directory, Google, etc.' },
                { icon: <Globe className="w-8 h-8"/>, title: 'APIs REST', description: 'Integração com ERPs, CRMs e outros sistemas.' },
                { icon: <Database className="w-8 h-8"/>, title: 'LTI 1.3', description: 'Conexão com ferramentas externas de conteúdo.' },
            ]
        }
    },
    // Slide 9: Infraestrutura
    {
        id: 'infrastructure',
        type: 'content-split',
        title: 'Infraestrutura AWS',
        content: [
            'Servidores EC2 com auto-scaling.',
            'Banco de dados RDS (MySQL/PostgreSQL) com alta disponibilidade.',
            'Armazenamento S3 para arquivos e backups.',
            'CDN CloudFront para entrega rápida de conteúdo.',
            'Monitoramento 24/7 com CloudWatch.',
        ],
        visual: <InfraStackVisual />,
    },
    // Slide 10: Segurança
    {
        id: 'security',
        type: 'content-list',
        title: 'Segurança e Compliance',
        content: [
            'Criptografia SSL/TLS em todas as comunicações.',
            'Backups diários automatizados com retenção de 30 dias.',
            'Conformidade com LGPD e boas práticas de segurança.',
            'Firewall de aplicação (WAF) e proteção DDoS.',
            'Auditoria de logs e controle de acesso granular.',
        ],
    },
    // Slide 11: Implantação
    {
        id: 'implementation',
        type: 'timeline',
        title: 'Cronograma de Implantação',
        data: {
            items: [
                { icon: <SetupIcon/>, title: 'Semana 1-2', description: 'Setup da infraestrutura e configuração inicial.' },
                { icon: <CoursesIcon/>, title: 'Semana 3-4', description: 'Migração de dados e criação de cursos piloto.' },
                { icon: <AddonsIcon/>, title: 'Semana 5-6', description: 'Integrações (SSO, IA, Vídeo) e customizações.' },
                { icon: <CompleteIcon/>, title: 'Semana 7-8', description: 'Testes, treinamento e go-live.' },
            ]
        }
    },
    // Slide 12: Suporte
    {
        id: 'support',
        type: 'grid-cards',
        title: 'Suporte e Acompanhamento',
        data: {
            cards: [
                { icon: <Headphones className="w-8 h-8"/>, title: 'Suporte Técnico', description: 'Atendimento via chat, e-mail e telefone.' },
                { icon: <FileText className="w-8 h-8"/>, title: 'Documentação', description: 'Base de conhecimento completa e atualizada.' },
                { icon: <MessageSquare className="w-8 h-8"/>, title: 'Consultoria', description: 'Reuniões mensais de acompanhamento.' },
                { icon: <TrendingUp className="w-8 h-8"/>, title: 'Evolução', description: 'Atualizações e novas funcionalidades contínuas.' },
            ]
        }
    },
    // Slide 13: Cases de Sucesso
    {
        id: 'cases',
        type: 'grid-cards',
        title: 'Cases de Sucesso',
        data: {
            cards: [
                { icon: <Award className="w-8 h-8"/>, title: 'Empresa A', description: '+40% de engajamento em 6 meses.' },
                { icon: <Award className="w-8 h-8"/>, title: 'Empresa B', description: 'Redução de 60% nos custos de treinamento.' },
                { icon: <Award className="w-8 h-8"/>, title: 'Empresa C', description: '10.000 usuários ativos na plataforma.' },
                { icon: <Award className="w-8 h-8"/>, title: 'Empresa D', description: 'NPS de 92 nos treinamentos online.' },
            ]
        }
    },
    // Slide 14: ROI
    {
        id: 'roi',
        type: 'roi-split',
        title: 'Retorno sobre Investimento',
        data: {
            metrics: [
                { value: '40%', label: 'Redução de custos com treinamento presencial' },
                { value: '3x', label: 'Aumento na velocidade de onboarding' },
                { value: '60%', label: 'Melhoria na retenção de conhecimento' },
                { value: '25%', label: 'Aumento na produtividade dos colaboradores' },
            ]
        }
    },
    // Slide 15: Planos
    {
        id: 'pricing',
        type: 'pricing-cards',
        title: 'Planos e Investimento',
        data: {
            plans: [
                {
                    name: 'Starter',
                    price: 'R$ 2.500',
                    period: '/mês',
                    features: ['Até 500 usuários', 'Suporte em horário comercial', '5GB de armazenamento', 'Relatórios básicos'],
                    highlight: false
                },
                {
                    name: 'Professional',
                    price: 'R$ 5.000',
                    period: '/mês',
                    features: ['Até 2.000 usuários', 'Suporte 24/7', '50GB de armazenamento', 'IA integrada', 'SSO incluso'],
                    highlight: true
                },
                {
                    name: 'Enterprise',
                    price: 'Sob consulta',
                    period: '',
                    features: ['Usuários ilimitados', 'Suporte dedicado', 'Armazenamento ilimitado', 'Customizações avançadas', 'SLA garantido'],
                    highlight: false
                },
            ]
        }
    },
    // Slide 16: Tabela Comparativa
    {
        id: 'comparison-table',
        type: 'table',
        title: 'Comparativo de Planos',
        data: {
            headers: ['Funcionalidade', 'Starter', 'Professional', 'Enterprise'],
            rows: [
                ['Usuários', '500', '2.000', 'Ilimitado'],
                ['Armazenamento', '5GB', '50GB', 'Ilimitado'],
                ['Suporte', 'Comercial', '24/7', 'Dedicado'],
                ['IA Integrada', '❌', '✅', '✅'],
                ['SSO', '❌', '✅', '✅'],
                ['Customizações', 'Básicas', 'Avançadas', 'Ilimitadas'],
                ['SLA', '99%', '99.5%', '99.9%'],
            ]
        }
    },
    // Slide 17: Gráfico de Economia
    {
        id: 'savings-chart',
        type: 'chart-bar',
        title: 'Projeção de Economia Anual',
        data: {
            bars: [
                { label: 'Ano 1', value: 50000, color: '#3b82f6' },
                { label: 'Ano 2', value: 120000, color: '#3b82f6' },
                { label: 'Ano 3', value: 200000, color: '#3b82f6' },
            ],
            yAxisLabel: 'Economia (R$)'
        }
    },
    // Slide 18: Gráfico de Distribuição
    {
        id: 'distribution-chart',
        type: 'chart-donut',
        title: 'Distribuição do Investimento',
        data: {
            segments: [
                { label: 'Plataforma', value: 40, color: '#3b82f6' },
                { label: 'Infraestrutura', value: 25, color: '#10b981' },
                { label: 'Suporte', value: 20, color: '#f59e0b' },
                { label: 'Integrações', value: 15, color: '#8b5cf6' },
            ]
        }
    },
    // Slide 19: Diferenciais
    {
        id: 'differentials',
        type: 'content-list',
        title: 'Diferenciais VICTA',
        content: [
            'Equipe especializada em educação corporativa.',
            'Tecnologia de ponta com IA generativa.',
            'Flexibilidade para customizações específicas.',
            'Parceria de longo prazo com foco em resultados.',
            'Preço competitivo com alto valor agregado.',
        ],
        highlight: true
    },
    // Slide 20: Garantias
    {
        id: 'guarantees',
        type: 'grid-cards',
        title: 'Nossas Garantias',
        data: {
            cards: [
                { icon: <Shield className="w-8 h-8"/>, title: 'SLA 99.9%', description: 'Disponibilidade garantida em contrato.' },
                { icon: <Clock className="w-8 h-8"/>, title: '30 dias trial', description: 'Teste a plataforma sem compromisso.' },
                { icon: <Zap className="w-8 h-8"/>, title: 'Setup em 8 semanas', description: 'Implantação rápida e eficiente.' },
                { icon: <DollarSign className="w-8 h-8"/>, title: 'Preço fixo', description: 'Sem surpresas na fatura mensal.' },
            ]
        }
    },
    // Slide 21: Próximos Passos
    {
        id: 'next-steps',
        type: 'timeline',
        title: 'Próximos Passos',
        data: {
            items: [
                { icon: <MessageSquare className="w-5 h-5"/>, title: 'Reunião de Alinhamento', description: 'Entender suas necessidades específicas.' },
                { icon: <FileText className="w-5 h-5"/>, title: 'Proposta Customizada', description: 'Ajustar o escopo conforme sua realidade.' },
                { icon: <CheckCircle2 className="w-5 h-5"/>, title: 'Aprovação e Contrato', description: 'Formalizar a parceria.' },
                { icon: <Zap className="w-5 h-5"/>, title: 'Kick-off do Projeto', description: 'Iniciar a implantação.' },
            ]
        }
    },
    // Slide 22: FAQ
    {
        id: 'faq',
        type: 'content-list',
        title: 'Perguntas Frequentes',
        content: [
            'Posso migrar meus cursos de outra plataforma? Sim, oferecemos suporte completo à migração.',
            'A plataforma funciona em dispositivos móveis? Sim, é 100% responsiva e tem app nativo.',
            'Posso personalizar a identidade visual? Sim, customizamos cores, logo e domínio.',
            'Qual o prazo mínimo de contrato? 12 meses, com opção de renovação automática.',
        ],
    },
    // Slide 23: Contato
    {
        id: 'contact',
        type: 'contact',
        title: 'Vamos Conversar?',
        data: {
            email: 'comercial@victa.ai',
            phone: '+55 (11) 99999-9999',
            website: 'www.victa.ai',
            address: 'São Paulo, SP - Brasil'
        }
    },
    // Slide 24: Encerramento
    {
        id: 'closing',
        type: 'cover',
        title: 'Obrigado!',
        subtitle: 'Transforme o treinamento da sua empresa com a VICTA.',
        footerNote: 'comercial@victa.ai | www.victa.ai',
    },
];
