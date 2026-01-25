import { useRef, useState } from 'react';
import { BookOpen, Users, Award, Zap, Globe, Check, Download, Video, Smartphone, TrendingUp, BarChart3, Clock, Target } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Dashboard Simulator Component
const DashboardSimulator = () => {
    const [activePersona, setActivePersona] = useState<'alunos' | 'formadores' | 'gestores'>('alunos');

    const personas = {
        alunos: {
            title: "Alunos",
            subtitle: "Painel de Aprendizagem",
            color: "#2995CC",
            icon: BookOpen,
            widgets: [
                { type: 'progress', title: 'Progresso Atual', value: '78%', subtitle: 'Módulo Intermédio', icon: TrendingUp },
                { type: 'next', title: 'Próxima Aula', value: 'Conversação Avançada', subtitle: 'Amanhã às 14:00', icon: Clock },
                { type: 'achievement', title: 'Conquistas', value: '12', subtitle: 'Este mês', icon: Award },
                { type: 'resources', title: 'Recursos Disponíveis', value: '340+', subtitle: 'Vídeos, PDFs, Quizzes', icon: Video }
            ]
        },
        formadores: {
            title: "Formadores",
            subtitle: "Central de Ensino",
            color: "#617798",
            icon: Users,
            widgets: [
                { type: 'classes', title: 'Turmas Ativas', value: '8', subtitle: '124 alunos totais', icon: Users },
                { type: 'materials', title: 'Materiais Criados', value: '45', subtitle: 'Este trimestre', icon: BookOpen },
                { type: 'feedback', title: 'Avaliação Média', value: '4.8', subtitle: 'De 5 estrelas', icon: Award },
                { type: 'schedule', title: 'Aulas Hoje', value: '6', subtitle: '2 pendentes', icon: Clock }
            ]
        },
        gestores: {
            title: "Gestores",
            subtitle: "Dashboard Executivo",
            color: "#0F172A",
            icon: BarChart3,
            widgets: [
                { type: 'roi', title: 'ROI da Formação', value: '3.2x', subtitle: 'Retorno sobre investimento', icon: TrendingUp },
                { type: 'coverage', title: 'Cobertura de Equipa', value: '89%', subtitle: '450 de 505 colaboradores', icon: Users },
                { type: 'completion', title: 'Taxa de Conclusão', value: '94%', subtitle: 'Acima da média do setor', icon: Target },
                { type: 'budget', title: 'Orçamento Utilizado', value: '67%', subtitle: '€45k de €67k', icon: BarChart3 }
            ]
        }
    };

    const currentPersona = personas[activePersona];

    return (
        <DialogContent className="max-w-[95vw] md:max-w-6xl h-[90vh] bg-gradient-to-br from-[#0F172A] via-[#1A2942] to-[#0F172A] border-none p-0 overflow-hidden shadow-2xl">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2995CC]/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#617798]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Main Container */}
            <div className="relative z-10 h-full flex flex-col md:flex-row">
                {/* Sidebar - Persona Navigation */}
                <div className="w-full md:w-80 bg-black/20 backdrop-blur-2xl border-r border-white/10 p-6 flex-shrink-0">
                    <div className="mb-8">
                        <DialogTitle className="font-['Poppins'] text-2xl font-bold text-white mb-2">Hub Premium</DialogTitle>
                        <DialogDescription className="text-white/60 font-['Open_Sans'] text-sm">
                            Simulação interativa da plataforma
                        </DialogDescription>
                    </div>

                    <div className="space-y-3">
                        {(Object.keys(personas) as Array<keyof typeof personas>).map((key) => {
                            const persona = personas[key];
                            const Icon = persona.icon;
                            const isActive = activePersona === key;

                            return (
                                <motion.button
                                    key={key}
                                    onClick={() => setActivePersona(key)}
                                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 relative overflow-hidden group ${isActive ? 'bg-white/10 backdrop-blur-md' : 'hover:bg-white/5'
                                        }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activePersona"
                                            className="absolute inset-0 bg-gradient-to-r from-[#2995CC]/20 to-transparent rounded-2xl"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}

                                    <div className="relative z-10 flex items-center gap-3">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-[#2995CC]' : 'bg-white/10'
                                            }`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className={`font-semibold transition-colors ${isActive ? 'text-white' : 'text-white/70'}`}>
                                                {persona.title}
                                            </div>
                                            <AnimatePresence mode="wait">
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="text-xs text-white/50 overflow-hidden"
                                                    >
                                                        {persona.subtitle}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                {/* Content Area - Widgets Dashboard */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePersona}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-6"
                        >
                            {/* Header */}
                            <div className="mb-8">
                                <h3 className="text-3xl font-['Poppins'] font-bold text-white mb-2">
                                    {currentPersona.subtitle}
                                </h3>
                                <p className="text-white/60">Visão geral das funcionalidades disponíveis</p>
                            </div>

                            {/* Widgets Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {currentPersona.widgets.map((widget, index) => {
                                    const WidgetIcon = widget.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#2995CC]/30 transition-all duration-300 group"
                                        >
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-[#2995CC]/20 flex items-center justify-center group-hover:bg-[#2995CC]/30 transition-colors">
                                                    <WidgetIcon className="w-6 h-6 text-[#2995CC]" />
                                                </div>
                                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                            </div>

                                            <div className="space-y-2">
                                                <div className="text-sm text-white/60 font-medium">{widget.title}</div>
                                                <div className="text-3xl font-bold text-white font-['Poppins']">{widget.value}</div>
                                                <div className="text-xs text-white/50">{widget.subtitle}</div>
                                            </div>

                                            {/* Fake Progress Bar for some widgets */}
                                            {(widget.type === 'progress' || widget.type === 'coverage' || widget.type === 'budget') && (
                                                <div className="mt-4">
                                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: widget.value }}
                                                            transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                                                            className="h-full bg-gradient-to-r from-[#2995CC] to-[#2C5AA0] rounded-full"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* CTA Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#2995CC]/20 to-[#2C5AA0]/20 border border-[#2995CC]/30 backdrop-blur-sm"
                            >
                                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Experimente gratuitamente</h4>
                                        <p className="text-sm text-white/60">Agende uma demonstração personalizada da plataforma</p>
                                    </div>
                                    <Button className="bg-[#2995CC] hover:bg-[#2075A0] text-white px-8 py-6 rounded-xl font-semibold shadow-lg shadow-[#2995CC]/20 whitespace-nowrap">
                                        Agendar Demo
                                    </Button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </DialogContent>
    );
};

const MaisIdiomasDifferentials = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const stats = [
        { value: 100, suffix: '+', label: 'Clientes Ativos' },
        { value: 95, suffix: '%', label: 'Taxa de Sucesso' },
        { value: 3, suffix: 'x', label: 'ROI Médio' },
        { value: 60, suffix: '%', label: 'Redução de Custos' },
    ];



    return (
        <section ref={containerRef} id="sobre" className="relative py-32 px-4 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-['Poppins'] font-bold text-4xl md:text-5xl text-[#0F172A] mb-6 leading-tight">
                            O que nos torna <br />
                            <span className="text-[#2995CC]">únicos no mercado</span>
                        </h2>
                        <p className="font-['Open_Sans'] text-lg text-[#617798] leading-relaxed">
                            Combinamos tecnologia de ponta com a pedagogia humana e próxima que
                            sempre definiu a <span className="font-semibold text-[#0F172A]">+Idiomas</span>.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-start lg:justify-end"
                    >
                        <div className="flex gap-4">
                            <div className="flex flex-col gap-2">
                                <span className="text-4xl font-bold text-[#0F172A]">98%</span>
                                <span className="text-sm text-[#617798]">Satisfação</span>
                            </div>
                            <div className="w-px h-12 bg-gray-200" />
                            <div className="flex flex-col gap-2">
                                <span className="text-4xl font-bold text-[#0F172A]">24h</span>
                                <span className="text-sm text-[#617798]">Suporte</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">

                    {/* Main Feature - Large (Interactive) */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="md:col-span-2 row-span-2 rounded-3xl p-10 bg-[#0F172A] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#2995CC]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#2995CC]/30 transition-colors" />

                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/5">
                                        <BookOpen className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <h3 className="font-['Poppins'] font-bold text-3xl text-white">
                                                Recursos Premium
                                            </h3>
                                            <span className="px-2 py-0.5 rounded-full bg-[#2995CC] text-white text-xs font-bold uppercase tracking-wider">Novo</span>
                                        </div>
                                        <p className="font-['Open_Sans'] text-white/70 text-lg leading-relaxed mb-6">
                                            Material didático exclusivo desenvolvido por nossa equipa pedagógica.
                                            <span className="block mt-2 text-sm text-[#2995CC] font-semibold group-hover:translate-x-1 transition-transform">
                                                Clique para explorar os detalhes →
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </DialogTrigger>
                        <DashboardSimulator />
                    </Dialog>

                    {/* Secondary Feature - Tall */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1 md:row-span-2 rounded-3xl p-8 bg-[#F1F5F9] hover:bg-[#E2E8F0] transition-colors duration-300 flex flex-col justify-between group"
                    >
                        <div>
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                <Users className="w-6 h-6 text-[#2995CC]" />
                            </div>
                            <h3 className="font-['Poppins'] font-bold text-xl text-[#0F172A] mb-3">
                                Equipa de Elite
                            </h3>
                            <p className="font-['Open_Sans'] text-[#617798] text-sm">
                                Formadores nativos selecionados rigorosamente.
                            </p>
                        </div>
                        <div className="mt-8">
                            <div className="flex -space-x-2">
                                <img src="/assets/maisidiomas/avatar1.png" alt="Formador 1" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                <img src="/assets/maisidiomas/avatar2.png" alt="Formador 2" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                <img src="/assets/maisidiomas/avatar3.png" alt="Formador 3" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] text-slate-500 font-bold">+50</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tertiary Feature - Standard */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-1 rounded-3xl p-8 bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <Award className="w-10 h-10 text-[#2995CC] mb-6" />
                        <h3 className="font-['Poppins'] font-bold text-xl text-[#0F172A] mb-2">
                            Certificação
                        </h3>
                        <p className="font-['Open_Sans'] text-[#617798] text-sm">
                            Diplomas reconhecidos internacionalmente.
                        </p>
                    </motion.div>

                    {/* Quaternary Feature - Standard */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-1 rounded-3xl p-8 bg-gradient-to-br from-[#2995CC] to-[#2075A0] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <Zap className="w-10 h-10 text-white/90 mb-6" />
                        <h3 className="font-['Poppins'] font-bold text-xl text-white mb-2">
                            Inovação
                        </h3>
                        <p className="font-['Open_Sans'] text-white/80 text-sm">
                            Gamificação e IA aplicadas ao ensino.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default MaisIdiomasDifferentials;
