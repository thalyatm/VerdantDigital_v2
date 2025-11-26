import React, { useState, useEffect } from 'react';
import { ExternalLink, Target, TrendingUp, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';

const AdvertisingGuidePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('section-1');

  const sections = [
    { id: 'section-1', title: 'The Golden Rule', shortTitle: 'Golden Rule' },
    { id: 'section-2', title: 'Budget Guidance', shortTitle: 'Budget' },
    { id: 'section-3', title: 'Platform Guides', shortTitle: 'Platforms' },
    { id: 'section-4', title: 'Landing Flow', shortTitle: 'Landing Flow' },
    { id: 'section-5', title: 'Winning Ad Formula', shortTitle: 'Ad Formula' },
    { id: 'section-6', title: 'Tracking & Measurement', shortTitle: 'Tracking' },
    { id: 'section-7', title: 'DIY vs Done-For-You', shortTitle: 'DIY vs Agency' },
    { id: 'section-8', title: '14-Day Action Plan', shortTitle: 'Action Plan' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      // Find which section is currently most visible
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i].element;
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (top is above middle of screen)
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(sectionElements[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-20">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <a
            href="/resources"
            className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors text-sm font-semibold"
          >
            <ArrowLeft size={16} />
            Back to Resources
          </a>
        </div>

        <div className="flex gap-8">
          {/* Sticky Table of Contents - Hidden on mobile, visible on large screens */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-brand-surface/30 border border-brand-border rounded-xl p-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-4">
                  Contents
                </h3>
                <nav className="space-y-1">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                        activeSection === section.id
                          ? 'bg-brand-accent/10 text-brand-accent font-semibold border-l-2 border-brand-accent'
                          : 'text-brand-muted hover:text-white hover:bg-brand-surface/40'
                      }`}
                    >
                      <span className="text-xs mr-2">{index + 1}.</span>
                      {section.shortTitle}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            {/* Guide Header */}
            <div className="bg-brand-surface/30 border border-brand-border rounded-2xl p-6 md:p-10 reveal mb-8">
              <div className="mb-6 pb-6 border-b border-brand-border">
                <h1 className="text-3xl md:text-4xl font-display font-black text-white mb-2 uppercase">
                  Complete Advertising Guide
                </h1>
                <p className="text-brand-muted text-sm md:text-base">
                  The complete guide to promoting your website and generating real customers online
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-brand-muted text-sm">8 Sections • 15 min read</p>
                <p className="text-brand-bone text-base leading-relaxed">
                  Master the art of online advertising with proven strategies for Australian businesses. Learn how to select the right platforms, build your budget, craft winning ads, and measure results - all with step-by-step guidance tailored to your needs.
                </p>
              </div>
            </div>

            {/* Section 1: The Golden Rule of Advertising */}
            <div id="section-1" className="bg-brand-surface/30 border border-brand-border rounded-2xl p-6 md:p-10 reveal mb-8 reveal-delay-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-brand-accent/20 rounded-lg p-3 flex-shrink-0">
                  <Target className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase mb-2">
                    The Golden Rule of Advertising
                  </h2>
                  <p className="text-brand-muted">Platform selection is everything</p>
                </div>
              </div>

              <div className="space-y-6 text-brand-bone">
                <p className="leading-relaxed text-lg">
                  The most important decision you'll make isn't about your creative, copy, or budget. It's about <span className="text-brand-accent font-bold">where you advertise</span>.
                </p>

                <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5 space-y-4">
                  <div>
                    <h3 className="text-brand-accent font-bold mb-2">The Rule:</h3>
                    <p className="text-base">
                      "Advertise where your customers already are, not where you think they should be."
                    </p>
                  </div>
                  <p className="text-sm text-brand-muted border-t border-brand-border pt-4">
                    Customers spend their attention on specific platforms based on age, interests, and behaviour. Your job is to meet them there.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-brand-accent font-bold">Why This Matters:</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                      <span>Wrong platform = Zero conversions, even with perfect ads</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                      <span>Right platform = Higher engagement, lower cost-per-conversion</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                      <span>Platform choice directly impacts your ROI before you spend a single dollar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: Budget Guidance with Australian Benchmarks */}
            <div id="section-2" className="bg-brand-surface/30 border border-brand-border rounded-2xl p-6 md:p-10 reveal mb-8 reveal-delay-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-brand-accent/20 rounded-lg p-3 flex-shrink-0">
                  <TrendingUp className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase mb-2">
                    Budget Guidance & Australian Benchmarks
                  </h2>
                  <p className="text-brand-muted">How much should you spend?</p>
                </div>
              </div>

              <div className="space-y-6 text-brand-bone">
                <p className="leading-relaxed text-lg">
                  There's no one-size-fits-all budget. Instead, think about your goals and the platforms you're using.
                </p>

                <div className="space-y-4">
                  <h3 className="text-brand-accent font-bold text-lg mb-4">Australian Business Benchmarks (Monthly)</h3>

                  <div className="grid gap-4">
                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-brand-accent">Micro Businesses</h4>
                        <span className="text-sm bg-brand-accent/20 text-brand-accent px-3 py-1 rounded">$500–$1,500</span>
                      </div>
                      <p className="text-sm text-brand-muted">Tradies, local services, startups starting small</p>
                    </div>

                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-brand-accent">Small Businesses</h4>
                        <span className="text-sm bg-brand-accent/20 text-brand-accent px-3 py-1 rounded">$1,500–$5,000</span>
                      </div>
                      <p className="text-sm text-brand-muted">Established local businesses, regional reach</p>
                    </div>

                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-brand-accent">Growth-Stage Businesses</h4>
                        <span className="text-sm bg-brand-accent/20 text-brand-accent px-3 py-1 rounded">$5,000–$15,000</span>
                      </div>
                      <p className="text-sm text-brand-muted">Scaling, multiple locations, competitive markets</p>
                    </div>

                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-brand-accent">Enterprise</h4>
                        <span className="text-sm bg-brand-accent/20 text-brand-accent px-3 py-1 rounded">$15,000+</span>
                      </div>
                      <p className="text-sm text-brand-muted">National campaigns, brand building, full-funnel advertising</p>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                  <div className="flex gap-3 mb-3">
                    <AlertCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                    <h4 className="font-bold text-brand-accent">Smart Budget Allocation</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-brand-muted">
                    <li>• Start with 5–10% of monthly marketing budget</li>
                    <li>• Test with smaller spend ($500–$1,000) to find what works</li>
                    <li>• Scale what works; pause what doesn't</li>
                    <li>• Expect 3–4 weeks for reliable data before scaling</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: Platform Guides */}
            <div id="section-3" className="bg-brand-surface/30 border border-brand-border rounded-2xl p-6 md:p-10 reveal mb-8 reveal-delay-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-brand-accent/20 rounded-lg p-3 flex-shrink-0">
                  <ExternalLink className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase mb-2">
                    Platform Guides
                  </h2>
                  <p className="text-brand-muted">Where to advertise based on your business</p>
                </div>
              </div>

              <div className="space-y-6 text-brand-bone">
                {/* Google Ads */}
                <div className="bg-brand-black/40 border border-brand-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Google Ads (Search & Display)</h3>

                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-brand-accent font-bold mb-1">Best For:</p>
                      <p>High-intent customers actively searching for your service</p>
                    </div>

                    <div>
                      <p className="text-brand-accent font-bold mb-1">Audience Type:</p>
                      <p>18–65 years old, researching solutions, ready to take action</p>
                    </div>

                    <div>
                      <p className="text-brand-accent font-bold mb-1">Average Cost Per Click (Australia):</p>
                      <p className="flex items-center gap-2"><span className="text-brand-accent font-bold text-base">$1–$10 AUD</span> <span className="text-brand-muted">(varies by industry)</span></p>
                    </div>

                    <div>
                      <p className="text-brand-accent font-bold mb-2">Why It Works:</p>
                      <ul className="space-y-1">
                        <li>✓ Intent-based targeting (they're already searching)</li>
                        <li>✓ Works for local and national reach</li>
                        <li>✓ Quick ROI measurement</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-brand-accent font-bold mb-2">Getting Started:</p>
                      <p className="bg-brand-black/40 rounded p-3 border border-brand-border">
                        Create a Google Ads account, set keywords related to your service, write clear ad copy with a strong CTA. Start with Search ads before Display ads.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Facebook/Instagram */}
                <div className="bg-brand-black/40 border border-brand-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Facebook & Instagram</h3>

                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-brand-accent font-bold mb-1">Best For:</p>
                      <p>Awareness and engagement, visual businesses, targeted demographics</p>
                    </div>

                    <div>
                      <p className="text-brand-accent font-bold mb-1">Audience Type:</p>
                      <p>18–55 years old, community-focused, interested in lifestyle/solutions</p>
                    </div>

                    <div>
                      <p className="text-brand-accent font-bold mb-1">Average Cost Per Click (Australia):</p>
                      <p className="flex items-center gap-2"><span className="text-brand-accent font-bold text-base">$0.50–$3 AUD</span> <span className="text-brand-muted">(more affordable than Google)</span></p>
                    </div>

                    <div>
                      <p className="text-brand-accent font-bold mb-2">Why It Works:</p>
                      <ul className="space-y-1">
                        <li>✓ Highly detailed audience targeting (age, interests, behaviours)</li>
                        <li>✓ Visual format performs well for local businesses</li>
                        <li>✓ Retargeting capabilities (reach people who visited your site)</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-brand-accent font-bold mb-2">Getting Started:</p>
                      <p className="bg-brand-black/40 rounded p-3 border border-brand-border">
                        Use high-quality images or short videos. Target by location (postcodes), interests, and demographics. Test different audiences with small budgets first.
                      </p>
                    </div>
                  </div>
                </div>

                {/* TikTok */}
                <div className="bg-brand-black/40 border border-brand-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">TikTok</h3>

                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-brand-accent font-bold mb-1">Best For:</p>
                      <p>Younger audiences (Gen Z), entertainment, viral content, B2C businesses</p>
                    </div>

                    <div>
                      <p className="text-brand-accent font-bold mb-1">Audience Type:</p>
                      <p>13–35 years old, scrolling for entertainment, trend-driven</p>
                    </div>

                    <div>
                      <p className="text-brand-accent font-bold mb-1">Average Cost Per Click (Australia):</p>
                      <p className="flex items-center gap-2"><span className="text-brand-accent font-bold text-base">$0.30–$1.50 AUD</span> <span className="text-brand-muted">(lowest of all platforms)</span></p>
                    </div>

                    <div>
                      <p className="text-brand-accent font-bold mb-2">Why It Works:</p>
                      <ul className="space-y-1">
                        <li>✓ Incredible engagement rates if content is engaging</li>
                        <li>✓ Cheapest traffic on the market</li>
                        <li>✓ Organic reach potential (not always paid-dependent)</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-brand-accent font-bold mb-2">Getting Started:</p>
                      <p className="bg-brand-black/40 rounded p-3 border border-brand-border">
                        Create authentic, entertaining content. Avoid being salesy. Use trending sounds and trends. Engagement matters more than polish. Start with organic content before paid ads.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Landing Flow Best Practices */}
            <div id="section-4" className="bg-brand-surface/30 border border-brand-border rounded-2xl p-6 md:p-10 reveal mb-8 reveal-delay-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-brand-accent/20 rounded-lg p-3 flex-shrink-0">
                  <CheckCircle className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase mb-2">
                    Landing Flow Best Practices
                  </h2>
                  <p className="text-brand-muted">Turn clicks into customers</p>
                </div>
              </div>

              <div className="space-y-6 text-brand-bone">
                <p className="leading-relaxed text-lg">
                  Your ad is just the beginning. Where you send the click matters just as much as the ad itself.
                </p>

                <div className="space-y-4">
                  <h3 className="text-brand-accent font-bold text-lg mb-4">The Golden Flow:</h3>

                  <div className="space-y-3">
                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <span className="bg-brand-accent text-brand-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                        <div>
                          <p className="font-bold text-white">Ad Click</p>
                          <p className="text-sm text-brand-muted mt-1">Customer clicks your ad</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-brand-accent">↓</div>

                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <span className="bg-brand-accent text-brand-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                        <div>
                          <p className="font-bold text-white">Relevant Landing Page</p>
                          <p className="text-sm text-brand-muted mt-1">Page matches what they clicked on (not your homepage!)</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-brand-accent">↓</div>

                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <span className="bg-brand-accent text-brand-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                        <div>
                          <p className="font-bold text-white">Clear Next Step</p>
                          <p className="text-sm text-brand-muted mt-1">One obvious CTA button (call, form, add to cart)</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-brand-accent">↓</div>

                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <span className="bg-brand-accent text-brand-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</span>
                        <div>
                          <p className="font-bold text-white">Conversion</p>
                          <p className="text-sm text-brand-muted mt-1">Lead, call, sale, or signup</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                  <p className="text-brand-accent font-bold mb-2">Critical Best Practices:</p>
                  <ul className="space-y-2 text-sm text-brand-muted">
                    <li>• Don't send clicks to your homepage (sends people searching)</li>
                    <li>• Make sure page loads quickly (mobile users are impatient)</li>
                    <li>• One primary CTA - remove navigation menus if possible</li>
                    <li>• Mobile optimisation is non-negotiable (60%+ of ad clicks are mobile)</li>
                    <li>• Keep your copy consistent between ad and landing page</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5: Winning Ad Formula */}
            <div id="section-5" className="bg-brand-surface/30 border border-brand-border rounded-2xl p-6 md:p-10 reveal mb-8 reveal-delay-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-brand-accent/20 rounded-lg p-3 flex-shrink-0">
                  <TrendingUp className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase mb-2">
                    The Winning Ad Formula
                  </h2>
                  <p className="text-brand-muted">What makes ads convert</p>
                </div>
              </div>

              <div className="space-y-6 text-brand-bone">
                <p className="leading-relaxed text-lg">
                  Great ads follow a simple pattern. Use this formula to write ads that stop scrolling and generate clicks.
                </p>

                <div className="bg-brand-black/40 border border-brand-border rounded-lg p-6 space-y-4">
                  <h3 className="text-brand-accent font-bold text-lg">The Formula: Hook + Problem + Solution + CTA</h3>

                  <div className="space-y-4">
                    <div className="border-l-4 border-brand-accent pl-4">
                      <p className="text-brand-accent font-bold mb-1">1. Hook (First Line)</p>
                      <p className="text-sm mb-2">Stop the scroll. Ask a question, challenge a belief, or make a promise.</p>
                      <p className="bg-brand-black/40 rounded p-3 text-sm italic">"Tired of paying tradies who ghost you?"</p>
                    </div>

                    <div className="border-l-4 border-brand-accent pl-4">
                      <p className="text-brand-accent font-bold mb-1">2. Problem (Second Line)</p>
                      <p className="text-sm mb-2">Acknowledge the pain point specifically.</p>
                      <p className="bg-brand-black/40 rounded p-3 text-sm italic">"Finding reliable tradespeople shouldn't be this hard."</p>
                    </div>

                    <div className="border-l-4 border-brand-accent pl-4">
                      <p className="text-brand-accent font-bold mb-1">3. Solution (Third Line)</p>
                      <p className="text-sm mb-2">Show the benefit, not the features.</p>
                      <p className="bg-brand-black/40 rounded p-3 text-sm italic">"We connect you with vetted local tradies - no games, no waiting."</p>
                    </div>

                    <div className="border-l-4 border-brand-accent pl-4">
                      <p className="text-brand-accent font-bold mb-1">4. CTA (Call-to-Action)</p>
                      <p className="text-sm mb-2">Clear, action-driven, with a reason to click.</p>
                      <p className="bg-brand-black/40 rounded p-3 text-sm italic">"Get a free quote in 2 minutes"</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-brand-accent font-bold text-lg">Power Words That Work:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {['Limited', 'Free', 'Guaranteed', 'Now', 'Exclusive', 'New', 'Proven', 'Easy', 'Fast'].map((word) => (
                      <span key={word} className="bg-brand-black/40 border border-brand-border rounded px-3 py-2 text-sm text-brand-accent font-bold">
                        {word}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                  <p className="text-brand-accent font-bold mb-2">Testing Tips:</p>
                  <ul className="space-y-2 text-sm text-brand-muted">
                    <li>• Test one hook variation at a time</li>
                    <li>• Run each variation for at least 5–7 days</li>
                    <li>• Look for CTR (click-through rate) above 2% as a good baseline</li>
                    <li>• Pause underperformers; scale winners</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 6: Tracking & Measurement */}
            <div id="section-6" className="bg-brand-surface/30 border border-brand-border rounded-2xl p-6 md:p-10 reveal mb-8 reveal-delay-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-brand-accent/20 rounded-lg p-3 flex-shrink-0">
                  <AlertCircle className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase mb-2">
                    Tracking & Measurement
                  </h2>
                  <p className="text-brand-muted">Know what's actually working</p>
                </div>
              </div>

              <div className="space-y-6 text-brand-bone">
                <p className="leading-relaxed text-lg">
                  If you can't measure it, you can't improve it. Here's what to track and how.
                </p>

                <div className="space-y-4">
                  <h3 className="text-brand-accent font-bold text-lg mb-4">Key Metrics to Track:</h3>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <div className="mb-3">
                      <p className="text-white font-bold">Impressions</p>
                      <p className="text-sm text-brand-muted">Times your ad was shown</p>
                    </div>
                    <p className="text-sm text-brand-accent">Target: As many as budget allows</p>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <div className="mb-3">
                      <p className="text-white font-bold">Click-Through Rate (CTR)</p>
                      <p className="text-sm text-brand-muted">Clicks ÷ Impressions = %</p>
                    </div>
                    <p className="text-sm text-brand-accent">Target: 2%+ (Higher is better; shows your ad resonates)</p>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <div className="mb-3">
                      <p className="text-white font-bold">Cost Per Click (CPC)</p>
                      <p className="text-sm text-brand-muted">Total spend ÷ Total clicks</p>
                    </div>
                    <p className="text-sm text-brand-accent">Target: $1–$5 AUD (Platform dependent)</p>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <div className="mb-3">
                      <p className="text-white font-bold">Conversions</p>
                      <p className="text-sm text-brand-muted">Leads, calls, purchases from your ads</p>
                    </div>
                    <p className="text-sm text-brand-accent">Target: Depends on your business (track all conversions)</p>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <div className="mb-3">
                      <p className="text-white font-bold">Cost Per Conversion (CPA/CAC)</p>
                      <p className="text-sm text-brand-muted">Total spend ÷ Total conversions</p>
                    </div>
                    <p className="text-sm text-brand-accent">Target: Less than your average customer value</p>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <div className="mb-3">
                      <p className="text-white font-bold">Return on Ad Spend (ROAS)</p>
                      <p className="text-sm text-brand-muted">Revenue from ads ÷ Ad spend</p>
                    </div>
                    <p className="text-sm text-brand-accent">Target: 3:1 or higher (3 dollars earned per 1 dollar spent)</p>
                  </div>
                </div>

                <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                  <p className="text-brand-accent font-bold mb-3">How to Set Up Tracking:</p>
                  <ol className="space-y-2 text-sm text-brand-muted">
                    <li><span className="text-white font-bold">1. Google Analytics 4</span> – Install on your website (free, essential)</li>
                    <li><span className="text-white font-bold">2. Platform Conversion Pixels</span> – Google Ads, Facebook Ads have built-in conversion tracking</li>
                    <li><span className="text-white font-bold">3. UTM Parameters</span> – Add to your URLs to track traffic source in Analytics</li>
                    <li><span className="text-white font-bold">4. Phone Call Tracking</span> – Use services like CallRail to track calls from ads (optional but powerful)</li>
                  </ol>
                </div>

                <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                  <div className="flex gap-3 mb-2">
                    <AlertCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                    <p className="text-brand-accent font-bold">Measurement Delay:</p>
                  </div>
                  <p className="text-sm text-brand-muted">
                    Expect 3–7 days before you have enough data to make decisions. Jumping to conclusions early leads to poor decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7: DIY vs Done-For-You */}
            <div id="section-7" className="bg-brand-surface/30 border border-brand-border rounded-2xl p-6 md:p-10 reveal mb-8 reveal-delay-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-brand-accent/20 rounded-lg p-3 flex-shrink-0">
                  <CheckCircle className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase mb-2">
                    DIY vs Done-For-You
                  </h2>
                  <p className="text-brand-muted">Which approach is right for you?</p>
                </div>
              </div>

              <div className="space-y-6 text-brand-bone">
                <div className="grid gap-6">
                  {/* DIY */}
                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-6">
                    <h3 className="text-white font-bold text-lg mb-4">Do It Yourself (DIY)</h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-brand-accent font-bold mb-2">Pros:</p>
                        <ul className="space-y-1 text-sm">
                          <li>✓ Lower initial cost (just ad spend, no agency fees)</li>
                          <li>✓ Full control over messaging and strategy</li>
                          <li>✓ Learn the fundamentals of advertising</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-brand-accent font-bold mb-2">Cons:</p>
                        <ul className="space-y-1 text-sm">
                          <li>✗ Time-intensive (5–10 hrs/week for setup and optimization)</li>
                          <li>✗ Slower learning curve (costly mistakes at the start)</li>
                          <li>✗ Higher risk of underperformance without expertise</li>
                        </ul>
                      </div>

                      <div className="bg-brand-black/40 rounded p-3 border border-brand-border">
                        <p className="text-sm"><span className="text-brand-accent font-bold">Best For:</span> Budget-conscious businesses willing to invest time and tolerate slower growth.</p>
                      </div>
                    </div>
                  </div>

                  {/* Done-For-You */}
                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-6">
                    <h3 className="text-white font-bold text-lg mb-4">Done-For-You (Agency)</h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-brand-accent font-bold mb-2">Pros:</p>
                        <ul className="space-y-1 text-sm">
                          <li>✓ Faster results (experts optimize from day one)</li>
                          <li>✓ Saves 5–10 hours per week</li>
                          <li>✓ Professional strategy, creative, and optimization</li>
                          <li>✓ Better ROI (usually)</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-brand-accent font-bold mb-2">Cons:</p>
                        <ul className="space-y-1 text-sm">
                          <li>✗ Higher cost (management fees + ad spend)</li>
                          <li>✗ Less direct control (trust required)</li>
                          <li>✗ Dependent on agency quality</li>
                        </ul>
                      </div>

                      <div className="bg-brand-black/40 rounded p-3 border border-brand-border">
                        <p className="text-sm"><span className="text-brand-accent font-bold">Best For:</span> Businesses ready to scale quickly and prioritise results over learning the platform themselves.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                  <p className="text-brand-accent font-bold mb-3">Hybrid Approach (The Smart Move):</p>
                  <p className="text-sm text-brand-muted">
                    Start DIY with this guide. Run ads for 30–45 days, track results, and learn what works. Then partner with an expert to scale what's working. This gives you knowledge and confidence while accelerating your growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8: 14-Day Action Plan */}
            <div id="section-8" className="bg-brand-surface/30 border border-brand-border rounded-2xl p-6 md:p-10 reveal mb-8 reveal-delay-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-brand-accent/20 rounded-lg p-3 flex-shrink-0">
                  <Target className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase mb-2">
                    14-Day Action Plan
                  </h2>
                  <p className="text-brand-muted">Your roadmap from start to first customers</p>
                </div>
              </div>

              <div className="space-y-6 text-brand-bone">
                <p className="leading-relaxed text-lg">
                  Ready to start? Here's exactly what to do over the next two weeks.
                </p>

                <div className="space-y-3">
                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-accent text-brand-black font-bold rounded-lg px-4 py-2 text-lg flex-shrink-0">Days 1–2</div>
                      <div>
                        <p className="font-bold text-white mb-2">Define Your Target Customer & Goal</p>
                        <ul className="space-y-1 text-sm text-brand-muted">
                          <li>• Who exactly are you trying to reach? (age, location, interests, pain points)</li>
                          <li>• What's your primary goal? (leads, calls, online sales, bookings)</li>
                          <li>• What's your budget for testing? ($500–$2,000 recommended)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-accent text-brand-black font-bold rounded-lg px-4 py-2 text-lg flex-shrink-0">Days 3–4</div>
                      <div>
                        <p className="font-bold text-white mb-2">Choose Your Platform(s)</p>
                        <ul className="space-y-1 text-sm text-brand-muted">
                          <li>• Use the platform guide above to decide (Google, Facebook/Instagram, or both)</li>
                          <li>• Create accounts if you don't have them</li>
                          <li>• Set up Google Analytics 4 on your website</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-accent text-brand-black font-bold rounded-lg px-4 py-2 text-lg flex-shrink-0">Days 5–7</div>
                      <div>
                        <p className="font-bold text-white mb-2">Build Your Landing Page</p>
                        <ul className="space-y-1 text-sm text-brand-muted">
                          <li>• Create a dedicated page for your campaign (not your homepage)</li>
                          <li>• Include: Clear headline matching your ad, benefit-driven copy, one CTA</li>
                          <li>• Optimise for mobile (test on your phone)</li>
                          <li>• Set up conversion tracking on the page</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-accent text-brand-black font-bold rounded-lg px-4 py-2 text-lg flex-shrink-0">Days 8–10</div>
                      <div>
                        <p className="font-bold text-white mb-2">Write & Create Your Ads</p>
                        <ul className="space-y-1 text-sm text-brand-muted">
                          <li>• Write 3 ad variations using the winning formula (Hook + Problem + Solution + CTA)</li>
                          <li>• Use high-quality images or video if possible</li>
                          <li>• Double-check copy for typos and clarity</li>
                          <li>• Add UTM parameters to your landing page URL</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-accent text-brand-black font-bold rounded-lg px-4 py-2 text-lg flex-shrink-0">Days 11–12</div>
                      <div>
                        <p className="font-bold text-white mb-2">Set Up Targeting & Launch</p>
                        <ul className="space-y-1 text-sm text-brand-muted">
                          <li>• Set up audience targeting (location, age, interests)</li>
                          <li>• Set your daily budget ($20–$50/day recommended)</li>
                          <li>• Set campaign duration (start with 2 weeks)</li>
                          <li>• Launch all 3 ad variations</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-accent text-brand-black font-bold rounded-lg px-4 py-2 text-lg flex-shrink-0">Days 13–14</div>
                      <div>
                        <p className="font-bold text-white mb-2">Monitor & Optimize</p>
                        <ul className="space-y-1 text-sm text-brand-muted">
                          <li>• Check metrics daily (CTR, CPC, conversions)</li>
                          <li>• Don't panic if results are slow - wait 5-7 days for reliable data</li>
                          <li>• Pause underperformers (CTR under 1.5%)</li>
                          <li>• Scale what's working (increase daily budget gradually)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-accent/10 border border-brand-accent rounded-lg p-6 mt-6">
                  <p className="text-white font-bold mb-2">Next Steps After Day 14:</p>
                  <ul className="space-y-2 text-sm text-brand-bone">
                    <li>✓ Collect 30–50 conversions minimum before making major changes</li>
                    <li>✓ Analyse which audiences, platforms, and ad variations work best</li>
                    <li>✓ Scale winning campaigns 10–20% per week</li>
                    <li>✓ Consider partnering with an agency if results exceed your expectations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-r from-brand-accent/20 to-brand-accent/10 border border-brand-accent rounded-2xl p-8 md:p-12 reveal mb-8 reveal-delay-300 text-center">
              <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase mb-4">
                Ready to Start Advertising?
              </h3>
              <p className="text-brand-bone text-lg mb-6 max-w-2xl mx-auto">
                You have the strategy. Now it's time to take action. Start with the 14-day plan above, and don't skip the tracking and measurement - it's where real insights come from.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/resources"
                  className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-bold py-3 px-8 rounded-lg transition-all uppercase tracking-wide text-sm"
                >
                  Back to Resources
                </a>
                <a
                  href="/enquire"
                  className="inline-flex items-center justify-center gap-2 bg-brand-surface hover:bg-brand-surface/80 border border-brand-border text-white font-bold py-3 px-8 rounded-lg transition-all uppercase tracking-wide text-sm"
                >
                  Get Expert Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingGuidePage;
