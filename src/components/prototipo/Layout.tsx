import React from 'react';
import { Menu, LogOut, Globe, ChevronRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  onHome: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onHome }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-900 selection:bg-indigo-500/20 selection:text-indigo-900 relative overflow-x-hidden">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/40 rounded-full blur-[120px] mix-blend-multiply"></div>
          <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] bg-slate-100/50 rounded-full blur-[120px] mix-blend-multiply"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-4 cursor-pointer group" onClick={onHome}>
                <div className="bg-gradient-to-br from-indigo-600 to-violet-600 p-2.5 rounded-xl text-white shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/30 group-hover:scale-105 transition-all duration-300 ease-out">
                    <Globe size={24} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold text-slate-900 leading-none tracking-tight font-display">Mais Idiomas</h1>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1.5">Corporate Learning</span>
                </div>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
                <button 
                  onClick={() => navigate('/servicos')}
                  className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 text-sm font-semibold transition-all group px-4 py-2 hover:bg-indigo-50/50 rounded-full"
                >
                    <ArrowLeft size={16} strokeWidth={2.5} className="group-hover:-translate-x-0.5 transition-transform" />
                    Voltar ao Hub
                </button>
                <div className="h-8 w-px bg-slate-200"></div>
                <span className="text-xs font-bold text-slate-500 bg-slate-100/50 px-4 py-2 rounded-full border border-slate-200/50 uppercase tracking-wider backdrop-blur-sm">
                    Languages empowering businesses
                </span>
            </div>
            <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                <Menu size={24} />
            </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-8 py-28 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-20 relative z-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 lg:col-span-2">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="bg-slate-900 p-2 rounded-lg text-indigo-500">
                            <Globe size={24} />
                        </div>
                        <span className="text-2xl font-bold text-white tracking-tight">Mais Idiomas</span>
                     </div>
                     <p className="text-slate-400 leading-relaxed text-lg max-w-md">
                         Empowering global teams with tailored language solutions. 
                         Mais Alcance, Mais Originalidade, Mais Resultados!
                     </p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6">Platform</h4>
                    <ul className="space-y-4">
                        {['Dashboard', 'My Progress', 'Certificates', 'Support'].map(item => (
                            <li key={item}><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="text-slate-600 group-hover:text-indigo-500" /> {item}</a></li>
                        ))}
                    </ul>
                </div>
                 <div>
                    <h4 className="text-white font-bold mb-6">Legal</h4>
                    <ul className="space-y-4">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(item => (
                            <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-slate-600 uppercase tracking-widest font-bold">
                    © {new Date().getFullYear()} Mais Idiomas Corporate.
                </p>
                <div className="flex gap-6">
                     {/* Social icons placeholders */}
                     <div className="w-5 h-5 bg-slate-900 rounded-full hover:bg-indigo-600 transition-colors cursor-pointer"></div>
                     <div className="w-5 h-5 bg-slate-900 rounded-full hover:bg-indigo-600 transition-colors cursor-pointer"></div>
                     <div className="w-5 h-5 bg-slate-900 rounded-full hover:bg-indigo-600 transition-colors cursor-pointer"></div>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
