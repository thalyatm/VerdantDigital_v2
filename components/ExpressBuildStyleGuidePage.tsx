import React from 'react';
import { Palette, Type, Layout, Image, Info, CheckCircle } from 'lucide-react';

const ExpressBuildStyleGuidePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black">
      {/* Subtle Background */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Header */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center reveal">
            <h1 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
              Express Build <span className="text-brand-accent">Style Guide</span>
            </h1>
            <p className="text-brand-muted text-base md:text-lg leading-relaxed">
              This guide helps you share any preferences you have, without slowing down delivery.
              If you're unsure about anything, leave it to us. That's perfectly fine.
            </p>
          </div>
        </section>

        {/* Colour Direction */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-4xl mx-auto reveal">
            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center">
                <Palette size={20} className="text-brand-accent" />
              </div>
              <h2 className="text-xl font-display font-bold text-white uppercase text-center">Colour Direction</h2>
            </div>
            <p className="text-brand-muted text-sm mb-6 text-center">
              Choose one direction that feels right for your business, or leave it to Verdant.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-3">
                <h3 className="text-white font-semibold text-sm mb-1">Clean & Trustworthy</h3>
                <p className="text-brand-muted text-xs mb-2">Professional and reliable. Whites, greys, with a single accent colour.</p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded bg-white border border-brand-border/30"></div>
                  <div className="w-6 h-6 rounded bg-gray-200"></div>
                  <div className="w-6 h-6 rounded bg-gray-600"></div>
                  <div className="w-6 h-6 rounded bg-blue-600"></div>
                </div>
              </div>

              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-3">
                <h3 className="text-white font-semibold text-sm mb-1">Bold & Modern</h3>
                <p className="text-brand-muted text-xs mb-2">Strong and confident. Dark backgrounds with vibrant accent colours.</p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded bg-gray-900 border border-brand-border/30"></div>
                  <div className="w-6 h-6 rounded bg-gray-800"></div>
                  <div className="w-6 h-6 rounded bg-brand-accent"></div>
                  <div className="w-6 h-6 rounded bg-white"></div>
                </div>
              </div>

              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-3">
                <h3 className="text-white font-semibold text-sm mb-1">Warm & Approachable</h3>
                <p className="text-brand-muted text-xs mb-2">Friendly and inviting. Earthy tones with warm accents.</p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded bg-amber-50 border border-brand-border/30"></div>
                  <div className="w-6 h-6 rounded bg-stone-300"></div>
                  <div className="w-6 h-6 rounded bg-stone-600"></div>
                  <div className="w-6 h-6 rounded bg-orange-500"></div>
                </div>
              </div>

              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-3">
                <h3 className="text-white font-semibold text-sm mb-1">Trade Classic</h3>
                <p className="text-brand-muted text-xs mb-2">Traditional trade look. Navy, charcoal, or forest green with gold or white accents.</p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded bg-slate-800 border border-brand-border/30"></div>
                  <div className="w-6 h-6 rounded bg-slate-600"></div>
                  <div className="w-6 h-6 rounded bg-amber-400"></div>
                  <div className="w-6 h-6 rounded bg-white"></div>
                </div>
              </div>

              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-3">
                <h3 className="text-white font-semibold text-sm mb-1">Coastal & Fresh</h3>
                <p className="text-brand-muted text-xs mb-2">Light and airy. Blues, teals, and sandy neutrals.</p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded bg-sky-100 border border-brand-border/30"></div>
                  <div className="w-6 h-6 rounded bg-cyan-500"></div>
                  <div className="w-6 h-6 rounded bg-teal-600"></div>
                  <div className="w-6 h-6 rounded bg-amber-100"></div>
                </div>
              </div>

              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-3">
                <h3 className="text-white font-semibold text-sm mb-1">Industrial & Rugged</h3>
                <p className="text-brand-muted text-xs mb-2">Strong and hardworking. Greys, blacks, with rust or orange accents.</p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded bg-zinc-800 border border-brand-border/30"></div>
                  <div className="w-6 h-6 rounded bg-zinc-500"></div>
                  <div className="w-6 h-6 rounded bg-orange-600"></div>
                  <div className="w-6 h-6 rounded bg-zinc-300"></div>
                </div>
              </div>

              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-3">
                <h3 className="text-white font-semibold text-sm mb-1">Natural & Grounded</h3>
                <p className="text-brand-muted text-xs mb-2">Earthy and organic. Greens, browns, and cream tones.</p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded bg-emerald-700 border border-brand-border/30"></div>
                  <div className="w-6 h-6 rounded bg-lime-600"></div>
                  <div className="w-6 h-6 rounded bg-amber-800"></div>
                  <div className="w-6 h-6 rounded bg-amber-50"></div>
                </div>
              </div>

              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-3">
                <h3 className="text-white font-semibold text-sm mb-1">High Contrast</h3>
                <p className="text-brand-muted text-xs mb-2">Sharp and striking. Black and white with one bold accent.</p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded bg-black border border-brand-border/30"></div>
                  <div className="w-6 h-6 rounded bg-white border border-brand-border/30"></div>
                  <div className="w-6 h-6 rounded bg-red-600"></div>
                  <div className="w-6 h-6 rounded bg-gray-400"></div>
                </div>
              </div>

              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-3">
                <h3 className="text-white font-semibold text-sm mb-1">Luxe & Premium</h3>
                <p className="text-brand-muted text-xs mb-2">Sophisticated and upscale. Deep tones with gold or metallic accents.</p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded bg-slate-900 border border-brand-border/30"></div>
                  <div className="w-6 h-6 rounded bg-amber-600"></div>
                  <div className="w-6 h-6 rounded bg-stone-200"></div>
                  <div className="w-6 h-6 rounded bg-amber-200"></div>
                </div>
              </div>

              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-3">
                <h3 className="text-white font-semibold text-sm mb-1">Minimal & Sleek</h3>
                <p className="text-brand-muted text-xs mb-2">Ultra-clean and refined. Lots of white space with subtle greys.</p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded bg-white border border-brand-border/30"></div>
                  <div className="w-6 h-6 rounded bg-gray-100"></div>
                  <div className="w-6 h-6 rounded bg-gray-400"></div>
                  <div className="w-6 h-6 rounded bg-gray-900"></div>
                </div>
              </div>

              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-3">
                <h3 className="text-white font-semibold text-sm mb-1">Bright & Energetic</h3>
                <p className="text-brand-muted text-xs mb-2">Vibrant and lively. Bold colours that grab attention.</p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded bg-yellow-400 border border-brand-border/30"></div>
                  <div className="w-6 h-6 rounded bg-orange-500"></div>
                  <div className="w-6 h-6 rounded bg-pink-500"></div>
                  <div className="w-6 h-6 rounded bg-white"></div>
                </div>
              </div>

              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-3">
                <h3 className="text-white font-semibold text-sm mb-1">Heritage & Timeless</h3>
                <p className="text-brand-muted text-xs mb-2">Classic and established. Muted, traditional tones that feel trusted.</p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded bg-stone-700 border border-brand-border/30"></div>
                  <div className="w-6 h-6 rounded bg-amber-900"></div>
                  <div className="w-6 h-6 rounded bg-stone-400"></div>
                  <div className="w-6 h-6 rounded bg-stone-100"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography & Tone */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-2xl mx-auto reveal">
            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center">
                <Type size={20} className="text-brand-accent" />
              </div>
              <h2 className="text-xl font-display font-bold text-white uppercase text-center">Tone of Voice</h2>
            </div>
            <p className="text-brand-muted text-sm mb-6 text-center">
              This affects how your website copy reads, not how it looks.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Straightforward & Professional</h3>
                <p className="text-brand-muted text-sm">Direct, no-nonsense language. Facts first. Builds trust through clarity.</p>
                <p className="text-brand-muted/60 text-xs mt-3 italic">"We deliver quality work on time, every time."</p>
              </div>

              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Friendly & Approachable</h3>
                <p className="text-brand-muted text-sm">Conversational and warm. Feels like talking to a real person.</p>
                <p className="text-brand-muted/60 text-xs mt-3 italic">"Got a job that needs doing? Let's have a chat."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Layout Feel */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-2xl mx-auto reveal">
            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center">
                <Layout size={20} className="text-brand-accent" />
              </div>
              <h2 className="text-xl font-display font-bold text-white uppercase text-center">Layout Feel</h2>
            </div>
            <p className="text-brand-muted text-sm mb-6 text-center">
              How the overall page structure feels. We handle the technical details.
            </p>

            <div className="space-y-4">
              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Simple & Direct</h3>
                <p className="text-brand-muted text-sm">Clean layouts with plenty of white space. Easy to scan. Gets straight to the point.</p>
              </div>

              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Structured & Informative</h3>
                <p className="text-brand-muted text-sm">More content sections. Good for businesses with multiple services or detailed information.</p>
              </div>

              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Bold & Visual</h3>
                <p className="text-brand-muted text-sm">Larger images, stronger colours, more visual impact. Works well if you have great job photos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Imagery Style */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-2xl mx-auto reveal">
            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center">
                <Image size={20} className="text-brand-accent" />
              </div>
              <h2 className="text-xl font-display font-bold text-white uppercase text-center">Imagery Style</h2>
            </div>
            <p className="text-brand-muted text-sm mb-6 text-center">
              Quality matters more than quantity. A few good images work better than many poor ones.
            </p>

            <div className="space-y-4">
              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Real Job Photos</h3>
                <p className="text-brand-muted text-sm">Your own photos from completed work. Authentic and builds trust with local customers.</p>
              </div>

              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Clean Stock Imagery</h3>
                <p className="text-brand-muted text-sm">Professional stock photos that match your trade. Polished and consistent.</p>
              </div>

              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Mixed Approach</h3>
                <p className="text-brand-muted text-sm">A combination of your real photos and stock imagery where needed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What This Guide Is NOT */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-2xl mx-auto reveal">
            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-muted/10 border border-brand-border/30 rounded-lg flex items-center justify-center">
                <Info size={20} className="text-brand-muted" />
              </div>
              <h2 className="text-xl font-display font-bold text-white uppercase text-center">What This Guide Is Not</h2>
            </div>

            <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
              <ul className="space-y-3 text-brand-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-brand-muted/60 mt-0.5">-</span>
                  <span>This is not a design brief or a menu of options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-muted/60 mt-0.5">-</span>
                  <span>We handle layout, spacing, responsiveness, and performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-muted/60 mt-0.5">-</span>
                  <span>Preferences are considered, not debated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-muted/60 mt-0.5">-</span>
                  <span>Final design decisions rest with us to ensure quality and speed</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How Preferences Are Used */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-2xl mx-auto reveal">
            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center">
                <CheckCircle size={20} className="text-brand-accent" />
              </div>
              <h2 className="text-xl font-display font-bold text-white uppercase text-center">How Preferences Are Used</h2>
            </div>

            <div className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-5">
              <ul className="space-y-3 text-brand-muted text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>Your preferences guide the build direction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>Verdant applies them consistently across the site</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>The site is delivered as a complete, working solution</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Close */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20 mb-8">
          <div className="max-w-2xl mx-auto text-center reveal">
            <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-6">
              <p className="text-white text-base mb-3">
                Don't feel you need to choose everything.
              </p>
              <p className="text-brand-muted text-sm mb-4">
                If you're unsure, leaving decisions to us is perfectly fine.
                The goal is a site that works for your business, not endless options.
              </p>
              <p className="text-brand-accent text-sm font-semibold">
                We've got you covered.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExpressBuildStyleGuidePage;
