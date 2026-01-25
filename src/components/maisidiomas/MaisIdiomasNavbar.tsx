import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const MaisIdiomasNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-4 left-4 right-4 z-50">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg px-6 py-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-[#2995CC] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">+</span>
                            </div>
                            <div>
                                <h1 className="font-['Poppins'] font-semibold text-[#0F172A] text-lg">
                                    +Idiomas
                                </h1>
                                <p className="font-['Open_Sans'] text-xs text-[#617798]">
                                    Speak global, act local
                                </p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-6">
                            <a
                                href="#sobre"
                                className="font-['Open_Sans'] text-[#617798] hover:text-[#2995CC] transition-colors duration-200 cursor-pointer"
                            >
                                Sobre
                            </a>
                            <a
                                href="#perfis"
                                className="font-['Open_Sans'] text-[#617798] hover:text-[#2995CC] transition-colors duration-200 cursor-pointer"
                            >
                                Perfis de Acesso
                            </a>
                            <a
                                href="https://maisidiomas.pt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-['Open_Sans'] text-[#617798] hover:text-[#2995CC] transition-colors duration-200 cursor-pointer"
                            >
                                Site Oficial
                            </a>
                            <a
                                href="#plataforma"
                                className="bg-[#2995CC] hover:bg-[#2380b3] text-white px-6 py-2.5 rounded-lg font-['Open_Sans'] font-medium transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                            >
                                Aceder à Plataforma
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-[#617798] hover:text-[#2995CC] transition-colors cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="md:hidden mt-4 pt-4 border-t border-gray-200 space-y-3">
                            <a
                                href="#sobre"
                                className="block font-['Open_Sans'] text-[#617798] hover:text-[#2995CC] transition-colors py-2 cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                Sobre
                            </a>
                            <a
                                href="#perfis"
                                className="block font-['Open_Sans'] text-[#617798] hover:text-[#2995CC] transition-colors py-2 cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                Perfis de Acesso
                            </a>
                            <a
                                href="https://maisidiomas.pt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block font-['Open_Sans'] text-[#617798] hover:text-[#2995CC] transition-colors py-2 cursor-pointer"
                            >
                                Site Oficial
                            </a>
                            <a
                                href="#plataforma"
                                className="block bg-[#2995CC] hover:bg-[#2380b3] text-white px-6 py-2.5 rounded-lg font-['Open_Sans'] font-medium transition-all duration-200 text-center cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                Aceder à Plataforma
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default MaisIdiomasNavbar;
