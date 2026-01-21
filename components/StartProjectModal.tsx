import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import ContactFormModal from './ContactFormModal';
import { trackModalOpen, trackCtaClick } from '../services/analytics';
import { createCheckoutSession, redirectToCheckout } from '../services/stripeService';

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StartProjectModal: React.FC<StartProjectModalProps> = ({ isOpen, onClose }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactModalPrefill, setContactModalPrefill] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      trackModalOpen('start_project');
    }
  }, [isOpen]);

  const handleStartExpressBuild = async () => {
    setIsProcessing(true);
    trackCtaClick('express_build_pay_now', 'start_project_modal');

    try {
      const checkoutUrl = await createCheckoutSession({
        mode: 'subscription',
        successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/tradie`,
        metadata: {
          product: 'tradie_express_build',
          source: 'start_project_modal'
        }
      });

      await redirectToCheckout(checkoutUrl);
    } catch (error) {
      console.error('Checkout error:', error);
      setIsProcessing(false);
      alert('Something went wrong. Please try again or contact us directly.');
    }
  };

  const handleBookCall = () => {
    trackCtaClick('book_call', 'start_project_modal');
    // Open Calendly or contact form for booking
    setContactModalPrefill('Book a Free Call - Express Build');
    setIsContactModalOpen(true);
  };

  const handleSendQuestion = () => {
    trackCtaClick('send_question', 'start_project_modal');
    window.location.href = 'mailto:hello@verdantdigital.com.au?subject=Question%20RE%3A%20Tradie%20Express%20Build';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-brand-black/90 backdrop-blur-md transition-opacity animate-fade-in-up"
        onClick={onClose}
      ></div>

      <div className="relative bg-brand-surface border border-brand-border rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-muted hover:text-white transition-colors z-10 bg-brand-black/50 rounded-full p-2 hover:bg-brand-black"
        >
          <X size={20} />
        </button>

        <div className="p-5 md:p-6">
          {/* Header */}
          <div className="text-center mb-5">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-1">
              How would you like to get started?
            </h2>
            <p className="text-brand-muted text-sm">
              Choose the option that best suits where you're at.
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {/* Option 1: Pay Now (Primary) */}
            <div className="relative bg-brand-black border-2 border-brand-accent rounded-xl p-4">
              <div className="absolute -top-2.5 left-4 bg-brand-accent text-brand-black text-[10px] font-bold uppercase tracking-wider py-0.5 px-2.5 rounded-full">
                Fastest Option
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-1">
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-white mb-0.5">
                    Start Express Build Now
                  </h3>
                  <p className="text-brand-muted text-sm mb-2">
                    Best if you're ready to move forward and want your website live within 7 days.
                  </p>
                  <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-brand-muted">
                    <span>Fixed-scope Express Build</span>
                    <span>•</span>
                    <span>7-day delivery</span>
                    <span>•</span>
                    <span className="text-white font-semibold">$399 + $99/mo</span>
                  </div>
                </div>

                <button
                  onClick={handleStartExpressBuild}
                  disabled={isProcessing}
                  className="group flex items-center justify-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-bold py-2.5 px-5 rounded-lg transition-all text-sm whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    'Processing...'
                  ) : (
                    <>
                      Start Express Build
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-[11px] text-brand-muted/60 mt-2">
                Secure checkout via Stripe • Intake form sent immediately after payment
              </p>
            </div>

            {/* Option 2: Book a Call (Secondary) */}
            <div className="bg-brand-black border border-brand-border rounded-xl p-4 hover:border-brand-muted/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-white mb-0.5 flex items-center gap-2">
                    <Calendar size={18} className="text-brand-muted" />
                    Talk It Through First
                  </h3>
                  <p className="text-brand-muted text-sm mb-1">
                    Best if you're not sure the Express Build is the right fit, or you have questions before committing.
                  </p>
                  <p className="text-xs text-brand-muted/70">
                    15–20 minute call • We'll confirm fit • No obligation
                  </p>
                </div>

                <button
                  onClick={handleBookCall}
                  className="flex items-center justify-center gap-2 bg-transparent border border-brand-border hover:border-brand-accent text-white hover:text-brand-accent font-bold py-2.5 px-5 rounded-lg transition-all text-sm whitespace-nowrap"
                >
                  Book a Free Call
                </button>
              </div>
            </div>

            {/* Option 3: Just Have a Question (Safety Valve) */}
            <div className="bg-brand-surface/50 border border-brand-border/50 rounded-lg p-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-white mb-0.5 flex items-center gap-2">
                    <MessageCircle size={14} className="text-brand-muted" />
                    Just Have a Question?
                  </h3>
                  <p className="text-brand-muted text-xs">
                    Send us a quick question and we'll point you in the right direction.
                  </p>
                </div>

                <button
                  onClick={handleSendQuestion}
                  className="text-brand-muted hover:text-brand-accent text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  Send a Question →
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-brand-border/50 text-center">
            <p className="text-xs text-brand-muted/70 leading-relaxed">
              Not sure which option to choose?<br />
              <span className="text-brand-muted">If you're ready to move forward, start the Express Build.</span><br />
              <span className="text-brand-muted">If you have questions or a more complex setup, book a call first.</span>
            </p>
          </div>
        </div>
      </div>

      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        prefilledHelpWith={contactModalPrefill}
        preSelectPhone={true}
      />
    </div>
  );
};

export default StartProjectModal;
