import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-accent relative overflow-hidden">
       <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
       <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
       
       <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
         <h2 className="text-4xl md:text-6xl font-display font-black text-brand-black mb-8 tracking-tight leading-[0.95]">
           READY TO GET MORE<br/>TRADIE JOBS?
         </h2>
         <p className="text-xl font-medium text-brand-black/80 mb-10 max-w-2xl mx-auto">
           Stop relying on word of mouth. Get a predictable stream of leads with a website built for conversion.
         </p>
         
         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#enquire" className="bg-brand-black text-white hover:bg-brand-surface font-bold text-lg py-4 px-8 rounded-lg shadow-xl transition-all flex items-center gap-3 transform hover:-translate-y-1">
              Book a Free Strategy Session
              <ArrowRight size={20} />
            </a>
            <a href="#pricing" className="bg-white/20 hover:bg-white/30 text-brand-black border-2 border-brand-black font-bold text-lg py-4 px-8 rounded-lg transition-all">
              See Plans & Pricing
            </a>
         </div>

         <div className="flex flex-wrap justify-center gap-6 text-brand-black/70 font-bold text-sm uppercase tracking-wider">
           <span className="flex items-center gap-2"><CheckCircle size={18} className="text-brand-black"/> No Obligation</span>
           <span className="flex items-center gap-2"><CheckCircle size={18} className="text-brand-black"/> 15 Minute Chat</span>
           <span className="flex items-center gap-2"><CheckCircle size={18} className="text-brand-black"/> Free Lead Audit</span>
         </div>
       </div>
    </section>
  );
};

export default CtaSection;