import React from 'react';
import { ArrowRight, Target, Layers, Users } from 'lucide-react';

const MainPhilosophy: React.FC = () => {
  return (
    <section className="py-16 bg-brand-black relative overflow-hidden">
      {/* Animated Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 reveal">
          <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
            Our Philosophy
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white leading-[1.1] mb-6 uppercase" style={{letterSpacing: '0.02em'}}>
            WE DON'T SEPARATE <br/>
            <span className="animate-text-starspeed inline-block">DESIGN</span> <span className="animate-text-starspeed inline-block">FROM CODE.</span>
          </h2>
          <div className="space-y-4 text-brand-muted text-base lg:text-lg leading-relaxed font-light">
            <p>
              Most agencies hand designs over the wall to developers. We think that's backwards. <span className="text-brand-accent font-medium" style={{textShadow: '0 0 20px rgba(0, 255, 157, 0.5)'}}>Our developers make design decisions. Our designers write code.</span>
            </p>
            <p>
              This isn't about being full-stack for the sake of it, it's because the best digital products are built when the person optimising your checkout flow understands React performance, and the person architecting your database cares about typography.
            </p>
            <p>
              The result? Products that are technically sound and beautiful to use. No compromises, no translation gaps, no "that's not technically possible" excuses.
            </p>
          </div>
        </div>

        {/* 3 Boxes in one line */}
        <div className="grid md:grid-cols-3 gap-6 reveal reveal-delay-100">

          {/* Strategic Design */}
          <div className="bg-brand-surface/30 border border-brand-border rounded-lg p-4 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300 flex flex-col items-start">
             <div className="w-10 h-10 bg-brand-black border border-brand-border rounded-lg flex items-center justify-center text-brand-muted group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 mb-4 shadow-lg">
                <Target size={24} />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Strategic Design</h3>
              <p className="text-brand-muted leading-relaxed font-light text-sm">
                Every pixel serves a purpose. We move beyond vanity metrics to design user experiences that guide, inform, and convert your ideal customers.
              </p>
          </div>

          {/* Technical Excellence */}
          <div className="bg-brand-surface/30 border border-brand-border rounded-lg p-4 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300 flex flex-col items-start">
             <div className="w-10 h-10 bg-brand-black border border-brand-border rounded-lg flex items-center justify-center text-brand-muted group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 mb-4 shadow-lg">
                <Layers size={24} />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Technical Excellence</h3>
              <p className="text-brand-muted leading-relaxed font-light text-sm">
                Function without friction. A pretty interface is useless if it's slow. We engineer robust, scalable platforms using modern tech stacks (React, Node, Shopify) that stand the test of time.
              </p>
          </div>

          {/* Integrated Approach */}
          <div className="bg-brand-surface/30 border border-brand-border rounded-lg p-4 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300 flex flex-col items-start">
             <div className="w-10 h-10 bg-brand-black border border-brand-border rounded-lg flex items-center justify-center text-brand-muted group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 mb-4 shadow-lg">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Integrated Approach</h3>
              <p className="text-brand-muted leading-relaxed font-light text-sm">
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