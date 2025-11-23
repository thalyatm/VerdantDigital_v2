import React from 'react';
import { ArrowDown, Server, ShoppingCart, Code2, Globe2 } from 'lucide-react';

const MainHero: React.FC = () => {
  return (
    <section className="relative bg-brand-black pt-40 pb-20 lg:pt-60 lg:pb-40 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.1] pointer-events-none"></div>
      
      {/* Animated Gradient Blob */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[10000ms]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl reveal">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded bg-brand-surface/50 border border-brand-border text-brand-muted text-xs font-bold uppercase tracking-[0.2em] mb-10 backdrop-blur-sm">
            <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
            Digital Growth Engineered
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white leading-[0.85] tracking-tighter mb-12">
            DIGITAL <br/>
            <span className="animate-text-starspeed">
              ACCELERATED.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-brand-muted max-w-3xl leading-relaxed font-light mb-16">
            Full-service digital agency specializing in <span className="font-medium text-white">Shopify e-commerce</span>, 
            <span className="font-medium text-white"> custom application development</span>, and <span className="font-medium text-white">high-ROI advertising campaigns</span>.
          </p>

          <div className="flex flex-col items-start gap-8 border-t border-brand-border pt-10">
             <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Powered by Enterprise Technology Stack</span>
             
             {/* Clarified Technology Section with visual badges */}
             <div className="flex flex-wrap gap-3 md:gap-5">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 hover:border-brand-accent hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all duration-300 group cursor-default">
                  <ShoppingCart size={20} className="text-brand-accent drop-shadow-[0_0_8px_rgba(0,255,157,0.5)]" />
                  <span className="text-white font-bold text-sm tracking-wide">Shopify Plus</span>
                </div>
                
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 hover:border-brand-accent hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all duration-300 group cursor-default">
                  <Code2 size={20} className="text-brand-accent drop-shadow-[0_0_8px_rgba(0,255,157,0.5)]" />
                  <span className="text-white font-bold text-sm tracking-wide">React / Next.js</span>
                </div>
                
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 hover:border-brand-accent hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all duration-300 group cursor-default">
                  <Globe2 size={20} className="text-brand-accent drop-shadow-[0_0_8px_rgba(0,255,157,0.5)]" />
                  <span className="text-white font-bold text-sm tracking-wide">Google Ads</span>
                </div>
                
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 hover:border-brand-accent hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all duration-300 group cursor-default">
                  <Server size={20} className="text-brand-accent drop-shadow-[0_0_8px_rgba(0,255,157,0.5)]" />
                  <span className="text-white font-bold text-sm tracking-wide">AWS Cloud</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      <a href="#expertise" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-brand-muted/50 hover:text-brand-accent transition-colors animate-bounce reveal reveal-delay-300 cursor-pointer z-20">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
};

export default MainHero;