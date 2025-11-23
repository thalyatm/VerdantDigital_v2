import React from 'react';
import { ArrowRight, PhoneCall, Check } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-black pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden">
      {/* Background Grid & Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-[0.1] pointer-events-none"></div>
      
      {/* Neon Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left reveal">
            
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded bg-brand-surface/50 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest mb-8 hover:border-brand-accent/50 transition-colors cursor-default backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-accent"></span>
              </span>
              Accepting New Clients
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[1] mb-8 tracking-tight">
              WEBSITES THAT HELP<br/> AUSSIE TRADIES <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-white to-brand-accent text-glow">
                GET MORE LEADS.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-brand-muted mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Not just a pretty face. Built for tradies. Optimised for growth. <span className="text-white font-medium">Launch in 4-6 weeks.</span>
            </p>

            {/* Pricing Card - Directly in Hero */}
            <div className="bg-brand-surface/60 backdrop-blur-lg border-2 border-brand-accent rounded-2xl p-6 md:p-8 max-w-lg mx-auto lg:mx-0 shadow-[0_0_50px_rgba(0,255,157,0.15)] text-left transform hover:scale-[1.01] transition-all duration-300 group relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-brand-accent text-brand-black text-[10px] font-black uppercase tracking-widest py-1 px-3 rounded-bl-lg">
                  Limited Offer
               </div>

               <div className="flex items-end gap-2 mb-3">
                  <span className="text-5xl font-display font-black text-white tracking-tighter leading-none">$299</span>
                  <div className="flex flex-col justify-end pb-1">
                     <span className="text-brand-accent font-bold text-xs uppercase tracking-widest leading-none mb-0.5">setup</span>
                  </div>
                  <span className="text-2xl font-light text-white/40 mb-1">+</span>
                   <span className="text-4xl font-display font-black text-white tracking-tighter leading-none">$99</span>
                   <div className="flex flex-col justify-end pb-1">
                      <span className="text-brand-muted font-bold text-xs uppercase tracking-widest leading-none mb-0.5">/mo</span>
                   </div>
               </div>

               <p className="text-brand-bone text-sm font-medium mb-6 pb-6 border-b border-white/10">
                  Everything included. No hidden fees. Cancel anytime.
               </p>

               <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-1">What You Get</h4>
                  {[
                      "A website built to get you more quote requests",
                      "Completely done-for-you setup - we handle everything",
                      "Updates included - no hidden costs",
                      "30-day money-back guarantee"
                  ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start">
                          <div className="mt-0.5 bg-brand-accent rounded-full p-0.5 shrink-0">
                              <Check size={10} className="text-brand-black stroke-[4]" />
                          </div>
                          <span className="text-sm text-gray-300 leading-tight">{item}</span>
                      </div>
                  ))}
               </div>

               <a 
                 href="#enquire"
                 onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' });
                 }}
                 className="w-full bg-brand-accent hover:bg-white text-brand-black font-black text-lg py-4 px-4 rounded-xl shadow-[0_4px_20px_rgba(0,255,157,0.4)] hover:shadow-[0_6px_30px_rgba(0,255,157,0.6)] transition-all flex items-center justify-center gap-2 uppercase tracking-wide transform group-hover:-translate-y-1"
               >
                 SECURE MY SPOT <ArrowRight size={20} strokeWidth={3} />
               </a>
            </div>

          </div>

          {/* Hero Visual - Industrial Aesthetic */}
          <div className="lg:col-span-5 relative perspective-1000 hidden lg:block reveal reveal-delay-200">
            {/* Back decorative elements */}
            <div className="absolute inset-0 bg-brand-accent/5 blur-3xl transform rotate-12 rounded-full"></div>
            
            {/* Main Floating Card */}
            <div className="relative z-10 transform rotate-y-[-12deg] rotate-x-[5deg] transition-transform hover:rotate-0 duration-700 ease-out preserve-3d">
              <div className="bg-brand-surface border border-brand-border/50 rounded-xl p-2 shadow-2xl">
                <div className="bg-brand-black rounded-lg overflow-hidden border border-brand-border relative group">
                  
                  {/* Mock Browser Header */}
                  <div className="h-12 bg-[#111] flex items-center gap-3 px-4 border-b border-brand-border">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                    <div className="bg-[#080808] px-4 py-1.5 rounded text-[10px] text-brand-accent font-mono flex-grow text-center border border-brand-border/30 shadow-inner tracking-wider">
                      LIVE JOBS - DASHBOARD
                    </div>
                  </div>
                  
                  {/* Mock Website Content */}
                  <div className="relative">
                     <img 
                       src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" 
                       alt="Industrial Website" 
                       className="w-full h-[450px] object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-90"></div>
                     
                     {/* Floating Elements over the image */}
                     <div className="absolute bottom-8 left-6 right-6 space-y-3">
                       <div className="bg-[#111]/90 backdrop-blur-md border-l-4 border-brand-accent p-4 rounded-r flex items-center gap-4 shadow-[0_10px_40px_rgba(0,0,0,0.7)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,255,157,0.4)]">
                            <PhoneCall className="text-brand-black" size={24} />
                          </div>
                          <div>
                            <div className="text-brand-accent font-bold text-sm font-display uppercase tracking-wider">New Quote Request</div>
                            <div className="text-white text-sm font-bold">Full House Rewire - Bondi</div>
                            <div className="text-brand-muted text-xs font-mono mt-1">Received 2 mins ago</div>
                          </div>
                       </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;