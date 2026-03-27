import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Presentation, FileDown, Laptop, ArrowRight, Globe2, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProjectHubProps {
  onViewPresentation: () => void;
}

const ProjectHub: React.FC<ProjectHubProps> = ({ onViewPresentation }) => {
  const navigate = useNavigate();
  const [showMarketingModal, setShowMarketingModal] = useState(false);

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
      description: 'Explore o protótipo funcional da plataforma de aprendizagem.',
      icon: Laptop,
      color: 'from-purple-500 to-purple-700',
      action: () => navigate('/prototipo'),
      buttonText: 'Acessar Protótipo',
    },
    {
      title: 'Hub +Idiomas',
      description: 'Página de marketing e entrada para a plataforma corporativa com apresentação da empresa.',
      icon: Globe2,
      color: 'from-cyan-500 to-blue-600',
      action: () => navigate('/maisidiomas-hub'),
      buttonText: 'Ver Hub',
    },
    {
      title: 'Plano de Marketing',
      description: 'Landing page B2B interativa focada na captação e conversão de clientes corporativos.',
      icon: Target,
      color: 'from-orange-500 to-red-600',
      action: () => setShowMarketingModal(true),
      buttonText: 'Ver Plano',
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-[96rem] w-full px-4">
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
              <motion.button
                onClick={card.action}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative w-full py-3 px-4 rounded-xl bg-gradient-to-r ${card.color} text-white font-medium flex items-center justify-center gap-2 overflow-hidden hover:shadow-lg transition-shadow`}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

                <span className="relative z-20 flex items-center gap-2">
                  {card.buttonText}
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </span>
              </motion.button>
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

      {/* Marketing Plan Modal */}
      <AnimatePresence>
        {showMarketingModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMarketingModal(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-2xl p-8 overflow-hidden shadow-2xl z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10 pointer-events-none" />
              
              <div className="relative z-20">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Plano de Marketing B2B</h2>
                    <p className="text-slate-400">Acesse a Landing Page oficial e baixe os relatórios complementares.</p>
                  </div>
                  <button 
                    onClick={() => setShowMarketingModal(false)}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>
                </div>

                {/* Primary Action */}
                <button 
                  onClick={() => window.open('/landing-mi/index.html', '_blank')}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg flex items-center justify-center gap-3 mb-8 hover:shadow-lg hover:shadow-orange-500/25 transition-all group"
                >
                  Acessar Landing Page de Exemplo
                  <Globe2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>

                {/* Documents Grid */}
                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Documentos Complementares</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Plano de Marketing Completo', file: 'plano_marketing_mais_idiomas.pdf' },
                    { title: 'Versão Executiva', file: 'versao_executiva_mais_idiomas.pdf' },
                    { title: 'Análise de Viabilidade', file: 'analise_viabilidade_crescimento_mais_idiomas.pdf' },
                    { title: 'Diagnóstico SEO', file: 'diagnostico_seo_mais_idiomas.pdf' },
                  ].map((doc) => (
                    <a 
                      key={doc.title}
                      href={`/landing-mi/docs/${doc.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group"
                    >
                      <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <FileDown className="w-5 h-5" />
                      </div>
                      <span className="text-slate-300 text-sm font-medium leading-tight group-hover:text-white transition-colors">
                        {doc.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectHub;
