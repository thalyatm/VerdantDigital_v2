import React from 'react';
import { X } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-brand-black relative overflow-hidden border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6 uppercase tracking-tight">
            THE PROBLEM WITH TRADIE WEBSITES
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {[
            "Built by devs who've never run a trade business",
            "Forms that don't work on iPhones",
            "Pages that load slower than a Monday morning",
            "You waste time explaining basic trade stuff to your \"web guy\""
          ].map((problem, i) => (
            <div key={i} className="bg-brand-surface/30 p-6 rounded-xl border border-red-500/30 hover:border-red-500/60 transition-colors group flex items-start gap-4">
              <div className="mt-1 bg-red-500/10 p-2 rounded-full text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                <X size={20} strokeWidth={3} />
              </div>
              <p className="text-white text-lg md:text-xl font-medium leading-tight">{problem}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-brand-accent text-2xl md:text-3xl font-display font-bold">
            Sound familiar?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;