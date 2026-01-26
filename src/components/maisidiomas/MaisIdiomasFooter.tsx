import { Mail, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const MaisIdiomasFooter = () => {
    return (
        <footer className="relative bg-[#0F172A] text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-[#2995CC] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">+</span>
                            </div>
                            <div>
                                <h3 className="font-['Poppins'] font-semibold text-lg">+Idiomas</h3>
                                <p className="font-['Open_Sans'] text-xs text-gray-400">Speak global, act local</p>
                            </div>
                        </div>
                        <p className="font-['Open_Sans'] text-sm text-gray-400 leading-relaxed">
                            Formação de idiomas para empresas com soluções digitais e personalizadas.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-['Poppins'] font-semibold text-lg mb-4">Contacto</h4>
                        <div className="space-y-3">
                            <a
                                href="mailto:info@maisidiomas.pt"
                                className="flex items-center space-x-2 text-gray-400 hover:text-[#2995CC] transition-colors cursor-pointer group"
                            >
                                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span className="font-['Open_Sans'] text-sm">info@maisidiomas.pt</span>
                            </a>
                            <a
                                href="tel:226095885"
                                className="flex items-center space-x-2 text-gray-400 hover:text-[#2995CC] transition-colors cursor-pointer group"
                            >
                                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span className="font-['Open_Sans'] text-sm">22 609 58 85/6</span>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-['Poppins'] font-semibold text-lg mb-4">Links Úteis</h4>
                        <div className="space-y-3">
                            <a
                                href="https://maisidiomas.pt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-400 hover:text-[#2995CC] transition-colors cursor-pointer group"
                            >
                                <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span className="font-['Open_Sans'] text-sm">Site Oficial</span>
                            </a>
                            <a
                                href="https://app.maisidiomas.pt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-400 hover:text-[#2995CC] transition-colors cursor-pointer group"
                            >
                                <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span className="font-['Open_Sans'] text-sm">A nossa APP</span>
                            </a>
                            <Link
                                to="/prototipo"
                                className="flex items-center space-x-2 text-gray-400 hover:text-[#2995CC] transition-colors cursor-pointer group"
                            >
                                <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span className="font-['Open_Sans'] text-sm">+Idiomas Platform</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="font-['Open_Sans'] text-sm text-gray-400">
                        © {new Date().getFullYear()} +Idiomas. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default MaisIdiomasFooter;
