import React from 'react';
import { ArrowRight, Smartphone, Users, Building2, Brain, Wifi, Code2, Link2, WifiOff, Store, Rocket, Search, Wrench, TestTube, Clock } from 'lucide-react';

const appSolutions = [
  {
    icon: Users,
    title: "Consumer Apps (B2C)",
    description: "High-polish, engaging interfaces designed for growth, retention, and seamless user journeys."
  },
  {
    icon: Building2,
    title: "Enterprise & Internal Tools",
    description: "Custom apps that streamline your workforce, integrated with your existing CRMs and internal databases."
  },
  {
    icon: Brain,
    title: "AI-Powered Applications",
    description: "Modern apps leveraging LLMs (OpenAI/Claude) for automation, smart search, or personalised user experiences."
  },
  {
    icon: Wifi,
    title: "IoT & Hardware Integration",
    description: "Connecting your mobile software to the physical world via Bluetooth, NFC, or cloud APIs."
  }
];

const valueProps = [
  {
    icon: Code2,
    title: "React Native & Native Excellence",
    description: "We specialise in React Native for speed-to-market without compromising quality, but we go fully Native (Swift/Kotlin) when performance demands it."
  },
  {
    icon: Link2,
    title: "Seamless System Integration",
    description: "Your app doesn't live in a vacuum. We connect it to your existing ERPs, payment gateways (Stripe/Apple Pay), and Auth providers."
  },
  {
    icon: WifiOff,
    title: "Offline-First Capability",
    description: "We build apps that remain functional in low-connectivity environments, syncing data perfectly once back online."
  },
  {
    icon: Store,
    title: "Store-Ready Deployment",
    description: "We handle the entire headache of Apple App Store and Google Play Store submissions, including compliance and metadata."
  }
];

const MobileAppDevelopmentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black">
      {/* Subtle Background */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full">
              <Smartphone size={16} className="text-brand-accent" />
              <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">Mobile App Development</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight uppercase leading-[0.9]">
              High-Performance Mobile Apps.{' '}
              <span className="text-brand-accent">Built for Scale.</span>
            </h1>

            <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              From concept to App Store. We engineer native and cross-platform mobile experiences that solve complex business problems and delight users.
            </p>

            <a
              href="/enquire"
              className="group inline-flex items-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-8 rounded-lg transition-all text-sm"
            >
              Book a Technical Discovery
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        {/* Specialized App Solutions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
                Tailored Mobile <span className="text-brand-accent">Engineering</span>
              </h2>
              <p className="text-brand-muted text-lg max-w-2xl mx-auto">
                We select the right technology based on your business goals, not our preference.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {appSolutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div
                    key={index}
                    className="reveal group bg-brand-surface/20 border border-brand-border/30 rounded-xl p-6 hover:border-brand-accent/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={24} strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                          {solution.title}
                        </h3>
                        <p className="text-brand-muted text-sm leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Verdant for Mobile */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
                Reliable Engineering.{' '}
                <span className="text-brand-accent">Beautiful UX.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 reveal reveal-delay-100">
              {valueProps.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="p-6 bg-brand-surface/20 border border-brand-border/30 rounded-xl hover:border-brand-accent/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing & Engagement */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
                Investment & <span className="text-brand-accent">Timelines</span>
              </h2>
              <p className="text-brand-muted text-lg">
                Building a quality app is an investment in your business infrastructure.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 reveal reveal-delay-100">
              {/* MVP */}
              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-6 hover:border-brand-accent/50 transition-all">
                <p className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-2">MVP</p>
                <p className="text-2xl font-display font-black text-white mb-1">
                  From $20,000 <span className="text-sm font-normal text-brand-muted">AUD</span>
                </p>
                <p className="text-brand-muted text-sm mb-4">Minimum Viable Product</p>
                <div className="flex items-center gap-2 text-sm text-brand-bone mb-4">
                  <Clock size={14} className="text-brand-accent" />
                  <span>8–12 weeks</span>
                </div>
                <p className="text-brand-muted text-xs leading-relaxed">
                  The leanest version of your idea, focused on core value. Perfect for startups or validating new internal tools.
                </p>
              </div>

              {/* Full-Scale */}
              <div className="bg-brand-surface/20 border border-brand-accent/30 rounded-xl p-6 hover:border-brand-accent/50 transition-all relative">
                <div className="absolute -top-3 right-4 px-3 py-1 bg-brand-accent text-brand-black text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Most Common
                </div>
                <p className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-2">Full-Scale Custom</p>
                <p className="text-2xl font-display font-black text-white mb-1">
                  From $45,000 <span className="text-sm font-normal text-brand-muted">AUD</span>
                </p>
                <p className="text-brand-muted text-sm mb-4">Complete Application</p>
                <div className="flex items-center gap-2 text-sm text-brand-bone mb-4">
                  <Clock size={14} className="text-brand-accent" />
                  <span>4–6 months</span>
                </div>
                <p className="text-brand-muted text-xs leading-relaxed">
                  Feature-rich applications with complex logic, multiple integrations, and high-level security.
                </p>
              </div>

              {/* Monthly Support */}
              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-6 hover:border-brand-accent/50 transition-all">
                <p className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-2">Growth & Support</p>
                <p className="text-2xl font-display font-black text-white mb-1">
                  From $1,500 <span className="text-sm font-normal text-brand-muted">/month</span>
                </p>
                <p className="text-brand-muted text-sm mb-4">Ongoing Partnership</p>
                <div className="flex items-center gap-2 text-sm text-brand-bone mb-4">
                  <Clock size={14} className="text-brand-accent" />
                  <span>Continuous</span>
                </div>
                <p className="text-brand-muted text-xs leading-relaxed">
                  Ongoing maintenance, OS updates (iOS/Android versions), and iterative feature releases.
                </p>
              </div>
            </div>

            <div className="text-center mt-8 reveal reveal-delay-200">
              <a
                href="/enquire"
                className="group inline-flex items-center gap-2 text-brand-accent font-bold hover:text-white transition-colors"
              >
                Need a custom scope? Let's talk
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* The Process - The Verdant Way */}
        <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase">
                The Verdant <span className="text-brand-accent">Way</span>
              </h2>
            </div>

            <div className="space-y-4 reveal reveal-delay-100">
              {[
                {
                  step: '01',
                  icon: Search,
                  title: 'Technical Discovery',
                  desc: "We don't just quote; we consult. We audit your requirements and define the right tech stack for your goals."
                },
                {
                  step: '02',
                  icon: Rocket,
                  title: 'Rapid Prototyping',
                  desc: "You'll interact with a clickable prototype before we write a single line of code. No surprises."
                },
                {
                  step: '03',
                  icon: Wrench,
                  title: 'Agile Development',
                  desc: "We work in 2-week sprints. You see the app grow on your own testing device every fortnight."
                },
                {
                  step: '04',
                  icon: TestTube,
                  title: 'QA & Launch',
                  desc: "Rigorous testing across multiple devices and OS versions to ensure a five-star launch."
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 bg-brand-surface/20 border border-brand-border/30 rounded-lg hover:border-brand-accent/30 transition-colors"
                  >
                    <div className="w-12 h-12 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-display font-bold text-white uppercase">{item.title}</h3>
                        <Icon size={16} className="text-brand-accent" />
                      </div>
                      <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase">
                Common <span className="text-brand-accent">Questions</span>
              </h2>
            </div>

            <div className="space-y-4 reveal reveal-delay-100">
              {[
                {
                  q: 'Native or cross-platform?',
                  a: 'React Native works for most projects and cuts development time significantly. We recommend fully native (Swift/Kotlin) only when you need platform-specific features or maximum performance, like intensive graphics or hardware access.'
                },
                {
                  q: 'Who owns the code?',
                  a: 'You do. Once the project is complete and paid for, you own 100% of the intellectual property and source code. No lock-in, no surprises.'
                },
                {
                  q: 'Do you provide the backend/API too?',
                  a: "Yes. We build the 'brains' of the app (the servers and databases) using scalable cloud infrastructure like AWS or Vercel. You get a complete solution, not just a front-end."
                },
                {
                  q: 'What about after launch?',
                  a: 'We offer ongoing support packages covering maintenance, bug fixes, OS updates, and feature development. Analytics help us identify what to improve next.'
                }
              ].map((faq, i) => (
                <div key={i} className="p-5 bg-brand-surface/20 border border-brand-border/30 rounded-lg hover:border-brand-accent/30 transition-colors">
                  <h3 className="text-base font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-2xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
              Ready to <span className="text-brand-accent">Build?</span>
            </h2>
            <p className="text-brand-muted mb-8 text-lg">
              Tell us about your app idea. We'll show you exactly what it takes to bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/enquire"
                className="group inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-8 rounded-lg transition-all text-sm"
              >
                Book a Technical Discovery
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://calendly.com/verdantdigital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-brand-border hover:border-brand-accent text-white hover:text-brand-accent font-bold py-4 px-8 rounded-lg transition-all text-sm"
              >
                Book a Call
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MobileAppDevelopmentPage;
