import React, { useState, useEffect } from 'react';
import { Brain, Target, Shield, MousePointer, Zap, CheckCircle, AlertCircle, ArrowLeft, Eye } from 'lucide-react';

const ConversionPsychologyGuidePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('section-1');

  const sections = [
    { id: 'section-1', title: 'How Users Decide Online', shortTitle: 'User Decisions' },
    { id: 'section-2', title: 'Trust Triggers', shortTitle: 'Trust Triggers' },
    { id: 'section-3', title: 'Friction Reducers', shortTitle: 'Friction Reducers' },
    { id: 'section-4', title: 'CTA Hierarchy', shortTitle: 'CTA Hierarchy' },
    { id: 'section-5', title: 'Reducing Mental Load', shortTitle: 'Mental Load' },
    { id: 'section-6', title: 'Putting It All Together', shortTitle: 'Implementation' },
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
                  The Conversion Psychology Playbook
                </h1>
                <p className="text-brand-muted text-sm md:text-base">
                  Understand how users think, decide, and convert - then design websites that guide them naturally toward action
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-brand-muted text-sm">6 Sections • 20 min read</p>
                <p className="text-brand-bone text-base leading-relaxed">
                  Most websites fail because they ignore how people actually make decisions. This guide reveals the psychological principles that drive conversions, reduce friction, and turn casual visitors into committed customers.
                </p>
              </div>
            </div>

            {/* Section 1: How Users Decide Online */}
            <div id="section-1" className="bg-brand-surface/30 border border-brand-border rounded-2xl p-6 md:p-10 reveal mb-8 reveal-delay-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-brand-accent/20 rounded-lg p-3 flex-shrink-0">
                  <Brain className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase mb-2">
                    How Users Decide Online
                  </h2>
                  <p className="text-brand-muted">Understanding the decision-making process</p>
                </div>
              </div>

              <div className="space-y-6 text-brand-bone">
                <p className="leading-relaxed text-lg">
                  Online decision-making isn't logical - it's emotional, fast, and heavily influenced by design, clarity, and perceived risk.
                </p>

                <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5 space-y-4">
                  <div>
                    <h3 className="text-brand-accent font-bold mb-2">The 3-Second Rule</h3>
                    <p className="text-base">
                      Users form an impression of your website in <span className="text-brand-accent font-bold">3 seconds or less</span>. In that time, they decide whether to stay or leave based on visual hierarchy, clarity, and trust signals.
                    </p>
                  </div>
                  <p className="text-sm text-brand-muted border-t border-brand-border pt-4">
                    If your visitor can't immediately understand what you do, who it's for, and what to do next - they'll leave.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-brand-accent font-bold text-lg">The Two Systems of Thinking</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                      <h4 className="text-white font-bold mb-2">System 1: Fast & Emotional</h4>
                      <ul className="space-y-2 text-sm text-brand-muted">
                        <li>• Operates automatically and quickly</li>
                        <li>• Driven by emotion and intuition</li>
                        <li>• Influenced by design, visuals, and clarity</li>
                        <li>• Makes snap judgements based on first impressions</li>
                      </ul>
                      <p className="text-brand-accent text-xs mt-3 font-bold">This is where conversions happen.</p>
                    </div>

                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                      <h4 className="text-white font-bold mb-2">System 2: Slow & Logical</h4>
                      <ul className="space-y-2 text-sm text-brand-muted">
                        <li>• Requires conscious effort and focus</li>
                        <li>• Used for complex decisions and comparisons</li>
                        <li>• Fatigues quickly (limited mental energy)</li>
                        <li>• Most users avoid engaging this system</li>
                      </ul>
                      <p className="text-brand-muted text-xs mt-3 font-bold">If you force users here, they'll leave.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                  <h3 className="text-brand-accent font-bold mb-3">The Decision Path</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="bg-brand-accent text-brand-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">1</span>
                      <div>
                        <p className="text-white font-semibold">First Impression (0–3 seconds)</p>
                        <p className="text-sm text-brand-muted">Is this relevant to me? Does it look credible?</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-brand-accent text-brand-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">2</span>
                      <div>
                        <p className="text-white font-semibold">Value Assessment (3–10 seconds)</p>
                        <p className="text-sm text-brand-muted">What's in it for me? Is this worth my time?</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-brand-accent text-brand-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">3</span>
                      <div>
                        <p className="text-white font-semibold">Trust Evaluation (10–30 seconds)</p>
                        <p className="text-sm text-brand-muted">Can I trust this business? What do others say?</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-brand-accent text-brand-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">4</span>
                      <div>
                        <p className="text-white font-semibold">Action Decision (30+ seconds)</p>
                        <p className="text-sm text-brand-muted">What's the next step? Is it easy? What's the risk?</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-accent/10 border border-brand-accent rounded-lg p-5">
                  <div className="flex gap-3 mb-2">
                    <AlertCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                    <p className="text-brand-accent font-bold">Key Insight:</p>
                  </div>
                  <p className="text-sm text-brand-bone">
                    Users don't read - they scan. They don't think deeply - they react emotionally. Your website must guide their System 1 thinking toward action with minimal friction and maximum clarity.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Trust Triggers */}
            <div id="section-2" className="bg-brand-surface/30 border border-brand-border rounded-2xl p-6 md:p-10 reveal mb-8 reveal-delay-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-brand-accent/20 rounded-lg p-3 flex-shrink-0">
                  <Shield className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase mb-2">
                    Trust Triggers
                  </h2>
                  <p className="text-brand-muted">Building credibility at every touchpoint</p>
                </div>
              </div>

              <div className="space-y-6 text-brand-bone">
                <p className="leading-relaxed text-lg">
                  Trust is the foundation of conversion. Without it, users won't take action - no matter how good your offer is.
                </p>

                <div className="space-y-4">
                  <h3 className="text-brand-accent font-bold text-lg mb-4">Essential Trust Signals</h3>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <CheckCircle className="text-brand-accent" size={18} />
                      Social Proof
                    </h4>
                    <p className="text-sm text-brand-muted mb-3">
                      People trust what others have validated. Show evidence that real people use and trust your service.
                    </p>
                    <div className="bg-brand-black/40 rounded p-4 border border-brand-border">
                      <p className="text-xs text-brand-accent font-bold mb-2">Examples:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Testimonials with names and photos</li>
                        <li>• Customer count ("Join 5,000+ businesses")</li>
                        <li>• Case studies with measurable results</li>
                        <li>• Reviews and ratings (Google, Trustpilot)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <CheckCircle className="text-brand-accent" size={18} />
                      Authority Markers
                    </h4>
                    <p className="text-sm text-brand-muted mb-3">
                      Demonstrate expertise, credentials, and industry recognition.
                    </p>
                    <div className="bg-brand-black/40 rounded p-4 border border-brand-border">
                      <p className="text-xs text-brand-accent font-bold mb-2">Examples:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Years in business</li>
                        <li>• Certifications and qualifications</li>
                        <li>• Awards and recognition</li>
                        <li>• Media mentions or features</li>
                        <li>• Industry affiliations</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <CheckCircle className="text-brand-accent" size={18} />
                      Transparency
                    </h4>
                    <p className="text-sm text-brand-muted mb-3">
                      Remove uncertainty by being clear about pricing, process, and what to expect.
                    </p>
                    <div className="bg-brand-black/40 rounded p-4 border border-brand-border">
                      <p className="text-xs text-brand-accent font-bold mb-2">Examples:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Clear pricing (no "Call for quote" unless justified)</li>
                        <li>• Step-by-step process breakdown</li>
                        <li>• Honest timelines and expectations</li>
                        <li>• Clear terms and conditions</li>
                        <li>• Real business address and ABN</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <CheckCircle className="text-brand-accent" size={18} />
                      Human Connection
                    </h4>
                    <p className="text-sm text-brand-muted mb-3">
                      People buy from people, not faceless companies. Show the humans behind the business.
                    </p>
                    <div className="bg-brand-black/40 rounded p-4 border border-brand-border">
                      <p className="text-xs text-brand-accent font-bold mb-2">Examples:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Founder or team photos with names</li>
                        <li>• About page with personal story</li>
                        <li>• Real email addresses (not generic contact forms)</li>
                        <li>• Phone number displayed prominently</li>
                        <li>• Personal tone of voice in copy</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <CheckCircle className="text-brand-accent" size={18} />
                      Risk Reversal
                    </h4>
                    <p className="text-sm text-brand-muted mb-3">
                      Remove the fear of making the wrong decision by offering guarantees and safety nets.
                    </p>
                    <div className="bg-brand-black/40 rounded p-4 border border-brand-border">
                      <p className="text-xs text-brand-accent font-bold mb-2">Examples:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Money-back guarantees</li>
                        <li>• Free trials or demos</li>
                        <li>• "No commitment" or "Cancel anytime" messaging</li>
                        <li>• Refund policies clearly stated</li>
                        <li>• Free initial consultations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-accent/10 border border-brand-accent rounded-lg p-5">
                  <p className="text-brand-accent font-bold mb-2">Trust Formula:</p>
                  <p className="text-sm text-brand-bone">
                    Trust = (Social Proof + Authority + Transparency + Human Connection + Risk Reversal) - Uncertainty
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Friction Reducers */}
            <div id="section-3" className="bg-brand-surface/30 border border-brand-border rounded-2xl p-6 md:p-10 reveal mb-8 reveal-delay-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-brand-accent/20 rounded-lg p-3 flex-shrink-0">
                  <Zap className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase mb-2">
                    Friction Reducers
                  </h2>
                  <p className="text-brand-muted">Removing barriers to conversion</p>
                </div>
              </div>

              <div className="space-y-6 text-brand-bone">
                <p className="leading-relaxed text-lg">
                  Friction is anything that makes a user pause, hesitate, or reconsider. The less friction, the higher the conversion rate.
                </p>

                <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5 space-y-4">
                  <h3 className="text-brand-accent font-bold">The Friction Equation</h3>
                  <p className="text-base">
                    Conversion Rate = <span className="text-brand-accent font-bold">(Motivation × Clarity)</span> ÷ <span className="text-red-400 font-bold">Friction</span>
                  </p>
                  <p className="text-sm text-brand-muted border-t border-brand-border pt-4">
                    You can't always increase motivation, but you can always reduce friction and improve clarity.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-brand-accent font-bold text-lg mb-4">Common Friction Points & Fixes</h3>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <h4 className="text-white font-bold mb-3">❌ Friction: Long Forms</h4>
                    <p className="text-sm text-brand-muted mb-3">
                      Every additional form field reduces conversion rates by 5–10%. Users abandon forms that feel like work.
                    </p>
                    <div className="bg-brand-accent/10 rounded p-4 border border-brand-accent">
                      <p className="text-xs text-brand-accent font-bold mb-2">✓ Solution:</p>
                      <ul className="space-y-1 text-sm text-brand-bone">
                        <li>• Only ask for essential information</li>
                        <li>• Use multi-step forms to reduce perceived effort</li>
                        <li>• Show progress indicators</li>
                        <li>• Use autofill and smart defaults</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <h4 className="text-white font-bold mb-3">❌ Friction: Unclear Next Steps</h4>
                    <p className="text-sm text-brand-muted mb-3">
                      Users shouldn't have to think about what to do next. Ambiguity kills conversions.
                    </p>
                    <div className="bg-brand-accent/10 rounded p-4 border border-brand-accent">
                      <p className="text-xs text-brand-accent font-bold mb-2">✓ Solution:</p>
                      <ul className="space-y-1 text-sm text-brand-bone">
                        <li>• One primary CTA per page</li>
                        <li>• Use action-oriented button text ("Get Started", not "Submit")</li>
                        <li>• Make CTAs visually prominent</li>
                        <li>• Remove competing navigation options at key moments</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <h4 className="text-white font-bold mb-3">❌ Friction: Slow Page Speed</h4>
                    <p className="text-sm text-brand-muted mb-3">
                      A 1-second delay in page load time decreases conversions by 7%. Users won't wait.
                    </p>
                    <div className="bg-brand-accent/10 rounded p-4 border border-brand-accent">
                      <p className="text-xs text-brand-accent font-bold mb-2">✓ Solution:</p>
                      <ul className="space-y-1 text-sm text-brand-bone">
                        <li>• Optimise images (compress, use modern formats)</li>
                        <li>• Minimise scripts and third-party tools</li>
                        <li>• Use lazy loading for below-fold content</li>
                        <li>• Target sub-2-second load times on mobile</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <h4 className="text-white font-bold mb-3">❌ Friction: Hidden or Complex Pricing</h4>
                    <p className="text-sm text-brand-muted mb-3">
                      "Contact us for pricing" forces users to engage before they're ready. Many will leave instead.
                    </p>
                    <div className="bg-brand-accent/10 rounded p-4 border border-brand-accent">
                      <p className="text-xs text-brand-accent font-bold mb-2">✓ Solution:</p>
                      <ul className="space-y-1 text-sm text-brand-bone">
                        <li>• Display pricing upfront (or "Starting from $X")</li>
                        <li>• Explain what's included clearly</li>
                        <li>• If custom pricing required, explain why</li>
                        <li>• Offer pricing tiers for self-qualification</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <h4 className="text-white font-bold mb-3">❌ Friction: Too Many Choices</h4>
                    <p className="text-sm text-brand-muted mb-3">
                      Paradox of choice: more options = decision paralysis. Users overwhelmed by choices often choose nothing.
                    </p>
                    <div className="bg-brand-accent/10 rounded p-4 border border-brand-accent">
                      <p className="text-xs text-brand-accent font-bold mb-2">✓ Solution:</p>
                      <ul className="space-y-1 text-sm text-brand-bone">
                        <li>• Limit options to 3–4 maximum</li>
                        <li>• Highlight a recommended option</li>
                        <li>• Use progressive disclosure (hide advanced options initially)</li>
                        <li>• Guide users with comparison tables</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <h4 className="text-white font-bold mb-3">❌ Friction: Forced Account Creation</h4>
                    <p className="text-sm text-brand-muted mb-3">
                      Requiring users to create an account before they can take action creates massive friction, especially for first-time visitors.
                    </p>
                    <div className="bg-brand-accent/10 rounded p-4 border border-brand-accent">
                      <p className="text-xs text-brand-accent font-bold mb-2">✓ Solution:</p>
                      <ul className="space-y-1 text-sm text-brand-bone">
                        <li>• Allow guest checkout or contact without signup</li>
                        <li>• Offer social login options (Google, Facebook)</li>
                        <li>• Explain the benefit of creating an account</li>
                        <li>• Create accounts automatically after first purchase</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-accent/10 border border-brand-accent rounded-lg p-5">
                  <p className="text-brand-accent font-bold mb-2">Friction Audit Checklist:</p>
                  <p className="text-sm text-brand-bone mb-3">
                    Walk through your conversion path and identify every point where a user might hesitate:
                  </p>
                  <ul className="space-y-1 text-sm text-brand-bone">
                    <li>• Is the value clear immediately?</li>
                    <li>• Are there any unnecessary form fields?</li>
                    <li>• Is the next action obvious?</li>
                    <li>• Does the page load in under 2 seconds?</li>
                    <li>• Is pricing visible or hidden?</li>
                    <li>• Are there too many choices?</li>
                    <li>• Do you require account creation too early?</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: CTA Hierarchy */}
            <div id="section-4" className="bg-brand-surface/30 border border-brand-border rounded-2xl p-6 md:p-10 reveal mb-8 reveal-delay-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-brand-accent/20 rounded-lg p-3 flex-shrink-0">
                  <MousePointer className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase mb-2">
                    CTA Hierarchy
                  </h2>
                  <p className="text-brand-muted">Guiding action with intentional design</p>
                </div>
              </div>

              <div className="space-y-6 text-brand-bone">
                <p className="leading-relaxed text-lg">
                  Not all calls-to-action are equal. A clear hierarchy ensures users know exactly what to do first, second, and third.
                </p>

                <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5 space-y-4">
                  <h3 className="text-brand-accent font-bold">The Golden Rule of CTAs</h3>
                  <p className="text-base">
                    <span className="text-brand-accent font-bold">One primary action per page.</span> Everything else is secondary or tertiary.
                  </p>
                  <p className="text-sm text-brand-muted border-t border-brand-border pt-4">
                    If everything is important, nothing is. Users need a clear focal point.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-brand-accent font-bold text-lg mb-4">The Three Levels of CTAs</h3>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <div className="flex items-start gap-4 mb-3">
                      <span className="bg-brand-accent text-brand-black font-bold rounded-lg px-3 py-1 text-sm flex-shrink-0">Primary</span>
                      <h4 className="text-white font-bold">High-Commitment Action</h4>
                    </div>
                    <p className="text-sm text-brand-muted mb-3">
                      The most important action you want users to take. This should dominate visually.
                    </p>
                    <div className="bg-brand-black/40 rounded p-4 border border-brand-border space-y-3">
                      <div>
                        <p className="text-xs text-brand-accent font-bold mb-1">Examples:</p>
                        <ul className="space-y-1 text-sm">
                          <li>• "Start Your Project"</li>
                          <li>• "Book Free Consultation"</li>
                          <li>• "Add to Cart"</li>
                          <li>• "Get Started Free"</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs text-brand-accent font-bold mb-1">Design:</p>
                        <ul className="space-y-1 text-sm">
                          <li>• Bright, contrasting colour (brand accent)</li>
                          <li>• Large, prominent button</li>
                          <li>• Action-oriented text</li>
                          <li>• Repeated at key decision points</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <div className="flex items-start gap-4 mb-3">
                      <span className="bg-brand-border text-white font-bold rounded-lg px-3 py-1 text-sm flex-shrink-0">Secondary</span>
                      <h4 className="text-white font-bold">Medium-Commitment Action</h4>
                    </div>
                    <p className="text-sm text-brand-muted mb-3">
                      Alternative actions for users not ready for the primary CTA. Lower commitment, still valuable.
                    </p>
                    <div className="bg-brand-black/40 rounded p-4 border border-brand-border space-y-3">
                      <div>
                        <p className="text-xs text-brand-accent font-bold mb-1">Examples:</p>
                        <ul className="space-y-1 text-sm">
                          <li>• "View Portfolio"</li>
                          <li>• "Download Guide"</li>
                          <li>• "Learn More"</li>
                          <li>• "See Pricing"</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs text-brand-accent font-bold mb-1">Design:</p>
                        <ul className="space-y-1 text-sm">
                          <li>• Muted or outlined button</li>
                          <li>• Slightly smaller than primary</li>
                          <li>• Positioned near primary but not competing</li>
                          <li>• Still clear and clickable</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <div className="flex items-start gap-4 mb-3">
                      <span className="bg-brand-surface text-brand-muted font-bold rounded-lg px-3 py-1 text-sm flex-shrink-0">Tertiary</span>
                      <h4 className="text-white font-bold">Low-Commitment Action</h4>
                    </div>
                    <p className="text-sm text-brand-muted mb-3">
                      Navigation and utility actions. Present but not attention-grabbing.
                    </p>
                    <div className="bg-brand-black/40 rounded p-4 border border-brand-border space-y-3">
                      <div>
                        <p className="text-xs text-brand-accent font-bold mb-1">Examples:</p>
                        <ul className="space-y-1 text-sm">
                          <li>• "Contact Us"</li>
                          <li>• "FAQs"</li>
                          <li>• "About Us"</li>
                          <li>• Social media links</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs text-brand-accent font-bold mb-1">Design:</p>
                        <ul className="space-y-1 text-sm">
                          <li>• Text links or subtle buttons</li>
                          <li>• Minimal colour contrast</li>
                          <li>• Placed in header/footer</li>
                          <li>• Doesn't distract from primary CTA</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-brand-accent font-bold text-lg mb-4">CTA Best Practices</h3>

                  <div className="grid gap-3">
                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-4">
                      <p className="text-white font-semibold mb-1">Use Action Verbs</p>
                      <p className="text-sm text-brand-muted">Start with verbs: "Get", "Start", "Book", "Download", "Claim"</p>
                    </div>
                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-4">
                      <p className="text-white font-semibold mb-1">Create Urgency When Appropriate</p>
                      <p className="text-sm text-brand-muted">"Limited spots", "Offer ends soon", "Join today" (but only if true)</p>
                    </div>
                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-4">
                      <p className="text-white font-semibold mb-1">Clarify What Happens Next</p>
                      <p className="text-sm text-brand-muted">Add micro-copy: "No credit card required", "Takes 2 minutes", "Free consultation"</p>
                    </div>
                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-4">
                      <p className="text-white font-semibold mb-1">Make It Big Enough</p>
                      <p className="text-sm text-brand-muted">CTAs should be at least 44×44px for mobile tap targets</p>
                    </div>
                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-4">
                      <p className="text-white font-semibold mb-1">Test Button Copy</p>
                      <p className="text-sm text-brand-muted">Small changes in wording can dramatically impact conversion rates</p>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-accent/10 border border-brand-accent rounded-lg p-5">
                  <p className="text-brand-accent font-bold mb-2">Visual Hierarchy Example:</p>
                  <div className="space-y-3 mt-4">
                    <button className="w-full bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-8 rounded-lg shadow-lg uppercase tracking-wide text-sm transition-all">
                      Get Started - $299 Setup
                    </button>
                    <button className="w-full bg-transparent border-2 border-brand-border text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-surface/40 uppercase tracking-wide text-sm transition-all">
                      View Portfolio
                    </button>
                    <a href="#" className="block text-center text-brand-muted hover:text-white text-sm underline">
                      Learn More About Our Process
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Reducing Mental Load */}
            <div id="section-5" className="bg-brand-surface/30 border border-brand-border rounded-2xl p-6 md:p-10 reveal mb-8 reveal-delay-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-brand-accent/20 rounded-lg p-3 flex-shrink-0">
                  <Eye className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase mb-2">
                    Reducing Mental Load
                  </h2>
                  <p className="text-brand-muted">Making decisions effortless</p>
                </div>
              </div>

              <div className="space-y-6 text-brand-bone">
                <p className="leading-relaxed text-lg">
                  Every additional element on your page - text, image, option, distraction - adds to cognitive load. When users feel overwhelmed, they leave.
                </p>

                <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5 space-y-4">
                  <h3 className="text-brand-accent font-bold">Cognitive Load Theory</h3>
                  <p className="text-base">
                    Humans have <span className="text-brand-accent font-bold">limited working memory</span>. The more mental effort required to understand your website, the less capacity users have left to make a decision.
                  </p>
                  <p className="text-sm text-brand-muted border-t border-brand-border pt-4">
                    Your goal: Make understanding and action feel effortless.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-brand-accent font-bold text-lg mb-4">How to Reduce Mental Load</h3>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <CheckCircle className="text-brand-accent" size={18} />
                      Simplify Visual Hierarchy
                    </h4>
                    <p className="text-sm text-brand-muted mb-3">
                      Users should instantly understand what matters most without having to think.
                    </p>
                    <div className="bg-brand-black/40 rounded p-4 border border-brand-border">
                      <p className="text-xs text-brand-accent font-bold mb-2">Tactics:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Use size and contrast to create clear focal points</li>
                        <li>• Limit fonts to 2–3 maximum</li>
                        <li>• Use whitespace generously to separate sections</li>
                        <li>• Guide the eye with visual flow (F-pattern or Z-pattern)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <CheckCircle className="text-brand-accent" size={18} />
                      Cut Unnecessary Content
                    </h4>
                    <p className="text-sm text-brand-muted mb-3">
                      Every word, sentence, and paragraph should have a purpose. Remove fluff ruthlessly.
                    </p>
                    <div className="bg-brand-black/40 rounded p-4 border border-brand-border">
                      <p className="text-xs text-brand-accent font-bold mb-2">Tactics:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Use bullet points instead of paragraphs</li>
                        <li>• Remove marketing jargon and vague language</li>
                        <li>• Lead with benefits, not features</li>
                        <li>• Delete anything that doesn't directly support conversion</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <CheckCircle className="text-brand-accent" size={18} />
                      Use Progressive Disclosure
                    </h4>
                    <p className="text-sm text-brand-muted mb-3">
                      Don't show everything at once. Reveal information as needed, when needed.
                    </p>
                    <div className="bg-brand-black/40 rounded p-4 border border-brand-border">
                      <p className="text-xs text-brand-accent font-bold mb-2">Tactics:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Use accordions for FAQs and details</li>
                        <li>• Show "Learn More" links instead of long explanations</li>
                        <li>• Break forms into multiple steps</li>
                        <li>• Hide advanced options by default</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <CheckCircle className="text-brand-accent" size={18} />
                      Provide Defaults and Recommendations
                    </h4>
                    <p className="text-sm text-brand-muted mb-3">
                      Making decisions is hard. Make it easier by suggesting the best option.
                    </p>
                    <div className="bg-brand-black/40 rounded p-4 border border-brand-border">
                      <p className="text-xs text-brand-accent font-bold mb-2">Tactics:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Pre-select common form options</li>
                        <li>• Label one pricing tier as "Most Popular"</li>
                        <li>• Use "Recommended" badges</li>
                        <li>• Offer smart defaults based on common use cases</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <CheckCircle className="text-brand-accent" size={18} />
                      Use Visual Cues and Icons
                    </h4>
                    <p className="text-sm text-brand-muted mb-3">
                      Visuals are processed 60,000 times faster than text. Use them to reduce reading load.
                    </p>
                    <div className="bg-brand-black/40 rounded p-4 border border-brand-border">
                      <p className="text-xs text-brand-accent font-bold mb-2">Tactics:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Use icons to represent features and benefits</li>
                        <li>• Show progress bars in multi-step processes</li>
                        <li>• Use checkmarks and visual confirmation</li>
                        <li>• Replace long descriptions with comparison tables</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <CheckCircle className="text-brand-accent" size={18} />
                      Eliminate Distractions
                    </h4>
                    <p className="text-sm text-brand-muted mb-3">
                      Every competing element dilutes focus. Remove anything that doesn't move users toward action.
                    </p>
                    <div className="bg-brand-black/40 rounded p-4 border border-brand-border">
                      <p className="text-xs text-brand-accent font-bold mb-2">Tactics:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Remove sidebar navigation on landing pages</li>
                        <li>• Hide footer on key conversion pages</li>
                        <li>• Limit popups and chat widgets</li>
                        <li>• Use exit-intent popups only (not on entry)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-accent/10 border border-brand-accent rounded-lg p-5">
                  <p className="text-brand-accent font-bold mb-3">Mental Load Checklist:</p>
                  <p className="text-sm text-brand-bone mb-3">Ask yourself for every page element:</p>
                  <ul className="space-y-1 text-sm text-brand-bone">
                    <li>• Does this directly support the conversion goal?</li>
                    <li>• Can I say this in fewer words?</li>
                    <li>• Can I show this instead of writing it?</li>
                    <li>• Does this add clarity or confusion?</li>
                    <li>• Would removing this make the decision easier?</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 6: Putting It All Together */}
            <div id="section-6" className="bg-brand-surface/30 border border-brand-border rounded-2xl p-6 md:p-10 reveal mb-8 reveal-delay-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-brand-accent/20 rounded-lg p-3 flex-shrink-0">
                  <Target className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase mb-2">
                    Putting It All Together
                  </h2>
                  <p className="text-brand-muted">The high-converting page framework</p>
                </div>
              </div>

              <div className="space-y-6 text-brand-bone">
                <p className="leading-relaxed text-lg">
                  Now that you understand the psychology, here's how to apply it to a real conversion-focused page.
                </p>

                <div className="space-y-4">
                  <h3 className="text-brand-accent font-bold text-lg mb-4">The Conversion-Optimised Page Structure</h3>

                  <div className="space-y-3">
                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="bg-brand-accent text-brand-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                        <h4 className="text-white font-bold">Hero Section (Above the Fold)</h4>
                      </div>
                      <p className="text-sm text-brand-muted mb-3">
                        First 3 seconds. Make it count.
                      </p>
                      <div className="bg-brand-black/40 rounded p-4 border border-brand-border">
                        <p className="text-xs text-brand-accent font-bold mb-2">Must Include:</p>
                        <ul className="space-y-1 text-sm">
                          <li>• Clear headline stating what you do and for whom</li>
                          <li>• Value proposition in one sentence</li>
                          <li>• Primary CTA (prominent, action-oriented)</li>
                          <li>• Trust signal (social proof, customer count, rating)</li>
                          <li>• Relevant visual (not generic stock photo)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="bg-brand-accent text-brand-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                        <h4 className="text-white font-bold">Social Proof Section</h4>
                      </div>
                      <p className="text-sm text-brand-muted mb-3">
                        Build immediate trust with third-party validation.
                      </p>
                      <div className="bg-brand-black/40 rounded p-4 border border-brand-border">
                        <p className="text-xs text-brand-accent font-bold mb-2">Must Include:</p>
                        <ul className="space-y-1 text-sm">
                          <li>• 2–3 testimonials with names and photos</li>
                          <li>• Customer logos or "As Seen In" badges</li>
                          <li>• Specific results ("Increased leads by 200%")</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="bg-brand-accent text-brand-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                        <h4 className="text-white font-bold">Benefits Section</h4>
                      </div>
                      <p className="text-sm text-brand-muted mb-3">
                        Answer "What's in it for me?" with clarity.
                      </p>
                      <div className="bg-brand-black/40 rounded p-4 border border-brand-border">
                        <p className="text-xs text-brand-accent font-bold mb-2">Must Include:</p>
                        <ul className="space-y-1 text-sm">
                          <li>• 3–5 key benefits (not features)</li>
                          <li>• Icons or visuals for each benefit</li>
                          <li>• Focus on outcomes, not process</li>
                          <li>• Use bullet points for scannability</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="bg-brand-accent text-brand-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</span>
                        <h4 className="text-white font-bold">How It Works Section</h4>
                      </div>
                      <p className="text-sm text-brand-muted mb-3">
                        Reduce uncertainty by showing the process.
                      </p>
                      <div className="bg-brand-black/40 rounded p-4 border border-brand-border">
                        <p className="text-xs text-brand-accent font-bold mb-2">Must Include:</p>
                        <ul className="space-y-1 text-sm">
                          <li>• 3–4 step process (keep it simple)</li>
                          <li>• Visual flow with numbered steps</li>
                          <li>• Clear timeline ("Day 1", "Week 2")</li>
                          <li>• Emphasise ease and speed</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="bg-brand-accent text-brand-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">5</span>
                        <h4 className="text-white font-bold">Objection-Handling Section</h4>
                      </div>
                      <p className="text-sm text-brand-muted mb-3">
                        Address doubts before they become deal-breakers.
                      </p>
                      <div className="bg-brand-black/40 rounded p-4 border border-brand-border">
                        <p className="text-xs text-brand-accent font-bold mb-2">Must Include:</p>
                        <ul className="space-y-1 text-sm">
                          <li>• FAQ section with 5–8 common questions</li>
                          <li>• Address cost, time, risk, and trust concerns</li>
                          <li>• Use accordion or expandable format</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="bg-brand-accent text-brand-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">6</span>
                        <h4 className="text-white font-bold">Final CTA Section</h4>
                      </div>
                      <p className="text-sm text-brand-muted mb-3">
                        End with a clear, compelling call to action.
                      </p>
                      <div className="bg-brand-black/40 rounded p-4 border border-brand-border">
                        <p className="text-xs text-brand-accent font-bold mb-2">Must Include:</p>
                        <ul className="space-y-1 text-sm">
                          <li>• Restate value proposition</li>
                          <li>• Primary CTA (same as hero)</li>
                          <li>• Risk reversal ("Money-back guarantee", "No commitment")</li>
                          <li>• Urgency or scarcity if genuine ("Limited spots")</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-black/40 border border-brand-border rounded-lg p-5">
                  <h3 className="text-brand-accent font-bold mb-4">Conversion Psychology Checklist</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-white font-semibold mb-2 text-sm">Decision-Making:</p>
                      <ul className="space-y-1 text-xs text-brand-muted">
                        <li>☐ Clear within 3 seconds what you do</li>
                        <li>☐ Designed for System 1 thinking (fast, emotional)</li>
                        <li>☐ Value proposition stated clearly</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-2 text-sm">Trust Triggers:</p>
                      <ul className="space-y-1 text-xs text-brand-muted">
                        <li>☐ Social proof visible (testimonials, reviews)</li>
                        <li>☐ Authority markers present</li>
                        <li>☐ Transparent pricing and process</li>
                        <li>☐ Human connection (photos, names)</li>
                        <li>☐ Risk reversal offered</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-2 text-sm">Friction Reduction:</p>
                      <ul className="space-y-1 text-xs text-brand-muted">
                        <li>☐ Forms are short and simple</li>
                        <li>☐ Next steps are clear</li>
                        <li>☐ Page loads in under 2 seconds</li>
                        <li>☐ Pricing is visible or explained</li>
                        <li>☐ Limited to 3–4 options maximum</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-2 text-sm">CTA Hierarchy:</p>
                      <ul className="space-y-1 text-xs text-brand-muted">
                        <li>☐ One primary CTA per page</li>
                        <li>☐ Action-oriented button text</li>
                        <li>☐ Visually prominent and contrasting</li>
                        <li>☐ Secondary CTAs don't compete</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-2 text-sm">Mental Load:</p>
                      <ul className="space-y-1 text-xs text-brand-muted">
                        <li>☐ Clear visual hierarchy</li>
                        <li>☐ Unnecessary content removed</li>
                        <li>☐ Progressive disclosure used</li>
                        <li>☐ Defaults and recommendations provided</li>
                        <li>☐ Distractions eliminated</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-brand-accent/20 to-brand-accent/10 border border-brand-accent rounded-lg p-6">
                  <h3 className="text-white font-bold mb-3">The Conversion Formula</h3>
                  <p className="text-lg text-brand-bone font-semibold mb-4">
                    Conversion Rate = <span className="text-brand-accent">(Trust × Clarity)</span> ÷ <span className="text-red-400">Friction</span>
                  </p>
                  <p className="text-sm text-brand-bone">
                    Apply the principles in this guide to maximise trust and clarity while minimising friction. Every improvement in this formula compounds to drive higher conversion rates.
                  </p>
                </div>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-r from-brand-accent/20 to-brand-accent/10 border border-brand-accent rounded-2xl p-8 md:p-12 reveal mb-8 reveal-delay-300 text-center">
              <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase mb-4">
                Ready to Apply Conversion Psychology?
              </h3>
              <p className="text-brand-bone text-lg mb-6 max-w-2xl mx-auto">
                Understanding psychology is one thing - implementing it correctly is another. If you want a website built on these principles from day one, let's talk.
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
                  Work With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionPsychologyGuidePage;
