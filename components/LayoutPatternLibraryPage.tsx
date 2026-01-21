import React from 'react';
import { FileText, Home, Briefcase, Users, Phone, Image, Layout } from 'lucide-react';
import PasswordProtect from './PasswordProtect';

const LayoutPatternLibraryPage: React.FC = () => {
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
              Layout <span className="text-brand-accent">Pattern Library</span>
            </h1>
            <p className="text-brand-muted text-base leading-relaxed mb-4">
              Approved layout patterns for Express Build sites. Choose one pattern per section.
              All patterns are mobile-first and conversion-focused.
            </p>
            <a href="/tradie/build-guide" className="text-brand-accent text-sm hover:underline">
              ← Back to Page Templates
            </a>
          </div>

          {/* Table of Contents */}
          <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-6 mb-12 reveal">
            <h2 className="text-lg font-display font-bold text-white mb-4 uppercase">Sections</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
              <a href="#home-patterns" className="flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors">
                <Home size={16} /> Home
              </a>
              <a href="#services-patterns" className="flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors">
                <Briefcase size={16} /> Services
              </a>
              <a href="#about-patterns" className="flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors">
                <Users size={16} /> About
              </a>
              <a href="#contact-patterns" className="flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors">
                <Phone size={16} /> Contact
              </a>
              <a href="#additional-patterns" className="flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors">
                <Image size={16} /> Additional
              </a>
            </div>
          </div>

          {/* ======================= */}
          {/* HOME PAGE PATTERNS */}
          {/* ======================= */}
          <section id="home-patterns" className="mb-16 reveal">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center">
                <Home size={20} />
              </div>
              <h2 className="text-2xl font-display font-bold text-white uppercase">Home Page Patterns</h2>
            </div>

            {/* Hero Section */}
            <div className="mb-10">
              <h3 className="text-lg font-display font-bold text-brand-accent mb-4 uppercase">Hero Section</h3>

              <div className="space-y-4">
                {/* Pattern 1 */}
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern A: Centred Stack</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">All content centred. Headline, subheadline, CTA button stacked vertically. Full-width background image or solid colour behind.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Same structure, scales down. CTA becomes full-width button.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">No hero image available, or image is used as background. Clean, simple trades.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-4 aspect-[16/9] flex flex-col items-center justify-center gap-2">
                          <div className="w-3/4 h-4 bg-white/20 rounded"></div>
                          <div className="w-1/2 h-3 bg-white/10 rounded"></div>
                          <div className="w-24 h-6 bg-brand-accent/30 rounded mt-2"></div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16] flex flex-col items-center justify-center gap-1">
                          <div className="w-full h-3 bg-white/20 rounded"></div>
                          <div className="w-3/4 h-2 bg-white/10 rounded"></div>
                          <div className="w-full h-5 bg-brand-accent/30 rounded mt-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pattern 2 */}
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern B: Split (Text Left, Image Right)</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">Two columns. Left column: headline, subheadline, CTA. Right column: hero image. 50/50 or 60/40 split.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Stacks vertically. Text first, image below. Image may crop or reduce in height.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">Strong hero image available (job photo, van, team). Visual-first trades.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/9] flex gap-3">
                          <div className="flex-1 flex flex-col justify-center gap-2">
                            <div className="w-full h-4 bg-white/20 rounded"></div>
                            <div className="w-3/4 h-3 bg-white/10 rounded"></div>
                            <div className="w-20 h-5 bg-brand-accent/30 rounded mt-1"></div>
                          </div>
                          <div className="w-1/2 bg-blue-500/20 rounded flex items-center justify-center">
                            <span className="text-[8px] text-blue-400/60">IMAGE</span>
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16] flex flex-col gap-2">
                          <div className="flex flex-col gap-1">
                            <div className="w-full h-3 bg-white/20 rounded"></div>
                            <div className="w-3/4 h-2 bg-white/10 rounded"></div>
                            <div className="w-full h-4 bg-brand-accent/30 rounded mt-1"></div>
                          </div>
                          <div className="flex-1 bg-blue-500/20 rounded flex items-center justify-center">
                            <span className="text-[6px] text-blue-400/60">IMG</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pattern 3 */}
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern C: Overlay</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">Full-width background image with dark overlay. Text content centred or left-aligned on top of overlay.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Same structure. Image may be cropped differently for vertical orientation.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">High-quality wide image available. Creates bold first impression.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="relative bg-blue-500/20 border border-brand-border/20 rounded aspect-[16/9] overflow-hidden">
                          <div className="absolute inset-0 bg-brand-black/60"></div>
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                            <div className="w-3/4 h-4 bg-white/30 rounded"></div>
                            <div className="w-1/2 h-3 bg-white/20 rounded"></div>
                            <div className="w-24 h-6 bg-brand-accent/40 rounded mt-2"></div>
                          </div>
                          <span className="absolute bottom-1 right-2 text-[6px] text-blue-400/40">BG IMAGE</span>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="relative bg-blue-500/20 border border-brand-border/20 rounded aspect-[9/16] overflow-hidden">
                          <div className="absolute inset-0 bg-brand-black/60"></div>
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-2">
                            <div className="w-full h-3 bg-white/30 rounded"></div>
                            <div className="w-3/4 h-2 bg-white/20 rounded"></div>
                            <div className="w-full h-5 bg-brand-accent/40 rounded mt-2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Summary */}
            <div className="mb-10">
              <h3 className="text-lg font-display font-bold text-brand-accent mb-4 uppercase">Services Summary</h3>

              <div className="space-y-4">
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern A: Icon Card Grid</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">3 or 4 cards in a row. Each card: icon top, title, short description. Cards equal width.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Single column stack. Each card full width.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">3-4 primary services to highlight. Default choice.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/7]">
                          <div className="grid grid-cols-3 gap-2 h-full">
                            {[1,2,3].map(i => (
                              <div key={i} className="bg-brand-surface/30 rounded p-2 flex flex-col items-center gap-1">
                                <div className="w-4 h-4 bg-brand-accent/30 rounded"></div>
                                <div className="w-3/4 h-2 bg-white/20 rounded"></div>
                                <div className="w-full h-1 bg-white/10 rounded"></div>
                                <div className="w-2/3 h-1 bg-white/10 rounded"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16] flex flex-col gap-1">
                          {[1,2,3].map(i => (
                            <div key={i} className="bg-brand-surface/30 rounded p-1 flex flex-col items-center gap-0.5">
                              <div className="w-3 h-3 bg-brand-accent/30 rounded"></div>
                              <div className="w-3/4 h-1.5 bg-white/20 rounded"></div>
                              <div className="w-full h-1 bg-white/10 rounded"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern B: Horizontal List</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">Each service as a horizontal row. Icon left, title and description right. Stacked vertically.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Same structure, slightly tighter spacing.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">More than 4 services to show. Longer descriptions needed.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/9]">
                          <div className="flex flex-col gap-2 h-full justify-center">
                            {[1,2,3,4].map(i => (
                              <div key={i} className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-brand-accent/30 rounded shrink-0"></div>
                                <div className="flex-1 flex flex-col gap-0.5">
                                  <div className="w-1/4 h-2 bg-white/20 rounded"></div>
                                  <div className="w-2/3 h-1.5 bg-white/10 rounded"></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16] flex flex-col gap-1.5 justify-center">
                          {[1,2,3,4].map(i => (
                            <div key={i} className="flex items-center gap-1">
                              <div className="w-4 h-4 bg-brand-accent/30 rounded shrink-0"></div>
                              <div className="flex-1 flex flex-col gap-0.5">
                                <div className="w-1/2 h-1.5 bg-white/20 rounded"></div>
                                <div className="w-full h-1 bg-white/10 rounded"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mb-10">
              <h3 className="text-lg font-display font-bold text-brand-accent mb-4 uppercase">Trust Indicators</h3>

              <div className="space-y-4">
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern A: Stat Bar</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">Single horizontal bar. 3-4 stats side by side. Large number/icon above, label below.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">2x2 grid or horizontal scroll.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">Numeric stats available (years, jobs completed, etc.). Default choice.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/5]">
                          <div className="flex justify-center gap-6 h-full items-center">
                            {[1,2,3,4].map(i => (
                              <div key={i} className="flex flex-col items-center gap-1">
                                <div className="w-8 h-4 bg-brand-accent/40 rounded text-center text-[6px] text-brand-accent/60 leading-4">15+</div>
                                <div className="w-10 h-1.5 bg-white/10 rounded"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/10]">
                          <div className="grid grid-cols-2 gap-2 h-full">
                            {[1,2,3,4].map(i => (
                              <div key={i} className="flex flex-col items-center justify-center gap-0.5">
                                <div className="w-5 h-3 bg-brand-accent/40 rounded"></div>
                                <div className="w-full h-1 bg-white/10 rounded"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern B: Badge Row</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">Horizontal row of badge-style items. Icon + short label inline. Centred or left-aligned.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Wraps to multiple rows or becomes vertical list.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">Text-based credentials (Licensed, Insured, Local). No strong numbers.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/4]">
                          <div className="flex justify-center gap-3 h-full items-center">
                            {[1,2,3].map(i => (
                              <div key={i} className="flex items-center gap-1 bg-brand-surface/30 rounded-full px-2 py-1">
                                <div className="w-2 h-2 bg-brand-accent/40 rounded-full"></div>
                                <div className="w-8 h-1.5 bg-white/20 rounded"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/10]">
                          <div className="flex flex-col gap-1.5 h-full justify-center">
                            {[1,2,3].map(i => (
                              <div key={i} className="flex items-center gap-1 bg-brand-surface/30 rounded-full px-1.5 py-0.5">
                                <div className="w-2 h-2 bg-brand-accent/40 rounded-full"></div>
                                <div className="flex-1 h-1 bg-white/20 rounded"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-10">
              <h3 className="text-lg font-display font-bold text-brand-accent mb-4 uppercase">Why Choose Us</h3>

              <div className="space-y-4">
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern A: Three Column Cards</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">3 cards in a row. Each card: icon, heading, 1-2 sentence description. Equal height cards.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Single column stack.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">Exactly 3 differentiators. Default choice.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/7]">
                          <div className="grid grid-cols-3 gap-2 h-full">
                            {[1,2,3].map(i => (
                              <div key={i} className="bg-brand-surface/30 rounded p-2 flex flex-col gap-1">
                                <div className="w-5 h-5 bg-brand-accent/30 rounded"></div>
                                <div className="w-3/4 h-2 bg-white/20 rounded"></div>
                                <div className="w-full h-1 bg-white/10 rounded"></div>
                                <div className="w-full h-1 bg-white/10 rounded"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16] flex flex-col gap-1">
                          {[1,2,3].map(i => (
                            <div key={i} className="bg-brand-surface/30 rounded p-1.5 flex flex-col gap-0.5">
                              <div className="w-3 h-3 bg-brand-accent/30 rounded"></div>
                              <div className="w-3/4 h-1.5 bg-white/20 rounded"></div>
                              <div className="w-full h-1 bg-white/10 rounded"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern B: Checklist</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">Vertical list with checkmark icons. Each item: icon + single line of text. Contained width, centred.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Same structure, full width.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">More than 3 points. Short, punchy statements.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/9]">
                          <div className="flex flex-col gap-2 h-full justify-center items-center">
                            {[1,2,3,4,5].map(i => (
                              <div key={i} className="flex items-center gap-2 w-2/3">
                                <div className="w-3 h-3 bg-brand-accent/40 rounded-full shrink-0 flex items-center justify-center">
                                  <div className="w-1.5 h-1 bg-brand-accent/60"></div>
                                </div>
                                <div className="flex-1 h-2 bg-white/15 rounded"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16] flex flex-col gap-1.5 justify-center">
                          {[1,2,3,4,5].map(i => (
                            <div key={i} className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-brand-accent/40 rounded-full shrink-0"></div>
                              <div className="flex-1 h-1.5 bg-white/15 rounded"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mb-10">
              <h3 className="text-lg font-display font-bold text-brand-accent mb-4 uppercase">Bottom CTA</h3>

              <div className="space-y-4">
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern A: Centred Banner</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">Full-width background block. Centred content: headline, subtext, CTA button. Phone number visible.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Same structure. Button full-width.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">Default choice. Works universally.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-surface/40 border border-brand-border/20 rounded p-4 aspect-[16/6]">
                          <div className="flex flex-col items-center justify-center h-full gap-2">
                            <div className="w-2/3 h-4 bg-white/20 rounded"></div>
                            <div className="w-1/3 h-2 bg-white/10 rounded"></div>
                            <div className="w-24 h-6 bg-brand-accent/40 rounded mt-1"></div>
                            <div className="w-20 h-2 bg-white/10 rounded mt-1"></div>
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-surface/40 border border-brand-border/20 rounded p-2 aspect-[9/12]">
                          <div className="flex flex-col items-center justify-center h-full gap-1">
                            <div className="w-full h-3 bg-white/20 rounded"></div>
                            <div className="w-3/4 h-2 bg-white/10 rounded"></div>
                            <div className="w-full h-5 bg-brand-accent/40 rounded mt-1"></div>
                            <div className="w-2/3 h-1.5 bg-white/10 rounded mt-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern B: Split with Contact Info</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">Two columns. Left: headline and CTA button. Right: phone, email, hours stacked.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Stacks vertically. CTA section first, contact details below.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">Multiple contact methods to show. Phone-heavy businesses.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-surface/40 border border-brand-border/20 rounded p-4 aspect-[16/6]">
                          <div className="flex h-full gap-4">
                            <div className="flex-1 flex flex-col justify-center gap-2">
                              <div className="w-3/4 h-4 bg-white/20 rounded"></div>
                              <div className="w-1/2 h-2 bg-white/10 rounded"></div>
                              <div className="w-20 h-5 bg-brand-accent/40 rounded mt-1"></div>
                            </div>
                            <div className="w-1/3 flex flex-col justify-center gap-2 border-l border-white/10 pl-4">
                              <div className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-brand-accent/30 rounded"></div>
                                <div className="flex-1 h-2 bg-white/15 rounded"></div>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-brand-accent/30 rounded"></div>
                                <div className="flex-1 h-2 bg-white/15 rounded"></div>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-brand-accent/30 rounded"></div>
                                <div className="flex-1 h-2 bg-white/15 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-surface/40 border border-brand-border/20 rounded p-2 aspect-[9/16]">
                          <div className="flex flex-col h-full gap-2">
                            <div className="flex flex-col gap-1">
                              <div className="w-full h-3 bg-white/20 rounded"></div>
                              <div className="w-3/4 h-2 bg-white/10 rounded"></div>
                              <div className="w-full h-5 bg-brand-accent/40 rounded mt-1"></div>
                            </div>
                            <div className="border-t border-white/10 pt-2 flex flex-col gap-1">
                              {[1,2,3].map(i => (
                                <div key={i} className="flex items-center gap-1">
                                  <div className="w-2 h-2 bg-brand-accent/30 rounded"></div>
                                  <div className="flex-1 h-1.5 bg-white/15 rounded"></div>
                                </div>
                              ))}
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

          {/* ======================= */}
          {/* SERVICES PAGE PATTERNS */}
          {/* ======================= */}
          <section id="services-patterns" className="mb-16 reveal">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center">
                <Briefcase size={20} />
              </div>
              <h2 className="text-2xl font-display font-bold text-white uppercase">Services Page Patterns</h2>
            </div>

            {/* Service List */}
            <div className="mb-10">
              <h3 className="text-lg font-display font-bold text-brand-accent mb-4 uppercase">Service List</h3>

              <div className="space-y-4">
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern A: Card Grid</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">2 or 3 column grid of cards. Each card: icon, title, description. All cards equal height.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Single column stack.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">6-12 services. Visual balance important. Default choice.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/10]">
                          <div className="grid grid-cols-3 gap-2 h-full">
                            {[1,2,3,4,5,6].map(i => (
                              <div key={i} className="bg-brand-surface/30 rounded p-1.5 flex flex-col gap-0.5">
                                <div className="w-4 h-4 bg-brand-accent/30 rounded"></div>
                                <div className="w-3/4 h-1.5 bg-white/20 rounded"></div>
                                <div className="w-full h-1 bg-white/10 rounded"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16] flex flex-col gap-1 overflow-hidden">
                          {[1,2,3,4].map(i => (
                            <div key={i} className="bg-brand-surface/30 rounded p-1 flex flex-col gap-0.5 shrink-0">
                              <div className="w-3 h-3 bg-brand-accent/30 rounded"></div>
                              <div className="w-3/4 h-1 bg-white/20 rounded"></div>
                              <div className="w-full h-0.5 bg-white/10 rounded"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern B: Grouped Sections</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">Services grouped by category. Category heading, then list of services below. Categories stacked vertically.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Same structure. Categories may be collapsible.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">Clear service categories exist. More than 8 services.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/10]">
                          <div className="flex flex-col gap-3 h-full">
                            {[1,2].map(g => (
                              <div key={g} className="flex-1">
                                <div className="w-1/4 h-2 bg-brand-accent/30 rounded mb-1.5"></div>
                                <div className="grid grid-cols-2 gap-1.5 h-[calc(100%-12px)]">
                                  {[1,2,3,4].map(i => (
                                    <div key={i} className="bg-brand-surface/30 rounded p-1 flex items-center gap-1">
                                      <div className="w-2 h-2 bg-white/20 rounded shrink-0"></div>
                                      <div className="flex-1 h-1 bg-white/10 rounded"></div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16] flex flex-col gap-2">
                          {[1,2].map(g => (
                            <div key={g} className="flex-1">
                              <div className="w-1/2 h-1.5 bg-brand-accent/30 rounded mb-1"></div>
                              <div className="flex flex-col gap-1">
                                {[1,2,3].map(i => (
                                  <div key={i} className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-white/20 rounded shrink-0"></div>
                                    <div className="flex-1 h-1 bg-white/10 rounded"></div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Overview */}
            <div className="mb-10">
              <h3 className="text-lg font-display font-bold text-brand-accent mb-4 uppercase">Process Overview</h3>

              <div className="space-y-4">
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern A: Numbered Steps (Horizontal)</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">3-4 steps in a horizontal row. Each step: number/icon, title, brief description. Connected by line or arrows.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Vertical stack with connecting line on left side.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">Simple 3-4 step process. Default choice.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/6]">
                          <div className="flex items-center justify-center h-full gap-2">
                            {[1,2,3,4].map((n, i) => (
                              <React.Fragment key={n}>
                                <div className="flex flex-col items-center gap-1">
                                  <div className="w-6 h-6 bg-brand-accent/40 rounded-full flex items-center justify-center text-[8px] text-brand-accent font-bold">{n}</div>
                                  <div className="w-10 h-1.5 bg-white/20 rounded"></div>
                                  <div className="w-8 h-1 bg-white/10 rounded"></div>
                                </div>
                                {i < 3 && <div className="w-6 h-0.5 bg-brand-accent/20"></div>}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16]">
                          <div className="flex h-full">
                            <div className="w-0.5 bg-brand-accent/20 ml-2 mr-2"></div>
                            <div className="flex-1 flex flex-col justify-center gap-2">
                              {[1,2,3,4].map(n => (
                                <div key={n} className="flex items-center gap-1">
                                  <div className="w-4 h-4 bg-brand-accent/40 rounded-full flex items-center justify-center text-[6px] text-brand-accent font-bold -ml-[11px]">{n}</div>
                                  <div className="flex flex-col gap-0.5">
                                    <div className="w-10 h-1 bg-white/20 rounded"></div>
                                    <div className="w-8 h-0.5 bg-white/10 rounded"></div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern B: Timeline (Vertical)</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">Vertical timeline with alternating left/right content. Line down centre, steps on either side.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Single column with line on left. All content on right.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">More detailed process. 4+ steps with longer descriptions.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/10]">
                          <div className="flex flex-col h-full relative">
                            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-accent/20 -translate-x-1/2"></div>
                            {[1,2,3,4].map((n, i) => (
                              <div key={n} className={`flex items-center flex-1 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                <div className={`flex-1 flex ${i % 2 === 0 ? 'justify-end pr-3' : 'justify-start pl-3'}`}>
                                  <div className="bg-brand-surface/30 rounded p-1 w-2/3">
                                    <div className="w-full h-1.5 bg-white/20 rounded mb-0.5"></div>
                                    <div className="w-3/4 h-1 bg-white/10 rounded"></div>
                                  </div>
                                </div>
                                <div className="w-4 h-4 bg-brand-accent/40 rounded-full z-10 flex items-center justify-center text-[6px] text-brand-accent font-bold">{n}</div>
                                <div className="flex-1"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16]">
                          <div className="flex h-full">
                            <div className="w-0.5 bg-brand-accent/20 ml-2 mr-2"></div>
                            <div className="flex-1 flex flex-col justify-center gap-2">
                              {[1,2,3,4].map(n => (
                                <div key={n} className="flex items-start gap-1">
                                  <div className="w-3 h-3 bg-brand-accent/40 rounded-full flex items-center justify-center text-[5px] text-brand-accent font-bold -ml-[9px] shrink-0 mt-0.5">{n}</div>
                                  <div className="flex flex-col gap-0.5">
                                    <div className="w-12 h-1 bg-white/20 rounded"></div>
                                    <div className="w-10 h-0.5 bg-white/10 rounded"></div>
                                    <div className="w-8 h-0.5 bg-white/10 rounded"></div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mb-10">
              <h3 className="text-lg font-display font-bold text-brand-accent mb-4 uppercase">CTA Section</h3>

              <div className="space-y-4">
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern: Simple Banner</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">Contained width block. Centred headline, supporting text, CTA button. Phone number inline or below.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Same structure. Button full-width.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">Always. Consistent CTA across service pages.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-4 aspect-[16/5]">
                          <div className="flex flex-col items-center justify-center h-full gap-2 max-w-[60%] mx-auto">
                            <div className="w-3/4 h-3 bg-white/20 rounded"></div>
                            <div className="w-1/2 h-2 bg-white/10 rounded"></div>
                            <div className="w-20 h-5 bg-brand-accent/40 rounded mt-1"></div>
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/10]">
                          <div className="flex flex-col items-center justify-center h-full gap-1">
                            <div className="w-full h-2.5 bg-white/20 rounded"></div>
                            <div className="w-3/4 h-1.5 bg-white/10 rounded"></div>
                            <div className="w-full h-5 bg-brand-accent/40 rounded mt-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ======================= */}
          {/* ABOUT PAGE PATTERNS */}
          {/* ======================= */}
          <section id="about-patterns" className="mb-16 reveal">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center">
                <Users size={20} />
              </div>
              <h2 className="text-2xl font-display font-bold text-white uppercase">About Page Patterns</h2>
            </div>

            {/* Business Story */}
            <div className="mb-10">
              <h3 className="text-lg font-display font-bold text-brand-accent mb-4 uppercase">Business Story</h3>

              <div className="space-y-4">
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern A: Text Block</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">Contained width text block. Heading, 2-3 paragraphs. Centred or left-aligned. Max width for readability.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Full width with padding. Same structure.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">No team photo available. Text-focused story.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-4 aspect-[16/9]">
                          <div className="max-w-[60%] mx-auto flex flex-col gap-2">
                            <div className="w-1/2 h-3 bg-white/20 rounded"></div>
                            <div className="space-y-1">
                              <div className="w-full h-1.5 bg-white/10 rounded"></div>
                              <div className="w-full h-1.5 bg-white/10 rounded"></div>
                              <div className="w-3/4 h-1.5 bg-white/10 rounded"></div>
                            </div>
                            <div className="space-y-1 mt-1">
                              <div className="w-full h-1.5 bg-white/10 rounded"></div>
                              <div className="w-full h-1.5 bg-white/10 rounded"></div>
                              <div className="w-1/2 h-1.5 bg-white/10 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16] flex flex-col gap-1.5">
                          <div className="w-2/3 h-2 bg-white/20 rounded"></div>
                          <div className="space-y-0.5">
                            <div className="w-full h-1 bg-white/10 rounded"></div>
                            <div className="w-full h-1 bg-white/10 rounded"></div>
                            <div className="w-3/4 h-1 bg-white/10 rounded"></div>
                          </div>
                          <div className="space-y-0.5 mt-1">
                            <div className="w-full h-1 bg-white/10 rounded"></div>
                            <div className="w-full h-1 bg-white/10 rounded"></div>
                            <div className="w-1/2 h-1 bg-white/10 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern B: Split with Image</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">Two columns. Text on one side, image on other. 50/50 or 60/40 split.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Stacks vertically. Image above or below text.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">Team photo, van photo, or job site image available.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/8]">
                          <div className="flex h-full gap-3">
                            <div className="flex-1 flex flex-col justify-center gap-2">
                              <div className="w-2/3 h-3 bg-white/20 rounded"></div>
                              <div className="space-y-1">
                                <div className="w-full h-1.5 bg-white/10 rounded"></div>
                                <div className="w-full h-1.5 bg-white/10 rounded"></div>
                                <div className="w-3/4 h-1.5 bg-white/10 rounded"></div>
                              </div>
                            </div>
                            <div className="w-2/5 bg-blue-500/20 rounded flex items-center justify-center">
                              <span className="text-[8px] text-blue-400/60">IMAGE</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16] flex flex-col gap-2">
                          <div className="h-1/3 bg-blue-500/20 rounded flex items-center justify-center">
                            <span className="text-[6px] text-blue-400/60">IMG</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="w-2/3 h-2 bg-white/20 rounded"></div>
                            <div className="space-y-0.5">
                              <div className="w-full h-1 bg-white/10 rounded"></div>
                              <div className="w-full h-1 bg-white/10 rounded"></div>
                              <div className="w-3/4 h-1 bg-white/10 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-10">
              <h3 className="text-lg font-display font-bold text-brand-accent mb-4 uppercase">Team / Owner Section</h3>

              <div className="space-y-4">
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern A: Single Owner Card</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">Horizontal card. Photo on left, name/role/bio on right. Centred in page.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Stacks vertically. Photo above, text below.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">Single owner/operator. Owner photo available.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-4 aspect-[16/7]">
                          <div className="max-w-[70%] mx-auto h-full">
                            <div className="bg-brand-surface/30 rounded p-3 h-full flex gap-3">
                              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                                <span className="text-[6px] text-blue-400/60">PHOTO</span>
                              </div>
                              <div className="flex-1 flex flex-col justify-center gap-1">
                                <div className="w-1/3 h-2.5 bg-white/20 rounded"></div>
                                <div className="w-1/4 h-1.5 bg-brand-accent/30 rounded"></div>
                                <div className="space-y-0.5 mt-1">
                                  <div className="w-full h-1 bg-white/10 rounded"></div>
                                  <div className="w-3/4 h-1 bg-white/10 rounded"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/14]">
                          <div className="bg-brand-surface/30 rounded p-2 h-full flex flex-col items-center gap-1.5">
                            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                              <span className="text-[5px] text-blue-400/60">PHOTO</span>
                            </div>
                            <div className="w-2/3 h-1.5 bg-white/20 rounded"></div>
                            <div className="w-1/2 h-1 bg-brand-accent/30 rounded"></div>
                            <div className="w-full space-y-0.5 mt-0.5">
                              <div className="w-full h-0.5 bg-white/10 rounded"></div>
                              <div className="w-full h-0.5 bg-white/10 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern B: Team Grid</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">2-3 column grid. Each person: photo, name, role. Brief bio optional.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Single column or 2-column grid with smaller photos.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">2-4 team members to feature. Multiple photos available.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/8]">
                          <div className="grid grid-cols-3 gap-2 h-full">
                            {[1,2,3].map(i => (
                              <div key={i} className="bg-brand-surface/30 rounded p-2 flex flex-col items-center gap-1">
                                <div className="w-8 h-8 bg-blue-500/20 rounded-full"></div>
                                <div className="w-3/4 h-1.5 bg-white/20 rounded"></div>
                                <div className="w-1/2 h-1 bg-brand-accent/30 rounded"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16]">
                          <div className="grid grid-cols-2 gap-1 h-full">
                            {[1,2,3,4].map(i => (
                              <div key={i} className="bg-brand-surface/30 rounded p-1 flex flex-col items-center gap-0.5">
                                <div className="w-5 h-5 bg-blue-500/20 rounded-full"></div>
                                <div className="w-3/4 h-1 bg-white/20 rounded"></div>
                                <div className="w-1/2 h-0.5 bg-brand-accent/30 rounded"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials */}
            <div className="mb-10">
              <h3 className="text-lg font-display font-bold text-brand-accent mb-4 uppercase">Credentials</h3>

              <div className="space-y-4">
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern: Icon List</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">Vertical list or 2-column grid. Each item: icon/badge, credential name, detail (licence number, etc.).</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Single column list.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">Always include if credentials exist. Standard pattern.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/7]">
                          <div className="grid grid-cols-2 gap-2 h-full max-w-[80%] mx-auto">
                            {[1,2,3,4].map(i => (
                              <div key={i} className="flex items-center gap-2 bg-brand-surface/20 rounded p-2">
                                <div className="w-6 h-6 bg-brand-accent/30 rounded flex items-center justify-center shrink-0">
                                  <div className="w-3 h-3 bg-brand-accent/40 rounded-sm"></div>
                                </div>
                                <div className="flex-1 flex flex-col gap-0.5">
                                  <div className="w-3/4 h-1.5 bg-white/20 rounded"></div>
                                  <div className="w-1/2 h-1 bg-white/10 rounded"></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/14]">
                          <div className="flex flex-col gap-1.5 h-full justify-center">
                            {[1,2,3].map(i => (
                              <div key={i} className="flex items-center gap-1.5 bg-brand-surface/20 rounded p-1.5">
                                <div className="w-4 h-4 bg-brand-accent/30 rounded flex items-center justify-center shrink-0">
                                  <div className="w-2 h-2 bg-brand-accent/40 rounded-sm"></div>
                                </div>
                                <div className="flex-1 flex flex-col gap-0.5">
                                  <div className="w-3/4 h-1 bg-white/20 rounded"></div>
                                  <div className="w-1/2 h-0.5 bg-white/10 rounded"></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ======================= */}
          {/* CONTACT PAGE PATTERNS */}
          {/* ======================= */}
          <section id="contact-patterns" className="mb-16 reveal">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center">
                <Phone size={20} />
              </div>
              <h2 className="text-2xl font-display font-bold text-white uppercase">Contact Page Patterns</h2>
            </div>

            {/* Contact Methods */}
            <div className="mb-10">
              <h3 className="text-lg font-display font-bold text-brand-accent mb-4 uppercase">Contact Methods</h3>

              <div className="space-y-4">
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern A: Stacked Cards</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">3 cards in a row. Phone card, email card, hours/location card. Each with icon and details.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Single column. Phone card first (most important).</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">Multiple contact methods. Visual emphasis on each.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/6]">
                          <div className="grid grid-cols-3 gap-2 h-full">
                            {['Phone', 'Email', 'Hours'].map(label => (
                              <div key={label} className="bg-brand-surface/30 rounded p-2 flex flex-col items-center justify-center gap-1">
                                <div className="w-6 h-6 bg-brand-accent/30 rounded-full"></div>
                                <div className="w-3/4 h-2 bg-white/20 rounded"></div>
                                <div className="w-1/2 h-1.5 bg-white/10 rounded"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16] flex flex-col gap-1.5 justify-center">
                          {[1,2,3].map(i => (
                            <div key={i} className="bg-brand-surface/30 rounded p-1.5 flex items-center gap-1.5">
                              <div className="w-4 h-4 bg-brand-accent/30 rounded-full shrink-0"></div>
                              <div className="flex-1 flex flex-col gap-0.5">
                                <div className="w-3/4 h-1.5 bg-white/20 rounded"></div>
                                <div className="w-1/2 h-1 bg-white/10 rounded"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern B: Sidebar List</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">Two columns. Left: contact form. Right: contact details stacked vertically (phone, email, hours, location).</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Contact details first, form below. Or form first with contact details at bottom.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">Form is primary action. Clean layout preferred.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/9]">
                          <div className="flex h-full gap-3">
                            <div className="flex-1 bg-brand-surface/20 rounded p-2 flex flex-col gap-1.5">
                              <div className="w-1/3 h-2 bg-white/20 rounded"></div>
                              <div className="flex gap-1">
                                <div className="flex-1 h-4 bg-white/5 rounded border border-white/10"></div>
                                <div className="flex-1 h-4 bg-white/5 rounded border border-white/10"></div>
                              </div>
                              <div className="w-full h-4 bg-white/5 rounded border border-white/10"></div>
                              <div className="w-full flex-1 bg-white/5 rounded border border-white/10"></div>
                              <div className="w-1/3 h-4 bg-brand-accent/40 rounded"></div>
                            </div>
                            <div className="w-1/3 flex flex-col gap-2 justify-center">
                              {[1,2,3].map(i => (
                                <div key={i} className="flex items-center gap-1">
                                  <div className="w-3 h-3 bg-brand-accent/30 rounded shrink-0"></div>
                                  <div className="flex-1 h-1.5 bg-white/15 rounded"></div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16] flex flex-col gap-2">
                          <div className="flex flex-col gap-1">
                            {[1,2,3].map(i => (
                              <div key={i} className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-brand-accent/30 rounded shrink-0"></div>
                                <div className="flex-1 h-1 bg-white/15 rounded"></div>
                              </div>
                            ))}
                          </div>
                          <div className="flex-1 bg-brand-surface/20 rounded p-1.5 flex flex-col gap-1">
                            <div className="w-full h-3 bg-white/5 rounded border border-white/10"></div>
                            <div className="w-full h-3 bg-white/5 rounded border border-white/10"></div>
                            <div className="w-full flex-1 bg-white/5 rounded border border-white/10"></div>
                            <div className="w-full h-4 bg-brand-accent/40 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mb-10">
              <h3 className="text-lg font-display font-bold text-brand-accent mb-4 uppercase">Contact Form</h3>

              <div className="space-y-4">
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern: Standard Form</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">Single column form. Name and phone on same row (2-col). Email full width. Message area. Submit button.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">All fields single column. Large touch targets. Button full-width.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">Always. Standard form layout for all builds.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-4 aspect-[16/10]">
                          <div className="max-w-[70%] mx-auto flex flex-col gap-2 h-full">
                            <div className="flex gap-2">
                              <div className="flex-1 flex flex-col gap-0.5">
                                <div className="w-1/3 h-1.5 bg-white/10 rounded"></div>
                                <div className="w-full h-5 bg-white/5 rounded border border-white/10"></div>
                              </div>
                              <div className="flex-1 flex flex-col gap-0.5">
                                <div className="w-1/3 h-1.5 bg-white/10 rounded"></div>
                                <div className="w-full h-5 bg-white/5 rounded border border-white/10"></div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <div className="w-1/6 h-1.5 bg-white/10 rounded"></div>
                              <div className="w-full h-5 bg-white/5 rounded border border-white/10"></div>
                            </div>
                            <div className="flex flex-col gap-0.5 flex-1">
                              <div className="w-1/6 h-1.5 bg-white/10 rounded"></div>
                              <div className="w-full flex-1 bg-white/5 rounded border border-white/10"></div>
                            </div>
                            <div className="w-1/4 h-6 bg-brand-accent/40 rounded"></div>
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16] flex flex-col gap-1.5">
                          {['Name', 'Phone', 'Email'].map(f => (
                            <div key={f} className="flex flex-col gap-0.5">
                              <div className="w-1/3 h-1 bg-white/10 rounded"></div>
                              <div className="w-full h-4 bg-white/5 rounded border border-white/10"></div>
                            </div>
                          ))}
                          <div className="flex flex-col gap-0.5 flex-1">
                            <div className="w-1/3 h-1 bg-white/10 rounded"></div>
                            <div className="w-full flex-1 bg-white/5 rounded border border-white/10"></div>
                          </div>
                          <div className="w-full h-5 bg-brand-accent/40 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reassurance Section */}
            <div className="mb-10">
              <h3 className="text-lg font-display font-bold text-brand-accent mb-4 uppercase">Reassurance Section</h3>

              <div className="space-y-4">
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern: Inline Badges</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">Horizontal row of small badges/icons below or near form. "Free quotes", "No obligation", "Fast response".</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Wraps to 2 rows or becomes vertical list.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">Always. Reduces friction near form submission.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/4]">
                          <div className="flex justify-center gap-4 h-full items-center">
                            {[1,2,3].map(i => (
                              <div key={i} className="flex items-center gap-1.5">
                                <div className="w-4 h-4 bg-brand-accent/30 rounded-full flex items-center justify-center">
                                  <div className="w-2 h-1.5 bg-brand-accent/50"></div>
                                </div>
                                <div className="w-14 h-2 bg-white/15 rounded"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/8]">
                          <div className="flex flex-wrap gap-1.5 justify-center h-full items-center">
                            {[1,2,3].map(i => (
                              <div key={i} className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-brand-accent/30 rounded-full"></div>
                                <div className="w-10 h-1.5 bg-white/15 rounded"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ======================= */}
          {/* ADDITIONAL PAGE PATTERNS */}
          {/* ======================= */}
          <section id="additional-patterns" className="mb-16 reveal">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center">
                <Image size={20} />
              </div>
              <h2 className="text-2xl font-display font-bold text-white uppercase">Additional Page Patterns</h2>
            </div>

            {/* Gallery Layouts */}
            <div className="mb-10">
              <h3 className="text-lg font-display font-bold text-brand-accent mb-4 uppercase">Gallery Layouts</h3>

              <div className="space-y-4">
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern A: Uniform Grid</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">3-column grid. All images same size (cropped to square or 4:3). Click to expand in lightbox.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">2-column grid. Same aspect ratio maintained.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">6-12 photos of similar quality. Clean, organised look. Default choice.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/10]">
                          <div className="grid grid-cols-3 gap-1.5 h-full">
                            {[1,2,3,4,5,6,7,8,9].map(i => (
                              <div key={i} className="bg-blue-500/20 rounded aspect-square flex items-center justify-center">
                                <span className="text-[5px] text-blue-400/40">IMG</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16]">
                          <div className="grid grid-cols-2 gap-1 h-full">
                            {[1,2,3,4,5,6].map(i => (
                              <div key={i} className="bg-blue-500/20 rounded aspect-square flex items-center justify-center">
                                <span className="text-[4px] text-blue-400/40">IMG</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern B: Masonry Grid</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">3-column masonry layout. Images maintain original aspect ratios. Varied sizes create visual interest.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">2-column masonry or falls back to uniform grid.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">Mix of landscape and portrait photos. More dynamic look preferred.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/10]">
                          <div className="flex gap-1.5 h-full">
                            <div className="flex-1 flex flex-col gap-1.5">
                              <div className="bg-blue-500/20 rounded h-[60%]"></div>
                              <div className="bg-blue-500/20 rounded flex-1"></div>
                            </div>
                            <div className="flex-1 flex flex-col gap-1.5">
                              <div className="bg-blue-500/20 rounded h-[40%]"></div>
                              <div className="bg-blue-500/20 rounded flex-1"></div>
                            </div>
                            <div className="flex-1 flex flex-col gap-1.5">
                              <div className="bg-blue-500/20 rounded h-[50%]"></div>
                              <div className="bg-blue-500/20 rounded h-[25%]"></div>
                              <div className="bg-blue-500/20 rounded flex-1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16]">
                          <div className="flex gap-1 h-full">
                            <div className="flex-1 flex flex-col gap-1">
                              <div className="bg-blue-500/20 rounded h-[40%]"></div>
                              <div className="bg-blue-500/20 rounded h-[35%]"></div>
                              <div className="bg-blue-500/20 rounded flex-1"></div>
                            </div>
                            <div className="flex-1 flex flex-col gap-1">
                              <div className="bg-blue-500/20 rounded h-[30%]"></div>
                              <div className="bg-blue-500/20 rounded h-[45%]"></div>
                              <div className="bg-blue-500/20 rounded flex-1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area Layouts */}
            <div className="mb-10">
              <h3 className="text-lg font-display font-bold text-brand-accent mb-4 uppercase">Service Area Layouts</h3>

              <div className="space-y-4">
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern A: Multi-Column List</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">3-4 column layout of suburb names. Alphabetical. Region headings if grouped.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">2-column list or single column with region accordion.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">20+ suburbs. Text-focused. Default choice.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/9]">
                          <div className="h-full">
                            <div className="w-1/4 h-2 bg-brand-accent/30 rounded mb-2"></div>
                            <div className="grid grid-cols-4 gap-x-3 gap-y-1">
                              {Array(20).fill(0).map((_, i) => (
                                <div key={i} className="h-1.5 bg-white/10 rounded" style={{width: `${60 + Math.random() * 40}%`}}></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16]">
                          <div className="w-2/3 h-1.5 bg-brand-accent/30 rounded mb-1.5"></div>
                          <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                            {Array(12).fill(0).map((_, i) => (
                              <div key={i} className="h-1 bg-white/10 rounded" style={{width: `${60 + Math.random() * 40}%`}}></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={16} className="text-brand-accent" />
                    <h4 className="text-white font-bold">Pattern B: Map + List</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-brand-muted/60">Desktop:</span>
                      <p className="text-brand-muted">Two columns. Left: embedded map showing coverage. Right: suburb list grouped by region.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Mobile:</span>
                      <p className="text-brand-muted">Map on top (shorter height), list below. Map may be optional on mobile.</p>
                    </div>
                    <div>
                      <span className="text-brand-muted/60">Use when:</span>
                      <p className="text-brand-muted">Visual coverage area helps. Defined regional boundaries.</p>
                    </div>
                  </div>
                  {/* Visual Mockup */}
                  <div className="mt-4 pt-4 border-t border-brand-border/20">
                    <p className="text-xs text-brand-muted/60 mb-3 uppercase tracking-wider">Visual Mockup</p>
                    <div className="flex gap-4">
                      {/* Desktop */}
                      <div className="flex-1">
                        <p className="text-xs text-brand-muted/40 mb-2">Desktop</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-3 aspect-[16/9]">
                          <div className="flex h-full gap-3">
                            <div className="flex-1 bg-green-500/10 rounded border border-green-500/20 flex items-center justify-center relative overflow-hidden">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 border-2 border-brand-accent/30 rounded-full"></div>
                              </div>
                              <span className="text-[8px] text-green-400/40 relative z-10">MAP</span>
                            </div>
                            <div className="w-1/3 flex flex-col gap-2">
                              <div className="w-2/3 h-2 bg-brand-accent/30 rounded"></div>
                              <div className="flex flex-col gap-0.5">
                                {Array(6).fill(0).map((_, i) => (
                                  <div key={i} className="h-1.5 bg-white/10 rounded" style={{width: `${60 + Math.random() * 40}%`}}></div>
                                ))}
                              </div>
                              <div className="w-2/3 h-2 bg-brand-accent/30 rounded mt-1"></div>
                              <div className="flex flex-col gap-0.5">
                                {Array(4).fill(0).map((_, i) => (
                                  <div key={i} className="h-1.5 bg-white/10 rounded" style={{width: `${60 + Math.random() * 40}%`}}></div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="w-20">
                        <p className="text-xs text-brand-muted/40 mb-2">Mobile</p>
                        <div className="bg-brand-black/50 border border-brand-border/20 rounded p-2 aspect-[9/16] flex flex-col gap-2">
                          <div className="h-1/4 bg-green-500/10 rounded border border-green-500/20 flex items-center justify-center">
                            <span className="text-[6px] text-green-400/40">MAP</span>
                          </div>
                          <div className="flex-1 flex flex-col gap-1">
                            <div className="w-1/2 h-1.5 bg-brand-accent/30 rounded"></div>
                            <div className="flex flex-col gap-0.5">
                              {Array(5).fill(0).map((_, i) => (
                                <div key={i} className="h-1 bg-white/10 rounded" style={{width: `${60 + Math.random() * 40}%`}}></div>
                              ))}
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

          {/* Pattern Rules */}
          <section className="reveal">
            <div className="bg-brand-surface/30 border border-brand-accent/30 rounded-xl p-6">
              <h2 className="text-xl font-display font-bold text-white mb-4 uppercase">Pattern Selection Rules</h2>

              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="text-brand-accent font-bold mb-2">General Guidelines</h3>
                  <ul className="text-brand-muted space-y-1">
                    <li>• Choose ONE pattern per section - no mixing</li>
                    <li>• Default to Pattern A unless client content requires otherwise</li>
                    <li>• Mobile behaviour is non-negotiable - follow the spec</li>
                    <li>• Consistency across pages is more important than variety</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-brand-accent font-bold mb-2">Decision Factors</h3>
                  <ul className="text-brand-muted space-y-1">
                    <li>• <strong className="text-white">Has photos?</strong> → Use split/image patterns</li>
                    <li>• <strong className="text-white">No photos?</strong> → Use centred/text patterns</li>
                    <li>• <strong className="text-white">Many items?</strong> → Use list/grouped patterns</li>
                    <li>• <strong className="text-white">Few items?</strong> → Use card/grid patterns</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-brand-accent font-bold mb-2">Do Not</h3>
                  <ul className="text-brand-muted space-y-1">
                    <li>• Create new patterns per client</li>
                    <li>• Mix patterns within a section</li>
                    <li>• Override mobile behaviour</li>
                    <li>• Add decorative elements not in spec</li>
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

export default LayoutPatternLibraryPage;
