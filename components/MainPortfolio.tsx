import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: "Structa Claims",
    category: "Corporate Web Design",
    desc: "End-to-end claims management platform built for construction professionals. Custom dashboard with real-time tracking, document management, and automated workflows.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Bread Bloom",
    category: "E-commerce / Brand",
    desc: "Artisan bakery e-commerce site featuring online ordering, delivery scheduling, and subscription management. Built with Shopify for seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f40388085?q=80&w=1926&auto=format&fit=crop"
  },
  {
    name: "Newstead Plant Co",
    category: "Shopify E-commerce",
    desc: "Modern plant retailer with inventory management, care guides, and location-based delivery. Optimized for mobile shopping with high-res product photography.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop"
  }
];

const MainPortfolio: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-brand-black border-t border-brand-border scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
              PORTFOLIO
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tight">
              Recent <span className="text-brand-accent">Works</span>
            </h2>
          </div>
          <div className="hidden md:block text-brand-muted text-sm max-w-xs text-right pb-2">
            Selected projects showcasing our range across custom dev, e-commerce, and corporate identity.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col h-full">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl border border-brand-border group-hover:border-brand-accent/50 transition-all duration-500 h-48 cursor-pointer mb-6">
                <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-start flex-grow">
                <span className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-3">{project.category}</span>
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-brand-accent transition-colors flex items-center gap-2">
                  {project.name}
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all" size={24} />
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.desc}
                </p>
                <a href="#enquire" className="mt-auto text-white text-xs font-bold uppercase tracking-widest border-b border-brand-accent pb-1 hover:text-brand-accent transition-colors">
                  Enquire about this project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainPortfolio;