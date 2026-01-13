import React from 'react';
import { TrendingUp, Layout, Search, MousePointerClick, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "UX/UI Design",
    desc: "Interfaces that feel natural and guide customers exactly where you want them. The foundation for everything that converts.",
    icon: <Layout size={28} />
  },
  {
    title: "SEO Strategy",
    desc: "Own your niche with content strategy, technical optimisation and authority building that brings the right traffic long-term.",
    icon: <Search size={28} />
  },
  {
    title: "Performance Marketing",
    desc: "Smarter targeting across Google, Meta and TikTok. Real returns on ad spend, not vanity metrics.",
    icon: <TrendingUp size={28} />
  },
  {
    title: "Conversion Optimisation",
    desc: "Data-driven testing that turns more of your current traffic into paying customers. Measurable ROI.",
    icon: <MousePointerClick size={28} />
  }
];

const MainExpertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 bg-brand-black relative scroll-mt-24">
      {/* Animated Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16 reveal text-left">
          <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/20 border border-brand-accent/40 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
            How We Grow It
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-[1.1] uppercase tracking-tight max-w-3xl">
            GROWTH & <br/>
            <span className="text-brand-accent">PERFORMANCE.</span>
          </h2>
          <p className="text-brand-muted text-base lg:text-lg leading-relaxed font-light max-w-2xl mt-4">
            Once we build it, we help you grow it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-brand-surface/60 md:bg-brand-surface/30 border border-brand-accent/20 md:border-brand-border rounded-lg p-4 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300 reveal flex flex-col items-start"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 bg-brand-black border border-brand-accent/30 md:border-brand-border rounded-lg flex items-center justify-center text-brand-accent group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 mb-4 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-muted leading-relaxed font-light text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4 text-center md:text-left reveal reveal-delay-200">
          <a href="/services" className="group inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-extrabold px-6 py-3 rounded-lg shadow-[0_4px_14px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,179,0.6)] transition-all uppercase tracking-widest text-sm">
            View all services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#enquire" className="group inline-flex items-center justify-center gap-3 text-brand-accent font-bold uppercase tracking-widest hover:text-white transition-colors text-sm">
            Discuss your project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainExpertise;