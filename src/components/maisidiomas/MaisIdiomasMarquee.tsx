import Marquee from "react-fast-marquee";
import { Building2, Globe, GraduationCap, Award, Briefcase, Zap } from "lucide-react";

const MaisIdiomasMarquee = () => {
    const partners = [
        { name: "TechCorp", icon: Building2 },
        { name: "Global Systems", icon: Globe },
        { name: "EduFuture", icon: GraduationCap },
        { name: "InnovateX", icon: Zap },
        { name: "Prime Solutions", icon: Award },
        { name: "Enterprise Hub", icon: Briefcase },
    ];

    return (
        <div className="py-10 bg-white border-b border-slate-100 overflow-hidden">
            <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-8">
                Mais de 100 empresas confiam na nossa formação
            </p>
            <Marquee gradient={true} gradientColor="255, 255, 255" speed={40}>
                {partners.map((Partner, index) => (
                    <div key={index} className="flex items-center space-x-3 mx-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default group">
                        <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                            <Partner.icon className="w-8 h-8 text-slate-600 group-hover:text-[#2995CC]" />
                        </div>
                        <span className="text-xl font-bold text-slate-600 group-hover:text-[#0F172A]">{Partner.name}</span>
                    </div>
                ))}
                {partners.map((Partner, index) => (
                    <div key={`dup-${index}`} className="flex items-center space-x-3 mx-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default group">
                        <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                            <Partner.icon className="w-8 h-8 text-slate-600 group-hover:text-[#2995CC]" />
                        </div>
                        <span className="text-xl font-bold text-slate-600 group-hover:text-[#0F172A]">{Partner.name}</span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default MaisIdiomasMarquee;
