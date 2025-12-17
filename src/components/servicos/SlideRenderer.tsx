import React from 'react';
import { motion } from 'framer-motion';
import { SlideData } from '@/types/slides';
import { Mail, Phone, Globe, MapPin, CheckCircle2, XCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

interface SlideRendererProps {
  slide: SlideData;
}

const slideVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const itemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  const renderContent = () => {
    switch (slide.type) {
      case 'cover':
        return <CoverSlide slide={slide} />;
      case 'content-split':
        return <ContentSplitSlide slide={slide} />;
      case 'grid-cards':
        return <GridCardsSlide slide={slide} />;
      case 'comparison':
        return <ComparisonSlide slide={slide} />;
      case 'content-list':
        return <ContentListSlide slide={slide} />;
      case 'diagram-flow':
        return <DiagramFlowSlide slide={slide} />;
      case 'pricing-cards':
        return <PricingCardsSlide slide={slide} />;
      case 'table':
        return <TableSlide slide={slide} />;
      case 'chart-bar':
        return <BarChartSlide slide={slide} />;
      case 'chart-donut':
        return <DonutChartSlide slide={slide} />;
      case 'timeline':
        return <TimelineSlide slide={slide} />;
      case 'roi-split':
        return <RoiSplitSlide slide={slide} />;
      case 'contact':
        return <ContactSlide slide={slide} />;
      default:
        return <DefaultSlide slide={slide} />;
    }
  };

  return (
    <motion.div
      className="w-full h-full"
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {renderContent()}
    </motion.div>
  );
};

// --- SLIDE TYPE COMPONENTS ---

const CoverSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="relative w-full h-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8 overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
    
    <motion.div 
      className="relative z-10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-serif text-3xl font-bold shadow-lg shadow-blue-500/30">
          V
        </div>
        <span className="text-3xl font-bold text-white tracking-wider">VICTA AI</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        {slide.title}
      </h1>
      <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-8">
        {slide.subtitle}
      </p>
      {slide.footerNote && (
        <p className="text-sm text-slate-400 mt-8">{slide.footerNote}</p>
      )}
    </motion.div>
  </div>
);

const ContentSplitSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex flex-col p-8 md:p-12">
    <motion.h2 
      className="text-2xl md:text-3xl font-bold text-slate-800 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {slide.title}
    </motion.h2>
    
    <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        {slide.content?.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3"
            custom={i}
            variants={itemVariants}
            initial="initial"
            animate="animate"
          >
            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <p className="text-slate-600 text-base md:text-lg">{item}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="bg-slate-50 rounded-2xl p-6 h-full min-h-[250px] flex items-center justify-center border border-slate-200"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        {slide.visual}
      </motion.div>
    </div>
  </div>
);

const GridCardsSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex flex-col p-8 md:p-12">
    <motion.h2 
      className="text-2xl md:text-3xl font-bold text-slate-800 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {slide.title}
    </motion.h2>
    
    <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6">
      {slide.data?.cards?.map((card: any, i: number) => (
        <motion.div
          key={i}
          className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          custom={i}
          variants={itemVariants}
          initial="initial"
          animate="animate"
        >
          <div className="text-blue-600 mb-4">{card.icon}</div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">{card.title}</h3>
          <p className="text-slate-600 text-sm">{card.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const ComparisonSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex flex-col p-8 md:p-12">
    <motion.h2 
      className="text-2xl md:text-3xl font-bold text-slate-800 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {slide.title}
    </motion.h2>
    
    <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column */}
      <motion.div
        className={`rounded-xl p-6 border-2 ${slide.data?.left?.highlight ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white'}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold text-slate-800 mb-4">{slide.data?.left?.title}</h3>
        <div className="space-y-3">
          {slide.data?.left?.items?.map((item: string, i: number) => (
            <div key={i} className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-slate-400" />
              <span className="text-slate-600">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Right Column */}
      <motion.div
        className={`rounded-xl p-6 border-2 ${slide.data?.right?.highlight ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white'}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-xl font-semibold text-slate-800 mb-4">{slide.data?.right?.title}</h3>
        <div className="space-y-3">
          {slide.data?.right?.items?.map((item: string, i: number) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span className="text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

const ContentListSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className={`w-full h-full flex flex-col p-8 md:p-12 ${slide.highlight ? 'bg-gradient-to-br from-blue-600 to-blue-800' : ''}`}>
    <motion.h2 
      className={`text-2xl md:text-3xl font-bold mb-8 ${slide.highlight ? 'text-white' : 'text-slate-800'}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {slide.title}
    </motion.h2>
    
    <div className="flex-grow flex flex-col justify-center space-y-4 max-w-4xl">
      {slide.content?.map((item, i) => (
        <motion.div
          key={i}
          className={`flex items-start gap-3 p-4 rounded-lg ${slide.highlight ? 'bg-white/10' : 'bg-slate-50'}`}
          custom={i}
          variants={itemVariants}
          initial="initial"
          animate="animate"
        >
          <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${slide.highlight ? 'text-blue-200' : 'text-blue-600'}`} />
          <p className={`text-base md:text-lg ${slide.highlight ? 'text-white' : 'text-slate-700'}`}>{item}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const DiagramFlowSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex flex-col p-8 md:p-12">
    <motion.h2 
      className="text-2xl md:text-3xl font-bold text-slate-800 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {slide.title}
    </motion.h2>
    
    <div className="flex-grow flex items-center justify-center">
      {slide.visual}
    </div>
  </div>
);

const PricingCardsSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex flex-col p-8 md:p-12">
    <motion.h2 
      className="text-2xl md:text-3xl font-bold text-slate-800 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {slide.title}
    </motion.h2>
    
    <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
      {slide.data?.plans?.map((plan: any, i: number) => (
        <motion.div
          key={i}
          className={`rounded-xl p-6 border-2 flex flex-col ${plan.highlight ? 'border-blue-500 bg-blue-50 shadow-lg scale-105' : 'border-slate-200 bg-white'}`}
          custom={i}
          variants={itemVariants}
          initial="initial"
          animate="animate"
        >
          {plan.highlight && (
            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full self-start mb-4">
              Recomendado
            </span>
          )}
          <h3 className="text-xl font-bold text-slate-800 mb-2">{plan.name}</h3>
          <div className="mb-4">
            <span className="text-3xl font-bold text-blue-600">{plan.price}</span>
            <span className="text-slate-500">{plan.period}</span>
          </div>
          <ul className="space-y-2 flex-grow">
            {plan.features?.map((feature: string, j: number) => (
              <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
);

const TableSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex flex-col p-8 md:p-12">
    <motion.h2 
      className="text-2xl md:text-3xl font-bold text-slate-800 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {slide.title}
    </motion.h2>
    
    <motion.div 
      className="flex-grow overflow-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-100">
            {slide.data?.headers?.map((header: string, i: number) => (
              <th key={i} className="p-3 text-left font-semibold text-slate-700 border-b-2 border-slate-200">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slide.data?.rows?.map((row: string[], i: number) => (
            <tr key={i} className="hover:bg-slate-50">
              {row.map((cell: string, j: number) => (
                <td key={j} className="p-3 text-slate-600 border-b border-slate-100">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  </div>
);

const BarChartSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex flex-col p-8 md:p-12">
    <motion.h2 
      className="text-2xl md:text-3xl font-bold text-slate-800 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {slide.title}
    </motion.h2>
    
    <motion.div 
      className="flex-grow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={slide.data?.bars} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="label" stroke="#64748b" />
          <YAxis stroke="#64748b" tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`} />
          <Tooltip 
            formatter={(value: number) => [`R$ ${value.toLocaleString()}`, 'Economia']}
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
          />
          <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  </div>
);

const DonutChartSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex flex-col p-8 md:p-12">
    <motion.h2 
      className="text-2xl md:text-3xl font-bold text-slate-800 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {slide.title}
    </motion.h2>
    
    <motion.div 
      className="flex-grow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={slide.data?.segments}
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="70%"
            paddingAngle={2}
            dataKey="value"
            label={({ label, value }) => `${label}: ${value}%`}
          >
            {slide.data?.segments?.map((entry: any, index: number) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: number) => [`${value}%`, 'Participação']}
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  </div>
);

const TimelineSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex flex-col p-8 md:p-12">
    <motion.h2 
      className="text-2xl md:text-3xl font-bold text-slate-800 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {slide.title}
    </motion.h2>
    
    <div className="flex-grow flex items-center">
      <div className="w-full">
        {/* Timeline container */}
        <div className="relative">
          {/* Horizontal line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-slate-200" />
          
          {/* Timeline items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {slide.data?.items?.map((item: any, i: number) => (
              <motion.div
                key={i}
                className="relative flex flex-col items-center text-center"
                custom={i}
                variants={itemVariants}
                initial="initial"
                animate="animate"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg z-10">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-slate-800 mt-4 mb-1">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const RoiSplitSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex flex-col p-8 md:p-12">
    <motion.h2 
      className="text-2xl md:text-3xl font-bold text-slate-800 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {slide.title}
    </motion.h2>
    
    <div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-6">
      {slide.data?.metrics?.map((metric: any, i: number) => (
        <motion.div
          key={i}
          className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 flex flex-col items-center justify-center text-center border border-blue-200"
          custom={i}
          variants={itemVariants}
          initial="initial"
          animate="animate"
        >
          <span className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{metric.value}</span>
          <p className="text-sm text-slate-600">{metric.label}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const ContactSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-serif text-3xl font-bold">
          V
        </div>
        <span className="text-3xl font-bold text-white tracking-wider">VICTA AI</span>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{slide.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <motion.a
          href={`mailto:${slide.data?.email}`}
          className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          <Mail className="w-6 h-6 text-blue-400" />
          <span className="text-white">{slide.data?.email}</span>
        </motion.a>
        
        <motion.a
          href={`tel:${slide.data?.phone}`}
          className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          <Phone className="w-6 h-6 text-blue-400" />
          <span className="text-white">{slide.data?.phone}</span>
        </motion.a>
        
        <motion.a
          href={`https://${slide.data?.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          <Globe className="w-6 h-6 text-blue-400" />
          <span className="text-white">{slide.data?.website}</span>
        </motion.a>
        
        <motion.div
          className="flex items-center gap-3 bg-white/10 rounded-xl p-4"
        >
          <MapPin className="w-6 h-6 text-blue-400" />
          <span className="text-white">{slide.data?.address}</span>
        </motion.div>
      </div>
    </motion.div>
  </div>
);

const DefaultSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-12">
    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{slide.title}</h2>
    {slide.subtitle && <p className="text-lg text-slate-600">{slide.subtitle}</p>}
  </div>
);

export default SlideRenderer;
