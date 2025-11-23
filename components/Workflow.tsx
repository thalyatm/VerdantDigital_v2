import React from 'react';
import { WORKFLOW } from '../constants';
import { ArrowRight } from 'lucide-react';

const Workflow: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-brand-surface border-t border-brand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
           <div className="max-w-2xl">
             <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6 uppercase tracking-tight">HOW IT WORKS</h2>
             <p className="text-brand-muted text-lg">Live in 7 Days. No Headaches.</p>
           </div>
           <a href="#enquire" className="inline-flex items-center text-brand-accent font-bold uppercase tracking-widest hover:text-white transition-colors">
             Start your build <ArrowRight className="ml-2" size={20} />
           </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Continuous Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-brand-border -z-0"></div>

            {WORKFLOW.map((item, index) => (
              <div key={index} className="relative group">
                
                <div className="relative z-10 bg-brand-surface h-full group-hover:-translate-y-2 transform transition-transform duration-300">
                  <div className="w-24 h-24 bg-brand-black border-2 border-brand-border rounded-full flex items-center justify-center text-3xl font-display font-bold text-white mb-8 group-hover:border-brand-accent group-hover:text-brand-accent transition-colors shadow-xl mx-auto md:mx-0">
                    0{item.step}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed pr-4">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;