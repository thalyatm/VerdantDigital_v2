import React from 'react';
import { ShoppingBag, TrendingUp, Code2, Layout, Globe, MousePointerClick } from 'lucide-react';

const services = [
  {
    title: "E-commerce & Shopify",
    desc: "High-converting storefronts. We specialize in Shopify builds that balance brand aesthetics with ruthless conversion optimization.",
    icon: <ShoppingBag size={28} />
  },
  {
    title: "Performance Marketing",
    desc: "Google Ads, Meta Ads, and TikTok. We manage ad spend with a focus on ROAS, not just vanity metrics like clicks.",
    icon: <TrendingUp size={28} />
  },
  {
    title: "Custom App Development",
    desc: "React, Node, Python. When off-the-shelf software doesn't fit, we build custom web applications to streamline your operations.",
    icon: <Code2 size={28} />
  },
  {
    title: "UX/UI Design",
    desc: "Interface design that feels intuitive. We map customer journeys to reduce friction and increase engagement.",
    icon: <Layout size={28} />
  },
  {
    title: "SEO Strategy",
    desc: "Long-term organic growth. Technical audits, content strategy, and authority building to own your niche.",
    icon: <Globe size={28} />
  },
  {
    title: "Conversion Optimization",
    desc: "Data-driven A/B testing. We analyze user behavior to turn more of your current traffic into paying customers.",
    icon: <MousePointerClick size={28} />
  }
];

const MainExpertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 bg-brand-black relative border-t border-brand-border scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 reveal text-left">
          <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
            OUR EXPERTISE
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-[1.1] uppercase tracking-tight max-w-3xl">
            DIGITAL GROWTH ENGINEERED.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-brand-surface/30 border border-brand-border rounded-xl p-6 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300 reveal flex flex-col items-start"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-brand-black border border-brand-border rounded-lg flex items-center justify-center text-brand-muted group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 mb-5 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-muted leading-relaxed font-light text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainExpertise;