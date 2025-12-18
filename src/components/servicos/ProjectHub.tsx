import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, FileDown, Laptop, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProjectHubProps {
  onViewPresentation: () => void;
}

const ProjectHub: React.FC<ProjectHubProps> = ({ onViewPresentation }) => {
  const navigate = useNavigate();

  const handleDownloadProposta = () => {
    // Download the Word document
    const link = document.createElement('a');
    link.href = '/downloads/Proposta_Mais_Idiomas.docx';
    link.download = 'Proposta_Mais_Idiomas_-_Moodle_IA.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const cards = [
    {
      title: 'Apresentação',
      description: 'Veja os slides da apresentação comercial com visão geral da solução, arquitetura e benefícios.',
      icon: Presentation,
      color: 'from-blue-500 to-blue-700',
      action: onViewPresentation,
      buttonText: 'Ver Apresentação',
    },
    {
      title: 'Proposta Completa',
      description: 'Baixe o documento Word com a proposta comercial detalhada, escopo e condições.',
      icon: FileDown,
      color: 'from-emerald-500 to-emerald-700',
      action: handleDownloadProposta,
      buttonText: 'Baixar Documento',
    },
    {
      title: 'Protótipo LMS',
      description: 'Explore o protótipo funcional do LMS com geração de conteúdo por IA (Gemini).',
      icon: Laptop,
      color: 'from-purple-500 to-purple-700',
      action: () => navigate('/prototipo'),
      buttonText: 'Acessar Protótipo',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-serif text-2xl font-bold">
            V
          </div>
          <h1 className="text-3xl font-bold text-white tracking-wide">VICTA AI</h1>
        </div>
        <h2 className="text-xl text-slate-300 font-light">
          Projeto Mais Idiomas - Moodle + IA
        </h2>
        <p className="text-slate-400 mt-2 max-w-md mx-auto">
          Selecione uma das opções abaixo para explorar a proposta
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full flex flex-col hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <card.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-slate-400 text-sm flex-grow mb-5 leading-relaxed">
                {card.description}
              </p>

              {/* Action Button */}
              <button
                onClick={card.action}
                className={`w-full py-3 px-4 rounded-xl bg-gradient-to-r ${card.color} text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity group-hover:shadow-lg`}
              >
                {card.buttonText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-slate-500 text-sm mt-12"
      >
        Confidencial • VICTA AI © 2024
      </motion.p>
    </div>
  );
};

export default ProjectHub;
