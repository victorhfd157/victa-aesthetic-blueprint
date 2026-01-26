import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MaisIdiomasHero = () => {
    return (
        <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[90vh] flex items-center justify-center">
            {/* Dynamic Background with Mesh Gradient Effect */}
            <div className="absolute inset-0 bg-[#F8FAFC]">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#2995CC]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#617798]/15 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
            </div>

            <div className="relative max-w-7xl mx-auto text-center z-10">

                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-md border border-[#2995CC]/20 rounded-full px-5 py-2 mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2995CC] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2995CC]"></span>
                    </span>
                    <span className="font-['Open_Sans'] text-sm font-medium text-[#617798] tracking-wide uppercase">
                        Plataforma Corporativa
                    </span>
                </motion.div>

                {/* Main heading with Staggered Reveal */}
                <div className="mb-8 relative">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-['Poppins'] font-bold text-5xl md:text-7xl lg:text-8xl text-[#0F172A] leading-[1.1] tracking-tight"
                    >
                        Bem-vindo à <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] to-[#334155]">Plataforma</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-2"
                    >
                        <span className="font-['Poppins'] font-bold text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#2995CC] via-[#3FA9E0] to-[#2995CC] bg-[length:200%_auto] animate-gradient">
                            +Idiomas
                        </span>
                    </motion.div>
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="font-['Open_Sans'] text-lg md:text-2xl text-[#617798] mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                >
                    Speak global, act local. A excelência do ensino presencial,
                    agora com a flexibilidade do digital <span className="font-semibold text-[#0F172A]">24/7</span>.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
                >
                    <Link
                        to="/prototipo"
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-['Open_Sans'] font-semibold text-white transition-all duration-200 bg-[#2995CC] rounded-full hover:bg-[#2380b3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2995CC] shadow-lg shadow-[#2995CC]/30 hover:shadow-[#2995CC]/50 hover:-translate-y-1 overflow-hidden"
                    >
                        <span className="relative mr-2 z-10">Aceder à Plataforma</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform z-10" />
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-[#1c7ab6]/20"></div>
                    </Link>

                    <a
                        href="#sobre"
                        className="group inline-flex items-center justify-center px-8 py-4 font-['Open_Sans'] font-semibold text-[#617798] transition-all duration-200 bg-white border border-[#E2E8F0] rounded-full hover:bg-gray-50 hover:text-[#2995CC] hover:border-[#2995CC]/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 shadow-sm hover:shadow-md cursor-pointer"
                    >
                        Conhecer Soluções
                    </a>
                </motion.div>

                {/* Stats with Glassmorphism */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                >
                    {[
                        { value: "17+", label: "Anos de Experiência" },
                        { value: "100+", label: "Empresas Clientes" },
                        { value: "Digital", label: "Acesso Ilimitado" }
                    ].map((stat, i) => (
                        <div key={i} className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#2995CC] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
                            <div className="font-['Poppins'] font-bold text-4xl text-[#0F172A] mb-1 group-hover:text-[#2995CC] transition-colors">{stat.value}</div>
                            <div className="font-['Open_Sans'] text-sm font-medium text-[#617798] uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MaisIdiomasHero;
