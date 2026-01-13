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
        <div className="mb-10 reveal">
          <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
            Our Philosophy
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white leading-[1.1] mb-6 uppercase" style={{letterSpacing: '0.02em'}}>
            DESIGN AND CODE, <br/>
            <span className="text-brand-accent">AS ONE TEAM.</span>
          </h2>
          <p className="text-brand-muted text-base lg:text-lg leading-relaxed font-light max-w-3xl">
            Most agencies separate designers from developers. We don't. At Verdant, the people shaping your user experience also understand performance, and the people writing code care about clarity and how it feels to use. The result? Products that work as well as they look.
          </p>
        </div>

        {/* 3 Boxes in one line */}
        <div className="grid md:grid-cols-3 gap-6 reveal reveal-delay-100">

          {/* Strategic Design */}
          <div className="bg-brand-surface/30 border border-brand-border rounded-lg p-5 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300 flex flex-col items-start">
             <div className="w-10 h-10 bg-brand-black border border-brand-border rounded-lg flex items-center justify-center text-brand-muted group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 mb-4 shadow-lg">
                <Target size={24} />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Purposeful Design</h3>
              <p className="text-brand-muted leading-relaxed font-light text-sm">
                Every layout, colour and interaction guides your customers to act. More visits become real business outcomes.
              </p>
          </div>

          {/* Technical Excellence */}
          <div className="bg-brand-surface/30 border border-brand-border rounded-lg p-5 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300 flex flex-col items-start">
             <div className="w-10 h-10 bg-brand-black border border-brand-border rounded-lg flex items-center justify-center text-brand-muted group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 mb-4 shadow-lg">
                <Layers size={24} />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Built to Scale</h3>
              <p className="text-brand-muted leading-relaxed font-light text-sm">
                Fast, stable platforms on React, Node or Shopify. No slowdowns, no technical debt holding you back.
              </p>
          </div>

          {/* Integrated Approach */}
          <div className="bg-brand-surface/30 border border-brand-border rounded-lg p-5 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300 flex flex-col items-start">
             <div className="w-10 h-10 bg-brand-black border border-brand-border rounded-lg flex items-center justify-center text-brand-muted group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 mb-4 shadow-lg">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Your Team</h3>
              <p className="text-brand-muted leading-relaxed font-light text-sm">
                Clear updates, no jargon, and people who genuinely care about your success. We work with you, not around you.
              </p>
          </div>

        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-4 text-center md:text-left reveal reveal-delay-200">
            <a href="#enquire" className="group inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-extrabold px-6 py-3 rounded-lg shadow-[0_4px_14px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,179,0.6)] transition-all uppercase tracking-widest text-sm">
              Start a conversation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/about" className="group inline-flex items-center justify-center gap-3 border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-black font-bold px-6 py-3 rounded-lg transition-all uppercase tracking-widest text-sm">
              Read more in About Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default MainPhilosophy;