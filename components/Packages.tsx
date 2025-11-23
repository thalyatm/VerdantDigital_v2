import React from 'react';
import { Check, ShieldCheck, Zap, Info } from 'lucide-react';

const Packages: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-brand-black relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 uppercase tracking-tight">
            THE DEAL
          </h2>
          <p className="text-brand-muted text-xl max-w-2xl mx-auto font-light">
            Simple Pricing. Big Results.
          </p>
        </div>

        <div className="max-w-md mx-auto reveal reveal-delay-100">
            <div className="relative bg-brand-black border-2 border-brand-accent rounded-2xl shadow-[0_0_50px_rgba(0,255,157,0.15)] overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
              
              {/* Badge */}
              <div className="bg-brand-accent text-brand-black text-xs font-extrabold uppercase tracking-widest py-3 text-center">
                MOST POPULAR FOR TRADIES
              </div>

              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-display font-black text-white mb-2 uppercase italic leading-none">
                  Tradie Starter Pack
                </h3>
                <p className="text-brand-muted text-sm mb-8 border-b border-brand-border pb-8 leading-relaxed mt-4">
                  Everything you need to get online and get work.
                </p>

                {/* Pricing */}
                <div className="flex flex-col items-center mb-10 text-center">
                   <div className="relative mb-1">
                      <span className="text-gray-500 text-xl font-bold">$1299</span>
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-500 rotate-[-10deg]"></div>
                   </div>
                   <div className="flex items-baseline gap-2">
                     <span className="text-3xl text-brand-accent font-bold">$</span>
                     <span className="text-8xl font-display font-black text-white tracking-tighter">299</span>
                   </div>
                   <span className="text-xs font-bold text-brand-muted uppercase tracking-widest mb-6">Initial Build Cost</span>
                   
                   <div className="flex items-center gap-3 bg-brand-surface px-8 py-4 rounded-xl border border-brand-border w-full justify-center shadow-inner mb-6">
                      <span className="text-2xl font-bold text-white">+ $99</span>
                      <span className="text-sm text-brand-muted font-medium opacity-80">/ month</span>
                   </div>

                   {/* Contract Details - Made Prominent */}
                   <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-lg p-3 w-full">
                     <div className="flex items-center justify-center gap-2 text-brand-accent font-bold uppercase text-[11px] tracking-widest mb-1">
                       <Info size={14} />
                       Contract Terms
                     </div>
                     <p className="text-white text-sm font-medium">
                       24 Month Contract • Cancel Anytime After
                     </p>
                   </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {[
                    "Custom High-Convert Website",
                    "Mobile & Tablet Optimized",
                    "Google Business Setup",
                    "Basic Local SEO",
                    "Contact Form & Quote Integration",
                    "Hosting & Domain Included",
                    "Unlimited Content Updates",
                    "Live in 7 Days or Less"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-0.5 bg-brand-accent/10 p-1 rounded-full text-brand-accent flex-shrink-0">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-gray-300 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="#enquire" className="w-full bg-brand-accent hover:bg-white text-brand-black font-bold text-lg py-5 rounded-xl shadow-[0_4px_20px_rgba(0,255,157,0.4)] hover:shadow-[0_6px_30px_rgba(0,255,157,0.6)] transition-all transform hover:-translate-y-1 uppercase tracking-wider flex items-center justify-center gap-3 group">
                  <Zap size={20} className="fill-current group-hover:scale-110 transition-transform" />
                  SECURE THIS PRICE
                </a>
                
                <div className="mt-6 flex justify-center items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                   <ShieldCheck size={16} className="text-brand-accent"/> 30-Day Satisfaction Guarantee
                </div>

              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Packages;