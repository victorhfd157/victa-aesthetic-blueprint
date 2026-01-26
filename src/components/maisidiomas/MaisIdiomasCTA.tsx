import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MaisIdiomasCTA = () => {
    return (
        <section id="plataforma" className="relative py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="relative overflow-hidden bg-gradient-to-br from-[#2995CC] to-[#1e7aa3] rounded-3xl p-12 md:p-16 shadow-2xl">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0F172A]/20 rounded-full blur-3xl" />

                    <div className="relative z-10 text-center">
                        <h2 className="font-['Poppins'] font-bold text-3xl md:text-5xl text-white mb-6">
                            Pronto para começar?
                        </h2>
                        <p className="font-['Open_Sans'] text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Explore o nosso protótipo funcional e descubra como a +Idiomas pode transformar
                            a formação de línguas na sua empresa.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/prototipo"
                                className="group inline-flex items-center bg-white hover:bg-gray-50 text-[#2995CC] px-8 py-4 rounded-xl font-['Open_Sans'] font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
                            >
                                <ExternalLink className="mr-2 w-5 h-5" />
                                +Idiomas Platform
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <a
                                href="https://maisidiomas.pt/contactos/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-xl font-['Open_Sans'] font-semibold border-2 border-white transition-all duration-300 cursor-pointer"
                            >
                                Fale Connosco
                            </a>
                        </div>

                        {/* Additional info */}
                        <div className="mt-12 pt-8 border-t border-white/20">
                            <p className="font-['Open_Sans'] text-white/80 text-sm">
                                Tem dúvidas? Entre em contacto através de{' '}
                                <a
                                    href="mailto:info@maisidiomas.pt"
                                    className="font-semibold underline hover:text-white transition-colors cursor-pointer"
                                >
                                    info@maisidiomas.pt
                                </a>
                                {' '}ou{' '}
                                <a
                                    href="tel:226095885"
                                    className="font-semibold underline hover:text-white transition-colors cursor-pointer"
                                >
                                    22 609 58 85/6
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MaisIdiomasCTA;
