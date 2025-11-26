import React from 'react';
import { Home, Wrench, User, Images, Mail, ArrowRight } from 'lucide-react';

const WhatsIncluded: React.FC = () => {
  const pages = [
    {
      icon: Home,
      color: 'brand-accent',
      borderColor: 'brand-accent',
      title: 'Home',
      description: 'Your main landing page with a clear message, strong call to action and professional first impression.',
      features: [
        'Hero section with compelling headline and clear value proposition',
        'Click-to-call buttons prominently displayed',
        'Service area information for local SEO',
        'Trust signals (years in business, certifications, testimonials)',
        'Mobile-optimised layout for on-the-go customers',
        'Fast loading time for better search rankings'
      ]
    },
    {
      icon: Wrench,
      color: 'blue-400',
      borderColor: 'blue-500/50',
      title: 'Services',
      description: 'A breakdown of the work you offer so customers understand exactly what you do.',
      features: [
        'Clear descriptions of each service you provide',
        'Pricing guidance (starting from, typical range, or by quote)',
        'Service area mapping showing where you operate',
        'Process overview for each type of job',
        'Before/after examples where applicable',
        'Easy quote request buttons on each service'
      ]
    },
    {
      icon: User,
      color: 'purple-400',
      borderColor: 'purple-500/50',
      title: 'About',
      description: 'Your business story, experience and credibility to help customers feel confident choosing you.',
      features: [
        'Your business story and what sets you apart',
        'Years of experience and qualifications',
        'Licenses, insurance and certifications',
        'Team member profiles (if applicable)',
        'Why customers should trust you',
        'Your commitment to quality and service'
      ]
    },
    {
      icon: Images,
      color: 'orange-400',
      borderColor: 'orange-500/50',
      title: 'Gallery',
      description: 'Photos of completed jobs to show workmanship and quality.',
      features: [
        'Professional photo gallery of your best work',
        'Organised by job type or service category',
        'Before and after comparisons where relevant',
        'Mobile-optimised image loading',
        'Easy navigation and filtering',
        'Option to add new photos as you complete jobs'
      ]
    },
    {
      icon: Mail,
      color: 'green-400',
      borderColor: 'green-500/50',
      title: 'Contact & Quote Request',
      description: 'Intelligent forms designed to get you qualified leads with all the detail you need—without follow-up calls.',
      features: [
        'Smart quote forms with job-type specific questions',
        'Photo upload to help you quote faster (sometimes without a site visit)',
        'Urgency filters (emergency, soon, flexible) so you can prioritise',
        'Budget comfort indicators—no awkward money conversations',
        'Access notes (pets, gates, parking) save you time on arrival',
        'Auto-filtering to protect your time from tyre-kickers'
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-black">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center reveal">
          <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
            WHAT'S INCLUDED
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 tracking-tight uppercase">
            Everything You Get <br />
            <span className="text-brand-accent">For $399</span>
          </h1>
          <p className="text-brand-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A complete 5-page website built to generate leads and grow your business. Here's exactly what each page includes:
          </p>
        </div>

        {/* Pages Grid */}
        <div className="space-y-12">
          {pages.map((page, index) => {
            const Icon = page.icon;
            return (
              <div
                key={index}
                className={`reveal reveal-delay-${index * 100} bg-brand-surface border-l-4 border-${page.borderColor} rounded-r-2xl p-6 md:p-8 hover:bg-brand-surface/80 transition-all`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`bg-brand-black border border-${page.borderColor} rounded-lg p-3 shrink-0`}>
                    <Icon size={28} className={`text-${page.color}`} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                      {page.title}
                    </h2>
                    <p className="text-brand-muted text-base md:text-lg leading-relaxed">
                      {page.description}
                    </p>
                  </div>
                </div>

                <div className="pl-0 md:pl-16">
                  <h3 className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-4">
                    What's Included:
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {page.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-brand-bone">
                        <ArrowRight size={16} className={`text-${page.color} mt-0.5 shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Smart Quote Form Deep Dive */}
        <div className="mt-20 pt-16 border-t border-brand-border reveal">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-widest rounded">
              CONVERSION-FOCUSED FORMS
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
              Quote Forms That Actually Work
            </h2>
            <p className="text-brand-muted text-lg max-w-3xl mx-auto leading-relaxed">
              Most websites ask "What do you need?" and hope for the best. Ours use conversion psychology and smart logic to get you qualified leads with all the detail you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left: Benefits for Tradie */}
            <div className="bg-brand-surface border border-brand-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-brand-accent">✓</span> Protects Your Time
              </h3>
              <ul className="space-y-3 text-sm text-brand-bone">
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-0.5">•</span>
                  <span><strong className="text-white">Filters low-value jobs</strong> before they waste your time (e.g., tenants without approval)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-0.5">•</span>
                  <span><strong className="text-white">Flags emergencies</strong> so you can prioritise profitable urgent work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-0.5">•</span>
                  <span><strong className="text-white">Gathers access details upfront</strong> (parking, pets, gate codes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-0.5">•</span>
                  <span><strong className="text-white">Encourages photo uploads</strong> so you can quote faster, sometimes without a site visit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-0.5">•</span>
                  <span><strong className="text-white">Budget comfort indicators</strong> help you avoid bill-shock disputes</span>
                </li>
              </ul>
            </div>

            {/* Right: Benefits for Customer */}
            <div className="bg-brand-surface border border-brand-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-green-400">✓</span> Builds Customer Trust
              </h3>
              <ul className="space-y-3 text-sm text-brand-bone">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">•</span>
                  <span><strong className="text-white">Easy tick-box choices</strong> instead of intimidating blank fields</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">•</span>
                  <span><strong className="text-white">Shows expertise</strong> with helpful microcopy like "Helps us check if it's a simple valve or full replacement"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">•</span>
                  <span><strong className="text-white">No scary pricing questions</strong>—budget bands feel collaborative, not confrontational</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">•</span>
                  <span><strong className="text-white">Frames you as an adviser</strong>, not a salesperson</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">•</span>
                  <span><strong className="text-white">Sets clear expectations</strong> about timeline and process</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Psychological Principles */}
          <div className="bg-gradient-to-br from-brand-surface/50 to-brand-black border border-brand-border rounded-xl p-6 md:p-8 mb-12">
            <h3 className="text-lg font-display font-bold text-white mb-6 text-center uppercase tracking-wide">
              Built on Conversion Psychology
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-block bg-brand-accent/10 border border-brand-accent/20 rounded-lg p-3 mb-3">
                  <span className="text-2xl">🧠</span>
                </div>
                <h4 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-2">Cognitive Ease</h4>
                <p className="text-xs text-brand-muted">Tick-boxes before free-text. Plain language, no jargon.</p>
              </div>
              <div className="text-center">
                <div className="inline-block bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 mb-3">
                  <span className="text-2xl">✓</span>
                </div>
                <h4 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-2">Commitment & Consistency</h4>
                <p className="text-xs text-brand-muted">Starts with tiny choices, builds momentum to completion.</p>
              </div>
              <div className="text-center">
                <div className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 mb-3">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Authority & Reciprocity</h4>
                <p className="text-xs text-brand-muted">"Share photos to help us give you the fastest answer."</p>
              </div>
            </div>
          </div>

          {/* Example Smart Logic */}
          <div className="bg-brand-black border-2 border-brand-accent/20 rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-display font-bold text-white mb-2 uppercase tracking-wide">
              Example: Adaptive Smart Logic
            </h3>
            <p className="text-sm text-brand-muted mb-6">Forms adapt based on what the customer selects, asking only relevant follow-up questions:</p>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-brand-accent font-mono text-xs bg-brand-surface px-2 py-1 rounded mt-0.5">IF</span>
                <div>
                  <span className="text-white">Customer selects <strong>"Blocked Drain"</strong></span>
                  <div className="text-brand-muted mt-1 ml-4 space-y-1">
                    <div>→ Ask about gurgling, multiple fixtures affected, sewer smell</div>
                    <div>→ Flag potential main line issue vs. single fixture</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-purple-400 font-mono text-xs bg-brand-surface px-2 py-1 rounded mt-0.5">IF</span>
                <div>
                  <span className="text-white">Customer selects <strong>"I'm a Tenant"</strong></span>
                  <div className="text-brand-muted mt-1 ml-4 space-y-1">
                    <div>→ Ask: "Do you have landlord/agent approval?"</div>
                    <div>→ Protects you from wasted quotes on unauthorised jobs</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-orange-400 font-mono text-xs bg-brand-surface px-2 py-1 rounded mt-0.5">IF</span>
                <div>
                  <span className="text-white">Customer selects <strong>"Gas Work"</strong></span>
                  <div className="text-brand-muted mt-1 ml-4 space-y-1">
                    <div>→ Show compliance notice and safety priority tag</div>
                    <div>→ Ask if gas smell present (auto-flags as urgent)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-12 border-t border-brand-border text-center reveal">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Plus, Every Month for $99:
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-brand-surface border border-brand-border rounded-lg p-5">
              <h4 className="text-brand-accent font-bold text-sm uppercase tracking-widest mb-2">Hosting & Security</h4>
              <p className="text-brand-muted text-sm">Fast, secure hosting with SSL certificate and regular backups</p>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-lg p-5">
              <h4 className="text-brand-accent font-bold text-sm uppercase tracking-widest mb-2">Unlimited Updates</h4>
              <p className="text-brand-muted text-sm">Text changes, new photos, pricing updates—whenever you need</p>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-lg p-5">
              <h4 className="text-brand-accent font-bold text-sm uppercase tracking-widest mb-2">Priority Support</h4>
              <p className="text-brand-muted text-sm">Fast response times and direct access to our team</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 italic mb-8">
            Need more pages, custom features or e-commerce? We can quote for anything additional.
          </p>

          <a
            href="/tradie#pricing"
            className="inline-flex items-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-extrabold text-lg py-4 px-8 rounded-lg shadow-[0_4px_14px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,179,0.6)] transition-all uppercase tracking-wide"
          >
            Get Started Now
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsIncluded;
