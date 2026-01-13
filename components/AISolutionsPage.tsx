import React from 'react';
import { ArrowRight, Brain, Shield, Users, Layers, Database, Bot, FileText, Zap, Target, Rocket, CheckCircle } from 'lucide-react';

const AISolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black">
      {/* Fixed ambient glows */}
      <div className="fixed top-0 right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="fixed top-1/2 right-0 w-72 h-72 bg-blue-500/8 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center reveal">
            {/* Gradient Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gradient-to-r from-brand-accent/20 to-brand-accent/10 border border-brand-accent/30 rounded-full backdrop-blur-sm">
              <Brain size={16} className="text-brand-accent" />
              <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">AI Solutions Lab</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white mb-6 tracking-tight uppercase leading-[0.95]">
              Deploy Intelligence.{' '}
              <span className="text-brand-accent inline-block relative">
                Automate Excellence.
                <div className="absolute -inset-4 bg-brand-accent/10 blur-xl -z-10"></div>
              </span>
            </h1>

            <p className="text-brand-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              We bridge the gap between AI hype and business reality. Verdant builds custom AI agents and automated workflows that integrate directly into your existing tech stack.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/enquire"
                className="group inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-8 rounded-lg transition-all text-sm shadow-[0_4px_14px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,179,0.6)] hover:scale-[1.02]"
              >
                Audit My Workflow
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-brand-accent/50 hover:border-brand-accent text-white hover:text-brand-accent font-bold py-4 px-8 rounded-lg transition-all text-sm hover:bg-brand-accent/5"
              >
                See What We Build
              </a>
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
                Tailored AI <span className="text-brand-accent">Implementation</span>
              </h2>
              <p className="text-brand-muted text-lg max-w-2xl mx-auto">
                AI shouldn't be a separate app. It should be the engine inside the tools you already use.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Database,
                  title: 'Knowledge Bases & RAG',
                  desc: "We turn your company's PDFs, Notion pages, and docs into a private, searchable \"Oracle\" that answers team questions instantly.",
                  color: 'from-blue-500/10 to-brand-accent/10'
                },
                {
                  icon: Bot,
                  title: 'Agentic Workflows',
                  desc: "AI \"Agents\" that don't just talk, but do. They can draft emails, update your CRM, and move data between apps based on logic.",
                  color: 'from-brand-accent/10 to-green-500/10'
                },
                {
                  icon: Layers,
                  title: 'Custom LLM Integration',
                  desc: 'Plugging models like Claude 3.5 or GPT-4o into your proprietary software to provide summaries, sentiment analysis, or code generation.',
                  color: 'from-purple-500/10 to-brand-accent/10'
                },
                {
                  icon: FileText,
                  title: 'Automated Content Pipelines',
                  desc: 'Large-scale generation of SEO content, product descriptions, or social posts, all filtered through your brand voice.',
                  color: 'from-yellow-500/10 to-brand-accent/10'
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className={`reveal reveal-delay-${(i + 1) * 100} group relative bg-gradient-to-br ${item.color} border border-brand-border/50 rounded-2xl p-6 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,179,0.1)]`}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent/50 via-brand-accent to-brand-accent/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/30 rounded-xl flex items-center justify-center text-brand-accent flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={24} strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why the "Lab" Approach - Trust Building */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
                Why the <span className="text-brand-accent">"Lab"</span> Approach?
              </h2>
              <p className="text-brand-muted text-lg max-w-2xl mx-auto">
                Practical AI. Not Science Fiction.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Security-First',
                  desc: 'We prioritise data privacy. Your proprietary data is never used to train public models. We use "Zero-Retention" APIs and VPC deployments.',
                  gradient: 'from-blue-500/15 to-brand-accent/10'
                },
                {
                  icon: Users,
                  title: 'Human-in-the-Loop',
                  desc: 'We build systems where AI does the heavy lifting (90%) and a human provides the final "Golden Stamp" (10%), ensuring 100% accuracy.',
                  gradient: 'from-brand-accent/15 to-green-500/10'
                },
                {
                  icon: Layers,
                  title: 'Tech-Agnostic',
                  desc: "Whether it's OpenAI, Anthropic, or open-source models like Llama 3 running on AWS, we use the tool that fits your budget and security needs.",
                  gradient: 'from-purple-500/15 to-brand-accent/10'
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className={`reveal reveal-delay-${(i + 1) * 100} group relative bg-gradient-to-br ${item.gradient} border border-brand-border/50 rounded-2xl p-8 hover:border-brand-accent/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,255,179,0.15)]`}
                  >
                    <div className="w-16 h-16 bg-brand-accent/15 border border-brand-accent/30 rounded-2xl flex items-center justify-center text-brand-accent mb-5 group-hover:scale-110 group-hover:bg-brand-accent/20 transition-all">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing & Pilot Programs */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
                Investment <span className="text-brand-accent">Tiers</span>
              </h2>
              <p className="text-brand-muted text-lg max-w-2xl mx-auto">
                Start small, prove the ROI, then scale.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Discovery & Pilot */}
              <div className="reveal reveal-delay-100 group relative bg-gradient-to-br from-brand-surface/40 to-brand-surface/20 border border-brand-border/50 rounded-2xl p-8 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,179,0.1)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent/50 via-brand-accent to-brand-accent/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-accent/15 border border-brand-accent/30 rounded-xl flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                    <Target size={20} strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Most Popular</span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2">AI Discovery & Pilot</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-brand-muted text-sm">Starts From:</span>
                  <span className="text-3xl font-display font-black text-brand-accent">$6,500</span>
                  <span className="text-brand-muted text-sm">AUD</span>
                </div>

                <p className="text-brand-muted text-sm mb-6 leading-relaxed">
                  A 3-week deep dive. We audit your workflows, identify the "Highest ROI" opportunity, and build a functioning Proof of Concept (PoC).
                </p>

                <ul className="space-y-3 mb-8">
                  {['Workflow audit & mapping', 'ROI opportunity analysis', 'Working PoC delivery', 'Implementation roadmap'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-bone">
                      <CheckCircle size={16} className="text-brand-accent mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="/enquire"
                  className="block w-full text-center bg-brand-accent hover:bg-white text-brand-black font-bold py-3 px-6 rounded-lg transition-all text-sm"
                >
                  Start Discovery
                </a>
              </div>

              {/* Custom AI Integration */}
              <div className="reveal reveal-delay-200 group relative bg-gradient-to-br from-brand-surface/40 to-brand-surface/20 border border-brand-border/50 rounded-2xl p-8 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,179,0.1)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent/50 via-brand-accent to-brand-accent/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-accent/15 border border-brand-accent/30 rounded-xl flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                    <Zap size={20} strokeWidth={2} />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2">Custom AI Integration</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-brand-muted text-sm">Starts From:</span>
                  <span className="text-3xl font-display font-black text-brand-accent">$15,000</span>
                  <span className="text-brand-muted text-sm">AUD</span>
                </div>

                <p className="text-brand-muted text-sm mb-6 leading-relaxed">
                  A production-ready solution. Full integration into your CRM/Slack/Software, employee training, and security hardening.
                </p>

                <ul className="space-y-3 mb-8">
                  {['Full system integration', 'Security hardening', 'Team training included', 'Ongoing support period'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-bone">
                      <CheckCircle size={16} className="text-brand-accent mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="/enquire"
                  className="block w-full text-center bg-transparent border-2 border-brand-accent/50 hover:border-brand-accent hover:bg-brand-accent/10 text-white font-bold py-3 px-6 rounded-lg transition-all text-sm"
                >
                  Get Started
                </a>
              </div>

              {/* Enterprise Automation */}
              <div className="reveal reveal-delay-300 group relative bg-gradient-to-br from-brand-surface/40 to-brand-surface/20 border border-brand-border/50 rounded-2xl p-8 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,179,0.1)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent/50 via-brand-accent to-brand-accent/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-accent/15 border border-brand-accent/30 rounded-xl flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                    <Rocket size={20} strokeWidth={2} />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2">Enterprise Automation</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-display font-black text-brand-accent">Custom Quote</span>
                </div>

                <p className="text-brand-muted text-sm mb-6 leading-relaxed">
                  Multi-agent systems, local model hosting (on-prem), and large-scale data processing pipelines.
                </p>

                <ul className="space-y-3 mb-8">
                  {['Multi-agent orchestration', 'On-premise deployment', 'Data pipeline architecture', 'Dedicated support team'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-bone">
                      <CheckCircle size={16} className="text-brand-accent mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="/enquire"
                  className="block w-full text-center bg-transparent border-2 border-brand-accent/50 hover:border-brand-accent hover:bg-brand-accent/10 text-white font-bold py-3 px-6 rounded-lg transition-all text-sm"
                >
                  Talk to Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Updated FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-10 uppercase text-center reveal">
              Honest <span className="text-brand-accent">Answers</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Will AI replace my staff?',
                  a: "We view AI as an \"Exoskeleton.\" It makes your existing team 10x more productive by removing the \"boring\" work, allowing them to focus on high-value strategy and creativity."
                },
                {
                  q: "How do we know it's working?",
                  a: "We set \"Accuracy Benchmarks\" during the pilot phase. If the AI doesn't hit a 95%+ success rate on a task, we don't deploy it to production until it does."
                },
                {
                  q: 'What if the AI makes a mistake (hallucinates)?',
                  a: 'We use a technique called RAG (Retrieval-Augmented Generation) which forces the AI to only answer using your provided documents, drastically reducing the risk of it making things up.'
                },
                {
                  q: 'What about our data security?',
                  a: "We use enterprise AI providers with SOC 2 compliance. Your data is never used to train public models. For highly sensitive data, we can deploy fully private, on-premise AI solutions."
                },
                {
                  q: 'Do we need to hire AI people?',
                  a: "No. We handle the technical side completely. Your team just uses the tools we build. We provide training and documentation for anything user-facing."
                }
              ].map((faq, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${(i + 1) * 100} group p-6 bg-gradient-to-br from-brand-surface/30 to-brand-surface/10 border border-brand-border/30 rounded-xl hover:border-brand-accent/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,179,0.08)]`}
                >
                  <h3 className="text-base font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">{faq.q}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="reveal relative bg-gradient-to-br from-brand-surface/50 to-brand-surface/20 border border-brand-border/30 rounded-3xl p-12 md:p-16 overflow-hidden">
              {/* Ambient glows inside CTA */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px] pointer-events-none"></div>

              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6 uppercase">
                  Ready to Deploy <span className="text-brand-accent">Intelligence?</span>
                </h2>
                <p className="text-brand-muted text-lg mb-10 max-w-xl mx-auto">
                  Tell us what eats up your team's time. We'll show you exactly where AI can give you hours back.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/enquire"
                    className="group inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-10 rounded-lg transition-all text-sm shadow-[0_4px_14px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,179,0.6)] hover:scale-[1.02]"
                  >
                    Start With a Discovery Call
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://calendly.com/verdantdigital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-brand-accent/50 hover:border-brand-accent text-white hover:text-brand-accent font-bold py-4 px-10 rounded-lg transition-all text-sm hover:bg-brand-accent/5"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AISolutionsPage;
