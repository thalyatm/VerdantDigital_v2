import React from 'react';
import { BENEFITS } from '../constants';
import { TrendingDown, Clock, AlertTriangle, Smartphone, Settings, TrendingUp, CheckCircle2, XCircle, Clock as ClockIcon } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone size={20} />,
  Clock: <ClockIcon size={20} />,
  Settings: <Settings size={20} />,
  TrendingUp: <TrendingUp size={20} />
};

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black relative border-b border-brand-border scroll-mt-24" id="comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          
          {/* LEFT SIDE - THE REALITY */}
          <div className="bg-brand-surface/20 rounded-3xl p-8 lg:p-12 border border-brand-border/50 flex flex-col reveal">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest rounded w-fit">
              <XCircle size={14} /> The Reality
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
              You're a pro at what you do. <br/>
              <span className="text-brand-muted">But is your website working?</span>
            </h2>
            
            <p className="text-brand-muted text-sm lg:text-base leading-relaxed mb-10">
              You’re too busy on site to deal with website changes. You just want someone who understands tradies. Currently, your website is just sitting there instead of working for you.
            </p>

            <div className="space-y-8 mt-auto">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-black rounded-full flex items-center justify-center flex-shrink-0 text-red-500 border border-brand-border shadow-lg">
                  <TrendingDown size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Low Enquiries</h3>
                  <p className="text-brand-muted text-xs lg:text-sm leading-relaxed">Traffic hitting your site but leaving without calling? You're leaving money on the table every single day.</p>
                </div>
              </div>

              <div className="flex gap-4">
                 <div className="w-10 h-10 bg-brand-black rounded-full flex items-center justify-center flex-shrink-0 text-red-500 border border-brand-border shadow-lg">
                  <Clock size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Time Wasted</h3>
                  <p className="text-brand-muted text-xs lg:text-sm leading-relaxed">Tried DIY builders? Dealing with "web guys" who don't reply? Stick to the tools and let us handle the tech.</p>
                </div>
              </div>

              <div className="flex gap-4">
                 <div className="w-10 h-10 bg-brand-black rounded-full flex items-center justify-center flex-shrink-0 text-red-500 border border-brand-border shadow-lg">
                  <AlertTriangle size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Website Looks Old</h3>
                  <p className="text-brand-muted text-xs lg:text-sm leading-relaxed">First impressions count. If your site looks like it was built in 2010, customers assume your business is outdated too.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - OUR SOLUTION */}
          <div className="bg-brand-black rounded-3xl p-8 lg:p-12 border-2 border-brand-accent relative overflow-hidden shadow-[0_0_40px_rgba(0,255,157,0.1)] flex flex-col reveal reveal-delay-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-brand-accent text-brand-black text-xs font-bold uppercase tracking-widest rounded w-fit">
              <CheckCircle2 size={14} /> Our Solution
            </div>

            <h2 className="text-3xl lg:text-4xl font-display font-black text-white mb-6">
              BUILT JUST FOR <br/> <span className="text-brand-accent">TRADIES.</span>
            </h2>
            
            <p className="text-brand-muted text-sm lg:text-base leading-relaxed mb-10 border-l-2 border-brand-accent pl-4">
              Website + lead-system in one. We handle the tech so you can handle the jobs.
            </p>

            <div className="space-y-8 mt-auto relative z-10">
               {BENEFITS.map((benefit, index) => (
                 <div key={index} className="flex gap-4 group">
                    <div className="w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 text-brand-accent border border-brand-accent/20 group-hover:scale-110 transition-transform">
                      {iconMap[benefit.iconName]}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{benefit.title}</h3>
                      <p className="text-gray-400 text-xs lg:text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;