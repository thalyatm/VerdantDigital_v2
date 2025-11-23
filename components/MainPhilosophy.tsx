import React from 'react';
import { ArrowRight, Target, Layers, Users } from 'lucide-react';

const MainPhilosophy: React.FC = () => {
  return (
    <section className="py-16 bg-brand-surface border-t border-brand-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-12 reveal">
          <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
            Our Philosophy
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white leading-[1.1] mb-6">
            DESIGN WITH <span className="text-brand-accent">INTENT</span>.<br/>
            STRATEGY THAT SCALES.
          </h2>
          <p className="text-brand-muted text-base lg:text-lg leading-relaxed font-light max-w-2xl">
            We believe you shouldn't have to choose between a beautiful brand and a high-performing business. We build digital products that build trust and drive growth.
          </p>
        </div>

        {/* 3 Boxes in one line */}
        <div className="grid md:grid-cols-3 gap-6 reveal reveal-delay-100">
          
          {/* Strategic Design */}
          <div className="bg-brand-black border border-brand-border p-6 rounded-xl group hover:border-brand-accent transition-colors duration-300 relative overflow-hidden flex flex-col">
             <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:bg-brand-accent/10"></div>
             
             <div className="w-12 h-12 bg-brand-surface border border-brand-border rounded-lg flex items-center justify-center text-brand-muted group-hover:text-brand-accent group-hover:border-brand-accent transition-all mb-6 relative z-10">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">Strategic Design</h3>
              <p className="text-brand-muted leading-relaxed text-sm flex-grow">
                Every pixel serves a purpose. We move beyond vanity metrics to design user experiences that guide, inform, and convert your ideal customers.
              </p>
          </div>

          {/* Technical Excellence */}
          <div className="bg-brand-black border border-brand-border p-6 rounded-xl group hover:border-brand-accent transition-colors duration-300 relative overflow-hidden flex flex-col">
             <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:bg-brand-accent/10"></div>

             <div className="w-12 h-12 bg-brand-surface border border-brand-border rounded-lg flex items-center justify-center text-brand-muted group-hover:text-brand-accent group-hover:border-brand-accent transition-all mb-6 relative z-10">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">Technical Excellence</h3>
              <p className="text-brand-muted leading-relaxed text-sm flex-grow">
                A pretty interface is useless if it's slow. We engineer robust, scalable platforms using modern tech stacks (React, Node, Shopify) that stand the test of time.
              </p>
          </div>

          {/* True Partnership */}
          <div className="bg-brand-black border border-brand-border p-6 rounded-xl group hover:border-brand-accent transition-colors duration-300 relative overflow-hidden flex flex-col">
             <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:bg-brand-accent/10"></div>

             <div className="w-12 h-12 bg-brand-surface border border-brand-border rounded-lg flex items-center justify-center text-brand-muted group-hover:text-brand-accent group-hover:border-brand-accent transition-all mb-6 relative z-10">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">True Partnership</h3>
              <p className="text-brand-muted leading-relaxed text-sm flex-grow">
                We operate as an extension of your team. No black boxes or confusing jargon—just clear communication, full ownership, and shared goals.
              </p>
          </div>

        </div>

        <div className="mt-10 text-center md:text-left reveal reveal-delay-200">
            <a href="#enquire" className="group inline-flex items-center gap-3 text-brand-accent font-bold uppercase tracking-widest hover:text-white transition-colors text-sm">
              Start a conversation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default MainPhilosophy;