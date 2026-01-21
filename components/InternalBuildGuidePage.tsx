import React from 'react';
import { FileText, Home, Briefcase, Users, Phone, Image } from 'lucide-react';
import PasswordProtect from './PasswordProtect';

const InternalBuildGuidePage: React.FC = () => {
  return (
    <PasswordProtect>
    <div className="min-h-screen bg-brand-black">
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03] pointer-events-none"></div>

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 reveal">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full">
              <FileText size={14} className="text-red-500" />
              <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Internal Only</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
              Express Build <span className="text-brand-accent">Page Templates</span>
            </h1>
            <p className="text-brand-muted text-base leading-relaxed">
              Structural blueprints for consistent, conversion-focused trade websites.
              Use these templates to assemble sites quickly while maintaining quality.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-6 mb-12 reveal">
            <h2 className="text-lg font-display font-bold text-white mb-4 uppercase">Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <a href="#home" className="flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors text-sm">
                <Home size={16} /> Home
              </a>
              <a href="#services" className="flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors text-sm">
                <Briefcase size={16} /> Services
              </a>
              <a href="#about" className="flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors text-sm">
                <Users size={16} /> About
              </a>
              <a href="#contact" className="flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors text-sm">
                <Phone size={16} /> Contact
              </a>
              <a href="#additional" className="flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors text-sm">
                <Image size={16} /> Additional
              </a>
            </div>
          </div>

          {/* Page 1: Home */}
          <section id="home" className="mb-16 reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center">
                <Home size={20} />
              </div>
              <h2 className="text-2xl font-display font-bold text-white uppercase">Home Page</h2>
            </div>

            <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-6 mb-6">
              <h3 className="text-brand-accent text-sm font-bold uppercase mb-2">Purpose</h3>
              <p className="text-white">
                Establish what the business does, where they operate, and make it easy to enquire.
              </p>
            </div>

            <div className="space-y-6">
              {/* Section 1 */}
              <div className="border-l-2 border-brand-accent/50 pl-4">
                <h4 className="text-white font-bold mb-2">1. Hero Section</h4>
                <p className="text-brand-muted text-sm mb-3">First screen. Must answer: What do you do? Where?</p>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• <strong className="text-white">Headline:</strong> Trade type + location (e.g., "Electricians in Brisbane North")</li>
                  <li>• <strong className="text-white">Subheadline:</strong> One sentence value prop (reliability, speed, or quality)</li>
                  <li>• <strong className="text-white">Primary CTA:</strong> "Get a Quote" or "Call Now" - above the fold</li>
                  <li>• <strong className="text-white">Phone number:</strong> Visible, clickable on mobile</li>
                </ul>
                <p className="text-brand-muted/60 text-xs mt-3">Mobile: Stack vertically. CTA button full-width. Phone number prominent.</p>
              </div>

              {/* Section 2 */}
              <div className="border-l-2 border-brand-border/50 pl-4">
                <h4 className="text-white font-bold mb-2">2. Services Summary</h4>
                <p className="text-brand-muted text-sm mb-3">Quick overview of what they offer. Not the full list.</p>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• 3-4 primary services only</li>
                  <li>• Icon + short title + one-line description</li>
                  <li>• Link to Services page</li>
                </ul>
                <p className="text-brand-muted/60 text-xs mt-3">Mobile: 1 column stack. Icons smaller.</p>
              </div>

              {/* Section 3 */}
              <div className="border-l-2 border-brand-border/50 pl-4">
                <h4 className="text-white font-bold mb-2">3. Trust Indicators</h4>
                <p className="text-brand-muted text-sm mb-3">Build credibility without requiring testimonials.</p>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• Years in business</li>
                  <li>• Licence number (if applicable)</li>
                  <li>• Insurance status</li>
                  <li>• Service area coverage</li>
                  <li>• Any certifications or memberships</li>
                </ul>
                <p className="text-brand-muted/60 text-xs mt-3">Mobile: Horizontal scroll or 2x2 grid.</p>
              </div>

              {/* Section 4 */}
              <div className="border-l-2 border-brand-border/50 pl-4">
                <h4 className="text-white font-bold mb-2">4. Why Choose Us</h4>
                <p className="text-brand-muted text-sm mb-3">3 differentiators. Keep factual, not fluffy.</p>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• On-time guarantee</li>
                  <li>• Free quotes</li>
                  <li>• Local and family-owned</li>
                  <li>• Same-day service (if true)</li>
                </ul>
                <p className="text-brand-muted/60 text-xs mt-3">Mobile: Vertical stack. Short copy only.</p>
              </div>

              {/* Section 5 */}
              <div className="border-l-2 border-brand-border/50 pl-4">
                <h4 className="text-white font-bold mb-2">5. Service Areas</h4>
                <p className="text-brand-muted text-sm mb-3">List of suburbs or regions covered. Good for local SEO.</p>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• Suburb list (10-20 max on home)</li>
                  <li>• Link to full Service Areas page if applicable</li>
                </ul>
                <p className="text-brand-muted/60 text-xs mt-3">Mobile: Collapsed or "View all" link.</p>
              </div>

              {/* Section 6 */}
              <div className="border-l-2 border-brand-accent/50 pl-4">
                <h4 className="text-white font-bold mb-2">6. Bottom CTA</h4>
                <p className="text-brand-muted text-sm mb-3">Repeat the call-to-action. Don't assume they scrolled from top.</p>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• Headline: "Ready to get started?"</li>
                  <li>• Phone number</li>
                  <li>• CTA button</li>
                  <li>• Brief reassurance line</li>
                </ul>
                <p className="text-brand-muted/60 text-xs mt-3">Mobile: Full-width CTA. Sticky phone button optional.</p>
              </div>
            </div>
          </section>

          {/* Page 2: Services */}
          <section id="services" className="mb-16 reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center">
                <Briefcase size={20} />
              </div>
              <h2 className="text-2xl font-display font-bold text-white uppercase">Services Page</h2>
            </div>

            <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-6 mb-6">
              <h3 className="text-brand-accent text-sm font-bold uppercase mb-2">Purpose</h3>
              <p className="text-white">
                Show the full range of services clearly so visitors can find what they need and enquire.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-brand-accent/50 pl-4">
                <h4 className="text-white font-bold mb-2">1. Page Header</h4>
                <p className="text-brand-muted text-sm mb-3">Set context immediately.</p>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• <strong className="text-white">Headline:</strong> "Our Services" or "[Trade] Services in [Location]"</li>
                  <li>• <strong className="text-white">Subheadline:</strong> One sentence about scope or quality</li>
                </ul>
              </div>

              <div className="border-l-2 border-brand-border/50 pl-4">
                <h4 className="text-white font-bold mb-2">2. Service List</h4>
                <p className="text-brand-muted text-sm mb-3">All services with consistent formatting.</p>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• Group into categories if more than 6 services</li>
                  <li>• Each service: Icon + Title + 2-3 sentence description</li>
                  <li>• No more than 12 services total (recommend 6-8)</li>
                  <li>• Avoid jargon - plain English</li>
                </ul>
                <p className="text-brand-muted/60 text-xs mt-3">Mobile: Single column. Collapsible sections if grouped.</p>
              </div>

              <div className="border-l-2 border-brand-border/50 pl-4">
                <h4 className="text-white font-bold mb-2">3. Process Overview (Optional)</h4>
                <p className="text-brand-muted text-sm mb-3">How the job works. Reduces friction.</p>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• 3-4 steps max</li>
                  <li>• e.g., "1. Call us → 2. Free quote → 3. Job done"</li>
                </ul>
              </div>

              <div className="border-l-2 border-brand-accent/50 pl-4">
                <h4 className="text-white font-bold mb-2">4. CTA Section</h4>
                <p className="text-brand-muted text-sm mb-3">Convert interest into enquiry.</p>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• "Need help with [service type]?"</li>
                  <li>• Phone + contact form link</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Page 3: About */}
          <section id="about" className="mb-16 reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center">
                <Users size={20} />
              </div>
              <h2 className="text-2xl font-display font-bold text-white uppercase">About Page</h2>
            </div>

            <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-6 mb-6">
              <h3 className="text-brand-accent text-sm font-bold uppercase mb-2">Purpose</h3>
              <p className="text-white">
                Build trust by showing the humans behind the business without oversharing.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-brand-accent/50 pl-4">
                <h4 className="text-white font-bold mb-2">1. Page Header</h4>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• <strong className="text-white">Headline:</strong> "About [Business Name]"</li>
                  <li>• <strong className="text-white">Subheadline:</strong> One-liner positioning (e.g., "Family-owned since 2015")</li>
                </ul>
              </div>

              <div className="border-l-2 border-brand-border/50 pl-4">
                <h4 className="text-white font-bold mb-2">2. Business Story</h4>
                <p className="text-brand-muted text-sm mb-3">Keep short. No life histories.</p>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• 2-3 paragraphs max</li>
                  <li>• Cover: How long, who runs it, what they value</li>
                  <li>• Avoid clichés ("passionate about quality")</li>
                  <li>• Be specific where possible ("15 years", "2,000+ jobs")</li>
                </ul>
                <p className="text-brand-muted/60 text-xs mt-3">Mobile: Break into shorter paragraphs.</p>
              </div>

              <div className="border-l-2 border-brand-border/50 pl-4">
                <h4 className="text-white font-bold mb-2">3. Team / Owner Section</h4>
                <p className="text-brand-muted text-sm mb-3">Optional but recommended. Humanises the business.</p>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• Photo of owner/team (if available)</li>
                  <li>• Name and role</li>
                  <li>• 1-2 sentences about them</li>
                  <li>• Stock photo fallback: Skip this section entirely</li>
                </ul>
              </div>

              <div className="border-l-2 border-brand-border/50 pl-4">
                <h4 className="text-white font-bold mb-2">4. Credentials</h4>
                <p className="text-brand-muted text-sm mb-3">Repeat trust indicators in more detail.</p>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• Licences with numbers</li>
                  <li>• Insurance details</li>
                  <li>• Industry memberships</li>
                  <li>• Certifications</li>
                </ul>
              </div>

              <div className="border-l-2 border-brand-accent/50 pl-4">
                <h4 className="text-white font-bold mb-2">5. CTA Section</h4>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• "Want to work with us?"</li>
                  <li>• Link to Contact page</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Page 4: Contact */}
          <section id="contact" className="mb-16 reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center">
                <Phone size={20} />
              </div>
              <h2 className="text-2xl font-display font-bold text-white uppercase">Contact Page</h2>
            </div>

            <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-6 mb-6">
              <h3 className="text-brand-accent text-sm font-bold uppercase mb-2">Purpose</h3>
              <p className="text-white">
                Make it as easy as possible to get in touch. Remove friction and set expectations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-brand-accent/50 pl-4">
                <h4 className="text-white font-bold mb-2">1. Page Header</h4>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• <strong className="text-white">Headline:</strong> "Get in Touch" or "Contact Us"</li>
                  <li>• <strong className="text-white">Subheadline:</strong> Set response expectation (e.g., "We respond within 24 hours")</li>
                </ul>
              </div>

              <div className="border-l-2 border-brand-accent/50 pl-4">
                <h4 className="text-white font-bold mb-2">2. Contact Methods</h4>
                <p className="text-brand-muted text-sm mb-3">All options visible immediately.</p>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• <strong className="text-white">Phone:</strong> Large, clickable, prominent</li>
                  <li>• <strong className="text-white">Email:</strong> Visible but secondary</li>
                  <li>• <strong className="text-white">Hours:</strong> When they answer/work</li>
                  <li>• <strong className="text-white">Location:</strong> Suburb or region (not full address unless needed)</li>
                </ul>
                <p className="text-brand-muted/60 text-xs mt-3">Mobile: Phone number as tap-to-call button.</p>
              </div>

              <div className="border-l-2 border-brand-border/50 pl-4">
                <h4 className="text-white font-bold mb-2">3. Contact Form</h4>
                <p className="text-brand-muted text-sm mb-3">Keep fields minimal.</p>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• Name (required)</li>
                  <li>• Phone (required)</li>
                  <li>• Email (required)</li>
                  <li>• Message / Job description (optional, short)</li>
                  <li>• Suburb (optional - helps with quoting)</li>
                </ul>
                <p className="text-brand-muted/60 text-xs mt-3">Mobile: Single column. Large tap targets.</p>
              </div>

              <div className="border-l-2 border-brand-border/50 pl-4">
                <h4 className="text-white font-bold mb-2">4. Reassurance</h4>
                <p className="text-brand-muted text-sm mb-3">Reduce anxiety about reaching out.</p>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• "Free quotes, no obligation"</li>
                  <li>• "We service [area]"</li>
                  <li>• Response time expectation</li>
                </ul>
              </div>

              <div className="border-l-2 border-brand-border/50 pl-4">
                <h4 className="text-white font-bold mb-2">5. Map (Optional)</h4>
                <p className="text-brand-muted text-sm mb-3">Only if they have a physical location customers visit.</p>
                <ul className="text-brand-muted text-sm space-y-1">
                  <li>• Embedded Google Map</li>
                  <li>• Skip for mobile-only trades</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Page 5: Additional */}
          <section id="additional" className="mb-16 reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center">
                <Image size={20} />
              </div>
              <h2 className="text-2xl font-display font-bold text-white uppercase">Additional Page</h2>
            </div>

            <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-6 mb-6">
              <h3 className="text-brand-accent text-sm font-bold uppercase mb-2">Purpose</h3>
              <p className="text-white">
                The 5th page. Choose based on what adds most value: Gallery (if they have photos) or Service Areas (if location matters for SEO).
              </p>
            </div>

            {/* Option A: Gallery */}
            <div className="mb-8">
              <h3 className="text-lg font-display font-bold text-white mb-4 uppercase flex items-center gap-2">
                <span className="text-brand-accent">Option A:</span> Gallery / Our Work
              </h3>
              <p className="text-brand-muted text-sm mb-4">Use if the client has 6+ quality job photos.</p>

              <div className="space-y-4">
                <div className="border-l-2 border-brand-accent/50 pl-4">
                  <h4 className="text-white font-bold mb-2">1. Page Header</h4>
                  <ul className="text-brand-muted text-sm space-y-1">
                    <li>• "Our Work" or "Recent Projects"</li>
                    <li>• Brief intro line about quality/range</li>
                  </ul>
                </div>

                <div className="border-l-2 border-brand-border/50 pl-4">
                  <h4 className="text-white font-bold mb-2">2. Photo Grid</h4>
                  <ul className="text-brand-muted text-sm space-y-1">
                    <li>• 6-12 photos maximum</li>
                    <li>• Consistent aspect ratios</li>
                    <li>• Lightbox on click</li>
                    <li>• Optional: Brief caption per image</li>
                    <li>• Group by service type if 10+</li>
                  </ul>
                  <p className="text-brand-muted/60 text-xs mt-3">Mobile: 2-column grid. Tap to expand.</p>
                </div>

                <div className="border-l-2 border-brand-accent/50 pl-4">
                  <h4 className="text-white font-bold mb-2">3. CTA Section</h4>
                  <ul className="text-brand-muted text-sm space-y-1">
                    <li>• "Like what you see?"</li>
                    <li>• Link to Contact page</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Option B: Service Areas */}
            <div>
              <h3 className="text-lg font-display font-bold text-white mb-4 uppercase flex items-center gap-2">
                <span className="text-brand-accent">Option B:</span> Service Areas
              </h3>
              <p className="text-brand-muted text-sm mb-4">Use if location-based SEO is a priority and they cover multiple suburbs.</p>

              <div className="space-y-4">
                <div className="border-l-2 border-brand-accent/50 pl-4">
                  <h4 className="text-white font-bold mb-2">1. Page Header</h4>
                  <ul className="text-brand-muted text-sm space-y-1">
                    <li>• "Areas We Service" or "[Trade] in [Region]"</li>
                    <li>• Intro line about coverage</li>
                  </ul>
                </div>

                <div className="border-l-2 border-brand-border/50 pl-4">
                  <h4 className="text-white font-bold mb-2">2. Area List</h4>
                  <ul className="text-brand-muted text-sm space-y-1">
                    <li>• Group by region if many suburbs</li>
                    <li>• 20-50 suburbs typical</li>
                    <li>• Alphabetical within groups</li>
                    <li>• Each suburb can be a link or plain text</li>
                  </ul>
                  <p className="text-brand-muted/60 text-xs mt-3">Mobile: Collapsible region sections.</p>
                </div>

                <div className="border-l-2 border-brand-border/50 pl-4">
                  <h4 className="text-white font-bold mb-2">3. Map (Optional)</h4>
                  <ul className="text-brand-muted text-sm space-y-1">
                    <li>• Static map showing coverage area</li>
                    <li>• Or embedded Google Map with region highlighted</li>
                  </ul>
                </div>

                <div className="border-l-2 border-brand-accent/50 pl-4">
                  <h4 className="text-white font-bold mb-2">4. CTA Section</h4>
                  <ul className="text-brand-muted text-sm space-y-1">
                    <li>• "Not sure if we cover your area? Call us."</li>
                    <li>• Phone number + contact link</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* General Notes */}
          <section className="reveal">
            <div className="bg-brand-surface/30 border border-brand-accent/30 rounded-xl p-6">
              <h2 className="text-xl font-display font-bold text-white mb-4 uppercase">General Build Notes</h2>

              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="text-brand-accent font-bold mb-2">Content Length</h3>
                  <ul className="text-brand-muted space-y-1">
                    <li>• Headlines: 5-10 words</li>
                    <li>• Subheadlines: 10-20 words</li>
                    <li>• Body paragraphs: 2-3 sentences max</li>
                    <li>• Service descriptions: 2-3 sentences</li>
                    <li>• About page total: 200-400 words</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-brand-accent font-bold mb-2">Mobile Requirements</h3>
                  <ul className="text-brand-muted space-y-1">
                    <li>• Phone number always clickable (tel: link)</li>
                    <li>• CTA buttons full-width</li>
                    <li>• No horizontal scrolling</li>
                    <li>• Form fields large enough for thumbs</li>
                    <li>• Consider sticky phone button on long pages</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-brand-accent font-bold mb-2">SEO Basics</h3>
                  <ul className="text-brand-muted space-y-1">
                    <li>• Page title: [Service] + [Location] + [Business Name]</li>
                    <li>• H1: One per page, include primary keyword</li>
                    <li>• Meta description: 150-160 characters with location</li>
                    <li>• Image alt text: Describe the image + location</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-brand-accent font-bold mb-2">Do Not Include</h3>
                  <ul className="text-brand-muted space-y-1">
                    <li>• Pricing (unless explicitly requested)</li>
                    <li>• Fake testimonials</li>
                    <li>• Stock photos of people (use job photos or abstract)</li>
                    <li>• Social feeds</li>
                    <li>• Blog sections</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
    </PasswordProtect>
  );
};

export default InternalBuildGuidePage;
