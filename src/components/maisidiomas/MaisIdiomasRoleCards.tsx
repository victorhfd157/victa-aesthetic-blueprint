import { useRef, useState } from 'react';
import { GraduationCap, BarChart3, Briefcase, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const MaisIdiomasRoleCards = () => {
    const roles = [
        {
            icon: GraduationCap,
            title: 'Formando',
            subtitle: 'Aprenda ao seu ritmo',
            color: '#2995CC',
            features: [
                'Acesso a todos os cursos de idiomas',
                'Acompanhamento do progresso',
                'Certificados digitais',
                'Materiais interativos',
                'Exercícios práticos',
            ],
        },
        {
            icon: BarChart3,
            title: 'RH',
            subtitle: 'Gestão e acompanhamento',
            color: '#617798',
            features: [
                'Dashboard com KPIs em tempo real',
                'Exportação de dados e relatórios',
                'Gestão de utilizadores',
                'Monitorização de progresso',
                'Análise de desempenho',
            ],
        },
        {
            icon: Briefcase,
            title: 'Gestor',
            subtitle: 'Visão estratégica',
            color: '#0F172A',
            features: [
                'Relatórios executivos',
                'Aprovação de orçamentos',
                'Visão geral da formação',
                'ROI da formação',
                'Planeamento estratégico',
            ],
        },
    ];

    return (
        <section id="perfis" className="relative py-32 px-4 bg-[#F8FAFC] overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#F8FAFC]" />

            <div className="relative max-w-7xl mx-auto z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="font-['Open_Sans'] font-semibold text-[#2995CC] tracking-wider uppercase text-sm mb-2 block">
                        Acesso Segmentado
                    </span>
                    <h2 className="font-['Poppins'] font-bold text-4xl md:text-5xl text-[#0F172A] mb-6">
                        Uma plataforma, <span className="text-[#2995CC]">múltiplas visões</span>
                    </h2>
                    <p className="font-['Open_Sans'] text-lg text-[#617798] max-w-2xl mx-auto leading-relaxed">
                        Painéis de controlo personalizados que entregam a informação certa,
                        para a pessoa certa, no momento certo.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {roles.map((role, index) => (
                        <SpotlightCard key={index} role={role} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Componente isolado para o efeito Spotlight
const SpotlightCard = ({ role, index }: { role: any, index: number }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const Icon = role.icon;

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => setIsFocused(false)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative h-full bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-transparent cursor-default"
        >
            {/* Spotlight Effect Layer */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${role.color}15, transparent 40%)`,
                }}
            />

            {/* Card Content */}
            <div className="relative h-full flex flex-col p-8">
                {/* Header */}
                <div className="mb-8">
                    <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                        style={{ backgroundColor: `${role.color}15` }}
                    >
                        <Icon className="w-7 h-7" style={{ color: role.color }} />
                    </div>
                    <h3 className="font-['Poppins'] font-bold text-2xl text-[#0F172A] mb-2 group-hover:text-[#2995CC] transition-colors">
                        {role.title}
                    </h3>
                    <p className="font-['Open_Sans'] text-sm font-medium text-[#617798]">
                        {role.subtitle}
                    </p>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gray-100 mb-8 group-hover:bg-gray-200 transition-colors" />

                {/* Features */}
                <ul className="space-y-4 flex-grow">
                    {role.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 flex-shrink-0 mt-0.5 transition-colors" style={{ color: role.color }} />
                            <span className="font-['Open_Sans'] text-sm text-[#617798] group-hover:text-[#0F172A] transition-colors">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* Bottom Action Hint */}
                <div className="mt-8 pt-4 flex items-center text-sm font-semibold opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" style={{ color: role.color }}>
                    Ver funcionalidades
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
            </div>
        </motion.div>
    );
};

export default MaisIdiomasRoleCards;
