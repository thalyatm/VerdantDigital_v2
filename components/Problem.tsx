import React from 'react';
import { TrendingDown, Clock, AlertTriangle } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-brand-black relative overflow-hidden border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest rounded">
            The Reality
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            You're a pro at what you do. <br/>
            <span className="text-brand-muted">But is your website working?</span>
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            You’re too busy on site to deal with website changes. You just want someone who understands tradies. Currently, your website is just sitting there instead of working for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-brand-surface/50 p-8 rounded-2xl border border-brand-border hover:border-red-500/50 transition-colors group">
            <div className="w-16 h-16 mx-auto bg-brand-black rounded-full flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              <TrendingDown size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Low Enquiries</h3>
            <p className="text-brand-muted text-sm">Traffic hitting your site but leaving without calling? You're leaving money on the table every single day.</p>
          </div>

          <div className="bg-brand-surface/50 p-8 rounded-2xl border border-brand-border hover:border-red-500/50 transition-colors group">
            <div className="w-16 h-16 mx-auto bg-brand-black rounded-full flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Time Wasted</h3>
            <p className="text-brand-muted text-sm">Tried DIY builders? Dealing with "web guys" who don't reply? Stick to the tools and let us handle the tech.</p>
          </div>

          <div className="bg-brand-surface/50 p-8 rounded-2xl border border-brand-border hover:border-red-500/50 transition-colors group">
            <div className="w-16 h-16 mx-auto bg-brand-black rounded-full flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              <AlertTriangle size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Website Looks Old</h3>
            <p className="text-brand-muted text-sm">First impressions count. If your site looks like it was built in 2010, customers assume your business is outdated too.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;