import React from 'react';
import { ArrowRight, Smartphone, Sparkles, Globe, Layout } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform apps that customers love to use.",
    link: "/services/mobile-app-development"
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    description: "Intelligent automation and AI-powered experiences that drive efficiency.",
    link: "/services/ai-solutions"
  },
  {
    icon: Globe,
    title: "Progressive Web Applications",
    description: "Fast, reliable web apps that work offline and feel native.",
    link: "/services/progressive-web-apps"
  },
  {
    icon: Layout,
    title: "Websites & Web Platforms",
    description: "Custom websites and platforms built for performance and conversion.",
    link: "/services/websites"
  }
];

const MainServices: React.FC = () => {
  return (
    <section className="py-16 bg-brand-black relative overflow-hidden">
      {/* Animated Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="mb-12 reveal text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
            What We Build
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white leading-[1.1] mb-6 uppercase" style={{letterSpacing: '0.02em'}}>
            DIGITAL PRODUCTS <br/>
            <span className="animate-text-starspeed inline-block">BUILT END-TO-END</span>
          </h2>
          <p className="text-brand-muted text-base lg:text-lg leading-relaxed font-light max-w-3xl mx-auto">
            Choose a starting point — we'll guide you end-to-end.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal reveal-delay-100">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={index}
                href={service.link}
                className="bg-brand-surface/30 border border-brand-border rounded-lg p-6 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300 flex flex-col items-start"
              >
                <div className="w-12 h-12 bg-brand-black border-2 border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent mb-4 group-hover:scale-110 group-hover:border-brand-accent transition-all duration-300 shadow-lg">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2 uppercase group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-muted leading-relaxed font-light text-sm mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="inline-flex items-center gap-2 text-brand-accent font-bold uppercase tracking-wide text-xs group-hover:text-white transition-colors">
                  Learn More
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="mt-10 flex justify-center reveal reveal-delay-200">
          <a
            href="/services"
            className="group inline-flex items-center justify-center gap-3 border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-black font-bold px-6 py-3 rounded-lg transition-all uppercase tracking-widest text-sm"
          >
            View All Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainServices;
