import React, { useState } from 'react';
import { SlideData } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Check, ArrowRight, Server, Shield, Database, Layout, ExternalLink, ArrowDown, ArrowUp, Target, ChevronRight, Info } from 'lucide-react';

interface SlideRendererProps { slide: SlideData; }
const COLORS = ['#2563eb', '#4f46e5', '#9333ea', '#c026d3'];
const getAccentClasses = (accent?: string) => {
  switch(accent) {
    case 'blue': return 'bg-blue-50 text-blue-600 border-blue-100';
    case 'purple': return 'bg-purple-50 text-purple-600 border-purple-100';
    case 'amber': return 'bg-amber-50 text-amber-600 border-amber-100';
    case 'emerald': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
    case 'indigo': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
    case 'slate': return 'bg-slate-50 text-slate-600 border-slate-100';
    default: return 'bg-blue-50 text-blue-600 border-blue-100';
  }
};

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);
  const containerVariants: Variants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

  const Header = ({ title, subtitle, logo }: { title: string, subtitle?: string, logo?: React.ReactNode }) => (
    <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="flex-grow">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-3">{title}</h2>
        {subtitle && <p className="text-xl text-slate-500 font-medium max-w-4xl">{subtitle}</p>}
        <div className="w-16 h-1 bg-blue-600 rounded-full mt-6 md:mx-0 mx-auto" />
      </div>
      {logo && <div className="shrink-0 mb-2 md:mb-0">{logo}</div>}
    </div>
  );

  const FooterNote = ({ note }: { note?: string }) => {
    if (!note) return null;
    return (
      <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="mt-8 pt-8 border-t border-slate-100 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm text-slate-600 max-w-5xl">
          <Info className="w-5 h-5 text-blue-500 shrink-0" />
          <p className="text-sm font-medium leading-relaxed italic text-left md:text-center">{note}</p>
        </div>
      </motion.div>
    );
  };

  const renderContent = () => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8 relative">
            <div className="absolute inset-0 overflow-hidden -z-10 opacity-15 pointer-events-none">
               <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
               <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-purple-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
            </div>
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">{slide.title}</h1>
              <h2 className="text-2xl md:text-3xl text-blue-600 font-medium mb-10 tracking-wide">{slide.subtitle}</h2>
              {slide.content && <div className="inline-block px-8 py-4 bg-white/60 backdrop-blur-md rounded-full border border-slate-200/50 shadow-sm"><p className="text-xl text-slate-600 font-medium">{slide.content[0]}</p></div>}
            </motion.div>
            <div className="mt-16 flex flex-col items-center gap-2 p-6 rounded-2xl border border-transparent hover:border-slate-200 transition-colors">
              <p className="font-bold text-slate-800 text-lg">{slide.data.proponent}</p>
              <p className="text-slate-500 font-mono text-sm">{slide.data.contacts}</p>
            </div>
          </div>
        );
      case 'content-split':
        const hasSpecificVisual = !!slide.visual;
        const mainVisual = slide.visual || (slide.logo ? <div className="scale-125 md:scale-150">{slide.logo}</div> : null);
        const headerLogo = hasSpecificVisual ? slide.logo : undefined;
        return (
          <div className="flex flex-col h-full justify-center">
             <Header title={slide.title!} subtitle={slide.subtitle} logo={headerLogo} />
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-grow">
                <div className="order-2 lg:order-1 space-y-8">
                  <ul className="space-y-5">{slide.content?.map((item, idx) => (<motion.li key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="flex items-start space-x-4 text-lg text-slate-700 leading-relaxed"><span className="mt-2 w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 shadow-sm" /><span>{item}</span></motion.li>))}</ul>
                </div>
                <div className="order-1 lg:order-2 flex justify-center items-center w-full"><div className="w-full flex justify-center items-center">{mainVisual}</div></div>
             </div>
             <FooterNote note={slide.footerNote} />
          </div>
        );
      case 'grid-cards':
        const gridColsClass = slide.data.length === 3 ? 'lg:grid-cols-3' : (slide.data.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4');
        return (
          <div className="flex flex-col h-full">
            <Header title={slide.title!} subtitle={slide.subtitle} logo={slide.logo} />
            <div className={`grid grid-cols-1 md:grid-cols-2 ${gridColsClass} gap-6 flex-grow items-stretch`}>
              {slide.data.map((card: any, idx: number) => (
                <motion.div key={idx} whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                  <div className={`mb-5 p-2 rounded-xl w-fit group-hover:scale-105 transition-transform`}>{card.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h3>
                  <div className="flex-grow"><p className="text-slate-600 leading-relaxed text-sm">{card.description}</p></div>
                  {card.price && <div className="mt-6 pt-6 border-t border-slate-100"><p className="font-bold text-2xl text-blue-700">{card.price}</p></div>}
                </motion.div>
              ))}
            </div>
            <FooterNote note={slide.footerNote} />
          </div>
        );
      case 'diagram-flow':
        return (
          <div className="flex flex-col h-full justify-center">
            <div className="text-center mb-16">{slide.logo && <div className="flex justify-center mb-6">{slide.logo}</div>}<h2 className="text-4xl font-bold text-slate-900 mb-3">{slide.title}</h2><p className="text-xl text-slate-500">{slide.subtitle}</p></div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-16">
              {slide.data.steps.map((step: string, idx: number) => (<React.Fragment key={idx}><div className="relative group"><div className="bg-white px-8 py-6 rounded-2xl border border-slate-200 shadow-lg text-center min-w-[200px] font-bold text-slate-800 z-10 hover:border-blue-300 hover:shadow-blue-100/50 transition-all duration-300">{step}</div></div>{idx < slide.data.steps.length - 1 && <div className="text-slate-300 lg:rotate-0 rotate-90"><ArrowRight className="w-8 h-8" /></div>}</React.Fragment>))}
            </div>
            {slide.content && <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto w-full">{slide.content.map((c, i) => (<div key={i} className="flex items-center space-x-3 text-slate-600 bg-slate-50 border border-slate-100 px-5 py-3 rounded-xl shadow-sm"><div className="w-2 h-2 bg-blue-500 rounded-full shrink-0" /><span className="font-medium">{c}</span></div>))}</div>}
            <FooterNote note={slide.footerNote} />
          </div>
        );
      case 'pricing-cards':
        return (
          <div className="flex flex-col h-full">
            <Header title={slide.title!} subtitle={slide.subtitle} logo={slide.logo} />
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 flex-grow pb-8">
              {slide.data.map((plan: any, idx: number) => (
                <motion.div key={idx} whileHover={{ y: -8 }} className={`relative p-8 rounded-3xl border-2 flex flex-col justify-between ${plan.highlight ? 'border-blue-600 bg-white shadow-2xl z-10 scale-105 lg:w-[420px]' : 'border-slate-200 bg-slate-50/50 lg:w-[380px] hover:bg-white'} w-full transition-all duration-300`}>
                   {plan.highlight && <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center"><span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">Recomendado</span></div>}
                   <div><h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-blue-900' : 'text-slate-700'}`}>{plan.title}</h3><div className="flex items-baseline space-x-2 mb-8"><span className={`text-5xl font-extrabold ${plan.highlight ? 'text-blue-600' : 'text-slate-900'}`}>{plan.price}</span><span className="text-slate-500 font-medium">{plan.period}</span></div><div className="h-px bg-slate-200 w-full mb-8" /><ul className="space-y-4">{plan.features.map((feat: string, i: number) => (<li key={i} className="flex items-start space-x-3"><div className={`mt-0.5 p-0.5 rounded-full ${plan.highlight ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-500'}`}><Check className="w-3.5 h-3.5" /></div><span className="text-slate-700 font-medium">{feat}</span></li>))}</ul></div>
                </motion.div>
              ))}
            </div>
            <FooterNote note={slide.footerNote} />
          </div>
        );
      case 'table':
        return (
          <div className="flex flex-col h-full">
            <Header title={slide.title!} subtitle={slide.subtitle} logo={slide.logo} />
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg bg-white mb-6">
              <table className="w-full text-left border-collapse">
                <thead><tr className="bg-slate-50 border-b border-slate-200">{slide.data.headers.map((h: string, i: number) => (<th key={i} className="p-6 font-bold text-slate-700 uppercase text-xs tracking-wider">{h}</th>))}</tr></thead>
                <tbody>{slide.data.rows.map((row: string[], i: number) => { const isLastRow = i === slide.data.rows.length - 1; const isHighlighted = slide.data.highlightRow === i; let rowClasses = `border-b border-slate-100 last:border-0 hover:bg-slate-50/80 transition-colors`; let textClass = "text-slate-600"; if (isHighlighted) { rowClasses = `bg-blue-50/50 border-blue-100`; textClass = "text-blue-900 font-semibold"; } else if (isLastRow) { rowClasses = `bg-slate-100/50 font-bold border-t-2 border-slate-200`; textClass = "text-slate-900"; } return (<tr key={i} className={rowClasses}>{row.map((cell: string, j: number) => (<td key={j} className={`p-5 ${textClass}`}>{cell}</td>))}</tr>); })}</tbody>
              </table>
            </div>
            {slide.content && <div className="flex flex-wrap gap-4 mb-4">{slide.content.map((c, i) => { const isUrl = c.startsWith('http'); return (<div key={i} className={`px-4 py-2 bg-slate-100 rounded-lg text-sm font-medium flex items-center shadow-sm transition-colors ${isUrl ? 'text-blue-600 hover:bg-blue-50' : 'text-slate-600'}`}>{isUrl ? (<a href={c} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><ExternalLink className="w-3.5 h-3.5" /><span className="hover:underline">{c.replace(/^https?:\/\//, '')}</span></a>) : (<><div className="w-2 h-2 bg-slate-400 rounded-full mr-2" />{c}</>)}</div>); })}</div>}
            <FooterNote note={slide.footerNote} />
          </div>
        );
      case 'chart-bar':
        return (
          <div className="flex flex-col h-full">
            <Header title={slide.title!} subtitle={slide.subtitle} logo={slide.logo} />
            <div className="flex-grow flex flex-col bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={slide.data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" stroke="#64748b" tick={{fill: '#475569', fontSize: 12, fontWeight: 500}} axisLine={false} tickLine={false} dy={10} />
                  <YAxis stroke="#64748b" unit="€" tick={{fill: '#475569', fontSize: 12}} axisLine={false} tickLine={false} />
                  <RechartsTooltip contentStyle={{backgroundColor: '#1e293b', color: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}} itemStyle={{color: '#fff'}} cursor={{fill: '#f8fafc'}} />
                  <Bar dataKey="valor" fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={80}>{slide.data.map((entry: any, index: number) => (<Cell key={`cell-${index}`} fill={index === 2 ? '#10b981' : '#3b82f6'} />))}</Bar>
                </BarChart>
              </ResponsiveContainer>
              <FooterNote note={slide.footerNote} />
            </div>
          </div>
        );
      case 'timeline':
        return (
          <div className="flex flex-col h-full">
            <Header title={slide.title!} subtitle={slide.subtitle} logo={slide.logo} />
            <div className="relative flex-grow flex flex-col items-center justify-center w-full min-h-0">
              <div className="absolute top-[35%] left-4 right-4 h-0.5 bg-slate-100 transform -translate-y-1/2 z-0 rounded-full" />
              <div className="grid grid-cols-4 lg:grid-cols-8 gap-0 w-full max-w-6xl mx-auto z-10 mb-8">
                {slide.data.map((item: any, i: number) => { const isHovered = hoveredIndex === i; const isSelected = selectedPhase === i; return (<div key={i} className="relative flex flex-col items-center justify-center cursor-pointer group h-32" onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} onClick={() => setSelectedPhase(isSelected ? null : i)}><motion.div className={`w-12 h-12 rounded-full border-4 shadow-sm mb-4 transition-all duration-300 z-20 flex items-center justify-center text-sm font-bold ${isSelected ? 'bg-blue-600 border-blue-100 text-white scale-125 shadow-xl ring-4 ring-blue-50/50' : isHovered ? 'bg-blue-500 border-blue-50 text-white scale-110 shadow-lg' : 'bg-white border-slate-200 text-slate-400'}`}>{i + 1}</motion.div><div className="text-center w-full px-1 absolute top-[75%]"><p className={`text-[10px] md:text-xs font-bold transition-colors uppercase tracking-wider ${isSelected ? 'text-blue-700' : isHovered ? 'text-blue-500' : 'text-slate-400'}`}>{item.title}</p></div></div>); })}
              </div>
              <div className="w-full max-w-5xl h-48 mt-12">
                <AnimatePresence mode="wait">
                  {selectedPhase !== null ? (<motion.div key={selectedPhase} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-white rounded-3xl border border-blue-100 shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center"><div className="shrink-0 flex flex-col items-center"><div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-2">{selectedPhase + 1}</div><span className="text-blue-600 font-bold uppercase text-[10px] tracking-widest">Fase Ativa</span></div><div className="flex-grow"><h3 className="text-2xl font-bold text-slate-900 mb-2">{slide.data[selectedPhase].title}</h3><p className="text-slate-500 font-medium mb-4 text-sm">{slide.data[selectedPhase].desc}</p><div className="grid grid-cols-1 md:grid-cols-3 gap-4">{slide.data[selectedPhase].details?.map((detail: string, idx: number) => (<div key={idx} className="flex items-center gap-3 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100"><ChevronRight className="w-4 h-4 text-blue-500 shrink-0" /><span className="text-xs text-slate-700 font-semibold">{detail}</span></div>))}</div></div></motion.div>) : (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 rounded-3xl"><div className="p-4 bg-slate-100 rounded-full mb-4"><Target className="w-8 h-8 opacity-50" /></div><p className="font-medium text-lg">Selecione uma fase do roadmap para detalhar a operação</p></motion.div>)}
                </AnimatePresence>
              </div>
            </div>
            <FooterNote note={slide.footerNote} />
          </div>
        );
      case 'roi-split':
        return (
          <div className="flex flex-col h-full">
            <Header title={slide.title!} subtitle={slide.subtitle} logo={slide.logo} />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-grow overflow-hidden mb-4">
              <div className="lg:col-span-8 overflow-y-auto pr-2 pb-2"><div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full content-start">{slide.data.benefits.map((item: any, i: number) => { const accent = getAccentClasses(item.accent); const isLast = i === slide.data.benefits.length - 1 && slide.data.benefits.length % 2 !== 0; return (<div key={i} className={`bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col ${isLast ? 'md:col-span-2' : ''}`}><div className="flex items-center gap-3 mb-3"><div className={`p-2 rounded-lg ${accent}`}>{item.icon}</div><h3 className="font-bold text-slate-700">{item.title}</h3></div><ul className="space-y-2 flex-grow">{item.items.map((pt: string, idx: number) => (<li key={idx} className="text-sm text-slate-600 flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" /><span>{pt}</span></li>))}</ul></div>); })}</div></div>
              <div className="lg:col-span-4 flex flex-col h-full"><div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl flex flex-col h-full justify-between relative overflow-hidden border border-slate-800"><div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none" /><div><h3 className="text-xl font-bold mb-6 flex items-center gap-2"><ArrowUp className="w-5 h-5 text-emerald-400" />ROI Estimado</h3><div className="grid grid-cols-3 gap-2 mb-8">{slide.data.roi.indicators.map((ind: any, i: number) => (<div key={i} className="bg-white/5 rounded-xl p-2 text-center border border-white/5 backdrop-blur-sm"><div className={`inline-flex items-center justify-center mb-1 ${ind.trend === 'up' ? 'text-emerald-400' : 'text-blue-300'}`}>{ind.icon}</div><p className="text-[10px] text-slate-300 leading-tight font-medium">{ind.label}</p></div>))}</div><div className="space-y-3">{slide.data.roi.scenarios.map((sc: any, i: number) => (<div key={i} className={`p-4 rounded-xl border border-white/10 ${i === 1 ? 'bg-white/10' : 'bg-transparent'}`}><div className="flex justify-between items-center mb-1"><span className="text-xs font-bold uppercase tracking-wider text-slate-400">{sc.name}</span>{i === 1 && <span className="text-[10px] bg-blue-500 px-2 py-0.5 rounded-full text-white font-bold tracking-wide">RECOMENDADO</span>}</div><div className="flex justify-between items-end mt-2"><div><p className="text-[10px] text-slate-400 uppercase">Payback</p><p className="font-mono text-sm text-slate-200">{sc.payback}</p></div><div className="text-right"><p className="text-[10px] text-slate-400 uppercase">ROI Anual</p><p className={`font-bold text-xl ${i===2 ? 'text-emerald-400' : 'text-white'}`}>{sc.roi}</p></div></div></div>))}</div></div></div></div>
            </div>
            <FooterNote note={slide.footerNote} />
          </div>
        );
      case 'contact':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center relative overflow-hidden">
            <div className="absolute inset-0 z-0"><div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div><div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div></div>
            <div className="bg-white/80 backdrop-blur-md p-12 rounded-[2rem] shadow-2xl border border-white max-w-2xl w-full z-10 relative">
              <h2 className="text-4xl font-extrabold mb-6 text-slate-900 leading-tight">{slide.title}</h2>
              <p className="text-xl text-slate-500 mb-12 font-medium">{slide.subtitle}</p>
              <div className="space-y-6 text-left inline-block w-full bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <div className="flex items-center space-x-5"><div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl text-blue-600"><Layout className="w-8 h-8" /></div><div><p className="font-bold text-2xl text-slate-800">{slide.data.name}</p><p className="text-blue-600 font-medium">{slide.data.role}</p></div></div>
                <div className="h-px bg-slate-200 w-full" />
                <div className="space-y-3"><div className="flex items-center gap-3 text-slate-600"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full" /><p className="font-mono text-lg">{slide.data.email}</p></div><div className="flex items-center gap-3 text-slate-600"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full" /><p className="font-mono text-lg">{slide.data.email2}</p></div><div className="flex items-center gap-3 text-slate-600 mt-4"><div className="w-1.5 h-1.5 bg-green-400 rounded-full" /><p className="font-mono text-lg font-bold">{slide.data.phone}</p></div></div>
              </div>
            </div>
          </div>
        );
      case 'content-list':
        return (
          <div className="flex flex-col h-full justify-center max-w-5xl mx-auto w-full">
            <div className="mb-10 text-center"><div className="mx-auto mb-6 p-5 bg-white shadow-md border border-slate-100 rounded-2xl w-fit flex items-center justify-center gap-4">{slide.logo && <div className="scale-110 origin-center">{slide.logo}</div>}{slide.visual && !slide.logo && slide.visual}{slide.visual && slide.logo && <div className="w-px h-8 bg-slate-200"></div>}{slide.visual && slide.logo && slide.visual}</div><h2 className="text-4xl font-bold text-slate-900 mb-4">{slide.title}</h2>{slide.subtitle && <p className="text-xl text-slate-500">{slide.subtitle}</p>}</div>
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100/60 relative overflow-hidden"><div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" /><ul className="space-y-6">{slide.content?.map((item, idx) => (<li key={idx} className="flex items-start space-x-5 text-xl text-slate-700"><div className="mt-1 p-1 bg-green-100 rounded-full"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /></div><span className="leading-snug">{item}</span></li>))}</ul></div>
            <FooterNote note={slide.footerNote} />
          </div>
        );
      default:
        return <div>Slide type not implemented</div>;
    }
  };

  return (
    <motion.div className="w-full h-full p-8 md:p-12 overflow-y-auto max-w-[1400px] mx-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent flex flex-col" variants={containerVariants} initial="hidden" animate="visible" exit="hidden">
      {renderContent()}
    </motion.div>
  );
};
