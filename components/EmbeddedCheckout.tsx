import React, { useCallback, useEffect, useRef, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Loader2, X, AlertCircle } from 'lucide-react';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE);

interface EmbeddedCheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  customerEmail?: string;
  metadata?: Record<string, string>;
}

const EmbeddedCheckout: React.FC<EmbeddedCheckoutProps> = ({
  isOpen,
  onClose,
  customerEmail,
  metadata,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const checkoutRef = useRef<HTMLDivElement>(null);
  const checkoutInstanceRef = useRef<any>(null);

  const initCheckout = useCallback(async () => {
    if (!checkoutRef.current) return;

    setLoading(true);
    setError(null);

    try {
      // Create embedded checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'subscription',
          customerEmail,
          metadata,
          embedded: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { clientSecret } = await response.json();

      if (!clientSecret) {
        throw new Error('No client secret returned');
      }

      // Load Stripe and mount embedded checkout
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Failed to load Stripe');
      }

      // Destroy previous instance if exists
      if (checkoutInstanceRef.current) {
        checkoutInstanceRef.current.destroy();
      }

      // Mount embedded checkout
      const checkout = await stripe.initEmbeddedCheckout({
        clientSecret,
      });

      checkoutInstanceRef.current = checkout;
      checkout.mount(checkoutRef.current);
      setLoading(false);
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : 'Failed to load checkout');
      setLoading(false);
    }
  }, [customerEmail, metadata]);

  useEffect(() => {
    if (isOpen) {
      initCheckout();
    }

    return () => {
      if (checkoutInstanceRef.current) {
        checkoutInstanceRef.current.destroy();
        checkoutInstanceRef.current = null;
      }
    };
  }, [isOpen, initCheckout]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-brand-black border border-brand-border/50 rounded-2xl overflow-hidden shadow-2xl mx-4">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border/30">
          <div>
            <h2 className="text-xl font-display font-bold text-white">
              Complete Your Order
            </h2>
            <p className="text-sm text-brand-muted mt-1">
              Tradie Express Build • $399 + $99/mo
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-brand-muted hover:text-white hover:bg-brand-surface rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Checkout Container */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 size={32} className="text-brand-accent animate-spin mb-4" />
              <p className="text-brand-muted">Loading secure checkout...</p>
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center justify-center py-20 px-6">
              <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
                <AlertCircle size={24} className="text-red-500" />
              </div>
              <p className="text-white font-medium mb-2">Unable to load checkout</p>
              <p className="text-brand-muted text-sm text-center mb-4">{error}</p>
              <button
                onClick={initCheckout}
                className="px-4 py-2 bg-brand-accent text-brand-black font-semibold rounded-lg hover:bg-white transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Stripe Embedded Checkout mounts here */}
          <div
            ref={checkoutRef}
            className={loading || error ? 'hidden' : 'min-h-[400px]'}
          />
        </div>
      </div>
    </div>
  );
};

export default EmbeddedCheckout;
