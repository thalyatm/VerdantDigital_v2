import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote, TrendingUp } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="proof" className="py-32 bg-brand-black relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-4">
            Results from <span className="text-brand-accent">Real Tradies</span>.
          </h2>
          <p className="text-brand-muted">Trusted by 150+ Aussie trades businesses.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="bg-brand-surface p-8 rounded-2xl border border-brand-border relative group hover:border-brand-accent/30 transition-colors flex flex-col">
              <Quote className="absolute top-8 right-8 text-brand-black group-hover:text-brand-accent/5 transition-colors" size={48} />
              
              <div className="flex gap-1 mb-6 text-brand-accent">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-brand-bone text-lg leading-relaxed mb-8 relative z-10 font-light flex-grow">"{t.quote}"</p>
              
              {t.result && (
                <div className="mb-6 py-3 px-4 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center gap-3">
                   <TrendingUp size={20} className="text-brand-accent" />
                   <span className="text-brand-accent font-bold text-sm">{t.result}</span>
                </div>
              )}
              
              <div className="flex items-center gap-4 border-t border-brand-border pt-6 mt-auto">
                <div className="w-10 h-10 rounded-lg bg-brand-black border border-brand-border flex items-center justify-center text-lg font-bold text-brand-accent font-display">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white font-display tracking-wide text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;