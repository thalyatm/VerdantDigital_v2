import React from 'react';
import { BENEFITS } from '../constants';
import { Smartphone, Clock, Settings, TrendingUp } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone size={32} />,
  Clock: <Clock size={32} />,
  Settings: <Settings size={32} />,
  TrendingUp: <TrendingUp size={32} />
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-brand-black relative border-t border-brand-border">
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
           <div className="max-w-3xl">
            <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest rounded">
              Our Solution
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 uppercase tracking-tight">
              Built just for <span className="text-brand-accent">Tradies</span>.
            </h2>
            <p className="text-brand-muted text-lg md:text-xl font-light border-l-2 border-brand-accent pl-6">
              Website + lead-system in one. We handle the tech so you can handle the jobs.
            </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="bg-brand-surface border border-brand-border rounded-2xl p-8 hover:border-brand-accent transition-all duration-300 group">
               <div className="w-14 h-14 bg-brand-black border border-brand-border rounded-xl flex items-center justify-center mb-6 text-brand-accent shadow-lg group-hover:scale-110 transition-transform">
                  {iconMap[benefit.iconName]}
               </div>
               <h3 className="text-xl font-display font-bold text-white mb-3">{benefit.title}</h3>
               <p className="text-brand-muted leading-relaxed text-sm">
                 {benefit.description}
               </p>
            </div>
          ))}
        </div>
        
        {/* Visual Mockup Section - Optional visual reinforcement */}
        <div className="mt-20 relative rounded-2xl overflow-hidden border border-brand-border">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black/90 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop" 
            alt="Team working" 
            className="w-full h-64 lg:h-96 object-cover opacity-50 grayscale"
          />
          <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12 z-20 text-center">
             <h3 className="text-2xl font-bold text-white mb-2">Your 24/7 Sales Rep</h3>
             <p className="text-brand-muted">While you're sleeping, your website is selling.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;